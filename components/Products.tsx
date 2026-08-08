'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { products } from '@/data/siteContent';
import Reveal from './ui/Reveal';

export default function Products() {
  const reduce = useReducedMotion();

  return (
    <section id="rice" className="scroll-mt-24 bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
              Our Rice
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-charcoal sm:text-5xl">
              Rice, grown for the world.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-charcoal-soft">
              A selection of premium Pakistani rice varieties, prepared to a
              consistent standard for international buyers.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line">
          {products.map((product, i) => (
            <motion.a
              key={product.id}
              href="#quote"
              initial={{ opacity: 0, y: reduce ? 0 : 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
              className="group grid grid-cols-1 items-baseline gap-4 border-b border-line py-9 transition-colors hover:bg-white/60 sm:grid-cols-12 sm:gap-6 sm:px-4"
            >
              <div className="sm:col-span-1">
                <span className="font-serif text-lg text-gold-deep tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="sm:col-span-5">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-charcoal sm:text-[1.9rem]">
                  {product.name}
                </h3>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-rice-green">
                  {product.variety}
                </p>
              </div>
              <div className="sm:col-span-5">
                <p className="text-[15px] leading-relaxed text-charcoal-soft">
                  {product.description}
                </p>
              </div>
              <div className="sm:col-span-1 sm:text-right">
                <span className="inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold tracking-wide text-charcoal transition-colors group-hover:text-rice-green">
                  Quote
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
