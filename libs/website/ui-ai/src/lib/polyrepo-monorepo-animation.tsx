'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './use-in-view';

/*
 * Split visualization: polyrepo (isolated repos, broken context) vs
 * monorepo (unified workspace, agent sees everything).
 * Cycles between the two views automatically.
 */

const NODE_COLOR = '#94A3B8';
const EDGE_COLOR = '#64748B';
const AGENT_COLOR = '#FBBF24'; // yellow-400

// --- Polyrepo side: 3 isolated repos ---
type RepoBox = {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  projects: { label: string; cx: number; cy: number }[];
  edges: { from: number; to: number }[];
};

const POLY_REPOS: RepoBox[] = [
  {
    label: 'repo-frontend',
    x: 10,
    y: 10,
    w: 170,
    h: 115,
    projects: [
      { label: 'app-web', cx: 50, cy: 48 },
      { label: 'feat-products', cx: 130, cy: 48 },
      { label: 'lib-ui', cx: 90, cy: 90 },
    ],
    edges: [
      { from: 0, to: 2 }, // app-web -> lib-ui
      { from: 1, to: 2 }, // feat-products -> lib-ui (shares UI)
    ],
  },
  {
    label: 'repo-backend',
    x: 210,
    y: 10,
    w: 170,
    h: 115,
    projects: [
      { label: 'api', cx: 290, cy: 48 },
      { label: 'dto', cx: 345, cy: 48 },
      { label: 'lib-auth', cx: 290, cy: 90 },
    ],
    edges: [
      { from: 0, to: 1 }, // api -> dto
      { from: 0, to: 2 }, // api -> lib-auth
    ],
  },
  {
    label: 'repo-shared',
    x: 75,
    y: 152,
    w: 240,
    h: 100,
    projects: [
      { label: 'lib-utils', cx: 150, cy: 200 },
      { label: 'lib-config', cx: 265, cy: 200 },
    ],
    edges: [],
  },
];

// Cross-repo edges (broken context, dashed red with X)
const POLY_BROKEN_EDGES = [
  { x1: 90, y1: 100, x2: 150, y2: 190 },     // lib-ui -> lib-utils
  { x1: 290, y1: 100, x2: 265, y2: 190 },     // lib-auth -> lib-config
  { x1: 130, y1: 58, x2: 290, y2: 40 },       // feat-products -> api
];

// --- Monorepo side: top-down dependency graph ---
// Frontend nodes on left, backend nodes on right
const MONO_PROJECTS = [
  // Row 1: apps (top)
  { id: 'app-web', cx: 80, cy: 42 },
  { id: 'api', cx: 310, cy: 42 },
  // Row 2: feature / domain libs
  { id: 'feat-products', cx: 140, cy: 108 },
  { id: 'dto', cx: 280, cy: 108 },
  // Row 3: utility / foundational
  { id: 'lib-ui', cx: 55, cy: 178 },
  { id: 'lib-utils', cx: 155, cy: 178 },
  { id: 'lib-auth', cx: 280, cy: 178 },
  // Row 4: config (bottom)
  { id: 'lib-config', cx: 215, cy: 245 },
];

// All 10 edges: fully connected top-down graph
const MONO_EDGES = [
  // app-web edges (left side, downward)
  { from: 'app-web', to: 'lib-ui' },
  { from: 'app-web', to: 'feat-products' },
  // feat-products fan-out (center, mostly downward)
  { from: 'feat-products', to: 'api' },
  { from: 'feat-products', to: 'dto' },
  { from: 'feat-products', to: 'lib-utils' },
  { from: 'feat-products', to: 'lib-config' },
  // lib-ui -> shared
  { from: 'lib-ui', to: 'lib-utils' },
  // api edges (right side, downward)
  { from: 'api', to: 'dto' },
  { from: 'api', to: 'lib-auth' },
  // lib-auth -> config
  { from: 'lib-auth', to: 'lib-config' },
];

const monoMap = new Map(MONO_PROJECTS.map((p) => [p.id, p]));

const CANVAS_W = 390;
const CANVAS_H = 280;
const NODE_R = 11;
const FONT_LABEL = '9px';
const FONT_REPO = '10px';

// Agent scanning line for monorepo side
function AgentScanLine({ active }: { active: boolean }) {
  return (
    <motion.line
      x1={15}
      x2={CANVAS_W - 15}
      stroke={AGENT_COLOR}
      strokeWidth={2}
      strokeOpacity={0.4}
      initial={{ y1: 30, y2: 30 }}
      animate={
        active
          ? { y1: [30, CANVAS_H - 20, 30], y2: [30, CANVAS_H - 20, 30] }
          : { y1: 30, y2: 30 }
      }
      transition={
        active
          ? { duration: 3, repeat: Infinity, ease: 'linear' }
          : { duration: 0.3 }
      }
    />
  );
}

export function PolyrepoMonorepoAnimation() {
  const { ref, inView } = useInView(0.3);
  const [view, setView] = useState<'polyrepo' | 'monorepo'>('polyrepo');
  const [scale, setScale] = useState(1);

  // Resize
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(Math.min(1, w / CANVAS_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  // Auto-cycle
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setView((v) => (v === 'polyrepo' ? 'monorepo' : 'polyrepo'));
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700"
      style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H + 40}` }}
    >
      <div
        className="absolute origin-center"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -54%) scale(${scale})`,
        }}
      >
        <AnimatePresence mode="wait">
          {view === 'polyrepo' ? (
            <motion.div
              key="polyrepo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <svg
                width={CANVAS_W}
                height={CANVAS_H}
                className="absolute inset-0"
              >
                {/* Repo boundaries */}
                {POLY_REPOS.map((repo) => (
                  <g key={repo.label}>
                    <rect
                      x={repo.x}
                      y={repo.y}
                      width={repo.w}
                      height={repo.h}
                      rx={6}
                      fill="none"
                      stroke={EDGE_COLOR}
                      strokeWidth={1.5}
                      strokeDasharray="4 3"
                    />
                    <text
                      x={repo.x + repo.w / 2}
                      y={repo.y + 14}
                      textAnchor="middle"
                      style={{ fontSize: FONT_REPO }}
                      className="fill-slate-500 font-medium"
                    >
                      {repo.label}
                    </text>
                    {/* Intra-repo edges (solid, these work fine) */}
                    {repo.edges.map((e, ei) => {
                      const f = repo.projects[e.from];
                      const t = repo.projects[e.to];
                      return (
                        <line
                          key={`intra-${ei}`}
                          x1={f.cx}
                          y1={f.cy}
                          x2={t.cx}
                          y2={t.cy}
                          stroke={EDGE_COLOR}
                          strokeWidth={1.5}
                          opacity={0.5}
                        />
                      );
                    })}
                    {/* Project nodes inside repo */}
                    {repo.projects.map((p) => (
                      <g key={p.label}>
                        <circle
                          cx={p.cx}
                          cy={p.cy}
                          r={NODE_R}
                          fill={NODE_COLOR}
                        />
                        <text
                          x={p.cx}
                          y={p.cy + NODE_R + 12}
                          textAnchor="middle"
                          style={{ fontSize: FONT_LABEL }}
                          className="fill-slate-400"
                        >
                          {p.label}
                        </text>
                      </g>
                    ))}
                  </g>
                ))}

                {/* Broken cross-repo edges */}
                {POLY_BROKEN_EDGES.map((e, i) => (
                  <line
                    key={i}
                    x1={e.x1}
                    y1={e.y1}
                    x2={e.x2}
                    y2={e.y2}
                    stroke="#EF4444"
                    strokeWidth={1.5}
                    strokeDasharray="4 5"
                    opacity={0.5}
                  />
                ))}

                {/* X marks on broken edges */}
                {POLY_BROKEN_EDGES.map((e, i) => {
                  const mx = (e.x1 + e.x2) / 2;
                  const my = (e.y1 + e.y2) / 2;
                  return (
                    <g key={`x-${i}`}>
                      <line
                        x1={mx - 5}
                        y1={my - 5}
                        x2={mx + 5}
                        y2={my + 5}
                        stroke="#EF4444"
                        strokeWidth={2}
                      />
                      <line
                        x1={mx + 5}
                        y1={my - 5}
                        x2={mx - 5}
                        y2={my + 5}
                        stroke="#EF4444"
                        strokeWidth={2}
                      />
                    </g>
                  );
                })}
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="monorepo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <svg
                width={CANVAS_W}
                height={CANVAS_H}
                className="absolute inset-0"
              >
                {/* Single repo boundary */}
                <rect
                  x={8}
                  y={8}
                  width={CANVAS_W - 16}
                  height={CANVAS_H - 16}
                  rx={8}
                  fill="none"
                  stroke={NODE_COLOR}
                  strokeWidth={1.5}
                />
                <text
                  x={CANVAS_W / 2}
                  y={26}
                  textAnchor="middle"
                  style={{ fontSize: FONT_REPO }}
                  className="fill-slate-400 font-medium"
                >
                  monorepo
                </text>

                {/* Dependency edges */}
                {MONO_EDGES.map(({ from, to }) => {
                  const f = monoMap.get(from)!;
                  const t = monoMap.get(to)!;
                  return (
                    <line
                      key={`${from}-${to}`}
                      x1={f.cx}
                      y1={f.cy}
                      x2={t.cx}
                      y2={t.cy}
                      stroke={EDGE_COLOR}
                      strokeWidth={1.5}
                      opacity={0.5}
                    />
                  );
                })}

                {/* Project nodes */}
                {MONO_PROJECTS.map((p) => (
                  <g key={p.id}>
                    <circle
                      cx={p.cx}
                      cy={p.cy}
                      r={NODE_R}
                      fill={NODE_COLOR}
                    />
                    <text
                      x={p.cx}
                      y={p.cy + NODE_R + 12}
                      textAnchor="middle"
                      style={{ fontSize: FONT_LABEL }}
                      className="fill-slate-400"
                    >
                      {p.id}
                    </text>
                  </g>
                ))}

                {/* Agent scan line */}
                <AgentScanLine active={true} />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <AnimatePresence mode="wait">
          <motion.span
            key={view}
            className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium ${
              view === 'polyrepo'
                ? 'bg-red-900/40 text-red-300'
                : 'bg-emerald-900/40 text-emerald-300'
            }`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'polyrepo'
              ? 'Polyrepo: Broken Context'
              : 'Monorepo: Full Visibility'}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
