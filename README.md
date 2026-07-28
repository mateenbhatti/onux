# APEX — Interactive Cinematic Automotive Workshop

An award-worthy, immersive automotive performance workshop website. The whole
experience is built around a single provided cinematic asset, turned into an
**interactive, scroll- and pointer-driven virtual camera** rather than a looping
background video.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP
ScrollTrigger · Lenis · Framer Motion**.

---

## The asset & the interaction decision

The provided video is a single **8s / 24fps / 1280×720 (192 frame)** cinematic
camera move. Inspecting the frames, it is a *scripted linear timeline*, not a
360° turntable:

| Frames | Beat |
| ------ | ---- |
| 0–24   | Symmetric front hero shot in a dark workshop |
| ~48–72 | Orbit to a 3/4 side profile (wheels, brakes) |
| ~96–120| Hood/engine bay opens |
| ~144   | Full twin-turbo engine reveal |
| ~168–191| Pull-back with an X-ray body |

Because it is a **linear cinematic sequence**, the honest and strongest
implementation is a **frame sequence scrubbed by scroll and pointer** — this is
the technique behind Apple's product pages. It is chosen over `video.currentTime`
scrubbing because:

- iOS/Safari **cannot** seek `currentTime` smoothly without buffering hitches.
- Frame sequences give **frame-accurate, jitter-free** control in every browser.
- The linear timeline maps 1:1 onto the page narrative.

We do **not** fake 360° movement the asset can't provide. The "control the
camera" feeling comes from three honest layers:

1. **Scroll → frame** across the cinematic block (the primary story control).
2. **Pointer → overscan parallax** (translate + zoom of the drawn frame) for a
   left/right/up/down camera-pan illusion.
3. **Pointer → small forward frame nudge** on the hero, so moving toward the
   right actually *begins the orbit*.

All values are interpolated with frame-rate-independent damping — smooth,
inertial, no jumps.

## Frame-extraction workflow (reproducible)

Frames are pre-generated as optimized **WebP** at two resolutions and committed
under `public/frames`. To regenerate from a source video:

```bash
# Desktop set — 1280×720
ffmpeg -i source.mp4 -vf "scale=1280:720" -c:v libwebp -q:v 70 \
  -compression_level 6 public/frames/desktop/frame_%03d.webp

# Mobile set — 720×405 (≈half the bytes)
ffmpeg -i source.mp4 -vf "scale=720:405" -c:v libwebp -q:v 68 \
  -compression_level 6 public/frames/mobile/frame_%03d.webp
```

Result: desktop ≈ 7 MB / 192 frames (~36 KB avg), mobile ≈ 3.6 MB. Frames are
served with `immutable` cache headers (see `next.config.mjs`).

## Rendering & performance

- A **single fixed `<canvas>`** (`components/FrameStage`) draws the current
  frame with cover-fit, overscan parallax and a cinematic light/vignette pass,
  on one `requestAnimationFrame` loop.
- Pointer and scroll write to a **plain mutable store** (`lib/interaction/store`)
  that the canvas reads directly — **no React re-renders** on pointer/scroll.
- **Progressive loading** (`lib/video/frameLoader`): a small hero-window batch
  loads first (real % shown in the intro), the rest streams in concurrent
  lanes. Missing frames fall back to the nearest decoded one — never a blank.
- Desktop vs mobile frame set chosen once by viewport/pointer type.
- DPR capped at 2; GPU-friendly `transform`/`translate3d`; `IntersectionObserver`
  for reveal animations.

## Accessibility & resilience

- **`prefers-reduced-motion`**: disables Lenis smoothing, pointer parallax and
  inertia; frames snap directly to scroll so the *content* still reveals.
- **Touch devices**: custom cursor and pointer parallax are disabled; the story
  is driven entirely by native scroll scrubbing and swipe.
- **No-JS / canvas failure**: a `<noscript>` fallback plays the original video.
- Missing-frame tolerance, load-time fallback in the preloader (max 9s).

## Project structure

```
app/                     layout, page, globals, favicon
components/
  FrameStage/            the pinned canvas film renderer
  ScrollController/      Lenis + GSAP scroll→frame mapping, PointerTracker
  Hero/                  hero + subtle text parallax
  InteractiveHotspots/   vehicle hotspots (engine, wheels, bodywork, diagnostics)
  PerformanceSection/    scroll-revealed typography + stats
  EngineeringSection/    "scroll to open the bay" engine reveal
  Services/              premium service grid w/ spotlight + tilt
  WhyUs/  Workshop/  Booking/  Navigation/  CustomCursor/  Preloader/  Footer/
lib/
  content.ts             ALL copy, services, hotspots, camera marks
  interaction/           store, math (lerp/damp/clamp), ui hook
  video/                 progressive frame loader
public/
  frames/desktop|mobile  WebP frame sequences
  videos/                original mp4 (noscript fallback)
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

All copy lives in `lib/content.ts`. The booking form's `onSubmit` is a demo —
wire it to your CRM/endpoint there.
