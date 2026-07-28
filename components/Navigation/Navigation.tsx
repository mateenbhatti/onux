'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav } from '@/lib/content';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 md:h-20">
          <button
            onClick={() => go('#top')}
            data-cursor=""
            className="font-display text-lg font-extrabold tracking-ultra text-white md:text-xl"
          >
            {nav.logo}
          </button>

          <div className="hidden items-center gap-9 md:flex">
            {nav.links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                data-cursor=""
                className="group relative text-xs uppercase tracking-ultra text-steel-300 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-power group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => go(nav.cta.href)}
              data-cursor=""
              className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-ultra text-white transition-colors duration-300 hover:border-accent hover:bg-accent"
            >
              {nav.cta.label}
            </button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            data-cursor=""
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[79] flex flex-col justify-center bg-ink-950/98 px-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {nav.links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(l.href)}
                  className="py-2 text-left font-display text-4xl font-bold tracking-tight text-white"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + nav.links.length * 0.06 }}
                onClick={() => go(nav.cta.href)}
                className="mt-8 w-full rounded-full bg-accent py-4 text-center text-sm uppercase tracking-ultra text-white"
              >
                {nav.cta.label}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
