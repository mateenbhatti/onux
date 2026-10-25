# Pakistani electronics/gadget ads on Meta and TikTok (as of 25 Oct 2026)

Method and limits (read first):
- I queried the Meta Ad Library through the connected `ads_library_search` tool (country PK, status ACTIVE, 6 keyword searches, up to 50 ads each, 25 Oct 2026). It returns only page name, ad title/headline, creation time, delivery start time, currency and snapshot URL. It does NOT return ad body text, creative format (video/image/carousel), impressions, spend, or end dates, and results come back newest-first, so long-running ads are under-sampled. Page-level ad counts below are counts inside the returned sample (max 50 per query), not full totals.
- Run time is derived from `ad_delivery_start_time` converted to dates (rounded to the day; today taken as 25 Oct 2026). "Running >30 days" means start date before ~25 Sep 2026 and still ACTIVE.
- NOT verified: TikTok Creative Center / Top Ads (not reachable; the TikTok MCP connector in this session requires user authorization, and the web search tool only returned TikTok auto-generated "winning products" pages), TikTok Shop Pakistan best-seller lists, Daraz best-seller ranks (web fetch of godaddy.com failed; no current Daraz ranking page found). Cross-channel confirmation is therefore mostly NOT available; items are flagged.
- Ad Library records for specific ads are viewable at the snapshot URL pattern https://www.facebook.com/ads/library/?id=<ad id>; ids are given where cited.

## Which electronics and gadget products have many active ads or long-running ads in Pakistan (Meta)?

### Takeaway
In the Ad Library sample, the densest Pakistan-targeted gadget clusters were personal-grooming electronics (facial hair removers/trimmers, lint remover), budget audio (ANC earbuds, wireless/collar microphones, neckbands, audio glasses), and CCTV/security cameras. Very few ads were verifiably older than 30 days; the oldest gadget ad I could confirm still active was a smart-projector ad from March 2026 (not a Pakistani-currency page) and an RJ Gadgets ad from late August 2026. Evidence of "long-running proven winner" is weak from this tool alone.

### Cited Findings
Search "trimmer" (est. 837 active PK-reached ads matching):
- Facial/eyebrow hair remover-trimmer is repeatedly advertised by Pakistani PKR pages: Auravo.pk "BLAWLESS 2-in-1 Facial Trimmer – Rs. 1,999" (started ~Oct 22, id 29833736119546400); Pak Gadget Place "2-in-1 Facial Trimmer – Rs 1,299 | 3-in-1 Wax Heater Kit – Rs 1,999" (~Oct 22, id 2652004521983420); Cartlix "Painless Facial Hair Remover | Order Now" (~Oct 22, id 1783951566188978); ViteCart "Your Everyday Grooming Tool" (~Oct 22). — [Ad Library](https://www.facebook.com/ads/library/?id=29833736119546400), [Ad Library](https://www.facebook.com/ads/library/?id=2652004521983420)
- Many identical "Electric Automatic Nail Clipper & Trimmer" ads (about 25 near-duplicate ads from the same page "Necklaceh.shop" plus 2 other pages) are billed in USD, i.e. overseas-style dropshipping pages reaching Pakistan, not local COD sellers; started within the last ~2 days. — [Ad Library](https://www.facebook.com/ads/library/?id=985629460595642)

Search "wireless microphone" (est. 281):
- Probo.pk runs about 8 ads in the sample, including "M20 Dual Wireless Interview + Collar Microphone for Android, iPhone & Laptop (Type-C)" (~Oct 20, id 29505031542437659). Morui Pakistan "Morui GM-X11 | AI Noise Cancellation" (~Oct 18, id 1884821312884275). Collar/lavalier mic is therefore being advertised by at least two local PKR pages. — [Ad Library](https://www.facebook.com/ads/library/?id=29505031542437659), [Ad Library](https://www.facebook.com/ads/library/?id=1884821312884275)
- Overseas-style USD pages push karaoke speaker-with-mic, mini karaoke machine, mini 4K security camera and motorcycle Bluetooth helmet headset in bulk (dozens of near-duplicate ads, started in the last ~10 days). — [Ad Library](https://www.facebook.com/ads/library/?id=1838382514012378)

Search "earbuds Rs warranty Pakistan" (est. 16):
- Volix "V-6020 ANC Earbuds — sirf Rs 3,999" (~Oct 21, id 1801914564352189); a third Volix ad started ~Oct 18. — [Ad Library](https://www.facebook.com/ads/library/?id=1801914564352189)
- lunar.com.pk "Lunar Nova ANC Rs 2,999 | Lunar Wave Rs 2,499 | Lunar Aura ANC Rs 3,199" (started ~Oct 7, about 18 days). — [Ad Library](https://www.facebook.com/ads/library/?id=1418083449698743)
- HOTTU Pakistan "TS04 Earbuds (29% OFF)" (two ads, started ~Oct 9-10). — [Ad Library](https://www.facebook.com/ads/library/?id=941349448630385)
- Royal Tech Co "Unleash the Bass" (6 ads in sample, started ~Oct 21-23, rolling creative refresh pattern). — [Ad Library](https://www.facebook.com/ads/library/?id=1733903604371031)
- Interlink lists I-309/I-310/I-314/I-315/I-316 earbuds, neckbands and a braided QC3.0 cable (~Oct 21). — [Ad Library](https://www.facebook.com/ads/library/?id=1844796806868369)
- GOAT GEN "GSHADES Audio Glasses" five styles priced Rs 4,999 / 5,999 / 6,999 / 7,499 / 7,999 (started ~Oct 20-22). — [Ad Library](https://www.facebook.com/ads/library/?id=1138647022170642)
- Anker Store (PKR page) ad "One Less Thing to Forget" started ~Sep 14 (about 40 days, >30). — [Ad Library](https://www.facebook.com/ads/library/?id=1567415661532527)

Search "dash cam / CCTV / ring light / neckband" (est. 284) and "smart watch ultra cash on delivery" (est. 20):
- Smartwatch ads, active and older than 30 days: BA Traders "i20 Ultra Max — Smartwatch + Earbuds!" PKR, started ~Sep 10 (about 45 days; id 1631856188315881). RJ Gadgets, PKR, started ~Aug 29 (about 57 days; id 1051040684459772, headline just a link). A "Business Smart Watch | Health Monitor & Long Battery | COD Pakistan" ad (CNY billing, i.e. Chinese advertiser) started ~Oct 4. — [Ad Library](https://www.facebook.com/ads/library/?id=1631856188315881), [Ad Library](https://www.facebook.com/ads/library/?id=1051040684459772)
- Smart projector: "HW PROJECTOR STORE (WHOLESALERS IMPORTERS) 4K ANDROID SMART PROJECTOR", PKR, started ~Sep 22 (about 33 days; id 1822237542354985). "Smart Android Portable projectors" (USD billing) started ~Mar 30 2026 (about 7 months, still ACTIVE; id 917488587948410) - the single oldest active gadget ad I found, but billed in USD so seller location unclear. PakBuy "TV Price se kam mai Full Cinema Experience" (projector) started ~Oct 17; the search "projector Pakistan COD" returned only this one ad (est. 1). — [Ad Library](https://www.facebook.com/ads/library/?id=1822237542354985), [Ad Library](https://www.facebook.com/ads/library/?id=917488587948410), [Ad Library](https://www.facebook.com/ads/library/?id=1679536103705704)
- CCTV: Islam CCTV (PKR, ~Oct 17) and Aosilai Electronic Store "Free Delivery Across Pakistan / Cash on Delivery" (USD billing, ~Oct 12). — [Ad Library](https://www.facebook.com/ads/library/?id=958934910141068)

Generic search "cash on delivery free delivery gadget" (est. 1,543):
- Prime Kart "Rechargeable Lint Remover — Rs. 1,449" (~Oct 25); Toy Vault "Wall-Climbing RC Car — Rs 3,290"; Sky Digit "No Advance Payment Cash On Delivery All Pakistan Msg On WhatsApp" (mobile phones, WhatsApp-lead format); SoundSwag.pk "just 750/-" (audio accessory); AlexaHome.online "Save Rs. 1,200 — Order Today!" (smart-home, 2 ads). — [Ad Library](https://www.facebook.com/ads/library/?id=4381415995504508), [Ad Library](https://www.facebook.com/ads/library/?id=1130841839430103), [Ad Library](https://www.facebook.com/ads/library/?id=1789732088961213)

### Inferences
- Because results are newest-first and the sample is capped at 50, the "many ads" signal is only reliable for clusters that show up repeatedly across several different PKR pages: facial hair remover/trimmer, ANC earbuds, collar/lavalier wireless mics, and projectors.
- Heavy duplicate-creative pages billed in USD (nail clipper, karaoke mic, helmet headset, mini 4K camera) look like offshore dropshippers testing; treat as test signals, not proof of profit.
- I could not isolate genuine 60+ day winners; run-time evidence is limited to a handful of smartwatch/projector/Anker ads.

### Gaps
- No impressions, spend, ad body text or format (video vs image) from the tool; formats and hooks cannot be confirmed from it.
- No searches run yet for: mini fans/neck fans, LED strip/RGB lights (Fast Glow wholesale LED page seen, ~Oct 21), car accessories/car electronics (Primo Car Accessories seen), air purifiers, hair dryers/straighteners, smart plugs, tripod/ring lights, USB-C hubs, sunrise lamps. Worth a follow-up pass with the same tool using older-dated filters if available.

## Price points, offers and hooks

### Takeaway
Visible price points cluster at Rs 750-3,999 for audio and grooming gadgets and Rs 4,999-7,999 for audio glasses; offers are "free delivery", "cash on delivery / no advance payment", "allow to open / open parcel", "sale/% off" and "WhatsApp chat" lead ads.

### Cited Findings
- Price points seen in headlines: lint remover Rs 1,449; facial trimmer Rs 1,299 and Rs 1,999; wax heater kit Rs 1,999; ANC earbuds Rs 2,999, 3,199 and 3,999; basic earbuds Rs 2,499; audio accessory Rs 750; audio glasses Rs 4,999-7,999; RC car Rs 3,290. — see Ad Library ids above
- "Open Allowed Parcel" appears as a headline (Smart Outlet, ~Oct 25, id 2102849903666509), "Pure Desi Ghee With Allow To Open" (non-electronics), "Free Delivery Across Pakistan / Cash on Delivery" (Aosilai), "Free Delivery All Over Pakistan" (Eshal Dreams, apparel), "No Advance Payment Cash On Delivery All Pakistan Msg On WhatsApp" (Sky Digit). — [Ad Library](https://www.facebook.com/ads/library/?id=2102849903666509), [Ad Library](https://www.facebook.com/ads/library/?id=1440565251373011)
- Discount hooks: "29% OFF" (HOTTU), "Save Rs. 1,200" (AlexaHome), "11.11 Sale" (Alif Lam, apparently pre-11.11 positioning), "10.10 Sale Up to 50% OFF" (Nudra, apparel). — [Ad Library](https://www.facebook.com/ads/library/?id=1457123449721881)
- Hook language: price-anchor "TV Price se kam mai Full Cinema Experience" (PakBuy projector); "Unleash the Bass" (Royal Tech); "AI Noise Cancellation" (Morui mic); "Painless" (hair remover). Roman-Urdu phrasing ("sirf Rs 3,999") is used by Volix. — see ids above
- Seasonal: DHL's Pakistan guide says electronics lead Pakistani online sales (US$3.22 bn annual spend) and sales spike around Daraz 11.11 in November. — [DHL Express](https://www.dhl.com/discover/en-pk/small-business-advice/starting-a-business/find-winning-products-for-dropshipping-in-pakistan)
- Warranty: no ad headline in the sample mentioned warranty (the "warranty" keyword search returned mostly unrelated earbud ads); cannot confirm warranty is a common hook.

### Inferences
- A Rs 1,300-4,000 price band with free delivery + COD + open-parcel is the dominant frame; seller already has Rs 3,600 (speaker clock) and Rs 12,500 (printer), so higher-ticket Rs 4,000-8,000 items (projector, audio glasses) are less crowded in this sample.

### Gaps
- Ad formats (video/UGC/carousel) and creative hooks inside videos could not be read from the tool.
- TikTok Creative Center Top Ads for Pakistan not accessible.

## Saturated versus opportunity products

### Takeaway
Saturated (many PKR pages): earbuds/ANC, facial trimmers/hair removal, wireless collar mics (moderate). Possible gaps: smart/portable projectors (only 1 matching ad for "projector Pakistan COD", though a few other projector pages exist), audio glasses (only GOAT GEN seen), AI-noise-cancelling mics are on 2 pages.

### Cited Findings
- Estimated active ad counts reached in PK for keyword: "cash on delivery free delivery gadget" 1,543; "allow to open parcel" 1,222; "trimmer" 837; "dash cam/CCTV/ring light/neckband" 284; "wireless microphone" 281; "smart watch ultra cash on delivery" 20; "earbuds Rs warranty" 16; "projector Pakistan COD" 1. These counts are keyword-text matches, not product-specific totals. — Ad Library tool, 25 Oct 2026
- Multiple local pages for earbuds: Volix, lunar.com.pk, HOTTU Pakistan, Royal Tech Co, Interlink, Techubs.pk (Celebrat A15), Anker Store. — see ids above
- Mics: Probo.pk, Morui Pakistan, plus offshore USD pages. — see ids above
- Smartwatch/earbud combo: BA Traders, RJ Gadgets, plus Chinese-billed page. — see ids above

### Inferences
- Projector (Android/4K portable) looks least crowded among Pakistani PKR pages while carrying a Rs 15,000+ typical retail price (price not in the data; unverified) - treat as hypothesis, check Daraz price points manually.
- Audio glasses at Rs 5-8k with a single seller is an opportunity signal but could also mean low demand.

### Gaps
- No TikTok data, so advertiser counts there are unknown.
- The user's existing list includes smartwatches (X8), speakers (JEDEL), power banks, mice; earbuds and smartwatches therefore overlap with the user's range.

## Cross-channel confirmation (TikTok Shop Pakistan, Daraz)

### Takeaway
Could not confirm any product on TikTok Shop Pakistan or Daraz top lists; no current ranking pages were retrievable.

### Cited Findings
- GoDaddy Asia lists headphones, power banks, speakers, laptop stands and graphics cards among 2026 trending items to sell in Pakistan (snippet via search; page fetch failed). — [GoDaddy Asia](https://www.godaddy.com/resources/asia/skills/trending-products-to-sell-online-in-pakistan)
- Markaz blog (about two years old per search result) names ring lights and phone chargers. — [Markaz](https://www.markaz.app/blog-post/products-for-dropshipping-in-pakistan)
- Daraz data found is from 2020 only (headphones top electronics by units, about 1 million; air conditioners highest GMV; smartwatches among popular items); electronics about 40% of Daraz categories. Dated, low relevance. — via search summary; source not fetched
- TikTok "winning products in Pakistan" pages at tiktok.com/discover are auto-generated aggregators, not sales data. — [TikTok](https://www.tiktok.com/discover/winning-products-2025-in-pakistan)

### Inferences
- Headphones/earbuds and speakers appear both in generic third-party lists and heavily in Meta ads, a weak confirmation, but both are saturated and partly in the user's range.

### Gaps
- No TikTok Creative Center, TikTok Shop PK or Daraz best-seller data retrieved. Manual checks needed: Daraz "Best Seller"/Flash Sale for projectors, collar mics, facial trimmers, audio glasses; TikTok Creative Center Top Ads filtered Pakistan, last 30 days, category Tech & Electronics.
- No Pakistani seller-community, YouTube or forum sources reviewed.

## Candidate shortlist (hypotheses from the data above, not verified winners)
1. Wireless collar/interview microphone (Rs ~1,500-3,000 range suspected; only price seen is none in headline): 2+ local PKR pages (Probo.pk with 8 ads, Morui) and many offshore pages, indicating active demand, moderate competition, fits Hafeez Center sourcing.
2. Portable Android/4K projector: few local sellers (HW Projector Store ~33 days, PakBuy 7 days), higher ticket, price-anchor hook against TVs; verify retail price and returns risk.
3. Backups: facial trimmer/hair remover (most local volume, Rs 1,299-1,999, but saturated and women-targeted), audio glasses (Rs 4,999-7,999, one seller).
