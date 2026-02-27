'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

/*
 * 8 blocks (one per project) start packed as a compact square,
 * then spread into a layered project-graph layout connected by lines.
 * Cycles: compact → spread (with graph) → compact → …
 */

const SQUARE = 28;
const GAP = 4;
const STEP = SQUARE + GAP;

// Timing
const HOLD_COMPACT = 2;
const SPREAD_DURATION = 0.8;
const HOLD_SPREAD = 4;
const COLLAPSE_DURATION = 0.8;

// 8 projects, each = 1 block. Compact grid position (col,row) in a ~3x3 arrangement.
type ProjectNode = {
  id: string;
  label: string;
  col: number; // compact grid column
  row: number; // compact grid row
  sx: number;  // spread x
  sy: number;  // spread y
  color: string;
};

const NODE_COLOR = '#94A3B8';

const NODES: ProjectNode[] = [
  // Row 0 — e2e (top, above app-web)
  { id: 'e2e',        label: 'e2e',        col: 0, row: 0, sx: 80,  sy: 20,  color: NODE_COLOR },
  // Row 1 — apps
  { id: 'app-web',    label: 'app-web',    col: 1, row: 0, sx: 80,  sy: 90,  color: NODE_COLOR },
  { id: 'app-mobile', label: 'app-mobile', col: 2, row: 0, sx: 310, sy: 90,  color: NODE_COLOR },
  // Row 2 — mid-tier libs
  { id: 'lib-ui',     label: 'lib-ui',     col: 0, row: 1, sx: 50,  sy: 160, color: NODE_COLOR },
  { id: 'lib-api',    label: 'lib-api',    col: 1, row: 1, sx: 195, sy: 160, color: NODE_COLOR },
  { id: 'lib-auth',   label: 'lib-auth',   col: 2, row: 1, sx: 340, sy: 160, color: NODE_COLOR },
  // Row 3 — shared/utils (bottom layer)
  { id: 'lib-shared', label: 'lib-shared', col: 0, row: 2, sx: 100, sy: 240, color: NODE_COLOR },
  { id: 'lib-config', label: 'lib-config', col: 1, row: 2, sx: 195, sy: 240, color: NODE_COLOR },
  { id: 'lib-utils',  label: 'lib-utils',  col: 2, row: 2, sx: 290, sy: 240, color: NODE_COLOR },
];

// Edges: [fromId, toId]
const EDGES: [string, string][] = [
  ['app-web', 'lib-ui'],
  ['app-web', 'lib-api'],
  ['app-mobile', 'lib-api'],
  ['app-mobile', 'lib-auth'],
  ['e2e', 'app-web'],
  ['lib-ui', 'lib-shared'],
  ['lib-api', 'lib-shared'],
  ['lib-api', 'lib-utils'],
  ['lib-auth', 'lib-utils'],
  ['lib-api', 'lib-config'],
];

// Compact grid dimensions (3 cols × 3 rows, but only 8 cells used)
const COMPACT_COLS = 3;
const COMPACT_ROWS = 3;
const COMPACT_W = COMPACT_COLS * STEP - GAP;
const COMPACT_H = COMPACT_ROWS * STEP - GAP;

// Spread canvas size
const CANVAS_W = 390;
const CANVAS_H = 300;

// Center compact grid in canvas
const COMPACT_OX = (CANVAS_W - COMPACT_W) / 2;
const COMPACT_OY = (CANVAS_H - COMPACT_H) / 2;

const nodeMap = new Map<string, number>();
NODES.forEach((n, i) => nodeMap.set(n.id, i));

export function WorkspaceStructureAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [phase, setPhase] = useState<'compact' | 'spreading' | 'spread' | 'collapsing'>('compact');
  const [scale, setScale] = useState(1);
  const cycleRef = useRef<ReturnType<typeof setTimeout>>();

  // Intersection observer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Resize observer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(Math.min(1, w / (CANVAS_W + 20)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const startCycle = useCallback(() => {
    setPhase('spreading');

    cycleRef.current = setTimeout(() => {
      setPhase('spread');

      cycleRef.current = setTimeout(() => {
        setPhase('collapsing');

        cycleRef.current = setTimeout(() => {
          setPhase('compact');

          cycleRef.current = setTimeout(() => {
            startCycle();
          }, HOLD_COMPACT * 1000);
        }, COLLAPSE_DURATION * 1000);
      }, HOLD_SPREAD * 1000);
    }, SPREAD_DURATION * 1000);
  }, []);

  useEffect(() => {
    if (!activated) return;
    const t = setTimeout(() => startCycle(), HOLD_COMPACT * 1000);
    return () => {
      clearTimeout(t);
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  }, [activated, startCycle]);

  const isSpread = phase === 'spreading' || phase === 'spread';
  const showEdges = phase === 'spread';

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700"
      style={{ aspectRatio: '4 / 3.5' }}
    >
      <div
        className="absolute origin-center"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {/* Edge lines */}
        <svg
          className="pointer-events-none absolute inset-0"
          style={{ width: CANVAS_W, height: CANVAS_H, overflow: 'visible' }}
        >
          {EDGES.map(([fromId, toId]) => {
            const from = NODES[nodeMap.get(fromId)!];
            const to = NODES[nodeMap.get(toId)!];

            const x1 = isSpread ? from.sx : COMPACT_OX + from.col * STEP + SQUARE / 2;
            const y1 = isSpread ? from.sy + SQUARE / 2 : COMPACT_OY + from.row * STEP + SQUARE / 2;
            const x2 = isSpread ? to.sx : COMPACT_OX + to.col * STEP + SQUARE / 2;
            const y2 = isSpread ? to.sy - SQUARE / 2 : COMPACT_OY + to.row * STEP + SQUARE / 2;

            return (
              <motion.line
                key={`edge-${fromId}-${toId}`}
                stroke="#64748B"
                strokeWidth={1.5}
                animate={{
                  x1, y1, x2, y2,
                  opacity: showEdges ? 0.5 : 0,
                }}
                transition={{
                  x1: { duration: SPREAD_DURATION, ease: 'easeInOut' },
                  y1: { duration: SPREAD_DURATION, ease: 'easeInOut' },
                  x2: { duration: SPREAD_DURATION, ease: 'easeInOut' },
                  y2: { duration: SPREAD_DURATION, ease: 'easeInOut' },
                  opacity: { duration: 0.4, delay: showEdges ? 0.1 : 0 },
                }}
              />
            );
          })}
        </svg>

        {/* Blocks — one per project */}
        {NODES.map((node, ni) => {
          const compactX = COMPACT_OX + node.col * STEP;
          const compactY = COMPACT_OY + node.row * STEP;

          const targetX = isSpread ? node.sx - SQUARE / 2 : compactX;
          const targetY = isSpread ? node.sy - SQUARE / 2 : compactY;
          const stagger = ni * 0.04;

          return (
            <motion.div
              key={node.id}
              style={{
                position: 'absolute',
                width: SQUARE,
                height: SQUARE,
                borderRadius: 5,
                backgroundColor: NODE_COLOR,
              }}
              animate={{
                left: targetX,
                top: targetY,
              }}
              transition={{
                left: { duration: SPREAD_DURATION, delay: stagger, ease: 'easeInOut' },
                top: { duration: SPREAD_DURATION, delay: stagger, ease: 'easeInOut' },
              }}
            />
          );
        })}

        {/* Node labels (only when spread) */}
        {NODES.map((node) => (
          <motion.div
            key={`label-${node.id}`}
            className="pointer-events-none absolute"
            style={{
              left: node.sx,
              transform: 'translateX(-50%)',
            }}
            animate={{
              top: node.sy + SQUARE / 2 + 4,
              opacity: showEdges ? 1 : 0,
            }}
            transition={{
              opacity: { duration: 0.3, delay: showEdges ? 0.2 : 0 },
            }}
          >
            <span
              className="whitespace-nowrap rounded px-1 py-0.5 font-mono text-[9px] font-medium"
              style={{ color: NODE_COLOR }}
            >
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <motion.span
          className="inline-flex items-center whitespace-nowrap rounded-full bg-slate-700/80 px-3 py-1 text-sm font-medium text-slate-200"
          key={showEdges ? 'aware' : 'basic'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {showEdges ? 'Monorepo-Aware Agent' : 'AI Agent'}
        </motion.span>
      </div>
    </div>
  );
}
