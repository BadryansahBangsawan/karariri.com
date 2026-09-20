# Karariri Coffee & Eatery

Papan nama digital kedai kopi di Jl. Hassanudin, Serui Kota, Kepulauan Yapen.

Situs publik adalah satu halaman (`/`). Bahasa Indonesia. Aksi utamanya **Buka rute** ke Google Maps. Tidak ada telepon, WhatsApp, Instagram, atau form reservasi di listing — jangan mengarang.

Plus code: `46HQ+7HR`  
Jam: setiap hari 11.00–23.00 WIT (`Asia/Jayapura`)  
Rating: 4,9 dari 24 ulasan Google

## Jalankan landing

Butuh [Bun](https://bun.sh).

```bash
bun install
cd apps/web
bun run start
```

Buka [http://localhost:3001](http://localhost:3001).

`bun run dev` di root menyalakan stack penuh (web + server) dan butuh env server. Untuk halaman publik, `apps/web` + `bun run start` cukup.

## Copy dan fakta

Semua teks tempat hidup di `apps/web/src/lib/karariri.ts`. UI landing hanya membaca modul itu.

- CTA: `Buka rute` → `mapsDirUrl`
- Salin plus code → `46HQ+7HR`
- Foto: tautan Google Maps, bukan hotlink JPEG
- Denah ruang berlabel `Ilustrasi`

Jangan menambah nomor telepon, harga menu, atau daftar menu lengkap.

## Desain

Papan enamel civic: cream `#F3EDE1`, hijau `#1E4A38`, baja `#5C5A56`. Huruf papan Overpass / Overpass Condensed; isi Atkinson Hyperlegible.

Lihat `PRODUCT.md` (fakta produk) dan `DESIGN.md` (sistem visual).

## Struktur

```
apps/web          landing publik (Vite + TanStack Router)
apps/server       API scaffold — bukan produk publik
packages/ui       shadcn primitives (landing tidak memakai Button/Card)
packages/api      oRPC
packages/auth     Better Auth — tidak di-link dari `/`
packages/db       Drizzle
packages/infra    Alchemy / Cloudflare
```

## Skrip

| Perintah | Fungsi |
|---|---|
| `bun install` | Pasang dependensi |
| `cd apps/web && bun run start` | Landing di :3001 |
| `bun run build` | Build workspace |
| `bun run check-types` | Typecheck |
