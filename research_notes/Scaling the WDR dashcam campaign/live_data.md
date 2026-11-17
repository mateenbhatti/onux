# Live performance and unit economics: WDR 3-camera dashcam campaign

Conventions: Meta = Meta Ads MCP (ads_get_ad_entities), account 1668141181495650, PKR, account timezone America/Los_Angeles (PST, 13 h behind Pakistan). Shopify = Shopify MCP (run-analytics-query / search_products / get-inventory-levels), store af0ajt-h0.myshopify.com. Window "launch to date" = 2026-11-10 to 2026-11-17 (pulled 2026-11-17; 11-17 is a PARTIAL day). No sources are web URLs; all data are live tool outputs.

## 1. Day-by-day performance and stability of cost per purchase

### Takeaway
Campaign spent Rs 3,498 for 10 Meta-attributed purchases (Rs 349.8 each) over 7 live days; daily CPA ranged from Rs 54 to Rs 801 with 0-3 purchases a day, so it is pure noise at this volume: no trend can be claimed. CPM fell from ~Rs 400-500 to ~Rs 310-330; CTR steady 3.9-5.9%.

### Cited Findings
Meta, campaign 120252432299710030, time_increment 1, 2026-11-10..17 (days in PST; start_time 2026-11-10 20:59 PST = 2026-11-11 09:59 PKT, so 11-10 = 0 spend):

| Day (PST) | Spend Rs | Impr | Reach | Freq | CPM Rs | CTR | Link clicks | LPV | ATC | IC | Purch | CPA Rs |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 11-10 | 0 | 0 | 0 | 0 | - | - | - | - | - | - | - | - |
| 11-11 | 388.16 | 968 | 810 | 1.195 | 400.99 | 5.68% | 45 | 32 | 1 | 2 | 2 | 194.08 |
| 11-12 | 476.02 | 958 | 795 | 1.205 | 496.89 | 4.18% | 33 | 27 | 4 | 4 | 1 | 476.02 |
| 11-13 | 686.91 | 1577 | 1355 | 1.164 | 435.58 | 3.87% | 46 | 33 | 0 | 0 | 0 | none |
| 11-14 | 452.75 | 1195 | 1039 | 1.150 | 378.87 | 5.44% | 51 | 44 | 4 | 4 | 2 | 226.38 |
| 11-15 | 800.66 | 2551 | 2220 | 1.149 | 313.86 | 4.47% | 80 | 67 | 3 | 5 | 1 | 800.66 |
| 11-16 | 531.88 | 1735 | 1524 | 1.138 | 306.56 | 4.61% | 62 | 51 | 2 | 2 | 1 | 531.88 |
| 11-17 (partial) | 161.61 | 490 | 423 | 1.158 | 329.82 | 5.92% | 20 | 14 | 1 | 1 | 3 | 53.87 |
| Total | 3,497.99 | 9,474 | (6,172 unique, ad set) | 1.535 | 369 (calc) | ~4.8% (calc) | 337 | 268 | 15 | 18 | 10 | 349.80 |

(Totals from daily sums and ad-set record; spend/purchase/impression totals match across campaign-daily, ad-set and ad-level pulls. LPV/click = 268/337 = 79.5%. Click to purchase = 10/337 = 3.0%; LPV to purchase = 3.7%.)
- Daily spend: 0, 388, 476, 687, 453, 801, 532, 162 (partial); daily budget Rs 600 (per brief; daily_budget field not returned by tool). Spend overshoots Rs 600 on 11-13 (687) and 11-15 (801), normal Meta daily-budget flexing; under-delivers on others.
- Daily frequency 1.14-1.21 (flat); 7-day ad-set frequency 1.535 (Meta, ad set, 11-10..17).
- Cumulative (calc): spend 388, 864, 1,551, 2,004, 2,805, 3,337, 3,498; purchases 2, 3, 3, 5, 6, 7, 10; cumulative CPA Rs 194, 288, 517, 401, 468, 477, 350 (11-11 to 11-17).
- Excluding the partial 11-17 day: 3,336.38 spend / 7 purchases = Rs 476.6.
- Smoothing: any purchase-count-based CPA at n=10 has huge error; one purchase more or less on the three-purchase day swings CPA by ±Rs 100+.

### Inferences
- True CPA is likely in the Rs 300-480 band, not Rs 54 or Rs 800 (single-day extremes). 11-17's 3 purchases for Rs 161 is a partial-day outlier.
- Rising impressions on 11-15/16 at lower CPM (Rs 306-314 vs Rs 400-497 early) indicates cheaper delivery as the ad set exits early phase; clicks per Rs improved but purchase counts did not follow.

### Gaps
- No Meta days beyond 7; purchases are Meta-attributed (1d_view_7d_click) and not equal to Shopify orders (see section 5).

## 2. Per-ad comparison

### Takeaway
"UGC facts" is the clearly more efficient ad (CTR 5.88% vs 3.90%, cost per link click Rs 6.12 vs Rs 15.04, CPM Rs 285 vs Rs 425) but received only 31% of spend; both ads have 5 purchases, so CPA is Rs 215 vs Rs 484. Post-click behaviour is similar, so the difference is top-of-funnel cost.

### Cited Findings
Meta, ad level, 2026-11-10..17:

| Metric | UGC facts (…6290030) | UGC problem (…6710030) |
|---|---|---|
| Spend Rs (share) | 1,076.96 (30.8%) | 2,421.03 (69.2%) |
| Impressions | 3,778 | 5,696 |
| Reach / freq | 2,861 / 1.32 | 3,811 / 1.49 |
| CPM Rs (calc) | 285 | 425 |
| CTR (all) | 5.88% | 3.90% |
| Link clicks / cost per click | 176 / Rs 6.12 | 161 / Rs 15.04 |
| LPV (LPV per click) | 139 (79.0%) | 129 (80.1%) |
| Add to cart (per LPV) | 8 (5.8%) | 7 (5.4%) |
| Initiate checkout | 11 | 7 |
| Purchases / CPA | 5 / Rs 215.39 | 5 / Rs 484.21 |
| Video plays | 3,519 | 5,175 |
| Thruplay (of plays) | 596 (16.9%) | 591 (11.4%) |
| 25% / 50% / 95% watched | 972 / 769 / 526 | 1,274 / 795 / 535 |
| p95 as share of plays | 14.9% | 10.3% |

- Sum of ad reach (6,672) exceeds ad-set unique reach (6,172): about 500 people saw both ads.
- Per-ad daily split not pulled.

### Inferences
- Ad set allocated 69% of spend to the worse ad, so budget is not automatically following CTR; a purchase-optimised ad set follows its own predicted conversion, which on n=5 each is not distinguishable.
- Conversion difference per click: facts 5 purchases / 176 clicks = 2.8%; problem 5 / 161 = 3.1%. If true, "problem" converts clicks slightly better but pays 2.5x per click.
- Neither ad "carries" the purchases alone (5/5), though facts does it on 31% of spend.

### Gaps
- Sample is too small (5 purchases each) for significance.

## 3. Ad set settings, placements, geo, demographics, devices

### Takeaway
One Advantage+ audience ad set, Pakistan-wide, purchase-optimised, 1d_view_7d_click, with all placements enabled in settings but delivery almost entirely on Facebook Reels (59% of spend) and Facebook Feed (40%); no Instagram spend appeared at all in the breakdown. Spend is concentrated in Punjab and Sindh. Learning stage was not returned by the tool.

### Cited Findings
Meta, ad set 120252432300900030 "Dashcam - PK 25-55 - Advantage+ - Purchase":
- optimization_goal OFFSITE_CONVERSIONS, promoted_object custom_event_type PURCHASE, pixel 1796445214819168; attribution_setting 1d_view_7d_click; effective_status ACTIVE; delivery status active, substatus active; budget_remaining Rs 0 (as returned); start 2026-11-10T20:59:27-0800.
- Targeting: countries PK; location types home + frequently_in; age_min 18 / age_max 65 with age_range suggestion 25-55 (Advantage+ audience, targeting_automation advantage_audience=1, targeting_optimization expansion_all); effective publisher platforms facebook, instagram, audience_network, threads; devices mobile+desktop; placements automatic (all FB/IG positions listed).
- Returned empty/not returned: learning_stage_info, delivery_sub_status, bid_strategy, daily_budget (fields returned nothing in two calls). Cannot state learning-phase status or bid strategy from tool.

Placement breakdown (Meta, ad set, 11-10..17):

| Placement | Spend Rs | Share | Impr | Reach | CTR | Clicks | LPV | ATC | Purch | CPA Rs |
|---|---|---|---|---|---|---|---|---|---|---|
| Facebook Reels | 2,068.27 | 59.1% | 5,665 | 4,128 | 4.94% | 214 | 177 | 8 | 7 | 295.47 |
| Facebook Feed | 1,388.80 | 39.7% | 3,633 | 2,483 | 4.29% | 117 | 88 | 7 | 3 | 462.93 |
| FB search | 18.16 | 0.5% | 83 | 73 | 6.02% | 5 | 3 | 0 | 0 | - |
| FB marketplace | 8.60 | 0.2% | 55 | 39 | 1.82% | 0 | 0 | 0 | 0 | - |
| FB instream | 7.99 | 0.2% | 7 | 6 | 0% | 0 | 0 | 0 | 0 | - |
| FB profile feed | 4.31 | 0.1% | 18 | 18 | 5.56% | 0 | 0 | 0 | 0 | - |
| Audience Network classic + rewarded | 1.86 | 0.05% | 13 | 12 | - | 1 | 0 | 0 | 0 | - |
| Instagram (any) | 0 | 0% | 0 | - | - | - | - | - | - | - |

Device (same pull): mobile_app Rs 3,495.66 (99.9%), 9,463 impr, 337 clicks, 10 purchases, CPA Rs 349.57; mobile_web Rs 2.19; desktop Rs 0.14.

Region (Meta, ad set, 11-10..17; purchases returned null for every region, so no purchase-by-region from Meta):

| Region | Spend Rs | Share | Impr | Reach | Clicks |
|---|---|---|---|---|---|
| Punjab | 1,721.02 | 49.2% | 4,366 | 2,903 | 160 |
| Sindh | 856.75 | 24.5% | 2,135 | 1,307 | 99 |
| Khyber Pakhtunkhwa | 371.23 | 10.6% | 1,207 | 801 | 35 |
| Islamabad ICT | 199.05 | 5.7% | 442 | 299 | 9 |
| Balochistan | 190.07 | 5.4% | 771 | 457 | 19 |
| Azad Kashmir | 70.03 | 2.0% | 262 | 167 | 8 |
| Gilgit-Baltistan | 58.59 | 1.7% | 246 | 154 | 5 |
| FATA | 24.05 | 0.7% | 44 | 22 | 2 |
| Unknown | 0.10 | ~0 | 1 | 1 | 0 |
Cost per click: Punjab Rs 10.8, Sindh Rs 8.7, KPK Rs 10.6, ICT Rs 22.1, Balochistan Rs 10.0 (calc). City-level Meta breakdown not run (only region).

Age x gender (Meta, ad set, 11-10..17): men carry nearly all spend.

| Age (male) | Spend Rs | Impr | Clicks | Purch | CPA Rs |
|---|---|---|---|---|---|
| 18-24 | 205.28 | 657 | 16 | 1 | 205 |
| 25-34 | 911.49 | 3,000 | 85 | 3 | 304 |
| 35-44 | 1,184.69 | 3,172 | 112 | 2 | 592 |
| 45-54 | 561.60 | 1,428 | 67 | 2 | 281 |
| 55-64 | 264.11 | 665 | 41 | 2 | 132 |
| 65+ | 202.80 | 192 | 9 | 0 | - |
- Female all ages: spend ~Rs 161 total (about 4.6%), 0 purchases. 65+ male: Rs 203 spent, 0 purchases. Total non-25-55 spend in men: 18-24, 55-64, 65+ = Rs 672 (19%), 3 of 10 purchases.
- Frequency and reach: ad-set unique reach 6,172 over 9,474 impressions, 7-day frequency 1.535; 65% of daily reach appears new each day (daily reach/impr = 0.83-0.88).

### Inferences
- Reels is carrying 7 of 10 purchases at Rs 295 vs Feed Rs 463; small n.
- Audience is Pakistan-wide, Punjab+Sindh = 74% of spend. There is no saturation signal at this scale (daily frequency 1.14-1.2, 7-day 1.5).
- 35-44 men are the largest spend bucket but the worst CPA (Rs 592); not significant.

### Gaps
- No tool for audience-size estimate, so reach as share of the plausible audience cannot be computed. learning_stage_info, bid_strategy, daily_budget not returned. No city-level or purchase-by-region data from Meta.

## 4. Hour-of-day pattern

### Takeaway
Spend is concentrated in PST 00:00-12:59 (= PKT 13:00-01:59 next day): 70.8% of spend and 8 of 10 purchases; PST 13:00-16:59 (= PKT 02:00-05:59) is near zero. Morning Pakistan time (PKT 06-12 = PST 17-23) takes about 24% of spend, so the owner's observation "not much during the day" is only partly supported: PKT mid-afternoon to night dominates.

### Cited Findings
Meta, ad set, hourly_stats_aggregated_by_advertiser_time_zone (PST), 11-10..17, spend Rs / purchases:
PST 00: 106/2; 01: 217/2; 02: 112/0; 03: 132/1; 04: 184/0; 05: 185/2; 06: 261/0; 07: 185/0; 08: 203/0; 09: 338/0; 10: 248/1; 11: 157/0; 12: 150/0; 13: 58/0; 14: 58/0; 15: 27/0; 16: 40/0; 17: 77/0; 18: 70/0; 19: 123/0; 20: 199/0; 21: 154/1; 22: 98/0; 23: 116/1.
- PST 00-05 (PKT 13:00-18:59): spend Rs 936 (26.8%), 7 purchases of 10 (CPA ~Rs 134).
- PST 13-16 (PKT 02:00-05:59): Rs 183 (5.2%), 0 purchases.
- PST 17-23 (PKT 06:00-12:59): Rs 837 (23.9%), 2 purchases.
- Day-of-week: not meaningful with 7 days.

### Inferences
- PKT afternoon (13-19) is the best conversion window on 7 purchases (low confidence), PKT 02-06 is dead.

### Gaps
- Hours are PST: Pakistan = PST + 13 h. Window is only 7 days.

## 5. Shopify side

### Takeaway
Shopify shows 11 dashcam orders / 17 units 2026-11-10..17 (store tz not confirmed), gross Rs 102,000, reversals Rs 36,000 (35.3%) which come entirely from ONE order of 7 units (Dera Murad Jamali) in which 6 units were reversed; all other 10 orders (10 units, Rs 60,000) have zero reversals so far. Returns are not yet measured (parcels still in transit).

### Cited Findings
Shopify ShopifyQL, product_title contains 'Dashcam', 2026-11-10..17, by day:

| Day | Orders | Gross Rs | Reversals Rs | Net Rs |
|---|---|---|---|---|
| 11-10 | 0 | 0 | 0 | 0 |
| 11-11 | 0 | 0 | 0 | 0 |
| 11-12 | 3 | 18,000 | 0 | 18,000 |
| 11-13 | 0 | 0 | 0 | 0 |
| 11-14 | 2 | 12,000 | 0 | 12,000 |
| 11-15 | 1 (7 units) | 42,000 | -36,000 | 6,000 |
| 11-16 | 1 | 6,000 | 0 | 6,000 |
| 11-17 | 4 | 24,000 | 0 | 24,000 |
| Total | 11 | 102,000 | -36,000 | 66,000 |

- Product in the output: only "Wdr Dashcam 3 Camera Lens Video Car Dvr Full HD 1080P".
- Reversal share: Rs 36,000 / 102,000 = 35.3% by value (6 of 17 units). Excluding the 7-unit order: 10 orders, 0 reversals (0%). By order count: 0 of 11 fully reversed.
- shipping_charges reported Rs 0 for all orders in the city query (delivery fee of Rs 200 not recorded as shipping charge in analytics; per brief it is paid at checkout).
- Orders by billing city (11 orders): Karachi 2, Lahore 2, Multan 2, Quetta 1, Mangwal 1, Sheikhupura 1, Faislabad 1, Dera Murad Jamali 1 (the 7-unit order).
- Referrer: social/facebook 5 orders (gross Rs 66,000, reversals -36,000, net Rs 30,000, includes the 7-unit order); blank referrer 5 orders (Rs 30,000); "meitshop" 1 order (Rs 6,000). So only 5 of 11 orders are attributed to Facebook in Shopify; 6 are unattributed/direct.
- Store sessions (all products, Shopify FROM sessions, 11-10..17): sessions 214, 223, 350, 318, 305, 259, 282, 219 (total 2,170); sessions with cart additions 8, 10, 21, 10, 31, 7, 7, 12 (total 106); reached checkout 7, 10, 19, 7, 27, 6, 5, 12 (93); completed checkout 3, 6, 7, 3, 14, 1, 1, 9 (44). Store-wide, not product-specific; product-page sessions were not queried.
- Cross-check: Meta purchases 10 vs Shopify dashcam orders 11 (6 not social-attributed). Shopify 11-17 shows 4 orders, Meta 3 purchases on a partial day; day boundaries use different time zones (Meta PST; Shopify store tz not checked).
- Spend / Shopify orders: Rs 3,498 / 11 = Rs 318 per order; per Facebook-referred order (5): Rs 700; per 10 non-outlier orders: Rs 350.

Product and inventory (Shopify search_products, get-inventory-levels, 2026-11-17):
- WDR dashcam handle wdr-dashcam-3-camera-lens-video-car-dvr-full-hd-1080p-00924, product id 8109034143843, ACTIVE, price Rs 6,000, vendor ComputerZone, type Cameras/Security Gadgets; location Hafeez Center: available 89, committed 4, onHand 93. updatedAt 2026-11-17 13:42Z.
- Other dashcam/camera products in catalog (price Rs, stock): Y16 3-channel dash cam 4,790 (100); Y15 3-channel WiFi 4,850 (100); F6 4K dashcam 16,972 (100); K02 3-channel 2.5K GPS 15,330 (0); C1 CarPlay screen + 4K dashcam 17,520 (0); V22 4K action camera 6,140 (0).
  The Y16 (Rs 4,790) and Y15 (Rs 4,850) are cheaper 3-channel dashcams in stock at 100 each.

### Inferences
- The 7-unit order (6 units reversed) looks anomalous (bulk order cancelled/fake); excluding it, Shopify has 10 clean orders.
- Stock 89 covers 89 orders; at ~1.5-2 orders/day that is 45+ days; at 5-10 orders a day scaling would sell through in 9-18 days.

### Gaps
- Product-page sessions/ATC by product, store timezone, refunds vs courier returns not available. Courier status is not in Shopify.

## 6. Unit economics

### Takeaway
At Rs 300 freight a delivered order nets about Rs 1,956 before ads; break-even ad cost per placed order is Rs 1,505 at 20% returns, Rs 1,279 at 30%, Rs 1,054 at 40%, Rs 828 at 50% (return loss = one-way freight Rs 300). Observed Meta CPA Rs 350 is far below even the 50% case; returns are an unmeasured ceiling.

### Cited Findings (inputs from the brief; calculations mine)
- Inputs: selling price Rs 6,000 (Shopify); customer pays Rs 200 delivery, so COD collected Rs 6,200 (per brief); supplier cost Rs 3,696; courier freight Rs 170-340 plus 16% PRA tax (brief); receipts seen Rs 215-335 for light parcels (brief); Leopards remits 96% of COD (brief).
- Assumption (stated): Leopards remits 96% of Rs 6,200 = Rs 5,952, and freight is charged on top (Rs 300 base case = midpoint of observed Rs 215-335 receipts, treated as including tax). Returned-parcel loss assumed = forward freight only (Rs 300); alternative = forward + return freight (Rs 600) shown below. Returned stock assumed resellable at no loss. Ignores packaging, staff, payment-gateway.
- Profit per DELIVERED order = 5,952 - 3,696 - freight:

| Freight Rs | Profit per delivered order Rs |
|---|---|
| 215 | 2,041 |
| 300 | 1,956 |
| 335 | 1,921 |

- Break-even ad cost per placed order = (1-r) x 1,956 - r x loss (freight 300):

| Return rate r | Loss per return Rs 300 | Loss per return Rs 600 |
|---|---|---|
| 0% | 1,956 | 1,956 |
| 20% | 1,505 | 1,445 |
| 30% | 1,279 | 1,189 |
| 35.3% (Shopify measured, by value) | 1,160 | 1,054 |
| 40% | 1,054 | 934 |
| 50% | 828 | 678 |

- Compare: Meta CPA Rs 349.8 (10 purchases, 11-10..17); Shopify spend per order Rs 318 (11 orders); worst-ish cost cases: Rs 800 (11-15 single day), Rs 484 (UGC problem ad). Profit per placed order after ads at Rs 350 CPA and 40% returns: 1,054 - 350 = ~Rs 704 (loss=300).
- Margin of safety: break-even CPA at 40% returns is 3.0x current CPA, at 50% 2.4x.
- Return-rate break-even with CPA fixed at Rs 350 (calc, loss Rs 300): (1,956-350)/(1,956+300) = 71%.
- Reversals (35.3%) is not a return rate: it is one order's partial cancellation, and courier returns are not in Shopify yet. Returns are an unmeasured ceiling; the 20-50% cases are scenarios.

### Inferences
- Even doubling CPA to Rs 700 (e.g. when scaling hits colder audience) leaves positive profit up to about 50% returns (828 > 700).

### Gaps
- No measured delivered/returned counts; actual freight per parcel and the exact Leopards remittance basis (96% of COD before/after freight) not confirmed.

## 7. Overall data gaps list
- learning_stage_info, bid_strategy, daily_budget not returned by tool; audience-size estimate unavailable; Meta purchases by region null; Shopify store timezone unconfirmed; only 7 days and 10 Meta purchases, so all differences (ad, placement, age, hour) are low-confidence.
