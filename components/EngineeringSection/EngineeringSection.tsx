'use client';

import { useEffect, useRef, useState } from 'react';
import { engineering as eng } from '@/lib/content';

/**
 * Tall section whose scroll range is mapped (in ScrollController) to the
 * hood-open → engine-reveal portion of the film. A sticky panel holds the
 * copy while callouts light up in sequence, so scrolling literally opens the
 * bay and inspects the powertrain.
 */
export default function EngineeringSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const activeCallout = Math.min(
    eng.callouts.length - 1,
    Math.floor(progress * eng.callouts.length * 1.15)
  );

  return (
    <section id="engineering" ref={ref} className="relative min-h-[220vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden px-6 sm:px-10">
        {/* scrim keeps copy readable against the engine detail */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/30 to-ink-950/60" />

        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-display text-sm tabular-nums text-accent">
                {eng.index}
              </span>
              <span className="h-px w-12 bg-white/20" />
              <span className="text-[10px] uppercase tracking-ultra text-steel-300">
                {eng.kicker}
              </span>
            </div>

            <h2 className="max-w-xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              {eng.headline}
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-steel-300">
              {eng.body}
            </p>

            {/* scrub progress rail */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-40 overflow-hidden bg-white/12">
                <div
                  className="h-full bg-accent transition-[width] duration-150 ease-linear"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <span className="text-[10px] uppercase tracking-ultra text-steel-400">
                Bay {(progress * 100).toFixed(0)}% open
              </span>
            </div>
          </div>

          {/* callouts light up in sequence with the reveal */}
          <div className="flex flex-col gap-4 lg:items-end">
            {eng.callouts.map((c, i) => (
              <div
                key={c.title}
                className={`w-full max-w-sm rounded-xl border p-5 backdrop-blur-md transition-all duration-500 ease-power ${
                  i <= activeCallout
                    ? 'translate-y-0 border-white/15 bg-ink-900/70 opacity-100'
                    : 'translate-y-3 border-white/5 bg-ink-900/30 opacity-40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {c.title}
                  </h3>
                  <span
                    className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                      i <= activeCallout ? 'bg-accent' : 'bg-white/20'
                    }`}
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
