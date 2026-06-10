# Conf OG image generator

Generates static 1200×630 Open Graph images for the conf:

- `public/images/conf/og/<speaker-id>.png` — one per speaker (horizontal badge:
  cube graph + photo + name + role + talk title)
- `public/images/conf/og/conf.png` — generic image for the `/conf` page

Wired into SEO by `pages/conf/speaker/[id].tsx` and `pages/conf.tsx`.

## Regenerate

```bash
pnpm conf:og                 # all cards (every speaker + the generic conf.png)
pnpm conf:og altan-stalker   # just one speaker's card
pnpm conf:og conf            # just the generic /conf card
```

Re-run after editing speaker data (`libs/website/ui-conf/src/lib/ai/data.ts`),
the layout (`generate-og.mts`), or the cube graph (`cube-graph.mts`), then commit
the updated PNGs. Passing one or more speaker ids (or `conf`) regenerates only
those PNGs, which keeps diffs small when a single speaker changes.

## Mechanism

Same approach as nx-blog: build a React-element tree → `satori` (SVG) →
`@resvg/resvg-js` (PNG). Fonts come from the `@fontsource` woff2 files,
decompressed with `wawoff2`. The node graph is a static SVG re-creation of the
badge's three.js "lit" state.

## Caveats

- Speaker photos are `.avif`; satori can't decode them, so they're transcoded to
  PNG with **`sharp`** at generation time. This works on any platform (macOS,
  Linux, CI). The committed PNGs are platform-independent.
- `wawoff2`'s WASM instance isn't concurrency-safe — fonts are decompressed
  sequentially.
