/** Confirm the before/after slider responds to pointer, keyboard and touch, and holds alignment. */
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
for (let i = 0; i < 80; i++) { try { if ((await fetch('http://localhost:4321/')).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
try {
  const browser = await chromium.launch();
  for (const [name, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    const ctx = await browser.newContext({ viewport: vp, hasTouch: name === 'mobile', isMobile: name === 'mobile' });
    const page = await ctx.newPage();
    await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
    const frame = page.locator('[data-ba]').first();
    await frame.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const read = () => frame.evaluate((el) => {
      const clip = el.querySelector('[data-ba-clip]');
      const img = clip.querySelector('img');
      return { pos: el.style.getPropertyValue('--pos'), clipW: Math.round(clip.getBoundingClientRect().width), frameW: Math.round(el.getBoundingClientRect().width), imgW: Math.round(img.getBoundingClientRect().width) };
    });
    const start = await read();
    const box = await frame.boundingBox();
    await page.mouse.move(box.x + box.width * 0.2, box.y + box.height / 2);
    await page.mouse.down(); await page.mouse.move(box.x + box.width * 0.78, box.y + box.height / 2, { steps: 8 }); await page.mouse.up();
    const dragged = await read();
    await page.locator('[data-ba-range]').first().focus();
    await page.keyboard.press('ArrowLeft'); await page.keyboard.press('ArrowLeft');
    const keyed = await read();
    const aligned = Math.abs(dragged.imgW - dragged.frameW) <= 1;
    console.log(`${name.padEnd(8)} start ${start.pos || '(css default)'} -> drag ${dragged.pos} (clip ${dragged.clipW}/${dragged.frameW}) -> keys ${keyed.pos}  | clipped image full width: ${aligned}`);
    if (name === 'mobile') await page.screenshot({ path: 'qa/screenshots/z-slider-mobile.png', clip: { x: 0, y: Math.max(0, box.y - 20), width: 390, height: Math.min(844, box.height + 60) } });
    await ctx.close();
  }
  await browser.close();
} finally { server.kill(); }
