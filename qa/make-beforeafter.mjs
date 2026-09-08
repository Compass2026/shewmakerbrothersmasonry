/**
 * The before/after slider pair: one fireplace, same room, same camera position, mid-build and
 * finished. Crops are aligned so the wipe lands on the same stonework.
 *   node qa/make-beforeafter.mjs [--preview]
 */
import sharp from 'sharp';
import { mkdirSync, statSync } from 'node:fs';

const OUT = 'public/images/projects/full';
mkdirSync(OUT, { recursive: true });
const WIDTHS = [640, 960, 1400];

// Measured against a 900-wide preview of each frame (source is 3024x4032 after rotation).
const pair = [
  { id: 'fireplace-build-during-01', src: 'IMG_5730.jpg', crop: { left: 538, top: 1042, width: 1478, height: 2218 } },
  { id: 'fireplace-build-after-01', src: 'D0DD3C95-1145-4CE0-9CE1-551C7BC8814B.jpg', crop: { left: 312, top: 1374, width: 1529, height: 2291 } },
];

const out = [];
for (const p of pair) {
  const base = await sharp(`.tmp-originals/${p.src}`).rotate().extract(p.crop).toBuffer();
  const variants = [];
  for (const w of WIDTHS) {
    const file = `${p.id}-w${w}.webp`;
    const info = await sharp(base).resize({ width: w, height: Math.round((w * 3) / 2), fit: 'cover' }).webp({ quality: w >= 1400 ? 72 : 78 }).toFile(`${OUT}/${file}`);
    variants.push({ w: info.width, h: info.height, file: `full/${file}` });
  }
  console.log(p.id, variants.map((v) => `${v.w}x${v.h}`).join(' '), Math.round(statSync(`${OUT}/${p.id}-w1400.webp`).size / 1024) + ' KB');
  out.push({ ...p, variants });
}

if (process.argv.includes('--preview')) {
  const [a, b] = out.map((p) => `${OUT}/${p.id}-w960.webp`);
  const W = 640, H = 960;
  const ra = await sharp(a).resize(W, H, { fit: 'cover' }).toBuffer();
  const rb = await sharp(b).resize(W, H, { fit: 'cover' }).toBuffer();
  const half = await sharp(rb).extract({ left: W / 2, top: 0, width: W / 2, height: H }).toBuffer();
  await sharp({ create: { width: W * 3 + 12, height: H, channels: 3, background: '#111' } })
    .composite([
      { input: ra, left: 0, top: 0 },
      { input: rb, left: W + 6, top: 0 },
      { input: ra, left: W * 2 + 12, top: 0 },
      { input: half, left: W * 2 + 12 + W / 2, top: 0 },
      { input: Buffer.from(`<svg width="4" height="${H}"><rect width="4" height="${H}" fill="#F2A81D"/></svg>`), left: W * 2 + 12 + W / 2 - 2, top: 0 },
    ]).png().toFile('/tmp/ba-preview.png');
  console.log('preview at /tmp/ba-preview.png (during | after | wipe test)');
}
