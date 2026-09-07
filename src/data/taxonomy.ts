import type { Segment, SegmentId, ServiceDef } from './types';

/** Six segments, in the order they appear on the home page and in the Services menu. */
export const segments: Segment[] = [
  { id: 'shoreline', name: 'Shoreline & lakefront', blurb: 'Seawalls, lakefront walls and stairs to the water, on footings.' },
  { id: 'outdoor-living', name: 'Outdoor living', blurb: 'Fireplaces, pizza ovens, kitchens and flagstone patios.' },
  { id: 'masonry', name: 'Masonry & stonework', blurb: 'Stone veneer, brick, block, retaining walls and repairs.' },
  { id: 'fireplaces-chimneys', name: 'Fireplaces & chimneys', blurb: 'Chimney repair and rebuilds, new chimneys, indoor fireplaces.' },
  { id: 'concrete-sitework', name: 'Concrete & site work', blurb: 'Flatwork and excavation, run by our own crews.' },
  { id: 'commercial', name: 'Commercial', blurb: 'Masonry for builders, business owners and HOAs.' },
];

/** Nineteen canonical services from docs/keyword-map.md. One page, one primary keyword each. */
export const services: ServiceDef[] = [
  // Shoreline & lakefront
  { slug: 'seawall-construction', segment: 'shoreline', name: 'Stone seawall construction', navLabel: 'Stone seawalls', keyword: 'seawall construction lake of the ozarks', h1: 'Stone Seawall Construction at the Lake of the Ozarks', heroNeed: 'Finished stone seawall with the lake house above and water in frame, uncropped original at 2400 px, summer light if there is one.' },
  { slug: 'seawall-repair', segment: 'shoreline', name: 'Seawall repair and rebuild', navLabel: 'Seawall repair', keyword: 'seawall repair lake of the ozarks', h1: 'Seawall Repair and Rebuild at the Lake of the Ozarks', heroNeed: 'Before and after of a failed shoreline: the eroded bank, then the finished mortared stone wall, from the same spot.' },
  { slug: 'lakefront-retaining-walls', segment: 'shoreline', name: 'Lakefront retaining walls', keyword: 'lakefront retaining wall lake of the ozarks', h1: 'Lakefront Retaining Walls at the Lake of the Ozarks', heroNeed: 'Finished lakefront retaining wall seen from the water, uncropped original at 2400 px.' },
  { slug: 'lakefront-stairs', segment: 'shoreline', name: 'Lakefront stone stairs and pathways', navLabel: 'Lakefront stairs', keyword: 'stone steps to dock lake of the ozarks', h1: 'Lakefront Stone Stairs and Pathways at the Lake of the Ozarks', heroNeed: 'Stone stairs running down to a dock with the water in frame, uncropped original at 2400 px.' },
  // Outdoor living
  { slug: 'outdoor-fireplaces', segment: 'outdoor-living', name: 'Outdoor fireplaces', keyword: 'outdoor fireplace builder lake of the ozarks', h1: 'Outdoor Fireplace Builder at the Lake of the Ozarks', heroNeed: 'The outdoor fireplace, uncropped original at 2400 px; an evening or in-use shot if there is one.' },
  { slug: 'pizza-ovens', segment: 'outdoor-living', name: 'Pizza ovens', keyword: 'outdoor pizza oven builder missouri', h1: 'Outdoor Pizza Oven Builder at the Lake of the Ozarks, Missouri', heroNeed: 'The pizza oven, uncropped original, close enough to read the oven mouth and the stone.' },
  { slug: 'outdoor-kitchens', segment: 'outdoor-living', name: 'Outdoor kitchens and built-in grills', navLabel: 'Outdoor kitchens', keyword: 'outdoor kitchen builder lake of the ozarks', h1: 'Outdoor Kitchen Builder at the Lake of the Ozarks', heroNeed: 'A finished outdoor kitchen with counters and a built-in grill, uncropped original at 2400 px.' },
  { slug: 'patios', segment: 'outdoor-living', name: 'Stone patios and walkways', navLabel: 'Patios and walkways', keyword: 'flagstone patio lake of the ozarks', h1: 'Flagstone Patios and Walkways at the Lake of the Ozarks', heroNeed: 'The finished flagstone patio (the one photographed in progress), uncropped original at 2400 px.' },
  // Masonry & stonework
  { slug: 'stone-veneer', segment: 'masonry', name: 'Natural stone veneer', navLabel: 'Stone veneer', keyword: 'stone veneer contractor lake of the ozarks', h1: 'Stone Veneer Contractor at the Lake of the Ozarks', heroNeed: 'Exterior stone veneer on a house, uncropped original at 2400 px.' },
  { slug: 'brick-masonry', segment: 'masonry', name: 'Brick masonry', keyword: 'brick mason lake of the ozarks', h1: 'Brick Mason at the Lake of the Ozarks', heroNeed: 'A brick project exterior, uncropped original, plus what the arched doorway project was.' },
  { slug: 'block-masonry', segment: 'masonry', name: 'Block and structural masonry', navLabel: 'Block masonry', keyword: 'block masonry contractor lake of the ozarks', h1: 'Block Masonry Contractor at the Lake of the Ozarks', heroNeed: 'Block or structural masonry, in progress or finished, uncropped original.' },
  { slug: 'retaining-walls', segment: 'masonry', name: 'Retaining walls', keyword: 'retaining wall contractor lake of the ozarks', h1: 'Retaining Wall Contractor at the Lake of the Ozarks', heroNeed: 'A finished retaining wall, uncropped original; before and after of a failed wall if there is one.' },
  { slug: 'masonry-repair', segment: 'masonry', name: 'Masonry repair and tuckpointing', navLabel: 'Masonry repair', keyword: 'masonry repair lake of the ozarks', h1: 'Masonry Repair and Tuckpointing at the Lake of the Ozarks', heroNeed: 'Tuckpointing or repointing, before and after, uncropped originals.' },
  // Fireplaces & chimneys
  { slug: 'chimney-repair', segment: 'fireplaces-chimneys', name: 'Chimney repair and rebuilding', navLabel: 'Chimney repair', keyword: 'chimney repair lake of the ozarks', h1: 'Chimney Repair at the Lake of the Ozarks', heroNeed: 'Chimney repair, before and after, uncropped originals.' },
  { slug: 'chimney-construction', segment: 'fireplaces-chimneys', name: 'New chimney construction', navLabel: 'New chimneys', keyword: 'chimney builder lake of the ozarks', h1: 'Chimney Builder at the Lake of the Ozarks', heroNeed: 'A new chimney exterior, uncropped original at 2400 px.' },
  { slug: 'indoor-fireplaces', segment: 'fireplaces-chimneys', name: 'Indoor fireplaces', keyword: 'fireplace builder lake of the ozarks', h1: 'Fireplace Builder at the Lake of the Ozarks', heroNeed: 'The indoor stacked-stone fireplace, uncropped original at 2400 px.' },
  // Concrete & site work
  { slug: 'concrete', segment: 'concrete-sitework', name: 'Concrete flatwork', navLabel: 'Concrete', keyword: 'concrete contractor lake of the ozarks', h1: 'Concrete Contractor at the Lake of the Ozarks', heroNeed: 'Concrete flatwork: a slab, driveway or patio pour, uncropped original at 2400 px.' },
  { slug: 'excavation', segment: 'concrete-sitework', name: 'Excavation and site prep', navLabel: 'Excavation', keyword: 'excavation contractor lake of the ozarks', h1: 'Excavation Contractor at the Lake of the Ozarks', heroNeed: 'Excavation or site prep with equipment on site, uncropped original at 2400 px.' },
  // Commercial
  { slug: 'commercial-masonry', segment: 'commercial', name: 'Commercial masonry', keyword: 'commercial masonry contractor lake of the ozarks', h1: 'Commercial Masonry Contractor at the Lake of the Ozarks', heroNeed: 'A commercial project exterior, uncropped original at 2400 px.' },
];

export const segmentById = (id: SegmentId) => segments.find((s) => s.id === id)!;
export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const servicesBySegment = (id: SegmentId) => services.filter((s) => s.segment === id);
export const servicePath = (slug: string) => `/${slug}/`;
