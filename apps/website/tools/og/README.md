# Conf OG image generator

Generates static 1200×630 Open Graph images for the conf:

- `public/images/conf/og/<speaker-id>.png` — one per speaker (horizontal badge:
  cube graph + photo + name + role + talk title)
- `public/images/conf/og/conf.png` — generic image for the `/conf` page

Wired into SEO by `pages/conf/speaker/[id].tsx` and `pages/conf.tsx`.

## Regenerate

```bash
pnpm conf:og
```

Re-run after editing speaker data (`libs/website/ui-conf/src/lib/ai/data.ts`),
the layout (`generate-og.mts`), or the cube graph (`cube-graph.mts`), then commit
the updated PNGs.

## Mechanism

Same approach as nx-blog: build a React-element tree → `satori` (SVG) →
`@resvg/resvg-js` (PNG). Fonts come from the `@fontsource` woff2 files,
decompressed with `wawoff2`. The node graph is a static SVG re-creation of the
badge's three.js "lit" state.

## Caveats

- Speaker photos are `.avif`; satori can't decode them, so they're transcoded to
  PNG with macOS **`sips`** at generation time. Generation therefore requires
  macOS. (The committed PNGs are platform-independent.)
- `wawoff2`'s WASM instance isn't concurrency-safe — fonts are decompressed
  sequentially.
