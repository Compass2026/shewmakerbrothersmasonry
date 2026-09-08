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
    fontFamily: "Rokkitt Variable, Rokkitt Fallback, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Rokkitt Variable, Rokkitt Fallback, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Rokkitt Variable, Rokkitt Fallback, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.02em"
  subtitle:
    fontFamily: "Rokkitt Variable, Rokkitt Fallback, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "normal"
  lead:
    fontFamily: "Merriweather Sans Variable, Merriweather Sans Fallback, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Merriweather Sans Variable, Merriweather Sans Fallback, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  small:
    fontFamily: "Merriweather Sans Variable, Merriweather Sans Fallback, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Merriweather Sans Variable, Merriweather Sans Fallback, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
  button:
    fontFamily: "Merriweather Sans Variable, Merriweather Sans Fallback, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  chip:
    fontFamily: "Merriweather Sans Variable, Merriweather Sans Fallback, Fira Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
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
  section-tight: "clamp(2.5rem, 5vw, 4rem)"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.brick}"
    textColor: "{colors.chalk}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brick-hover}"
    textColor: "{colors.chalk}"
  button-secondary-dark:
    backgroundColor: "transparent"
    textColor: "{colors.sandstone}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "13px 23px"
    height: "48px"
  button-secondary-dark-hover:
    backgroundColor: "{colors.sandstone}"
    textColor: "{colors.ground}"
  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.ground}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "13px 23px"
    height: "48px"
  button-secondary-light-hover:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.mortar}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.sandstone}"
    typography: "{typography.chip}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
    height: "40px"
  chip-selected:
    backgroundColor: "{colors.sandstone}"
    textColor: "{colors.ground}"
  card-dark:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.mortar}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-on-lifted:
    backgroundColor: "{colors.ground}"
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
    padding: "clamp(16px, 3vw, 28px)"
  placeholder-light:
    backgroundColor: "{colors.mortar-2}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "clamp(16px, 3vw, 28px)"
  section-dark:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.mortar}"
    padding: "clamp(4rem, 8vw, 7.5rem) 0"
  section-dark-lifted:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.mortar}"
    padding: "clamp(4rem, 8vw, 7.5rem) 0"
  section-shadow:
    backgroundColor: "{colors.shadow}"
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
  header-compact:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.sandstone}"
    height: "60px"
  footer:
    backgroundColor: "{colors.shadow}"
    textColor: "{colors.sandstone-dim}"
    padding: "{spacing.2xl} 0 {spacing.lg}"
---

# Design System: Shewmaker Brothers Masonry

Derived from `docs/brand-board.md` (Compass Marketing Advisors, Brand Board v1.0, September 2026).
The six palette colours, the typographic direction, the imagery rules and every "never" are
sourced from that document. Everything else here (derived tints, the type scale, spacing, the
named typefaces) was proposed in Stage 1 and approved by Tom on 2026-09-07 together with
`docs/art-direction.md`. Product truth (audience, positioning, copy rules) lives in `PRODUCT.md`
and is not repeated here.

**Built refinements (Stage 4, 2026-09-07).** The build in `src/` follows this document; where it
sharpened an approved decision, the shipped value is recorded below and the frontmatter carries it.
Nothing in the approved Do/Don't lists or the named rules changed.

- Label and eyebrow line-height is 1.4, not 1.2 (`.t-label`, `.eyebrow`, `src/styles/global.css`).
- Reading measure: running copy (`.prose`) is capped at 58ch of Merriweather Sans (about 75
  characters at its large x-height); leads (`.t-lead`) are capped at 52ch. Stage 1 wrote 62–68ch.
- Display, headline and title carry `word-spacing` of -0.1em / -0.1em / -0.08em so uppercase Rokkitt
  sets as one line of lettering; display and headline wrap with `text-wrap: pretty`, every other
  heading balances.
- Font stacks include the size-adjusted local fallbacks "Rokkitt Fallback" (Rockwell / Georgia at
  86%) and "Merriweather Sans Fallback" (Fira Sans / Helvetica Neue / Arial at 103%), per
  `docs/art-direction.md` §1, so the swap to the self-hosted variable faces does not shift layout.
- The header is `position: fixed` with a constant 73px document offset (72px row plus its 1px mortar
  line) and compacts from 72px to 60px after 32px of scroll without animating height. "Sticky" in
  Stage 1 meant this behaviour; no layout shift on compaction.
- Course lines are an SVG tile (112px, sandstone at `stroke-opacity` 0.05, one course every 56px
  with joints offset half a stone), not CSS gradients. Grain is 5%.
- The placeholder hatch is drawn on a `::before` pseudo-element so text sits on the solid field
  colour; the hatch is sandstone at 8% on dark and ground at 6% on light. A `TextPlaceholder`
  component exists for unverified facts and is logged like a photo placeholder.
- Tone system: `data-tone` (`ground`, `lifted`, `shadow`, `mortar`) on the Section wrapper sets
  `--surface`, `--ink`, `--heading`, `--muted`, `--eyebrow`, `--link`, `--rule`, `--card`,
  `--card-shadow`, `--field`, `--focus`, `--btn2`, `--btn2-ink` and `--hatch`. Components read the
  tone tokens and never pick colours; cards on lifted sections step down to ground.
- Link lists set in the display face (the towns in the service-area strip) are title case; uppercase
  is reserved for H1, H2 and labels.
- The gallery is a coursed running-bond grid (courses of four cards alternate with courses of three
  set half a stone over); the home teaser uses the CoursedGrid component with half-stone end cells.
- Motion: one fade-and-rise on entry (14px, 700ms, expo ease), staggered in the hero in 90ms steps,
  removed under `prefers-reduced-motion`.
- Added to the frontmatter from the build: the `chip` (gallery filter) component and type role,
  `card-on-lifted`, `section-shadow`, `header-compact`, and the `section-tight` spacing step.

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
themselves. Motion is minimal, a single fade-and-rise on section entry (staggered in the hero)
and nothing on photographs, and it is removed entirely under `prefers-reduced-motion`.

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
- Surfaces are coursed: cards and thumbnails sit in running bond, half a stone over on alternate rows.

## Colors

Ozarks limestone and flagstone: a near-black warm ground, a sandstone light, a brick accent,
a fieldstone mid-tone and a mortar off-white, all pulled from the logo artwork. Colour is
assigned by tone, never by component: a section declares `data-tone` and every child reads
`--ink`, `--heading`, `--muted`, `--eyebrow`, `--link`, `--rule`, `--card` and `--field` from it.

### Primary
- **Ground** (#221E1A): the page. Header, hero and most sections, and the card fill on lifted
  sections. Photographs sit on it; the stonework supplies the colour.
- **Sandstone** (#D9C6A3): headings and lead text on dark (9.9:1), the wordmark colour,
  secondary-button borders on dark, the selected filter chip, the focus ring on dark. The light
  that makes the ground read as warm rather than black.

### Secondary
- **Brick** (#B5542A): action only. Primary button fill, link underline, active nav underline,
  form focus border, the focus ring on light, list markers, the 2px rule beside an eyebrow, the
  dashed placeholder border, the caret and form accent colour. Never a section fill, never a
  card, never body text. On ground it is 3.4:1, so it appears as shapes and large type only.
- **Brick Hover** (#9E4722, derived): pressed and hover state for brick buttons.
- **Brick Text** (#A04A24, derived): link text and eyebrows on mortar (5.0:1). Plain brick on
  mortar is 4.1:1 and fails for small text.

### Neutral
- **Shadow** (#100E0C): image scrims, the footer and the CTA block (`data-tone="shadow"`).
- **Ground Lifted** (#2C2622, derived): cards, the services menu, form fields and alternate
  sections on dark. One tonal step up; this is how a card is distinguished, not with a shadow.
- **Sandstone Dim** (#B9A98A, derived): muted text, captions, eyebrow labels on dark (7.2:1);
  card and chip border on hover.
- **Mortar** (#EFE9DE): body text on dark (13.7:1); light section backgrounds, cards on light.
- **Mortar Deep** (#E4DCCC, derived): form-field and placeholder fill on mortar.
- **Chalk** (#FBF8F1, derived): button labels on brick (4.6:1). Mortar on brick is 4.1:1 and
  fails at button sizes.
- **Fieldstone** (#8A7F6D): borders, dividers, the input stroke, disabled states, the scrollbar
  thumb. The brand board's shorthand lists it for body text on light; measured at 3.3:1 on
  mortar it fails AA, so it is not used for running text. The mortar line is fieldstone at 35%
  alpha on dark and 45% on light (`--rule`).
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
→ ground → footer. Where two ground or two lifted sections do meet, a 1px mortar line
separates them.

**The No-Brick-Text Rule.** Brick is never a text colour on dark. Links on dark are sandstone
with a brick underline; eyebrows on dark are sandstone dim.

**The Tone Rule.** A section declares its tone (`ground`, `lifted`, `shadow`, `mortar`) and
nothing inside it names a colour. Cards, fields, eyebrows, links, rules and focus rings take
their colour from the tone tokens, so a component dropped into a light section is right by
construction.

## Typography

**Display Font:** Rokkitt (variable 100–900; self-hosted, preloaded; with the size-adjusted
"Rokkitt Fallback" (Rockwell / Georgia at 86%), then Rockwell, Roboto Slab, Georgia). Approved 2026-09-07.
**Body Font:** Merriweather Sans (variable 300–800; self-hosted, preloaded; with the size-adjusted
"Merriweather Sans Fallback" (Fira Sans / Helvetica Neue / Arial at 103%), then Fira Sans, Segoe UI, system-ui). Approved 2026-09-07.
**Label/Numeral Font:** Merriweather Sans with `font-variant-numeric: tabular-nums` (the face ships `tnum`).

**Character:** A condensed geometric slab with a small x-height (0.40 em) set in uppercase
reads as woodtype poster lettering: related to the wordmark's heavy condensed slab without
copying its letterpress texture. Against it, a sturdy low-contrast humanist sans with a
large x-height (0.56 em) does the reading work on dark backgrounds. Slab against humanist,
small x-height against large: the pairing contrasts on both axes, so neither face competes.
Uppercase Rokkitt is set tight between words (word-spacing -0.1em at display and headline,
-0.08em at title) so a heading reads as one carved line rather than separate words.

### Hierarchy
- **Display** (900, `clamp(2.75rem, 1.6rem + 4.5vw, 5.5rem)`, 0.95, uppercase, 0.01em,
  word-spacing -0.1em, `text-wrap: pretty`): the homepage hero and the gallery title only.
- **Headline / H1** (900, `clamp(2.25rem, 1.5rem + 3vw, 4rem)`, 1.0, uppercase, 0.01em,
  word-spacing -0.1em, `text-wrap: pretty`): one per page; primary keyword plus location.
- **Title / H2** (700, `clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)`, 1.05, uppercase, 0.02em,
  word-spacing -0.08em, balanced): section headers.
- **Subtitle / H3** (600, `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)`, 1.15, title case,
  balanced): card titles, FAQ questions, sub-sections. Project cards and FAQ questions step the
  same role down to `clamp(1.125rem, 1rem + 0.5vw, 1.375rem)`.
- **Lead** (400, `clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)`, 1.55, max 52ch): the first
  paragraph under a headline; sandstone on dark, ground on light.
- **Body** (400, `clamp(1rem, 0.97rem + 0.2vw, 1.0625rem)`, 1.6, 58ch measure): running copy;
  mortar on dark, ground on light. Service pages carry 800+ words and get a real column.
- **Small** (400 or 600, 0.875rem, 1.5): captions, footer links, table cells, placeholder needs.
- **Label** (700, 0.8125rem, 1.4, 0.12em, uppercase): eyebrows, menu and footer column
  headings, form-filter labels; sandstone dim on dark, brick text on light.
- **Button** (700, 1.0625rem, 1.0, sentence case): "Call Sam at 573-569-3690", "Get an estimate".
- **Chip** (600, 0.875rem, 1.0, sentence case): gallery filter buttons.
- **Display links** (Rokkitt 700, subtitle size, 0.01em, title case): the town list in the
  service-area strip, sandstone with a 2px brick underline.

### Named Rules
**The No-Thin-Weights Rule.** Nothing below 400 in the body face, nothing below 600 in the
display face. Thin type on a dark ground disappears, and it reads as fashion, not trade.

**The Two-Voices Rule.** Rokkitt for every heading level, Merriweather Sans for everything
else. H2 and H3 are lighter weights of the same slab, never a third family.

**The Tabular Numbers Rule.** The phone number, measurements, counts and table figures use
tabular numerals so digits align and the number is easy to read off a phone screen.

**The Uppercase Budget Rule.** Uppercase is spent on H1, H2 and labels. H3, buttons, chips and
link lists set in the display face are title or sentence case, so a page never shouts twice.

## Layout

Twelve columns on desktop, four on mobile, on a 4px base unit (scale: 4, 8, 12, 16, 24, 32,
48, 64, 96, 128px). Copy sits in a 72rem (1152px) container with a 58ch reading measure (leads
52ch); photography, the header, the footer, the gallery and the hero get the 88rem (1408px)
wide container or full bleed. Gutters are `clamp(1.25rem, 4vw, 2.5rem)`; vertical section
padding is `clamp(4rem, 8vw, 7.5rem)`, with a tight step of `clamp(2.5rem, 5vw, 4rem)` for the
hero and the gallery filter bar. Breakpoints in use: 30rem (brand name appears beside the
badge), 40rem (before/after pairs go side by side), 48rem (hero placeholder switches 4:5 to
16:9, coursed grids go to eight columns), 64rem (desktop nav, 7/5 hero split, footer columns).

Sections are rectilinear and coursed: no angled edges, waves or overlapping blobs. Asymmetry
is welcome; the hero is a 7/5 split with the text on the heavier side and the photograph on
the right, and the service-area strip mirrors it at 5/7. Photos never get a white frame. The
header is fixed (72px row plus a 1px mortar line, so the document starts at 73px) and compacts
to 60px after 32px of scroll without animating height; it carries the phone number and the
primary button; on mobile the phone number stays visible and the nav collapses into a
full-screen ground panel. Density is generous rather than tight: this is a brochure for
expensive work, not a dashboard.

Thumbnail and card grids are laid in running bond: on desktop a course of four square cards
alternates with a course of three set half a stone over; on mobile courses of two alternate with
courses of one plus two half-stone end cells. Card gaps are 8px on mobile and 12px on desktop
for thumbnails, 16px and 24px for captioned project cards.

Responsive art direction: hero photographs crop 16:9 on desktop and 4:5 on mobile with the
headline over the darkest third of the image.

Motion belongs to the layout, not the content: elements marked for reveal fade and rise 14px
over 700ms on an expo ease when they enter the viewport, the hero staggers eyebrow, headline,
lead, media and buttons in 90ms steps, photographs never move, and `prefers-reduced-motion`
removes every transition except focus.

## Elevation & Depth

Tonal layering, not shadows. Depth is conveyed by stepping between ground (#221E1A), lifted
ground (#2C2622), shadow (#100E0C) and mortar (#EFE9DE), by 1px "mortar line" rules, by a faint
paper grain on dark sections, and by the photographs themselves. Photo scrims run from shadow
at 85% opacity at the bottom to transparent at 55% of the image height, and are the only
gradients in the system. There is no blur, no glow, no glassmorphism. A card on a lifted
section steps back down to ground, so the step is always one tone in either direction.

### Shadow Vocabulary
- **Stone edge** (`box-shadow: 0 1px 0 rgba(34,30,26,.14), 0 1px 2px rgba(34,30,26,.08)`):
  cards on light surfaces only, applied through `--card-shadow` by the mortar tone. The
  maximum shadow in the system.
- **None** (`box-shadow: none`): every element on a dark surface.

### Named Rules
**The Mortar Line Rule.** A card, a panel or a section boundary is separated by a 1px rule
in fieldstone at 35% alpha on dark (45% on light), not by a drop shadow.

**The Grain Rule.** Dark sections may carry an inline-SVG `feTurbulence` noise overlay at
4–6% opacity (shipped at 5%, 240px tile), never above 8%, never over a photograph. It should
read as printed paper and disappear on inspection.

**The Course Lines Rule.** The CTA block and the footer carry a running-bond texture drawn as
an inline-SVG tile (112px; 1px horizontal rules every 56px with offset vertical joints) in
sandstone at 5% stroke opacity. If it is noticeable at a glance it is too strong.

## Shapes

Near-square, like cut stone: 2px radius on buttons, inputs, chips, placeholders, the raster
badge and the mobile nav toggle; 4px on cards, photo containers, thumbnails and the services
menu; 0 on sections and full-bleed images. No pills, no 16px rounded cards, no circular avatars
for people (use squares). Borders are 1px in fieldstone at reduced alpha; focus rings are 2px
with a 2px offset in sandstone on dark and brick on light. Photographs are clipped rectangular;
the only non-rectangular element on the site is the logo badge itself. Placeholders are the one
dashed border (2px brick). Icons are stroked line glyphs drawn inline (chevron, plus, menu),
1.75–2px stroke in the current colour, never an icon font.

## Components

### Buttons
- **Shape:** near-square (2px radius); Merriweather Sans 700 at 1.0625rem, sentence case;
  48px minimum height.
- **Primary:** brick fill with chalk label (#B5542A / #FBF8F1), 14px 24px padding. Used for
  "Call Sam at 573-569-3690" and "Get an estimate" only.
- **Hover / Focus:** fill deepens to brick hover (#9E4722) over 120ms; focus shows a 2px ring
  in the tone's focus colour, 2px offset. No scale, no shadow.
- **Secondary on dark:** transparent with a 1.5px sandstone border and sandstone label;
  hover inverts to sandstone fill with ground label.
- **Secondary on light:** transparent with a 1.5px ground border and ground label; hover
  inverts to ground fill with mortar label. Both secondaries read `--btn2` / `--btn2-ink`.
- **Phone link:** the number is always also a plain `tel:` link in tabular 700 in the heading
  colour beside the primary button, never only inside a button; hover underlines.

### Chips
- **Style:** gallery filter buttons; transparent with a 1px mortar-line border, sandstone
  label, 600 at 0.875rem, 10px 14px padding, 40px minimum height, 2px radius. Hover raises
  the border to sandstone dim.
- **State:** selected (`aria-pressed="true"`) inverts to sandstone fill with ground label.
  Two rows (work segment, stage), each led by a label-style eyebrow, with a live count below.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** lifted ground (#2C2622) on ground sections; ground (#221E1A) on lifted
  sections; mortar (#EFE9DE) on light.
- **Shadow Strategy:** none on dark; "stone edge" on light (see Elevation & Depth).
- **Border:** 1px mortar line; linked cards raise the border to sandstone dim (fieldstone on
  light) on hover over 120ms.
- **Internal Padding:** 24px text block; photographs bleed to the card edge with no inner
  padding. Project cards are a square photo on top, eyebrow (segment · stage), H3 (what was
  built), one small muted line naming material and method. Segment cards are eyebrow, H3 and a
  list of underlined service links.

### Inputs / Fields
- **Style:** 1px fieldstone stroke, mortar deep fill on light or lifted ground fill on dark
  (`--field`), 2px radius, 48px height, 12px 14px padding, label above the field in 600
  (never placeholder-only); hints in small muted text at 60ch; textareas 144px minimum.
- **Focus:** border becomes 2px brick with padding reduced 1px so nothing shifts; no glow.
- **Error / Disabled:** error text in brick text on light or sandstone on dark with a brick
  2px border; disabled at 50% opacity with fieldstone text.

### Navigation
- **Style:** fixed ground header with a 1px mortar line below; the 56px raster badge left
  (44px when compact) with the name in Rokkitt 900 uppercase from 30rem up; links in
  Merriweather Sans 600 at 1rem in sandstone, hover to mortar, active marked by a 2px brick
  underline; a "Services" menu on hover or click opens a lifted-ground panel (4px radius,
  mortar line, three columns of label headings and mortar links, active link brick-underlined);
  phone number in tabular 700 at right; primary button on desktop only (64rem up). Mobile: a
  44px square toggle with a stroked menu glyph opens a full-screen ground panel with links in
  Rokkitt 700 uppercase at title size separated by mortar lines, the current page underlined 3px
  in brick, services in a disclosure, and the primary button at the bottom. Compacts from 72px
  to 60px after 32px of scroll; Escape closes either panel.

### Section Wrapper
The one component every page section uses. It owns the tone (`ground`, `lifted`, `shadow` or
`mortar`), the vertical section padding (section, tight or none), the container width (copy,
wide or full), the optional grain and the optional course lines. Nothing sets a section
background any other way, and nothing inside it names a colour.

### Eyebrow
Label style (700, 0.8125rem, 1.4, 0.12em, uppercase) in sandstone dim on dark or brick text on
light, optionally preceded by a 24px by 2px brick rule with a 12px gap. Names the service
segment, the town, or "Before" / "After". In a heading group it sits 14px above the heading.

### Photography (signature)
Full-bleed or wide-container photographs of Shewmaker work on the dark ground, warm-graded,
never desaturated or cool-graded, with a scrim from shadow when type sits on them. Slots and
minimum source widths: page hero 16:9 desktop / 4:5 mobile at 2400px; gallery card 4:3 or 1:1
at 1200px; before/after pair 1:1 side by side at 1200px with "Before" / "After" eyebrows and
no slider gimmick; inline service photo 3:2 at 1600px; detail shot 1:1 at 1200px. Captions
name material and method ("mortared fieldstone seawall on a poured footing"), not adjectives,
in small muted text 8px below the image. Alt text is mandatory and describes the work. The
current interim set is Facebook-sourced at 414 by 414px (see
`public/images/projects/manifest.json`); it is fit for thumbnails and small cards only, and
every slot wider than roughly 400 CSS px stays a placeholder until Sam supplies originals.

### Coursed Grid (signature)
Square thumbnails laid in running bond: four-column mobile and eight-column desktop grids where
every item spans two columns and the fifth and ninth items of each nine-item course (third and
fifth of each five on mobile) span one column at a 1:2 ratio, so alternate rows start and end on
a half stone. Thumbnails are 4px-rounded on the tone's card colour, 8px apart (12px desktop),
never captioned; the gallery page lays captioned project cards the same way with the middle
course of three shifted one column right.

### Placeholder Block (signature)
Locked to the slot's aspect ratio; mortar deep fill on light or lifted ground fill on dark
(`--field`); 2px dashed brick border; a 45-degree hatch on a `::before` layer (sandstone at 8% on
dark, ground at 6% on light) so the text sits on the solid field; a Rokkitt 700 uppercase label
at subtitle size reading "PHOTO NEEDED" followed by one small line stating exactly which shot is
required; optionally the 414px thumbnail shown at 96px beside it, never stretched. The
TextPlaceholder variant carries the same border, field and hatch at 14px 16px around a
label-size Rokkitt label ("Needed from Sam") and one small line. It must be impossible to
mistake for a finished design, and every instance is listed in `docs/placeholders.md`.

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
- **Do** set the tone on the Section wrapper and let components read `--ink`, `--heading`, `--card` and `--field` from it, rather than naming a colour in a component.
- **Do** lay thumbnail and card grids in running bond, alternate courses set half a stone over.

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
- **Don't** set H3, buttons, chips or display-face link lists in uppercase; uppercase is spent on H1, H2 and labels.
- **Don't** animate the header's height on compaction or let the fixed header change the document offset (73px).
