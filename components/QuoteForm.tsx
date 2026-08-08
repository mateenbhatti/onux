'use client';

import { useState, type FormEvent } from 'react';
import { quote, contact } from '@/data/siteContent';
import Reveal from './ui/Reveal';

const fieldBase =
  'w-full border-0 border-b border-line bg-transparent py-3 text-[15px] text-charcoal placeholder-charcoal-muted/60 transition-colors focus:border-rice-green focus:outline-none focus:ring-0';

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) || '').trim();

    // No backend on a static site — compose a pre-filled email to the mill.
    const lines = [
      `Name: ${get('name')}`,
      `Company: ${get('company')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      `Country: ${get('country')}`,
      `Rice Type: ${get('riceType')}`,
      `Quantity: ${get('quantity')}`,
      '',
      'Message:',
      get('message'),
    ];
    const subject = encodeURIComponent(
      `Rice quote request — ${get('company') || get('name') || 'New enquiry'}`,
    );
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="quote" className="scroll-mt-24 bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
                {quote.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.03] tracking-tightest text-charcoal sm:text-5xl">
                {quote.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
                {quote.intro}
              </p>
              <p className="mt-8 text-sm text-charcoal-muted">
                Prefer email?{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-rice-green underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {sent ? (
              <Reveal>
                <div className="rounded-2xl border border-line bg-ivory p-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rice-green/10 text-rice-green">
                    ✓
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-charcoal">
                    Thank you
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-charcoal-soft">
                    Your email client should have opened with your enquiry ready
                    to send. If not, email us directly at{' '}
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-medium text-rice-green underline-offset-4 hover:underline"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full border border-charcoal/20 px-6 py-3 text-[13px] font-semibold tracking-wide text-charcoal transition-colors hover:border-charcoal/50"
                  >
                    Send another
                  </button>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-name" className="sr-only">Name</label>
                  <input id="q-name" name="name" required autoComplete="name" placeholder="Name *" className={fieldBase} />
                </div>
                <div>
                  <label htmlFor="q-company" className="sr-only">Company</label>
                  <input id="q-company" name="company" autoComplete="organization" placeholder="Company" className={fieldBase} />
                </div>
                <div>
                  <label htmlFor="q-email" className="sr-only">Email</label>
                  <input id="q-email" name="email" type="email" required autoComplete="email" placeholder="Email *" className={fieldBase} />
                </div>
                <div>
                  <label htmlFor="q-phone" className="sr-only">Phone</label>
                  <input id="q-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={fieldBase} />
                </div>
                <div>
                  <label htmlFor="q-country" className="sr-only">Country</label>
                  <input id="q-country" name="country" autoComplete="country-name" placeholder="Country" className={fieldBase} />
                </div>
                <div>
                  <label htmlFor="q-rice" className="sr-only">Rice Type</label>
                  <select id="q-rice" name="riceType" defaultValue="" className={`${fieldBase} appearance-none`}>
                    <option value="" disabled>Rice Type</option>
                    {quote.riceTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="q-quantity" className="sr-only">Quantity</label>
                  <input id="q-quantity" name="quantity" placeholder="Quantity (e.g. 25 MT, 2 x 20ft container)" className={fieldBase} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="q-message" className="sr-only">Message</label>
                  <textarea id="q-message" name="message" rows={3} placeholder="Message" className={`${fieldBase} resize-none`} />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-charcoal px-6 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-rice-green sm:w-auto sm:px-10"
                  >
                    {quote.submitLabel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
