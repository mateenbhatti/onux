/**
 * A tiny mutable store shared between the scroll controller (writer),
 * the pointer tracker (writer) and the canvas renderer (reader).
 *
 * Deliberately lives OUTSIDE React state: the canvas renders on its own
 * requestAnimationFrame loop reading these values directly, so pointer and
 * scroll motion never trigger React re-renders. React only subscribes for
 * coarse things (which hotspot label is active, loading progress).
 */

export type ScrubState = {
  /** target normalized position in the sequence [0..1], written by scroll */
  scrollTarget: number;
  /** additional [-1..1] micro-offset written by the hero pointer scrub */
  pointerScrub: number;
  /** normalized pointer position, 0.5/0.5 = centre */
  pointerX: number;
  pointerY: number;
  /** pointer velocity magnitude, feeds subtle inertia/vignette */
  pointerSpeed: number;
  /** 1 while the hero owns the pointer parallax, 0 once scrolled away */
  heroInfluence: number;
};

export const scrub: ScrubState = {
  scrollTarget: 0,
  pointerScrub: 0,
  pointerX: 0.5,
  pointerY: 0.5,
  pointerSpeed: 0,
  heroInfluence: 1,
};

/** Coarse, React-facing state that DOES warrant re-renders. */
export type UiState = {
  loaded: number; // 0..1 progressive load of priority frames
  ready: boolean;
  activeHotspot: string | null;
};

type Listener = () => void;

class UiStore {
  private state: UiState = { loaded: 0, ready: false, activeHotspot: null };
  private listeners = new Set<Listener>();

  get = () => this.state;

  set = (patch: Partial<UiState>) => {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((l) => l());
  };

  subscribe = (l: Listener) => {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  };
}

export const uiStore = new UiStore();
