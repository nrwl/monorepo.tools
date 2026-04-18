#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');
const { encode } = require('gpt-tokenizer');

const DIST = path.resolve(__dirname, '../dist/apps/website');
const PAGES_HTML = path.join(DIST, '.next/server/pages');
const PUBLIC = path.join(DIST, 'public');

const EXPORT_PAGES = [
  { slug: 'index', route: '/' },
  { slug: 'compare', route: '/compare' },
  { slug: 'synthetic-monorepos', route: '/synthetic-monorepos' },
  { slug: 'typescript', route: '/typescript' },
  { slug: 'ai', route: '/ai' },
];

function htmlToMarkdown(html) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  doc
    .querySelectorAll('script, style, noscript, svg, link[rel="stylesheet"]')
    .forEach((el) => el.remove());

  const main = doc.querySelector('main') || doc.body;

  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });
  turndown.use(gfm);

  return turndown
    .turndown(main.innerHTML)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function run() {
  if (!fs.existsSync(PAGES_HTML)) {
    throw new Error(`Prerendered pages not found at ${PAGES_HTML}. Run build-base first.`);
  }
  fs.mkdirSync(PUBLIC, { recursive: true });

  const manifest = [];

  for (const { slug, route } of EXPORT_PAGES) {
    const htmlPath = path.join(PAGES_HTML, `${slug}.html`);
    if (!fs.existsSync(htmlPath)) {
      console.warn(`[markdown-export] missing ${htmlPath}, skipping`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const md = htmlToMarkdown(html);
    const tokens = encode(md).length;
    const outPath = path.join(PUBLIC, `${slug}.md`);
    fs.writeFileSync(outPath, md + '\n');
    manifest.push({ slug, route, tokens, bytes: Buffer.byteLength(md) });
    console.log(`[markdown-export] ${route} → ${slug}.md (${tokens} tokens)`);
  }

  const redirects = manifest
    .map(({ slug, route }) => `${route}  /${slug}.md  200  Accept=text/markdown`)
    .join('\n');
  fs.writeFileSync(path.join(DIST, '_redirects'), redirects + '\n');

  const headers = [
    '/*.md',
    '  Content-Type: text/markdown; charset=utf-8',
    '  Vary: Accept',
    '',
    ...manifest.flatMap(({ slug, tokens }) => [
      `/${slug}.md`,
      `  x-markdown-tokens: ${tokens}`,
      '',
    ]),
  ].join('\n');
  fs.writeFileSync(path.join(DIST, '_headers'), headers);

  fs.writeFileSync(
    path.join(PUBLIC, '.markdown-manifest.json'),
    JSON.stringify(manifest, null, 2),
  );
}

run();
