'use client';

import { useEffect } from 'react';

/**
 * Adds `.is-in` to any `.reveal` element as it enters the viewport, with a
 * small stagger for grouped siblings. Uses IntersectionObserver (cheap, no
 * scroll listeners) and unobserves after firing.
 */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const group = el.parentElement?.querySelectorAll('.reveal');
          const idx = group ? Array.from(group).indexOf(el) : 0;
          el.style.transitionDelay = `${Math.min(idx, 6) * 70}ms`;
          el.style.transitionProperty = 'opacity, transform';
          el.style.transitionDuration = '900ms';
          el.style.transitionTimingFunction = 'cubic-bezier(0.16,1,0.3,1)';
          el.classList.add('is-in');
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
