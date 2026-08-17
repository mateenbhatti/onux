/**
 * SINGLE SOURCE OF TRUTH — Kamran Rice Mill
 * ------------------------------------------------------------------
 * All company-facing copy lives here so content can be edited without
 * touching component code. Facts below are sourced from the official
 * website content (kamranricemill.com) supplied by the owner.
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
    'Kamran Rice Mill is one of the largest rice processing mills in Arifwala, Punjab, Pakistan — exporting premium basmati and long-grain rice worldwide since 1999, with 50,000 MT storage, 100 MT/day production and Halal & HACCP certification.',
} as const;

export const nav: { label: string; href: string }[] = [
  { label: 'About', href: '#about' },
  { label: 'Rice', href: '#rice' },
  { label: 'Bin Sultan', href: '#bin-sultan' },
  { label: 'Processing', href: '#processing' },
  { label: 'Export', href: '#export' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Kamran Rice Mill',
  headline: ['From one grain', 'to the world.'],
  support:
    'Premium Pakistani basmati and long-grain rice from Arifwala, Punjab — processed with world-class technology and delivered to global markets.',
  primaryCta: { label: 'Explore Our Rice', href: '#rice' },
  secondaryCta: { label: 'Request a Quote', href: '#quote' },
  scrollHint: 'Scroll to follow the grain',
} as const;

export const about = {
  eyebrow: 'About',
  established: 1999,
  establishedLabel: 'Established',
  statement: 'From harvest\nto perfection.',
  lead: 'Kamran Rice Mill is one of the largest and most reputable rice processing mills in Arifwala, Punjab.',
  paragraphs: [
    'Since its establishment in 1999, the mill has grown into a fully integrated rice processing facility operating on 30+ acres of land, equipped with advanced technology and high-capacity storage and production systems.',
    'With a commitment to quality, innovation and excellence, Kamran Rice Mill has become Arifwala’s top rice mill in production, storage and operational scale — delivering authentic basmati and long-grain rice to domestic and export markets.',
  ],
} as const;

/** Flagship retail/wholesale brand — copy provided by the owner. */
export const binSultan = {
  eyebrow: 'Our Brand',
  name: 'Bin Sultan Rice',
  tagline: 'Pakistan’s Finest. The World’s Choice.',
  lead: 'Bin Sultan Rice was built with one clear mission: to set the gold standard for Pakistani rice and become a global favorite.',
  paragraphs: [
    'We’re obsessed with quality. Every grain is delivered with consistency and a promise — 100% customer satisfaction, every single time.',
    'Today, Bin Sultan is one of Pakistan’s fastest-growing rice brands across modern retail and wholesale — and we’re going global, bringing our premium Basmati to kitchens around the world.',
  ],
  points: [
    { title: 'The gold standard', body: 'Built to set the benchmark for premium Pakistani Basmati.' },
    { title: '100% satisfaction', body: 'A promise of consistent quality in every single pack.' },
    { title: 'Retail & wholesale', body: 'One of Pakistan’s fastest-growing rice brands on modern shelves.' },
    { title: 'Going global', body: 'Premium Basmati, expanding to kitchens around the world.' },
  ],
  cta: { label: 'Stock Bin Sultan', href: '#quote' },
} as const;

export type Product = {
  id: string;
  name: string;
  variety: string;
  description: string;
};

/** Rice line-up — the mill's specialised premium basmati and parboiled varieties. */
export const products: Product[] = [
  {
    id: 'sella-parboiled',
    name: 'Basmati Parboiled (Sella) Rice',
    variety: 'Parboiled basmati',
    description:
      'Premium parboiled basmati with firm, separate grains and a golden finish — processed with strict precision for aroma, grain length and purity.',
  },
  {
    id: '1121-basmati',
    name: '1121 Basmati Rice',
    variety: 'Extra-long-grain basmati',
    description:
      'One of the longest basmati grains in the world, elongating further on cooking — prized for its distinctive aroma and slender, elegant grain.',
  },
  {
    id: '1509-basmati',
    name: '1509 Basmati Rice',
    variety: 'Long-grain aromatic basmati',
    description:
      'A refined long-grain basmati known for its clean, fragrant character and consistent cooking — a favourite of international markets.',
  },
] as const;

export const processing = {
  eyebrow: 'Processing & Quality',
  title: 'From paddy to perfection',
  intro:
    'Our facility combines leading Pakistani preparation methods with advanced European (Bühler) and Chinese processing technology — with modern paddy dryers, sortex machines, polishing units and a dedicated quality-control laboratory delivering consistently perfect grains.',
  steps: [
    { n: '01', label: 'Paddy', note: 'Carefully selected paddy forms the foundation of every grain.' },
    { n: '02', label: 'Drying & Cleaning', note: 'Modern paddy dryers and cleaning remove impurities for a uniform batch.' },
    { n: '03', label: 'Processing', note: 'European (Bühler) and Chinese milling technology transforms paddy into clean, consistent rice.' },
    { n: '04', label: 'Sortex Sorting', note: 'Sortex colour-sorting grades every grain for consistency and appearance.' },
    { n: '05', label: 'Polishing', note: 'Precision polishing units bring out a refined, export-grade finish.' },
    { n: '06', label: 'Premium Rice', note: 'Quality-lab checked, packed and dispatched — consistent, refined and export-ready.' },
  ],
} as const;

/** Certifications — international food-safety and quality standards. */
export const certifications = {
  eyebrow: 'Certifications',
  title: 'Certified to global standards.',
  intro:
    'Kamran Rice Mill adheres to international food-safety and quality standards, reflecting our dedication to safe, hygienic and globally compliant rice production.',
  items: [
    { name: 'Halal', note: 'Halal Certified' },
    { name: 'HACCP', note: 'HACCP Certified' },
  ],
} as const;

/** Headline capacity & scale figures (official website). */
export const capacity = {
  eyebrow: 'Capacity',
  title: 'Built for scale.',
  intro:
    'Operating across 30+ acres in Arifwala, Punjab, Kamran Rice Mill is one of the highest-capacity mills in the region — purpose-built to store, process and deliver rice with the consistency that domestic and export markets demand.',
  stats: [
    { value: 50000, display: '50,000', unit: 'MT', label: 'Storage Capacity' },
    { value: 100, display: '100', unit: 'MT / Day', label: 'Production Capacity' },
    { value: 1999, display: '1999', unit: '', label: 'Established' },
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
    'Basmati Parboiled (Sella) Rice',
    '1121 Basmati Rice',
    '1509 Basmati Rice',
    'Long Grain Rice',
    'Other / Not sure',
  ],
} as const;

/** Contact details (official website). */
export const contact = {
  eyebrow: 'Contact',
  title: 'Let’s talk rice.',
  intro:
    'Whether you’re an importer, distributor or retail buyer, we’d be glad to hear from you.',
  email: 'info@kamranricemill.com',
  website: 'kamranricemill.com',
  country: 'Pakistan',
  phones: ['+92 (339) 7540001', '+92 (457) 540001'],
  offices: [
    {
      label: 'Rice Processing Mill',
      address: '04 KM, Burewala Road, Arifwala-57450, Punjab, Pakistan',
    },
    {
      label: 'Grain Market Office',
      address:
        'Office No. 03, Near Market Committee Office, Grain Market, Arifwala-57450, Punjab, Pakistan',
    },
  ],
} as const;

export const footer = {
  blurb:
    'One of the largest rice processing mills in Arifwala, Punjab — exporting premium basmati and long-grain rice worldwide since 1999.',
} as const;

/** Resolve a public asset path, honouring an optional static-export basePath. */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${path}`;
}
