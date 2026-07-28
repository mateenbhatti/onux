export const clamp = (v: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, v));

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const mapRange = (
  v: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);

/**
 * Frame-rate independent damping. `lambda` is roughly "speed"; higher = snappier.
 * Keeps easing consistent whether the tab runs at 60 or 120fps.
 */
export const damp = (a: number, b: number, lambda: number, dt: number) =>
  lerp(a, b, 1 - Math.exp(-lambda * dt));

export const round = (v: number, p = 100) => Math.round(v * p) / p;
