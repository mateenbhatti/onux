'use client';

import { footer, site, nav } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-ink-950 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <span className="font-display text-2xl font-extrabold tracking-ultra text-white">
              {nav.logo}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
              {site.tagline}. Built around an obsession with detail.
            </p>
          </div>

          <div className="flex gap-16">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] uppercase tracking-ultra text-steel-400">
                  {col.title}
                </h4>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-sm text-steel-300 transition-colors hover:text-white">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-[11px] text-steel-500 sm:flex-row sm:items-center">
          <span>{footer.legal}</span>
          <span className="uppercase tracking-ultra">
            Designed &amp; engineered for the drive
          </span>
        </div>
      </div>
    </footer>
  );
}
