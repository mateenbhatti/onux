'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useScrollVideo } from '@/hooks/useScrollVideo';
import { journeyStages, stageIndexForProgress } from '@/data/journeyStages';
import { hero, asset } from '@/data/siteContent';
import JourneyStage from './JourneyStage';
import ProgressIndicator from './ProgressIndicator';

export default function RiceJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const stageWrapRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  const activeIndexRef = useRef(0);

  useEffect(() => setMounted(true), []);

  // Runs inside rAF on every progress change. Direct DOM writes only; React
  // state changes just once per stage boundary crossing.
  const onProgress = useCallback((p: number) => {
    // Hero crossfades out over the first sliver of the journey.
    if (heroRef.current) {
      const o = Math.max(0, 1 - p / 0.05);
      heroRef.current.style.opacity = String(o);
      heroRef.current.style.transform = `translateY(${(1 - o) * -14}px)`;
      heroRef.current.style.pointerEvents = o < 0.05 ? 'none' : 'auto';
    }
    if (hintRef.current) {
      hintRef.current.style.opacity = String(Math.max(0, 1 - p / 0.03));
    }
    // Stage text fades in just after the hero begins to leave.
    if (stageWrapRef.current) {
      const o = Math.min(1, Math.max(0, (p - 0.03) / 0.03));
      stageWrapRef.current.style.opacity = String(o);
    }
    // Mobile progress bar tracks scroll directly.
    if (barRef.current) {
      barRef.current.style.width = `${(p * 100).toFixed(2)}%`;
    }
    // Stage index → state only when it actually changes.
    const next = stageIndexForProgress(p);
    if (next !== activeIndexRef.current) {
      activeIndexRef.current = next;
      setActiveIndex(next);
    }
  }, []);

  const { sectionRef, videoRef, reducedMotion } = useScrollVideo({
    onProgress,
    reducedMotionAt: 0.62,
  });

  const staticMode = mounted && reducedMotion;

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-label="The rice journey — from one grain to the world"
      className={
        staticMode
          ? 'relative bg-white'
          : 'relative bg-white h-[520vh] md:h-[680vh]'
      }
    >
      {/* Sticky stage that pins while the section scrolls beneath it. */}
      <div
        className={[
          'top-0 flex h-screen w-full items-center overflow-hidden bg-white',
          staticMode ? 'relative' : 'sticky',
        ].join(' ')}
      >
        {/* The scroll-scrubbed video. Never autoplays, never loops, no controls.
            White footage on a white page — the plant appears to live in the page.
            The plant sits on the left of frame, so the page text lives on the right.
            MP4 (H.264) is preferred for smooth hardware-accelerated seeking; the
            WebM/VP9 source is a fallback for browsers without H.264. */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain object-[50%_23%] sm:object-center"
          poster={asset('/videos/rice-journey-poster.webp')}
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
        >
          <source src={asset('/videos/rice-journey.mp4')} type="video/mp4" />
          <source src={asset('/videos/rice-journey.webm')} type="video/webm" />
        </video>

        {/* Soft readability scrim behind the text — kept very light.
            Bottom-up on mobile; right-side fade on desktop. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent lg:bg-gradient-to-l lg:from-white/85 lg:via-white/15 lg:to-transparent"
        />

        {/* HERO (initial state) — full-screen overlay, content to the right. */}
        <div ref={heroRef} className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full max-w-edge items-end px-5 pb-[16%] sm:px-8 lg:items-center lg:pb-0">
            <div className="w-full lg:ml-auto lg:w-[45%]">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                {hero.eyebrow}
              </p>
              <h1 className="font-display font-semibold leading-[0.98] tracking-tightest text-charcoal">
                <span className="block text-[12vw] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                  {hero.headline[0]}
                </span>
                <span className="block text-[12vw] text-rice-green sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                  {hero.headline[1]}
                </span>
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
                {hero.support}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="rounded-full bg-charcoal px-6 py-3 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-rice-green"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="rounded-full border border-charcoal/20 px-6 py-3 text-[13px] font-semibold tracking-wide text-charcoal transition-colors hover:border-charcoal/50"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* STAGE TEXT (during scroll) — all eight stacked, crossfaded by opacity. */}
        {!staticMode && (
          <div ref={stageWrapRef} style={{ opacity: 0 }} className="absolute inset-0 z-10">
            <div className="mx-auto h-full max-w-edge px-5 sm:px-8">
              <div className="relative h-full">
                {journeyStages.map((s, i) => (
                  <div
                    key={s.id}
                    className={[
                      'absolute inset-0 flex items-end pb-[16%] lg:items-center lg:pb-0',
                      i === activeIndex ? '' : 'pointer-events-none',
                    ].join(' ')}
                  >
                    <div className="w-full lg:ml-auto lg:w-[45%]">
                      <JourneyStage stage={s} active={i === activeIndex} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scroll hint */}
        {!staticMode && (
          <div
            ref={hintRef}
            className="pointer-events-none absolute inset-x-0 bottom-6 z-20 hidden justify-center lg:flex"
          >
            <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-ultra text-charcoal-muted">
              {hero.scrollHint}
              <span className="inline-block h-4 w-[1px] animate-pulse bg-charcoal-muted/60" />
            </span>
          </div>
        )}

        {!staticMode && <ProgressIndicator ref={barRef} activeIndex={activeIndex} />}
      </div>

      {/* Reduced-motion fallback: the frozen frame above tells the story; the
          eight beats are presented here as plain, accessible content. */}
      {staticMode && (
        <div className="mx-auto max-w-edge px-5 pb-24 sm:px-8">
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {journeyStages.map((s) => (
              <li key={s.id} className="bg-white p-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                  {s.label}
                </p>
                <h3 className="font-display text-xl font-semibold tracking-tight text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {s.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Screen-reader narrative (the video is decorative). */}
      <p className="sr-only">
        A single rice plant on a white background. As you scroll, the camera
        moves closer until one grain fills the view — telling the story of
        Kamran Rice Mill from origin and cultivation, through processing and
        precision, to premium rice prepared for export around the world.
      </p>
    </section>
  );
}
