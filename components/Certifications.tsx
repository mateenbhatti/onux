import { certifications } from '@/data/siteContent';
import Reveal from './ui/Reveal';

export default function Certifications() {
  return (
    <section className="scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                {certifications.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.04] tracking-tightest text-charcoal sm:text-4xl">
                {certifications.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
                {certifications.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex flex-wrap gap-4">
              {certifications.items.map((cert, i) => (
                <Reveal
                  key={cert.name}
                  delay={i * 0.08}
                  className="flex-1"
                >
                  <div className="flex min-w-[9rem] flex-col items-center justify-center rounded-2xl border border-line bg-ivory px-8 py-9 text-center">
                    <span className="font-display text-2xl font-semibold tracking-tight text-rice-green">
                      {cert.name}
                    </span>
                    <span className="mt-2 text-[11px] font-semibold uppercase tracking-ultra text-charcoal-muted">
                      {cert.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
