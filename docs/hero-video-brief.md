# Hero video: generation brief

> **Used once, 2026-09-08.** The second generation replaced the first the same evening: better scene
> (an aerial over two finished retaining walls, stone steps and the poured walkways rather than a
> house with a wall behind it) and, notably, **no visible watermark**. It came back at 1280x720
> again, so the resolution note in section 1 is the one to press on next time.

For regenerating `public/videos/hero-lake.mp4`. The clip in place now is 1280x720, which is why it
looks soft on a wide screen: the browser stretches it about 1.35x at 1728px and more beyond that.
The fix is resolution at the source, not encoding.

This sits under the standing decision in `docs/placeholders.md` section G, where Tom chose to publish
AI footage that the brand board otherwise forbids. Nothing here changes that; it only makes the
footage better.

---

## 1. Settings, before the prompt

These matter more than the wording. Most of the current softness is a settings problem.

| Setting | Use | Why |
| --- | --- | --- |
| Model | Veo 3.1 or the newest available | Older models cap at 720p |
| Resolution | **1080p minimum, 4K if the tier offers it** | The whole point of the exercise |
| Aspect ratio | **16:9 landscape** | The hero is full-bleed and very wide |
| Duration | 8 seconds | It loops, so shorter reads fine |
| Download | The **original file**, highest quality offered | Not a share link, not a screen recording |

Generate three or four and pick. They vary a lot run to run.

## 2. The watermark: no prompt can remove it

The four-pointed sparkle burned into the corner of the current clip is added by the tier, not by the
prompt. Asking the model not to add it does nothing. It comes off by generating on **Google AI Ultra
or Flow**, where the visible mark is not applied. SynthID, the invisible marker, stays either way and
does not affect how the video looks.

## 3. The prompt

Paste this whole block.

```
Aerial drone shot, slow steady forward push at roughly 25 feet, gliding along a mortared
natural-stone retaining wall on a wooded lakefront lot in the Missouri Ozarks. The wall is
laid in irregular courses of tan, buff and grey limestone with deeply recessed mortar joints
and a poured concrete cap. Below it, calm dark green lake water. Above it, a mown lawn rising
to mature oaks. Late afternoon in early spring, low warm sun raking across the wall from the
right so every stone face and joint casts its own shadow.

Keep the left third of the frame simple and in shade: open water or lawn in shadow, no busy
detail, no bright sky.

Photorealistic, shot on a modern drone camera, natural colour, no colour grading, no lens
flare, no vignette. One smooth continuous move, no cuts, no speed ramp, no camera shake, no
orbit. Bare deciduous trees and dormant grass.

Do not include: people, faces, boats, docks with visible names, house numbers, signage, text
or captions of any kind, logos, branded equipment, or any watermark.
```

### Why the left third matters

The headline sits on the left of the hero and nothing is laid over the video any more, at Tom's
instruction. White type on a bright sky or sunlit concrete is the one thing that breaks the design.
A calm, darker left third is the single most useful thing this footage can do.

## 4. Alternates worth generating

Same settings and same closing constraints, swapping the scene:

- **Seawall from the water.** Low aerial, camera drifting parallel to a mortared stone seawall at the
  waterline, small wake lapping the base, shoreline trees behind, sun from the right.
- **Fireplace at dusk.** Slow push toward a finished exterior stacked-stone fireplace on a flagstone
  patio, fire lit, blue hour, warm light on the stone faces, lake behind it out of focus.
- **Wall under construction.** Slow low aerial over a partly built retaining wall: poured footing,
  two or three courses laid, stone staged on pallets, a mixer and tools present but no people.

The third one is the most honest of the set, because it shows the process the site actually
describes, and it is the least likely to read as somebody else's finished job.

## 5. When it comes back

Drop it in Google Drive and say the word. It gets transcoded to two renditions: the desktop file at
the source resolution, and a ~1 MB phone rendition, both wired up the way the current ones are.
