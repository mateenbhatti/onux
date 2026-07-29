'use client';

import { useEffect, useRef } from 'react';
import { hero } from '@/lib/content';
import { scrub } from '@/lib/interaction/store';
import { damp } from '@/lib/interaction/math';
import InteractiveHotspots from '@/components/InteractiveHotspots/InteractiveHotspots';

export default function Hero() {
  const layer = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLDivElement>(null);

  // Very subtle counter-parallax on the text — reads the shared store, no re-render.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let x = 0;
    let y = 0;
    let last = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const tx = (0.5 - scrub.pointerX) * 18 * scrub.heroInfluence;
      const ty = (0.5 - scrub.pointerY) * 12 * scrub.heroInfluence;
      x = damp(x, tx, 4, dt);
      y = damp(y, ty, 4, dt);
      if (layer.current)
        layer.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (hint.current) hint.current.style.opacity = String(scrub.heroInfluence);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="top"
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* legibility scrims that don't hide the vehicle */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/45 via-transparent to-ink-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink-950/90 to-transparent" />

      <InteractiveHotspots />

      <div
        ref={layer}
        className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-6 text-center will-change-transform"
      >
        <span className="reveal mb-6 text-[10px] uppercase tracking-mega text-steel-300 sm:text-xs">
          {hero.eyebrow}
        </span>
        <h1 className="reveal font-display text-[13vw] font-extrabold leading-[0.92] tracking-tight text-white sm:text-[9vw] md:text-[7.5vw] lg:text-[6.4rem]">
          <span className="block">{hero.headline[0]}</span>
          <span className="block text-steel-200">{hero.headline[1]}</span>
        </h1>
        <p className="reveal mt-7 max-w-xl text-balance text-sm leading-relaxed text-steel-300 sm:text-base">
          {hero.subtext}
        </p>
        <div className="reveal mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo(hero.primaryCta.href)}
            data-cursor="Book"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-medium uppercase tracking-ultra text-ink-950 transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="relative z-10">{hero.primaryCta.label}</span>
          </button>
          <button
            onClick={() => scrollTo(hero.secondaryCta.href)}
            data-cursor=""
            className="group flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-xs uppercase tracking-ultra text-white transition-colors duration-300 hover:border-white/50"
          >
            {hero.secondaryCta.label}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      <div
        ref={hint}
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-ultra text-steel-400">
          {hero.scrollHint}
        </span>
        <span className="relative h-9 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-3 w-px animate-[scrollLine_2s_ease-in-out_infinite] bg-white/80" />
        </span>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(300%);
          }
          100% {
            transform: translateY(300%);
          }
        }
      `}</style>
    </section>
  );
}
