---
name: Karariri
description: Artisanal cafe homepage for a Serui kedai kopi.
colors:
  cream: "#FAF6EF"
  espresso: "#6B3A1F"
  amber: "#C9833A"
  oat: "#EFE6D6"
  ink: "#2A160C"
  mute: "#94867A"
  line: "#DDD0BE"
typography:
  display:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 7vw, 6.875rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.85rem, 4vw, 2.85rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Iowan Old Style, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  none: "0"
spacing:
  page: "1rem"
  section: "4.25rem"
components:
  cta:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.2rem"
    height: "2.85rem"
  hero-bleed:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Karariri

## Overview

**Creative North Star: "Groundwork artisan cafe"**

Karariri’s public surface is a warm artisanal cafe landing: Playfair italic wordmark, espresso and amber on cream, photo-led sections, live hours, Maps as the only real action. Identity is the kedai in Serui, not a London shop and not a street plate.

**Key Characteristics:**

- Playfair Display headlines; DM Sans body and uppercase labels.
- Espresso filled buttons, square corners, 0.2s hover.
- Full-bleed hero photograph with cream bottom fade.
- Amber underline rules that scaleX in on scroll.
- Stock photographs labeled **Ilustrasi** — never claimed as the shop.

## Colors

HSL tokens on `.karariri`:

- **Cream** `35 30% 97%` (#FAF6EF): page ground.
- **Ink** `22 40% 12%` (#2A160C): headlines and body.
- **Espresso** `22 55% 28%` (#6B3A1F): primary, wordmark, CTA, find-us band.
- **Amber** `38 65% 55%` (#C9833A): italic accents, rules, chips, stars.
- **Oat** `35 25% 91%` (#EFE6D6): cards, space band, strip wash at 15% amber.
- **Mute** `22 15% 50%`: labels and captions.
- **Line** `35 20% 82%`: hairlines and chip borders.

## Typography

**Display Font:** Playfair Display (600–700, italic accents in amber)
**Body Font:** DM Sans (300 body, 400 UI, 500 labels)

### Hierarchy

- **Display** (700, clamp 2.6–6.875rem): hero “Kopi Enak / Tempat Nyaman / Sampai Malam.”
- **Headline** (700): section titles with amber rule.
- **Title** (600): menu card names.
- **Body** (300, 1.0625rem).
- **Label** (500, 10px, 0.12em uppercase): kicker, chips, tags, cites.

## Layout

Sticky cream nav with `backdrop-filter: blur(10px)`. Hero bleed 68vh, copy below in page flow. Menu 1-col → 2×2. Strip 2×2 → 4-col. Story splits 1-col → 2-col. Gallery 280px horizontal strip, no radius. Find-us and footer full espresso. Max wrap ~72–76rem.

## Elevation & Depth

No drop shadows. Depth is crop, overlap (stacked photos), and espresso borders on card hover.

## Shapes

Square. Hero and gallery have no border-radius. Buttons and chips are unrounded.

## Components

### CTA

Espresso fill, cream type, real Maps `<a>`. Ghost and cream variants. Hover 0.2s.

### Hero bleed

Full-width photograph, cream gradient `to top, cream 0%, transparent 45%`. Copy centered underneath.

### Hours chip

Live WIT text from `hoursLabel()` against 11.00–23.00.

### Amber rule

`scaleX 0→1`, 0.5s, transform-origin left (center when heading is centered).

## Motion

- Hero: stagger fade-up on mount (y 30→0, 0.7s).
- Menu cards and quotes: stagger fade-up on scroll.
- Rooms strip: slide-in from left, stagger 0.1s.
- Hover: 0.2s ease; card image scale 1.02.
- Disabled under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:

- **Do** keep **Buka rute** in the first viewport (nav) and on Datang.
- **Do** use cream / espresso / amber as specified.
- **Do** label every stock photograph `Ilustrasi`.
- **Do** take facts from `karariri.ts` only.

### Don't:

- **Don't** invent phone, WhatsApp, Instagram, email, or menu prices.
- **Don't** restore the enamel plus-code plate or Fore green pills.
- **Don't** hotlink Google or press photos.
- **Don't** claim stock photos are the Serui shop.
