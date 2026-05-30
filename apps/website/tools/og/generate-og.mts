// Generates static 1200x630 OG images for the conf:
//   - one per speaker  -> public/images/conf/og/<speaker-id>.png
//   - a generic one    -> public/images/conf/og/conf.png
//
// Mechanism mirrors nx-blog: build a React-element tree, render to SVG with
// satori, rasterize to PNG with resvg. Fonts come from @fontsource woff2
// (decompressed via wawoff2). Speaker avatars are .avif, which satori can't
// decode, so we transcode them to PNG with macOS `sips` first.
//
// Run:  node apps/website/tools/og/generate-og.mts
import { promises as fs } from 'node:fs';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import wawoff2 from 'wawoff2';
import { SPEAKERS, CONF, type Speaker } from '../../../../libs/website/ui-conf/src/lib/ai/data.ts';
import { cubeGraphSvg } from './cube-graph.mts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '../../../..');
const FONT_FILES = path.join(REPO, 'node_modules', '@fontsource');
const SPEAKER_IMG_DIR = path.join(REPO, 'apps/website/public/images/conf/speakers');
const OUT_DIR = path.join(REPO, 'apps/website/public/images/conf/og');

const W = 1200;
const H = 630;
const C = {
  bg: '#15170f',
  text: '#f8fafc',
  amber: '#fbbf24',
  role: '#fbbf24',
  dim: '#a3afa0',
  band: '#fbbf24',
  bandText: '#15170f',
  border: '#3a3f34',
};

// ---- fonts -----------------------------------------------------------------
async function woff2(family: string, weight: number) {
  const file = path.join(
    FONT_FILES,
    family,
    'files',
    `${family}-latin-${weight}-normal.woff2`,
  );
  return Buffer.from(await wawoff2.decompress(readFileSync(file)));
}

async function loadFonts() {
  // wawoff2's WASM instance is not concurrency-safe; decompress sequentially.
  const sg700 = await woff2('space-grotesk', 700);
  const jb500 = await woff2('jetbrains-mono', 500);
  const jb700 = await woff2('jetbrains-mono', 700);
  const inter400 = await woff2('inter', 400);
  const inter700 = await woff2('inter', 700);
  return [
    { name: 'Space Grotesk', data: sg700, weight: 700 as const, style: 'normal' as const },
    { name: 'JetBrains Mono', data: jb500, weight: 500 as const, style: 'normal' as const },
    { name: 'JetBrains Mono', data: jb700, weight: 700 as const, style: 'normal' as const },
    { name: 'Inter', data: inter400, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: inter700, weight: 700 as const, style: 'normal' as const },
  ];
}

// ---- assets ----------------------------------------------------------------
function dataUri(svg: string) {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

const CUBES = dataUri(cubeGraphSvg(560, 560));

const HEART = dataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="${C.amber}" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
);

const tmp = path.join(os.tmpdir(), 'conf-og-avatars');
async function avatarUri(speaker: Speaker): Promise<string | null> {
  if (!speaker.image) return null;
  const src = path.join(SPEAKER_IMG_DIR, path.basename(speaker.image));
  await fs.mkdir(tmp, { recursive: true });
  const out = path.join(tmp, `${speaker.id}.png`);
  try {
    execFileSync('sips', ['-s', 'format', 'png', '-Z', '320', src, '--out', out], {
      stdio: 'ignore',
    });
    return `data:image/png;base64,${readFileSync(out).toString('base64')}`;
  } catch {
    return null;
  }
}

// ---- element-tree helpers --------------------------------------------------
type El = { type: string; props: Record<string, unknown> };
const el = (type: string, props: Record<string, unknown>): El => ({ type, props });
const box = (style: Record<string, unknown>, children?: unknown) =>
  el('div', { style: { display: 'flex', ...style }, children });
const txt = (style: Record<string, unknown>, children: string) =>
  el('div', { style: { display: 'flex', ...style }, children });
const img = (src: string, style: Record<string, unknown>) => el('img', { src, style });

function onlinePill() {
  return box(
    {
      alignItems: 'center',
      gap: 10,
      padding: '8px 16px 8px 14px',
      borderRadius: 999,
      border: '1px solid #2a2d27',
      background: 'rgba(0,0,0,0.5)',
    },
    [
      box({ width: 11, height: 11, borderRadius: 999, background: '#22c55e' }),
      txt(
        { fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 20, color: '#d1d8d1', letterSpacing: 1 },
        'ONLINE',
      ),
    ],
  );
}

function wordmark() {
  return box({ alignItems: 'center', gap: 4 }, [
    txt({ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 27, color: C.text }, 'ai'),
    img(HEART, { width: 23, height: 23, margin: '0 4px' }),
    txt({ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 27, color: C.text }, 'monorepos'),
    txt({ fontFamily: 'JetBrains Mono', fontWeight: 500, fontSize: 19, color: C.dim, marginLeft: 12 }, '/conf/2026'),
  ]);
}

function shell(bodyRight: unknown, bandLabel: string) {
  return box(
    {
      width: W,
      height: H,
      flexDirection: 'column',
      background: C.bg,
      color: C.text,
      fontFamily: 'Inter',
      position: 'relative',
    },
    [
      // content area
      box({ flex: 1, flexDirection: 'column', padding: '46px 60px 30px' }, [
        box({ alignItems: 'center', justifyContent: 'space-between' }, [
          wordmark(),
          onlinePill(),
        ]),
        box({ flex: 1, alignItems: 'center', gap: 48 }, [
          img(CUBES, { width: 440, height: 440, flexShrink: 0 }),
          box({ flex: 1, flexDirection: 'column', justifyContent: 'center' }, bodyRight),
        ]),
      ]),
      // amber band
      box(
        { height: 74, alignItems: 'center', justifyContent: 'center', background: C.band },
        txt(
          { fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 26, color: C.bandText, letterSpacing: 8 },
          bandLabel,
        ),
      ),
    ],
  );
}

function speakerNameSize(name: string) {
  return name.length > 16 ? 42 : name.length > 12 ? 50 : 58;
}

function talkTitleSize(title: string) {
  return title.length > 34 ? 30 : title.length > 22 ? 36 : 42;
}

function speakerTree(speaker: Speaker, avatar: string | null): unknown {
  const right: unknown[] = [];
  right.push(
    box({ alignItems: 'center', gap: 26 }, [
      avatar
        ? img(avatar, {
            width: 128,
            height: 128,
            borderRadius: 64,
            border: `3px solid ${C.border}`,
            objectFit: 'cover',
            flexShrink: 0,
          })
        : box({ width: 0, height: 0 }),
      box({ flexDirection: 'column' }, [
        txt(
          { fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: speakerNameSize(speaker.name), color: C.text, lineHeight: 1.0 },
          speaker.name,
        ),
        txt(
          { fontFamily: 'JetBrains Mono', fontWeight: 500, fontSize: 22, color: C.role, marginTop: 12 },
          speaker.role,
        ),
      ]),
    ]),
  );

  if (speaker.talkTitle) {
    right.push(box({ height: 1, background: 'rgba(255,255,255,0.12)', margin: '30px 0 24px' }));
    right.push(
      txt(
        { fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 14, color: C.amber, letterSpacing: 3 },
        'TALK',
      ),
    );
    right.push(
      txt(
        { fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: talkTitleSize(speaker.talkTitle), color: C.text, lineHeight: 1.12, marginTop: 12 },
        speaker.talkTitle,
      ),
    );
  } else {
    right.push(
      txt(
        { fontFamily: 'JetBrains Mono', fontWeight: 500, fontSize: 18, color: C.dim, marginTop: 26, letterSpacing: 1 },
        `${speaker.org} · ${CONF.edition}`.toUpperCase(),
      ),
    );
  }

  return shell(right, 'SPEAKER');
}

function genericTree(): unknown {
  const right = [
    box({ alignItems: 'center', gap: 4 }, [
      txt({ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 76, color: C.text, lineHeight: 1.0 }, 'AI'),
      img(HEART, { width: 60, height: 60, margin: '0 14px' }),
      txt({ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 76, color: C.text, lineHeight: 1.0 }, 'Monorepos'),
    ]),
    txt(
      { fontFamily: 'Inter', fontWeight: 400, fontSize: 24, color: '#cbd5e1', lineHeight: 1.45, marginTop: 22, maxWidth: 560 },
      'Where monorepos meet agentic AI. A free, half-day virtual conference.',
    ),
    txt(
      { fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 22, color: C.amber, letterSpacing: 1, marginTop: 26 },
      'JUNE 23, 2026 · ONLINE · FREE',
    ),
  ];
  return shell(right, 'CONF 2026');
}

// ---- render ----------------------------------------------------------------
async function render(tree: unknown, fonts: Awaited<ReturnType<typeof loadFonts>>, outFile: string) {
  const svg = await satori(tree as never, { width: W, height: H, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
  await fs.writeFile(outFile, png);
}

async function main() {
  const fonts = await loadFonts();
  await fs.mkdir(OUT_DIR, { recursive: true });

  await render(genericTree(), fonts, path.join(OUT_DIR, 'conf.png'));
  console.log('✓ conf.png');

  for (const speaker of SPEAKERS) {
    const avatar = await avatarUri(speaker);
    await render(speakerTree(speaker, avatar), fonts, path.join(OUT_DIR, `${speaker.id}.png`));
    console.log(`✓ ${speaker.id}.png${avatar ? '' : ' (no avatar)'}`);
  }
  console.log(`\nDone → ${path.relative(REPO, OUT_DIR)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
