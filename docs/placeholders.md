# Placeholders and outstanding inputs

Running log of everything on the site that is not yet real, and every fact that is not yet
confirmed. Nothing in this file may be "fixed" by inventing content. Three kinds of entry:

- **A–C. Assets** that are missing or not good enough for production.
- **D. Facts** that stay out of the copy until Sam confirms them in writing.
- **E. Configuration** values that are placeholders in `src/config/site.ts`.
- **F. Page-level placeholders** rendered as visible blocks on staging (filled in during Stage 3).

Last updated: Stage 0/1, 2026-09-07.

## A. Photography: full-resolution originals are needed from Sam for every image

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

- **Vector logo** (AI, EPS or SVG). Only a 414 px raster exists, and the Facebook square crop cuts
  the MASONRY line off the bottom. Ask Sam whether the designer's source file exists; if not the
  badge needs redrawing as vector before launch.
- **Simplified small mark** for the favicon, footer and social avatar. The full badge will not read
  at 32 px.
- **One-colour version** for single-colour uses.
- **Interim treatment on staging:** the raster badge at 56 px in the header beside the business
  name set in the display face. Visibly interim; replaced when the vector arrives.

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
| Staging URL | set in Stage 2 | Vercel |

## F. Page-level placeholders

Filled in during Stage 3. Every visible placeholder block on staging gets a row here.

| Page | Slot | What is needed | Why |
| --- | --- | --- | --- |
| (Stage 3) | | | |
