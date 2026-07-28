'use client';

import { performance as perf } from '@/lib/content';

export default function PerformanceSection() {
  return (
    <section
      id="performance"
      className="relative flex min-h-[120vh] flex-col justify-center px-6 py-32 sm:px-10"
    >
      {/* subtle scrim so type stays legible over the moving frame */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-display text-sm tabular-nums text-accent">
            {perf.index}
          </span>
          <span className="h-px w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-ultra text-steel-300">
            {perf.kicker}
          </span>
        </div>

        <h2 className="max-w-4xl font-display text-[13vw] font-extrabold leading-[0.9] tracking-tight text-white sm:text-[9vw] md:text-[7vw] lg:text-[7.5rem]">
          {perf.headline.map((line, i) => (
            <span key={i} className="reveal block">
              {line}
            </span>
          ))}
        </h2>

        <p className="reveal mt-10 max-w-md text-balance text-base leading-relaxed text-steel-300 md:ml-auto md:mr-0 md:text-right">
          {perf.body}
        </p>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          {perf.stats.map((s) => (
            <div key={s.label} className="reveal">
              <div className="font-display text-3xl font-bold text-white md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs leading-snug text-steel-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
