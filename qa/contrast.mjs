/** WCAG contrast for the palette pairs the site actually uses. Exit 2 if any required pair fails. */
const hex = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const lin = (c) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; };
const L = (h) => { const [r, g, b] = hex(h); return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b); };
const ratio = (a, b) => { const [x, y] = [L(a), L(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };

const C = {
  ground: '#241E18', ground2: '#30281F', shadow: '#191410',
  sand: '#E7DCC6', sand2: '#DCCFB4', concrete: '#D6D2C8', concrete2: '#C6C1B5', paper: '#F4EFE4',
  chalk: '#F6F0E4', mortar: '#E2D9C9', mortarDim: '#C9BFAC',
  amber: '#C98A3A', amberLight: '#E0A44F', amberDeep: '#A66C25',
  brick: '#8A4222', ink: '#2A231C', inkSoft: '#55493D', inkMuted: '#5E5347',
  cap: '#CFC9BC',
};
const pairs = [
  ['chalk on ground', C.chalk, C.ground, 4.5], ['mortar on ground', C.mortar, C.ground, 4.5],
  ['mortarDim on ground', C.mortarDim, C.ground, 4.5], ['mortar on ground2', C.mortar, C.ground2, 4.5],
  ['chalk on shadow', C.chalk, C.shadow, 4.5], ['mortarDim on shadow', C.mortarDim, C.shadow, 4.5],
  ['amber on ground (large)', C.amber, C.ground, 3], ['amber on shadow (large)', C.amber, C.shadow, 3],
  ['amber on ground2 (large)', C.amber, C.ground2, 3],
  ['ink on sand', C.ink, C.sand, 4.5], ['inkSoft on sand', C.inkSoft, C.sand, 4.5],
  ['inkMuted on sand', C.inkMuted, C.sand, 4.5], ['ink on concrete', C.ink, C.concrete, 4.5],
  ['inkSoft on concrete', C.inkSoft, C.concrete, 4.5], ['inkMuted on concrete', C.inkMuted, C.concrete, 4.5],
  ['ink on paper', C.ink, C.paper, 4.5], ['inkSoft on paper', C.inkSoft, C.paper, 4.5],
  ['brick on sand', C.brick, C.sand, 4.5], ['brick on concrete', C.brick, C.concrete, 4.5],
  ['brick on paper', C.brick, C.paper, 4.5],
  ['ground on amber (button)', C.ground, C.amber, 4.5], ['ground on amberLight', C.ground, C.amberLight, 4.5],
  ['chalk on brick (button)', C.chalk, C.brick, 4.5],
  ['ink on cap', C.ink, C.cap, 4.5],
];
let fail = 0;
for (const [name, fg, bg, min] of pairs) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) fail++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${r.toFixed(2)}:1 (need ${min})  ${name}`);
}
console.log(`\n${pairs.length} pairs, ${fail} failing.`);
process.exit(fail ? 2 : 0);
