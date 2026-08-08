import { about } from '@/data/siteContent';
import Reveal from './ui/Reveal';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                {about.eyebrow}
              </p>
              <h2 className="mt-6 whitespace-pre-line font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-charcoal sm:text-5xl">
                {about.statement}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 flex items-baseline gap-5">
                <span className="font-serif text-6xl leading-none text-rice-green sm:text-7xl">
                  {about.established}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-ultra text-charcoal-muted">
                  {about.establishedLabel}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.05}>
              <p className="text-xl leading-relaxed text-charcoal sm:text-2xl">
                {about.lead}
              </p>
            </Reveal>
            <div className="mt-8 space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-[15px] leading-relaxed text-charcoal-soft">
                    {p}
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
