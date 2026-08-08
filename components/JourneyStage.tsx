'use client';

import type { JourneyStage as Stage } from '@/data/journeyStages';

/**
 * A single stage of the scroll story. All eight are rendered stacked; the
 * parent toggles `active` to crossfade between them via opacity (robust at any
 * scroll speed — no exit/enter serialization). Kept presentational.
 */
export default function JourneyStage({
  stage,
  active,
}: {
  stage: Stage;
  active: boolean;
}) {
  return (
    <div
      className={[
        'max-w-md transition-all duration-700 ease-expo',
        active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
      ].join(' ')}
      aria-hidden={!active}
    >
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-ultra text-gold-deep">
        {stage.label}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tightest text-charcoal sm:text-4xl lg:text-[2.9rem]">
        {stage.title}
      </h2>
      <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-charcoal-soft">
        {stage.copy}
      </p>

      {stage.cta && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={stage.cta.primary.href}
            tabIndex={active ? 0 : -1}
            className="rounded-full bg-charcoal px-6 py-3 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-rice-green"
          >
            {stage.cta.primary.label}
          </a>
          <a
            href={stage.cta.secondary.href}
            tabIndex={active ? 0 : -1}
            className="rounded-full border border-charcoal/20 px-6 py-3 text-[13px] font-semibold tracking-wide text-charcoal transition-colors hover:border-charcoal/50"
          >
            {stage.cta.secondary.label}
          </a>
        </div>
      )}
    </div>
  );
}
