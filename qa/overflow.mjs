/** Reports elements wider than a 390px viewport on key pages (horizontal overflow check). Run after npm run build. */
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';
import fs from 'node:fs';
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
for (let i = 0; i < 80; i++) { try { if ((await fetch('http://localhost:4321/')).ok) break; } catch {} await new Promise(r => setTimeout(r, 250)); }
try {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  for (const p of paths) {
    await page.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
    const r = await page.evaluate(() => {
      const wide = [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 391 || e.scrollWidth > e.clientWidth + 2 && getComputedStyle(e).overflowX === 'visible');
      return { scrollWidth: document.documentElement.scrollWidth, items: wide.slice(0, 8).map(e => `${e.tagName.toLowerCase()}.${String(e.className).split(' ').slice(0,2).join('.')} right=${Math.round(e.getBoundingClientRect().right)} w=${Math.round(e.getBoundingClientRect().width)}`) };
    });
    if (r.scrollWidth > 390) { console.log('OVERFLOW', p, r.scrollWidth, r.items); process.exitCode = 2; }
  }
  console.log(`${paths.length} pages measured at 390px`);
  await browser.close();
} finally { server.kill(); }
