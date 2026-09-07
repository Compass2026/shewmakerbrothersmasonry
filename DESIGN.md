---
name: Shewmaker Brothers Masonry
description: Third-generation stonemasons at the Lake of the Ozarks. Dark ground, warm stone, photography-led.
colors:
  ground: "#221E1A"
  ground-2: "#2C2622"
  shadow: "#100E0C"
  sandstone: "#D9C6A3"
  sandstone-dim: "#B9A98A"
  mortar: "#EFE9DE"
  mortar-2: "#E4DCCC"
  chalk: "#FBF8F1"
  brick: "#B5542A"
  brick-hover: "#9E4722"
  brick-text: "#A04A24"
  fieldstone: "#8A7F6D"
  fieldstone-text: "#716859"
typography:
  display:
    fontFamily: "Rokkitt Variable, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Rokkitt Variable, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Rokkitt Variable, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.02em"
  subtitle:
    fontFamily: "Rokkitt Variable, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "normal"
  lead:
    fontFamily: "Merriweather Sans Variable, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Merriweather Sans Variable, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  small:
    fontFamily: "Merriweather Sans Variable, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Merriweather Sans Variable, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
  button:
    fontFamily: "Merriweather Sans Variable, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0"
  sm: "2px"
  md: "4px"
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
  section: "clamp(4rem, 8vw, 7.5rem)"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.brick}"
    textColor: "{colors.chalk}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brick-hover}"
    textColor: "{colors.chalk}"
  button-secondary-dark:
    backgroundColor: "transparent"
    textColor: "{colors.sandstone}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "13px 23px"
  button-secondary-dark-hover:
    backgroundColor: "{colors.sandstone}"
    textColor: "{colors.ground}"
  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.ground}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "13px 23px"
  button-secondary-light-hover:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.mortar}"
  card-dark:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.mortar}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-light:
    backgroundColor: "{colors.mortar}"
    textColor: "{colors.ground}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  input-light:
    backgroundColor: "{colors.mortar-2}"
    textColor: "{colors.ground}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "48px"
  input-dark:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.mortar}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "48px"
  eyebrow-dark:
    textColor: "{colors.sandstone-dim}"
    typography: "{typography.label}"
  eyebrow-light:
    textColor: "{colors.brick-text}"
    typography: "{typography.label}"
  placeholder-dark:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.sandstone}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  placeholder-light:
    backgroundColor: "{colors.mortar-2}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  section-dark:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.mortar}"
    padding: "clamp(4rem, 8vw, 7.5rem) 0"
  section-dark-lifted:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.mortar}"
    padding: "clamp(4rem, 8vw, 7.5rem) 0"
  section-light:
    backgroundColor: "{colors.mortar}"
    textColor: "{colors.ground}"
    padding: "clamp(4rem, 8vw, 7.5rem) 0"
  header:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.sandstone}"
    height: "72px"
  footer:
    backgroundColor: "{colors.shadow}"
    textColor: "{colors.sandstone-dim}"
    padding: "{spacing.2xl} 0 {spacing.lg}"
---

# Design System: Shewmaker Brothers Masonry

Derived from `docs/brand-board.md` (Compass Marketing Advisors, Brand Board v1.0, September 2026).
The six palette colours, the typographic direction, the imagery rules and every "never" are
sourced from that document. Everything else here (derived tints, the type scale, spacing, the
named typefaces) was proposed in Stage 1 and approved by Tom on 2026-09-07. Product truth (audience,
positioning, copy rules) lives in `PRODUCT.md` and is not repeated here.

## Overview

**Creative North Star: "The Coursed Wall"**

Everything on this site sits the way stone sits on a footing: on a dark ground, in straight
courses, heavy at the base, warm in colour. The brand is visible craft, and the audience (a
lakefront homeowner who is usually out of town) buys on photographs and a phone call. So the
interface is a dark, quiet frame that holds photographs of mortared stone, and the stone
carries the colour. Type is sturdy, American and slightly vintage, echoing a heavy condensed
slab wordmark with a letterpress finish. Nothing is airy, thin, pastel, rounded or glassy.

Depth comes from material, not decoration: tonal steps between ground and lifted surfaces,
a faint paper grain on dark sections, thin "mortar line" rules, and the photographs
themselves. Motion is minimal, a single fade-and-rise on section entry and nothing on
photographs, and it is removed entirely under `prefers-reduced-motion`.

Confirmed rejections (brand board): a white, airy layout; Inter, Poppins, Montserrat or any
default geometric sans; stock photography; AI-generated imagery; cool-graded lakefront photos;
brick used as a fill or body-text colour.

**Key Characteristics:**
- Dark ground dominates above the fold on every page; light sections are the exception.
- Photography-led: full-bleed project photos on the dark ground with a scrim from shadow.
- Heavy condensed slab display type in uppercase; sturdy humanist sans for reading.
- Rectilinear, near-square geometry (2px radius); no pills, blobs, waves or angled edges.
- Brick is an action colour only: buttons, underlines, active states, one short rule.
- Every image that is not a real Shewmaker photo is a visible, labelled placeholder.

## Colors

Ozarks limestone and flagstone: a near-black warm ground, a sandstone light, a brick accent,
a fieldstone mid-tone and a mortar off-white, all pulled from the logo artwork.

### Primary
- **Ground** (#221E1A): the page. Header, footer body, hero and most sections. Photographs
  sit on it; the stonework supplies the colour.
- **Sandstone** (#D9C6A3): headings and lead text on dark (9.9:1), the wordmark colour,
  secondary-button borders on dark. The light that makes the ground read as warm rather
  than black.

### Secondary
- **Brick** (#B5542A): action only. Primary button fill, link underline, active nav state,
  focus accent, the 2px rule beside an eyebrow. Never a section fill, never a card, never
  body text. On ground it is 3.4:1, so it appears as shapes and large type only.
- **Brick Hover** (#9E4722, derived): pressed and hover state for brick buttons.
- **Brick Text** (#A04A24, derived): link text on mortar (5.0:1). Plain brick on mortar is
  4.1:1 and fails for small text.

### Neutral
- **Shadow** (#100E0C): image scrims, the footer base, overlays.
- **Ground Lifted** (#2C2622, derived): cards, panels and alternate sections on dark. One
  tonal step up; this is how a card is distinguished, not with a shadow.
- **Sandstone Dim** (#B9A98A, derived): muted text, captions, eyebrow labels on dark (7.2:1).
- **Mortar** (#EFE9DE): body text on dark (13.7:1); light section backgrounds, cards, form
  fields on light.
- **Mortar Deep** (#E4DCCC, derived): alternate light surface and form-field fill on mortar.
- **Chalk** (#FBF8F1, derived): button labels on brick (4.6:1). Mortar on brick is 4.1:1 and
  fails at button sizes.
- **Fieldstone** (#8A7F6D): borders, dividers, disabled states. The brand board's shorthand
  lists it for body text on light; measured at 3.3:1 on mortar it fails AA, so it is not used
  for running text.
- **Fieldstone Text** (#716859, derived): muted text on mortar (4.5:1).

Measured contrast (WCAG 2.x) for the pairs that come up in practice:

| Pair | Ratio | Verdict |
| --- | --- | --- |
| Sandstone on ground | 9.9:1 | Headings and lead text, AAA |
| Mortar on ground | 13.7:1 | Body text, AAA |
| Ground on mortar | 13.7:1 | Body text on light, AAA |
| Sandstone dim on ground | 7.2:1 | Captions and labels on dark |
| Chalk on brick | 4.6:1 | Button labels at any size |
| Brick text on mortar | 5.0:1 | Links on light |
| Fieldstone text on mortar | 4.5:1 | Muted text on light |
| Brick on ground | 3.4:1 | Shapes and large type only |
| Fieldstone on mortar | 3.3:1 | Borders only |
| Sandstone on brick | 2.9:1 | Never |

### Named Rules
**The Action-Only Rule.** Brick appears on well under 10% of any screen: a button, an
underline, an active state, one short rule. If brick is doing anything but pointing at an
action, it is wrong.

**The Dark-Above-The-Fold Rule.** The first viewport of every page is ground with a
photograph. Two light sections never touch; the rhythm is ground → lifted → ground → mortar
→ ground → footer.

**The No-Brick-Text Rule.** Brick is never a text colour on dark. Links on dark are sandstone
with a brick underline; eyebrows on dark are sandstone dim.

## Typography

**Display Font:** Rokkitt (variable 100–900; with Rockwell, Roboto Slab, Georgia fallbacks). Approved 2026-09-07.
**Body Font:** Merriweather Sans (variable 300–800; with Fira Sans, Segoe UI, system-ui fallbacks). Approved 2026-09-07.
**Label/Numeral Font:** Merriweather Sans with `font-variant-numeric: tabular-nums` (the face ships `tnum`).

**Character:** A condensed geometric slab with a small x-height (0.40 em) set in uppercase
reads as woodtype poster lettering: related to the wordmark's heavy condensed slab without
copying its letterpress texture. Against it, a sturdy low-contrast humanist sans with a
large x-height (0.56 em) does the reading work on dark backgrounds. Slab against humanist,
small x-height against large: the pairing contrasts on both axes, so neither face competes.

### Hierarchy
- **Display** (900, `clamp(2.75rem, 1.6rem + 4.5vw, 5.5rem)`, 0.95, uppercase, 0.01em): the
  homepage hero and the gallery title only.
- **Headline / H1** (900, `clamp(2.25rem, 1.5rem + 3vw, 4rem)`, 1.0, uppercase, 0.01em): one
  per page; primary keyword plus location.
- **Title / H2** (700, `clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)`, 1.05, uppercase, 0.02em):
  section headers.
- **Subtitle / H3** (600, `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)`, 1.15, title case):
  card titles, FAQ questions, sub-sections.
- **Lead** (400, `clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)`, 1.55): the first paragraph
  under a headline; sandstone on dark.
- **Body** (400, `clamp(1rem, 0.97rem + 0.2vw, 1.0625rem)`, 1.6, 62–68ch): running copy;
  mortar on dark, ground on light. Service pages carry 800+ words and get a real column.
- **Small** (400 or 600, 0.875rem, 1.5): captions, footer, table cells.
- **Label** (700, 0.8125rem, 0.12em, uppercase): eyebrows and nav labels; sandstone dim on
  dark, brick text on light.
- **Button** (700, 1.0625rem, 1.0, sentence case): "Call Sam at 573-569-3690", "Get an estimate".

### Named Rules
**The No-Thin-Weights Rule.** Nothing below 400 in the body face, nothing below 600 in the
display face. Thin type on a dark ground disappears, and it reads as fashion, not trade.

**The Two-Voices Rule.** Rokkitt for every heading level, Merriweather Sans for everything
else. H2 and H3 are lighter weights of the same slab, never a third family.

**The Tabular Numbers Rule.** The phone number, measurements, counts and table figures use
tabular numerals so digits align and the number is easy to read off a phone screen.

## Layout

Twelve columns on desktop, four on mobile, on a 4px base unit (scale: 4, 8, 12, 16, 24, 32,
48, 64, 96, 128px). Copy sits in a 72rem (1152px) container with a 62–68ch reading measure;
photography gets the 88rem (1408px) wide container or full bleed. Gutters are
`clamp(1.25rem, 4vw, 2.5rem)`; vertical section padding is `clamp(4rem, 8vw, 7.5rem)`.

Sections are rectilinear and coursed: no angled edges, waves or overlapping blobs. Asymmetry
is welcome; a 7/5 split with the photograph on the heavier side beats a centred hero. Photos
never get a white frame. The header is sticky on desktop (72px, compacting on scroll) and
carries the phone number and the primary button; on mobile the phone number stays visible
and the nav collapses into a full-screen dark panel. Density is generous rather than tight:
this is a brochure for expensive work, not a dashboard.

Responsive art direction: hero photographs crop 16:9 on desktop and 4:5 on mobile with the
headline over the darkest third of the image.

## Elevation & Depth

Tonal layering, not shadows. Depth is conveyed by stepping between ground (#221E1A), lifted
ground (#2C2622) and mortar (#EFE9DE), by 1px "mortar line" rules, by a faint paper grain on
dark sections, and by the photographs themselves. Photo scrims run from shadow at 85%
opacity at the bottom to transparent at roughly 55% of the image height, and are the only
gradients in the system. There is no blur, no glow, no glassmorphism.

### Shadow Vocabulary
- **Stone edge** (`box-shadow: 0 1px 0 rgba(34,30,26,.14), 0 1px 2px rgba(34,30,26,.08)`):
  cards on light surfaces only. The maximum shadow in the system.
- **None** (`box-shadow: none`): every element on a dark surface.

### Named Rules
**The Mortar Line Rule.** A card, a panel or a section boundary is separated by a 1px rule
in fieldstone at 35% alpha on dark (45% on light), not by a drop shadow.

**The Grain Rule.** Dark sections may carry an inline-SVG `feTurbulence` noise overlay at
4–6% opacity, never above 8%, never over a photograph. It should read as printed paper and
disappear on inspection.

**The Course Lines Rule.** CTA blocks and the footer may carry a running-bond texture drawn in
CSS gradients (1px horizontal rules every 56px with offset vertical joints) in sandstone at
5–6% opacity. If it is noticeable at a glance it is too strong.

## Shapes

Near-square, like cut stone: 2px radius on buttons, inputs and placeholders, 4px on cards and
photo containers, 0 on sections and full-bleed images. No pills, no 16px rounded cards, no
circular avatars for people (use squares). Borders are 1px in fieldstone at reduced alpha;
focus rings are 2px sandstone with a 2px offset. Photographs are clipped rectangular; the
only non-rectangular element on the site is the logo badge itself.

## Components

### Buttons
- **Shape:** near-square (2px radius); Merriweather Sans 700 at 1.0625rem, sentence case.
- **Primary:** brick fill with chalk label (#B5542A / #FBF8F1), 14px 24px padding. Used for
  "Call Sam at 573-569-3690" and "Get an estimate" only.
- **Hover / Focus:** fill deepens to brick hover (#9E4722) over 120ms; focus shows a 2px
  sandstone ring, 2px offset. No scale, no shadow.
- **Secondary on dark:** transparent with a 1.5px sandstone border and sandstone label;
  hover inverts to sandstone fill with ground label.
- **Secondary on light:** transparent with a 1.5px ground border and ground label; hover
  inverts to ground fill with mortar label.
- **Phone link:** the number is always also a plain `tel:` link in tabular figures beside
  the primary button, never only inside a button.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** lifted ground (#2C2622) on dark sections; mortar (#EFE9DE) on light.
- **Shadow Strategy:** none on dark; "stone edge" on light (see Elevation & Depth).
- **Border:** 1px mortar line.
- **Internal Padding:** 24px text block; photographs bleed to the card edge with no inner
  padding. Project cards are photo on top, eyebrow (service), H3 (what was built), one line
  naming material and method.

### Inputs / Fields
- **Style:** 1px fieldstone stroke, mortar deep fill on light or lifted ground fill on dark,
  2px radius, 48px height, label above the field (never placeholder-only).
- **Focus:** border becomes 2px brick; no glow.
- **Error / Disabled:** error text in brick text on light or sandstone on dark with a brick
  2px border; disabled at 50% opacity with fieldstone text.

### Navigation
- **Style:** ground header with a 1px mortar line below; logo mark left; links in
  Merriweather Sans 600 in sandstone, hover to mortar, active marked by a 2px brick underline;
  phone number in tabular 700 at right; primary button on desktop only. Mobile: a full-screen
  ground panel with links at title size, the phone number and the primary button at the
  bottom. Sticky on desktop, compacting from 72px to 60px on scroll.

### Section Wrapper
The one component every page section uses. It owns the background token (ground, lifted
ground, or mortar), the vertical section padding, the container width (standard or wide), the
optional grain and the optional course lines. Nothing sets a section background any other way.

### Eyebrow
Label style (700, 0.8125rem, 0.12em, uppercase) in sandstone dim on dark or brick text on
light, optionally preceded by a 24px by 2px brick rule. Names the service segment or the town.

### Photography (signature)
Full-bleed or wide-container photographs of Shewmaker work on the dark ground, warm-graded,
never desaturated or cool-graded, with a scrim from shadow when type sits on them. Slots and
minimum source widths: page hero 16:9 desktop / 4:5 mobile at 2400px; gallery card 4:3 or 1:1
at 1200px; before/after pair 1:1 side by side at 1200px with "Before" / "After" eyebrows and
no slider gimmick; inline service photo 3:2 at 1600px; detail shot 1:1 at 1200px. Captions
name material and method ("mortared fieldstone seawall on a poured footing"), not adjectives.
Alt text is mandatory and describes the work. The current interim set is Facebook-sourced at
414 by 414px (see `public/images/projects/manifest.json`); it is fit for thumbnails and small
cards only, and every slot wider than roughly 400 CSS px stays a placeholder until Sam
supplies originals.

### Placeholder Block (signature)
Locked to the slot's aspect ratio; mortar deep fill on light or lifted ground fill on dark; 2px
dashed brick border; a diagonal hatch at 6%; a Rokkitt uppercase label reading "PHOTO NEEDED"
followed by one body-size line stating exactly which shot is required. It must be impossible
to mistake for a finished design, and every instance is listed in `docs/placeholders.md`.

## Do's and Don'ts

### Do:
- **Do** open every page on ground with a photograph and a sandstone headline over the darkest third.
- **Do** set every heading in Rokkitt (H1 and H2 uppercase at 900/700, H3 title case at 600) and everything else in Merriweather Sans at 400 or heavier.
- **Do** distinguish cards from sections with a tonal step (#221E1A to #2C2622) and a 1px mortar line, never a drop shadow on dark.
- **Do** keep brick for actions: primary button (#B5542A with #FBF8F1 label), link underlines, active nav, focus accent.
- **Do** use tabular numerals for the phone number and every measurement.
- **Do** keep photographs warm and rectangular, with captions that name the material and the method.
- **Do** render a labelled placeholder block wherever a real Shewmaker photo does not yet exist, and list it in `docs/placeholders.md`.
- **Do** honour `prefers-reduced-motion` by removing every transition except focus.

### Don't:
- **Don't** use stock photography anywhere, not one image, and never AI-generated imagery of masonry work or people (brand board hard rule).
- **Don't** cool-grade, desaturate or heavily filter lakefront photographs.
- **Don't** use Inter, Poppins, Montserrat or any default geometric sans, and avoid Oswald, Bebas Neue and Anton, which read as the generic contractor template.
- **Don't** set brick as a section fill, a card background or a text colour on dark; brick text on dark is 3.4:1 and fails.
- **Don't** set fieldstone as running text on mortar (3.3:1); use fieldstone text (#716859) for muted copy and reserve fieldstone for borders.
- **Don't** put two light sections next to each other, or let a light section lead a page.
- **Don't** use pills, rounded-16px cards, circular avatars, angled section edges, blur, glow or glassmorphism.
- **Don't** add parallax to photographs, auto-playing carousels, or hover zoom above 1.02.
- **Don't** add faith language or the John 3:16 element anywhere but the logo, and don't frame the logo badge in white.
