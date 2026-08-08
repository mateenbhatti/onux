'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { processing } from '@/data/siteContent';
import Reveal from './ui/Reveal';

export default function Processing() {
  const reduce = useReducedMotion();

  return (
    <section id="processing" className="scroll-mt-24 bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
              {processing.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-charcoal sm:text-5xl">
              {processing.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-charcoal-soft">
              {processing.intro}
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 space-y-0">
          {processing.steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -14% 0px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="relative grid grid-cols-[auto_1fr] gap-6 sm:grid-cols-[6rem_auto_1fr] sm:gap-10"
            >
              {/* Numeral + connector line */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl text-gold-deep tabular-nums">
                  {step.n}
                </span>
                {i < processing.steps.length - 1 && (
                  <span className="mt-2 w-[1px] flex-1 bg-line" />
                )}
              </div>

              <div className="pb-12 sm:col-span-2 sm:grid sm:grid-cols-[16rem_auto] sm:gap-10">
                <h3
                  className={[
                    'font-display font-semibold tracking-tight',
                    i === processing.steps.length - 1
                      ? 'text-rice-green'
                      : 'text-charcoal',
                    'text-2xl sm:text-3xl',
                  ].join(' ')}
                >
                  {step.label}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-charcoal-soft sm:mt-1">
                  {step.note}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
