'use client';

import { useRef } from 'react';
import { services } from '@/lib/content';

function ServiceCard({
  index,
  name,
  description,
  glyph,
}: {
  index: number;
  name: string;
  description: string;
  glyph: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Pointer-follow spotlight + slight tilt, applied via CSS vars (no re-render).
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width;
    const my = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${mx * 100}%`);
    el.style.setProperty('--my', `${my * 100}%`);
    el.style.setProperty('--rx', `${(0.5 - my) * 5}deg`);
    el.style.setProperty('--ry', `${(mx - 0.5) * 5}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-cursor=""
      className="group reveal relative overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-800/40 p-7 transition-colors duration-500 hover:border-white/20"
      style={{
        transform: 'perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.5s',
      }}
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(217,79,42,0.14), transparent 60%)',
        }}
      />

      <div className="relative flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-9 w-9 text-steel-200 transition-colors duration-500 group-hover:text-white"
          >
            <path d={glyph} />
          </svg>
          <span className="font-display text-xs tabular-nums text-steel-500">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-steel-400">
          {description}
        </p>

        <span className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-ultra text-steel-500 transition-colors duration-300 group-hover:text-accent">
          Explore
          <span className="inline-block translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            →
          </span>
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 border-t border-white/[0.06] bg-ink-950 px-6 py-28 sm:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-display text-sm tabular-nums text-accent">
                {services.index}
              </span>
              <span className="h-px w-12 bg-white/20" />
              <span className="text-[10px] uppercase tracking-ultra text-steel-300">
                {services.kicker}
              </span>
            </div>
            <h2 className="max-w-2xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              {services.headline}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-steel-400">
            A complete performance offering under one roof — every discipline
            handled by specialists, never outsourced.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((s, i) => (
            <ServiceCard key={s.id} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
