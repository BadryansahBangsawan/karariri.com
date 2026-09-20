---
name: Karariri
description: Civic enamel wayfinding plate for a Serui kedai kopi.
colors:
  enamel: "#F3EDE1"
  plate-green: "#1E4A38"
  steel: "#5C5A56"
typography:
  display:
    fontFamily: "Overpass Condensed, Overpass, sans-serif"
    fontSize: "clamp(3.25rem, 16vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Overpass, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "normal"
  title:
    fontFamily: "Overpass, sans-serif"
    fontSize: "clamp(1.2rem, 3.2vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.22em"
  body:
    fontFamily: "Atkinson Hyperlegible, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Atkinson Hyperlegible, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  none: "0"
  plate: "0.2rem"
spacing:
  beat: "1.35rem"
  section: "1.75rem"
  rail: "6vw"
components:
  chevron-route:
    backgroundColor: "{colors.plate-green}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.none}"
    padding: "0.7rem 2.55rem 0.7rem 1.2rem"
    height: "3.35rem"
  plate-surface:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.plate-green}"
    rounded: "{rounded.none}"
    padding: "1.35rem 1.2rem 1.4rem"
---

# Design System: Karariri

## Overview

**Creative North Star: "Rambu plus-code Hassanudin"**

Karariri’s public surface is a municipal enamel sign, not a cafe brand site. Identity is the plus code you follow tonight. Cream field, dark-green lettering, steel rim and bolts. Light, late-afternoon island street, not a dim interior.

Density is a plate you can read from a motorbike, then more plates for rooms, sajian, proof, and datang. Rejected: cream-serif-terracotta cafe template, latte-pour hero, Our Story, menu grid, black specialty-coffee lab.

**Key Characteristics:**

- Plus code is the display heading and the copy control.
- Primary action is a dark-green directional chevron, a real maps link.
- Later sections reuse enamel rims, not article cards.
- One authored motion: bolt-clack on successful plus-code copy.

## Colors

Three named inks. Green is identity; cream is the enamel field; steel is hardware.

### Primary

- **Plate Green** (#1E4A38): Lettering, hours lamp, chevron fill, focus rings, selection background. Municipal, not matcha.

### Neutral

- **Enamel** (#F3EDE1): Page ground and plate field. Milk cream. User pin.
- **Steel** (#5C5A56): Rim, bolts, hairlines, colophon, quote/plan frames.

### Named Rules

**The Two-Ink Plate Rule.** Cream is the field. Green is the name. Steel is only hardware. No terracotta, no matcha foam.

## Typography

**Display Font:** Overpass Condensed (fallback Overpass, sans-serif)
**Body Font:** Atkinson Hyperlegible (sans-serif)

**Character:** Highway-gothic plate lettering for the code and the place-name; civic body type chosen for distance reading, not cafe serif.

### Hierarchy

- **Display** (800, `clamp(3.25rem, 16vw, 6rem)`, 0.88, tracking -0.035em): `46HQ+7HR` only. Tabular lining. Max 6rem.
- **Headline** (700, `clamp(1.35rem, 2.4vw, 2rem)`, 1.08): Section titles (Ruang, Sajian, Ulasan, Datang).
- **Title** (700, `clamp(1.2rem, 3.2vw, 1.85rem)`, 1.15, tracking 0.22em, uppercase): KARARIRI on the plate.
- **Body** (400, 1.0625rem, 1.55): Hook, quotes, address, hours table.
- **Label** (400–700, ~0.98–1.125rem): Nav rail, chevron label, Salin plus code.

### Named Rules

**The Code-Is-The-Name Rule.** The plus code is the largest type. Do not put an eyebrow above it. Do not set display in Inter, Playfair, or another cafe serif.

## Layout

Mobile: the first enamel plate is `min-height: 100svh`, full bleed, no document padding. Chevron sits on `margin-top: auto` so Buka rute stays on the first screen; nav is the plate’s lower rail.

Desktop (≥1440): the hero plate is a roadside object — `width: min(56rem, 64vw)`, `margin-left: 6vw`, `min-height: calc(100svh - 3.5rem)`. Later beats share that left rail (`margin-left: 6vw`, width cap 46rem).

Spacing: more space above a heading than below it. Section gap ~1.75rem. In-page anchors only: Ruang, Sajian, Ulasan, Datang.

## Elevation & Depth

No ambient drop shadows. Depth is the enamel sandwich: cream field, steel rim, inset cream then steel (`inset 0 0 0 0.42rem enamel, inset 0 0 0 0.55rem steel`) plus a 0.12rem steel foot. Bolts sit in the four corners of the identity plate.

### Shadow Vocabulary

- **Enamel rim** (`box-shadow: inset 0 0 0 0.42rem #F3EDE1, inset 0 0 0 0.55rem #5C5A56, 0 0.12rem 0 #5C5A56`): Identity plate and later beats.

### Named Rules

**The Hardware-Not-Halo Rule.** No zero-offset colored glow. No hard offset neo-brutal shadow.

## Shapes

Plates are rectangular enamel with square corners (0). At 1440 the hero may take `0.2rem`. The route control is not a rounded rectangle: it is a right-pointing chevron via `clip-path: polygon(0 0, calc(100% - 1.35rem) 0, 100% 50%, calc(100% - 1.35rem) 100%, 0 100%)`. Room proof is plan geometry (hall / outdoor / VIP), labeled Ilustrasi.

## Components

### Chevron (Buka rute)

Directional hardware, not a site button.

- **Shape:** right-pointing clip-path chevron, radius 0
- **Primary:** plate-green fill, enamel text, padding `0.7rem 2.55rem 0.7rem 1.2rem`, min-height 3.35rem
- **Behavior:** real `<a href={mapsDirUrl} rel="noopener noreferrer">`. Hover brightens; active translates 2px. Reduced motion kills the translate.

### Plate / beat

- **Corner:** 0 (hero 0.2rem at 1440)
- **Background:** enamel
- **Border:** 0.2rem steel plus enamel-rim shadow
- **Identity plate:** four bolt SVGs, plus-code h1, hours lamp, chevron, nav rail
- **Later beats:** same rim, no bolts required

### Plus-code control

- **Style:** Overpass Condensed display glyphs; invisible button chrome
- **State:** copies `46HQ+7HR`; `aria-live` announces `Tersalin 46HQ+7HR`; plate class `is-clack` for one bolt-clack (disabled under `prefers-reduced-motion`)

### Hours lamp

- **Style:** text plus a 0.55rem green disc
- **Copy:** `Buka sekarang · tutup pukul 23.00` or `Buka pukul 11.00` from `Asia/Jayapura` against 11.00–23.00. Never color-only.

### Quotes

Full steel rim on enamel, not a left rule. Author as footer in steel.

### Navigation

In-page rail on the identity plate. Indonesian labels only. No Home / Dashboard / Login on `/`.

## Do's and Don'ts

### Do:

- **Do** lead with `46HQ+7HR` as the heading and keep **Buka rute** on the first 390px screen.
- **Do** use enamel `#F3EDE1`, plate green `#1E4A38`, steel `#5C5A56`.
- **Do** keep Overpass / Overpass Condensed + Atkinson Hyperlegible.
- **Do** label synthetic room plans `Ilustrasi`; link Maps for real photos.
- **Do** take copy from `karariri.ts` only.

### Don't:

- **Don't** invent phone, WhatsApp, Instagram, email, IDR prices, or a full menu.
- **Don't** hotlink RRI, Mepago, or Google user JPEGs.
- **Don't** skin shadcn Button/Card onto `/`.
- **Don't** use Inter as the landing voice, or cream + terracotta cafe chrome.
- **Don't** put an eyebrow/kicker above the plus code.
- **Don't** use a colored `border-left` on quotes or beats.
