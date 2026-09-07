import type { CityDef } from './types';

/** Ten locations from docs/keyword-map.md. Hurricane Deck folds into Sunrise Beach and the service-area page. */
export const cities: CityDef[] = [
  { slug: 'osage-beach', name: 'Osage Beach', tier: 1, counties: ['Camden', 'Miller'] },
  { slug: 'lake-ozark', name: 'Lake Ozark', tier: 1, counties: ['Miller', 'Camden'] },
  { slug: 'camdenton', name: 'Camdenton', tier: 1, counties: ['Camden'] },
  { slug: 'sunrise-beach', name: 'Sunrise Beach', tier: 1, counties: ['Camden'], foldIns: ['Hurricane Deck'] },
  { slug: 'horseshoe-bend', name: 'Horseshoe Bend', tier: 2, counties: ['Camden'], parent: 'lake-ozark' },
  { slug: 'gravois-mills', name: 'Gravois Mills', tier: 2, counties: ['Morgan'], base: true },
  { slug: 'laurie', name: 'Laurie', tier: 2, counties: ['Morgan'] },
  { slug: 'eldon', name: 'Eldon', tier: 2, counties: ['Miller'] },
  { slug: 'versailles', name: 'Versailles', tier: 2, counties: ['Morgan'] },
];

export const foldIns = [{ name: 'Hurricane Deck', anchor: '/service-area/sunrise-beach/#hurricane-deck' }];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
export const cityPath = (slug: string) => `/service-area/${slug}/`;
export const tier1 = cities.filter((c) => c.tier === 1);
export const tier2 = cities.filter((c) => c.tier === 2);
