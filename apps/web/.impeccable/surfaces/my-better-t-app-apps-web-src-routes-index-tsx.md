---
version: 1
slug: "my-better-t-app-apps-web-src-routes-index-tsx"
primary_target: "my-better-t-app/apps/web/src/routes/index.tsx"
related_targets: []
---

# Surface: `/` Karariri landing

Visitor mode: Persuade

Audience: orang di Serui / Yapen (atau sedang ke kota) yang buka HP untuk memutuskan tempat nongkrong atau makan malam.

Job: yakin tempatnya nyata, buka, dan bisa dituju malam ini.

CTA: **Buka rute** → Google Maps directions. Secondary: **Salin plus code**. Photos: tautan Maps.

Proof: plus code `46HQ+7HR`; jam 11.00–23.00 WIT; 4,9 dari 24 ulasan Google; dua kutipan bernama (ria via, Nadia Nurtantijo); tiga ruang; Kopi Susu Karariri + Spaghetti Brulee; dekat kantor pemkab; pemilik + asal nama Kosiwo.

Constraints: Bahasa Indonesia; no phone/WA/IG/email/harga/menu lengkap; no hotlinked press or Google user photos; no Dashboard/Login/API status on this surface.

Memorable moment: papan enamel raksasa `46HQ+7HR` yang bisa disentuh — identitasnya adalah alamat yang bisa diikuti.

## Direction contract

THESIS: Karariri is a civic wayfinding plate on Jalan Hassanudin, not a cafe brand story. Refuse cream-serif-terracotta “Our Story” / latte-pour / menu-grid. The plus code is the name the visitor follows.

OWN-WORLD: Late-afternoon enamel sign. Ground is milk cream `#F3EDE1`. Identity is municipal dark green `#1E4A38` (not matcha, not terracotta). Steel `#5C5A56` for bolts, edge, and hairline. Light surface. Type objects: Overpass (Highway Gothic plate lettering) for KARARIRI and `46HQ+7HR`; Atkinson Hyperlegible for body and controls. Components are sign hardware: enamel field, raised border, bolt heads, chevron arrow, hours lamp. No shadcn Button/Card on `/`.

STORY: Visitor understands this is a real kedai kopi in Serui Kota, open until 23.00, with three rooms. Believes the plus code and named reviews. Does: opens Google Maps rute, or copies `46HQ+7HR`.

FIRST VIEWPORT: On 390px, one cream enamel plate fills the screen. No eyebrow. Giant Overpass `46HQ+7HR` is the heading. Directly under it, KARARIRI as the place-name, then the locked hook “Kedai kopi di jantung Serui. Buka setiap hari sampai pukul 23.00.” Hours lamp on the plate face (text, not color-only): open `Buka sekarang · tutup pukul 23.00` / closed `Buka pukul 11.00`. Bottom of the plate: a dark-green chevron is a real `<a href={mapsDirUrl}>Buka rute</a>` (`rel="noopener noreferrer"`), visible without scroll. The plus-code glyphs are the copy control. Desktop 1440: the plate sits as a roadside object (large left/center sign), not a navbar+hero; in-page anchors Ruang / Sajian / Ulasan / Datang live on the plate’s lower rail.

FORM: Rambu plus-code Hassanudin. Signature interaction: activating the plus-code face copies `46HQ+7HR`, announces `Tersalin 46HQ+7HR` via `aria-live`, and the enamel gives one bolt-clack (disabled under `prefers-reduced-motion`; content visible without waiting). Hours lamp is live `Intl` + `Asia/Jayapura` against 11.00–23.00. Buka rute is never a fake button.

seed key: e248cd3d
