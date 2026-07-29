'use client';

import { useEffect, useRef } from 'react';
import { createFrameSet, type FrameSet } from '@/lib/video/frameLoader';
import { scrub, uiStore } from '@/lib/interaction/store';
import { clamp, damp, lerp } from '@/lib/interaction/math';
import { sequence, cameraMarks } from '@/lib/content';

/**
 * The single pinned canvas that IS the film. It reads the shared scrub store
 * every frame and never re-renders React. Pointer parallax is applied as an
 * overscan zoom + translate so the user feels like they are nudging a virtual
 * camera rather than dragging a video element.
 */
export default function FrameStage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: false })!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frameset: FrameSet | null = null;
    // Prioritise just the hero window so first paint is fast; the rest of the
    // orbit + engine reveal stream in the background while the user reads.
    const priorityCount = Math.ceil(
      sequence.totalFrames * (cameraMarks.heroFrontEnd + 0.1)
    );
    frameset = createFrameSet({
      priorityCount,
      onPriorityProgress: (p) => {
        uiStore.set({ loaded: p });
        if (p >= 1) uiStore.set({ ready: true });
      },
    });

    // ---- sizing / DPR ----
    let vw = 0;
    let vh = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      vw = window.innerWidth;
      vh = window.innerHeight;
      canvas.width = Math.round(vw * dpr);
      canvas.height = Math.round(vh * dpr);
      canvas.style.width = vw + 'px';
      canvas.style.height = vh + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // ---- eased state ----
    let curFrame = 0;
    let px = 0.5; // eased pointer x
    let py = 0.5;
    let scrubOff = 0; // eased pointer scrub
    let last = performance.now();

    const drawImageCover = (
      img: HTMLImageElement,
      offsetX: number,
      offsetY: number,
      zoom: number
    ) => {
      const iw = img.naturalWidth || 1280;
      const ih = img.naturalHeight || 720;
      const scale = Math.max(vw / iw, vh / ih) * zoom;
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (vw - dw) / 2 + offsetX;
      const dy = (vh - dh) / 2 + offsetY;
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    let raf = 0;
    const render = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      // --- target frame from scroll + hero pointer micro-scrub ---
      const heroWindow = (cameraMarks.heroFrontEnd - cameraMarks.heroFront) * 0.9;
      const pointerContribution =
        scrub.pointerScrub * heroWindow * scrub.heroInfluence;
      const targetNorm = clamp(scrub.scrollTarget + pointerContribution);
      const targetFrame = targetNorm * (sequence.totalFrames - 1);

      if (reduce) {
        curFrame = targetFrame;
        px = 0.5;
        py = 0.5;
        scrubOff = 0;
      } else {
        // snappier when far, gentle inertia when close → cinematic settle
        const dist = Math.abs(targetFrame - curFrame);
        const speed = lerp(7, 12, clamp(dist / 40));
        curFrame = damp(curFrame, targetFrame, speed, dt);
        px = damp(px, scrub.pointerX, 5, dt);
        py = damp(py, scrub.pointerY, 5, dt);
        scrubOff = damp(scrubOff, scrub.pointerScrub, 6, dt);
      }

      const img = frameset!.getNearest(curFrame);

      ctx.fillStyle = '#050608';
      ctx.fillRect(0, 0, vw, vh);

      if (img) {
        // Overscan zoom gives room to translate without exposing edges.
        const influence = scrub.heroInfluence;
        const baseZoom = 1.06;
        const parallaxZoom = baseZoom + 0.04 * influence;
        const maxShiftX = vw * 0.045 * influence;
        const maxShiftY = vh * 0.04 * influence;
        const offX = (0.5 - px) * 2 * maxShiftX;
        const offY = (0.5 - py) * 2 * maxShiftY;
        drawImageCover(img, offX, offY, parallaxZoom);

        // --- cinematic lighting: soft radial follow + vignette ---
        const gx = px * vw;
        const gy = py * vh;
        const glow = ctx.createRadialGradient(
          gx,
          gy,
          0,
          gx,
          gy,
          Math.max(vw, vh) * 0.55
        );
        const glowStrength = 0.14 * influence;
        glow.addColorStop(0, `rgba(170,190,210,${glowStrength})`);
        glow.addColorStop(1, 'rgba(150,170,190,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, vw, vh);
      }

      // vignette (always) — anchors focus to centre
      const vig = ctx.createRadialGradient(
        vw / 2,
        vh * 0.52,
        Math.min(vw, vh) * 0.28,
        vw / 2,
        vh * 0.52,
        Math.max(vw, vh) * 0.75
      );
      vig.addColorStop(0, 'rgba(5,6,8,0)');
      vig.addColorStop(1, 'rgba(5,6,8,0.5)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, vw, vh);

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-ink-950" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
