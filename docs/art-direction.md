# Art direction (Stage 1 proposal)

Status: **Hold.** Proposed 2026-09-07 for Tom's approval. Reads from `docs/brand-board.md`,
`DESIGN.md` and the actual logo raster (`public/images/brand/logo-badge-414.jpg`). Once approved,
the "proposed" labels come off `DESIGN.md` and Stage 2 builds against it.

## 1. Typefaces

**Display: Rokkitt** (variable, 100–900; self-hosted from `@fontsource-variable/rokkitt`, 28 KB Latin woff2).

The wordmark on the badge is a heavy condensed slab with bracketed serifs and a letterpress finish,
set on an arc. The brand board asks for something related to it without imitating it, in a
condensed slab or heavy woodtype, with H2 and H3 as lighter weights of the same family. Measured
against the other free slabs, Rokkitt is the only one that satisfies all three: its capitals are the
narrowest of the candidates (about 0.67 em average cap width; Bevan is 0.88), it carries a full
weight range so H1 at 900, H2 at 700 and H3 at 600 stay one voice, and its small x-height (0.40 em)
makes uppercase settings read as poster and woodtype lettering rather than as a book face. Its
unbracketed, monoline slabs keep it a cousin of the badge, not a copy. It is in the Rockwell and
Stymie lineage, which is the "sturdy, American, slightly vintage" register the board names.

**Body: Merriweather Sans** (variable, 300–800; `@fontsource-variable/merriweather-sans`, 37 KB Latin woff2).

A humanist sans with real weight: low stroke contrast, sturdy semi-condensed forms and the largest
x-height of the candidates (0.56 em), drawn for on-screen reading. It ships tabular figures
(`tnum` verified in the font file), so the phone number and measurements align. It reads as a
trade catalogue rather than a software product, and it contrasts Rokkitt on both axes that matter,
slab against humanist and small x-height against large, so the two never compete. Used at 400 for
body, 600 for nav and labels, 700 for buttons; never below 400.

Considered and rejected:

- Bevan, Alfa Slab One, Ultra, Holtwood One: the right woodtype heaviness, but single weights, so
  no H2/H3 hierarchy without a third family. Bevan is also wide, not condensed.
- Oswald, Bebas Neue, Anton: condensed gothics, not slabs, and the default look of every
  contractor template the brand is positioned against.
- Zilla Slab, Bitter: good slabs with weight ranges, but editorial and tech in register.
- Fira Sans: the runner-up body (Meta lineage, tabular figures), but contemporary-industrial
  rather than vintage. Source Sans 3: the Google build has no tabular figures and it is too
  neutral. Signika: made for wayfinding, rounded and friendly, too soft.

Optional commercial upgrade, later and only if wanted: Emigre's *Brothers* (a condensed woodtype
slab that is almost literally the badge's register) or Sentinel Condensed for display. Not needed
for launch; Rokkitt is the build choice.

Delivery: two variable files, preloaded, `font-display: swap`, with size-adjusted fallbacks
(Rockwell and Georgia; Fira Sans and system-ui) so the swap does not shift layout.

## 2. How the palette applies

Global: header on ground (#221E1A) with a mortar line beneath it; footer on shadow (#100E0C) with
faint course lines. Every page opens dark with a photograph. Exactly one mortar (#EFE9DE) section
per page for the reading-heavy block, never first and never adjacent to another light section;
long service pages may have two. Everything else alternates ground and lifted ground (#2C2622).

Brick (#B5542A) appears only as: the primary button, link underlines, the active nav underline,
the 2 px rule beside an eyebrow, the focus accent, and the form focus border. Never a fill, never
text on dark. Sandstone (#D9C6A3) carries every heading on dark; mortar carries body text on dark.

| Page | Dark ground | Lifted ground | Mortar (light) |
| --- | --- | --- | --- |
| Home | Hero; the two "doors" (seawalls, fireplaces); the rip rap argument with before/after; outdoor living feature; gallery teaser; service-area strip | Services grid; "problems worth catching early" cards | "Two brothers and their crews" about teaser |
| Service page | Hero; intro and inline photo; related cities and services; CTA on shadow | Method and materials block | FAQ |
| Tier 1 city page | Hero; services offered grid; project slots; CTA | Counties and communities | Lakefront specifics and Ameren permitting |
| Tier 2 city page | Hero; services; one project reference; CTA | Communities | none |
| Gallery | Everything; filter bar on lifted ground | Filter bar | none |
| About | Hero; the work from the waterline up; crew section | Self-performed scope | The brothers' story (with its bracketed placeholders) |
| Contact | Hero with the phone number at display size | Form on lifted ground | Service area and counties |

## 3. Homepage layout

Photography-led, with seawalls and the fireplace as the two hero categories, in this order:

1. **Hero.** Full-bleed photograph (16:9 desktop, 4:5 mobile, art-directed) of the finished stone
   seawall with the lake house above and water in frame, scrimmed from shadow at the bottom. Text
   sits in the left seven columns over the darkest third: eyebrow "Third generation · Lake of the
   Ozarks", H1 "Masonry Contractor at the Lake of the Ozarks" in Rokkitt 900 uppercase, the one-line
   position as the lead, then "Call Sam at 573-569-3690" (primary) beside "Get an estimate"
   (secondary). Until a full-resolution original arrives this slot is a labelled placeholder with
   the 414 px thumbnail shown small beside it, not stretched.
2. **Two doors.** Two large 1:1 photo cards side by side: "Stone seawalls and shoreline" (seawall
   photo) and "Fireplaces, pizza ovens and outdoor living" (fireplace and pizza oven photo). Eyebrow,
   H2, one line naming material and method, a link. These are the two highest-value pillars and the
   two best photographs.
3. **All nineteen services.** Six segment cards on lifted ground, no photos: eyebrow, H3, the three
   or four service links. Every service page is one click from home.
4. **The argument.** "Rip rap protects a shoreline. A stone seawall protects it and looks like it
   belongs to the house." Before/after pair from the shoreline rebuild (eroding bank from the water,
   then the finished wall), two short paragraphs, link to seawall construction. Never disparages
   rip rap.
5. **Outdoor living feature.** The fireplace, pizza oven and grill photograph at 3:2 in the wide
   container with a short paragraph and links to the three outdoor-living pages.
6. **Two brothers and their crews** (the light section). Crew-at-work photograph (footing trench),
   the self-performed line, counties served, a portrait placeholder for Mike and Sam, link to About.
7. **The work.** Gallery teaser: eight thumbnails in a coursed grid, the one place the 414 px images
   are honest at 1×, and "See the work" to the gallery.
8. **Problems worth catching early.** Three consequence-led cards (chimney, failing wall, cracked
   flatwork) into the blog and the repair pages.
9. **Service area strip.** The nine towns and Hurricane Deck as links, the three counties, one line
   on Ameren permitting.
10. **CTA block** on shadow with course lines, then the footer with the NAP block (name, city and
    state, phone; no street address).

The gallery page follows the same logic scaled up: a coursed grid of photo cards filterable by the
six segments and by before/during/after, each card captioned with material and method, with
before/after pairs shown as pairs.

## 4. Texture and depth

The brand must not read as flat white space, and it must not read as fake-rustic either. Depth
comes from material, in this order:

- **Photography as colour.** Full-bleed and wide-container photographs on the dark ground do most
  of the work; scrims run from shadow at 85% to transparent at about 55% of the height. Warm
  grade, never desaturated.
- **Tonal steps.** Ground, lifted ground, mortar. A card is a step up in tone with a 1 px mortar
  line, never a drop shadow on dark. The only shadow in the system is a 1–2 px "stone edge" on
  cards on light surfaces.
- **Grain.** Dark sections carry an inline SVG noise overlay at 4–6% opacity, which reads as the
  printed paper of the badge and disappears on inspection. Never over a photo, never above 8%.
- **Course lines.** The CTA block and the footer carry a running-bond pattern drawn in CSS
  gradients (1 px rules every 56 px with offset joints) in sandstone at 5–6%. A texture, not an
  illustration.
- **Geometry.** Rectilinear and coursed: 2 px radius on buttons and inputs, 4 px on cards, none on
  sections. No pills, no angled edges, no blur, no glow. The badge is the only non-rectangular
  element on the page.
- **The badge.** Built around, not modernised. Interim header treatment is the 56 px raster beside
  the name in Rokkitt until a vector and a small mark exist.

## Decisions requested

1. Approve Rokkitt and Merriweather Sans, or redirect (the runner-up body is Fira Sans).
2. Approve the section map (one light section per page, dark above the fold everywhere).
3. Approve the homepage order above, in particular the "two doors" band as the second thing on
   the page.
4. Approve the interim header logo treatment (raster badge plus set name) for staging.
