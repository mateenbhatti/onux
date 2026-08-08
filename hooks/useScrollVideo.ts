'use client';

import { useEffect, useRef, useState } from 'react';

export interface UseScrollVideoOptions {
  /**
   * Called with journey progress (0–1) on every animation frame that produces
   * a change. Runs inside requestAnimationFrame — keep it cheap and prefer
   * direct DOM writes / refs over React state to avoid per-frame re-renders.
   */
  onProgress?: (progress: number) => void;
  /**
   * Where to freeze the video when reduced motion is preferred, expressed as a
   * fraction (0–1) of the clip. A late frame shows a representative macro grain.
   */
  reducedMotionAt?: number;
}

export interface UseScrollVideoReturn {
  /** Attach to the tall scroll section that drives the scrub. */
  sectionRef: React.RefObject<HTMLDivElement>;
  /** Attach to the <video> element. */
  videoRef: React.RefObject<HTMLVideoElement>;
  /** True once video metadata (duration) is known. */
  ready: boolean;
  /** True when the user prefers reduced motion (scrubbing disabled). */
  reducedMotion: boolean;
}

/**
 * Scroll-scrubbed video.
 *
 * The video stays PAUSED at all times. Scroll position is mapped to
 * `video.currentTime` so the user physically drives the camera — forward
 * scroll advances the clip, backward scroll rewinds it.
 *
 * Design notes:
 *  - Progress is derived from the section's own geometry (works with any
 *    section height and after resize).
 *  - `video.duration` is read after `loadedmetadata` — the 15s figure is
 *    never hard-coded.
 *  - Seeks are throttled to frame granularity and coalesced through a single
 *    requestAnimationFrame loop; scroll listeners are passive.
 *  - No React state changes while scrubbing (only `ready` once, at start).
 *  - Honors `prefers-reduced-motion`: no scroll wiring, one static frame.
 */
export function useScrollVideo(
  options: UseScrollVideoOptions = {},
): UseScrollVideoReturn {
  const { onProgress, reducedMotionAt = 0.6 } = options;

  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Keep the latest onProgress without re-subscribing the rAF loop.
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');

    let duration = 0;
    let rafId = 0;
    let queued = false;
    let lastSetTime = -1;
    let lastProgress = -1;

    // Cached geometry (refreshed on resize / metadata).
    let sectionTop = 0;
    let scrubRange = 1;

    const measure = () => {
      const rect = section.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      // The sticky child is pinned for (sectionHeight - viewportHeight).
      scrubRange = Math.max(1, section.offsetHeight - window.innerHeight);
    };

    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

    const getProgress = () =>
      clamp01((window.scrollY - sectionTop) / scrubRange);

    const applyReducedFrame = () => {
      if (!duration) return;
      const t = clamp01(reducedMotionAt) * duration;
      try {
        video.currentTime = Math.min(t, duration - 0.05);
      } catch {
        /* seek may be briefly unavailable */
      }
      onProgressRef.current?.(clamp01(reducedMotionAt));
    };

    // The single render step — runs only when a frame is queued.
    const render = () => {
      queued = false;
      const progress = getProgress();

      if (progress !== lastProgress) {
        lastProgress = progress;
        onProgressRef.current?.(progress);
      }

      if (duration > 0) {
        // Stay a hair before the very end so the final frame actually paints
        // (currentTime === duration can trigger `ended` and blank the frame).
        const target = Math.min(progress * duration, duration - 0.04);
        // Only seek when the change is visible (≈ one 30fps frame).
        if (Math.abs(target - lastSetTime) > 0.033) {
          lastSetTime = target;
          try {
            video.currentTime = target;
          } catch {
            /* ignore transient seek errors */
          }
        }
      }
    };

    const queueRender = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(render);
    };

    const onResize = () => {
      measure();
      queueRender();
    };

    const onLoadedMetadata = () => {
      duration = video.duration || 0;
      setReady(true);
      measure();
      if (mql.matches) {
        applyReducedFrame();
      } else {
        queueRender();
      }
    };

    const enableScrubbing = () => {
      window.addEventListener('scroll', queueRender, { passive: true });
      window.addEventListener('resize', onResize);
      window.addEventListener('orientationchange', onResize);
    };

    const disableScrubbing = () => {
      window.removeEventListener('scroll', queueRender);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };

    const onMotionPrefChange = () => {
      const reduce = mql.matches;
      setReducedMotion(reduce);
      if (reduce) {
        disableScrubbing();
        applyReducedFrame();
      } else {
        enableScrubbing();
        measure();
        queueRender();
      }
    };

    // Video must never play — enforce paused even if something calls play().
    const keepPaused = () => {
      if (!video.paused) video.pause();
    };

    // Init
    setReducedMotion(mql.matches);
    video.pause();
    video.addEventListener('play', keepPaused);
    video.addEventListener('loadedmetadata', onLoadedMetadata);

    // Measure immediately — the section height is viewport-based, so geometry
    // is valid before metadata arrives. This keeps progress correct even if
    // `loadedmetadata` is slow (or the video fails to decode entirely).
    measure();

    if (!mql.matches) {
      enableScrubbing();
      queueRender();
    }

    // If metadata is already available (cached video), initialise now.
    if (video.readyState >= 1) onLoadedMetadata();

    // React to changes in the motion preference at runtime.
    if (mql.addEventListener) mql.addEventListener('change', onMotionPrefChange);
    else mql.addListener(onMotionPrefChange);

    return () => {
      cancelAnimationFrame(rafId);
      disableScrubbing();
      video.removeEventListener('play', keepPaused);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      if (mql.removeEventListener)
        mql.removeEventListener('change', onMotionPrefChange);
      else mql.removeListener(onMotionPrefChange);
    };
  }, [reducedMotionAt]);

  return { sectionRef, videoRef, ready, reducedMotion };
}
