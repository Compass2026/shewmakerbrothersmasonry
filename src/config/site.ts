/**
 * Single source of truth for everything that is configuration rather than design or copy:
 * the business name, phone, base town, counties, CTA labels, social links and the site URL.
 * Components, schema, the footer and the sitemap all read from here. Never hard-code these.
 *
 * Placeholder values are documented in docs/placeholders.md, section E.
 */

const STAGING_URL = 'https://shewmakerbrothersmasonry.vercel.app';

const envUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const site = {
  name: 'Shewmaker Brothers Masonry',

  /** Production domain: not decided. Stays null until Tom decides (placeholders.md, E). */
  productionDomain: null as string | null,

  /** Absolute origin used for canonical URLs, schema and the sitemap. */
  url: (envUrl ?? STAGING_URL).replace(/\/$/, ''),

  /**
   * 'staging' keeps every page noindex and robots.txt closed.
   * Set SITE_ENV=production in Vercel only on the live domain.
   */
  env: (process.env.SITE_ENV === 'production' ? 'production' : 'staging') as 'staging' | 'production',

  tagline: 'Third-generation stonemasons at the Lake of the Ozarks',
  positioning:
    'Third-generation stonemasons at the Lake of the Ozarks who build the shoreline, the fireplace and the ground it all sits on, with their own crews, start to finish.',
  description:
    'Stone seawalls, retaining walls, outdoor fireplaces, chimneys, concrete flatwork and excavation at the Lake of the Ozarks. Family owned, third generation. Call Sam at 573-569-3690.',

  market: 'Lake of the Ozarks',
  base: { locality: 'Gravois Mills', region: 'MO', regionName: 'Missouri', country: 'US' },
  counties: ['Camden', 'Miller', 'Morgan'] as const,

  phone: { display: '573-569-3690', e164: '+15735693690', contact: 'Sam' },

  cta: {
    primary: 'Call Sam at 573-569-3690',
    secondary: 'Get an estimate',
    secondaryHref: '/contact/',
  },

  owners: [{ name: 'Mike Shewmaker' }, { name: 'Sam Shewmaker' }],

  /** No email or form endpoint has been supplied. Phone-first until Tom decides. */
  email: '',
  formEndpoint: '',
  /** Business hours are unknown. Omitted from the site and from schema until Sam confirms. */
  hours: null as string[] | null,

  social: {
    facebook: 'https://www.facebook.com/shewmakerbrothersmasonry',
    /** Google Business Profile does not exist yet. */
    googleBusinessProfile: '',
  },

  logo: {
    badge: '/images/brand/logo-badge-414.jpg',
    width: 414,
    height: 414,
    alt: 'Shewmaker Brothers Masonry badge',
  },

  /** Top-level navigation after the Services menu. */
  nav: [
    { label: 'Projects', href: '/projects/' },
    { label: 'Service area', href: '/service-area/' },
    { label: 'About', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;

export type Site = typeof site;

export const telHref = `tel:${site.phone.e164}`;
export const absoluteUrl = (path: string) => new URL(path, `${site.url}/`).toString();
