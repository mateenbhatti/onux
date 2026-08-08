'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  as?: 'div' | 'section' | 'li' | 'span';
};

/**
 * Fade + translate on first entry into the viewport. Respects reduced motion
 * (renders immediately, no transform).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  as = 'div',
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      {children}
    </MotionTag>
  );
}
