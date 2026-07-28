'use client';

import { useEffect, useRef, useState } from 'react';
import { lerp } from '@/lib/interaction/math';

/**
 * Minimal dot cursor with a trailing ring. Expands over interactive elements
 * (any element carrying data-cursor). Fully disabled on touch / coarse pointers.
 */
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<'default' | 'hover'>('default');
  const [label, setLabel] = useState('');

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let rx = target.x;
    let ry = target.y;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        if (dot.current) dot.current.style.opacity = '1';
        if (ring.current) ring.current.style.opacity = '1';
      }
      const el = (e.target as HTMLElement)?.closest?.('[data-cursor]') as
        | HTMLElement
        | null;
      if (el) {
        setVariant('hover');
        setLabel(el.dataset.cursor || '');
      } else {
        setVariant('default');
        setLabel('');
      }
    };

    const onLeave = () => {
      visible = false;
      if (dot.current) dot.current.style.opacity = '0';
      if (ring.current) ring.current.style.opacity = '0';
    };

    let raf = 0;
    const loop = () => {
      if (dot.current)
        dot.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      const t = reduce ? 1 : 0.18;
      rx = lerp(rx, target.x, t);
      ry = lerp(ry, target.y, t);
      if (ring.current)
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerout', onLeave);
    document.documentElement.classList.add('has-custom-cursor');

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerout', onLeave);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <div
        ref={dot}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white opacity-0 transition-opacity duration-300 will-change-transform"
      />
      <div
        ref={ring}
        className={`fixed left-0 top-0 flex items-center justify-center rounded-full border opacity-0 transition-[width,height,background-color,border-color] duration-300 ease-power will-change-transform ${
          variant === 'hover'
            ? 'h-16 w-16 border-white/30 bg-white/5 backdrop-blur-[1px]'
            : 'h-9 w-9 border-white/25'
        }`}
      >
        {label && (
          <span className="text-[9px] font-medium uppercase tracking-ultra text-white/80">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
