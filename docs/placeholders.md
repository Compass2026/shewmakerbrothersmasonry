# Placeholders and outstanding inputs

Running log of everything on the site that is not yet real, and every fact that is not yet
confirmed. Nothing in this file may be "fixed" by inventing content. Three kinds of entry:

- **A–C. Assets** that are missing or not good enough for production.
- **D. Facts** that stay out of the copy until Sam confirms them in writing.
- **E. Configuration** values that are placeholders in `src/config/site.ts`.
- **F. Page-level placeholders** rendered as visible blocks on staging (filled in during Stage 3).

Last updated: Stage 2/3, 2026-09-07.

## A. Photography: full-resolution originals are needed from Sam for every image

**Update 2026-09-08, second batch.** A further 30 originals arrived in Drive (IMG_5062 to IMG_6729 plus one UUID-named file), covering block seawalls under construction, finished stone seawalls at two properties, stone piers at the waterline, a stone-lined drainage swale, interior fireplaces at several stages, a pole barn with stone wainscot, flagstone walks and stone stairs. Three are in use so far: the fireplace before/after pair and a finished seawall. The rest are cut and ready in `.tmp-originals/` and should be worked into the gallery and the service pages.

**Worth Sam confirming:** the finished-fireplace photograph (`D0DD3C95…`) shows two men standing in front of the fireplace. If that is Mike and Sam, it may close the "Mike and Sam, faces, on a job" gap in section B. The site does not name them until Sam confirms.

**Update 2026-09-08.** Sam supplied twelve originals (Drive › Media): two DJI aerials of a seawall with stairs and patio, a stone wall above rip rap, a tall lake-house wall, a curved wall, stairs with poured treads, walls with a poured ramp, a concrete pad at the water, a flagstone walkway, and three frames of exterior stone veneer on a new build. They are processed into responsive WebP sets under `public/images/projects/full/` (`node qa/make-photos.mjs`) and carry `variants` in the manifest. Every hero, band, service block and gallery lead now uses an original. The table below is what is still only a 414 px thumbnail.

Every photo currently in `public/images/projects/` (17 files) and the logo in
`public/images/brand/` came from the Facebook page by way of the Drive Media folder. All of them
are 414 × 414 px Facebook thumbnails, square-cropped by Facebook, and progressive JPEGs at
roughly 30–55 KB. They are fit for gallery thumbnails and small cards at 1× only.

Why originals are needed:

| Slot | Needs (source width) | 414 px thumbnail |
| --- | --- | --- |
| Page hero, full bleed | 2400 px, uncropped | Unusable |
| Inline service photo, 3:2 | 1600 px | Unusable |
| Gallery card, 4:3 or 1:1 | 1200 px | Soft at 1×, unusable at 2× |
| Before / after pair | 1200 px | Soft |
| Thumbnail up to ~200 CSS px | 400 px | Fine |

Ask Sam for the original files off the phone and the drone, not re-downloads from Facebook.
Two originals are already identifiable from EXIF: `DJI_0325.JPG` (retaining wall with stairs)
and `DJI_0328.JPG` (retaining wall with drainage swale). The Facebook square crop also cuts the
ends off the long seawall runs; the originals will show the full wall.

| File | Ask Sam for |
| --- | --- |
| seawall-before-eroded-bank-01.jpg | Original, plus any other "before" frames of this shoreline |
| seawall-before-eroded-bank-02.jpg | Original |
| seawall-before-shoreline-from-water-01.jpg | Original; ideally a matching "after" from the same spot on the water |
| lakefront-retaining-wall-crew-01.jpg | Original; a finished "after" once the site was cleaned up |
| lakefront-retaining-wall-detail-01.jpg | Original, plus more joint and footing close-ups |
| stone-seawall-lakefront-01.jpg | Original, uncropped (hero candidate) |
| stone-seawall-lakefront-02.jpg | Original, uncropped (hero candidate) |
| stone-seawall-cap-crew-01.jpg | Original |
| seawall-footing-trench-crew-01.jpg | Original |
| retaining-wall-stairs-01.jpg | DJI_0325.JPG |
| retaining-wall-drainage-swale-01.jpg | DJI_0328.JPG |
| stone-wall-dark-mortar-cap-01.jpg | Original, plus a finished shot of this wall |
| flagstone-patio-in-progress-01.jpg | Original, plus the finished patio |
| stone-stairs-concrete-treads-01.jpg | Original |
| fireplace-pizza-oven-grill-01.jpg | Original, uncropped (homepage hero candidate); any evening or in-use shots |
| indoor-fireplace-stacked-stone-01.jpg | Original |
| brick-arch-doorway-01.jpg | Original, and what the project was (residential or commercial) |
| ../brand/logo-badge-414.jpg | See section C |

## B. Photography: subjects with no photo at all

Service pages that have no matching photo will carry a visible placeholder block until one
exists. From the brand board's wish list and the 19-page service taxonomy:

| Subject | Needed for | Why |
| --- | --- | --- |
| Mike and Sam, faces, on a job | About, homepage "two brothers" section | "Third generation" is a people claim; no portrait exists. Crew shots show backs and hoods. |
| Crews working (more) | About, service pages | Only three crew-at-work frames exist |
| Chimney repair before / after | /chimney-repair, blog | Their best-performing content topic has no photo |
| New chimney exterior | /chimney-construction | None |
| Tuckpointing / repointing before / after | /masonry-repair | None |
| Block or structural masonry | /block-masonry | None |
| Concrete flatwork: slab, driveway, patio pour | /concrete | Only caps and treads exist |
| Excavation and site prep, equipment | /excavation | Only the hand-dug trench exists |
| Exterior stone veneer on a house | /stone-veneer | Only an interior fireplace exists |
| Outdoor kitchen with counters and appliances | /outdoor-kitchens | Only the grill beside the fireplace exists |
| Commercial project exterior | /commercial-masonry | Only the brick doorway interior exists |
| Lakefront stairs down to a dock, water in frame | /lakefront-stairs | Stairs exist but not at the water |
| Finished seawall with water in frame in summer | City pages, homepage | All shoreline shots are winter |
| Before / after: failed retaining wall | /retaining-walls, blog | Only the shoreline pair exists |
| Stone texture and joint close-ups | Gallery, "the craft" pillar | Two detail frames exist; the brand board asks for these specifically |

## C. Logo and brand assets

- **Vector logo** (AI, EPS or SVG). Sam supplied a complete badge on 2026-09-08 (1179 x 1769 after
  trimming, wordmark and MASONRY line intact), now the site logo at `public/images/brand/`. It is
  still a raster from a phone screenshot, so a vector source is wanted before launch. Ask Sam
  whether the designer's file exists; if not the badge needs redrawing as vector.
- **Simplified small mark** for the favicon, footer and social avatar. The full badge will not read
  at 32 px.
- **One-colour version** for single-colour uses.
- **Header treatment:** the full badge at 120 px tall (84 px on phones) beside the name set in the
  display face, shrinking to 58 px as the page scrolls.

## D. Facts that stay out of the site until Sam confirms them

| Fact | Status | Where it would appear |
| --- | --- | --- |
| Years in business / when the family started | Unverified. No number anywhere. | About, homepage |
| Licensed, insured, bonded | Unverified. No claim anywhere. | Any trust strip |
| Workmanship warranty | Unverified. No claim anywhere. | Service pages |
| Free estimates | Unverified. The keyword map's sitemap row for the contact page says "free estimates"; the brand board marks it UNVERIFIED. The brand board wins: "Get an estimate" only, no "free". | Contact, CTA blocks |
| Business hours | Unknown. LocalBusiness schema omits `openingHours`. | Contact, footer, schema |
| The family history behind "third generation" | Unverified beyond the bio line | About |
| A signature local project people would recognise | Unknown | About, gallery |
| Crew size and tenure | Unknown | About |
| Which competitors Sam actually loses bids to | Unknown | Positioning review |
| The eight money keywords | Nominated, pending Sam's confirmation | Keyword tracking |

## E. Configuration placeholders (`src/config/site.ts`, set up in Stage 2)

| Key | Value on staging | Needs |
| --- | --- | --- |
| `domain` | placeholder constant | Production domain decision |
| `email` / contact form endpoint | none supplied | An address or form destination for estimate requests; Tom to decide (phone-first until then) |
| `googleBusinessProfileUrl` | empty | GBP does not exist yet; create it (keyword map: highest-leverage task) |
| `facebookUrl` | facebook.com/shewmakerbrothersmasonry | Confirmed |
| `hours` | omitted | Sam |
| Staging URL | https://shewmakerbrothersmasonry.vercel.app (Vercel project `shewmakerbrothersmasonry`, team compassmarketin, production branch `main`, every page `noindex`) | Production domain decision |

## F. Page-level placeholders

Generated by `node qa/placeholders.mjs` from the built site on 2026-09-08: 7 visible placeholder blocks across 5 pages. Every one is a real block on staging with a dashed brick border; none may be "fixed" by inventing content.

| Page | Slot | What is needed | Why |
| --- | --- | --- | --- |
| `/about/` | crew-more | More crew-at-work frames, faces visible where the crew is happy with it. | No portrait or additional crew photography exists |
| `/about/` | portrait | Mike and Sam, faces, on a job site. Portrait at 1200 px. | No portrait or additional crew photography exists |
| `/about/` | story | The family story in Sam’s words: who started the trade, when, how Mike and Sam came into it, and the crews. Nothing is published until he tells it. | No suitable original in the interim set |
| `/blog/` | blog-posts | The first five posts are planned below and not written. None is published until it is real. | No posts written yet |
| `/chimney-repair/` | inline | Inline photo, 3:2 at 1600 px: Chimney repair, before and after, uncropped originals. | No original wide enough for the slot |
| `/contact/` | form-endpoint | No email address or form endpoint has been supplied, so this form does not send. Until it does, call Sam at 573-569-3690. | No email address or form endpoint supplied |
| `/projects/` | gallery-missing | Chimney repair before and after; a new chimney; tuckpointing before and after; block masonry; concrete flatwork; excavation with equipment on site; exterior stone veneer; an outdoor kitchen with counters; a commercial exterior; lakefront stairs down to a dock; a finished seawall in summer; stone and joint close-ups. | No photograph of these subjects in the interim set |

## G. Client decisions that override a standing brand rule

Each row is a rule from `docs/brand-board.md` or `PRODUCT.md` that Tom has knowingly set aside, or a request that was answered with the nearest compliant alternative. Nothing here is a default; every entry needs Tom's word before it changes.

| Date | Rule | Decision | What shipped |
| --- | --- | --- | --- |
| 2026-09-08 | "Never use a stock or AI-generated image." | **Overridden by Tom.** He was shown the evidence that `hero-lake.mp4` is AI-generated footage: a four-pointed generated-content sparkle burned into the corner, and a source filename that is a truncated text prompt. He answered "Go ahead and publish it." | The clip plays behind the home hero on wide screens with motion allowed. The watermark was left intact rather than cropped or painted out. `src/config/site.ts` → `heroVideo`. Remove by setting `heroVideo: null`. |
| 2026-09-08 | "Never claim awards, certifications or association memberships"; the brand board's avoid list bars "second to none", and the copy linter blocks that phrase. | **Overridden by Tom.** He asked for "something like best or Number 1" in the H1. The conflict was put to him: the business has no reviews, no Google Business Profile (section E) and no awards (section D), so "best" is a bare assertion on a site whose whole register is otherwise checkable fact, and the nearest compliant alternative was shipped first for him to see. He answered "Yes add best in wording," so the literal claim now stands. | The home H1 reads **"The Best Masonry Contractor at the Lake of the Ozarks"** (`src/pages/index.astro`, `h1`). The money keyword is intact inside it and the meta title is left without the claim. The credential stamp under the lead still carries the three evidenced claims: Third generation · Our own crews · Footing to cap. To pull the claim back out, drop the word from `h1`; nothing else depends on it. Note for later: if the site ever collects reviews, this is the line to replace with a rating, which is both stronger and defensible. |
