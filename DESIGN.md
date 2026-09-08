---
name: Shewmaker Brothers Masonry
description: Third-generation stonemasons at the Lake of the Ozarks. Sandstone and concrete surfaces, warm brown grounds, real stone standing proud as piers.
colors:
  ground: "#241E18"
  ground-2: "#30281F"
  shadow: "#191410"
  sand: "#E7DCC6"
  sand-2: "#DCCFB4"
  concrete: "#D6D2C8"
  concrete-2: "#C6C1B5"
  paper: "#F4EFE4"
  chalk: "#F6F0E4"
  mortar: "#E2D9C9"
  mortar-dim: "#C9BFAC"
  ink: "#2A231C"
  ink-soft: "#55493D"
  ink-muted: "#5E5347"
  amber: "#C98A3A"
  amber-light: "#E0A44F"
  amber-deep: "#A66C25"
  brick: "#8A4222"
  cap: "#CFC9BC"
  cap-lit: "#E4DFD4"
  cap-edge: "#A29B8E"
typography:
  display:
    fontFamily: "Anton, Anton Fallback, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 1.8rem + 6.5vw, 7.25rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Anton, Anton Fallback, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.5vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.01em"
  title:
    fontFamily: "Anton, Anton Fallback, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(2.125rem, 1.4rem + 2.8vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  subtitle:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.04em"
  lead:
    fontFamily: "Barlow, Segoe UI, Roboto, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Barlow, Segoe UI, Roboto, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  small:
    fontFamily: "Barlow, Segoe UI, Roboto, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.22em"
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
  marquee:
    fontFamily: "Anton, Anton Fallback, Impact, Arial Narrow, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  none: "0"
  sm: "0"
  md: "2px"
spacing:
  3xs: "4px"
  2xs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
  4xl: "128px"
  section: "clamp(4.5rem, 9vw, 8rem)"
  section-tight: "clamp(2.5rem, 5vw, 4rem)"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.coal}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 28px 16px 32px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ember-light}"
    textColor: "{colors.coal}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ember}"
  block:
    backgroundColor: "{colors.block}"
    textColor: "{colors.mortar-dim}"
    rounded: "{rounded.none}"
    padding: "28px"
  block-on-lifted:
    backgroundColor: "{colors.block}"
    textColor: "{colors.mortar-dim}"
    rounded: "{rounded.none}"
    padding: "28px"
  chip:
    backgroundColor: "{colors.block}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
    height: "40px"
  chip-selected:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.coal}"
  input:
    backgroundColor: "{colors.soot}"
    textColor: "{colors.chalk}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "52px"
  eyebrow:
    textColor: "{colors.ember}"
    typography: "{typography.label}"
  icon-box:
    backgroundColor: "rgba(242, 168, 29, 0.06)"
    textColor: "{colors.ember}"
    rounded: "{rounded.none}"
    height: "60px"
  pending:
    backgroundColor: "{colors.soot}"
    textColor: "{colors.fieldstone}"
    rounded: "{rounded.none}"
    padding: "24px"
  section-ground:
    backgroundColor: "{colors.coal}"
    textColor: "{colors.mortar-dim}"
    padding: "clamp(4.5rem, 9vw, 8rem) 0"
  section-lifted:
    backgroundColor: "{colors.soot}"
    textColor: "{colors.mortar-dim}"
    padding: "clamp(4.5rem, 9vw, 8rem) 0"
  section-shadow:
    backgroundColor: "{colors.pit}"
    textColor: "{colors.mortar-dim}"
    padding: "clamp(4.5rem, 9vw, 8rem) 0"
  marquee:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.coal}"
    typography: "{typography.marquee}"
    padding: "14px 0"
  header:
    backgroundColor: "rgba(11, 9, 7, 0.86)"
    textColor: "{colors.mortar-dim}"
    height: "120px"
  header-compact:
    backgroundColor: "rgba(11, 9, 7, 0.94)"
    textColor: "{colors.mortar-dim}"
    height: "72px"
  footer:
    backgroundColor: "{colors.pit}"
    textColor: "{colors.mortar-dim}"
    padding: "64px 0 28px"
---

# Design System: Shewmaker Brothers Masonry

Replaced on 2026-09-08 at Tom's direction after the Stage 4 build: the first world (a warm-brown
brochure in Rokkitt and Merriweather Sans) was rejected on sight. The references Tom pinned are
h2dirtwork.com and magnoliahomeinspection.vercel.app, and the brief was to build the site out of
the blocks those sites use, "almost like the site has the stones the guys use on the site."
Palette, voice, imagery rules and every "never" in `docs/brand-board.md` and `PRODUCT.md` still
bind; the logo badge, the phone number and the hard copy rules are untouched.

## Overview

**Creative North Star: "The Block World, Warmed"**

Sandstone and concrete carry the page the way they carry a wall: warm, quiet, matte surfaces
between the moments where a photograph or a run of stone takes over. Warm brown grounds hold the
photographs; the light surfaces hold the reading. One accent runs through both, amber on the dark
grounds and brick on the light ones, and it only ever points: an accent word, a button, an icon,
the joint between blocks.

The stone is real, cut from the crew's own walls, and it stands proud of the page rather than
sitting behind it. Piers carry a lit front face, a darker return face where the corner turns away
from the light, a poured concrete cap that overhangs both, and a shadow cast onto what is behind
them. They frame the closing call to action and run as an arcade under one cap above the footer,
so every page ends on stonework you could put your hand on.

**Key Characteristics:**
- Sandstone and concrete surfaces carry most of the page; warm brown grounds carry the photographs, the gallery and the closing call to action.
- One accent with one job, pointing: amber on the dark grounds, brick on the light surfaces, set per tone so contrast never falls below AA.
- Anton uppercase display with an ember accent word; Barlow Condensed tracked labels; Barlow body.
- Blocks with 0 radius, a 1px ember joint at 16% alpha, inset chisel highlights, 6% grain and a ghost numeral.
- Chamfered buttons: the top-left corner cut like a block face, a lighter strip on the leading edge.
- Substantial masonry throughout: a stone base under every hero, capped courses between sections,
  masonry surrounds on the key content, and a foundation under the footer.
- The crew's own photographs, full-resolution originals in responsive WebP sets (`public/images/projects/full/`,
  `node qa/make-photos.mjs`), as full-bleed graded backgrounds behind heroes and statement bands and with
  `srcset` inside blocks; the remaining 414 px Facebook frames only where no original exists yet; never stock,
  never generated.
- The running-bond course stripe (ember bricks, offset courses) where a hazard stripe would go.
- One entrance motion (fade-and-rise, staggered in the hero) and a slow ember marquee of the services.

## Colors

- **Grounds:** Ground (#241E18), Lifted (#30281F), Shadow (#191410). Warm brown, never blue-black.
  They carry the hero, the parallax bands, the gallery, the closing CTA and the footer.
- **Surfaces:** Sand (#E7DCC6) and Concrete (#D6D2C8) alternate down the page and are where the
  reading happens; Paper (#F4EFE4) is the card on them.
- **Type on dark:** Chalk (#F6F0E4) headings, Mortar (#E2D9C9) body, Mortar Dim (#C9BFAC) muted.
- **Type on light:** Ink (#2A231C) headings, Ink Soft (#55493D) body, Ink Muted (#5E5347) muted.
- **Accent:** Amber (#C98A3A) on the grounds, Brick (#8A4222) on the light surfaces, exposed to
  components as `--accent`. `--accent-solid` (amber) fills buttons and chips on both, with
  `--accent-label` (ground) as the label.
- **Poured concrete:** Cap (#CFC9BC) with Cap Lit (#E4DFD4) and Cap Edge (#A29B8E) for the top
  surface and the shadowed edge of every cap.

Every pair the site actually uses is measured by `node qa/contrast.mjs`, which fails the build
of the palette if any drops below AA (24 pairs, all passing).

### Named Rules
**The One-Accent Rule.** One accent, amber on dark and brick on light, and it only points: at an
action, a word that matters, or the edge of a block. Nothing else on the page is saturated.

**The Tone Rule.** A section owns its tone through `data-tone`; components read the tone tokens
and never pick colours.

**The Alternating Surface Rule.** Sand and concrete alternate down the page; a ground section
appears where a photograph, the gallery or the closing call to action needs to take over. Two
grounds never sit next to each other without a stone course or a band between them.

## Typography

**Display:** Anton 400, uppercase, the accent word wrapped in `.accent` (ember, 28px glow at 35%).
**Labels, nav, buttons, eyebrows, subtitles:** Barlow Condensed 600/700, uppercase, tracked 0.04 to 0.24em.
**Body:** Barlow 400/500/600, 17px, 1.65, on a 60ch measure; leads on 56ch.
All three faces are self-hosted from Fontsource with the latin woff2 preloaded and a size-adjusted
`Anton Fallback` (Impact / Arial Narrow) so the swap does not shift layout.

### Hierarchy
- **Display**: home and gallery heroes, the closing CTA.
- **Headline / H1**: every other page hero and the statement bands.
- **Title / H2**: section heads, always with an eyebrow above and usually with an ember accent word at the end.
- **Subtitle / H3**: block titles, FAQ questions, trust items.
- **Lead**, **Body**, **Small**, **Label**, **Button**, **Marquee** as in the frontmatter.

### Named Rules
**The Accent-Word Rule.** A display or title heading carries at most one ember phrase, usually
the last two or three words, ending the sentence.

**The Two-Faces Rule.** Anton for display, Barlow Condensed for everything set in uppercase
tracking, Barlow for everything else. No fourth face.

**The Tabular Numbers Rule.** The phone number uses tabular numerals.

## Layout

Copy container 74rem, wide container 88rem, gutters `clamp(1.25rem, 4vw, 2.5rem)`, section
padding `clamp(4.5rem, 9vw, 8rem)`, a tight step at `clamp(2.5rem, 5vw, 4rem)`. Breakpoints in
use: 30rem (wordmark), 40rem (two-up), 48rem (three-up), 64rem (desktop nav, four-up, 7/5 and
5/7 splits). The header is fixed at 80px with a constant document offset and a backdrop blur;
it never animates height. Heroes are full-bleed, min-height by content, text over the darkened
left side of the photograph. Sections alternate coal and soot with an optional radial warm glow
at the top or bottom edge, and every section boundary is a 1px joint.

## Elevation & Depth

Depth is material and it is photographic. Every stone surface on the site is a crop of the crew's
own walls, cut by `node qa/make-stone.mjs` from Sam's full-resolution originals; CSS supplies the
light, the thickness and the shadows. Nothing is stock and nothing is generated.

**Assets** (`public/images/stone/`, WebP, three widths where it matters):
- `wall-face` the primary coursed wall, cool grey mortar against warm tan and cream stones, lit
  from the upper left (IMG_9757).
- `wall-big` larger, more sculptural stones with deep joints, for lintels, plinths and the
  foundation (IMG_9679).
- `pier-face` a tall crop for vertical piers, so a pier never repeats a horizontal tile (IMG_9757).
- `cap-top` smooth poured concrete, the lit top face of every capstone and ledge (IMG_9759).
- `block-face` the same wall, dark and out of focus, behind cards at 10%.
- `edge-bottom.svg` / `edge-top.svg` a seamless irregular silhouette: stones of varied width step
  to varied depths with a chipped corner each, tiling every 760 px.

**The lighting rule.** Light falls from the upper left everywhere. Exposed top arrises carry a
bright line, front faces sit at full value, return faces are darkened to about half, and joints and
undersides are dark. `.stone-lit` applies the gradient that enforces it.

**The thickness rule.** Any stone element that terminates shows its thickness: a capstone has a lit
top band, a mid front face and a shadowed bottom arris, and casts a shadow on whatever it sits on.
A pier shows a lit face and a darker return, so it turns a corner.

**The projection rule.** A course never ends on a straight line. The wall is masked with the
irregular edge and the shadow is cast by a `drop-shadow` filter on the parent, so it follows the
stones' own contours and falls onto the section beyond. Stones hang past their container by the
tooth depth: 46 px on desktop, 30 px on phones.

### Shadow Vocabulary
- **Cast from stone**: `drop-shadow(0 16px 16px rgba(0,0,0,.58)) drop-shadow(0 4px 3px rgba(0,0,0,.5))`
  on the masked body, so projecting stones shadow the next section.
- **Under a cap**: `0 7px 12px -4px rgba(0,0,0,.62)` plus a 2 px dark arris.
- **Beside a pier**: `drop-shadow(14px 0 20px rgba(0,0,0,.55))` onto the panel it frames.
- **Block**: the tonal step and 1 px joint, plus the soft ground shadow in `--block-shadow`.

## Shapes

Square. Radius 0 on everything, 2px on nothing that shows. Buttons are chamfered at the top-left
corner (`clip-path`), which is the one non-rectangular shape besides the badge and the marquee's
diamond separators. Icons are authored 24px line icons at 1.75 stroke in ember inside a 60px
outlined icon box.

## Components

- **Hero:** the section is `width="full"`, so the photograph, the video and the two scrims reach both
  edges of the viewport at any width; only the text keeps the 80rem container. The shade under the type
  is a horizontal gradient on `.hero__inner::before`, feathered top and bottom with a mask, so it darkens
  the words without dulling the right half of the frame. Nothing else darkens the frame: the photograph and
  the video run ungraded apart from a touch of saturation, with only a short seat where they meet the stone
  base, so the work is visible everywhere the words are not. On phones the text spans the full width, so that
  shade turns vertical and lifts toward the buttons, letting the clip read under them. The display size is capped against viewport
  *height* as well as width (`min(1.6rem + 5.9vw, 1.25rem + 6vh)`), which keeps the lead, the stamp and
  the calls to action above the fold on a short laptop window.
- **Credential stamp:** `.stamp`, short checkable claims under the hero lead, each with a small amber
  diamond that turns on hover. Below 48rem each claim is its own chamfered chip so a wrapped row still
  looks deliberate; at 48rem and up the chips close into a single bar divided by hairlines. The panel is
  `rgba(25,20,16,.86)` so amber-light text clears AA even against the brightest frame of the video.
- **Buttons:** primary ember with a 9px ember-light leading strip and the chamfer; secondary
  outlined chalk on transparent, ember on hover. 52px tall, Barlow Condensed 700 tracked. On hover the
  primary lifts 3px onto a warm shadow while a diagonal highlight sweeps once across its face; the
  secondary fills from the left edge. Both are flattened under `prefers-reduced-motion`.
- **Blocks:** `.block` with optional `.block__photo` (16:10) on top, `.block__body` at 28px, and a
  `.numeral` ghost number in ember at 12% bottom-right. `.block--link` for whole-block links. Hovering a
  card with a photo lifts it 4-5px onto a cast shadow, brightens the joint, eases the photograph to 1.02
  and lifts the ghost numeral; where the card has an icon box, the box fills with ember.
- **Service block:** photo, icon box, title, one line, the service links with ember dashes, numeral.
- **Trust strip:** four icon-box items in a row.
- **Marquee:** ember strip of the nineteen services in Anton, diamond separators, 60s loop. It pauses
  while the pointer is over it so the strip can be read, and is still under reduced motion.
- **Photo band (parallax):** full-bleed graded photograph pinned to the viewport while the band scrolls
  over it, so the work behind the words appears to move. Built with `clip-path: inset(0)` on the section,
  which makes it the containing block for the `position: fixed` image; this works on iOS Safari, where
  `background-attachment: fixed` does not. Eyebrow, headline with one ember accent phrase, a tracked
  sub-line, optional button, and roughly a viewport of travel so the movement reads. Under
  `prefers-reduced-motion` the image reverts to absolute and the band shortens. The `wall` variant
  (stone behind the closing CTA) does not parallax.
- **Process:** numbered blocks with a large ember numeral.
- **Area blocks:** the towns as two-across link blocks with a pin icon; Tier 1 tagged "Full page".
- **Before/after:** two blocks with a dark "Before" tag and an amber "After" tag over the photo, for
  pairs shot from different positions.
- **BeforeAfterSlider:** for a pair shot from the same spot. Both frames fill the same box and the
  during layer is revealed by a `clip-path`, so the two stay pixel-aligned at every handle position.
  The control is a range input covering the frame: mouse, touch and arrow keys all work, and with no
  JavaScript it still shows half of each. Dragging anywhere in the frame moves the handle.
- **FAQ:** blocks with an ember plus that rotates open.
- **Chips:** filter buttons, ember when pressed.
- **Stone course:** a 64px course of the real stone under a 7px concrete cap (`--color-cap`, #B9B3A8); the deep
  96px version carries the footer.
- **Stone wall:** the tile at full brightness behind a section, with the content on a `.stone-wall__sign` block.
- **Capped block:** `.block--capped`, a 14px stone cap along the top edge with the concrete line under it.
- **Pending note:** a dashed block in fieldstone naming the photograph or fact still to come; every
  instance is listed in `docs/placeholders.md`.
- **Header:** fixed, blurred coal. The badge stands alone at rest at 240px tall (168px on phones) and
  compacts to 60px in an 80px bar once the page scrolls, at which point the Anton wordmark appears beside
  it; the badge already reads as the full lockup, so the set wordmark would only crowd the nav at rest.
  Tracked nav with an ember underline that grows from the left on hover and stays put on the current page,
  phone, chamfered estimate button; full-screen coal panel on mobile with Anton links and a Services
  disclosure. The document offset is constant, so the shrink never reflows the page. The bar also compacts
  while the mobile panel is open, and drops the wordmark on phones, so the whole menu fits one screen down to
  the call button. **The panel is a sibling of the header, not a child:** the header carries a `backdrop-filter`,
  which makes it a containing block for fixed descendants in WebKit, and that trapped the panel inside the
  189px bar so nothing in it could be tapped on iOS. The Services disclosure also states
  `details:not([open]) .nav-panel__sub { display: none }` explicitly, because an author `display: grid` beats
  the older WebKit user-agent rule and would leave the list permanently open.
- **Footer:** pit ground, badge lockup, services in two columns, service area, get in touch, motto
  "Built on a footing."

## Do's and Don'ts

### Do:
- **Do** open every page on a full-bleed darkened photograph of the crew's own work with an Anton headline and one ember word.
- **Do** build every module as a block: joint, chisel, grain, numeral where a sequence exists.
- **Do** keep ember for pointing: the accent word, the button, the icon, the joint, the stripe.
- **Do** run grids in bond where the content allows (the gallery, the home teaser).
- **Do** keep the crew's photographs at honest size inside blocks and only as darkened texture when larger.
- **Do** honour `prefers-reduced-motion`: no reveal, no marquee, no parallax.

### Don't:
- **Don't** use stock photography or AI-generated imagery, ever (brand board hard rule).
- **Don't** add a second saturated colour or use brick on the surface.
- **Don't** add a light section, rounded corners, pills, circular avatars or glassmorphism beyond the header blur.
- **Don't** set body copy in Anton or Barlow Condensed; tracked uppercase is for labels and buttons.
- **Don't** put more than one ember phrase in a heading, or glow anything that is not the accent word.
- **Don't** add faith language or the John 3:16 element anywhere but the logo, and don't frame the badge in white.
