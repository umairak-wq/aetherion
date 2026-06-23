# Aetherion

Frontier science, deep-tech intelligence, and strategic technology — website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

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
- `lib/` — content data (`content.ts`, `contact.ts`) and a small `clsx` helper

All copy lives in `lib/content.ts`, `lib/contact.ts`, and individual page files — edit there rather than inline in components where possible.

## Notes

This project was authored without running `npm install` (no registry access in the build environment), so dependency versions in `package.json` are pinned to known-compatible releases but the lockfile will be generated fresh on your first `npm install`. All `.ts`/`.tsx` files have been syntax-checked.
