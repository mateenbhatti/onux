/**
 * SINGLE SOURCE OF TRUTH — Kamran Rice Mill
 * ------------------------------------------------------------------
 * All company-facing copy lives here so content can be edited without
 * touching component code.
 *
 * ⚠️ FIGURES MARKED  [VERIFY]  COULD NOT BE CONFIRMED AT BUILD TIME.
 * The official site (kamranricemill.com) was unreachable from the build
 * environment, so the numeric/company facts below come from the project
 * brief and MUST be checked against the official website before launch.
 * No certifications, export countries, or machinery brands are asserted
 * anywhere on the site because none could be verified.
 */

export const site = {
  name: 'Kamran Rice Mill',
  legalName: 'Kamran Rice Mill',
  tagline: 'Purity in every grain',
  domain: 'kamranricemill.com',
  url: 'https://kamranricemill.com',
  country: 'Pakistan',
  logo: '/brand/kamran-rice-mill-logo.png',
  description:
    'Kamran Rice Mill is a Pakistani rice producer and exporter delivering premium rice — cultivated with care, carefully processed and prepared for international markets.',
} as const;

export const nav: { label: string; href: string }[] = [
  { label: 'About', href: '#about' },
  { label: 'Rice', href: '#rice' },
  { label: 'Processing', href: '#processing' },
  { label: 'Export', href: '#export' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Kamran Rice Mill',
  headline: ['From one grain', 'to the world.'],
  support:
    'Premium Pakistani rice, cultivated with care and prepared for global markets.',
  primaryCta: { label: 'Explore Our Rice', href: '#rice' },
  secondaryCta: { label: 'Request a Quote', href: '#quote' },
  scrollHint: 'Scroll to follow the grain',
} as const;

export const about = {
  eyebrow: 'About',
  // [VERIFY] Year of establishment — confirm on kamranricemill.com.
  established: 1999,
  establishedLabel: 'Established',
  statement: 'Built around rice.\nDriven by quality.',
  lead: 'Kamran Rice Mill was built around a single commitment — to deliver rice of consistent, dependable quality from the fields of Pakistan to buyers around the world.',
  paragraphs: [
    'Rooted in Pakistan, one of the world’s great rice-growing regions, we bring together carefully selected paddy, modern processing and years of hands-on experience to produce rice that meets the expectations of demanding markets.',
    'Every stage — from the paddy we source, to cleaning, processing, sorting and polishing — is guided by the same principle: purity in every grain. It is a standard we hold from the first grain to the finished product.',
  ],
} as const;

export type Product = {
  id: string;
  name: string;
  variety: string;
  description: string;
};

/**
 * [VERIFY] Rice line-up. These are the principal rice varieties grown and
 * exported from Pakistan, presented generically. Confirm and trim this list
 * to the varieties Kamran Rice Mill actually produces before launch — do not
 * present a variety the mill does not offer.
 */
export const products: Product[] = [
  {
    id: 'super-basmati',
    name: 'Super Basmati',
    variety: 'Long-grain aromatic basmati',
    description:
      'A celebrated Pakistani basmati prized for its fine aroma, slender grain and clean separation after cooking.',
  },
  {
    id: '1121-basmati',
    name: '1121 Basmati',
    variety: 'Extra-long-grain basmati · Steam & Sella',
    description:
      'One of the longest basmati grains in the world, elongating further on cooking — available in steam and parboiled (sella) forms.',
  },
  {
    id: 'basmati',
    name: 'Basmati',
    variety: 'Classic aromatic basmati',
    description:
      'The traditional fragrant long-grain rice, a benchmark of quality across South Asian and international kitchens.',
  },
  {
    id: 'long-grain-white',
    name: 'Long Grain White Rice',
    variety: 'Non-basmati long grain',
    description:
      'A versatile, consistent long-grain white rice suited to everyday volume supply and a wide range of cuisines.',
  },
  {
    id: 'irri-long-grain',
    name: 'IRRI Long Grain',
    variety: 'Non-basmati commodity rice',
    description:
      'A dependable, cost-effective long-grain variety produced for bulk and institutional export requirements.',
  },
] as const;

export const processing = {
  eyebrow: 'Processing & Quality',
  title: 'From paddy to perfection',
  intro:
    'Modern processing and careful sorting turn carefully harvested paddy into clean, consistent, refined rice.',
  // Visual flow — kept generic; no machinery specifications are claimed.
  steps: [
    { n: '01', label: 'Paddy', note: 'Carefully selected paddy forms the foundation of every grain.' },
    { n: '02', label: 'Cleaning', note: 'Impurities are removed to prepare a clean, uniform batch.' },
    { n: '03', label: 'Processing', note: 'Paddy is transformed into clean, consistent rice.' },
    { n: '04', label: 'Sorting', note: 'Grains are sorted for consistency and appearance.' },
    { n: '05', label: 'Polishing', note: 'Careful polishing brings out a refined finish.' },
    { n: '06', label: 'Premium Rice', note: 'The finished grain — consistent, refined and export-ready.' },
  ],
} as const;

/**
 * [VERIFY] Headline capacity figures — confirm on kamranricemill.com.
 * Displayed as large editorial numbers, not boxed cards.
 */
export const capacity = {
  eyebrow: 'Capacity',
  title: 'Built for scale.',
  intro:
    'Purpose-built to store, process and deliver rice with the consistency that international supply demands.',
  stats: [
    { value: 50000, display: '50,000', unit: 'MT', label: 'Storage Capacity' }, // [VERIFY]
    { value: 100, display: '100', unit: 'MT / Day', label: 'Production Capacity' }, // [VERIFY]
    { value: 1999, display: '1999', unit: '', label: 'Established' }, // [VERIFY]
  ],
} as const;

export const globalReach = {
  eyebrow: 'Global Reach',
  title: 'From Pakistan to the world.',
  intro:
    'Premium Pakistani rice, prepared for international markets and shipped with a focus on reliable, consistent supply.',
  // No specific export countries are listed — none could be verified.
  points: [
    { title: 'Pakistani origin', body: 'Rice grown in one of the world’s great rice-producing regions.' },
    { title: 'International quality', body: 'Consistent, refined grains prepared to meet global expectations.' },
    { title: 'Reliable supply', body: 'Capacity and process built to support dependable, ongoing delivery.' },
    { title: 'Export readiness', body: 'Processing and preparation focused on the needs of importers and distributors.' },
  ],
} as const;

export const privateLabel = {
  eyebrow: 'Private Label & Bulk Supply',
  title: 'Built for global buyers.',
  intro:
    'We work with importers, distributors and retail buyers who need a dependable rice supplier they can build on.',
  // Framed as areas to discuss — no fixed service is guaranteed here.
  offerings: [
    { title: 'Bulk rice supply', body: 'Volume supply of premium and commodity rice for international buyers.' },
    { title: 'Export packaging', body: 'Packaging prepared for export and onward distribution.' },
    { title: 'Private label', body: 'Rice supplied to support your own brand and packaging requirements.' },
    { title: 'Custom requirements', body: 'Tell us your specification — variety, grade, packaging — and we’ll work to it.' },
  ],
} as const;

export const quote = {
  eyebrow: 'Request a Quote',
  title: 'Looking for your next rice supplier?',
  intro: 'Tell us what you’re looking for and our team will get back to you.',
  submitLabel: 'Request a Quote',
  riceTypes: [
    'Super Basmati',
    '1121 Basmati (Steam)',
    '1121 Basmati (Sella)',
    'Basmati',
    'Long Grain White Rice',
    'IRRI Long Grain',
    'Other / Not sure',
  ],
} as const;

/**
 * [VERIFY] Contact details. The email is derived from the company domain and
 * the country is factual; a specific street address and phone number were NOT
 * invented because they could not be verified. Confirm/replace before launch.
 */
export const contact = {
  eyebrow: 'Contact',
  title: 'Let’s talk rice.',
  intro:
    'Whether you’re an importer, distributor or retail buyer, we’d be glad to hear from you.',
  email: 'info@kamranricemill.com', // [VERIFY]
  website: 'kamranricemill.com',
  country: 'Pakistan',
} as const;

export const footer = {
  blurb:
    'Premium Pakistani rice — produced with consistency, care and experience, and prepared for international markets.',
} as const;

/** Resolve a public asset path, honouring an optional static-export basePath. */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${path}`;
}
