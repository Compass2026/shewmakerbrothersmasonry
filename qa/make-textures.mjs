/**
 * Seamless stone tiles cut from the crew's own photographs (never stock): a patch is cropped,
 * mirror-tiled 2x2 so the edges meet, darkened to sit under the palette, and written as WebP.
 *   node qa/make-textures.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const tiles = [
  { name: 'fieldstone', src: 'public/images/projects/lakefront-retaining-wall-detail-01.jpg', crop: { left: 40, top: 55, width: 210, height: 160 }, brightness: 0.5, saturation: 0.9 },
  { name: 'greystone', src: 'public/images/projects/stone-wall-dark-mortar-cap-01.jpg', crop: { left: 150, top: 145, width: 264, height: 125 }, brightness: 0.62, saturation: 0.7 },
];
await mkdir('public/images/textures', { recursive: true });
for (const t of tiles) {
  const base = sharp(t.src).extract(t.crop);
  const buf = await base.toBuffer();
  const flop = await sharp(buf).flop().toBuffer();
  const flip = await sharp(buf).flip().toBuffer();
  const both = await sharp(buf).flip().flop().toBuffer();
  const { width, height } = t.crop;
  const out = `public/images/textures/${t.name}.webp`;
  await sharp({ create: { width: width * 2, height: height * 2, channels: 3, background: '#000' } })
    .composite([
      { input: buf, left: 0, top: 0 },
      { input: flop, left: width, top: 0 },
      { input: flip, left: 0, top: height },
      { input: both, left: width, top: height },
    ])
    .modulate({ brightness: t.brightness, saturation: t.saturation })
    .webp({ quality: 72 })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log(out, `${meta.width}x${meta.height}`, `${Math.round((await sharp(out).toBuffer()).length / 1024)} KB`);
}
