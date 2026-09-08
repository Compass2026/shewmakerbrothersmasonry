/**
 * Turn the originals in .tmp-originals/ into responsive WebP sets under public/images/projects/full/
 * and add them to public/images/projects/manifest.json. Re-runnable.
 *   node qa/make-photos.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const SRC = '.tmp-originals';
const OUT = 'public/images/projects/full';
const WIDTHS = [640, 960, 1200, 2000, 2800];
mkdirSync(OUT, { recursive: true });

const photos = [
  { id: 'exterior-stone-veneer-wainscot-01', src: 'IMG_9274.jpg', original: 'IMG_9274.HEIC', project: 'new-build-veneer-13', state: 'after', services: ['stone-veneer', 'block-masonry', 'cities'], title: 'Stone veneer wainscot on a new house', caption: 'Natural stone veneer laid as a wainscot under board-and-batten siding.', alt: 'Stone veneer wainscot around the base of a white board-and-batten house under construction' },
  { id: 'new-build-stone-porch-01', src: 'IMG_9282.jpg', original: 'IMG_9282.HEIC', project: 'new-build-veneer-13', state: 'after', services: ['stone-veneer', 'commercial-masonry', 'block-masonry', 'chimney-construction', 'cities'], title: 'Stone porch columns on a new build', caption: 'Stone veneer porch columns and wainscot on a new house, built alongside the builder.', alt: 'Front of a new house under construction with stone veneer porch columns and timber posts' },
  { id: 'garage-stone-veneer-01', src: 'IMG_9284.jpg', original: 'IMG_9284.HEIC', project: 'new-build-veneer-13', state: 'after', services: ['stone-veneer', 'commercial-masonry', 'brick-masonry', 'cities'], title: 'Stone veneer on a garage front', caption: 'Stone veneer wainscot under the garage doors of a new build.', alt: 'New garage with black doors and a stone veneer wainscot below white siding' },
  { id: 'stone-stairs-poured-treads-02', src: 'IMG_9418.jpg', original: 'IMG_9418.HEIC', project: 'stairs-14', state: 'during', services: ['lakefront-stairs', 'retaining-walls', 'concrete', 'masonry-repair', 'chimney-repair'], title: 'Stone stairs with poured treads, in progress', caption: 'Fieldstone risers with fresh poured concrete treads beside a mortared stone wall.', alt: 'Stone stairs under construction with fresh concrete treads climbing beside a mortared stone wall' },
  { id: 'lakefront-wall-rip-rap-01', src: 'IMG_9429.jpg', original: 'IMG_9429.HEIC', project: 'lakefront-wall-15', state: 'after', services: ['lakefront-retaining-walls', 'seawall-repair', 'seawall-construction', 'retaining-walls', 'excavation', 'cities'], title: 'Lakefront stone wall above rip rap', caption: 'Mortared stone retaining wall with rip rap placed along the bank below it.', alt: 'Long mortared stone retaining wall below a lake house with loose rip rap stone along its base' },
  { id: 'concrete-pad-lakefront-01', src: 'IMG_9647.jpg', original: 'IMG_9647.HEIC', project: 'concrete-16', state: 'after', services: ['concrete', 'excavation', 'cities'], title: 'Concrete pad at the water', caption: 'Fresh poured concrete pad at the shoreline, dock and open water behind.', alt: 'Freshly poured concrete pad at the edge of the lake with a dock and open water behind' },
  { id: 'curved-retaining-wall-01', src: 'IMG_9679.jpg', original: 'IMG_9679.HEIC', project: 'curved-wall-17', state: 'after', services: ['retaining-walls', 'lakefront-retaining-walls', 'patios', 'masonry-repair', 'cities'], title: 'Curved retaining wall and stairs', caption: 'Curved mortared stone retaining wall with a poured cap, stairs beside it, lake house above.', alt: 'Curved mortared stone retaining wall with a concrete cap in a lawn below a lake house deck, stairs to the right' },
  { id: 'stone-wall-lake-house-01', src: 'IMG_9757.jpg', original: 'IMG_9757.heic', project: 'lake-house-wall-18', state: 'after', hero: true, services: ['retaining-walls', 'lakefront-retaining-walls', 'stone-veneer', 'indoor-fireplaces', 'outdoor-fireplaces', 'pizza-ovens', 'outdoor-kitchens', 'cities', 'home'], title: 'Stone retaining wall at a lake house', caption: 'Tall mortared stone retaining wall with a poured cap below a lake house.', alt: 'Tall mortared fieldstone retaining wall with a concrete cap in front of a large lake house' },
  { id: 'stone-walls-stairs-ramp-01', src: 'IMG_9759.jpg', original: 'IMG_9759.heic', project: 'lake-house-wall-18', state: 'after', services: ['lakefront-stairs', 'concrete', 'retaining-walls', 'patios', 'cities'], title: 'Stone walls, stairs and a poured walk', caption: 'Mortared stone walls with poured concrete stairs and a sloped walkway between them.', alt: 'Two mortared stone walls flanking poured concrete stairs and a sloped concrete walkway at a lake house' },
  { id: 'flagstone-walkway-01', src: 'IMG_9846.jpg', original: 'IMG_9846.heic', project: 'walkway-19', state: 'after', crop: { left: 0, top: 2600, width: 4284, height: 2678 }, services: ['patios', 'cities'], title: 'Flagstone walkway', caption: 'Flagstone walkway set in mortar across a lawn.', alt: 'Flagstone walkway set in mortar running across a mown lawn' },
  { id: 'seawall-aerial-01', src: 'dji_fly_20260611_120502_394_1781197616493_photo_optimized.jpeg', original: 'DJI_0394.JPG', project: 'seawall-aerial-20', state: 'after', hero: true, services: ['seawall-construction', 'lakefront-retaining-walls', 'lakefront-stairs', 'patios', 'home', 'cities'], title: 'Seawall, stairs and patio from the air', caption: 'Stone seawall, stone stairs and a patio at a lake house, from the drone.', alt: 'Aerial view of a lake house with a stone seawall along the water, stone stairs and a patio, docks below' },
  { id: 'seawall-aerial-02', src: 'dji_fly_20260611_120540_395_1781197615659_photo_optimized.jpeg', original: 'DJI_0395.JPG', project: 'seawall-aerial-20', state: 'after', hero: true, services: ['seawall-construction', 'seawall-repair', 'lakefront-stairs', 'concrete', 'excavation', 'cities', 'home'], title: 'Stone seawall with cap and stairs', caption: 'Mortared stone seawall with a poured cap, stone stairs and a concrete walk, from the drone.', alt: 'Aerial view of a mortared stone seawall with a concrete cap, stairs and walkway at the edge of the water' },
];

const manifest = JSON.parse(readFileSync('public/images/projects/manifest.json', 'utf8'));
manifest.images = manifest.images.filter((i) => !i.id);
for (const p of photos) {
  let base = sharp(`${SRC}/${p.src}`).rotate();
  if (p.crop) base = base.extract(p.crop);
  const meta = await sharp(await base.toBuffer()).metadata();
  const variants = [];
  for (const w of WIDTHS) {
    if (w > meta.width) continue;
    if (w > 2000 && !p.hero) continue;
    const file = `${p.id}-w${w}.webp`;
    const info = await sharp(await base.toBuffer()).resize({ width: w, withoutEnlargement: true }).webp({ quality: w >= 2000 ? 68 : w <= 960 ? 70 : 76 }).toFile(`${OUT}/${file}`);
    variants.push({ w: info.width, h: info.height, file: `full/${file}` });
  }
  const def = variants.find((v) => v.w === 1200) ?? variants[variants.length - 1];
  const { src, crop, ...rest } = p;
  manifest.images.push({ file: def.file, width: def.w, height: def.h, ...rest, variants, usable: 'full' });
  console.log(p.id, variants.map((v) => `${v.w}x${v.h}`).join(' '), `(from ${meta.width}x${meta.height})`);
}
manifest.status = 'Full-resolution originals from Sam (2026-09-08) cover 12 subjects and carry responsive WebP variants under full/. Seventeen 414 px Facebook thumbnails remain for the subjects with no original yet (fireplaces, pizza oven, indoor fireplace, brick arch, the before frames, the crews).';
writeFileSync('public/images/projects/manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log('manifest:', manifest.images.length, 'images');
