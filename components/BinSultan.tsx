import { binSultan } from '@/data/siteContent';
import Reveal from './ui/Reveal';

export default function BinSultan() {
  return (
    <section id="bin-sultan" className="scroll-mt-24 bg-charcoal py-28 text-white sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold">
                {binSultan.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tightest text-white sm:text-6xl">
                {binSultan.name}
              </h2>
              <p className="mt-6 font-serif text-2xl italic leading-snug text-gold sm:text-3xl">
                {binSultan.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-10 max-w-xl text-xl leading-relaxed text-white/90 sm:text-2xl">
                {binSultan.lead}
              </p>
            </Reveal>
            <div className="mt-6 space-y-5">
              {binSultan.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.12 + i * 0.05}>
                  <p className="max-w-xl text-[15px] leading-relaxed text-white/60">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <a
                href={binSultan.cta.href}
                className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-[13px] font-semibold tracking-wide text-charcoal transition-colors hover:bg-gold"
              >
                {binSultan.cta.label}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {binSultan.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.06} className="bg-charcoal p-8">
                  <span className="font-serif text-lg text-gold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {point.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
