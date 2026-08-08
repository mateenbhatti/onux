import { privateLabel } from '@/data/siteContent';
import Reveal from './ui/Reveal';

export default function PrivateLabel() {
  return (
    <section className="scroll-mt-24 bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                {privateLabel.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-charcoal sm:text-5xl">
                {privateLabel.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
                {privateLabel.intro}
              </p>
              <a
                href="#quote"
                className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-rice-green"
              >
                Discuss your requirements
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {privateLabel.offerings.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.06} className="bg-white p-8">
                  <span className="font-serif text-lg text-gold-deep tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-charcoal">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                    {o.body}
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
