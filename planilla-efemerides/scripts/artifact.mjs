// Genera una versión de un solo archivo (CSS y JS en línea) para publicar como página en claude.ai.
// Uso: npm run build && node scripts/artifact.mjs
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';

const assets = readdirSync('dist/assets');
const css = readFileSync(`dist/assets/${assets.find((f) => f.endsWith('.css'))}`, 'utf8');
const js = readFileSync(`dist/assets/${assets.find((f) => f.endsWith('.js'))}`, 'utf8').replace(/<\/script/gi, '<\\/script');

const html = `<title>Planilla de efemérides</title>
<style>
:root { color-scheme: light; }
body { background: #f8fafc; }
header.sticky { top: env(safe-area-inset-top, 0px); }
body::before { content: ""; position: fixed; inset: 0 0 auto; height: env(safe-area-inset-top, 0px); z-index: 45; background: #f8fafc; }
${css}
</style>
<div id="root"></div>
<script type="module">${js}</script>
`;
mkdirSync('dist-artifact', { recursive: true });
writeFileSync('dist-artifact/planilla-efemerides.html', html);
console.log(`dist-artifact/planilla-efemerides.html (${(html.length / 1024).toFixed(0)} KB)`);
