/** Probe a reference site for parallax technique: fixed backgrounds, transforms on scroll. */
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
await mkdir('qa/reference', { recursive: true });
const url = process.argv[2];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);
const probe = await page.evaluate(() => {
  const out = { fixedBg: [], clipTricks: [], sticky: [], transformed: [] };
  document.querySelectorAll('*').forEach((el) => {
    const s = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (s.backgroundAttachment === 'fixed' && r.height > 100) out.fixedBg.push({ cls: el.className.toString().slice(0, 60), h: Math.round(r.height), img: s.backgroundImage.slice(0, 70), size: s.backgroundSize, pos: s.backgroundPosition });
    if (s.position === 'fixed' && r.height > 200 && el.tagName === 'IMG') out.clipTricks.push({ tag: el.tagName, cls: el.className.toString().slice(0, 60), h: Math.round(r.height) });
    if (s.position === 'sticky' && r.height > 200) out.sticky.push({ cls: el.className.toString().slice(0, 60), h: Math.round(r.height) });
  });
  return out;
});
console.log(JSON.stringify(probe, null, 1).slice(0, 2000));
const scrollTest = await page.evaluate(async () => {
  const before = [...document.querySelectorAll('img, div')].slice(0, 400).map((el) => ({ el, t: getComputedStyle(el).transform }));
  window.scrollTo(0, 1200); await new Promise((r) => setTimeout(r, 600));
  const changed = before.filter(({ el, t }) => getComputedStyle(el).transform !== t).slice(0, 6)
    .map(({ el, t }) => ({ cls: el.className.toString().slice(0, 50), tag: el.tagName, from: t.slice(0, 40), to: getComputedStyle(el).transform.slice(0, 40) }));
  return changed;
});
console.log('transform changes on scroll:', JSON.stringify(scrollTest, null, 1).slice(0, 900));
for (const [i, y] of [0, 900, 1800, 2700, 3600].entries()) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `qa/reference/bros-${i}.png` });
}
await browser.close();
