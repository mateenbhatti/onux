'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site, asset } from '@/data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-expo',
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-edge items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          aria-label={`${site.name} — home`}
          className={[
            'flex items-center transition-all duration-500 ease-expo',
            scrolled ? 'h-14' : 'h-20',
          ].join(' ')}
        >
          <Image
            src={asset(site.logo)}
            alt={`${site.name} logo`}
            width={586}
            height={426}
            priority
            className={[
              'w-auto transition-all duration-500 ease-expo',
              scrolled ? 'h-9' : 'h-12',
            ].join(' ')}
          />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-charcoal-soft transition-colors hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#quote"
            className="rounded-full bg-charcoal px-5 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-rice-green"
          >
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <div className="flex flex-col gap-[6px]">
            <span
              className={[
                'block h-[2px] w-6 bg-charcoal transition-transform duration-300',
                open ? 'translate-y-[8px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[2px] w-6 bg-charcoal transition-opacity duration-300',
                open ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[2px] w-6 bg-charcoal transition-transform duration-300',
                open ? '-translate-y-[8px] -rotate-45' : '',
              ].join(' ')}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex h-full flex-col justify-center gap-2 px-8"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                  className="border-b border-line py-4 font-display text-3xl font-medium tracking-tight text-charcoal"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#quote"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * nav.length + 0.05 }}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-4 text-sm font-semibold tracking-wide text-white"
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
