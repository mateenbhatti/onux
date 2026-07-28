'use client';

import { useState } from 'react';
import { booking, site } from '@/lib/content';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    vehicle: '',
    service: booking.services[0],
    notes: '',
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo submit — wire to a real endpoint / CRM here.
    setSubmitted(true);
  };

  const field =
    'w-full border-b border-white/15 bg-transparent py-3 text-white placeholder:text-steel-500 outline-none transition-colors duration-300 focus:border-accent';

  return (
    <section
      id="booking"
      className="relative min-h-[100svh] overflow-hidden px-6 py-28 sm:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950" />

      <div className="relative mx-auto grid max-w-[1400px] items-start gap-16 lg:grid-cols-2">
        <div className="lg:sticky lg:top-28">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-display text-sm tabular-nums text-accent">
              {booking.index}
            </span>
            <span className="h-px w-12 bg-white/20" />
            <span className="text-[10px] uppercase tracking-ultra text-steel-300">
              {booking.kicker}
            </span>
          </div>
          <h2 className="font-display text-[14vw] font-extrabold leading-[0.9] tracking-tight text-white sm:text-[9vw] lg:text-[6rem]">
            {booking.headline.map((l, i) => (
              <span key={i} className="reveal block">
                {l}
              </span>
            ))}
          </h2>
          <p className="reveal mt-8 max-w-md text-base leading-relaxed text-steel-300">
            {booking.body}
          </p>

          <div className="mt-12 flex flex-col gap-1 text-sm text-steel-400">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} data-cursor="" className="transition-colors hover:text-white">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} data-cursor="" className="transition-colors hover:text-white">
              {site.email}
            </a>
            <span>{site.address}</span>
          </div>
        </div>

        <div id="book-form" className="reveal">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-start justify-center rounded-2xl border border-white/10 bg-ink-900/50 p-10 backdrop-blur-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent">
                ✓
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                Request received.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel-400">
                Thank you, {form.name || 'driver'}. Our team will confirm your{' '}
                {form.service.toLowerCase()} booking within one working day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                data-cursor=""
                className="mt-8 text-[10px] uppercase tracking-ultra text-steel-400 transition-colors hover:text-white"
              >
                ← Submit another
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-ink-900/40 p-8 backdrop-blur-md md:p-10"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-ultra text-steel-400">
                    Full name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Alex Marlow"
                    className={field}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-ultra text-steel-400">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@email.com"
                    className={field}
                  />
                </label>
              </div>

              <label className="mt-7 block">
                <span className="text-[10px] uppercase tracking-ultra text-steel-400">
                  Vehicle
                </span>
                <input
                  value={form.vehicle}
                  onChange={(e) => update('vehicle', e.target.value)}
                  placeholder="Make · Model · Year"
                  className={field}
                />
              </label>

              <label className="mt-7 block">
                <span className="text-[10px] uppercase tracking-ultra text-steel-400">
                  Service required
                </span>
                <select
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                  className={`${field} appearance-none`}
                >
                  {booking.services.map((s) => (
                    <option key={s} value={s} className="bg-ink-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-7 block">
                <span className="text-[10px] uppercase tracking-ultra text-steel-400">
                  Notes
                </span>
                <textarea
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  rows={3}
                  placeholder="Tell us what you're after…"
                  className={`${field} resize-none`}
                />
              </label>

              <button
                type="submit"
                data-cursor="Send"
                className="mt-9 w-full rounded-full bg-white py-4 text-xs font-medium uppercase tracking-ultra text-ink-950 transition-transform duration-300 hover:scale-[1.01]"
              >
                {booking.cta.label}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
