/**
 * Full-page screenshots of built pages at desktop and mobile widths.
 *   node qa/screenshots.mjs            # home only
 *   node qa/screenshots.mjs /about/ /contact/
 *   node qa/screenshots.mjs --all      # every URL in dist/sitemap-0.xml
 *   add --fold for first-viewport captures instead of full-page
 * Serves dist/ with `astro preview`, so run `npm run build` first. Output: qa/screenshots/.
 */
import { spawn } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const PORT = Number(process.env.PORT ?? 4321);
const BASE = `http://localhost:${PORT}`;
const OUT = process.env.OUT ?? 'qa/screenshots';
const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

const args = process.argv.slice(2);
const FOLD = args.includes('--fold');
let paths = args.filter((a) => a.startsWith('/'));
if (args.includes('--all')) {
  const xml = await readFile('dist/sitemap-0.xml', 'utf8');
  paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}
if (paths.length === 0) paths = ['/'];

/** Force lazy images eager, walk the page so every observer fires, wait for images and fonts, return to top. */
async function settle(page) {
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => { img.loading = 'eager'; });
    const step = window.innerHeight;
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
    await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; }))));
    await document.fonts.ready;
  });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(100);
}

const slug = (p) => (p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '--'));

const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'ignore' });
const waitForServer = async () => {
  for (let i = 0; i < 80; i++) {
    try {
      const r = await fetch(`${BASE}/`);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('astro preview did not start');
};

try {
  await waitForServer();
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    for (const p of paths) {
      const res = await page.goto(`${BASE}${p}`, { waitUntil: 'networkidle' });
      await settle(page);
      const file = `${OUT}/${slug(p)}-${name}${FOLD ? '-fold' : ''}.png`;
      await page.screenshot({ path: file, fullPage: !FOLD });
      console.log(`${res?.status() ?? '?'}  ${p}  ->  ${file}`);
    }
    await ctx.close();
  }
  await browser.close();
} finally {
  server.kill();
}
