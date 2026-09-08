export type SegmentId =
  | 'shoreline'
  | 'outdoor-living'
  | 'masonry'
  | 'fireplaces-chimneys'
  | 'concrete-sitework'
  | 'commercial';

export interface Segment {
  id: SegmentId;
  name: string;
  /** One line under the segment name on the home services grid. */
  blurb: string;
}

export interface ServiceDef {
  slug: string;
  segment: SegmentId;
  name: string;
  /** Shorter label for menus and footers. */
  navLabel?: string;
  /** Primary keyword from docs/keyword-map.md. */
  keyword: string;
  /** The page H1: primary keyword plus location, in title case. */
  h1: string;
  /** What the page hero needs from Sam before it can be a photograph. */
  heroNeed: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceCopy {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** One paragraph under the H1. Sandstone on dark. */
  lead: string;
  /** Two or three short paragraphs. The work first, then the method, then the lake context. */
  intro: string[];
  /** Method and materials block on lifted ground. */
  method: { heading: string; intro?: string; items: { title: string; body: string }[] };
  /** Additional sections: fold-ins (fire pits, chimney rebuild), consequence-led problems, etc. */
  sections: { heading: string; body: string[] }[];
  /** Three to five questions. Rendered on the one light section of the page. */
  faqs: Faq[];
  related: { services: string[]; cities: string[] };
}

export interface CityDef {
  slug: string;
  name: string;
  tier: 1 | 2;
  counties: string[];
  /** Unincorporated places covered as a section on this page. */
  foldIns?: string[];
  /** Tier 2 page that supports a Tier 1 page rather than competing with it. */
  parent?: string;
  /** Base of operations. */
  base?: boolean;
}

export interface CityCopy {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  intro: string[];
  /** Tier 1 only: lakefront specifics and Ameren permitting, on the light section. */
  lakefront?: { heading: string; body: string[] };
  /** Communities and counties, on lifted ground. */
  communities: { heading: string; body: string[]; list?: string[] };
  /** Service slugs featured on this page, in order. */
  services: string[];
  /** Manifest files shown as project references (no place names in captions). */
  projectRefs: string[];
  faqs?: Faq[];
  /** Unincorporated place covered as a section on this page (Sunrise Beach carries Hurricane Deck). */
  foldIn?: { heading: string; body: string[] };
}

export type Tone = 'ground' | 'lifted' | 'mortar' | 'shadow';
