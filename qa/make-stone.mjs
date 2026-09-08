/**
 * Masonry assets, cut from Sam's full-resolution photographs (never stock, never generated).
 *   node qa/make-stone.mjs
 *
 * wall-face  the primary coursed wall: cool mortar joints, warm tan and cream stones, light from
 *            the upper left (IMG_9757)
 * wall-big   larger, more sculptural stones with deep joints, for frames and piers (IMG_9418)
 * cap-top    poured concrete, the lit top face of every capstone and ledge (IMG_9647)
 * edge-mask  a seamless irregular silhouette so a course ends on stone contours, not a straight line
 */
import sharp from 'sharp';
import { mkdirSync, writeFileSync, statSync } from 'node:fs';

const OUT = 'public/images/stone';
mkdirSync(OUT, { recursive: true });

const dims = async (f) => {
  const m = await sharp(f).metadata();
  const rot = (m.orientation ?? 1) >= 5;
  return { width: rot ? m.height : m.width, height: rot ? m.width : m.height };
};

const sets = [
  { name: 'wall-face', src: 'IMG_9757.jpg', crop: { left: 1600, top: 2050, width: 3400, height: 620 }, widths: [1200, 2000, 3000], mod: { brightness: 1.05, saturation: 1.02 } },
  { name: 'wall-big', src: 'IMG_9679.jpg', crop: { left: 1000, top: 2330, width: 3600, height: 620 }, widths: [1200, 2200], mod: { brightness: 1.06, saturation: 1.0 } },
  { name: 'pier-face', src: 'IMG_9757.jpg', crop: { left: 2050, top: 1900, width: 780, height: 1250 }, widths: [520, 900], mod: { brightness: 1.06, saturation: 1.02 } },
  { name: 'cap-top', src: 'IMG_9759.jpg', crop: { left: 2500, top: 2650, width: 2000, height: 380 }, widths: [1200, 2400], mod: { brightness: 1.0, saturation: 0.9 } },
];

for (const s of sets) {
  const file = `.tmp-originals/${s.src}`;
  const d = await dims(file);
  const left = Math.max(0, Math.min(s.crop.left, d.width - 200));
  const top = Math.max(0, Math.min(s.crop.top, d.height - 200));
  const crop = { left, top, width: Math.min(s.crop.width, d.width - left), height: Math.min(s.crop.height, d.height - top) };
  const base = await sharp(file).rotate().extract(crop).modulate(s.mod).toBuffer();
  for (const w of s.widths) {
    const out = `${OUT}/${s.name}-${w}.webp`;
    const info = await sharp(base).resize({ width: w }).webp({ quality: w >= 2400 ? 68 : 74 }).toFile(out);
    console.log(`${s.name}-${w}.webp  ${info.width}x${info.height}  ${Math.round(statSync(out).size / 1024)} KB`);
  }
}

/**
 * Seamless irregular bottom edge. Stones of varied width step down to varied depths, with a
 * chipped corner on each, and the first and last course line up so the strip tiles.
 */
function edgeMask({ width = 1200, height = 56, seed = 7 } = {}) {
  let s = seed;
  const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const startY = 14;
  const pts = [`M0,0`, `H${width}`, `V${startY}`];
  let x = width;
  const segs = [];
  while (x > 0) {
    const w = Math.round(64 + rnd() * 96);
    segs.push(Math.min(w, x));
    x -= w;
  }
  let cx = width;
  for (let i = 0; i < segs.length; i++) {
    const last = i === segs.length - 1;
    const w = last ? cx : segs[i];
    const nx = cx - w;
    const depth = last ? startY : Math.round(8 + rnd() * (height - 16));
    const chip = Math.round(3 + rnd() * 7);
    // down the side of the stone, a chipped corner, then across its underside
    pts.push(`L${cx},${depth}`);
    pts.push(`L${cx - chip},${depth + (rnd() > 0.5 ? 3 : -3)}`);
    pts.push(`L${nx + chip},${depth + (rnd() > 0.5 ? 2 : -2)}`);
    pts.push(`L${nx},${last ? startY : depth}`);
    cx = nx;
  }
  pts.push('Z');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><path d="${pts.join(' ')}" fill="#fff"/></svg>`;
}
writeFileSync(`${OUT}/edge-bottom.svg`, edgeMask({ seed: 7 }));
writeFileSync(`${OUT}/edge-top.svg`, edgeMask({ seed: 23 }).replace('<path', '<g transform="translate(0,56) scale(1,-1)"><path').replace('</svg>', '</g></svg>'));
console.log('edge-bottom.svg, edge-top.svg written');

// The faint face behind cards: the darker wall, well out of focus at 10% opacity.
{
  const crop = { left: 1600, top: 2100, width: 2200, height: 1050 };
  await sharp('.tmp-originals/IMG_9757.jpg').rotate().extract(crop).resize({ width: 520 })
    .modulate({ brightness: 0.62, saturation: 0.7 }).webp({ quality: 70 })
    .toFile(`${OUT}/block-face.webp`);
  console.log('block-face.webp 520 wide,', Math.round(statSync(`${OUT}/block-face.webp`).size / 1024) + ' KB');
}
