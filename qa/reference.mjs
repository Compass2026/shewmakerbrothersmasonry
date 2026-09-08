/** Capture reference sites: full-page screenshot plus fonts, colours and section structure. */
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const urls = process.argv.slice(2);
await mkdir('qa/reference', { recursive: true });
const browser = await chromium.launch();
for (const url of urls) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = 'eager'));
    for (let y = 0; y <= document.documentElement.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
    window.scrollTo(0, 0); await new Promise((r) => setTimeout(r, 400));
  });
  const slug = new URL(url).hostname.replace(/\W+/g, '-');
  await page.screenshot({ path: `qa/reference/${slug}.png`, fullPage: true });
  const info = await page.evaluate(() => {
    const cs = (el) => getComputedStyle(el);
    const fonts = new Set(); const colors = {}; const sections = [];
    document.querySelectorAll('h1,h2,h3,p,a,button,span,li').forEach((el) => { fonts.add(cs(el).fontFamily.split(',')[0].replace(/"/g, '')); });
    document.querySelectorAll('*').forEach((el) => { const s = cs(el); for (const k of ['backgroundColor', 'color']) { const v = s[k]; if (v && v !== 'rgba(0, 0, 0, 0)') colors[v] = (colors[v] ?? 0) + 1; } });
    document.querySelectorAll('section, header, footer, main > div').forEach((el) => { const r = el.getBoundingClientRect(); if (r.height > 80) sections.push({ tag: el.tagName.toLowerCase(), cls: el.className.toString().slice(0, 60), h: Math.round(r.height), bg: cs(el).backgroundColor, bgImg: cs(el).backgroundImage.slice(0, 60) }); });
    const h1 = document.querySelector('h1'); const btn = document.querySelector('a[class*=btn], button, a[class*=button]');
    return {
      title: document.title, fonts: [...fonts], topColors: Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 14),
      h1: h1 ? { text: h1.textContent.trim().slice(0, 80), font: cs(h1).fontFamily, size: cs(h1).fontSize, weight: cs(h1).fontWeight, transform: cs(h1).textTransform, color: cs(h1).color, lh: cs(h1).lineHeight, ls: cs(h1).letterSpacing } : null,
      btn: btn ? { text: btn.textContent.trim().slice(0, 40), bg: cs(btn).backgroundColor, color: cs(btn).color, radius: cs(btn).borderRadius, font: cs(btn).fontFamily, weight: cs(btn).fontWeight, transform: cs(btn).textTransform } : null,
      sections: sections.slice(0, 30), height: document.documentElement.scrollHeight,
    };
  });
  console.log('=====', url, info.title, 'height', info.height);
  console.log('fonts:', info.fonts.join(' | '));
  console.log('h1:', JSON.stringify(info.h1)); console.log('btn:', JSON.stringify(info.btn));
  console.log('top colours:', info.topColors.map(([c, n]) => `${c} x${n}`).join(', '));
  for (const s of info.sections) console.log(' ', s.tag, s.cls, s.h + 'px', s.bg, s.bgImg);
  await ctx.close();
}
await browser.close();
