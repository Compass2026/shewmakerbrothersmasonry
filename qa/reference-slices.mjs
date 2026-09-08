/** Viewport-sized slices of a reference site with entrance animations forced visible. */
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const [url, prefix] = process.argv.slice(2);
await mkdir('qa/reference', { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; } [class*="reveal"], [class*="fade"], [data-aos], .aos-init, [style*="opacity"] { opacity: 1 !important; transform: none !important; visibility: visible !important; }' });
await page.evaluate(async () => {
  document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = 'eager'));
  for (let y = 0; y <= document.documentElement.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 150)); }
  document.querySelectorAll('*').forEach((el) => { const s = getComputedStyle(el); if (s.opacity === '0' && el.getBoundingClientRect().height > 20) { el.style.setProperty('opacity', '1', 'important'); el.style.setProperty('transform', 'none', 'important'); } });
  window.scrollTo(0, 0); await new Promise((r) => setTimeout(r, 300));
});
const total = await page.evaluate(() => document.documentElement.scrollHeight);
let n = 0;
for (let y = 0; y < total; y += 850) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(250);
  await page.screenshot({ path: `qa/reference/${prefix}-${String(n).padStart(2, '0')}.png` });
  n++;
}
console.log(prefix, 'slices:', n, 'height', total);
await browser.close();
