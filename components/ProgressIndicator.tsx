'use client';

import { forwardRef } from 'react';
import { journeyStages } from '@/data/journeyStages';

type Props = {
  activeIndex: number;
};

/**
 * Minimal stage indicator.
 *  - Desktop: a vertical 01–08 rail on the right; the active number is
 *    highlighted and its tick extends.
 *  - Mobile: a slim horizontal fill bar. The parent updates `barRef` width
 *    directly (via ref) so the bar tracks scroll without React re-renders.
 */
const ProgressIndicator = forwardRef<HTMLSpanElement, Props>(
  function ProgressIndicator({ activeIndex }, barRef) {
    return (
      <>
        {/* Desktop vertical rail */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-start gap-3 lg:flex xl:left-10"
        >
          {journeyStages.map((stage, i) => {
            const active = i === activeIndex;
            return (
              <div key={stage.id} className="flex items-center gap-3">
                <span
                  className={[
                    'block h-[2px] rounded-full transition-all duration-500 ease-expo',
                    active ? 'w-8 bg-gold' : 'w-4 bg-line',
                  ].join(' ')}
                />
                <span
                  className={[
                    'text-[11px] font-semibold tabular-nums transition-all duration-500',
                    active ? 'text-charcoal' : 'text-charcoal-muted/45',
                  ].join(' ')}
                >
                  {String(stage.id).padStart(2, '0')}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile horizontal progress */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-5 bottom-5 z-20 lg:hidden"
        >
          <div className="flex items-center justify-between pb-2">
            <span className="text-[10px] font-semibold uppercase tracking-ultra text-charcoal-muted">
              {String(journeyStages[activeIndex].id).padStart(2, '0')} /{' '}
              {String(journeyStages.length).padStart(2, '0')}
            </span>
          </div>
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-line">
            <span
              ref={barRef}
              className="block h-full rounded-full bg-gold"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </>
    );
  },
);

export default ProgressIndicator;
