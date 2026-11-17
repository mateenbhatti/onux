# Meta ads structure and optimisation for low-budget (Rs 400-3,000/day) single-store e-commerce advertisers

Method caveat: WebFetch was blocked for facebook.com, developers.facebook.com, jonloomer.com and conversios.io (hosts not in session network allowlist). Findings below come from WebSearch result summaries only, mostly third-party vendor/agency blogs. I did NOT read Meta Help Center pages directly. Anything labelled "practitioner heuristic" is not Meta policy. Re-verify key numbers against Meta Business Help Center before the audit treats them as hard rules.

## 1. Learning phase and Learning Limited

### Takeaway
Learning phase ends at roughly 50 optimisation events in 7 days per ad set; below it the ad set shows Learning Limited (delivery continues, but optimisation is less stable). At Rs 400-3,000/day this threshold is usually unreachable on purchase events, so consolidation and (cautiously) a higher-frequency event are the main levers.

### Cited Findings
- ~50 optimisation events within 7 days exits learning; Learning Limited shows when an ad set is not getting enough events or is predicted not to. It is not a penalty, ads keep running. Sources are third-party, not Meta's own page — [Lebesgue](https://lebesgue.io/blog/facebook-ads-learning-phase/), [Cometly](https://www.cometly.com/post/facebook-ads-learning-phase-optimization)
- Budget floor heuristic: target CPA x 50 / 7 per day per ad set (e.g. $25 CPA ~ $179/day). Vendor heuristic — [Lebesgue](https://lebesgue.io/blog/facebook-ads-learning-phase/)
- Typical causes: budget too low, audience too narrow, under-reported tracking, budget split across many ad sets — [Lebesgue](https://lebesgue.io/blog/facebook-ads-learning-phase/)
- Significant edits (targeting, creative, optimisation event, bid strategy, budget change above ~20%) re-enter learning; pausing 7+ days also resets per one source — [Cometly](https://www.cometly.com/post/facebook-ads-learning-phase-optimization), [Rocketship HQ](https://www.rocketshiphq.com/?p=5223)
- Fixes listed: consolidate ad sets, realistic budget, broaden targeting. Lebesgue warns against switching to add-to-cart purely to escape Learning Limited because audience quality drops — [Lebesgue](https://lebesgue.io/blog/facebook-ads-learning-phase/)
- Single-vendor, uncorroborated claim: after an "April 2026 Andromeda update" typical learning exit stretched to 7-14 days — [Pixis/Rocketship results via search](https://pixis.ai/blog/ai-learning-phases-why-advertisers-kill-campaigns-too-early/) (unverified)

### Inferences
- Rs 1,000/day (~$12) with a ~Rs 500-1,000 CPA yields ~1-2 purchases/day, i.e. 7-14/week, far below 50. An audit should flag purchase-optimised ad sets in Learning Limited, and multiple ad sets splitting the budget, as expected rather than anomalous.
- Optimising for add-to-cart/initiate checkout is defensible when purchases/week per ad set are well under 50 and ATC volume is meaningful, but should be paired with checking downstream cost per purchase (COD fake/low-intent orders make this risk higher). This is my inference; no source gave a direct test.

### Gaps
- Meta's own wording on learning phase, and whether Meta changed the 50-event rule in 2025-26: not retrieved (blocked).
- No rigorous evidence found on when higher-funnel optimisation helps vs harms.

## 2. Advantage+ sales, Advantage+ audience/placements/creative

### Takeaway
No official minimum budget found; practitioners cite ~$100/day as a practical testing level for Advantage+ sales, and warn it suits low-volume accounts poorly unless budget is concentrated in one campaign.

### Cited Findings
- Meta renamed Advantage+ Shopping to Advantage+ sales in 2025; legacy ASC creation ended in Marketing API v24.0 — [Meta developers blog (via search snippet)](https://developers.facebook.com/blog/post/2025/06/03/advantage-plus-campaign-experience-for-sales-and-app/), [Meta ASC docs](https://developers.facebook.com/docs/marketing-api/guides/advantage-shopping-campaigns)
- No universal official minimum; ~$100/day common benchmark; spend below that struggles to collect data; £5-10/day workable if concentrated in one ad set — [TryVizup](https://www.tryvizup.com/blog/meta-ads-minimum-budget-requirements-2026), [Lilach Bullock](https://www.lilachbullock.com/facebook-ad-tools-small-budgets/)
- Existing-customer budget cap: status conflicting (one source says removed, others still describe it; Meta docs say it requires defining existing customers as custom audiences). Suggested 10-30% cap, or 0% with separate retargeting — [AdManage](https://admanage.ai/blog/meta-advantage-plus-shopping-campaigns), [Jon Loomer ASC guide](https://www.jonloomer.com/advantage-plus-shopping-campaigns/), [Adwisely](https://adwisely.com/glossary/advantage-plus-shopping/)
- ASC works poorly for tight audience control, limited budgets, niche products — [Adwisely](https://adwisely.com/glossary/advantage-plus-shopping/)
- Unconfirmed claim that Meta lowered the 50-conversions/week guidance for ASC in March 2026 — [1ClickReport](https://www.1clickreport.com/blog/advantage-plus-shopping-25-conversions-2026-guide) (single source)

### Inferences
- For Rs 400-3,000/day, a single prospecting campaign (Advantage+ sales or a broad manual sales campaign) is more defensible than several parallel campaigns; the audit should check for fragmentation first.

### Gaps
- Advantage+ audience / placements / creative specifics (e.g. enhancements opt-ins) not retrieved. Current existing-customer cap UI status unverified.

## 3. CBO vs ad-set budgets, ads per ad set, creative testing, kill rules

### Takeaway
Consolidate; scale ad count to budget; judge ads only after ~2-3x (some say 3-5x) target CPA spend or ~3 conversions. Meta's old "~6 ads per ad set" guidance has been relaxed under Andromeda.

### Cited Findings
- Spend at least 2-3x target CPA before a kill decision (worked $30 example) — [AdManage](https://admanage.ai/blog/when-to-kill-a-facebook-ad), [Flighted](https://www.flighted.co/blog/how-to-know-when-to-pause-a-meta-ad)
- Flighted: 3x CPA minimum, 5x for cleaner signal; rule of ~3 conversions at target CPA; judge by conversions not days; do not divide budget across more concepts than it can support — [Flighted](https://www.flighted.co/blog/how-to-calculate-your-meta-ads-creative-testing-budget)
- Plai: judging before 2x CPA is a common mistake — [Plai](https://help.plai.io/optimizing-meta-ads)
- 3-5x CPA per concept, 10-20% of spend reserved for testing (one source); 50 events per variant for statistical confidence is impractical for most budgets — [Madgicx](https://madgicx.com/blog/creative-testing-at-scale)
- Pausing after 3 days and ~$40 on CPA reads is "no statistical meaning"; check landing page before blaming creative — [MHI Media](https://mhimedia.beehiiv.com/p/your-cpa-problem-isn-t-your-creative)
- Jon Loomer (Sept 2025): can now create 10, 20, even 50 ads per ad set; his tests of 25 and 50 showed no clear advantage — [Jon Loomer on Andromeda](https://www.jonloomer.com/meta-andromeda/)
- Under ~$10k/month: 8-12 new, conceptually distinct creatives per month (vendor suggestion); copy-only changes may not count as diversity; Meta publishes no similarity thresholds — [Segwise](https://segwise.ai/blog/meta-andromeda-update-marketing-impact), [Common Thread Collective](https://commonthreadco.com/blogs/coachs-corner/meta-andromeda-roas-creative-strategy-2026)

### Inferences
- With ~Rs 600-1,000 CPA, 2-3x CPA means Rs 1,200-3,000 per ad before judging, which is 1-3 days of the whole account budget. So an audit should expect ~3-5 ads total, not 10+ ad sets of tests.

### Gaps
- CBO vs ABO: no usable evidence found in these searches (not retrieved).
- Meta's current official ads-per-ad-set statement not retrieved directly.

## 4. Measurement: Pixel + CAPI, EMQ, dedup, attribution

### Takeaway
Run Pixel and CAPI together with shared event_id for dedup; monitor EMQ and event coverage in Events Manager. Default attribution is 7-day click + 1-day view; some window changes occurred in 2026 (single-source details).

### Cited Findings
- Meta Dataset Quality API: EMQ assesses whether customer info sent via CAPI matches events to Meta accounts; event coverage = 7-day avg % of Pixel events also covered by CAPI; deduplication keys shared between Pixel and CAPI events — [Meta Dataset Quality API docs](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api)
- Default attribution 7-day click, 1-day view — [Triple Whale](https://www.triplewhale.com/blog/facebook-attribution), [Benly](https://benly.ai/learn/meta-ads/meta-ads-attribution-guide)
- 7-day view and 28-day view windows removed from Insights API on 12 Jan 2026 — [Conversios](https://www.conversios.io/blog/meta-attribution-window-changes-2026-fix-your-tracking/) (single source; verify)
- March 2026: only link clicks count for click-through; likes/shares/comments moved to a separate 1-day engage-through window — [Conversios](https://www.conversios.io/blog/meta-attribution-window-changes-2026-fix-your-tracking/) (single source; verify)
- Dedup and conflicting reporting guidance — [Jon Loomer](https://www.jonloomer.com/meta-conversion-events-deduplication-and-conflicting-reporting/) (page not read)
- Match quality ~7-8 after CAPI is an anecdotal benchmark, no official Meta EMQ target found — [Singh Amandeep](https://singhamandeep.com/?p=1626)

### Gaps
- Official EMQ target, standard-event list, AEM current status, and dedup field requirements (event_name + event_id) not verified from Meta. Common knowledge: Purchase, AddToCart, InitiateCheckout, ViewContent should be sent, but I have no fetched citation.

## 5. Retargeting and exclusions

### Takeaway
Small stores: keep retargeting small and separate, exclude purchasers from prospecting.

### Cited Findings
- Workaround where full exclusion not possible in ASC: separate small-budget ad set for past purchasers, excluded from main — [Adwisely](https://adwisely.com/glossary/advantage-plus-shopping/)
- Small catalog: one ASC with 10-15% existing-customer cap plus separate retargeting; high-quality statics suit small catalogs — [Jetfuel](https://jetfuel.agency/meta-advantage-shopping-campaigns-for-ecommerce-and-cpg-brands-the-2026-guide/)

### Gaps
- Catalog/dynamic retargeting minimum audience sizes and WCA window recommendations not retrieved. Small-site retargeting pools likely too small to be worth separate budget (inference).

## 6. Creative fatigue, frequency, Reels/UGC

### Takeaway
No official Meta frequency threshold; vendors use ~2.5-3 for prospecting as early warning.

### Cited Findings
- Meta does not attach a frequency threshold to fatigue labels — [Ppc.land](https://ppc.land/creative-fatigue/)
- Frequency 2.5-3.0 early warning; retargeting tolerates up to 5-6 — [Stackmatix](https://www.stackmatix.com/blog/meta-ads-frequency-management)
- Refresh every 2-4 weeks for cold prospecting at meaningful spend; every 1-2 weeks new inputs for DR; accounts under $10k/month can extend; small audiences (<100k) burn faster; CTR down 25% from peak as trigger — [Segwise](https://segwise.ai/blog/how-often-refresh-ad-creatives), [Madgicx](https://madgicx.com/blog/meta-creative-burnout-prevention)
- Mix UGC, testimonials, demos; 9:16 short-form alongside 1:1/carousel — [Pipeboard](https://pipeboard.co/guides/creative-volume-andromeda)

### Gaps
- No Meta primary source on Reels specs/best practice retrieved.

## 7. Scaling rules

### Takeaway
No official Meta number; common heuristic is +20% every 3-4 days, smaller (<10%) near learning.

### Cited Findings
- 20% is practitioner rule, not Meta guidance; wait 3-5 days between changes; <10%/day for low-volume; one test saw CPA above target for 4 days after +20% — [Relevant Audience](https://www.relevantaudience.com/facebook-ads/how-to-scale-facebook-ads/), [Leadenforce](https://leadenforce.com/blog/the-right-way-to-increase-ad-budgets-without-resetting-learning), [Rocketship HQ](https://www.rocketshiphq.com/?p=5713)

### Inferences
- At Rs 1,000/day, a 20% step is Rs 200; fine-grained, so audits should flag jumps like Rs 500 to Rs 1,500 as likely resets.

### Gaps
- Meta's own stated threshold for budget edits that trigger re-learning not verified.

## 8. 24-72 hour decision rules

### Takeaway
Do not judge before 2-3x CPA spend or ~3 conversions; early reads at 3 days/$40 are noise (see section 3 sources). Use leading indicators (CTR, hook rate, CPC, ATC rate) plus landing-page checks while waiting; no sourced thresholds retrieved for these.

### Gaps
- No credible sourced numeric CTR/hook-rate benchmarks gathered; Haus/Motion/Foxwell/Common Thread incrementality or benchmark studies not retrieved beyond the Common Thread Andromeda article above.
