# Meta ad product suitability and unit economics for Pakistan COD (Nov 2026)

Method note: transparency.meta.com could not be opened with WebFetch (DNS failure, host not in the session's allowed network domains). All Meta policy points come from WebSearch result summaries, some of which quoted Meta's own pages (URLs below). Anything not on a Meta URL is third-party. Practitioner rules (testing multiples, margin tiers) come from agency and vendor blogs, not Meta. Earlier reports (Next two ad products Pakistan; Pakistan ecommerce ads strategy; Andromeda 2 playbook) were read and are not repeated except where the numbers are reused. Prior-report model for comparison: delivered profit = (price + Rs 200 shipping) - cost - Rs 500 courier - 4% of order, which put the SP-90A at about Rs 2,692 per delivered parcel. The model below is simpler: it excludes the Rs 200 shipping income and the 4% deduction. Both are assumptions the store should verify.

## 1. What gross margin and price range make Meta ads viable on COD in Pakistan?

### Takeaway
Viability is set by absolute rupees of gross profit per order, not by margin percent. With about Rs 500 courier, 55-75% delivery and Rs 800 cost per Meta purchase, an order needs roughly Rs 1,700-2,400 gross profit (price minus cost) just to break even. A realistic target is Rs 2,800 or more, which in practice means a retail price of roughly Rs 7,000-25,000 at 25-40% gross margin. Rs 1,710 earbuds cannot work on paid Meta COD at any delivery rate, while the SP-90A and HP 2320 clear the bar.

### Cited Findings
- Store inputs given by the requester: SP-90A sells Rs 12,700 and costs Rs 9,120. HP DeskJet 2320 sells Rs 20,200 and costs Rs 15,000. JOYROOM EC06 sells Rs 1,710 and costs Rs 1,150. Courier is about Rs 500 per parcel, delivered rate 55-75%, recent Meta cost per purchase about Rs 800 (Meta-reported). — requester-provided
- Generic break-even CPA formula: average order value - product cost - shipping - payment fees. Some calculators also deduct a refund allowance, and one suggests aiming for 60-70% of break-even CPA as a safety margin. — [Adstellar CPA calculator](https://www.adstellar.ai/cpa-calculator), search summary; [Copyfy CPA calculator](https://www.copyfy.io/en/tools/cpa-calculator)
- Margin tiers from practitioner blogs: one says 50-70% margin is the sweet spot for paid ads, another that products need at least 50% margin before paid ads are viable. These are generic DTC rules, not COD or Pakistan specific. — [Pulse](https://www.pulse.bot/retail/news/how-your-product-margins-should-dictate-your-ad-budget-c11db0b9-e31c-4641-9a43-49d60df743aa), search summary
- No source confirmed a "price at least 3x landed cost" rule. — search summary (no source found)
- COD return/RTO claims in Pakistan conflict and are all vendor claims: DHL Pakistan says about 1 in 5 (about 18-20%); Simpaisa 25-30%; EasySell says often above 40% in COD-heavy markets. One merchant guide says there is no audited national figure. — [DHL Pakistan](https://www.dhl.com/discover/en-pk/e-commerce-advice/e-commerce-best-practice/subscription-marketing/how-pakistani-e-commerce-sellers-can-reduce-cod-returns); [Simpaisa](https://www.simpaisa.com/blogs/why-cash-on-delivery-is-killing-your-e-commerce-business-and-what-to-do); [EasySell](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026); [Markaz COD returns](https://www.markaz.app/blog-post/cod-return-rates-in-pakistan-how-to-reduce-them)
- One source argues operational failures, not fraud, cause 70% of COD delivery failures in Pakistan/Bangladesh; DHL ties high returns to no upfront commitment and social-media impulse buying. — [EasySell](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026); [DHL Pakistan](https://www.dhl.com/discover/en-pk/e-commerce-advice/e-commerce-best-practice/subscription-marketing/how-pakistani-e-commerce-sellers-can-reduce-cod-returns)
- Prior store report: the seller's reported 38% return rate on printers, Rs 467 per booking vs Rs 812 per purchase Meta cost (definition mismatch), and a Rs 2,700 delivered-profit floor. — /home/user/onux/reports/Next two ad products Pakistan.md
- Prior store report: Facebook ad audience in Pakistan about 80% male (DataReportal, 2024). — /home/user/onux/reports/Pakistan ecommerce ads strategy.md

### Inferences
Model used (my arithmetic, assumptions flagged): profit per order placed = d x (price - cost - 500) - (1-d) x 500 - CPA. Here d is the delivered share, the Rs 500 is paid on every parcel (including returns), and no return-leg fee, no payment/tax deduction (4% in the prior model) and no shipping fee charged to the buyer are included. Real returns may cost more (return freight, damaged stock), which makes the thresholds below optimistic.

Worked examples (gross profit G = price - cost):

| Product | Price | Cost | G | G % of price | Break-even CPA at d=55% | d=65% | d=75% | Net per order at Rs 800 CPA (55/65/75%) |
|---|---|---|---|---|---|---|---|---|
| SP-90A thermal printer | 12,700 | 9,120 | 3,580 | 28% | ~1,469 | ~1,827 | ~2,185 | +669 / +1,027 / +1,385 |
| HP DeskJet 2320 | 20,200 | 15,000 | 5,200 | 26% | ~2,360 | ~2,880 | ~3,400 | +1,560 / +2,080 / +2,600 |
| JOYROOM EC06 earbuds | 1,710 | 1,150 | 560 | 33% | negative (-192) | negative (-143) | negative (-80) | -992 / -943 / -880 |

- Required gross profit per order to break even at Rs 800 CPA: G = 500 + (CPA + (1-d) x 500) / d. That is about Rs 2,364 at d=55%, Rs 2,000 at d=65%, Rs 1,733 at d=75%. Adding a Rs 500 profit target per order placed adds 500/d (about Rs 670-910), so target G is about Rs 2,700-3,300.
- Hard rule: minimum Rs 2,000 gross profit per order placed (floor); Rs 2,800+ preferred. At CPA Rs 600 the floor falls to about Rs 1,800; at Rs 1,000 it rises to about Rs 2,300.
- Margin percent follows from price: Rs 2,800 G needs price of at least Rs 7,000 at 40% margin, about Rs 10,000 at 28%, about Rs 14,000 at 20%. Margin below 20% is only workable above about Rs 15,000 (HP 2320 at 26% works because G is Rs 5,200).
- Price bands (inference): under Rs 2,000 retail, structurally unprofitable on paid Meta COD unless bundled to Rs 3,500+ (earbuds are a bundle or marketplace/organic item, not a Meta-ad product). Rs 2,000-5,000 (impulse): only if margin is above 55% (cost under about 45% of price) and delivery is above 65%. Rs 5,000-15,000 (considered, sweet spot): need 25-40% margin. Rs 15,000-30,000 (high consideration): 18-25% margin is enough, but only with phone confirmation, because refusal costs more stock risk and the buyer deliberates at the door. Prior report found that even at Rs 12,500 the store had a 38% return rate, so a high ticket does not by itself lower returns.
- Delivery rate matters as much as margin: for the SP-90A, moving delivery from 55% to 75% raises break-even CPA by about Rs 716 (49%). A 10-point change in delivery is worth about Rs 350 per order at this margin.
- Reconcile the Rs 800 first. Meta "purchases" under COD fire at order placement, so Rs 800 per purchase is cost per placed order, not per delivered order. Cost per delivered order = 800 / d, i.e. Rs 1,455 at 55% and Rs 1,067 at 75%. Do not subtract 800 once more after multiplying by d.

### Gaps
- No Pakistan courier rate card (Leopards, Trax, PostEx, TCS) was found; Rs 500 is the requester's number. Whether the return leg is billed separately is unverified.
- No category-level RTO data for printers, earbuds or cameras was found, only generic ranges.
- The 4% tax/fee component from the prior model and any buyer-paid shipping fee are not included.

## 2. Which Meta ad policies matter for mini/WiFi cameras, smart devices, power banks, printers (and claims wording)?

### Takeaway
The biggest policy risk is spy/hidden cameras (prohibited or heavily restricted when marketed for covert recording), then weapons-like items (stun guns, tasers, pepper spray, batons are in Meta's weapons ban), then health/medical and unrealistic-outcome claims (relevant to massagers, "pain relief" gadgets and miracle phrasing), then counterfeit/trademark wording ("original", "first copy", "master copy"). Printers, ordinary power banks and normal-use WiFi cameras are not restricted categories, but battery, performance and brand claims can still trigger the deceptive-claims and IP policies. I could not verify Meta's exact current text on surveillance equipment from Meta's own page.

### Cited Findings
- Surveillance (spy cams): the search found no Meta Advertising Standards text on this. The closest Meta-owned text is the Audience Network policy: apps must not "serve the function of or promote the sale of spy cams, mobile phone trackers or other hidden surveillance equipment." That governs Audience Network apps, not Facebook/Instagram ads in general. — [Meta Audience Network policy](https://developers.facebook.com/docs/audience-network/optimization/best-practices/an-policy)
- A third-party agency guide says Meta's ad rules bar surveillance equipment marketed for spying on people without consent; a Filmora article lists "Spy Cams and Surveillance Equipment" among restricted Facebook ad categories. Neither quotes Meta's wording, so treat as unverified. — [MarketingAgency.sg](https://marketingagency.sg/meta-ads-policies); [Filmora](https://filmora.wondershare.com/more-tips/medical-and-health-facebook-ads-campaign-tips.html)
- Comparison, Google (not Meta): Google bans surveillance equipment (cameras, audio recorders, dash cams, nanny cams) marketed with the express purpose of spying. A third-party platform's help page says only ads that clearly promote legitimate use are allowed. These indicate the common industry line (covert purpose banned, legitimate security use allowed) but are not Meta rules. — [Search Engine Land](https://searchengineland.com/?p=337464); [Match2One](https://help.match2one.com/en/articles/8282632-limited-content-spy-cams-or-surveillance-equipment)
- Meta's Advertising Standards introduction: Meta reviews ads and also monitors and investigates advertiser behavior beyond individual ads; advertisers can request review of a rejected ad. — [Meta Advertising Standards intro](https://transparency.meta.com/policies/ad-standards/)
- Weapons: Meta's Weapons, Ammunition or Explosives policy says ads must not promote the sale or use of weapons, ammunition or explosives. Its text lists "pepper spray, non-culinary knives/blades/spears, tasers, nunchucks, batons, or weapons intended for self-defense." Stun guns are not named in the results found. Weapon modification accessories are also covered; firearm safety courses and books are allowed. Third-party guides add paintball/BB guns and fireworks (unverified). — [Meta weapons policy](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/weapons-ammunitions-explosives); [Adamigo FAQ](https://www.adamigo.ai/blog/meta-ads-policy-faq-weapons-explosives)
- Health claims: Meta's Health and Wellness page says depictions must reflect realistic outcomes over time and should not include side-by-side comparisons. Personal Health and Appearance bars ads that imply or try to generate negative self-perception. Ads cannot assert or imply knowledge of a viewer's health or body (e.g., "Are you over 40 and dealing with joint pain?"). — [Meta Health and Wellness](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness); [Meta Personal Health and Appearance](https://transparency.meta.com/policies/ad-standards/objectionable-content/personal-health-and-appearance)
- Unrealistic outcomes: Meta's policy covers health, weight loss and economic claims; promoting specific results with no qualifying language is a listed violation. Sources disagree on whether before/after images are banned outright or only for weight-loss/wrinkle products. — [Meta Unrealistic Outcomes](https://transparency.meta.com/policies/ad-standards/deceptive-content/unrealistic-outcomes); disagreement noted in search summary of [Relevant Audience](https://www.relevantaudience.com/facebook-ads/facebook-ad-banned-words-meta-policy/)
- Counterfeits and IP: Meta's IP standard bars content that infringes third-party rights including copyright and trademark, and covers counterfeit goods, i.e. products that copy another company's trademark (name or logo) and/or distinctive features to imitate a genuine product. Meta says it can act even without a rights-holder report. — [Meta Copyrights and Trademarks](https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/copyright-and-trademarks); [Meta third-party infringement](https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/third-party-infringement)
- Meta has joined legal action against counterfeiters (Louboutin, 2023) and rights holders get Brand Rights Protection tools. — [Meta Newsroom](https://about.fb.com/news/2023/11/meta-and-christian-louboutin-file-joint-lawsuit-against-counterfeiter/)
- Pakistan context: a 2018 Digital Rights Monitor report says hundreds of Facebook pages sold substandard or counterfeit items to Pakistanis and Facebook said these violated its commerce and ad policies; Daraz delisted 5,000+ substandard sellers (per prior report). I found no sources documenting "first copy"/"master copy" wording specifically. — [Digital Rights Monitor](https://digitalrightsmonitor.pk/hundreds-of-scammers-allegedly-selling-substandard-items-to-pakistanis-on-facebook/); [Profit](https://profit.pakistantoday.com.pk/?p=97679)
- Meta's personal-attributes and business-practices rules (cure claims, idealized images) were already cited in the prior strategy report. — /home/user/onux/reports/Pakistan ecommerce ads strategy.md

### Inferences
Product-by-product (my interpretation, not Meta rulings):
- Mini/spy/hidden cameras (pen, button, USB-charger, clock cameras): treat as red zone. Even if a page is not explicitly banned, ads that show covert use ("record without anyone knowing", spouse/staff monitoring) are most likely to be rejected, and repeated violations risk the ad account or Business Manager. Avoid the words spy, hidden, secret, covert. Safe framing is visible home/shop security, baby/elder monitoring in your own home, and "dashcam", with a camera shown openly. Branded visible WiFi cameras (EZVIZ, Imou, Tapo class) are far safer than "mini camera" SKUs. Score such products at most 2/5 on policy.
- WiFi cameras with two-way audio, tracking or night vision: fine if demos show owner use. Do not show filming people who are unaware, and do not imply tracking a person.
- Smart devices (smartwatches, bands): avoid health claims (blood pressure, ECG, glucose, "detects diabetes") and body-targeting copy. State fitness-tracker features only.
- Power banks: claims of capacity (for example "20,000mAh" real vs marked), "charges iPhone 10 times" and "never explodes" are deceptive-claims and consumer-complaint risks, and fake mAh is a classic return trigger. Quote tested real output and avoid unrealistic outcome language. I found no Meta rule specific to batteries. Aviation/shipping limits on lithium may affect courier acceptance, unverified.
- Printers and scanners: no restricted category. Risk is brand misuse (HP, Epson logos with clone/compatible hardware or refurbished units) under the trademark policy. "Compatible with" is safer than showing a brand on a non-genuine product.
- Self-defense gadgets (stun batons, tasers, pepper spray, keychain "defender"), knives, air guns, laser pointers shaped like weapons: reject as candidates. Lookalike items (toy guns, "tactical" gadgets) risk automated flagging.
- Massagers, posture correctors, pain-relief and slimming gadgets: stay within realistic-outcome rules, no before/after, no "cures", no "are you suffering from" lines.
- Brand wording: "original", "100% original", "first copy", "master copy", "A-grade", "AAA", "Apple/AirPods style" next to a logo should be avoided. "First copy" openly admits imitation and invites a counterfeit rejection and possible rights-holder takedown. "Original" is dangerous when the item is an unbranded or clone product, because it is a false claim under deceptive-content rules and a complaint magnet on COD. Sell your own brand/model name with a warranty instead.

### Gaps
- Could not open any Meta policy page; the text of the Meta surveillance-equipment standard (if one exists in the Advertising Standards) was not found. Check transparency.meta.com directly (needs the host allowed) before the electronics list is finalized.
- No official Meta page on battery or power bank claims, or on "original" wording, was found.
- No data on how often Pakistani advertisers get rejected for each category.

## 3. How do experts size a creative testing budget per product given margin?

### Takeaway
Practitioners size tests as a multiple of target CPA: about 3x CPA per concept as the minimum before judging, 5x as the conservative standard, multiplied by the number of concepts. Margin enters through target CPA (set at 50-70% of break-even CPA). For COD in Pakistan, a per-product test of roughly Rs 7,000-15,000 (3 concepts at 3-5x an Rs 800 CPA) is justified only if gross profit per order is at least Rs 2,000.

### Cited Findings
- Several sources say to spend about 3x target CPA before judging a creative; some use 2-3x per angle; 5x gives a cleaner yes/no but costs more per concept. — [Top Growth Marketing](https://topgrowthmarketing.com/meta-ads-creative-testing-framework/); [Flighted](https://www.flighted.co/blog/how-to-calculate-your-meta-ads-creative-testing-budget); [Segwise](https://segwise.ai/blog/meta-ads-creative-testing)
- Formula: daily test budget = target conversions x expected CPA / test duration, solved per concept; if you cannot fund at least 3x CPA per concept over the test window, reduce the number of concepts. — [Flighted](https://www.flighted.co/blog/how-to-calculate-your-meta-ads-creative-testing-budget)
- Other heuristics: 10-15% of total ad budget for creative testing at scale; a "$10 per ad per day" rule of thumb attributed to Meta. Sources disagree on multiplier (2x, 3x, 5x). — [Madgicx](https://madgicx.com/blog/creative-testing-at-scale); [Jeff Bullas thread](https://www.jeffbullas.com/thread/daily-ad-budget-for-testing-in-2025/); search summary
- Learning phase: about 50 optimization events per ad set per week; ad sets under 50 conversions reportedly cost about 28% more per purchase. At Rs 800 CPA that implies about Rs 5,700 per day per ad set. — [GoMarble](https://gomarble.ai/blog/meta-ads-learning-phase-understanding); [Relevant Audience](https://www.relevantaudience.com/meta/meta-50-conversions-peak-season-brief/), via prior strategy report
- A MENA COD guide suggests $20-50 per product for validation and $50-150 for creative testing, each angle run 48-72 hours; wording ambiguous. — [eGrow](https://www.egrow.com/en/blog/facebook-ads-cod-mena-testing-scaling-2026), via prior strategy report
- Prior strategy report's kill-rule suggestion: stop when spend passes 1.5-2x allowable CPA with no confirmed order. — /home/user/onux/reports/Pakistan ecommerce ads strategy.md

### Inferences
- Margin-linked sizing (my synthesis): Test budget per product = concepts x multiplier x target CPA, with target CPA = 50-70% of break-even CPA (see Q1 table). Cap the whole test at roughly 3-5 delivered-order gross profits (3-5 x G) so a failed test costs less than a handful of sales.
- SP-90A (break-even CPA about Rs 1,827 at 65%): target CPA about Rs 900-1,200; 3 concepts x 3 x Rs 800 = Rs 7,200 to 3 x 5 x 800 = Rs 12,000; cap 3-5 x Rs 3,580 = Rs 10,700-17,900. A Rs 10,000-12,000 test is in line.
- HP 2320 (G Rs 5,200): 3 concepts x 5 x 800 = Rs 12,000 is affordable (cap about Rs 15,600-26,000), but needs a confirmation call per order because each refusal strands Rs 15,000 of stock.
- Earbuds (G Rs 560, negative at all delivery rates): any test spend is a loss; skip or bundle to lift G above Rs 2,000.
- Thin-margin tier (G Rs 1,500-2,000): test only 2 concepts x 3x CPA (about Rs 4,800), kill at 1.5x CPA with no confirmed order.
- Judge on confirmed orders and cost per initiated checkout, not on learning-phase exit, since a small store cannot fund 50 events per week per ad set at these CPAs. Use a delivered or confirmed event through the Conversions API when volume allows.
- Run each test with at least 30 order-level data points before drawing delivery-rate conclusions; the earlier report noted roughly plus or minus 17 points of noise at 30 bookings.

### Gaps
- No Pakistan-specific testing-budget benchmark was found; all multiples are from global agencies and vendors with commercial interest.
- Pakistan CPM and Q4 cost inflation around 11.11 and 12.12 remain unmeasured; read the store's own Ads Manager history.

## 4. What are the typical red flags that make a product a bad Meta ad candidate in Pakistan? (and scoring framework)

### Takeaway
Red flags: gross profit under Rs 2,000 per order, price under about Rs 2,000, anything needing a prohibited framing (spy, weapon, medical claim, "first copy"), many identical Pakistani advertisers, fragile or heavy items, products that cannot be shown working in 10 seconds, and items where the buyer's quality expectations exceed what the product delivers. The scoring framework below turns these into a 100-point score with hard gates.

### Cited Findings
- COD drivers of returns: impulse buying on social media, no upfront commitment, address problems (EasySell attributes 15-20% of COD failures to address issues), and weak confirmation. Levers: call/WhatsApp confirmation, address controls, order screening and fast delivery. — [DHL Pakistan](https://www.dhl.com/discover/en-pk/e-commerce-advice/e-commerce-best-practice/subscription-marketing/how-pakistani-e-commerce-sellers-can-reduce-cod-returns); [EasySell](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026)
- Trust barrier in Pakistan: complaints about branded product shown but unbranded delivered; Daraz delisting over 5,000 substandard sellers. — [Profit](https://profit.pakistantoday.com.pk/?p=97679)
- Competition: prior ad-library sampling found earbuds, facial trimmers and collar microphones each advertised by several Pakistani pages, while projectors had about 1-3 (sample-based, no spend data). Proposed saturation thresholds: 2-10 distinct Pakistani advertisers with ads over 30 days is healthy; over 15 near-duplicates is saturated. — /home/user/onux/reports/Next two ad products Pakistan.md
- Daraz sales (11.11, 12.12) drive price comparison; branded listing more than 15% below your price is a fail signal (proposed threshold in prior report). — /home/user/onux/reports/Next two ad products Pakistan.md
- Facebook's Pakistan ad audience is about 80% male, so female-targeted products face a thin audience. — [DataReportal](https://datareportal.com/reports/digital-2024-pakistan), via prior strategy report
- Prior Andromeda playbook (creative diversity and demo-first video) was not re-researched here; see /home/user/onux/reports/Andromeda 2 ad creative playbook.md for creative guidance.

### Inferences
Scoring framework (my proposal; weights and thresholds are judgment, not benchmarks). Score each criterion 0-5, multiply by weight, total out of 100. Hard gates fail a product regardless of score.

| # | Criterion | Weight | 5 (best) | 3 | 0-1 (fail) |
|---|---|---|---|---|---|
| 1 | Gross profit per order (price - landed cost) | 25 | 3,500+ | 2,500-3,400 | under 2,000 |
| 2 | Price band | 10 | Rs 7,000-20,000 | Rs 3,500-7,000 or 20,000-30,000 | under 2,000 |
| 3 | Demonstrability: shown working in 10 seconds | 12 | single visible action/result | needs setup | needs long use, results or app pairing |
| 4 | Problem-solution clarity (one-sentence pain, visible before/after of function) | 10 | obvious daily problem | niche/business need | "nice to have" gadget |
| 5 | Weight, fragility, shipping | 8 | under 1 kg, sturdy, single box | 1-3 kg or semi-fragile | over 3 kg, glass, inkjet leaks, lithium restrictions |
| 6 | Return / fake-order risk on COD | 12 | functional, one use, low price anxiety | needs sizing/compatibility | quality-subjective, look-alike of a brand, unrealistic expectations |
| 7 | Competition saturation (Pakistani PKR advertisers) | 8 | 2-10 distinct pages, some 30+ days | 11-15 | more than 15 near-identical or zero demand signal |
| 8 | Policy safety | 10 | none | claim-sensitive (battery, health-adjacent) | spy/hidden cam, weapons-like, medical, "first copy" |
| 9 | Supply / after-sales (stock depth, exchange window, warranty) | 5 | 50+ pcs, 7+ day exchange | limited | no exchange |

Gates (any one fails the product): G under Rs 2,000 at your CPA and delivery assumption; policy score 0; unable to name a supplier with exchange for defective stock; no 10-second demo.
Interpretation: 75+ test now; 60-74 test only with a bundle or sharper angle; under 60 skip.

Scored examples (rough, based only on figures supplied or in prior reports):
- SP-90A: strong on gross profit (3,580), price band, demonstrability (a receipt or label prints in seconds), clear problem for shop owners, but 38% return rate recorded on printers in the prior report lowers the COD risk score.
- HP DeskJet 2320: highest absolute gross profit, but Rs 20,200 price raises refusal risk, weight and fragility are moderate, and the demo (printing) is less visual; likely mid-60s to 70s.
- JOYROOM EC06 earbuds: fails gate 1 (G Rs 560), price band and saturation; skip on Meta COD.
- Red-flag list in plain terms: (1) G under Rs 2,000; (2) price under Rs 2,000 or "everyone has it" gadgets; (3) spy/hidden camera, weapon-like or medical-claim items; (4) "original/first copy" positioning; (5) 15+ near-identical Pakistani pages; (6) bulky or fragile or battery items that couriers handle badly; (7) outcomes that cannot be shown quickly (slimming, hair growth, pain relief); (8) products whose real quality is below ad quality, since the buyer inspects at the door; (9) female-skewed products on an 80% male audience; (10) products where Daraz or branded sellers sit more than 10-15% below your price, especially in 11.11 and 12.12 windows.

### Gaps
- No Pakistan source quantified which product features raise or lower COD returns (weight, fragility, demonstration) beyond general COD drivers; the scoring weights are therefore my judgment and should be calibrated against the store's own SKU-level return data.
- No category-level saturation data beyond the earlier Ad Library sample, which shows neither spend nor impressions.
- Courier handling limits for lithium batteries and fragile items in Pakistan were not researched.
