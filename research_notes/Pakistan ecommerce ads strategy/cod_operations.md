# Pakistan COD operations and ad profitability

Research limits: WebFetch could not reach www.markaz.app, www.dhl.com or profit.pakistantoday.com.pk (hosts not in the session's allowed network domains), so everything below comes from search-result summaries only, not full pages. Almost all figures are vendor or practitioner claims. No audited, courier-level or category-level RTO data was found.

## 1. COD/RTO rates by category and courier, and what reduces them

### Takeaway
Typical Pakistani COD RTO is quoted at roughly 18-30% for managed operators and 35-45% for unmanaged ones. These are vendor claims. I found no published RTO by category or by courier (Leopards, TCS, Trax, M&P, PostEx, BlueEX, Call Courier). Reduction levers cited are confirmation calls/WhatsApp, address controls, faster delivery and digital prepayment.

### Cited Findings
- COD is about 93.7% of Pakistani ecommerce transactions per Simpaisa (a payments vendor); an older 2018 report put it above 95% — [Simpaisa](https://www.simpaisa.com/blogs/why-cash-on-delivery-is-killing-your-e-commerce-business-and-what-to-do); [ProPakistani 2018](https://propakistani.pk/2018/06/28/95-of-e-commerce-transactions-in-pakistan-are-cash-on-delivery-report/). A Releasit blog says COD is over 85% (no methodology) — [Releasit](https://www.releas.it/blogs/news/dropshipping-in-pakistan-with-cod-trials-tribulations-and-triumphs).
- DHL Pakistan says about 1 in 5 COD parcels (about 18-20%) return undelivered — [DHL Pakistan](https://www.dhl.com/discover/en-pk/e-commerce-advice/e-commerce-best-practice/subscription-marketing/how-pakistani-e-commerce-sellers-can-reduce-cod-returns) (via search summary).
- Simpaisa cites COD RTO of 25-30% in Pakistan — [Simpaisa](https://www.simpaisa.com/blogs/why-cash-on-delivery-is-killing-your-e-commerce-business-and-what-to-do).
- EasySell (app vendor) says COD-heavy markets often exceed 40% RTO, and gives an example that fell from 45% to 19% after fixes — [EasySell](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026).
- eGrow (global/India-oriented, citing GoKwik) puts COD RTO at 20-30% on average and 35-50% for unmanaged operations — [eGrow](https://www.egrow.com/en/blog/the-complete-guide-to-reducing-return-to-origin-rto-in-cod-e-commerce-2026). It is not Pakistan-specific.
- Delivery speed: orders delivered in 1-2 days see 22% RTO; over 5 days, 35% (source's own search summary, likely not Pakistan-specific) — [Markaz/DHL/eGrow results](https://www.markaz.app/blog-post/cod-return-rates-in-pakistan-how-to-reduce-them). Treat as low confidence.
- A "7.9% returns rate in 2023" (ECDB) quoted by DHL appears to measure post-delivery customer returns, not COD RTO, so it is not comparable — [DHL Pakistan](https://www.dhl.com/discover/en-pk/e-commerce-advice/e-commerce-best-practice/subscription-marketing/how-pakistani-e-commerce-sellers-can-reduce-cod-returns).
- EasySell attributes 15-20% of COD failures to address problems; suggests city/zone dropdown and WhatsApp delivery confirmation for "not available" returns — [EasySell](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026).
- Markaz argues delivery attempt counts, pre-arrival calls and speed of return of parcels matter more to cost than small courier rate differences — [Markaz](https://www.markaz.app/blog-post/cod-return-rates-in-pakistan-how-to-reduce-them).
- DHL's recommended levers: confirmation calls, screening high-risk orders, encouraging digital prepayment — [DHL Pakistan](https://www.dhl.com/discover/en-pk/e-commerce-advice/e-commerce-best-practice/subscription-marketing/how-pakistani-e-commerce-sellers-can-reduce-cod-returns).
- Courier delivery times (2026 comparison table, secondary): TCS and Leopards 1-3 days, Trax 1-4 days, PostEx next-day in major cities — [Xstak](https://www.xstak.com/blog/courier-services-for-ecommerce).
- PostEx handles about 7 in 10 COD parcels nationwide (vendor claim in a comparison page) — [Xstak](https://www.xstak.com/blog/courier-services-for-ecommerce). PostEx reportedly acquired Call Courier — [Graana](https://www.graana.com/blog/ur/postex-acquires-call-courier-to-become-pakistans-largest-ecommerce-service-provider/) (title only; not verified further).

### Inferences
- A planning range of 20-35% RTO (65-80% delivered) is defensible for a managed Shopify store; the "50-60% delivered" in the brief matches an unmanaged or low-confirmation scenario. Measure your own.
- Category effects (fashion, electronics, impulse/gadget, beauty) are likely but unsourced.

### Gaps
- No RTO by category or by courier from any credible source. Courier performance must come from the merchant's own data or courier dashboards.
- No M&P, BlueEX or Call Courier performance data found.
- No Dawn, Tribune, ProPakistani or Startup Pakistan report with a measured national RTO.

## 2. Break-even CPA with partial delivery; courier fees and settlement

### Takeaway
Break-even must be computed per order shipped, then per delivered order. Current Pakistani courier rate cards were not found, so fee inputs must be obtained from courier quotes.

### Cited Findings
- Leopards says its retail COD service has no hidden charges, taxes or return fees, no inventory charges, no fuel surcharge or GST (company claim; no per-parcel amounts) — [Leopards COD](https://leopardscourier.com/services/cod). Treat the "no return fee" claim cautiously; verify on contract.
- A 2016 ProPakistani comparison listed Leopards COD at Rs. 380 for up to 1 kg plus Rs. 380 per extra kg; almost certainly outdated — [ProPakistani 2016](https://propakistani.pk/2016/11/24/everything-need-know-courier-services-pakistan/).
- PostEx markets instant/upfront COD settlement and early cash financing; TCS, Leopards and Trax are described as slower; charges vary by weight, zone and fuel adjustment; no fee table published in results — [Xstak](https://www.xstak.com/blog/courier-services-for-ecommerce); [PostEx FAQ](https://postex.pk/faqs).
- Aggregators (OshiCourier) claim COD payout in 48 hours across 14+ couriers (marketing claim) — [OshiCourier](https://oshicourier.pk/about-us).

### Inferences
Formulas (my own arithmetic, not sourced), with AOV, COGS, F = outbound courier fee incl. COD commission, R = return/reverse fee, d = delivery rate, p = payment-gateway/packaging/call-center cost per order:
- Contribution per delivered order = AOV - COGS - F - p.
- Expected contribution per shipped order = d x (AOV - COGS - F) - (1-d) x (R + F_outbound_loss_if_charged) - p.
- Break-even CPA per shipped (platform-reported) purchase = that expected contribution. Break-even CPA per delivered order = contribution / d, which is the same cost divided by delivered rate.
- Example (illustrative only): AOV 3,500, COGS 1,200, F 350, R 250, d=0.55: delivered margin 1,950; shipped expected = 0.55x1,950 - 0.45x(350+250 if both charged) = 1,072 - 270 = about 800. At d=0.75: 1,462 - 150 = about 1,310. A 20-point delivery gain lifts allowable CPA about 60%.
- Break-even ROAS on reported purchases = AOV / break-even CPA. Settlement delays tie up working capital, so cash break-even is stricter than P&L break-even.

### Gaps
- No current rate cards (TCS, Leopards, Trax, M&P, BlueEX, Call Courier, PostEx), COD commission percentages, return-charge policies, or actual settlement-day counts.
- Courier rate cards sit behind sales quotes; check merchant portals.

## 3. Advance/token payment and fake-order filtering evidence

### Takeaway
No Pakistan-specific study quantifying the effect of advance or token payments was found; evidence is practitioner advice.

### Cited Findings
- EasySell advises not labelling prepayment as a "deposit" or "advance payment" in COD-heavy markets, since the wording can trigger distrust — [EasySell](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026).
- DHL recommends encouraging digital prepayment — [DHL Pakistan](https://www.dhl.com/discover/en-pk/e-commerce-advice/e-commerce-best-practice/subscription-marketing/how-pakistani-e-commerce-sellers-can-reduce-cod-returns).
- Buyer fear of non-delivery or mismatched goods is the main reason COD persists per an SBP-linked report — [APP](https://www.app.com.pk/business/e-commerce-rise-pakistan-rs-9-8bln-payments-accepted-banks-sbp/).
- Shopify COD verification apps use OTP/WhatsApp replies and tags (confirmed/cancelled/pending); a Pakistani reviewer credits Whatify and Glideteck with fewer fake orders — see section 4 links.

### Inferences
- Token payments likely trade conversion for lower RTO; test via A/B on a subset (e.g., high-AOV or flagged-risk orders only).

### Gaps
- No measured effect sizes in Pakistan; no data on Easypaisa/JazzCash token-payment adoption by merchants; no blocklist-sharing evidence found.

## 4. Tools and apps used by Pakistani Shopify merchants

### Takeaway
Many WhatsApp/OTP COD-verification apps exist plus courier-connector apps; vendor claims only, none validated.

### Cited Findings
- Confirmify: WhatsApp message to each COD order, tags confirmed/cancelled/pending; from $9.99/month — [Confirmify](https://apps.shopify.com/confirmify).
- Confirm Bot: reply Confirm/Cancel/Request Contact, tags orders — [Confirm Bot](https://apps.shopify.com/confirm-bot).
- MC WhatsApp Order Notification (free plan), Glideteck (OTP + COD form), CODVerifyAPP, CODSaver, KODIAI, OTP CoD Order Verification, COD Order SMS Verifier, "Robo Calls Pakistan" listed — [MC WhatsApp](https://apps.shopify.com/mc-whatsapp-notifications-chat); [Glideteck reviews](https://apps.shopify.com/glideteck/reviews); [CODSaver](https://appnavigator.io/app/codsaver-1/); [Robo Calls Pakistan](https://appnavigator.io/app/robo-calls-pakistan).
- Courier integrations: PostEx official Shopify app — [PostEx](https://apps.shopify.com/postex-official); multi-courier tools such as Shipfox, Universal Courier, TrackKaro Pakistan — [Shipfox](https://pickyourapp.com/products/shipfox); [TrackKaro](https://en-au.wordpress.org/plugins/dango-trackkar/); aggregators Flaship, OshiCourier — [Flaship](https://www.flaship.pk/).
- Warning: one Shopify review claims an app (reviews/1977136) generated hundreds of fake COD orders to push a paid plan; unverified single account — [review](https://apps.shopify.com/reviews/1977136).

### Inferences
- Fraud scoring in Pakistan appears to be mostly tag/blocklist based on phone numbers rather than shared scores; unconfirmed.

### Gaps
- Which apps support +92 numbers and Pakistani couriers natively; actual fraud-score products; market share. Not found.
