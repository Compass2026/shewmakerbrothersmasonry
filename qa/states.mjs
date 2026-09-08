/**
 * Interactive-state captures: desktop services menu open, mobile nav panel open,
 * gallery filter applied. Serves dist/ like screenshots.mjs. Output: qa/screenshots/state-*.png
 */
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const PORT = 4321;
const BASE = `http://localhost:${PORT}`;
const OUT = 'qa/screenshots';
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'ignore' });
for (let i = 0; i < 80; i++) { try { if ((await fetch(`${BASE}/`)).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
try {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();

  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  let page = await desktop.newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.click('[data-menu-toggle]');
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${OUT}/state-menu-desktop.png` });
  console.log('menu open:', await page.getAttribute('[data-menu-toggle]', 'aria-expanded'));
  await page.keyboard.press('Escape');
  console.log('menu after Escape:', await page.getAttribute('[data-menu-toggle]', 'aria-expanded'));
  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${OUT}/state-header-compact-desktop.png` });
  await page.goto(`${BASE}/projects/`, { waitUntil: 'networkidle' });
  await page.click('[data-filter="segment"][data-value="outdoor-living"]');
  await page.waitForTimeout(100);
  console.log('gallery filter count:', await page.textContent('[data-count]'));
  await page.screenshot({ path: `${OUT}/state-gallery-filter-desktop.png` });
  await desktop.close();

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce', isMobile: true, hasTouch: true });
  page = await mobile.newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.click('[data-nav-toggle]');
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${OUT}/state-nav-mobile.png` });
  console.log('nav open:', await page.getAttribute('[data-nav-toggle]', 'aria-expanded'));
  await page.click('summary.nav-panel__link');
  await page.waitForTimeout(100);
  await page.screenshot({ path: `${OUT}/state-nav-services-mobile.png`, fullPage: true });
  await mobile.close();
  await browser.close();
} finally {
  server.kill();
}
