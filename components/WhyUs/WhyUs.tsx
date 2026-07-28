'use client';

import { whyUs } from '@/lib/content';

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative z-10 bg-ink-950 px-6 py-28 sm:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-sm tabular-nums text-accent">
            {whyUs.index}
          </span>
          <span className="h-px w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-ultra text-steel-300">
            {whyUs.kicker}
          </span>
        </div>

        <h2 className="reveal max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {whyUs.headline}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.points.map((p, i) => (
            <div
              key={p.title}
              className="reveal group relative bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-900"
            >
              <span className="font-display text-xs tabular-nums text-steel-500">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">
                {p.text}
              </p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 ease-power group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
