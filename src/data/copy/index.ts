import type { CityCopy, ServiceCopy } from '@/data/types';

const serviceModules = import.meta.glob<{ copy: ServiceCopy }>('./services/*.ts', { eager: true });
const cityModules = import.meta.glob<{ copy: CityCopy }>('./cities/*.ts', { eager: true });

export const serviceCopies: Record<string, ServiceCopy> = Object.fromEntries(
  Object.values(serviceModules).map((m) => [m.copy.slug, m.copy]),
);
export const cityCopies: Record<string, CityCopy> = Object.fromEntries(
  Object.values(cityModules).map((m) => [m.copy.slug, m.copy]),
);

export const serviceCopy = (slug: string): ServiceCopy => {
  const c = serviceCopies[slug];
  if (!c) throw new Error(`Missing service copy for /${slug}/ (src/data/copy/services/${slug}.ts)`);
  return c;
};
export const cityCopy = (slug: string): CityCopy => {
  const c = cityCopies[slug];
  if (!c) throw new Error(`Missing city copy for /service-area/${slug}/ (src/data/copy/cities/${slug}.ts)`);
  return c;
};
