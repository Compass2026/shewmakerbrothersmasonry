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
| `public/images/projects/` | Project photography with `manifest.json` (alt text, captions, service tags, before/after pairs). `full/` holds responsive WebP sets cut from Sam's originals by `node qa/make-photos.mjs` (originals live in `.tmp-originals/`, pulled from Drive with `node qa/drive-decode.mjs`); the 414 px Facebook frames remain only for subjects with no original yet. |
| `public/images/brand/` | The logo raster. Vector needed before launch. |

## Stage status

- Stage 0, source material: done.
- Stage 1, art direction: approved 2026-09-07, then superseded on 2026-09-08 by the block world (see Redesign below). `docs/art-direction.md` is kept as the record of the first direction.
- Stage 2, scaffold and globals: done 2026-09-07. Astro 7 + TypeScript + Tailwind 4, `src/config/site.ts` as the single source of truth, global and schema components, the home page, staging on Vercel.
- Stage 3, all 34 pages to 70 percent: done 2026-09-07. 19 service pages, 9 city pages, service area, gallery, about, contact, blog hub. Copy in `src/data/copy/`, one typed file per page; every unverified fact and missing photo is a visible placeholder logged in `docs/placeholders.md` (section F).
- Stage 4, verify: done 2026-09-07. Impeccable detect clean on source and on the preview at 1280 and 390 wide (four brief-pinned rules waived in `.impeccable/config.json`, see below); Playwright full-page screenshots of all 34 pages at both widths plus menu, mobile-nav and gallery-filter states; copy-rule lint and structure/schema/link check at zero; Lighthouse 96 to 100 performance, 100 accessibility, 100 best practices, CLS 0 on five page types (SEO 69 only because staging is noindex); Impeccable finish review: five material fixes applied (coursed gallery grid, mobile footer, course-line strength, display word spacing, mobile Services disclosure) and scored resolved, disposition ship; DESIGN.md and  re-documented from the built world; every page measures 390 px wide on mobile ().
- Redesign, 2026-09-08: Tom rejected the Stage 1 look on sight and pinned h2dirtwork.com and magnoliahomeinspection.vercel.app as references ("use the blocks they use, like the stones the guys use on site"). The visual layer was rebuilt as the block world (`DESIGN.md`): near-black ground, one ember accent, Anton display, Barlow Condensed labels, Barlow body, cut-stone blocks with joints, chisel edges and ghost numerals, the running-bond course stripe, a services marquee, full-bleed darkened photo heroes and bands. Copy, data, schema and the QA scripts are unchanged. Detector waivers now also cover `side-tab` (the ember leading strip on primary buttons, from the reference); two inline `layout-transition` waivers in `Header.astro` cover the badge shrink on scroll (fixed header, constant document offset, no reflow). Stone textures are cut from the crew's own photos with `node qa/make-textures.mjs` into `public/images/textures/`: `stonewall.webp` (nine cross-faded patches, warmed) is the visible accent stone in courses, walls and block caps; `greystone.webp` sits faintly behind block faces.
- Photography, 2026-09-08: twelve originals from Sam processed into responsive sets; every hero, band, service block and gallery lead now uses one. Still thumbnails: fireplaces and pizza oven, indoor fireplace, brick arch, the before frames, the crews.
- Before/after slider, 2026-09-08: 30 further originals came in from Drive. The best matched pair is one fireplace shot from the same spot mid-build and finished (`qa/make-beforeafter.mjs` cuts the aligned crops). It drives `BeforeAfterSlider` on the home page and the gallery. The rip rap argument on the home page now carries a full-resolution finished seawall instead of two thumbnails.
- Masonry treatment, 2026-09-08: the thin stone strip became a built material system. `node qa/make-stone.mjs` cuts wall, pier, big-stone and poured-concrete assets from Sam's originals plus a seamless irregular edge mask; `StoneEdge`, `StoneFrame` and `StoneFoundation` assemble them into capped section transitions, masonry surrounds and the footer foundation, with one lighting direction and shadows cast by the stones' own contours. Assets live in `public/images/stone/` (1.1 MB total, three widths).
- New badge, 2026-09-08: Sam's complete badge (wordmark and MASONRY line intact) replaces the cropped Facebook raster, generated by `node qa/make-logo.mjs` into `public/images/brand/`. It stands 120 px tall in the header (84 px on phones), shrinking to 58 px on scroll, and 104 px in the footer lockup.
- Hero video, 2026-09-08: `src/config/site.ts` carries `heroVideo`, off by default. When set, the clip loads on any screen with motion allowed and a connection that is not metered or 2G, playing over the hero photograph, which stays the poster. Phones get `heroVideoSmall` (`hero-lake-sm.mp4`, 576x324, 1.05 MB) instead of the 5.7 MB desktop file, so the clip plays there without the download. The desktop file is the clip exactly as it came out of Gemini, 1280x720 and 8.4 MB, shipped byte for byte rather than re-encoded because its `moov` atom already sits ahead of `mdat` so it streams as is. 720p is the source ceiling; anything smaller is the graininess Tom flagged. To replace it with sharper footage, `docs/hero-video-brief.md` carries the generation prompt, the settings that actually control resolution, and the note that the visible watermark is a tier setting rather than something a prompt can remove. It is currently set to `hero-lake.mp4`, which Tom approved on 2026-09-08 knowing it is AI-generated footage carrying a visible generated-content watermark; that decision is recorded in `docs/placeholders.md` section G, because the brand board otherwise forbids AI-generated imagery.
- Warm palette and piers, 2026-09-08: the near-black ground gave way to sandstone and concrete surfaces over warm brown grounds, with the accent softened to amber on dark and brick on light. Stone piers with poured caps frame the closing call to action and run as an arcade above the footer. `node qa/contrast.mjs` measures the 24 palette pairs the site uses and fails if any drops below AA.
- Parallax bands, 2026-09-08: the statement band on the home page, About and every service page pins its photograph to the viewport while the section scrolls over it (clip-path containing block, works on iOS; disabled under reduced motion). Reference: thebrothersmasonry.com.
- Next: the remaining photography (docs/placeholders.md A and B), the vector logo (C), Sam's answers on the unverified facts (D), the production domain and a form endpoint (E), the Google Business Profile, then blog posts.

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
node qa/overflow.mjs            # horizontal-overflow check on every sitemap page (VP=1440 for desktop): exit 2 on overflow
node qa/contrast.mjs            # WCAG contrast for every palette pair the site uses: exit 2 on a failure
node qa/make-stone.mjs          # re-cut every stone asset and the edge masks from .tmp-originals/
node qa/make-logo.mjs           # re-cut the badge renditions
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
AI-generated image, unless the client records an explicit decision (see `docs/placeholders.md` section G). "Shewmaker Brothers Masonry" in full, always. No street address anywhere.
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
