# Kamran Rice Mill — Premium Scroll‑Driven Website

A production‑quality marketing site for **Kamran Rice Mill**, a Pakistani rice
producer and exporter. The centerpiece is a **scroll‑scrubbed hero video**: a
single rice plant on a pure‑white background that the visitor drives frame‑by‑
frame with their scroll position, while an eight‑stage story crossfades from
_Origin_ to _Kamran Rice Mill_.

Built with **Next.js (App Router) · React · TypeScript · Tailwind CSS ·
Framer Motion**.

---

## The signature interaction

- The hero video is **never autoplayed and never looped**. It stays **paused**
  and its `currentTime` is mapped directly to scroll progress, so scrolling
  forward advances the camera and scrolling back rewinds it.
- Progress → time mapping (duration is read from `video.duration` after
  `loadedmetadata`, **never hard‑coded**):

  | Scroll | Video time (of ~15s) |
  | ------ | -------------------- |
  | 0 %    | 0.00 s               |
  | 25 %   | 3.76 s               |
  | 50 %   | 7.52 s               |
  | 75 %   | 11.28 s              |
  | 100 %  | final frame          |

- All of this lives in a reusable hook, [`hooks/useScrollVideo.ts`](hooks/useScrollVideo.ts):
  scroll listeners are passive, seeks are coalesced through a single
  `requestAnimationFrame` loop and throttled to frame granularity, geometry is
  cached and re‑measured on resize, and **no React state changes while
  scrubbing** (the stage index updates only when it actually crosses a
  boundary; the progress bar is written directly to the DOM).
- **Accessibility:** honours `prefers-reduced-motion` — scrubbing is disabled,
  the video is frozen on a representative frame, and the eight beats are shown
  as a plain, static list.

## Performance & compatibility of the video

The source clip is served in two formats for smooth, wide support:

- `rice-journey.mp4` — H.264, audio stripped, `+faststart` (moov atom at the
  front so the browser can seek before the whole file downloads). Preferred for
  hardware‑accelerated seeking.
- `rice-journey.webm` — VP9 fallback for browsers without H.264.
- `rice-journey-poster.webp` — first frame, used as the `<video poster>` for a
  fast, layout‑stable first paint.

## Content is data, not markup

Company facts and the scroll story are centralised so copy changes never touch
component code:

- [`data/siteContent.ts`](data/siteContent.ts) — company info, nav, products,
  capacity, processing, export, contact, SEO.
- [`data/journeyStages.ts`](data/journeyStages.ts) — the eight scroll stages
  and their scroll‑progress ranges.

> ⚠️ **Verify before launch.** The official site (kamranricemill.com) was
> unreachable from the build environment, so figures marked `[VERIFY]` in
> `data/siteContent.ts` (year established, storage/production capacity, contact
> email, and the product line‑up) come from the project brief and must be
> confirmed against the official website. No certifications, export countries,
> or machinery brands are asserted anywhere, because none could be verified.

## Structure

```
app/
  layout.tsx        # fonts, SEO metadata, Open Graph/Twitter, JSON-LD
  page.tsx          # section composition
  globals.css       # white-dominant base, reduced-motion
components/
  Navbar.tsx  RiceJourney.tsx  JourneyStage.tsx  ProgressIndicator.tsx
  About.tsx  Products.tsx  Processing.tsx  Capacity.tsx  GlobalReach.tsx
  PrivateLabel.tsx  QuoteForm.tsx  Contact.tsx  Footer.tsx
  ui/ Reveal.tsx  CountUp.tsx
hooks/  useScrollVideo.ts
data/   siteContent.ts  journeyStages.ts
public/
  brand/kamran-rice-mill-logo.png
  videos/rice-journey.{mp4,webm}  rice-journey-poster.webp
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

### Static export (GitHub Pages)

```bash
NEXT_EXPORT=true NEXT_PUBLIC_BASE_PATH=/onux npm run build   # → ./out
```

The `NEXT_PUBLIC_BASE_PATH` is applied to asset paths (logo, video, poster) via
the `asset()` helper so the site works when served from a sub‑path.
