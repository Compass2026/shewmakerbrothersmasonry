/** Contact sheet of candidate crop regions. */
import sharp from 'sharp';
const cands = JSON.parse(process.argv[2]);
const W = 860;
const tiles = []; let y = 0;
for (const [file, label, crop] of cands) {
  const m0 = await sharp('.tmp-originals/' + file).metadata();
  const rot = (m0.orientation ?? 1) >= 5;
  const meta = { width: rot ? m0.height : m0.width, height: rot ? m0.width : m0.height };
  const left = Math.max(0, Math.min(crop[0], meta.width - 200));
  const top = Math.max(0, Math.min(crop[1], meta.height - 200));
  const safe = { left, top, width: Math.min(crop[2], meta.width - left), height: Math.min(crop[3], meta.height - top) };
  const buf = await sharp('.tmp-originals/' + file).rotate().extract(safe).resize({ width: W }).toBuffer();
  const h = (await sharp(buf).metadata()).height;
  const tag = Buffer.from(`<svg width="${W}" height="${h}"><rect y="0" width="${W}" height="26" fill="rgba(0,0,0,.75)"/><text x="8" y="19" font-family="Helvetica" font-size="15" fill="#fff">${label} — ${safe.left},${safe.top} ${safe.width}x${safe.height} (of ${meta.width}x${meta.height})</text></svg>`);
  tiles.push({ input: await sharp(buf).composite([{ input: tag, top: 0, left: 0 }]).toBuffer(), left: 0, top: y });
  y += h + 5;
}
await sharp({ create: { width: W, height: y, channels: 3, background: '#111' } }).composite(tiles).png().toFile('qa/reference/crop-sheet.png');
console.log('sheet', W + 'x' + y);
