/**
 * schema.org JSON-LD builders. Every node reads from src/config/site.ts so the NAP in schema
 * never drifts from the footer. No street address, no opening hours, no price range: those are
 * either forbidden (address) or unconfirmed (hours) per docs/placeholders.md.
 */
import { site, absoluteUrl } from '@/config/site';
import { cities } from '@/data/cities';

export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

export const areaServed = () => [
  ...cities.map((c) => ({ '@type': 'City', name: `${c.name}, Missouri` })),
  ...site.counties.map((c) => ({ '@type': 'AdministrativeArea', name: `${c} County, Missouri` })),
  { '@type': 'Place', name: site.market },
];

export const businessNode = () => ({
  '@type': 'HomeAndConstructionBusiness',
  '@id': BUSINESS_ID,
  name: site.name,
  url: `${site.url}/`,
  telephone: site.phone.e164,
  image: absoluteUrl(site.logo.raster),
  logo: absoluteUrl(site.logo.raster),
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.base.locality,
    addressRegion: site.base.region,
    addressCountry: site.base.country,
  },
  areaServed: areaServed(),
  founder: site.owners.map((o) => ({ '@type': 'Person', name: o.name })),
  sameAs: [site.social.facebook, site.social.googleBusinessProfile].filter(Boolean),
});

export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${site.url}/`,
  name: site.name,
  publisher: { '@id': BUSINESS_ID },
});

export const webPageNode = (opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}) => ({
  '@type': opts.type ?? 'WebPage',
  '@id': `${absoluteUrl(opts.path)}#webpage`,
  url: absoluteUrl(opts.path),
  name: opts.name,
  description: opts.description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  inLanguage: 'en-US',
});

export const serviceNode = (opts: { path: string; name: string; description: string; serviceType?: string }) => ({
  '@type': 'Service',
  '@id': `${absoluteUrl(opts.path)}#service`,
  name: opts.name,
  serviceType: opts.serviceType ?? opts.name,
  description: opts.description,
  url: absoluteUrl(opts.path),
  provider: { '@id': BUSINESS_ID },
  areaServed: areaServed(),
});

export const breadcrumbNode = (items: { name: string; href: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.href),
  })),
});

export const faqNode = (faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
