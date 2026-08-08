'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { globalReach } from '@/data/siteContent';
import Reveal from './ui/Reveal';

/** Abstract globe — origin marked, supply radiating outward. No country claims. */
function Globe() {
  const reduce = useReducedMotion();
  // Approximate on-globe position for the Pakistan origin marker.
  const origin = { x: 292, y: 150 };
  const arcs = [
    'M292 150 C 230 90, 150 92, 96 150',
    'M292 150 C 250 210, 170 240, 108 214',
    'M292 150 C 350 96, 404 120, 404 176',
    'M292 150 C 356 200, 388 236, 356 276',
  ];

  return (
    <svg
      viewBox="0 0 480 340"
      className="h-auto w-full"
      role="img"
      aria-label="Stylised globe showing rice supply radiating from Pakistan to international markets"
    >
      <defs>
        <radialGradient id="globeFill" cx="42%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f7f6f1" />
        </radialGradient>
      </defs>

      {/* Sphere */}
      <circle cx="240" cy="170" r="150" fill="url(#globeFill)" stroke="#e9e7df" />

      {/* Parallels */}
      {[-96, -48, 0, 48, 96].map((dy) => (
        <ellipse
          key={`p${dy}`}
          cx="240"
          cy={170 + dy}
          rx={Math.sqrt(Math.max(0, 150 * 150 - dy * dy))}
          ry={14}
          fill="none"
          stroke="#e9e7df"
          strokeWidth="1"
        />
      ))}
      {/* Meridians */}
      {[150, 100, 50].map((rx) => (
        <ellipse
          key={`m${rx}`}
          cx="240"
          cy="170"
          rx={rx}
          ry="150"
          fill="none"
          stroke="#e9e7df"
          strokeWidth="1"
        />
      ))}
      <line x1="240" y1="20" x2="240" y2="320" stroke="#e9e7df" strokeWidth="1" />

      {/* Supply arcs */}
      {arcs.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="#C8A951"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={reduce ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* Destination nodes */}
      {[
        [96, 150],
        [108, 214],
        [404, 176],
        [356, 276],
      ].map(([x, y], i) => (
        <motion.circle
          key={`d${i}`}
          cx={x}
          cy={y}
          r="3.5"
          fill="#4F6F3A"
          initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.9 + i * 0.18 }}
        />
      ))}

      {/* Origin — Pakistan */}
      <circle cx={origin.x} cy={origin.y} r="10" fill="#4F6F3A" opacity="0.14" />
      <circle cx={origin.x} cy={origin.y} r="5" fill="#4F6F3A" />
    </svg>
  );
}

export default function GlobalReach() {
  return (
    <section id="export" className="scroll-mt-24 bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                {globalReach.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-charcoal sm:text-5xl lg:text-[3.4rem]">
                {globalReach.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
                {globalReach.intro}
              </p>
            </Reveal>

            <dl className="mt-12 grid gap-8 sm:grid-cols-2">
              {globalReach.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.06}>
                  <dt className="font-display text-lg font-semibold tracking-tight text-charcoal">
                    {point.title}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-charcoal-soft">
                    {point.body}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={0.1} className="order-first lg:order-last">
            <Globe />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
