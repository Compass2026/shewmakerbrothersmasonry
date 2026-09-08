/** Close crops of named selectors, for judging detail. node qa/zoom.mjs <path> <selector> <out> [padding] */
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';
const [path, selector, out, padStr] = process.argv.slice(2);
const pad = Number(padStr ?? 40);
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
for (let i = 0; i < 80; i++) { try { if ((await fetch('http://localhost:4321/')).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
try {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await page.evaluate(() => { document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')); });
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const box = await el.boundingBox();
  await page.screenshot({ path: out, clip: { x: Math.max(0, box.x - pad), y: Math.max(0, box.y - pad), width: Math.min(1440 - Math.max(0, box.x - pad), box.width + pad * 2), height: Math.min(900, box.height + pad * 2) } });
  console.log(out, JSON.stringify(box));
  await browser.close();
} finally { server.kill(); }
