// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  // Astro 7 strips whitespace between inline elements by default (JSX rules). Keep the
  // markup literal so inline links and buttons never run together; Vercel gzips the rest.
  compressHTML: false,
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
