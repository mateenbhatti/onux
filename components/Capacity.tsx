import { capacity } from '@/data/siteContent';
import Reveal from './ui/Reveal';
import CountUp from './ui/CountUp';

export default function Capacity() {
  return (
    <section className="scroll-mt-24 bg-charcoal py-28 text-white sm:py-40">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold">
              {capacity.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-white sm:text-5xl">
              {capacity.title}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">
              {capacity.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-14 sm:mt-28 sm:grid-cols-3 sm:gap-10">
          {capacity.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border-t border-white/15 pt-8">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-none tracking-tightest tabular-nums text-white">
                    <CountUp to={stat.value} display={stat.display} />
                  </span>
                  {stat.unit && (
                    <span className="font-display text-base font-medium text-gold sm:text-lg">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-ultra text-white/50">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
