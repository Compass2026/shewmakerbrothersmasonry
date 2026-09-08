/**
 * Site logo assets from the badge Sam supplied (.tmp-originals/IMG_9839.PNG).
 * Trims the screenshot's black bars, then writes the sizes the site uses.
 *   node qa/make-logo.mjs
 */
import sharp from 'sharp';
import { mkdirSync, statSync } from 'node:fs';

mkdirSync('public/images/brand', { recursive: true });
const src = sharp('.tmp-originals/IMG_9839.PNG').trim({ threshold: 22 });
const base = await src.toBuffer();
const { width, height } = await sharp(base).metadata();

const outs = [
  { file: 'logo-badge.webp', w: 900, q: 82 },
  { file: 'logo-badge-sm.webp', w: 300, q: 84 },
];
for (const o of outs) {
  const info = await sharp(base).resize({ width: o.w }).webp({ quality: o.q }).toFile(`public/images/brand/${o.file}`);
  console.log(o.file, `${info.width}x${info.height}`, Math.round(statSync(`public/images/brand/${o.file}`).size / 1024) + ' KB');
}
// A JPEG for schema and social cards, where WebP support is less certain.
const og = await sharp(base).resize({ width: 900 }).jpeg({ quality: 86 }).toFile('public/images/brand/logo-badge.jpg');
console.log('logo-badge.jpg', `${og.width}x${og.height}`, Math.round(statSync('public/images/brand/logo-badge.jpg').size / 1024) + ' KB');
console.log('trimmed source', `${width}x${height}`, 'ratio', (width / height).toFixed(3));
