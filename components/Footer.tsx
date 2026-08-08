import Image from 'next/image';
import { nav, site, footer, contact, asset } from '@/data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white py-16">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src={asset(site.logo)}
              alt={`${site.name} logo`}
              width={586}
              height={426}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal-soft">
              {footer.blurb}
            </p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
              {site.tagline}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="text-[11px] font-semibold uppercase tracking-ultra text-charcoal-muted">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-charcoal-soft transition-colors hover:text-rice-green"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-ultra text-charcoal-muted">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-charcoal-soft">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-rice-green"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-rice-green"
                >
                  {contact.website}
                </a>
              </li>
              <li>{contact.country}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 text-xs text-charcoal-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Premium Pakistani rice · {site.country}</p>
        </div>
      </div>
    </footer>
  );
}
