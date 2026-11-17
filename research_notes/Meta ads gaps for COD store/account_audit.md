# Meta ad account 1668141181495650 (Meit Shop, PKR) live audit, pulled 2026-11-17

Source convention: every finding is from a live read-only MCP call, named in brackets. [Meta entities] = ads_get_ad_entities, [Dataset quality] = ads_get_dataset_quality, [Dataset stats] = ads_get_dataset_stats, [Dataset details] = ads_get_dataset_details, [Opp score] = ads_get_opportunity_score, [Audiences] = ads_get_ad_account_custom_audiences, [Catalog] = ads_catalog_* tools, [Shopify] = run-analytics-query on af0ajt-h0.myshopify.com. No write calls were made.
Timezone: ad account timezone is America/Los_Angeles (UTC-8 in Nov), 13 hours behind Pakistan (UTC+5) [Meta entities, ad_account timezone_name]. Meta "last_14d" = 2026-11-02 to 2026-11-15 (last day returned is 11-15 PST); Shopify day buckets are in the store timezone, so daily numbers will not line up exactly. Attribution on all campaigns: 1d_view_7d_click [Meta entities].
Tools unavailable or empty: creative_fatigued_ads returned "Not available"; learning_stage_info was not returned for any ad set (field omitted); ad-set daily_budget/bid_strategy not returned for ad sets (budget sits at campaign level); Shopify orders_delivered/orders_shipped returned 0, so there is no courier delivery or return data in Shopify analytics; dataset stats only go back 28 days.

## 1. Tracking and signal quality (pixel 1796445214819168)

### Takeaway
Tracking is broadly healthy: pixel plus server (CAPI-style) events are both firing, Purchase match quality is 9.3/10 in real time, and Purchase is being counted at order placement, not at delivery. The real gaps are (a) the optimisation event cannot tell a kept COD order from a returned one, (b) upper-funnel event match quality is only ~6/10, and (c) automatic advanced matching is off.

### Cited Findings
- Only one dataset exists, "Websoldeveloper's pixel", created 2026-09-28, active, last browser fire 2026-11-16 16:00 PST, last server fire 2026-11-16 16:01 PST, first-party cookie enabled, data use setting advertising_and_analytics [Dataset details, ads_get_datasets].
- Automatic advanced matching: enable_automatic_matching = false, automatic_matching_fields = [] [Dataset details].
- Conversions API gateway: gateway_status NOT_ONBOARDED, detail NO_UPSELL [Dataset details]. This is the Meta gateway product, not the same as having server events at all.
- Server events ARE being received: event_source aggregation, daily, 2026-10-20 to 2026-11-16. Example days: 11-07 SERVER 1,051 vs BROWSER 865; 11-13 SERVER 1,008 vs BROWSER 841; 11-16 SERVER 562 vs BROWSER 452 [Dataset stats, aggregation=event_source]. Server count is consistently ~20-30% above browser count.
- 28-day event totals (2026-10-20 to 2026-11-16): PageView 15,723; ViewContent 11,351; AddToCart 611; InitiateCheckout 400; Search 373; AddPaymentInfo 309; Purchase 233 [Dataset stats, aggregation=event_total_counts]. All four standard funnel events fire, plus Search and AddPaymentInfo.
- Purchase events per day (all sources), 2026-11-04 to 11-16 PST: 8, 22, 8, 30, 7, 4, 6, 15, 8, 12, 22, 2, 6 = 150 total. SERVER_ONLY Purchase over the same days: 4, 11, 5, 15, 4, 2, 3, 8, 4, 6, 11, 1, 3 = 77 total [Dataset stats, aggregation=event, event_name=Purchase, with and without event_source=SERVER_ONLY]. The raw-event counts are almost exactly 2x the server counts, i.e. each purchase is sent once from browser and once from server. Meta-reported purchases at account level for 11-03 to 11-15 are 72 [Meta entities], about half of the 150 raw events, which is consistent with deduplication working in reporting. Meta's rule: dedup needs same event_name plus identical event_id, or event_name plus matching external_id/fbp [Meta help: deduplication](https://www.facebook.com/business/help/823677331451951). I could not read event_id directly through these tools, so dedup is inferred from counts, not verified.
- Event Match Quality (composite, 0-10) [Dataset quality]: Purchase 9.3 (real_time; email, phone, fn, ln, city, country, external_id, fbc, IP, UA all 100%); Search 7.7; AddPaymentInfo 7.5; PageView 6.2; ViewContent 6.1; InitiateCheckout 6.1; AddToCart 6.1 (hourly uploads).
- Match key coverage on upper-funnel events: AddToCart and InitiateCheckout have NO email and NO phone key at all (only IP, UA, external_id, fbc). ViewContent email 2.2%, phone 2.5%; PageView email 5.8%, phone 3.4%; AddPaymentInfo email 66.7%, phone 33.3% [Dataset quality]. Purchase has everything because the buyer has typed it in by then.
- Purchase fires at order placement: Purchase EMQ is real_time and includes 100% phone/name/city, and Meta-reported purchases (72 over 11-03..11-15) track Shopify order count (81 over 11-03..11-17), not delivered orders; Shopify shows orders_delivered = 0 [Dataset quality, Meta entities, Shopify]. Because the store is COD only, there is no payment step, so every placed order, including fake, unreachable or later-refused orders, is counted as a Purchase.
- No custom conversions exist (total_count 0) [ads_get_customconversions]. No "Delivered" or "Confirmed" signal is sent back to Meta, and all ad sets optimise on standard PURCHASE (promoted_object custom_event_type PURCHASE, OFFSITE_CONVERSIONS) [Meta entities, adset level].
- ads_get_errors on the account returned an empty list: no delivery-blocking errors [ads_get_errors].
- Meta recommends implementing the Conversions API for resilience [Meta help: managing marketing and regulatory impacts](https://www.facebook.com/business/help/910877842876429); this account already sends server events via the Shopify integration, so the gap is event content, not existence.

### Inferences
- Meta is optimising toward "order placed", and Shopify shows heavy reversals (section 5), so the algorithm is being taught to find people who place COD orders, including those who refuse delivery. With ~40% returns the real signal is noisy. The missing piece is a second, quality-filtered event (for example a custom "OrderConfirmed" or "Delivered" event sent via CAPI after a confirmation call or courier status) that can be used as the optimisation event once volume allows, or at least an exclusion audience of returners.
- AddToCart and InitiateCheckout at EMQ 6.1 with zero email/phone is normal for anonymous browsing; turning on automatic advanced matching would not help much for anonymous visitors but would lift AddPaymentInfo/InitiateCheckout when forms are filled. Low priority compared with the optimisation-event issue.
- Server/browser ratio near 1.25 with Meta-reported counts at about half of raw events suggests dedup is functioning; verify with Events Manager Test Events and by checking that event_id is on both copies.

### Gaps
- Could not read event_id values or the deduplication-rate widget (not exposed by these tools); dedup is inferred.
- Could not see whether a Delivered/Confirmed custom event is configured on the Shopify side (no custom conversions exist in Meta; a custom server event with a non-standard name would not show as a custom conversion, and dataset stats top-level counts list no such event name in the 28-day totals).
- Dataset stats only cover the last 28 days.

## 2. Account structure

### Takeaway
The account has 34 campaigns, 31 of them paused, each with a single ad set and a handful of ads; the structure is extreme campaign-per-product fragmentation. Three campaigns are active, all CBO-less single-ad-set Sales campaigns on Advantage+ audience with every placement on, no exclusions, and budgets of Rs 600 to Rs 3,000 per day. Meta itself flags fragmentation.

### Cited Findings
- 34 campaigns returned in total (list limited to 100, 34 rows) [Meta entities, campaign level, last_30d]. Status: 3 ACTIVE, 31 PAUSED.
- ACTIVE campaigns [Meta entities]:
  - "Meit Shop - POS Winners (Printers + Drawers) - Sales", id 120252516085580030, OUTCOME_SALES, Rs 3,000/day, bid strategy "Highest volume", created/started 2026-11-16 04:54 PST (about 18:00 PKT), spend Rs 0 and 0 impressions so far in the data pulled. One ad set "POS Winners - PK Broad - Advantage+ - Purchase" (id 120252516228310030), 5 ads: SP-340B A UGC facts; BT600M Video 1 Bike pe bill; SP-90A UGC video (shopkeeper); SP-320A A UGC facts; SP-90A Video Rs 12,500. This mixes three different price points (cash drawers, BT600M portable printer, SP-90A thermal printer) in one ad set.
  - "Meit Shop - WDR 3-Camera Dashcam - Sales", id 120252432299710030, Rs 600/day. Ad set "Dashcam - PK 25-55 - Advantage+ - Purchase" (id 120252432300900030), started 2026-11-10 20:59 PST. 2 ads: Dashcam UGC problem, Dashcam UGC facts.
  - "Meit Shop - Speed-X SP-320A Cash Drawer - Sales", id 120252366231480030, Rs 800/day. Ad set "SP-320A - PK 25-44 - Advantage+ audience & placements - Purchase" (id 120252366234720030), started 2026-11-06 13:17 PST. 2 ads: SP-320A A UGC facts; SP-320A B problem + solution.
- All three active ad sets: optimization_goal OFFSITE_CONVERSIONS, promoted_object pixel 1796445214819168 / PURCHASE, destination WEBSITE, billing_event IMPRESSIONS, attribution 1d_view_7d_click, delivery status "active", sub-status "active" [Meta entities, adset level]. learning_stage_info was not returned; I cannot state whether any are in learning or learning-limited.
- Targeting on all three: country PK, Advantage+ audience on (targeting_automation advantage_audience 1, targeting_optimization expansion_all), ages 18-65 with the 25-44 / 25-55 values only as suggestions; no custom_audiences and no excluded_custom_audiences keys present, i.e. no retargeting and no exclusion of past purchasers or returners [Meta entities, adset targeting].
- Placements: fully automatic on every ad set, including Audience Network (classic and rewarded video), Threads, Facebook right column, Marketplace, search, notifications jewel, Instagram search [Meta entities, adset targeting effective_* positions]. The POS Winners ad set additionally includes the "recent" location type; the other two use home/frequently_in only.
- No frequency_control_specs, adset_schedule or spend caps were returned (fields absent) [Meta entities]. No ad scheduling or budget strategy visible.
- Paused legacy campaigns carry a long product-by-product tail (printers x7, scanners x3, speakers x4, watches x2, laptop traffic/sales, an "Automation - USA - Traffic" campaign for another business, etc.). 9 of the 31 paused campaigns have never spent a rupee (e.g. Gaming Accessories carousel, Android TV Box, Jedel SA148, SP-610, SP-700U, 8700 scanner, Kisonli soundbar, 60D scanner, X8/X9 watches, three "Video - FB+IG - Purchase" campaigns) [Meta entities, 30d].
- Opportunity score recommendation "fragmentation" names ad sets 120252366234720030 (SP-320A) and 120252432300900030 (Dashcam) as having similar setups but different audiences/creatives; Meta suggests combining them (+3 points) [Opp score].
- Opportunity score recommendation "aplusc_standard_enhancements_bundle" on ads 120252432306710030 and 120252432306290030 (both Dashcam ads): turn on one more Advantage+ creative enhancement (text improvements) (+1 point) [Opp score].
- Ads per ad set are small (2, 2, 5), so "too many ads per ad set" is not the issue; the POS Winners ad set with 5 ads and Rs 3,000/day is reasonable on budget but the ads promote different products at different prices.
- Meta states ad sets usually exit learning after about 50 optimization events since the last significant edit per week [Meta help: managing marketing and regulatory impacts](https://www.facebook.com/business/help/910877842876429) and recommends waiting for ~50 events before judging cost per optimisation event [Meta help: cost per optimization event](https://www.facebook.com/business/help/1707952432550214).
- Purchases to date vs that threshold: Dashcam 6 purchases in about 7 days (since 2026-11-10 PST); SP-320A 12 purchases in about 11 days (since 11-06 PST) [Meta entities, last_30d]. At Rs 600/day and ~Rs 450-470 per purchase, each is on pace for roughly 9-10 purchases per week, versus the ~50/week guideline.

### Inferences
- The Rs 400-800/day single-product ad sets are structurally unable to reach ~50 purchases per week at current CPPs (about 1-2 purchases per day each). They will sit in or near learning-limited, which fits Meta's own fragmentation flag. Consolidating into fewer ad sets (the new POS Winners one is the right direction) is what Meta recommends.
- The POS Winners ad set at Rs 3,000/day could produce ~4-6 purchases/day at the account's recent CPP of Rs 730-810, i.e. ~30-40/week; still under 50/week, and it mixes cheap and expensive products so the algorithm will tend to favour whichever converts cheapest, not highest margin.
- Audience Network and Threads placements on COD sales campaigns are a known source of low-quality clicks/accidental orders; no placement data by position was pulled, so this is an inference only.

### Gaps
- Learning stage / learning-limited status and ad-set budget were not returned by the API for these ad sets.
- Placement-level, age/gender and region breakdown performance were not pulled (call budget).
- The POS Winners campaign had zero impressions at pull time (about 6 hours or less after launch), so no performance data exists yet.

## 3. Performance (account in PKR, Meta timezone PST)

### Takeaway
Account-level cost per purchase is about Rs 730-810 and not improving: Rs 733 (14d), Rs 776 (30d), Rs 813 (7d). The best single campaigns by cost per purchase are the paused HP DeskJet campaign and the active Dashcam and SP-320A campaigns; the biggest historical spend (SP-90A thermal printer) was the worst. Frequency is rising (1.9 over 7d, 2.4 over 14d, 2.6 over 30d), but Meta's fatigue field is not available.

### Cited Findings
Account totals [Meta entities, level=ad_account]:
- Last 7d: spend Rs 26,830.68; impressions 75,607; CTR 3.42%; CPM Rs 354.87; frequency 1.91; add-to-cart 82; initiate checkout 76; purchases 33 (Rs 813 per purchase, my calculation).
- Last 14d (2026-11-02 to 11-15): spend Rs 52,776.12; impressions 147,903; CTR 3.38%; CPM Rs 356.83; frequency 2.37; ATC 133; IC 125; purchases 72 (Rs 733 per purchase, my calculation).
- Last 30d: spend Rs 103,268.67; impressions 270,260; CTR 3.61%; CPM Rs 382.11; frequency 2.64; view content 5,896; landing page views 5,394; ATC 280; IC 217; purchases 133 (Rs 776 per purchase, my calculation).
- Daily purchases reported by Meta, 11-03 to 11-15: 3, 4, 9, 4, 15, 4, 1, 3, 7, 4, 6, 11, 1. Daily spend ranged Rs 1,154 (11-02) to Rs 6,641 (11-07) [Meta entities, daily]. The last day pulled (11-15) had Rs 3,505 spend for 1 purchase.
- creative_fatigued_ads: "Not available" at account level [Meta entities].

Campaign performance, 7d [Meta entities, level=campaign, last_7d]. Only campaigns with spend:
- Dashcam (active, Rs 600/day): spend Rs 2,804.43; CTR 4.62%; CPM Rs 386.92; freq 1.49; ATC 12; IC 15; purchases 6; Rs 467.41 per purchase.
- SP-320A cash drawer (active, Rs 800/day): spend Rs 4,529.63; CTR 2.80%; CPM Rs 292.52; freq 1.46; ATC 9; IC 9; purchases 9; Rs 503.29 per purchase.
- HP DeskJet 2320 (paused): Rs 1,796.97; 10 purchases; Rs 179.70 per purchase.
- SP-340B cash drawer (paused): Rs 4,518.41; 20 ATC, 18 IC, 4 purchases; Rs 1,129.60 per purchase.
- BT600M printer, 3 concepts (paused): Rs 4,422.15; 2 purchases; Rs 2,211.08 per purchase.
- K50 lavalier mics (paused): Rs 2,756.81; 2 purchases; Rs 1,378.41 per purchase.
- SP-90A thermal printer (paused): Rs 6,002.28; 15 ATC, 6 IC, 0 purchases.
Note: 7d figures for Dashcam equal its 30d figures because the campaign began 2026-11-10.

Campaign performance, 14d [Meta entities, last_14d]:
- HP DeskJet 2320: Rs 6,461.79; 26 purchases; Rs 248.53 per purchase.
- SP-320A: Rs 5,341.38; 12 purchases; Rs 445.12.
- Dashcam: Rs 2,804.43; 6 purchases; Rs 467.41.
- BT600M: Rs 7,528.08; 9 purchases; Rs 836.45.
- SP-340B: Rs 5,265.16; 5 purchases; Rs 1,053.03.
- SP-90A: Rs 20,453.47; 12 purchases; Rs 1,704.46.
- K50 mics: Rs 2,756.81; 2 purchases; Rs 1,378.41.
- Small tests with zero purchases: SP-A42 (Rs 487), SP-L610BT (Rs 715), SP-650UL (Rs 262), BT500M (Rs 355), SP-9260 scanner (Rs 345).

Campaign performance, 30d [Meta entities, last_30d]:
- SP-90A thermal printer (paused): Rs 57,047.44 (55% of account 30d spend); 145,078 impressions; CTR 3.43%; freq 2.40; ATC 148; IC 75; purchases 49; Rs 1,164.23 per purchase.
- HP DeskJet 2320: Rs 7,805.87; 33 purchases; Rs 236.54 per purchase.
- Kisonli LP-2S speaker (FB+IG): Rs 4,978.49; 16 purchases; Rs 311.16.
- BT600M: Rs 7,528.08; 9 purchases; Rs 836.45.
- HP OmniBook X Flip 16 (sales): Rs 2,850.36; 1 purchase; CPM Rs 1,229.66.
- Epson EcoTank L3250: Rs 1,054.23; 1 ATC, 0 purchases.
- Websoldeveloper Automation USA traffic: Rs 2,431.10 (a different business running in the same ad account; CPM Rs 3,458).

Active ad level, 30d [Meta entities, level=ad, effective_status ACTIVE]:
- Dashcam UGC facts: spend Rs 660.38; CTR 6.22%; CPM Rs 281.13; 6 ATC, 9 IC, 3 purchases; Rs 220.13 per purchase. Best ad in the account right now.
- Dashcam UGC problem: Rs 2,144.05; CTR 3.86%; CPM Rs 437.65; 6 ATC, 6 IC, 3 purchases; Rs 714.68 per purchase.
- SP-320A A UGC facts: Rs 3,119.38; CTR 3.58%; CPM Rs 302.44; 9 purchases; Rs 346.60 per purchase.
- SP-320A B problem + solution: Rs 2,222.00; CTR 1.89%; CPM Rs 293.33; 3 purchases; Rs 740.67 per purchase.
- All 5 POS Winners ads: Rs 0 spend, 0 impressions yet.

### Inferences
- Winners: the "UGC facts" angle beats "problem" or "problem + solution" in both active products (Dashcam Rs 220 vs Rs 715; SP-320A Rs 347 vs Rs 741). Sample sizes are 3-9 purchases per ad, so this is directional only, not significant.
- The best CPP products historically are cheap, impulse items (DeskJet Rs 237 on a Rs 6,700 selling price per Shopify: 24 orders, Rs 160,800 net sales in 14d; Kisonli LP-2S Rs 311). The POS Winners campaign omits both of them and bundles products whose historical CPP ranged from Rs 445 (SP-320A) to Rs 1,164 (SP-90A) to Rs 836 (BT600M). SP-90A is a Rs 12,500 ad price per the ad name yet Shopify shows SP-90A at 12 orders / only Rs 12,500 net sales over 14d (about Rs 1,042 per order), which suggests heavy discounting, free items or heavy reversals on that SKU; this needs a manual check.
- Frequency of 1.5 on the active campaigns is not fatigued; the account-level 2.4-2.6 is driven by old SP-90A spend (freq 2.40).
- With ~40% returns, a nominal Rs 450 CPP on a placed order is closer to Rs 750 per kept order; the SP-90A Rs 1,164 CPP becomes about Rs 1,940 per kept order (my arithmetic; the 40% figure is the owner's, not from tools).

### Gaps
- Creative fatigue field not available; no per-ad frequency history trend pulled.
- No breakdowns by placement, age, gender, region, device (not pulled).
- No video retention metrics pulled for the UGC videos.
- Per-ad numbers are only for currently active ads; the paused ads inside paused campaigns were not itemised.

## 4. Funnel: Meta vs Shopify (store af0ajt-h0.myshopify.com, PKR)

### Takeaway
About 95% of sessions are mobile and ~81% of sessions come from Facebook; session-to-cart is only about 4.5%, but once a visitor reaches cart almost everyone reaches checkout (90%) and ~57% of checkouts complete. Meta reports 72 purchases over 11-03 to 11-15 versus 81 Shopify orders over 11-03 to 11-17 (51 attributed to facebook referrer), so Meta over-credits somewhat via view-through, and the biggest leak is the cart (traffic to ATC) and, after the order, reversals.

### Cited Findings
Shopify sessions funnel, daily 2026-11-03 to 11-17 (sessions / with cart additions / reached checkout / completed checkout) [Shopify]: 11-03 172/5/4/3; 11-04 190/3/3/3; 11-05 205/15/13/10; 11-06 263/8/9/7; 11-07 272/11/11/9; 11-08 322/16/15/10; 11-09 83/2/2/1; 11-10 214/8/7/3; 11-11 223/10/10/6; 11-12 350/21/19/7; 11-13 318/10/7/3; 11-14 305/31/27/14; 11-15 259/7/6/1; 11-16 282/7/5/1; 11-17 (partial) 35/2/2/2.
- 15-day totals (my sums of the rows above): sessions 3,493; cart additions 156 (4.5%); reached checkout 140; completed checkout 80. Cart to checkout 90%; checkout to complete 57%; session to order 2.3%.
- 30-day aggregate [Shopify, SINCE -30d]: sessions 6,748; with cart additions 264 (3.9%); reached checkout 232; completed checkout 131; conversion rate 1.94%.
- Sessions by device, 14d: mobile 3,333; desktop 153; other 4; tablet 2 [Shopify].
- Sessions and completed checkouts by referrer, 14d [Shopify]: social/facebook 2,840 sessions, 50 completed checkouts; direct 578 sessions, 28 completed; search/google 41, 0; social/instagram 22, 0; email/gmail 2, 0.
- Orders and sales by referrer, 14d [Shopify, sales]: facebook 51 orders, Rs 275,650; blank referrer 19 orders, Rs 112,850; "meitshop" 11 orders, Rs 151,060; instagram 0 orders, Rs -3,020. Total 81 orders. The "meitshop" / blank sources (30 orders, Rs 263,910) are unidentified: most likely direct visits, admin/draft orders or repeat customers.
- Shopify orders per day 11-03 to 11-17: 3, 3, 10, 7, 9, 11, 1, 3, 5, 8, 3, 14, 1, 1, 2 (= 81) [Shopify, sales]. Meta purchases per day 11-03 to 11-15 (PST): 3, 4, 9, 4, 15, 4, 1, 3, 7, 4, 6, 11, 1 (= 72) [Meta entities]. Both series show the same spikes (11-05, 11-07/08, 11-14) and the same trough (11-09, 11-15/16).
- Meta-reported purchases per day sometimes exceed Shopify (e.g. 11-07: Meta 15 vs Shopify 9; 11-04: 4 vs 3); day offsets (PST vs PKT) explain some of this; the 1-day-view attribution window and cross-device attribution explain the rest. For the 14-day totals Meta credits 72 versus Shopify's 51 facebook-referred orders: about 1.4x.
- Meta 14d cost per purchase Rs 733 (72 purchases) vs cost per Shopify Facebook-referred order = 52,776 / 51 = about Rs 1,035 (my calculation; the time windows differ by a day or two).
- Reversals: Shopify gross sales Rs 1,962,290 and sales_reversals Rs -1,451,490 over 28 days (132 orders), total sales Rs 533,800; i.e. reversals are 74% of gross value (28d). For the 14d window 11-03 to 11-17: gross Rs 1,249,020, reversals Rs -726,780 (58%), total sales Rs 536,540 [Shopify, sales timeseries, my sums]. Single-day net-negative days occurred: 11-08 total sales Rs -46,490, 11-09 Rs -21,170, 11-10 Rs -71,580, 11-16 Rs -74,400.
- Shopify fulfillments, 30d: orders_fulfilled 110; orders_shipped 0; orders_delivered 0 [Shopify, fulfillments]. 110 of ~132 orders fulfilled in that period, about 83%; unfulfilled/cancelled orders before dispatch are a further leak. No courier-delivery data in Shopify.
- Product mix by orders, 14d [Shopify]: HP DeskJet 2320 24 orders, Rs 160,800 net; SP-90A 12 orders, Rs 12,500 net; SP-320A cash drawer 10 orders, Rs 68,600; thermal rolls 8 orders, Rs 2,100; BT600M 8 orders, Rs 68,000; SP-340B 7 orders, Rs 76,300; Dashcam 7 orders, Rs 42,000; K50 mics 2, Rs 12,600.
- Customers: new_customers vs returning_customers per day shows nearly all orders from new customers (e.g. 11-14: 12 new, 2 returning) [Shopify, sales].

### Inferences
- The top leak is session to add-to-cart (4.5% of sessions, 3.9% over 30d). Landing page views (5,394) to ATC (280) over 30d is about 5.2% in Meta's own numbers. Once in cart, 90% reach checkout and 57% finish, which is fine for COD. So page/offer/price/trust or cart-button issues matter more than checkout friction; 95% mobile means page speed and mobile layout are decisive.
- Reversals (58-74% of gross over 14-28 days) are far higher than the owner's 40% returns estimate if all reversals are returns; reversals also include cancellations and refunds of orders from before the window, so this ratio is a ceiling, but it confirms that Meta-reported purchases materially overstate retained revenue.
- Facebook referral is 81% of sessions but 63% of orders (51 of 81); the 30 unidentified orders are a sizeable unexplained channel (could be WhatsApp/phone orders, repeat customers or admin-created orders). Worth confirming because it affects true Meta ROAS.
- Dashcam Rs 42,000 net for 7 orders = Rs 6,000/order, spend ~Rs 2,804 over the same window, Meta ROAS before returns looks strong; the pattern is very positive but sample is tiny.

### Gaps
- Shopify analytics returned no delivered/returned status (orders_delivered 0); the true return rate by SKU and by ad source can't be measured from these tools. The 40% return rate is the owner's figure.
- Meta 14d window ends 11-15 PST while Shopify runs to 11-17 PKT; I did not align timestamps hour by hour.
- Source of the 30 non-Facebook orders unidentified.
- Shopify "sales_reversals" does not separate returns from cancellations or refunds.

## 5. Meta Opportunity Score and errors

### Takeaway
Meta rates the account 96/100 with only two small recommendations, and no delivery-blocking errors; the score is a poor guide because it does not measure COD return quality, creative quality or the account's real CPP.

### Cited Findings
- Opportunity score: 96 out of 100 [Opp score].
- Recommendation 1: fragmentation, ad sets 120252366234720030 (SP-320A) and 120252432300900030 (Dashcam); "combine similar ad sets"; lift 3 points [Opp score].
- Recommendation 2: aplusc_standard_enhancements_bundle on the two Dashcam ads; "text improvements"; lift 1 point [Opp score].
- ads_get_errors for the whole ad account: empty list (no delivery-blocking errors) [ads_get_errors].
- Ad account status ACTIVE, has payment method; min daily budget 27,781 cents = Rs 277.81 (field is in minor units; likely Rs 277.81) [ads_get_ad_accounts].
- The same user also has two other ad accounts: 345739299 "Mateen Bhatti" (business mylast.shop) and 2836614129884457 (MCP not enabled) [ads_get_ad_accounts]. Pixel 1796445214819168 belongs to business "Websoldeveloper" (457114704760287), which also owns the ad account. The account contains a campaign for a different business ("Websoldeveloper - Automation - USA - Traffic", paused).

### Inferences
- Because Meta's score excludes custom optimisation, audiences and COD quality, a 96 should not be read as "account is fine". The fragmentation flag agrees with the structural analysis above.
- Turning on the text-improvement Advantage+ enhancement is low value and could alter product claims on COD-sensitive listings; judgement call.

### Gaps
- Opportunity score covers only the API-supported subset of recommendations, per the tool description; Ads Manager may show more.

## 6. Other things missing (audiences, catalog, retargeting, exclusions)

### Takeaway
The account has the building blocks (a Shopify catalog, a customer list, lookalikes) but uses none of them: no ad set uses any custom audience, no retargeting exists, no past purchasers or returners are excluded, there is no website-visitor, ATC or video-viewer audience, and the catalog is blocked for dynamic ads.

### Cited Findings
- Custom audiences (4 total) [Audiences]:
  - "Lookalike 1% PK - Meit customers (Shopify list)", LOOKALIKE, created 2026-10-26, delivery ACTIVE, size shown as 1,000 (lower and upper bound both 1,000, i.e. the tool's size bucket).
  - "Meit customers - Shopify orders (customer list)", CUSTOM, created 2026-10-26, ACTIVE, size bucket 1,000.
  - "Lookalike 1% PK - Purchasers 180d", LOOKALIKE, created 2026-10-26, ACTIVE, 1,000.
  - "Purchasers 180d (pixel, includes returned orders)", PLATFORM, created 2026-10-26, ACTIVE, size 20.
- None of the three active ad sets references any custom audience or exclusion (no custom_audiences / excluded_custom_audiences key in targeting) [Meta entities, adset targeting]. The audiences created on 2026-10-26 therefore sit unused. Also, the names show the purchaser audiences include returned orders (explicitly labelled), meaning lookalikes are seeded by people who may have refused delivery.
- No audiences exist for: website visitors, ViewContent, AddToCart / InitiateCheckout abandoners, video viewers, Instagram/Facebook page engagers [Audiences]. No custom conversions [ads_get_customconversions].
- Catalog: one catalog, "Shopify Product Catalog (af0ajt-h0.myshopify.com) - 2026-09-28 System User" (id 1793920188517869), vertical commerce, flagged eligible for Advantage+ catalog ads; checkout_urls empty; product count and product set count returned null [Catalog, ads_catalog_list_catalogs].
- Catalog health: 1 of 13 dynamic-ads checks failed, "catalog_has_da_visibility_issues" ("This catalog has items with visibility issues for Ads", severity must_fix); readiness assessment "blocked" [Catalog, ads_catalog_get_dynamic_ads_health]. ads_catalog_get_diagnostics returned zero diagnostic items and 4 of 5 providers succeeded (dynamic_ads_visibility not applicable) [Catalog, ads_catalog_get_diagnostics], so the reason for the visibility failure is not surfaced by the tools.
- No Advantage+ catalog (dynamic product ad) campaign exists in the campaign list; the three "Video / Carousel - FB+IG - Purchase" campaigns (Best Sellers carousel, Gadgets Under Rs 3000, Epson video) have never spent [Meta entities].
- No scheduling, no frequency cap, no spend cap, no cost cap or bid cap in use (all campaigns "Highest volume"; no bid_amount returned) [Meta entities].
- Domain note: Shopify referrer data shows Instagram sessions 22 and 0 orders over 14d, so Instagram-specific traffic is negligible [Shopify].

### Inferences
- Retargeting gap is large: 5.2% of landing page views add to cart (30d), and 264 sessions added to cart but only 131 completed checkout in 30d (Shopify). With 4.5% ATC and 57% of checkouts completing, a 7-14 day ATC/IC/ViewContent retargeting ad set and a COD reassurance creative could recover some of the ~100 abandoned checkouts per month. Volume is small, so this would be a minimal-budget add-on, not a main campaign.
- The 20-person pixel purchaser audience is too small to seed anything; the customer list of ~1,000 includes returners and should be split: customers with delivered orders as seed, returners as exclusion.
- Dynamic catalog ads for cheap impulse SKUs (DeskJet, Kisonli speaker) could reuse the winning price points, but the catalog visibility failure must be resolved first. Because the catalog fails a must_fix check, I would not expect Advantage+ catalog delivery to be reliable until fixed.
- Excluding past purchasers is moot while no exclusion is applied; note ~99% of orders are from new customers (Shopify), so repeat purchase is not a current driver.

### Gaps
- Which specific products have visibility issues in the catalog was not returned (diagnostics empty).
- The "1,000" audience sizes look like a bucket floor; actual list size unknown.
- Activity log (who changed what and when) and ad-level creative text were not pulled; creative-quality assessment of the UGC videos not done.
