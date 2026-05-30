// Static SVG re-creation of the badge's three.js node graph in its "lit"
// (hovered) state: wireframe cubes rising from engraved footprints, amber
// dashed spokes, and a couple of travel dots. Rendered to an <svg> string so
// resvg can rasterize it inside the OG image (satori's own SVG support is
// limited, so we embed this as an <img> data URI instead).

// Node footprints in an abstract layout space, mirroring badge-hero's graph.
const NODES = [
  { x: -1.0, y: 0.95, size: 0.5 },
  { x: 1.0, y: 0.95, size: 0.5 },
  { x: 0.0, y: 1.45, size: 0.56 },
  { x: -0.52, y: 0.35, size: 0.34 },
  { x: 0.56, y: 0.35, size: 0.34 },
  { x: -1.0, y: -0.35, size: 0.42 },
  { x: 1.0, y: -0.35, size: 0.42 },
];

const EDGES: [number, number][] = [
  [0, 2], [1, 2], [3, 2], [4, 2],
  [0, 3], [1, 4],
  [5, 2], [6, 2], [5, 6],
];

// Edges that carry an amber "travel dot", at a parametric position t.
const DOTS: { edge: number; t: number }[] = [
  { edge: 0, t: 0.55 },
  { edge: 1, t: 0.4 },
];

type Pt = { cx: number; cy: number; s: number };

function project(W: number, H: number): Pt[] {
  return NODES.map((n) => ({
    cx: W / 2 + n.x * (W * 0.33),
    cy: H * 0.62 - n.y * (H * 0.23),
    s: n.size * (W * 0.3),
  }));
}

/** One axonometric wireframe cube: front face + offset back face + connectors
 * + a small inner cube, matching the badge's "cube rising from a footprint". */
function cube(p: Pt): string {
  const half = p.s / 2;
  const d = p.s * 0.34; // depth offset (up-right)
  const fx = p.cx - half;
  const fy = p.cy - half;
  // front face corners
  const f = [
    [fx, fy],
    [fx + p.s, fy],
    [fx + p.s, fy + p.s],
    [fx, fy + p.s],
  ];
  // back face corners (offset)
  const b = f.map(([x, y]) => [x + d, y - d]);
  const stroke = 'rgba(214,222,206,0.5)';
  const strokeBack = 'rgba(214,222,206,0.22)';
  const line = (a: number[], c: number[], col: string, w = 1.4) =>
    `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${c[0].toFixed(1)}" y2="${c[1].toFixed(1)}" stroke="${col}" stroke-width="${w}" />`;

  const parts: string[] = [];
  // subtle front-face fill
  parts.push(
    `<rect x="${fx.toFixed(1)}" y="${fy.toFixed(1)}" width="${p.s.toFixed(1)}" height="${p.s.toFixed(1)}" fill="rgba(255,255,255,0.02)" />`,
  );
  // back face
  for (let i = 0; i < 4; i++) parts.push(line(b[i], b[(i + 1) % 4], strokeBack));
  // connectors
  for (let i = 0; i < 4; i++) parts.push(line(f[i], b[i], strokeBack));
  // front face
  for (let i = 0; i < 4; i++) parts.push(line(f[i], f[(i + 1) % 4], stroke));
  // inner cube
  const is = p.s * 0.32;
  const ih = is / 2;
  parts.push(
    `<rect x="${(p.cx - ih).toFixed(1)}" y="${(p.cy - ih).toFixed(1)}" width="${is.toFixed(1)}" height="${is.toFixed(1)}" fill="rgba(0,0,0,0.35)" stroke="rgba(120,132,112,0.5)" stroke-width="1" />`,
  );
  return parts.join('');
}

export function cubeGraphSvg(W = 560, H = 560): string {
  const pts = project(W, H);

  const edgeLines = EDGES.map(([a, b]) => {
    const pa = pts[a];
    const pb = pts[b];
    return `<line x1="${pa.cx.toFixed(1)}" y1="${pa.cy.toFixed(1)}" x2="${pb.cx.toFixed(1)}" y2="${pb.cy.toFixed(1)}" stroke="rgba(251,191,36,0.45)" stroke-width="1.4" stroke-dasharray="7 6" />`;
  }).join('');

  const dots = DOTS.map(({ edge, t }) => {
    const [a, b] = EDGES[edge];
    const pa = pts[a];
    const pb = pts[b];
    const x = pa.cx + (pb.cx - pa.cx) * t;
    const y = pa.cy + (pb.cy - pa.cy) * t;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="#fbbf24" />`;
  }).join('');

  const cubes = pts.map(cube).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="rgba(251,191,36,0.16)" />
      <stop offset="60%" stop-color="rgba(251,191,36,0.04)" />
      <stop offset="100%" stop-color="rgba(251,191,36,0)" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#glow)" />
  ${edgeLines}
  ${cubes}
  ${dots}
</svg>`;
}
