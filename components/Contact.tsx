import { contact, site } from '@/data/siteContent';
import Reveal from './ui/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                {contact.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-charcoal sm:text-5xl">
                {contact.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
                {contact.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <dl className="divide-y divide-line border-t border-line">
              <div className="flex items-baseline justify-between gap-6 py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-ultra text-charcoal-muted">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[15px] font-medium text-charcoal transition-colors hover:text-rice-green"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-ultra text-charcoal-muted">
                  Website
                </dt>
                <dd>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] font-medium text-charcoal transition-colors hover:text-rice-green"
                  >
                    {contact.website}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-ultra text-charcoal-muted">
                  Origin
                </dt>
                <dd className="text-[15px] font-medium text-charcoal">
                  {contact.country}
                </dd>
              </div>
            </dl>

            <a
              href="#quote"
              className="mt-10 inline-flex rounded-full bg-charcoal px-6 py-3 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-rice-green"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
