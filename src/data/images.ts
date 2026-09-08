import manifest from '../../public/images/projects/manifest.json';

export type ImageState = 'before' | 'during' | 'after' | 'detail';

export interface ImageVariant {
  w: number;
  h: number;
  file: string;
}

export interface ProjectImage {
  /** Stable id for originals; thumbnails are addressed by file name. */
  id?: string;
  file: string;
  width: number;
  height: number;
  project: string;
  state: ImageState;
  alt: string;
  /** What was built, for the card H3. */
  title: string;
  /** One line naming material and method, for the card caption. Never a place name. */
  caption: string;
  description: string;
  services: string[];
  pairsWith?: string;
  hero?: boolean;
  original?: string;
  usable: string;
  /** Responsive WebP set for full-resolution originals. */
  variants?: ImageVariant[];
}

export const images = manifest.images as ProjectImage[];
export const manifestStatus = manifest.status as string;

export const imageSrc = (file: string) => `/images/projects/${file}`;
export const imageByFile = (key: string) => images.find((i) => i.file === key || i.id === key);
export const imageSrcSet = (img: ProjectImage) => (img.variants ? img.variants.map((v) => `/images/projects/${v.file} ${v.w}w`).join(', ') : undefined);
/** Largest variant at or under `max` px wide, for backgrounds. */
export const imageLarge = (img: ProjectImage, max = 2000) => { const v = img.variants?.filter((x) => x.w <= max).at(-1); return imageSrc(v ? v.file : img.file); };
export const isOriginal = (img: ProjectImage) => Boolean(img.variants);
export const imagesFor = (tag: string) => images.filter((i) => i.services.includes(tag));

/** Before/after pairs from the same project only. Never pair images across projects. */
export const pairs = images
  .filter((i) => i.state === 'before' && i.pairsWith)
  .map((before) => ({ before, after: imageByFile(before.pairsWith!)! }))
  .filter((p) => p.after && p.after.project === p.before.project);
