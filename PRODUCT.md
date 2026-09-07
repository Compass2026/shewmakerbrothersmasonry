# Product

<!-- impeccable:product-schema 1 -->

Product record for the Shewmaker Brothers Masonry website. Sourced from `docs/brand-board.md`
and `docs/keyword-map.md` (Compass Marketing Advisors, September 2026, both DRAFT / Hold
status) and from the build brief. Facts the source documents mark as unverified are recorded
here as undecided and must not appear on the site until Sam confirms them. Anything inferred
rather than sourced is labelled *(inferred)*.

## Platform

web

## Stack

Astro with TypeScript, Tailwind for utilities, Astro's built-in image optimisation for the
project photography, static output deployed to Vercel (staging first). Fonts are self-hosted
from Fontsource packages. Playwright is used for screenshots and QA. This is the first Astro
build for Compass Marketing and becomes the reference the Compass Astro starter is extracted
from, so components are built as reusable, configurable starter material: nothing that should
be configuration (business name, phone, towns, counties, CTA text, domain) is hard-coded;
`src/config/site.ts` is the single source of truth.

## Users

- **Lakefront homeowner (primary).** Often a second-home owner, affluent, frequently out of
  town, deciding on the strength of photographs and a phone call. Wants a shoreline, patio or
  fireplace that looks like part of the property, built once and correctly. Convinced by
  finished work at other lake houses and evidence the crew is local and does its own work.
- **Year-round lake resident.** Needs a repair done right and on schedule: chimney, wall,
  seawall. Convinced by responsiveness, a plain explanation of the problem, no upsell.
- **Builder / general contractor.** Wants a mason who shows up, self-performs and does not
  hold up the schedule; values stone, concrete and excavation on one contract.
- **Commercial owner or HOA.** Needs scale and permitting competence; convinced by project
  scale evidence and Ameren permitting familiarity.

Many users will arrive on a phone, from a Google Business Profile or a Facebook link, and
their job is to decide whether to call. *(inferred from the audience table and the
service-area context.)*

## Product Purpose

The first website for Shewmaker Brothers Masonry, a family masonry business at the Lake of
the Ozarks with no existing site, no Google Business Profile and no review corpus. The site
exists to turn a searcher or a Facebook visitor into an estimate call to Sam at 573-569-3690,
to give the forthcoming Google Business Profile a matching web presence, and to rank for the
uncontested "masonry contractor Lake of the Ozarks" term set and the shoreline terms.

The project gallery is the single most important page: the brand is visible craft and the
audience buys on appearance. Success is measured in estimate calls and contracts won, plus
Map Pack top 3 and organic top 5 per city on the eight money keywords once confirmed.
Shoreline pages are judged on contracts, not on statewide search volume, which understates
lakefront demand.

## Positioning

Third-generation stonemasons at the Lake of the Ozarks who build the shoreline, the fireplace
and the ground it all sits on, with their own crews, start to finish.

What a neighbouring business cannot truthfully copy:

- They self-perform masonry, stone, concrete flatwork and excavation. Most masonry outfits
  sub out concrete and dirt work; most shoreline outfits do not lay stone.
- Their shoreline work is mortared stone seawalls on a poured concrete footing, a different
  product from the rip rap that dominates the local shoreline market. Rip rap protects a
  shoreline; a stone seawall protects it and looks like it belongs to the house. That argument
  appears on the shoreline pages, the Lake Ozark and Horseshoe Bend city pages and in at least
  one blog post. The argument is about fit, not quality: **never disparage rip rap.**
- Family owned, third generation, based at the lake. Mike and Sam Shewmaker run the work and
  work it themselves.

## Operating Context

- Service-area business based in Gravois Mills, Missouri. **No public street address, ever.**
  NAP standard is name, city/state and 573-569-3690, identical across the site footer, schema,
  Google Business Profile and Facebook.
- Service area: Osage Beach, Lake Ozark, Camdenton and Sunrise Beach (Tier 1, full city
  pages); Horseshoe Bend, Gravois Mills, Laurie, Eldon and Versailles (Tier 2, lighter pages);
  Hurricane Deck (unincorporated, folded into the Sunrise Beach and service-area pages).
  Counties: Camden, Miller, Morgan.
- Shoreline work at the Lake of the Ozarks requires Ameren Missouri lakefront permits. No
  competitor explains that process well; it is the local content hook on every Tier 1 city page.
- Lake Ozark and Horseshoe Bend are the competitive heartland (rip rap and dock contractors are
  based there) and the densest high-value lakefront property. Horseshoe Bend sits inside Lake
  Ozark, so its page supports the Lake Ozark page rather than competing with it.
- Seasonality: chimney repair intent spikes October to January.
- Name conflict: a separate business, "Shewmaker Masonry – Damon Shewmaker" in Gravois Mills,
  holds a Google Business Profile in the same market. It is a different company. The full
  name "Shewmaker Brothers Masonry" is always used, in part to separate the two.
- Existing presence: facebook.com/shewmakerbrothersmasonry only. Facebook captions and project
  photos are the voice and evidence reference.
- Customer mix: residential and commercial; direct-to-homeowner and builder/GC work.

## Capabilities and Constraints

**Services (19 canonical, six segments; one page, one primary keyword and one GBP entry each):**

- Shoreline & lakefront: stone seawall construction (`/seawall-construction`), seawall repair
  and rebuild (`/seawall-repair`), lakefront retaining walls (`/lakefront-retaining-walls`),
  lakefront stone stairs and pathways (`/lakefront-stairs`).
- Outdoor living: outdoor fireplaces (`/outdoor-fireplaces`), pizza ovens (`/pizza-ovens`),
  outdoor kitchens and built-in grills (`/outdoor-kitchens`), stone patios and walkways
  (`/patios`; fire pits and walkways fold in as sections).
- Masonry & stonework: natural stone veneer (`/stone-veneer`), brick masonry
  (`/brick-masonry`), block and structural masonry (`/block-masonry`), retaining walls
  (`/retaining-walls`), masonry repair and tuckpointing (`/masonry-repair`).
- Fireplaces & chimneys: chimney repair and rebuilding (`/chimney-repair`; rebuild folds in),
  new chimney construction (`/chimney-construction`), indoor fireplaces (`/indoor-fireplaces`).
- Concrete & site work: concrete flatwork (`/concrete`), excavation and site prep
  (`/excavation`). Both self-performed; a genuine service line, not an afterthought.
- Commercial: commercial masonry (`/commercial-masonry`).

**Sitemap:** 34 pages. Home; 19 service pages; 4 Tier 1 and 5 Tier 2 city pages; service
area; project gallery; about; contact; blog hub. No standalone fire-pit page (product
shoppers, not builders). Near-me terms are won through the Google Business Profile, not
assigned to pages.

**Copy rules (build failures if violated):**

- Never state years in business.
- Never claim licensed, bonded, insured or warrantied.
- Never quote or imply pricing: no ranges, no "starting at", no "affordable".
- Never invent a project, customer, testimonial, location, subdivision, cove or development.
- Never claim awards, certifications or association memberships.
- Never use a stock or AI-generated image.
- "Shewmaker Brothers Masonry" in full, always. Never "Shewmaker Masonry".
- No street address anywhere.
- 573-569-3690 is the only phone number published. Mike's number is not published.
- Standing CTA: "Call Sam at 573-569-3690" or "Get an estimate". Never "Get a free quote today!"
- No faith language in copy; the John 3:16 element stays on the logo.
- Do not fabricate the family history. "Third generation" is confirmed; the details are not.

**Terminology.** Use: stone seawall, mortared stone, footing; rip rap (only when comparing);
flagstone, natural stone, cultured stone; tuckpointing, repointing; Lake of the Ozarks, the
lake; crew, our crews, we build; estimate; third generation, family owned. Avoid: concrete
wall, barrier, "just rocks", "cheap rock", rock, decorative rock, "repair the mortar", LOTO,
"our team of professionals", quote, consultation, "family-owned and operated since [year]".

**Undecided product facts (do not publish until Sam confirms):** years in business and the
family history behind "third generation"; licensed / insured / bonded status and any
warranty; whether estimates are free; business hours; whether a vector logo exists; the
production domain (a placeholder constant until decided); the eight money keywords (nominated,
pending confirmation); the competitors Sam actually loses bids to.

## Brand Commitments

- **Name:** Shewmaker Brothers Masonry, in full.
- **Logo:** an illustrated full-colour badge (bearded mason with folded arms, American flag,
  stone fireplace with a mounted buck, trowel, John 3:16 forearm tattoo) with the wordmark
  SHEWMAKER BROTHERS / MASONRY in a heavy condensed slab with a letterpress finish. The site is
  built around this mark, not a modernised replacement. Only a raster copy exists (414 px,
  `public/images/brand/`); a vector source, a simplified small-size mark and a one-colour
  version are needed before launch.
- **Voice:** short, declarative, proud of the work, a little swagger. Lead with the work, not
  the company ("Forty feet of stone seawall, laid on a poured footing"). Name materials and
  methods. Problem pages lead with what happens if the problem is ignored. Confident, not
  boastful; the photographs do the boasting. Never "quality craftsmanship since…", "we strive
  to", "we pride ourselves on", "second to none", "attention to detail", "passionate about
  masonry", or anything implying a large operation. Two brothers and their crews is the point.
- **Content pillars:** shoreline and the lake; problems worth catching early; the craft;
  outdoor living at the lake; the family and the crew.
- **Visual commitments** (binding, recorded in `DESIGN.md`): the six-colour palette pulled from
  the logo; dark ground dominating above the fold; no stock or AI imagery; warm photo
  treatment; no geometric default sans.

## Evidence on Hand

- `docs/brand-board.md`: positioning, voice examples quoted from Sam's own Facebook captions,
  audience, proof points with sourcing, imagery rules, hard rules.
- `docs/keyword-map.md`: business record, Missouri state-level demand data (September 2026),
  competitive landscape, 19-service taxonomy with URLs and primary keywords, money keywords,
  city tiers, sitemap, blog topics.
- Project photography: Facebook-sourced JPEGs at 414 by 414 px in `public/images/projects/`,
  catalogued with descriptions and page fit in `public/images/projects/manifest.json`. They
  show mortared stone seawalls and lakefront retaining walls at lake houses (with water in
  frame), before-and-after states of a failed shoreline, stone stairs, a drainage swale, joint
  and cap detail, and crews at work on footings. Fit for thumbnails only; full-resolution
  originals from Sam are the critical path.
- Content performance signal: one Facebook post, "Don't Ignore Your Chimney — Small Problems
  Become Expensive Repairs", drew 26 reactions and 3 shares against a baseline of about 1.
  Homeowner-problem content converts for this audience.
- Sourced proof points: third generation and family owned (their bio); Mike and Sam run the
  work (business card, job-site posts); self-performed masonry, concrete and excavation
  (intake); stone seawalls on a footing (project photography); residential and commercial
  (intake).

**Absences that must not be fabricated:** no testimonials, no reviews, no Google Business
Profile, no named customers, no project addresses or named coves, no awards, no years figure,
no licensing or warranty facts, no crew or portrait photography of the brothers, no
full-resolution photography, and no fireplace or pizza-oven photography in the current set
(the brand board names the fireplace and pizza oven as the best single asset; it must come
from Sam).

## Product Principles

1. **The gallery is the proof.** Every page routes to real photographs of real work; where a
   photograph does not exist, a visible placeholder says so rather than a substitute.
2. **Only what is sourced.** Unverified claims become placeholders or silence, never prose.
3. **Lead with the work and the consequence.** Copy names the material, the method and, on
   problem pages, what ignoring it costs, in Sam's register.
4. **Local specificity over templated breadth.** Ameren permitting, the counties, the tiers,
   the rip rap comparison: a page that could belong to any contractor is a failure.
5. **One source of truth.** Name, phone, towns, counties and CTA live in configuration so the
   site, schema, Google Business Profile and Facebook never drift.

## Accessibility & Inclusion

Target WCAG 2.1 AA. The dark ground is the default surface, so text colours are measured
against it (see `DESIGN.md`). A large share of the primary audience is older, on a phone, and
deciding whether to call: body text no smaller than 16px, tap targets no smaller than 44px,
the phone number always a tappable `tel:` link, and `prefers-reduced-motion` honoured. No
product-specific legal accessibility requirement has been established. *(Audience-age
inference from the second-home buyer profile; not sourced.)*
