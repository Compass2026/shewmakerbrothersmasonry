# Shewmaker Brothers Masonry — website

First Astro build for Compass Marketing and the reference the Compass Astro starter is
extracted from. Build it like a template: clean reusable components, nothing hard-coded that
should be configuration.

## Where things are

| Path | What it is |
| --- | --- |
| `PRODUCT.md` | Product truth (audience, positioning, constraints, evidence). Impeccable reads it. |
| `DESIGN.md` | The visual system in DESIGN.md spec format (tokens plus eight sections). Impeccable reads it. |
| `docs/brand-board.md` | Source of truth for voice, palette, imagery rules and hard rules (converted from Drive). |
| `docs/keyword-map.md` | Source of truth for taxonomy, keywords, city tiers and the 34-page sitemap (converted from Drive). |
| `docs/art-direction.md` | Stage 1 direction, approved 2026-09-07. |
| `docs/placeholders.md` | Every placeholder and unverified fact. Update it whenever one is added or resolved. |
| `docs/source/` | The original .docx files. |
| `public/images/projects/` | Interim 414px project photos with `manifest.json` (descriptions, alt text, page fit). |
| `public/images/brand/` | The logo raster. Vector needed before launch. |

## Stage status

- Stage 0, source material: done.
- Stage 1, art direction: approved (Rokkitt display, Merriweather Sans body, one light section per page, the homepage order in `docs/art-direction.md`, interim raster badge in the header).
- Stage 2, scaffold and globals: done 2026-09-07. Astro 7 + TypeScript + Tailwind 4, `src/config/site.ts` as the single source of truth, global and schema components, the home page, staging on Vercel.
- Stage 3, all 34 pages to 70 percent: next.
- Stage 4, verify with Impeccable detect, Playwright screenshots, schema validation, Core Web Vitals.

## Build and run

```
npm install
npm run dev          # http://localhost:4321
npm run build        # static output in dist/
npm run check        # astro check (TypeScript)
node qa/screenshots.mjs --all   # desktop + mobile full-page screenshots of every page into qa/screenshots/
```

Every page is `noindex` and robots.txt is closed until `SITE_ENV=production` is set in the Vercel
project for the live domain. `SITE_URL` overrides the canonical origin; otherwise it comes from
`VERCEL_PROJECT_PRODUCTION_URL` or the staging constant in `src/config/site.ts`.

## Hard rules (build failures)

Never state years in business. Never claim licensed, insured, bonded or warranty. Never quote or
imply pricing. Never invent a project, customer, testimonial or location. Never use a stock or
AI-generated image. "Shewmaker Brothers Masonry" in full, always. No street address anywhere.
The only phone number is 573-569-3690.

## Note on Impeccable in a proxied environment

`npx impeccable install` downloads its skill bundle with its own TLS stack and fails behind a
TLS-intercepting proxy. The bundle can be fetched with curl from
`https://impeccable.style/api/download/bundle/universal` and unzipped by hand; `npx impeccable
detect <path>` runs offline on local files.
