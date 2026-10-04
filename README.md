# Alamasyarie Personal Site

Situs pribadi dengan Next.js dan markdown.

## Jalankan

1. `npm install`
2. `npm run dev`

## Struktur

- `app/` - halaman Next.js untuk Home, Projects, Learning, Writing, About, dan Notes
- `lib/site.ts` - data ringkas untuk fokus belajar dan kurikulum
- `content/blog` - markdown untuk tulisan panjang
- `content/notes` - markdown untuk catatan singkat

## Database orderan

Inisialisasi database SQLite:

```bash
npm run db:init
```

Tampilkan orderan dari terminal:

```bash
npm run db:show
```

Di dalam pi, muat ulang extension dengan `/reload`, lalu gunakan:

```text
/sqshow orders
```
