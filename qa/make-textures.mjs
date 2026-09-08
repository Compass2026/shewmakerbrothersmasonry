/**
 * Stone tiles cut from the crew's own photographs (never stock). Needs .tmp-originals/IMG_9757.jpg (Drive).
 * `stonewall.webp`: two different patches of wall, cross-faded into a seamless tile (no mirror symmetry).
 * `greystone.webp`: a dark grey face for block backgrounds, mirror-tiled and darkened (it sits at 10%).
 *   node qa/make-textures.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images/textures', { recursive: true });

/** Alpha ramp so a patch fades in from one side. */
async function feathered(buf, w, h, side, len) {
  const mask = Buffer.alloc(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const t = side === 'left' ? x / len : y / len;
    mask[y * w + x] = Math.round(Math.min(1, Math.max(0, t)) * 255);
  }
  const maskPng = await sharp(mask, { raw: { width: w, height: h, channels: 1 } }).png().toBuffer();
  return sharp(buf).ensureAlpha().composite([{ input: maskPng, blend: 'dest-in' }]).png().toBuffer();
}

/** Seamless n-by-n tile from patches of equal size, cross-faded at every seam, wrapping at the edges. */
async function blendRow(patches, w, h, f) {
  const n = patches.length, W = n * w - n * f;
  const tail = await sharp(patches[n - 1]).extract({ left: w - f, top: 0, width: f, height: h }).png().toBuffer();
  const layers = [{ input: tail, left: 0, top: 0 }];
  for (let i = 0; i < n; i++) layers.push({ input: await feathered(patches[i], w, h, 'left', f), left: i * (w - f), top: 0 });
  return sharp({ create: { width: W, height: h, channels: 4, background: '#000' } }).composite(layers).png().toBuffer();
}
async function blendTile(rows, w, h, f) {
  const n = rows.length, W = rows[0].length * w - rows[0].length * f, H = n * h - n * f;
  const built = [];
  for (const r of rows) built.push(await blendRow(r, w, h, f));
  const tail = await sharp(built[n - 1]).extract({ left: 0, top: h - f, width: W, height: f }).png().toBuffer();
  const layers = [{ input: tail, left: 0, top: 0 }];
  for (let i = 0; i < n; i++) layers.push({ input: await feathered(built[i], W, h, 'top', f), left: 0, top: i * (h - f) });
  return sharp({ create: { width: W, height: H, channels: 4, background: '#000' } }).composite(layers).removeAlpha();
}

// The stone tile now comes from the full-resolution wall (IMG_9757) at native scale.
const w = 900, h = 700, f = 120;
const cut = (file, left, top, mod) => sharp(file).rotate().extract({ left, top, width: w, height: h }).modulate(mod).png().toBuffer();
const WALL = '.tmp-originals/IMG_9757.jpg';
const A = await cut(WALL, 900, 2250, { brightness: 1.06, saturation: 1.06 });
const B = await cut(WALL, 2350, 2200, { brightness: 1.06, saturation: 1.06 });
const C = await cut(WALL, 3850, 2250, { brightness: 1.06, saturation: 1.06 });
const flop = (b) => sharp(b).flop().png().toBuffer();
const flip = (b) => sharp(b).flip().png().toBuffer();
const rows = [
  [A, B, C],
  [await flop(A), await flip(C), await flop(B)],
  [await sharp(B).flip().flop().png().toBuffer(), await flop(C), await flip(A)],
];
const wall = await blendTile(rows, w, h, f);
const wallBuf = await wall.png().toBuffer();
const wm = await sharp(wallBuf).metadata();
await sharp(wallBuf).resize({ width: 760 }).webp({ quality: 70 }).toFile('public/images/textures/stonewall.webp');
{ const mm = await sharp('public/images/textures/stonewall.webp').metadata(); console.log('stonewall.webp', `${mm.width}x${mm.height}`, 'from', `${wm.width}x${wm.height}`); }

// The wall itself, uncut, for the stone walls and courses. Two sizes: phones never fetch the wide one.
const cover = sharp(WALL).rotate().extract({ left: 1300, top: 1750, width: 3800, height: 1500 }).modulate({ brightness: 1.04, saturation: 1.06 });
await sharp(await cover.toBuffer()).resize({ width: 2000 }).webp({ quality: 66 }).toFile('public/images/textures/stone-cover.webp');
await sharp(await cover.toBuffer()).resize({ width: 900 }).webp({ quality: 64 }).toFile('public/images/textures/stone-cover-sm.webp');
const course = sharp(WALL).rotate().extract({ left: 700, top: 2500, width: 5000, height: 700 }).modulate({ brightness: 1.06, saturation: 1.06 });
await sharp(await course.toBuffer()).resize({ width: 1800 }).webp({ quality: 66 }).toFile('public/images/textures/stone-course.webp');
await sharp(await course.toBuffer()).resize({ width: 800 }).webp({ quality: 64 }).toFile('public/images/textures/stone-course-sm.webp');
for (const f of ['stone-cover', 'stone-cover-sm', 'stone-course', 'stone-course-sm']) {
  const st = fs.statSync(`public/images/textures/${f}.webp`);
  console.log(f + '.webp', Math.round(st.size / 1024) + ' KB');
}

// grey block face (mirror-tiled, darkened; used at 10% so symmetry never shows)
{
  const crop = { left: 150, top: 145, width: 264, height: 125 };
  const buf = await sharp('public/images/projects/stone-wall-dark-mortar-cap-01.jpg').extract(crop).toBuffer();
  const flop = await sharp(buf).flop().toBuffer(), flip = await sharp(buf).flip().toBuffer(), both = await sharp(buf).flip().flop().toBuffer();
  await sharp({ create: { width: crop.width * 2, height: crop.height * 2, channels: 3, background: '#000' } })
    .composite([{ input: buf, left: 0, top: 0 }, { input: flop, left: crop.width, top: 0 }, { input: flip, left: 0, top: crop.height }, { input: both, left: crop.width, top: crop.height }])
    .modulate({ brightness: 0.62, saturation: 0.7 }).webp({ quality: 72 }).toFile('public/images/textures/greystone.webp');
  console.log('greystone.webp', `${crop.width * 2}x${crop.height * 2}`);
}
