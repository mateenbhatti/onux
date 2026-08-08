'use client';

import {
  animate,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
  to: number;
  /** Pre-formatted final string (e.g. "50,000"); used to detect grouping. */
  display: string;
  duration?: number;
  className?: string;
};

/**
 * Counts up to `to` once when scrolled into view, formatting with thousands
 * separators to match `display`. Reduced motion shows the final value at once.
 */
export default function CountUp({ to, display, duration = 1.8, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const reduce = useReducedMotion();
  const grouped = display.includes(',');

  const format = (v: number) => {
    const n = Math.round(v);
    return grouped ? n.toLocaleString('en-US') : String(n);
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce || !inView) {
      node.textContent = inView ? display : format(0);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, to, display, duration, reduce, grouped]);

  return (
    <span ref={ref} className={className} aria-label={display}>
      {format(0)}
    </span>
  );
}
