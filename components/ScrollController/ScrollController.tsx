'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { scrub } from '@/lib/interaction/store';
import { cameraMarks } from '@/lib/content';
import { clamp, mapRange } from '@/lib/interaction/math';

/**
 * Owns global motion: Lenis smooth-scroll wired into GSAP ScrollTrigger, and
 * the scroll→frame mapping that turns the page into a cinematic timeline.
 *
 * The provided asset is a single linear camera move, so we drive it with a
 * piecewise map across the "cinematic block" (hero → performance → engineering)
 * and a second stage across the workshop section for the closing pull-back.
 */
export default function ScrollController() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.registerPlugin(ScrollTrigger);

    // --- Lenis smooth scroll (disabled for reduced-motion / coarse pointers) ---
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    let lenis: Lenis | null = null;
    if (!reduce) {
      lenis = new Lenis({
        duration: coarse ? 0.9 : 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.4,
        wheelMultiplier: 1,
      });
      lenis.on('scroll', ScrollTrigger.update);
      const ticker = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    const M = cameraMarks;

    const ctx = gsap.context(() => {
      // ===== Stage 1: the cinematic block =====
      ScrollTrigger.create({
        trigger: '#cinematic-block',
        start: 'top top',
        end: 'bottom bottom',
        scrub: reduce ? true : 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          // hero owns pointer parallax only near the very top
          scrub.heroInfluence = clamp(1 - p / 0.16);

          let frame: number;
          if (p < 0.26) {
            frame = mapRange(p, 0, 0.26, M.heroFront, M.heroFrontEnd);
          } else if (p < 0.56) {
            frame = mapRange(p, 0.26, 0.56, M.heroFrontEnd, M.orbitProfile);
          } else {
            frame = mapRange(p, 0.56, 1, M.orbitProfile, M.engineReveal);
          }
          scrub.scrollTarget = clamp(frame);
        },
      });

      // ===== Stage 2: workshop closing pull-back =====
      ScrollTrigger.create({
        trigger: '#workshop',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: reduce ? true : 0.5,
        onUpdate: (self) => {
          scrub.heroInfluence = 0;
          scrub.scrollTarget = clamp(
            mapRange(self.progress, 0, 1, M.engineReveal, M.pullBack)
          );
        },
      });

      // Booking holds on the final full-vehicle frame.
      ScrollTrigger.create({
        trigger: '#booking',
        start: 'top center',
        onEnter: () => {
          scrub.scrollTarget = M.pullBack;
        },
      });
    });

    // Recalculate on load of async assets / font swap.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(refreshTimer);
      ctx.revert();
      lenis?.destroy();
    };
  }, []);

  return null;
}
