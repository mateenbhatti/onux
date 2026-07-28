'use client';

import { useEffect, useRef, useState } from 'react';
import { useUiStore } from '@/lib/interaction/useUiStore';
import { site } from '@/lib/content';

/**
 * Cinematic intro. Displays real priority-frame load progress, then lifts to
 * reveal the hero. Uses a max-wait fallback so a flaky asset never traps the user.
 */
export default function Preloader() {
  const loaded = useUiStore((s) => s.loaded);
  const ready = useUiStore((s) => s.ready);
  const [gone, setGone] = useState(false);
  const [display, setDisplay] = useState(0);
  const raf = useRef(0);

  // Smoothly ease the displayed percentage toward the true load value.
  useEffect(() => {
    const tick = () => {
      setDisplay((d) => {
        const target = Math.round(loaded * 100);
        const next = d + (target - d) * 0.12;
        return Math.abs(target - next) < 0.5 ? target : next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [loaded]);

  useEffect(() => {
    const fallback = setTimeout(() => setGone(true), 9000);
    if (ready) {
      const t = setTimeout(() => setGone(true), 500);
      return () => {
        clearTimeout(t);
        clearTimeout(fallback);
      };
    }
    return () => clearTimeout(fallback);
  }, [ready]);

  return (
    <div
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-ink-950 transition-[opacity,visibility] duration-700 ease-power ${
        gone ? 'pointer-events-none invisible opacity-0' : 'opacity-100'
      }`}
      aria-hidden={gone}
    >
      <div className="flex flex-col items-center">
        <span className="mb-6 font-display text-2xl font-extrabold tracking-ultra text-white">
          {site.name}
        </span>
        <div className="h-px w-56 overflow-hidden bg-white/10">
          <div
            className="h-full bg-white/70 transition-none"
            style={{ width: `${Math.round(display)}%` }}
          />
        </div>
        <div className="mt-4 flex w-56 items-center justify-between text-[10px] uppercase tracking-ultra text-steel-400">
          <span>Warming the bay</span>
          <span>{Math.round(display)}%</span>
        </div>
      </div>
    </div>
  );
}
