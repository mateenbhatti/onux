/**
 * The eight-stage scroll story that plays over the scroll-scrubbed rice video.
 *
 * `range` is the [start, end] fraction (0–1) of the journey's scroll progress
 * during which each stage's text is active. These map onto the 15-second video
 * and are intentionally kept as editable data — tune the breakpoints to the
 * exact visual beats of the footage without touching component code.
 *
 * `align` positions the stage text; `cta` is only present on the final stage.
 */

export type JourneyCta = { label: string; href: string };

export type JourneyStage = {
  id: number;
  label: string;
  title: string;
  copy: string;
  range: [number, number];
  cta?: { primary: JourneyCta; secondary: JourneyCta };
};

export const journeyStages: JourneyStage[] = [
  {
    id: 1,
    label: '01 / Origin',
    title: 'Where it begins',
    copy: 'From the fertile lands of Pakistan, every grain begins with carefully cultivated rice.',
    range: [0.04, 0.16],
  },
  {
    id: 2,
    label: '02 / Cultivation',
    title: 'Rooted in quality',
    copy: 'Carefully selected paddy forms the foundation of every grain we deliver.',
    range: [0.16, 0.29],
  },
  {
    id: 3,
    label: '03 / The Grain',
    title: 'One plant. Thousands of grains.',
    copy: 'Each grain carries the character of the land, the crop and our commitment to quality.',
    range: [0.29, 0.42],
  },
  {
    id: 4,
    label: '04 / Processing',
    title: 'From paddy to perfection',
    copy: 'Modern processing transforms carefully harvested paddy into clean, consistent rice.',
    range: [0.42, 0.55],
  },
  {
    id: 5,
    label: '05 / Precision',
    title: 'Precision in every grain',
    copy: 'Advanced European (Bühler) and Chinese processing technology, sortex sorting and years of experience keep every grain consistent from paddy to finished rice.',
    range: [0.55, 0.68],
  },
  {
    id: 6,
    label: '06 / Quality',
    title: 'Quality you can see',
    copy: 'Careful processing and sorting help us deliver consistently refined grains.',
    range: [0.68, 0.8],
  },
  {
    id: 7,
    label: '07 / Export',
    title: 'From Pakistan to the world',
    copy: 'Premium Pakistani rice prepared for international markets.',
    range: [0.8, 0.91],
  },
  {
    id: 8,
    label: '08 / Kamran Rice Mill',
    title: 'The final grain',
    copy: 'Premium rice produced with consistency, care and experience.',
    range: [0.91, 1.0],
    cta: {
      primary: { label: 'Explore Our Rice', href: '#rice' },
      secondary: { label: 'Request a Quote', href: '#quote' },
    },
  },
];

/** Return the active stage index (0-based) for a given journey progress 0–1. */
export function stageIndexForProgress(progress: number): number {
  for (let i = 0; i < journeyStages.length; i++) {
    const [start, end] = journeyStages[i].range;
    if (progress >= start && progress < end) return i;
  }
  // Before the first range → first stage; after the last → last stage.
  return progress < journeyStages[0].range[0] ? 0 : journeyStages.length - 1;
}
