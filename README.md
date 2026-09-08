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
- Stage 3, all 34 pages to 70 percent: done 2026-09-07. 19 service pages, 9 city pages, service area, gallery, about, contact, blog hub. Copy in `src/data/copy/`, one typed file per page; every unverified fact and missing photo is a visible placeholder logged in `docs/placeholders.md` (section F).
- Stage 4, verify: done 2026-09-07. Impeccable detect clean on source and on the preview at 1280 and 390 wide (four brief-pinned rules waived in `.impeccable/config.json`, see below); Playwright full-page screenshots of all 34 pages at both widths plus menu, mobile-nav and gallery-filter states; copy-rule lint and structure/schema/link check at zero; Lighthouse 96 to 100 performance, 100 accessibility, 100 best practices, CLS 0 on five page types (SEO 69 only because staging is noindex); Impeccable finish review: five material fixes applied (coursed gallery grid, mobile footer, course-line strength, display word spacing, mobile Services disclosure) and scored resolved, disposition ship; DESIGN.md and  re-documented from the built world; every page measures 390 px wide on mobile ().
- Next: full-resolution photography from Sam (docs/placeholders.md A and B), the vector logo (C), Sam's answers on the unverified facts (D), the production domain and a form endpoint (E), the Google Business Profile, then blog posts.

## Build and run

```
npm install
npm run dev          # http://localhost:4321
npm run build        # static output in dist/
npm run check        # astro check (TypeScript)
node qa/screenshots.mjs --all   # desktop + mobile full-page screenshots of every page into qa/screenshots/
node qa/lint-copy.mjs           # copy-rule lint over dist/ (pricing, years, licensing, invented places, short name): exit 2 on a hit
node qa/site-check.mjs          # one H1, title/description lengths, canonical, noindex, JSON-LD NAP, internal links and anchors
node qa/placeholders.mjs        # rewrites docs/placeholders.md section F from the placeholder blocks in dist/
node qa/states.mjs              # menu, mobile nav and gallery-filter state captures
node qa/overflow.mjs            # horizontal-overflow check at 390px on every sitemap page: exit 2 on overflow
node qa/lighthouse.mjs          # Lighthouse mobile + desktop on a representative page set
```

Copy lives in `src/data/copy/services/<slug>.ts` and `src/data/copy/cities/<slug>.ts`, typed by `src/data/types.ts`;
`src/data/taxonomy.ts` and `src/data/cities.ts` hold the slugs, keywords and tiers. Run `npm run build` then the
four `qa/` checks before every commit.

Every page is `noindex` and robots.txt is closed until `SITE_ENV=production` is set in the Vercel
project for the live domain. `SITE_URL` overrides the canonical origin; otherwise it comes from
`VERCEL_PROJECT_PRODUCTION_URL` or the staging constant in `src/config/site.ts`.

## Hard rules (build failures)

Never state years in business. Never claim licensed, insured, bonded or warranty. Never quote or
imply pricing. Never invent a project, customer, testimonial or location. Never use a stock or
AI-generated image. "Shewmaker Brothers Masonry" in full, always. No street address anywhere.
The only phone number is 573-569-3690.

## Impeccable detector waivers

`.impeccable/config.json` ignores four detector rules because the approved DESIGN.md and art direction pin the pattern:
`all-caps-body` (H1 and H2 are uppercase Rokkitt; eyebrows are uppercase labels), `kicker-above-heading` and
`hero-eyebrow-chip` (the Eyebrow component on every heading group), `oversized-h1` (display size on the home hero and
gallery title). `repeating-stripes-gradient` stays as an advisory: it is the placeholder block's hatch. Two inline
waivers in `src/styles/global.css` cover the size-adjusted local fallback faces named in the art direction.

## Note on Impeccable in a proxied environment

`npx impeccable install` downloads its skill bundle with its own TLS stack and fails behind a
TLS-intercepting proxy. The bundle can be fetched with curl from
`https://impeccable.style/api/download/bundle/universal` and unzipped by hand; `npx impeccable
detect <path>` runs offline on local files.
