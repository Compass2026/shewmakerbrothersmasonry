/** Verify the parallax band: the pinned photo must not move with the page. */
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
for (let i = 0; i < 80; i++) { try { if ((await fetch('http://localhost:4321/')).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
try {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  const band = page.locator('.band--parallax').first();
  const top = await band.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
  for (const [i, offset] of [-300, 200, 700].entries()) {
    await page.evaluate((y) => window.scrollTo(0, y), top + offset);
    await page.waitForTimeout(400);
    const shot = await page.evaluate(() => { const img = document.querySelector('.band--parallax .photo-bg--img'); const r = img.getBoundingClientRect(); return { top: Math.round(r.top), h: Math.round(r.height) }; });
    console.log(`scroll ${offset > 0 ? '+' : ''}${offset}: image viewport top ${shot.top}, height ${shot.h}`);
    await page.screenshot({ path: `qa/screenshots/parallax-${i}.png` });
  }
  await browser.close();
} finally { server.kill(); }
