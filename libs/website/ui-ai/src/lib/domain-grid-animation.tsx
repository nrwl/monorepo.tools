'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const COLS = 11;
const ROWS = 11;

const DOMAINS: {
  name: string;
  color: string;
  bounds: [number, number, number, number];
  cells: [number, number][];
  spread: { dx: number; dy: number };
}[] = [
  {
    name: 'scope:shop',
    color: '#3B82F6',
    bounds: [0, 0, 5, 5],
    cells: coords(0, 0, 5, 5),
    // Left + top quadrant
    spread: { dx: -26, dy: -26 },
  },
  {
    name: 'scope:cms',
    color: '#F97316',
    bounds: [6, 0, 10, 2],
    cells: coords(6, 0, 10, 2),
    // Right + top, above analytics sub-seam
    spread: { dx: 26, dy: -42 },
  },
  {
    name: 'scope:analytics',
    color: '#10B981',
    bounds: [6, 3, 10, 5],
    cells: coords(6, 3, 10, 5),
    // Right + top, below cms sub-seam
    spread: { dx: 26, dy: -10 },
  },
  {
    name: 'scope:auth',
    color: '#EF4444',
    bounds: [0, 6, 4, 10],
    cells: coords(0, 6, 4, 10),
    // Left + bottom quadrant
    spread: { dx: -26, dy: 26 },
  },
  {
    name: 'scope:payments',
    color: '#A855F7',
    bounds: [5, 6, 10, 8],
    cells: coords(5, 6, 10, 8),
    // Right + bottom, above shared sub-seam
    spread: { dx: 26, dy: 10 },
  },
  {
    name: 'scope:shared',
    color: '#F59E0B',
    bounds: [5, 9, 10, 10],
    cells: coords(5, 9, 10, 10),
    // Right + bottom, below payments sub-seam
    spread: { dx: 26, dy: 42 },
  },
];

function coords(
  c1: number,
  r1: number,
  c2: number,
  r2: number
): [number, number][] {
  const result: [number, number][] = [];
  for (let r = r1; r <= r2; r++) {
    for (let c = c1; c <= c2; c++) {
      result.push([c, r]);
    }
  }
  return result;
}

// Build lookup: "col,row" -> domainIndex
const cellMap = new Map<string, number>();
DOMAINS.forEach((domain, di) => {
  domain.cells.forEach(([c, r]) => {
    cellMap.set(`${c},${r}`, di);
  });
});

const SQUARE = 28;
const GAP = 6;
const STEP = SQUARE + GAP;
const BORDER_PAD = 5;
const LABEL_H = 16;

// Timing
const HOLD_COLORED = 3.5;
const FADE_BACK = 0.8;
const HOLD_GREY = 1.5;
const SPREAD_DURATION = 0.6;

const maxStagger = (ROWS + COLS) * 0.04 + (DOMAINS.length - 1) * 0.08;

// Connections between domains: [fromIndex, toIndex]
// Represents dependency/relationship lines between domain groups
const CONNECTIONS: [number, number][] = [
  [0, 1], // shop → cms
  [0, 2], // shop → analytics
  [0, 3], // shop → auth
  [3, 4], // auth → payments
  [4, 5], // payments → shared
  [2, 4], // analytics → payments
];

// Helper to get border rect center + edge points for a domain
function getDomainRect(di: number, spread: { dx: number; dy: number }) {
  const [c1, r1, c2, r2] = DOMAINS[di].bounds;
  const x = c1 * STEP - BORDER_PAD + spread.dx;
  const y = r1 * STEP - BORDER_PAD - LABEL_H / 2 + spread.dy;
  const w = (c2 - c1 + 1) * STEP - GAP + BORDER_PAD * 2;
  const h = (r2 - r1 + 1) * STEP - GAP + BORDER_PAD * 2 + LABEL_H / 2;
  return {
    cx: x + w / 2,
    cy: y + h / 2,
    left: x,
    right: x + w,
    top: y,
    bottom: y + h,
    w,
    h,
  };
}

// Find the best edge points to connect two rects
function getConnectionPoints(
  from: ReturnType<typeof getDomainRect>,
  to: ReturnType<typeof getDomainRect>
): { x1: number; y1: number; x2: number; y2: number } {
  const dx = to.cx - from.cx;
  const dy = to.cy - from.cy;

  let x1: number, y1: number, x2: number, y2: number;

  if (Math.abs(dx) > Math.abs(dy)) {
    // Horizontal connection
    if (dx > 0) {
      x1 = from.right;
      x2 = to.left;
    } else {
      x1 = from.left;
      x2 = to.right;
    }
    y1 = from.cy;
    y2 = to.cy;
  } else {
    // Vertical connection
    x1 = from.cx;
    x2 = to.cx;
    if (dy > 0) {
      y1 = from.bottom;
      y2 = to.top;
    } else {
      y1 = from.top;
      y2 = to.bottom;
    }
  }

  return { x1, y1, x2, y2 };
}

// The grid needs this much space (with max spread) to render without clipping
const GRID_W = COLS * STEP - GAP;
const GRID_H = ROWS * STEP - GAP;
// Account for spread + borders + labels
const RENDER_SIZE = Math.max(GRID_W, GRID_H) + 120;

export function DomainGridAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [scale, setScale] = useState(1);
  const [phase, setPhase] = useState<
    'grey' | 'colorizing' | 'colored' | 'fading'
  >('grey');
  const cycleRef = useRef<ReturnType<typeof setTimeout>>();

  // Intersection observer for activation
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

  // Resize observer to scale the grid to fit its container
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(Math.min(1, w / RENDER_SIZE));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const startCycle = useCallback(() => {
    setPhase('colorizing');

    const colorDone = (maxStagger + 0.5 + SPREAD_DURATION) * 1000;
    cycleRef.current = setTimeout(() => {
      setPhase('colored');

      cycleRef.current = setTimeout(() => {
        setPhase('fading');

        cycleRef.current = setTimeout(() => {
          setPhase('grey');

          cycleRef.current = setTimeout(() => {
            startCycle();
          }, HOLD_GREY * 1000);
        }, (FADE_BACK + SPREAD_DURATION) * 1000);
      }, HOLD_COLORED * 1000);
    }, colorDone);
  }, []);

  useEffect(() => {
    if (!activated) return;
    startCycle();
    return () => {
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  }, [activated, startCycle]);

  const spreading = phase === 'colorizing' || phase === 'colored';

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Inner grid at fixed size, scaled to fit container */}
      <div
        className="absolute origin-center"
        style={{
          width: GRID_W,
          height: GRID_H,
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {/* Squares */}
        {DOMAINS.map((domain, di) =>
          domain.cells.map(([c, r]) => {
            const baseX = c * STEP;
            const baseY = r * STEP;
            const stagger = (r + c) * 0.04 + di * 0.08;

            const targetX = spreading ? baseX + domain.spread.dx : baseX;
            const targetY = spreading ? baseY + domain.spread.dy : baseY;
            const targetColor =
              phase === 'colorizing' || phase === 'colored'
                ? domain.color
                : '#94A3B8';

            const posDelay = spreading ? maxStagger * 0.4 : 0;

            return (
              <motion.div
                key={`${c},${r}`}
                style={{
                  position: 'absolute',
                  width: SQUARE,
                  height: SQUARE,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderStyle: 'solid',
                }}
                animate={{
                  left: targetX,
                  top: targetY,
                  borderColor: targetColor,
                }}
                transition={{
                  left: {
                    duration: SPREAD_DURATION,
                    delay: posDelay,
                    ease: 'easeInOut',
                  },
                  top: {
                    duration: SPREAD_DURATION,
                    delay: posDelay,
                    ease: 'easeInOut',
                  },
                  borderColor: {
                    duration:
                      phase === 'colorizing'
                        ? 0.5
                        : phase === 'fading'
                          ? FADE_BACK
                          : 0,
                    delay: phase === 'colorizing' ? stagger : 0,
                    ease: phase === 'fading' ? 'easeIn' : 'easeOut',
                  },
                }}
              />
            );
          })
        )}

        {/* Domain borders + labels */}
        {DOMAINS.map((domain, di) => {
          const [c1, r1, c2, r2] = domain.bounds;

          const baseX = c1 * STEP - BORDER_PAD;
          const baseY = r1 * STEP - BORDER_PAD - LABEL_H / 2;
          const w = (c2 - c1 + 1) * STEP - GAP + BORDER_PAD * 2;
          const h =
            (r2 - r1 + 1) * STEP - GAP + BORDER_PAD * 2 + LABEL_H / 2;

          const targetX = spreading ? baseX + domain.spread.dx : baseX;
          const targetY = spreading ? baseY + domain.spread.dy : baseY;

          const borderStagger = di * 0.12 + maxStagger * 0.6;
          const posDelay = spreading ? maxStagger * 0.4 : 0;

          const visible = phase === 'colorizing' || phase === 'colored';
          const opacity = visible ? 1 : 0;
          const opacityDelay =
            phase === 'colorizing' ? borderStagger : 0;
          const opacityDuration =
            phase === 'colorizing' ? 0.5 : phase === 'fading' ? FADE_BACK * 0.6 : 0;

          return (
            <motion.div
              key={`border-${domain.name}`}
              style={{
                position: 'absolute',
                width: w,
                height: h,
                borderRadius: 7,
                borderWidth: 1.5,
                borderStyle: 'solid',
                borderColor: domain.color,
                pointerEvents: 'none',
              }}
              animate={{
                left: targetX,
                top: targetY,
                opacity,
              }}
              transition={{
                left: {
                  duration: SPREAD_DURATION,
                  delay: posDelay,
                  ease: 'easeInOut',
                },
                top: {
                  duration: SPREAD_DURATION,
                  delay: posDelay,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: opacityDuration,
                  delay: opacityDelay,
                },
              }}
            >
              {/* Label on top border */}
              <div
                className="absolute -top-2 left-2 flex items-center"
                style={{ height: LABEL_H }}
              >
                <span
                  className="rounded px-1.5 py-0.5 font-mono text-[10px] font-medium"
                  style={{
                    color: domain.color,
                    backgroundColor: '#0F172A',
                  }}
                >
                  {domain.name}
                </span>
              </div>
            </motion.div>
          );
        })}
        {/* Connection lines between domains */}
        <svg
          className="pointer-events-none absolute inset-0"
          style={{
            width: GRID_W,
            height: GRID_H,
            overflow: 'visible',
          }}
        >
          {CONNECTIONS.map(([fromIdx, toIdx]) => {
            const fromSpread = spreading
              ? DOMAINS[fromIdx].spread
              : { dx: 0, dy: 0 };
            const toSpread = spreading
              ? DOMAINS[toIdx].spread
              : { dx: 0, dy: 0 };
            const fromRect = getDomainRect(fromIdx, fromSpread);
            const toRect = getDomainRect(toIdx, toSpread);
            const { x1, y1, x2, y2 } = getConnectionPoints(
              fromRect,
              toRect
            );

            const connDelay =
              Math.max(fromIdx, toIdx) * 0.12 + maxStagger * 0.7;

            const visible =
              phase === 'colorizing' || phase === 'colored';
            const opacity = visible ? 0.35 : 0;
            const opacityDelay =
              phase === 'colorizing' ? connDelay : 0;
            const opacityDuration =
              phase === 'colorizing'
                ? 0.5
                : phase === 'fading'
                  ? FADE_BACK * 0.5
                  : 0;

            const posDelay = spreading ? maxStagger * 0.4 : 0;

            return (
              <motion.line
                key={`conn-${fromIdx}-${toIdx}`}
                stroke="#94A3B8"
                strokeWidth={1}
                strokeDasharray="4 3"
                animate={{
                  x1,
                  y1,
                  x2,
                  y2,
                  opacity,
                }}
                transition={{
                  x1: {
                    duration: SPREAD_DURATION,
                    delay: posDelay,
                    ease: 'easeInOut',
                  },
                  y1: {
                    duration: SPREAD_DURATION,
                    delay: posDelay,
                    ease: 'easeInOut',
                  },
                  x2: {
                    duration: SPREAD_DURATION,
                    delay: posDelay,
                    ease: 'easeInOut',
                  },
                  y2: {
                    duration: SPREAD_DURATION,
                    delay: posDelay,
                    ease: 'easeInOut',
                  },
                  opacity: {
                    duration: opacityDuration,
                    delay: opacityDelay,
                  },
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
