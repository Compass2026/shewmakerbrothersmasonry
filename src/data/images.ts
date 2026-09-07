import manifest from '../../public/images/projects/manifest.json';

export type ImageState = 'before' | 'during' | 'after' | 'detail';

export interface ProjectImage {
  file: string;
  width: number;
  height: number;
  project: string;
  state: ImageState;
  alt: string;
  description: string;
  services: string[];
  pairsWith?: string;
  hero?: boolean;
  original?: string;
  usable: string;
}

export const images = manifest.images as ProjectImage[];
export const manifestStatus = manifest.status as string;

export const imageSrc = (file: string) => `/images/projects/${file}`;
export const imageByFile = (file: string) => images.find((i) => i.file === file);
export const imagesFor = (tag: string) => images.filter((i) => i.services.includes(tag));

/** Before/after pairs from the same project only. Never pair images across projects. */
export const pairs = images
  .filter((i) => i.state === 'before' && i.pairsWith)
  .map((before) => ({ before, after: imageByFile(before.pairsWith!)! }))
  .filter((p) => p.after && p.after.project === p.before.project);
