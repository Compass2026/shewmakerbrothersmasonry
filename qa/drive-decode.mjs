/**
 * Decode Google Drive MCP download results (JSON with base64 `content`) into files.
 *   node qa/drive-decode.mjs <out-dir> <result.json ...>
 * HEIC files are converted to JPEG with macOS sips; originals are kept beside them.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
const [outDir, ...files] = process.argv.slice(2);
for (const f of files) {
  const j = JSON.parse(readFileSync(f, 'utf8'));
  const buf = Buffer.from(j.content, 'base64');
  const name = j.title.replace(/[^\w.-]+/g, '_');
  const out = join(outDir, name);
  writeFileSync(out, buf);
  let jpg = out;
  if (/\.heic$/i.test(name)) {
    jpg = out.replace(/\.heic$/i, '.jpg');
    if (!existsSync(jpg)) execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '92', out, '--out', jpg], { stdio: 'ignore' });
  }
  const dims = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', jpg]).toString().match(/pixelWidth: (\d+)[\s\S]*pixelHeight: (\d+)/);
  console.log(`${name} -> ${jpg.split('/').pop()} ${dims ? dims[1] + 'x' + dims[2] : '?'} (${Math.round(buf.length / 1024)} KB)`);
}
