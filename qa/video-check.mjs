/** Confirm the hero video plays on desktop and on a phone, that the phone gets the light rendition, and that reduced motion fetches nothing. */
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
for (let i = 0; i < 80; i++) { try { if ((await fetch('http://localhost:4321/')).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
try {
  const browser = await chromium.launch();
  for (const [name, opts] of [
    ['desktop', { viewport: { width: 1440, height: 900 } }],
    ['mobile', { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }],
    ['reduced motion', { viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' }],
  ]) {
    const ctx = await browser.newContext(opts);
    const page = await ctx.newPage();
    const hits = [];
    page.on('request', (r) => { if (r.url().includes('.mp4')) hits.push(r.url().split('/').pop()); });
    await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    const state = await page.evaluate(() => {
      const v = document.querySelector('video');
      return v ? { present: true, src: !!v.currentSrc, paused: v.paused, t: Number(v.currentTime.toFixed(2)), playing: v.classList.contains('is-playing') } : { present: false };
    });
    console.log(`${name.padEnd(14)} mp4 requests: ${hits.length} ${JSON.stringify(hits)}  ${JSON.stringify(state)}`);
    if (name === 'desktop') { await page.waitForTimeout(500); await page.screenshot({ path: 'qa/screenshots/hero-video.png' }); }
    await ctx.close();
  }
  await browser.close();
} finally { server.kill(); }
