---
name: Karariri
description: Cafe homepage for a Serui kedai kopi.
colors:
  cream: "#F3EDE1"
  green: "#1E4A38"
  ink: "#16382B"
  muted: "#3D5C4F"
  quote: "#FFFDF8"
typography:
  display:
    fontFamily: "Source Serif 4, Iowan Old Style, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.7rem, 7vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.45rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  panel: "14px"
  pill: "999px"
spacing:
  page: "1.15rem"
  section: "2.25rem"
components:
  cta:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.15rem"
    height: "2.65rem"
  hero-panel:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.panel}"
---

# Design System: Karariri

## Overview

**Creative North Star: "Fore-craft cafe homepage"**

Karariri’s public surface is a bright Indonesian cafe landing: wordmark, slogan, hours, featured drinks, reviews, visit. Identity is the kedai, not a street plate. Cream field, committed dark green for brand and CTA. Craft bar: Fore Coffee, played straight.

**Key Characteristics:**

- Serif wordmark, sans UI.
- Green pill **Buka rute**.
- Photo-shaped Ilustrasi panels instead of stolen cafe photos.
- Live hours chip.

## Colors

### Primary

- **Green** (#1E4A38): wordmark, CTA, hero panel, drink tiles.

### Neutral

- **Cream** (#F3EDE1): page ground.
- **Ink** (#16382B): headings and body.
- **Muted** (#3D5C4F): secondary text.
- **Quote** (#FFFDF8): review cards.

## Typography

**Display Font:** Source Serif 4 (wordmark, plus code)
**Body Font:** Manrope

### Hierarchy

- **Display** (600, 1.45rem): Karariri wordmark.
- **Headline** (800, clamp 1.7–2.6rem): hook as h1.
- **Title** (700, clamp 1.45–2rem): section headings.
- **Body** (400, 1.0625rem).
- **Label** (700, 0.95rem): CTA and nav.

## Layout

Mobile-first cream page. Top bar wordmark + CTA. Hero copy then Ilustrasi. Desktop (≥1440): two-column hero, sections max ~42–68rem centered.

## Elevation & Depth

Soft offset shadow `0 10px 28px rgba(22, 56, 43, 0.12)` on panels and quotes. No enamel inset rims.

## Shapes

Panel radius 14px. CTA pills 999px.

## Components

### CTA

Green pill, cream type, real maps `<a>`. Compact width in Datang (not full-bleed).

### Hero panel

Rounded green field, cup geometry, caption Ilustrasi. One ease-in; reduced-motion off.

### Hours chip

Pill of green-tinted cream. Live WIT text.

## Do's and Don'ts

### Do:

- **Do** keep **Buka rute** on the first 390px screen.
- **Do** use cream `#F3EDE1` and green `#1E4A38`.
- **Do** label synthetic panels `Ilustrasi`.

### Don't:

- **Don't** invent phone, WhatsApp, Instagram, or menu prices.
- **Don't** restore the enamel plus-code plate as identity.
- **Don't** hotlink Google or press photos.
