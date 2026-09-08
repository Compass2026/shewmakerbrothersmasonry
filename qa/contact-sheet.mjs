/** Contact sheet of the raw originals for review: node qa/contact-sheet.mjs <dir> <out.png> */
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
const [dir, out] = process.argv.slice(2);
const files = readdirSync(dir).filter((f) => /\.(jpe?g)$/i.test(f)).sort();
const W = 520, H = 390, COLS = 3;
const tiles = [];
for (let i = 0; i < files.length; i++) {
  const img = await sharp(join(dir, files[i])).rotate().resize(W, H, { fit: 'cover' }).toBuffer();
  const label = Buffer.from(`<svg width="${W}" height="${H}"><rect x="0" y="${H - 34}" width="${W}" height="34" fill="rgba(0,0,0,.65)"/><text x="10" y="${H - 11}" font-family="Helvetica" font-size="20" fill="#fff">${i + 1}. ${files[i]}</text></svg>`);
  tiles.push({ input: await sharp(img).composite([{ input: label, left: 0, top: 0 }]).toBuffer(), left: (i % COLS) * (W + 8), top: Math.floor(i / COLS) * (H + 8) });
}
const rows = Math.ceil(files.length / COLS);
await sharp({ create: { width: COLS * (W + 8), height: rows * (H + 8), channels: 3, background: '#111' } }).composite(tiles).png().toFile(out);
console.log(out, files.length, 'images');
