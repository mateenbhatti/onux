# Meit Shop catalog and sales since 1 Sep 2026 (Shopify, PKR)

Source for everything below: Shopify Admin GraphQL via the Shopify MCP (read-only queries only, run 6 Nov 2026), except the owner's purchase prices, which come from the assignment brief. Product access was NOT denied. Aggregates only; no customer data was read or stored. Raw order pages are in the tool-results folder of this session. Earlier reports (Next two ad products Pakistan.md, Pakistan ecommerce ads strategy.md) were read; this note does not repeat their market research.

## Active catalog: what does the store sell and how big is it?

### Takeaway
The store lists 1,626 active products (7 draft, 0 archived), dominated by mobile accessories, keyboards/mice, power banks, speakers, Bluetooth hands-free and thermal printer/scanner items. Almost all products have images (typically 4); only a few have video.

### Cited Findings
- Shop is "Meit Shop", currency PKR; 1,633 products total, of which 1,626 are ACTIVE, 7 DRAFT, 0 ARCHIVED — Shopify Admin API (productsCount)
- Active product counts by product type (a subset of types, sums to roughly 1,100 of 1,626; remaining types not enumerated): Mobile accessories 219; Keyboard/Mouse/Pad 123; Power Bank 86; Bluetooth+Usb Speakers 72; Gaming Accessories 70; Bluetooth Hands free 65; Miscellaneous 65; HP (printers/laptops, typed "Hp") 58; Wired Hands Free 53; Barcode Scanner/Thermal Receipt Printer 44; Smart Watch 44; Cameras/Security Gadgets 41; Bluetooth Headphone 24; Android Smart TV Box/Air Mouse 23; Networking Cables 17; Cash Drawer & Counting Machines 13; Epson 6; Dell 3 — Shopify Admin API (productsCount by product_type)
- Vendor mix includes Speed-X (printers, scanners, cash drawers, TV boxes), Kisonli, Joyroom, Samsung/Apple/Lenovo listings for earbuds, "Meit Shop" own-label items, ComputerZone — Shopify product page 1 (first 100 products by id) and order line items
- Sample of listed prices (first page of catalog): Speed-X SP-90A Rs 12,500; BT600M Rs 11,400; BT450M 58mm Rs 5,290; BT500M Rs 7,500; SP-200U Rs 7,710; SP-210UL Rs 8,190; SP-250U Rs 9,880; SP-350U Rs 10,402; 300U Rs 10,184; 400UL Rs 11,278; SP-650UL Rs 18,000; SP-700U Rs 20,000; SP-L610BT Rs 19,000; SP-A42 A4 portable Rs 20,000; Spt 710B Rs 28,000; TSC TTP 244 Pro Rs 42,924; barcode scanners Rs 3,780 to 11,000 (8500, 8600, 9250, 9260, 9500, 9600, 9700, 60D, 70D); Android TV boxes Rs 4,970 to 15,878; AirPods/Galaxy Buds style earbuds listed at Rs 1,710 to 6,870 — Shopify Admin API
- Only page 1 (100 of 1,626) of the full catalog was pulled with price/inventory detail, to avoid 17 very large responses. Full detail (price, total inventory, image/video count, status) was pulled for all 44 products that actually sold (table below).
- Images/video for sold products: nearly all have 4+ media items (images); videos exist on only SP-90A, Kisonli LP-2S, REMAX Watch 9 and HP OmniBook X (4 of 44 sold products). 4 products have 1 media only: scanners SP-9260, 9600 and cable items. HP DeskJet 2320, thermal roll, Epson L3250 and JEDEL SA148 have 2-3 media and no video — Shopify Admin API (mediaCount, media type VIDEO)

### Inferences
- Most catalog entries were bulk-imported with placeholder inventory: many show exactly 99 or 100 units and 0 or -1 elsewhere, so inventory is NOT a reliable stock signal. The SP-90A shows 98 and BT600M 98, consistent with a default of 100 less recent sales, which is questionable given 151 SP-90A units sold since Sep. Treat inventory as unverified.
- Kisonli LP-2S and HP DeskJet 2320 show totalInventory 0 in Shopify despite continuing orders; either they are oversold or stock is tracked elsewhere. Check before scaling ads.

### Gaps
- Complete per-product list (title, price, stock, media for all 1,626) was not extracted; only page 1 and the sold products. Ask if a full CSV is needed.
- Product types for roughly 500 products were not counted.

## Sales since 1 Sep 2026: units, orders, revenue, ASP, cancellations, fulfilment

### Takeaway
300 orders exist in the period (first order 13 Sep 2026, last 6 Nov 2026). Four products carry the business: SP-90A printer (Rs 1.88m gross booked, Rs 1.42m non-cancelled), HP DeskJet 2320 (Rs 0.64m / 0.50m), Kisonli LP-2S speaker (Rs 0.30m / 0.27m) and thermal rolls (Rs 52k / 47k), plus JEDEL SA148 speaker with unusually high cancellations.

### Cited Findings
- Orders: 300 in range (ordersCount for store total is 303, so up to 3 orders sit outside this pull, likely before 1 Sep). Status mix: FULFILLED and not cancelled 230 (86 PAID, 142 PENDING payment i.e. COD not yet collected, 1 partially refunded, 1 voided); UNFULFILLED open 12; cancelled 58 (54 voided, 2 refunded, 2 other) = 19.3% of orders cancelled — Shopify Admin API (orders: cancelledAt, displayFulfillmentStatus, displayFinancialStatus)
- "Fulfilled" means shipped/marked fulfilled in Shopify; Shopify has no delivered or returned (RTO) status, so returns after dispatch are NOT visible here. The 142 FULFILLED + PENDING orders are likely COD parcels whose cash is not yet recorded. Do not read fulfilled as delivered.
- Product-level table (merged by Shopify product ID, because the same product appears under several line-item titles; orders = distinct orders containing the product; revenue = discounted line totals; cancelled/fulfilled = orders by order status):

| Product | Type | Listed price | Units | Orders | Revenue Rs | Avg price Rs | Cancelled orders (%) | Fulfilled orders |
|---|---|---|---|---|---|---|---|---|
| Speed-X SP-90A 80mm thermal receipt printer (3 titles merged) | Thermal receipt printer | 12,500 | 151 | 127 | 1,883,902 | 12,476 | 17 (13%) | 105 |
| Kisonli LP-2S RGB speaker alarm clock (2 titles merged) | Bluetooth speaker | 3,600 | 84 | 79 | 302,400 | 3,600 | 10 (13%) | 67 |
| Thermal printer roll 80mm x 50m | Consumable | 350 | 151 | 58 | 52,400 | 347 | 8 (14%) | 46 |
| HP DeskJet 2320 AIO inkjet | Inkjet printer | 20,000 | 32 | 31 | 639,200 | 19,975 | 7 (23%) | 20 |
| JEDEL SA148 BT speaker RGB lamp and clock, wireless charging | Bluetooth speaker | 4,000 | 22 | 11 | 87,200 | 3,964 | 5 (45%) | 6 |
| 2.2 inch X8 Ultra Max compass smartwatch (orange; 2 titles) | Smart watch | 2,700 | 10 | 9 | 25,400 | 2,540 | 2 (22%) | 7 |
| Speed-X Pixel4K X20 Plus Android TV box | Android TV box | 8,500 | 3 | 3 | 23,440 | 7,813 | 2 (67%) | 1 |
| Epson EcoTank L3250 | Inkjet printer | 58,000 | 3 | 3 | 159,000 | 53,000 | 3 (100%) | 0 |
| REMAX Watch 9 smartwatch | Smart watch | 8,000 | 4 | 3 | 32,000 | 8,000 | 2 (67%) | 1 |
| Speed-X BT600M mini portable 80mm printer | Portable thermal printer | 11,400 | 3 | 3 | 34,200 | 11,400 | 1 (33%) | 1 |
| Dell 15 DC15250 laptop | Laptop | 173,000 | 3 | 2 | 519,000 | 173,000 | 2 (100%) | 0 |
| Speed-X SP-640 cash counting machine | Counting machine | 22,500 | 3 | 2 | 65,258 | 21,753 | 1 | 1 |
| X2 Pro 64GB game stick | Gaming | 6,600 | 3 | 2 | 18,420 | 6,140 | 1 | 1 |
| M22 64GB game stick | Gaming | 7,110 | 2 | 2 | 14,220 | 7,110 | 0 | 2 |
| Speed-X SP-320A cash drawer | Cash drawer | 9,800 | 2 | 2 | 18,410 | 9,205 | 1 | 1 |
| Xtrike Me GM-316 gaming mouse | Mouse | 3,450 | 2 | 2 | 5,400 | 2,700 | 0 | 2 |
| RGB gaming mouse pad large | Mouse pad | 1,945 | 3 | 2 | 4,530 | 1,510 | 0 | 2 |
| New A9 1080P WiFi mini camera | Camera | 1,230 | 2 | 2 | 2,460 | 1,230 | 0 | 2 |
| Speed-X 60D 2D wireless barcode scanner | Scanner | 10,000 | 2 | 2 | 19,000 | 9,500 | 1 | 1 |
| IP wireless camera WiFi 1080P battery S06 | Camera | 5,960 | 2 | 2 | 11,920 | 5,960 | 1 | 1 |

  Single-order products (1 unit each, 1 order): Speed-X 9600 scanner Rs 10,000 (fulfilled); SP-9260 scanner Rs 8,000 (fulfilled); 8700 wireless scanner Rs 8,800 (fulfilled); SP-700U 4 inch label printer Rs 19,500 (fulfilled); SP-340B cash drawer Rs 10,900 (fulfilled); SP-S188L 10,000mAh power bank Rs 3,100 (fulfilled); Romoss Sense 8P+ 30,000mAh power bank Rs 4,530 (fulfilled); Kisonli K12 speaker Rs 6,200 (fulfilled); JOYROOM EC06 wired earbuds Rs 1,510 (fulfilled); HP M111W printer Rs 39,000 (fulfilled); X96Q TV box Rs 6,320 (fulfilled); LAN cable Cat6 30m Rs 1,430 (fulfilled); HK10 Ultra 3 smartwatch Rs 6,050 (fulfilled); Remax RP3 voice recorder Rs 6,380 (fulfilled); 3-in-1 wireless charging pad Rs 2,700 (cancelled); M10 earbuds Rs 1,000 (cancelled); Nia WH700 headphones Rs 2,560 (cancelled); Dell Vostro 15 Rs 203,000 (cancelled); HP OmniBook X Rs 260,000 (cancelled); phone stand, ring-light tripod, mouse/keyboard singles, Epson ink Rs 500 — Shopify Admin API
- Cancellation flag: store-wide 19.3% of orders are cancelled/voided. Products clearly above that with at least 3 orders: JEDEL SA148 (5 of 11, 45%), Pixel4K X20 (2 of 3), Epson L3250 (3 of 3), REMAX Watch 9 (2 of 3), Dell 15 (2 of 2). HP DeskJet 2320 (23%) is mildly above average; SP-90A (13%), Kisonli LP-2S (13%) and thermal roll (14%) are below average. Sample sizes under about 10 orders are unreliable.
- Cancelled orders are mostly VOIDED financial status (54 of 58), i.e. cancelled before payment; whether this is customer refusal at confirmation call, fake orders or store-side cancellation is not recorded in these fields.

### Inferences
- The SP-90A is by far the proven seller (127 orders vs 79 for the next, Kisonli LP-2S, and 31 for the DeskJet), with the lowest cancellation rate among high-volume items; it is the safe scale candidate if margin per delivered parcel holds.
- The thermal roll sells in high units (151) but at about Rs 347 ASP gives tiny absolute margin; it is an add-on item, not an ad-lead product.
- The JEDEL SA148 looks like a weaker twin of the Kisonli LP-2S: same type, similar Rs 4,000 price, 45% cancelled. Not a priority.
- Printer family dominates, but non-printer items (scanners, cash drawers, label printers) have only 1-2 orders each, so no volume evidence yet for scanner or drawer ads despite the earlier report recommending scanners.

### Gaps
- No delivered/RTO data in Shopify; true return rate cannot be computed from this source.
- Per-product cancellation percentages for 1-3 order products are anecdotal.
- Order dates cover 13 Sep to 6 Nov only; no data for 1 to 12 Sep (probably store was not yet taking orders; 3 orders in the store total may fall outside the range).

## Categories that dominate

### Takeaway
Sales are concentrated in thermal receipt printers (about 61% of non-cancelled revenue in the printer/scanner type, SP-90A alone about 56%), HP inkjet printers, and Bluetooth speakers; earbuds, power banks, cables and cameras are barely selling in this store.

### Cited Findings
- IMPORTANT: the product table's revenue column includes lines from cancelled orders (gross booked value, Rs 4.53m, 512 units). Excluding the 58 cancelled orders, non-cancelled revenue is Rs 2.54m on 401 units. By product type, non-cancelled: Barcode Scanner/Thermal Receipt Printer type (SP-90A, rolls, BT600M, scanners, label printers) Rs 1.55m (61%), 257 units; HP (DeskJet, M111W, laptop) Rs 0.54m, 26 units; Bluetooth speakers Rs 0.30m, 81 units; cash drawers/counting Rs 41k; smartwatches Rs 32k; gaming Rs 27k; mice/keyboards Rs 19k; TV boxes Rs 14k; cameras Rs 8k; power banks Rs 8k — computed from Shopify order data
- Non-cancelled per product: SP-90A 114 units / Rs 1.42m; HP DeskJet 2320 25 units / Rs 0.50m; Kisonli LP-2S 74 units / Rs 0.27m; thermal roll 136 units / Rs 47k; JEDEL SA148 6 units / Rs 23k; BT600M 2 units / Rs 23k — computed
- Earbuds, power banks, cables, cameras: 1-2 orders each in 8 weeks (earbuds: JOYROOM EC06 1 order, M10 1 cancelled; power banks 2 orders; cameras 4 orders across 2 products; LAN cable 1) — Shopify Admin API
- Catalog breadth is opposite to sales: mobile accessories (219 products), keyboards/mice (123), power banks (86) have most listings but near-zero orders — Shopify counts vs order data

### Inferences
- Meta ads have mostly driven printers and the Kisonli speaker (previous reports confirm printers and LP-2S are the advertised lines), so orders reflect advertising effort at least as much as organic category demand. This sales history cannot separate ad-driven from organic.

### Gaps
- No traffic or ad-source attribution used (not requested); category demand independent of ads is unknown.

## Products priced Rs 1,500 to 40,000 with at least 3 orders

### Takeaway
Eight products pass the filter by average selling price and order count; only four have real volume (SP-90A, Kisonli LP-2S, HP DeskJet 2320, JEDEL SA148), and the smartwatch and TV-box items are small samples.

### Cited Findings
- Passing (ASP between Rs 1,500 and 40,000, 3 or more orders, no cancelled-only counted): SP-90A (127 orders, Rs 12,476), Kisonli LP-2S (79, Rs 3,600), HP DeskJet 2320 (31, Rs 19,975), JEDEL SA148 (11, Rs 3,964), X8 Ultra Max smartwatch (9, Rs 2,540), Pixel4K X20 Plus TV box (3, Rs 7,813), REMAX Watch 9 (3, Rs 8,000), BT600M portable printer (3, Rs 11,400) — computed from Shopify order data
- Excluded: thermal roll (ASP Rs 347, below band, 58 orders); Epson L3250 (ASP Rs 53,000 above band); Dell laptop (above band) — computed

### Inferences
- Realistic ad shortlist from this store alone: SP-90A, Kisonli LP-2S (marginal per earlier report), HP DeskJet 2320, BT600M (small sample, similar to SP-90A), possibly the Kisonli K12 and HP M111W if margin allows (1 order each, so unproven).
- Stock for DeskJet and Kisonli LP-2S shows 0 in Shopify; verify before ads.

### Gaps
- BT600M, 60D scanner and other items at 2-3 orders do not prove demand.

## Gross margin for products with known cost

### Takeaway
At the owner's costs the gross margins before courier, returns and ad cost are about 27-28% for SP-90A and BT600M, 26% for DeskJet 2320, 23% for Kisonli K12 and EC06 (at listed price), 14% for HP M111W and 42% for thermal rolls. M111W is the thinnest and not an ad candidate.

### Cited Findings
- Owner's costs and sell prices are from the assignment brief. Important: the owner's "sells" figure is the Shopify listed price plus a Rs 200 shipping charge (SP-90A listed 12,500 + 200 = 12,700; DeskJet 20,000 + 200 = 20,200; K12 6,200 + 200 = 6,400; EC06 1,510 + 200 = 1,710). M111W listed 39,000 vs 39,500 given; BT600M listed 11,400 equals the figure given. Whether the Rs 200 is actually collected on every order was not checked in the order fields.
- Margin table (computed, Rs; margin = price minus owner cost, before courier, return, tax and ad cost):

| Product | Cost | Price (owner figure) | Gross profit | Margin | On Shopify listed price | Margin on listed |
|---|---|---|---|---|---|---|
| SP-90A | 9,120 | 12,700 | 3,580 | 28.2% | 12,500: 3,380 | 27.0% |
| BT600M | 8,304 | 11,400 | 3,096 | 27.2% | 11,400: 3,096 | 27.2% |
| HP DeskJet 2320 | 15,000 | 20,200 | 5,200 | 25.7% | 20,000: 5,000 | 25.0% |
| HP M111W | 34,000 | 39,500 | 5,500 | 13.9% | 39,000: 5,000 | 12.8% |
| Thermal roll 80mm | 200 | (not given) | n/a | n/a | 350: 150 | 42.9% |
| JOYROOM EC06 | 1,150 | 1,710 | 560 | 32.7% | 1,510: 360 | 23.8% |
| Kisonli K12 | 4,944 | 6,400 | 1,456 | 22.8% | 6,200: 1,256 | 20.3% |

- Actual realised average price from orders: SP-90A Rs 12,476 (margin about Rs 3,356 or 26.9% at Rs 9,120 cost); DeskJet Rs 19,975 (Rs 4,975, 24.9%); roll Rs 347 (Rs 147, 42%) — computed
- Cost is unknown for Kisonli LP-2S (the earlier report used about Rs 2,000 cost against Rs 3,800 incl shipping, which is a fitted assumption, not owner data), JEDEL SA148, all other scanners, drawers, label printers, smartwatches, TV boxes, power banks and cameras. Margin is not stated for these.

### Inferences
- Even the better lines yield 25-28% gross margin; after Rs 500 courier, about 4% tax and a Rs 467-812 ad cost per booking (earlier report), the SP-90A yields about the Rs 1,000 per booking the earlier work estimated; DeskJet's higher absolute gross (about Rs 5,000) leaves more room per parcel than SP-90A (about Rs 3,400) if its cancellation rate (23%) and returns do not erode it.
- HP M111W at 13-14% margin cannot fund the Rs 2,700 profit floor from the earlier report.

### Gaps
- Owner costs for any item beyond the seven given.
- Courier cost, return rate and ad spend by product not obtainable from Shopify.
