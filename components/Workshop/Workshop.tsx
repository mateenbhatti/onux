'use client';

import { workshop } from '@/lib/content';

export default function Workshop() {
  return (
    <section id="workshop" className="relative min-h-[150vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden px-6 sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/70 via-transparent to-ink-950/90" />
        <div className="relative mx-auto max-w-[1400px] text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="font-display text-sm tabular-nums text-accent">
              {workshop.index}
            </span>
            <span className="h-px w-12 bg-white/20" />
            <span className="text-[10px] uppercase tracking-ultra text-steel-300">
              {workshop.kicker}
            </span>
          </div>
          <h2 className="mx-auto max-w-4xl font-display text-[12vw] font-extrabold leading-[0.92] tracking-tight text-white sm:text-[8vw] md:text-[6.5rem]">
            {workshop.headline.map((l, i) => (
              <span key={i} className="reveal block">
                {l}
              </span>
            ))}
          </h2>
          <p className="reveal mx-auto mt-8 max-w-lg text-balance text-base leading-relaxed text-steel-300">
            {workshop.body}
          </p>
        </div>
      </div>
    </section>
  );
}
