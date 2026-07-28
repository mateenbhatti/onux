'use client';

import { useEffect, useRef, useState } from 'react';
import { hotspots } from '@/lib/content';
import { scrub, uiStore } from '@/lib/interaction/store';
import { damp } from '@/lib/interaction/math';

/**
 * Floating hotspots pinned over the vehicle. They drift with the same overscan
 * parallax as the frame so they feel welded to the car, fade out as the hero
 * scrolls away, and reveal a compact label on hover — never a big popup.
 */
export default function InteractiveHotspots() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let x = 0;
    let y = 0;
    let last = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce) {
        const tx = (0.5 - scrub.pointerX) * 2 * (window.innerWidth * 0.045) * scrub.heroInfluence;
        const ty = (0.5 - scrub.pointerY) * 2 * (window.innerHeight * 0.04) * scrub.heroInfluence;
        x = damp(x, tx, 5, dt);
        y = damp(y, ty, 5, dt);
      }
      if (wrap.current) {
        wrap.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        wrap.current.style.opacity = String(Math.max(0, scrub.heroInfluence));
        wrap.current.style.pointerEvents = scrub.heroInfluence > 0.4 ? 'auto' : 'none';
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onClick = (target: string) =>
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      ref={wrap}
      className="absolute inset-0 z-[15] hidden will-change-transform sm:block"
      aria-hidden="true"
    >
      {hotspots.map((h) => (
        <button
          key={h.id}
          onMouseEnter={() => {
            setActive(h.id);
            uiStore.set({ activeHotspot: h.id });
          }}
          onMouseLeave={() => {
            setActive(null);
            uiStore.set({ activeHotspot: null });
          }}
          onClick={() => onClick(h.target)}
          data-cursor={h.label}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${h.x * 100}%`, top: `${h.y * 100}%` }}
        >
          {/* pulsing node */}
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.5)]" />
            <span className="absolute h-7 w-7 rounded-full border border-white/30 transition-transform duration-500 ease-power group-hover:scale-125" />
          </span>

          {/* label card */}
          <span
            className={`absolute left-1/2 top-1/2 ml-5 w-max max-w-[180px] -translate-y-1/2 rounded-lg border border-white/10 bg-ink-900/80 px-3.5 py-2.5 text-left backdrop-blur-md transition-all duration-300 ease-power ${
              active === h.id
                ? 'pointer-events-auto translate-x-0 opacity-100'
                : 'pointer-events-none -translate-x-2 opacity-0'
            }`}
          >
            <span className="block text-[11px] font-semibold uppercase tracking-ultra text-white">
              {h.label}
            </span>
            <span className="mt-0.5 block text-[11px] leading-snug text-steel-400">
              {h.blurb}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
