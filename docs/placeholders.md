# Placeholders and outstanding inputs

Running log of everything on the site that is not yet real, and every fact that is not yet
confirmed. Nothing in this file may be "fixed" by inventing content. Three kinds of entry:

- **A–C. Assets** that are missing or not good enough for production.
- **D. Facts** that stay out of the copy until Sam confirms them in writing.
- **E. Configuration** values that are placeholders in `src/config/site.ts`.
- **F. Page-level placeholders** rendered as visible blocks on staging (filled in during Stage 3).

Last updated: Stage 2/3, 2026-09-07.

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
| Staging URL | https://shewmakerbrothersmasonry.vercel.app (Vercel project `shewmakerbrothersmasonry`, team compassmarketin, production branch `main`, every page `noindex`) | Production domain decision |

## F. Page-level placeholders

Generated by `node qa/placeholders.mjs` from the built site on 2026-09-08: 52 visible placeholder blocks across 34 pages. Every one is a real block on staging with a dashed brick border; none may be "fixed" by inventing content.

| Page | Slot | What is needed | Why |
| --- | --- | --- | --- |
| `/` | band-background | Band background: full-resolution original of lakefront-retaining-wall-detail-01.jpg; the interim frame is shown softened and darkened. | No suitable original in the interim set |
| `/` | hero-background | Hero background: full-resolution original of stone-seawall-lakefront-02.jpg (2400 px or wider); the interim 414 px frame is shown darkened and softened. | No suitable original in the interim set |
| `/about/` | band-background | Band background: full-resolution original of stone-seawall-lakefront-01.jpg; the interim frame is shown softened and darkened. | No suitable original in the interim set |
| `/about/` | crew-more | More crew-at-work frames, faces visible where the crew is happy with it. | No portrait or additional crew photography exists |
| `/about/` | hero-background | Hero: Mike and Sam with the crew on a job site, faces visible, uncropped original at 2400 px. | No suitable original in the interim set |
| `/about/` | portrait | Mike and Sam, faces, on a job site. Portrait at 1200 px. | No portrait or additional crew photography exists |
| `/about/` | story | The family story in Sam’s words: who started the trade, when, how Mike and Sam came into it, and the crews. Nothing is published until he tells it. | No suitable original in the interim set |
| `/block-masonry/` | hero-background | Hero: Block or structural masonry, in progress or finished, uncropped original. | No suitable original in the interim set |
| `/block-masonry/` | inline | Inline photo, 3:2 at 1600 px: Block or structural masonry, in progress or finished, uncropped original. | No original wide enough for the slot |
| `/blog/` | blog-posts | The first five posts are planned below and not written. None is published until it is real. | No posts written yet |
| `/blog/` | hero-background | Blog hero: a close-up of stone and joint work, uncropped original at 2400 px. | No suitable original in the interim set |
| `/brick-masonry/` | hero-background | Hero: A brick project exterior, uncropped original, plus what the arched doorway project was. | No suitable original in the interim set |
| `/brick-masonry/` | inline | Inline photo, 3:2 at 1600 px: A brick project exterior, uncropped original, plus what the arched doorway project was. | No original wide enough for the slot |
| `/chimney-construction/` | hero-background | Hero: A new chimney exterior, uncropped original at 2400 px. | No suitable original in the interim set |
| `/chimney-construction/` | inline | Inline photo, 3:2 at 1600 px: A new chimney exterior, uncropped original at 2400 px. | No original wide enough for the slot |
| `/chimney-repair/` | hero-background | Hero: Chimney repair, before and after, uncropped originals. | No suitable original in the interim set |
| `/chimney-repair/` | inline | Inline photo, 3:2 at 1600 px: Chimney repair, before and after, uncropped originals. | No original wide enough for the slot |
| `/commercial-masonry/` | hero-background | Hero: A commercial project exterior, uncropped original at 2400 px. | No suitable original in the interim set |
| `/commercial-masonry/` | inline | Inline photo, 3:2 at 1600 px: A commercial project exterior, uncropped original at 2400 px. | No original wide enough for the slot |
| `/concrete/` | hero-background | Hero: Concrete flatwork: a slab, driveway or patio pour, uncropped original at 2400 px. | No suitable original in the interim set |
| `/contact/` | form-endpoint | No email address or form endpoint has been supplied, so this form does not send. Until it does, call Sam at 573-569-3690. | No email address or form endpoint supplied |
| `/contact/` | hero-background | Contact hero: Sam on a job site, or the crew at work, uncropped original at 2400 px. | No suitable original in the interim set |
| `/excavation/` | hero-background | Hero: Excavation or site prep with equipment on site, uncropped original at 2400 px. | No suitable original in the interim set |
| `/indoor-fireplaces/` | hero-background | Hero: The indoor stacked-stone fireplace, uncropped original at 2400 px. | No suitable original in the interim set |
| `/indoor-fireplaces/` | inline | Inline photo, 3:2 at 1600 px: The indoor stacked-stone fireplace, uncropped original at 2400 px. | No original wide enough for the slot |
| `/lakefront-retaining-walls/` | hero-background | Hero: Finished lakefront retaining wall seen from the water, uncropped original at 2400 px. | No suitable original in the interim set |
| `/lakefront-stairs/` | hero-background | Hero: Stone stairs running down to a dock with the water in frame, uncropped original at 2400 px. | No suitable original in the interim set |
| `/masonry-repair/` | hero-background | Hero: Tuckpointing or repointing, before and after, uncropped originals. | No suitable original in the interim set |
| `/outdoor-fireplaces/` | hero-background | Hero: The outdoor fireplace, uncropped original at 2400 px; an evening or in-use shot if there is one. | No suitable original in the interim set |
| `/outdoor-fireplaces/` | inline | Inline photo, 3:2 at 1600 px: The outdoor fireplace, uncropped original at 2400 px; an evening or in-use shot if there is one. | No original wide enough for the slot |
| `/outdoor-kitchens/` | hero-background | Hero: A finished outdoor kitchen with counters and a built-in grill, uncropped original at 2400 px. | No suitable original in the interim set |
| `/outdoor-kitchens/` | inline | Inline photo, 3:2 at 1600 px: A finished outdoor kitchen with counters and a built-in grill, uncropped original at 2400 px. | No original wide enough for the slot |
| `/patios/` | hero-background | Hero: The finished flagstone patio (the one photographed in progress), uncropped original at 2400 px. | No suitable original in the interim set |
| `/pizza-ovens/` | hero-background | Hero: The pizza oven, uncropped original, close enough to read the oven mouth and the stone. | No suitable original in the interim set |
| `/pizza-ovens/` | inline | Inline photo, 3:2 at 1600 px: The pizza oven, uncropped original, close enough to read the oven mouth and the stone. | No original wide enough for the slot |
| `/projects/` | gallery-missing | Chimney repair before and after; a new chimney; tuckpointing before and after; block masonry; concrete flatwork; excavation with equipment on site; exterior stone veneer; an outdoor kitchen with counters; a commercial exterior; lakefront stairs down to a dock; a finished seawall in summer; stone and joint close-ups. | No photograph of these subjects in the interim set |
| `/projects/` | hero-background | Hero background: full-resolution original of stone-seawall-lakefront-01.jpg (2400 px or wider); the interim 414 px frame is shown darkened and softened. | No suitable original in the interim set |
| `/retaining-walls/` | hero-background | Hero: A finished retaining wall, uncropped original; before and after of a failed wall if there is one. | No suitable original in the interim set |
| `/seawall-construction/` | hero-background | Hero: Finished stone seawall with the lake house above and water in frame, uncropped original at 2400 px, summer light if there is one. | No suitable original in the interim set |
| `/seawall-repair/` | hero-background | Hero: Before and after of a failed shoreline: the eroded bank, then the finished mortared stone wall, from the same spot. | No suitable original in the interim set |
| `/seawall-repair/` | inline | Inline photo, 3:2 at 1600 px: Before and after of a failed shoreline: the eroded bank, then the finished mortared stone wall, from the same spot. | No original wide enough for the slot |
| `/service-area/` | hero-background | Hero: finished seawall with water in frame in summer, uncropped original at 2400 px. | No suitable original in the interim set |
| `/service-area/camdenton/` | hero-background | Hero: finished lakefront work photographed in or near Camdenton, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/eldon/` | hero-background | Hero: finished lakefront work photographed in or near Eldon, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/gravois-mills/` | hero-background | Hero: finished lakefront work photographed in or near Gravois Mills, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/horseshoe-bend/` | hero-background | Hero: finished lakefront work photographed in or near Horseshoe Bend, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/lake-ozark/` | hero-background | Hero: finished lakefront work photographed in or near Lake Ozark, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/laurie/` | hero-background | Hero: finished lakefront work photographed in or near Laurie, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/osage-beach/` | hero-background | Hero: finished lakefront work photographed in or near Osage Beach, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/sunrise-beach/` | hero-background | Hero: finished lakefront work photographed in or near Sunrise Beach, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/service-area/versailles/` | hero-background | Hero: finished lakefront work photographed in or near Versailles, water in frame, uncropped original at 2400 px. No location is known for any current photo. | No suitable original in the interim set |
| `/stone-veneer/` | hero-background | Hero: Exterior stone veneer on a house, uncropped original at 2400 px. | No suitable original in the interim set |
