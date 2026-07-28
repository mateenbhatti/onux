import { sequence } from '@/lib/content';

/**
 * Progressive frame-sequence loader.
 *
 * Strategy:
 *  - Pick desktop vs mobile frame set by viewport width (once).
 *  - Load a PRIORITY batch first (the hero window) and report progress so the
 *    intro can lift as soon as the opening is interactive.
 *  - Stream the remaining frames in the background, in order, so scroll deeper
 *    into the story stays smooth without blocking first paint.
 *  - Never hold more than the decoded <img> elements we actually need; the
 *    browser cache + immutable headers keep re-fetches free.
 */

export type FrameSet = {
  total: number;
  get: (index: number) => HTMLImageElement | null;
  /** nearest already-decoded frame to `index`, for graceful gaps */
  getNearest: (index: number) => HTMLImageElement | null;
};

type Opts = {
  priorityCount: number;
  onPriorityProgress?: (loaded01: number) => void;
  onFrame?: (index: number) => void;
};

export function createFrameSet(opts: Opts): FrameSet {
  const total = sequence.totalFrames;
  const isMobile =
    typeof window !== 'undefined' &&
    (window.matchMedia('(max-width: 767px)').matches ||
      window.matchMedia('(pointer: coarse)').matches);
  const pathFor = isMobile ? sequence.mobilePath : sequence.desktopPath;

  const images: (HTMLImageElement | null)[] = new Array(total).fill(null);
  const loaded: boolean[] = new Array(total).fill(false);

  const load = (i: number): Promise<void> =>
    new Promise((resolve) => {
      if (images[i]) return resolve();
      const img = new Image();
      img.decoding = 'async';
      img.src = pathFor(i + 1); // frames are 1-indexed on disk
      const done = () => {
        loaded[i] = true;
        images[i] = img;
        opts.onFrame?.(i);
        resolve();
      };
      if (img.complete && img.naturalWidth) done();
      else {
        img.onload = done;
        img.onerror = () => resolve(); // tolerate a missing frame silently
      }
    });

  // ---- priority batch (hero window) ----
  const priority = Math.min(opts.priorityCount, total);
  let priorityDone = 0;
  const priorityPromises: Promise<void>[] = [];
  for (let i = 0; i < priority; i++) {
    priorityPromises.push(
      load(i).then(() => {
        priorityDone++;
        opts.onPriorityProgress?.(priorityDone / priority);
      })
    );
  }

  // ---- background stream (the rest, in small concurrent lanes) ----
  Promise.allSettled(priorityPromises).then(async () => {
    const rest: number[] = [];
    for (let i = priority; i < total; i++) rest.push(i);
    const LANES = isMobile ? 3 : 6;
    let cursor = 0;
    const worker = async () => {
      while (cursor < rest.length) {
        const idx = rest[cursor++];
        await load(idx);
      }
    };
    await Promise.all(Array.from({ length: LANES }, worker));
  });

  const get = (index: number) => {
    const i = Math.max(0, Math.min(total - 1, Math.round(index)));
    return images[i];
  };

  const getNearest = (index: number) => {
    const i = Math.max(0, Math.min(total - 1, Math.round(index)));
    if (images[i]) return images[i];
    for (let d = 1; d < total; d++) {
      if (images[i - d]) return images[i - d];
      if (images[i + d]) return images[i + d];
    }
    return null;
  };

  return { total, get, getNearest };
}
