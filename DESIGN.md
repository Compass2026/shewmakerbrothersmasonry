---
name: Shewmaker Brothers Masonry
description: Third-generation stonemasons at the Lake of the Ozarks. The block world, near-black ground, one ember accent, cut-stone modules.
colors:
  coal: "#0B0907"
  soot: "#14100B"
  block: "#1C1610"
  block-2: "#251D15"
  pit: "#070503"
  ember: "#F2A81D"
  ember-deep: "#C9860C"
  ember-light: "#FFC457"
  brick: "#B5542A"
  sandstone: "#D9C6A3"
  mortar: "#EFE9DE"
  mortar-dim: "#C9C2B8"
  chalk: "#F5F3F1"
  fieldstone: "#8A7F6D"
  fieldstone-text: "#716859"
  cap: "#B9B3A8"
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

**Creative North Star: "The Block World"**

Every module on the page is a cut-stone block: a tonal step up from the ground, a thin gold
joint, a chiselled edge that catches light on one side and falls into shadow on the other, and
a faint grain. Blocks sit in courses. Grids run in bond. The page reads as a wall the crew built,
on a near-black ground with one ember accent doing every job an accent has: the word that
matters in a headline, the button, the icon, the joint between blocks, the running-bond stripe.
The display voice is Anton: tall, loud, uppercase, with the accent word set in ember and given a
soft glow. Labels are Barlow Condensed, tracked wide. Reading copy is Barlow.

**Key Characteristics:**
- Near-black warm ground (coal) with a lifted step (soot) and a block step above that; no light sections.
- One accent, ember, and one job for it: point. The accent word, the button, the icon, the joint, the stripe.
- Anton uppercase display with an ember accent word; Barlow Condensed tracked labels; Barlow body.
- Blocks with 0 radius, a 1px ember joint at 16% alpha, inset chisel highlights, 6% grain and a ghost numeral.
- Chamfered buttons: the top-left corner cut like a block face, a lighter ember strip on the leading edge.
- The crew's own photographs, full-resolution originals in responsive WebP sets (`public/images/projects/full/`,
  `node qa/make-photos.mjs`), as full-bleed graded backgrounds behind heroes and statement bands and with
  `srcset` inside blocks; the remaining 414 px Facebook frames only where no original exists yet; never stock,
  never generated.
- The running-bond course stripe (ember bricks, offset courses) where a hazard stripe would go.
- One entrance motion (fade-and-rise, staggered in the hero) and a slow ember marquee of the services.

## Colors

- **Coal** (#0B0907): the page. **Soot** (#14100B): the lifted section. **Block** (#1C1610) and
  **Block 2** (#251D15): card faces. **Pit** (#070503): footer and closing CTA.
- **Ember** (#F2A81D): the accent. Buttons, accent words, icons, joints, chips, marquee, stripe.
  **Ember light** (#FFC457) is the button hover and the leading strip; **Ember deep** (#C9860C)
  is the accent on the light tone.
- **Chalk** (#F5F3F1): headings. **Mortar** (#EFE9DE): link text in lists. **Mortar dim**
  (#C9C2B8): body copy. **Fieldstone** (#8A7F6D): muted text, pending notes.
- **Sandstone** (#D9C6A3): band sub-lines only. **Brick** (#B5542A): reserved, unused on the surface.
- The tone tokens (`--surface`, `--ink`, `--heading`, `--muted`, `--eyebrow`, `--link`, `--joint`,
  `--joint-strong`, `--card`, `--card-2`, `--field`, `--focus`, `--btn2`, `--btn2-border`) are set
  by `data-tone` on the Section wrapper; a `mortar` light tone exists in the tokens and is not used.

| Pair | Ratio | Verdict |
| --- | --- | --- |
| Chalk on coal | 18.9:1 | Headings |
| Mortar dim on coal | 12.6:1 | Body |
| Ember on coal | 9.9:1 | Accent words, labels, icons |
| Coal on ember | 9.9:1 | Button labels, marquee |
| Fieldstone on coal | 4.9:1 | Muted text |
| Mortar dim on block | 10.4:1 | Body on a block |

### Named Rules
**The One-Accent Rule.** Ember is the only saturated colour. If it is not pointing at an action,
a word that matters, or the edge of a block, it is wrong.

**The Tone Rule.** A section owns its tone through `data-tone`; components read the tone tokens
and never pick colours.

**The Dark-Everywhere Rule.** No light section. Contrast comes from the ember accent, the chalk
headings and the photographs, not from a white block.

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

Depth is material, and the stone is real and meant to be seen. Since Sam's originals arrived
(2026-09-08) the stone is the actual lake-house wall (IMG_9757): `public/images/textures/stone-cover.webp`
is the wall uncut, used with `background-size: cover` behind the closing CTA; `stone-course.webp` is a
wide strip of the same wall for the courses; `stonewall.webp` is a seamless nine-patch blend of it for
the thin block caps; `greystone.webp` is the darker face behind block faces at 10%. `node qa/make-textures.mjs`
regenerates all four from `.tmp-originals/`. Stone is an accent, never a
wash: a stone course under a poured concrete cap (`.stone-course`) runs under the marquee, above the
closing CTA and, deeper, under the footer; the statement band and the closing CTA sit on a full stone
wall (`.stone-wall`) with the copy on a dark sign block; numbered and card blocks carry a 14px stone
cap with a concrete line beneath (`.block--capped`). Never stock, never generated. The block face
steps up from the section, a 1px ember joint marks its edge, inset highlights
(top-left) and shadows (bottom-right) chisel it, a diagonal sheen sits over the stone, and a soft 40px drop at 80% black settles it on the ground. Photographs are
darkened and softened behind text (brightness 0.45 to 0.62, blur 1.5 to 3px) with a scrim from
the left and from the bottom. Hovered link-blocks lift 3px and brighten their joint.

### Named Rules
**The Joint Rule.** Blocks are separated by 1px ember joints at 16% alpha (40% when hovered or
current), never by a gap alone.

**The Chisel Rule.** Every block carries the inset highlight and shadow; nothing else on the page
has a drop shadow except the block's ground shadow.

## Shapes

Square. Radius 0 on everything, 2px on nothing that shows. Buttons are chamfered at the top-left
corner (`clip-path`), which is the one non-rectangular shape besides the badge and the marquee's
diamond separators. Icons are authored 24px line icons at 1.75 stroke in ember inside a 60px
outlined icon box.

## Components

- **Buttons:** primary ember with a 9px ember-light leading strip and the chamfer; secondary
  outlined chalk on transparent, ember on hover. 52px tall, Barlow Condensed 700 tracked.
- **Blocks:** `.block` with optional `.block__photo` (16:10) on top, `.block__body` at 28px, and a
  `.numeral` ghost number in ember at 12% bottom-right. `.block--link` for whole-block links.
- **Service block:** photo, icon box, title, one line, the service links with ember dashes, numeral.
- **Trust strip:** four icon-box items in a row.
- **Marquee:** ember strip of the nineteen services in Anton, diamond separators, 60s loop, still
  under reduced motion.
- **Photo band (parallax):** full-bleed graded photograph pinned to the viewport while the band scrolls
  over it, so the work behind the words appears to move. Built with `clip-path: inset(0)` on the section,
  which makes it the containing block for the `position: fixed` image; this works on iOS Safari, where
  `background-attachment: fixed` does not. Eyebrow, headline with one ember accent phrase, a tracked
  sub-line, optional button, and roughly a viewport of travel so the movement reads. Under
  `prefers-reduced-motion` the image reverts to absolute and the band shortens. The `wall` variant
  (stone behind the closing CTA) does not parallax.
- **Process:** numbered blocks with a large ember numeral.
- **Area blocks:** the towns as two-across link blocks with a pin icon; Tier 1 tagged "Full page".
- **Before/after:** two blocks with a coal "Before" tag and an ember "After" tag over the photo.
- **FAQ:** blocks with an ember plus that rotates open.
- **Chips:** filter buttons, ember when pressed.
- **Stone course:** a 64px course of the real stone under a 7px concrete cap (`--color-cap`, #B9B3A8); the deep
  96px version carries the footer.
- **Stone wall:** the tile at full brightness behind a section, with the content on a `.stone-wall__sign` block.
- **Capped block:** `.block--capped`, a 14px stone cap along the top edge with the concrete line under it.
- **Pending note:** a dashed block in fieldstone naming the photograph or fact still to come; every
  instance is listed in `docs/placeholders.md`.
- **Header:** fixed, blurred coal, 96px badge (72px on phones) beside the Anton wordmark at rest, shrinking
  to 48px with the bar at 72px once the page scrolls; tracked nav, phone, chamfered estimate button;
  the wordmark hides between 64rem and 80rem so the nav stays on one line; full-screen coal panel on
  mobile with Anton links and a Services disclosure. The document offset is constant, so the shrink
  never reflows the page.
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
