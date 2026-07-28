'use client';

import { useEffect } from 'react';
import { scrub } from '@/lib/interaction/store';
import { clamp } from '@/lib/interaction/math';

/**
 * Translates raw pointer input into the normalized values the FrameStage reads.
 * Kept separate from the canvas so the canvas loop stays a pure reader.
 *
 *  pointerX/Y  → overscan parallax (left/right/up/down camera pan illusion)
 *  pointerScrub→ a small forward frame nudge on the hero, so moving toward the
 *                right actually begins the orbit — the "control the camera" beat.
 */
export default function PointerTracker() {
  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (coarse) return; // touch handled by natural scroll scrubbing

    let lastX = 0;
    let lastY = 0;
    let lastT = performance.now();

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      const now = performance.now();
      const dt = Math.max(1, now - lastT);
      const speed = Math.hypot(e.clientX - lastX, e.clientY - lastY) / dt;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;

      scrub.pointerX = clamp(nx);
      scrub.pointerY = clamp(ny);
      scrub.pointerSpeed = Math.min(1, speed);
      // right of centre nudges the orbit forward; left eases back toward front
      scrub.pointerScrub = clamp((nx - 0.5) * 2, -0.6, 1);
    };

    // Ease pointer back to centre when it leaves the window.
    const onLeave = () => {
      scrub.pointerX = 0.5;
      scrub.pointerY = 0.5;
      scrub.pointerScrub = 0;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerout', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerout', onLeave);
    };
  }, []);

  return null;
}
