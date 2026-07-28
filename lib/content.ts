/**
 * Centralized site content. Editing copy, services, hotspots and section
 * anchors should only ever require touching this file.
 */

export const site = {
  name: 'APEX',
  fullName: 'APEX PERFORMANCE WORKSHOP',
  tagline: 'Precision Automotive Engineering',
  phone: '+44 20 7946 0821',
  email: 'workshop@apex-performance.co',
  address: 'Unit 7, Marlow Engineering Park, London',
};

export const nav = {
  logo: 'APEX',
  links: [
    { label: 'Performance', href: '#performance' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'Services', href: '#services' },
    { label: 'Workshop', href: '#workshop' },
    { label: 'Contact', href: '#booking' },
  ],
  cta: { label: 'Book Now', href: '#booking' },
};

export const hero = {
  eyebrow: 'Performance · Precision · Engineering',
  headline: ['Engineered', 'for the Drive'],
  subtext:
    'Precision diagnostics, performance upgrades and expert automotive care — delivered inside a workshop built around obsession with detail.',
  primaryCta: { label: 'Book Your Service', href: '#booking' },
  secondaryCta: { label: 'Explore Our Work', href: '#performance' },
  scrollHint: 'Scroll to inspect · Move to look',
};

/**
 * Frame-sequence configuration. The provided asset is a single 8s / 24fps
 * cinematic camera move (192 frames) that travels:
 *   front hero  →  orbit to 3/4 profile  →  hood opens  →  engine reveal  →  pull-back.
 * We scrub this sequence with scroll (global) and mouse (local micro-parallax).
 */
export const sequence = {
  totalFrames: 192,
  fps: 24,
  desktopPath: (i: number) =>
    `/frames/desktop/frame_${String(i).padStart(3, '0')}.webp`,
  mobilePath: (i: number) =>
    `/frames/mobile/frame_${String(i).padStart(3, '0')}.webp`,
  aspect: 1280 / 720,
};

/**
 * Named "camera marks" in the sequence — normalized 0..1 positions that
 * sections snap the scrub target to. Derived from inspecting the asset.
 */
export const cameraMarks = {
  heroFront: 0.0, // symmetric front hero
  heroFrontEnd: 0.18, // small window the mouse can scrub within on the hero
  orbitProfile: 0.42, // 3/4 side profile, brakes + wheels visible
  hoodOpen: 0.6, // engine bay opening
  engineReveal: 0.82, // full twin-turbo engine exposed
  pullBack: 1.0, // final full-vehicle pull-back
};

export type Hotspot = {
  id: string;
  label: string;
  blurb: string;
  /** normalized position over the frame at the hero camera mark */
  x: number;
  y: number;
  target: string;
};

export const hotspots: Hotspot[] = [
  {
    id: 'engine',
    label: 'Engine',
    blurb: 'Precision performance engineering',
    x: 0.5,
    y: 0.46,
    target: '#engineering',
  },
  {
    id: 'wheels',
    label: 'Wheels & Brakes',
    blurb: 'Performance braking & handling',
    x: 0.35,
    y: 0.72,
    target: '#services',
  },
  {
    id: 'bodywork',
    label: 'Bodywork',
    blurb: 'Aerodynamic composite craft',
    x: 0.66,
    y: 0.55,
    target: '#workshop',
  },
  {
    id: 'diagnostics',
    label: 'Diagnostics',
    blurb: 'Advanced vehicle diagnostics',
    x: 0.5,
    y: 0.28,
    target: '#performance',
  },
];

export const performance = {
  index: '01',
  kicker: 'Performance',
  headline: ['Precision', 'without', 'compromise.'],
  body: 'From advanced diagnostics to full performance upgrades, every vehicle that enters the bay receives meticulous, measured attention — nothing left to chance, nothing left to guesswork.',
  stats: [
    { value: '+38%', label: 'Avg. power gain on stage-2 builds' },
    { value: '0.01mm', label: 'Machining tolerance' },
    { value: '2,400', label: 'Builds completed' },
    { value: '17yrs', label: 'Master technician experience' },
  ],
};

export const engineering = {
  index: '03',
  kicker: 'Engineering',
  headline: 'Every component matters',
  body: 'Scroll to open the bay. We treat the powertrain like a Swiss movement — balancing, blueprinting and validating every rotating assembly before a single bolt is torqued to spec.',
  callouts: [
    { title: 'Forced Induction', text: 'Twin-turbo assembly, balanced & flow-matched.' },
    { title: 'Blueprinted Internals', text: 'Forged rods, coated bearings, measured clearances.' },
    { title: 'Thermal Management', text: 'Bespoke charge-cooling and oil circuits.' },
  ],
};

export type Service = {
  id: string;
  name: string;
  description: string;
  glyph: string;
};

export const services: { index: string; kicker: string; headline: string; items: Service[] } = {
  index: '04',
  kicker: 'Services',
  headline: 'Craft at every level',
  items: [
    { id: 'tuning', name: 'Performance Tuning', description: 'Bespoke calibration for measurable, reliable gains.', glyph: 'M4 18 L10 12 L14 15 L20 7' },
    { id: 'diagnostics', name: 'Diagnostics', description: 'Dealer-grade fault tracing and live data analysis.', glyph: 'M4 12 h4 l2 -6 l4 12 l2 -6 h4' },
    { id: 'engine', name: 'Engine & Transmission', description: 'Rebuilds, blueprinting and gearbox overhauls.', glyph: 'M6 12 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M12 4 v3 M12 17 v3 M4 12 h3 M17 12 h3' },
    { id: 'brakes', name: 'Brakes & Suspension', description: 'Big-brake kits, coilovers and geometry setup.', glyph: 'M12 4 a8 8 0 1 0 0.01 0 M12 9 a3 3 0 1 0 0.01 0' },
    { id: 'ecu', name: 'ECU Remapping', description: 'Custom maps written and validated on the dyno.', glyph: 'M5 7 h14 v10 h-14 z M8 7 v10 M12 7 v10 M16 7 v10' },
    { id: 'maintenance', name: 'Routine Maintenance', description: 'Manufacturer-schedule servicing, done properly.', glyph: 'M14 5 l5 5 l-9 9 l-5 0 l0 -5 z M12 7 l5 5' },
    { id: 'upgrades', name: 'Performance Upgrades', description: 'Intakes, exhausts, cooling and drivetrain.', glyph: 'M12 3 l3 6 l6 1 l-4.5 4.5 l1 6 l-5.5 -3 l-5.5 3 l1 -6 l-4.5 -4.5 l6 -1 z' },
    { id: 'inspection', name: 'Vehicle Inspections', description: 'Pre-purchase and track-readiness certification.', glyph: 'M11 4 a7 7 0 1 0 0.01 0 M16 16 l4 4' },
  ],
};

export const whyUs = {
  index: '05',
  kicker: 'Why Apex',
  headline: 'Trust is engineered, not claimed.',
  points: [
    { title: 'Master Technicians', text: 'Marque specialists with decades between them.' },
    { title: 'Measured, Not Guessed', text: 'Every build is dyno-verified and documented.' },
    { title: 'Total Transparency', text: 'Photographed progress and honest reporting.' },
    { title: 'Aftercare Guarantee', text: '24-month workmanship warranty on all work.' },
  ],
};

export const workshop = {
  index: '06',
  kicker: 'The Workshop',
  headline: ['Where machines', 'are understood.'],
  body: 'A climate-controlled, surgically clean environment. Filtered air, sealed floors and calibrated tooling — the conditions your car deserves.',
};

export const booking = {
  index: '07',
  kicker: 'Booking',
  headline: ['Your car.', 'Our craft.'],
  body: 'Book your vehicle with a team dedicated to precision, performance and exceptional workmanship. We will confirm within one working day.',
  cta: { label: 'Book Your Service', href: '#book-form' },
  services: [
    'Performance Tuning',
    'Diagnostics',
    'Engine & Transmission',
    'Brakes & Suspension',
    'ECU Remapping',
    'Routine Maintenance',
    'Vehicle Inspection',
    'Something else',
  ],
};

export const footer = {
  columns: [
    {
      title: 'Workshop',
      links: ['Performance', 'Engineering', 'Services', 'Booking'],
    },
    {
      title: 'Contact',
      links: [site.phone, site.email, site.address],
    },
  ],
  legal: `© ${new Date().getFullYear()} ${site.fullName}. All rights reserved.`,
};
