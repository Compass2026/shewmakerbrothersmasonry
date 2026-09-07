import type { APIRoute } from 'astro';
import { site } from '@/config/site';

export const GET: APIRoute = () => {
  const body =
    site.env === 'production'
      ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`
      : `# Staging: not for indexing.\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
