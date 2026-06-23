# Aetherion

Frontier Science Intelligence — the intelligence platform for emerging technologies.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For a stable local preview:

```bash
npm run preview
```

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` — routes (Home, Technology, Mission, Markets, About, Contact) plus `layout.tsx`, `globals.css`, `sitemap.ts`, `robots.ts`
- `components/layout/` — Navbar, Footer
- `components/home/` — homepage sections
- `components/ui/` — shared primitives (Container, Section, Button, cards, PageHero)
- `components/motion/` — scroll-reveal wrapper (Framer Motion)
- `lib/` — site config (`site.ts`), content data (`content.ts`, `contact.ts`), and a small `clsx` helper

## Repository

https://github.com/umairak-wq/aetherion
