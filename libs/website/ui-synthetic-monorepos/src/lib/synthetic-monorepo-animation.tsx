'use client';
import { useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './use-in-view';
import { drawRotatingCube } from './rotating-cube';

const CUBE_COLOR_OFF = 'rgba(148,163,184,0.55)';
const CUBE_COLOR_ON = 'rgba(52,211,153,0.45)';
const INNER_COLOR = 'rgba(148,163,184,0.9)';
const INNER_COLOR_OPAQUE = 'rgba(148,163,184,0.95)';
const CONNECTION_COLOR = 'rgba(100,160,200,0.55)';
const PULSE_COLOR = 'rgba(251,191,36,0.9)';
const MONO_BORDER_COLOR = 'rgba(148,163,184,0.4)';
const OUTER_BORDER_COLOR = 'rgba(148,163,184,0.3)';

interface CubeConfig {
  cx: number;
  cy: number;
  outerSize: number;
  innerSize: number;
  label: string;
  sublabel?: string;
  angleOffset: number;
}

const CANVAS_W = 620;
const CANVAS_H = 500;

// --- "ON" state: expanded monorepo internals ---

const MONO_A_CUBES: CubeConfig[] = [
  { cx: 115, cy: 80, outerSize: 48, innerSize: 19, label: 'App 1', sublabel: 'frontend', angleOffset: 0 },
  { cx: 240, cy: 60, outerSize: 40, innerSize: 16, label: 'Lib A', sublabel: 'utils', angleOffset: 1.4 },
  { cx: 180, cy: 155, outerSize: 40, innerSize: 16, label: 'Lib B', sublabel: 'ui', angleOffset: 3.2 },
];

const MONO_B_CUBES: CubeConfig[] = [
  { cx: 400, cy: 80, outerSize: 50, innerSize: 20, label: 'App 2', sublabel: 'backend', angleOffset: 2.1 },
  { cx: 500, cy: 80, outerSize: 42, innerSize: 17, label: 'Lib C', sublabel: 'auth', angleOffset: 4.6 },
];

const STANDALONE_CUBES: CubeConfig[] = [
  { cx: 100, cy: 380, outerSize: 55, innerSize: 22, label: 'Mobile App', angleOffset: 0.8 },
  { cx: 300, cy: 270, outerSize: 48, innerSize: 19, label: 'Shared Utilities', angleOffset: 3.9 },
  { cx: 300, cy: 410, outerSize: 48, innerSize: 19, label: 'Design System', angleOffset: 5.2 },
  { cx: 490, cy: 370, outerSize: 55, innerSize: 22, label: 'API', angleOffset: 1.7 },
];

const ALL_CUBES = [...MONO_A_CUBES, ...MONO_B_CUBES, ...STANDALONE_CUBES];

// --- "OFF" state: collapsed black-box cubes ---

const COLLAPSED_CUBES: CubeConfig[] = [
  { cx: 175, cy: 110, outerSize: 85, innerSize: 40, label: 'Monorepo A', angleOffset: 0.5 },
  { cx: 455, cy: 85, outerSize: 80, innerSize: 38, label: 'Monorepo B', angleOffset: 2.8 },
  { cx: 100, cy: 380, outerSize: 60, innerSize: 28, label: 'Mobile App', angleOffset: 0.8 },
  { cx: 300, cy: 270, outerSize: 55, innerSize: 26, label: 'Shared Utilities', angleOffset: 3.9 },
  { cx: 300, cy: 410, outerSize: 55, innerSize: 26, label: 'Design System', angleOffset: 5.2 },
  { cx: 490, cy: 370, outerSize: 60, innerSize: 28, label: 'API', angleOffset: 1.7 },
];

const INTRA_EDGES = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 3, to: 4 },
];

const CROSS_CONNECTIONS = [
  { from: 1, to: 6 },
  { from: 2, to: 6 },
  { from: 3, to: 6 },
  { from: 4, to: 8 },
  { from: 5, to: 7 },
  { from: 5, to: 6 },
  { from: 8, to: 6 },
  { from: 8, to: 7 },
];

// --- Agent fleet (only for alwaysSynthetic mode) ---

const COORDINATOR = { cx: 55, cy: 275 };
const AGENT_TARGETS = [
  ALL_CUBES[7],  // Design System
  ALL_CUBES[8],  // API
  ALL_CUBES[6],  // Shared Utilities
  ALL_CUBES[2],  // Lib B
  ALL_CUBES[4],  // Lib C
];
// Phase timings within cycle (total ~12s)
const EMERGE_END = 1.2;      // dots emerge from coordinator
const CONNECT_END = 2.5;     // lines appear, dots get halo
const SPREAD_END = 4.5;      // fly out to targets + ring pulse
const AT_TARGET_END = 8;     // pulsing at targets
const RETURN_END = 9.8;      // fly back toward coordinator
const ABSORB_END = 10.5;     // shrink into coordinator
const AGENT_CYCLE = 11.5;    // pause before restart

const COORDINATOR_COLOR = 'rgba(251,146,60,0.9)';
const COORDINATOR_GLOW = 'rgba(251,146,60,0.15)';
const AGENT_COLOR = 'rgba(251,146,60,0.85)';
const AGENT_LINE_COLOR = 'rgba(251,146,60,0.3)';
const AGENT_LINE_ACTIVE_COLOR = 'rgba(251,146,60,0.45)';

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// Resting positions: tight half-circle arc in front of (to the right of) coordinator
function getRestPos(i: number): { x: number; y: number } {
  const arcR = 30;
  // Narrower arc: -70deg to +70deg, biased to the right
  const angleStart = -Math.PI * 0.39;
  const angleEnd = Math.PI * 0.39;
  const angle = angleStart + (i / (AGENT_TARGETS.length - 1)) * (angleEnd - angleStart);
  return {
    x: COORDINATOR.cx + 18 + Math.cos(angle) * arcR,
    y: COORDINATOR.cy + Math.sin(angle) * arcR,
  };
}

function drawAgentFleet(ctx: CanvasRenderingContext2D, t: number) {
  const phase = t % AGENT_CYCLE;

  // Draw coordinator (always visible)
  ctx.beginPath();
  ctx.arc(COORDINATOR.cx, COORDINATOR.cy, 28, 0, Math.PI * 2);
  ctx.fillStyle = COORDINATOR_GLOW;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(COORDINATOR.cx, COORDINATOR.cy, 18, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(251,146,60,0.08)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(COORDINATOR.cx, COORDINATOR.cy, 8, 0, Math.PI * 2);
  ctx.fillStyle = COORDINATOR_COLOR;
  ctx.fill();
  ctx.font = 'bold 9px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(251,146,60,0.8)';
  ctx.fillText('Polygraph AI', COORDINATOR.cx, COORDINATOR.cy + 38);

  // Expanding ring during spread phase
  if (phase >= CONNECT_END && phase < SPREAD_END + 1.0) {
    const ringP = (phase - CONNECT_END) / (SPREAD_END - CONNECT_END + 1.0);
    const ringR = 20 + ringP * 35;
    const ringAlpha = Math.max(0, 0.25 * (1 - ringP));
    ctx.beginPath();
    ctx.arc(COORDINATOR.cx, COORDINATOR.cy, ringR, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(251,146,60,${ringAlpha})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Draw agents per phase
  for (let i = 0; i < AGENT_TARGETS.length; i++) {
    const target = AGENT_TARGETS[i];
    const rest = getRestPos(i);

    let ax: number, ay: number;
    let dotR = 4.5;
    let showHalo = false;
    let showLine = false;
    let dotAlpha = 1;
    let dotPulse = 1;

    if (phase < EMERGE_END) {
      // Emerge: dots move from coordinator center to rest positions
      const p = easeOutCubic(phase / EMERGE_END);
      ax = COORDINATOR.cx + (rest.x - COORDINATOR.cx) * p;
      ay = COORDINATOR.cy + (rest.y - COORDINATOR.cy) * p;
      dotR = 3 + p * 2;
      dotAlpha = p;
    } else if (phase < CONNECT_END) {
      // Connect: lines appear, halos fade in
      ax = rest.x;
      ay = rest.y;
      const p = (phase - EMERGE_END) / (CONNECT_END - EMERGE_END);
      showLine = true;
      showHalo = true;
      dotR = 5;
      dotAlpha = 1;
      // Lines fade in
      ctx.beginPath();
      ctx.moveTo(COORDINATOR.cx, COORDINATOR.cy);
      ctx.lineTo(ax, ay);
      ctx.strokeStyle = `rgba(251,146,60,${0.3 * p})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Halo fades in
      ctx.beginPath();
      ctx.arc(ax, ay, 12, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(251,146,60,${0.1 * p})`;
      ctx.fill();
    } else if (phase < SPREAD_END) {
      // Spread: fly from rest to target
      const p = easeInOutCubic((phase - CONNECT_END) / (SPREAD_END - CONNECT_END));
      ax = rest.x + (target.cx - rest.x) * p;
      ay = rest.y + (target.cy - rest.y) * p;
      showHalo = true;
      showLine = true;
      dotR = 6;
    } else if (phase < AT_TARGET_END) {
      // At target: pulse dots
      ax = target.cx;
      ay = target.cy;
      dotPulse = 0.5 + 0.5 * Math.sin((phase - SPREAD_END) * 4);
      showHalo = true;
      showLine = true;
      dotR = 6 + (1 - dotPulse) * 4;
    } else if (phase < RETURN_END) {
      // Return: fly back to coordinator
      const p = easeInOutCubic((phase - AT_TARGET_END) / (RETURN_END - AT_TARGET_END));
      ax = target.cx + (COORDINATOR.cx - target.cx) * p;
      ay = target.cy + (COORDINATOR.cy - target.cy) * p;
      showLine = false;
      showHalo = true;
      dotR = 6 * (1 - p * 0.3);
      // Fade line out
      const lineAlpha = 0.3 * (1 - p);
      if (lineAlpha > 0.01) {
        ctx.beginPath();
        ctx.moveTo(COORDINATOR.cx, COORDINATOR.cy);
        ctx.lineTo(ax, ay);
        ctx.strokeStyle = `rgba(251,146,60,${lineAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    } else if (phase < ABSORB_END) {
      // Absorb: shrink into coordinator center
      const p = (phase - RETURN_END) / (ABSORB_END - RETURN_END);
      ax = COORDINATOR.cx;
      ay = COORDINATOR.cy;
      dotR = 4.5 * (1 - p);
      dotAlpha = 1 - p;
      showHalo = false;
    } else {
      // Hidden until next cycle
      continue;
    }

    // Draw line (for spread + at-target phases not handled above)
    if (showLine && phase >= CONNECT_END && phase < AT_TARGET_END) {
      ctx.beginPath();
      ctx.moveTo(COORDINATOR.cx, COORDINATOR.cy);
      ctx.lineTo(ax, ay);
      ctx.strokeStyle = phase >= SPREAD_END ? AGENT_LINE_ACTIVE_COLOR : AGENT_LINE_COLOR;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Agent dot
    if (dotR > 0.2) {
      ctx.globalAlpha = dotAlpha;
      ctx.beginPath();
      ctx.arc(ax, ay, dotR, 0, Math.PI * 2);
      ctx.fillStyle = AGENT_COLOR;
      ctx.fill();

      // Halo
      if (showHalo) {
        const glowR = 14 + (1 - dotPulse) * 8;
        ctx.beginPath();
        ctx.arc(ax, ay, glowR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251,146,60,${0.08 + (1 - dotPulse) * 0.08})`;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }
}

const SPEED = 0.4;
const HIT_RADIUS = 30;

function drawPulse(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number, x2: number, y2: number,
  t: number, offset: number
) {
  const progress = ((t * 0.25 + offset) % 1.8) - 0.4;
  if (progress < 0 || progress > 1) return;
  const px = x1 + (x2 - x1) * progress;
  const py = y1 + (y2 - y1) * progress;
  const alpha = progress < 0.15 ? progress / 0.15 : progress > 0.85 ? (1 - progress) / 0.15 : 1;
  ctx.beginPath();
  ctx.arc(px, py, 3, 0, Math.PI * 2);
  ctx.fillStyle = PULSE_COLOR;
  ctx.globalAlpha = alpha * 0.8;
  ctx.fill();
  ctx.globalAlpha = 1;
}

export function SyntheticMonorepoAnimation({ alwaysSynthetic = false }: { alwaysSynthetic?: boolean } = {}) {
  const { ref, inView } = useInView(0.2);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const hoveredRef = useRef<number>(-1);
  // Use max length for pause tracking (covers both states)
  const maxCubes = Math.max(ALL_CUBES.length, COLLAPSED_CUBES.length);
  const pauseStartRef = useRef<(number | null)[]>(Array(maxCubes).fill(null));
  const pauseAccumRef = useRef<number[]>(Array(maxCubes).fill(0));
  const [synthetic, setSynthetic] = useState(alwaysSynthetic);
  const syntheticRef = useRef(false);
  const alwaysSyntheticRef = useRef(alwaysSynthetic);

  useEffect(() => { syntheticRef.current = synthetic; }, [synthetic]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    const cubes = syntheticRef.current ? ALL_CUBES : COLLAPSED_CUBES;
    let found = -1;
    for (let i = 0; i < cubes.length; i++) {
      const dx = mx - cubes[i].cx;
      const dy = my - cubes[i].cy;
      if (Math.sqrt(dx * dx + dy * dy) < HIT_RADIUS) { found = i; break; }
    }

    const prev = hoveredRef.current;
    hoveredRef.current = found;
    if (found !== -1 && found !== prev) {
      pauseStartRef.current[found] = performance.now() / 1000;
    }
    if (prev !== -1 && prev !== found && pauseStartRef.current[prev] !== null) {
      pauseAccumRef.current[prev] += performance.now() / 1000 - pauseStartRef.current[prev]!;
      pauseStartRef.current[prev] = null;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const prev = hoveredRef.current;
    if (prev !== -1 && pauseStartRef.current[prev] !== null) {
      pauseAccumRef.current[prev] += performance.now() / 1000 - pauseStartRef.current[prev]!;
      pauseStartRef.current[prev] = null;
    }
    hoveredRef.current = -1;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !inView) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_W * dpr;
    canvas.height = CANVAS_H * dpr;
    canvas.style.width = `${CANVAS_W}px`;
    canvas.style.height = `${CANVAS_H}px`;
    ctx.scale(dpr, dpr);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    function drawCubeWithPause(
      ctx: CanvasRenderingContext2D,
      t: number,
      i: number,
      cube: CubeConfig,
      color: string,
      innerCol: string,
      outerFill?: number,
      innerFill?: number,
      outerFaceFill?: string
    ) {
      const isHovered = hoveredRef.current === i;
      let pauseTotal = pauseAccumRef.current[i];
      if (isHovered && pauseStartRef.current[i] !== null) {
        pauseTotal += t - pauseStartRef.current[i]!;
      }
      drawRotatingCube(ctx, t - pauseTotal, {
        cx: cube.cx, cy: cube.cy,
        size: cube.outerSize, innerSize: cube.innerSize,
        color, innerColor: innerCol,
        speed: SPEED, angleOffset: cube.angleOffset,
        outerFillOpacity: outerFill,
        innerFillOpacity: innerFill,
        outerFaceFillColor: outerFaceFill,
        canvasWidth: CANVAS_W, canvasHeight: CANVAS_H,
      });
    }

    function draw(time: number) {
      if (!ctx) return;
      const t = time / 1000;
      const isSynthetic = syntheticRef.current;

      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      if (isSynthetic) {
        // === SYNTHETIC ON: expanded view ===

        // Monorepo A boundary
        ctx.strokeStyle = MONO_BORDER_COLOR;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.roundRect(70, 25, 220, 185, 8);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.font = '10px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgba(148,163,184,0.65)';
        ctx.fillText('Monorepo A', 80, 42);

        // Monorepo B boundary
        ctx.setLineDash([4, 3]);
        ctx.strokeStyle = MONO_BORDER_COLOR;
        ctx.beginPath();
        ctx.roundRect(350, 30, 210, 120, 8);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.textAlign = 'left';
        ctx.fillText('Monorepo B', 360, 46);

        // Intra-monorepo connections
        ctx.strokeStyle = 'rgba(148,163,184,0.3)';
        ctx.lineWidth = 1;
        for (const edge of INTRA_EDGES) {
          const f = ALL_CUBES[edge.from];
          const tgt = ALL_CUBES[edge.to];
          ctx.beginPath();
          ctx.moveTo(f.cx, f.cy);
          ctx.lineTo(tgt.cx, tgt.cy);
          ctx.stroke();
        }

        // Cross-repo connections + pulses
        for (let i = 0; i < CROSS_CONNECTIONS.length; i++) {
          const conn = CROSS_CONNECTIONS[i];
          const f = ALL_CUBES[conn.from];
          const tgt = ALL_CUBES[conn.to];
          ctx.strokeStyle = CONNECTION_COLOR;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(f.cx, f.cy);
          ctx.lineTo(tgt.cx, tgt.cy);
          ctx.stroke();
          if (!alwaysSyntheticRef.current) {
            drawPulse(ctx, f.cx, f.cy, tgt.cx, tgt.cy, t, i * 0.5);
          }
        }

        // All expanded cubes
        for (let i = 0; i < ALL_CUBES.length; i++) {
          drawCubeWithPause(ctx, t, i, ALL_CUBES[i], CUBE_COLOR_ON, INNER_COLOR);
        }

        // Cube labels (two-line)
        ctx.textAlign = 'center';
        for (const cube of ALL_CUBES) {
          const baseY = cube.cy + cube.outerSize / 2 + 20;
          ctx.font = 'bold 9px system-ui, sans-serif';
          ctx.fillStyle = 'rgba(148,163,184,0.9)';
          ctx.fillText(cube.label, cube.cx, baseY);
          if (cube.sublabel) {
            ctx.font = '8px system-ui, sans-serif';
            ctx.fillStyle = 'rgba(148,163,184,0.65)';
            ctx.fillText(cube.sublabel, cube.cx, baseY + 11);
          }
        }

        // Bottom label (outside boundary, only for alwaysSynthetic since toggle version has the toggle label)
        if (alwaysSyntheticRef.current) {
          ctx.font = 'bold 13px system-ui, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'rgba(148,163,184,0.55)';
          ctx.fillText('Synthetic Monorepo', CANVAS_W / 2, CANVAS_H - 10);
        }

        // Agent fleet overlay (only in alwaysSynthetic mode)
        if (alwaysSyntheticRef.current) {
          drawAgentFleet(ctx, t);
        }

      } else {
        // === SYNTHETIC OFF: black-box view ===

        // Draw collapsed cubes (fully opaque dark faces, no inner cube, subtle edge highlight)
        for (let i = 0; i < COLLAPSED_CUBES.length; i++) {
          drawCubeWithPause(ctx, t, i, COLLAPSED_CUBES[i], 'rgba(71,85,105,0.95)', INNER_COLOR_OPAQUE, 1.0, 0, '#1e293b');
        }

        // Labels
        ctx.textAlign = 'center';
        for (const cube of COLLAPSED_CUBES) {
          const baseY = cube.cy + cube.outerSize / 2 + 28;
          ctx.font = 'bold 10px system-ui, sans-serif';
          ctx.fillStyle = 'rgba(148,163,184,0.9)';
          ctx.fillText(cube.label, cube.cx, baseY);
          if (cube.sublabel) {
            ctx.font = '9px system-ui, sans-serif';
            ctx.fillStyle = 'rgba(148,163,184,0.65)';
            ctx.fillText(cube.sublabel, cube.cx, baseY + 12);
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [inView, handleMouseMove, handleMouseLeave]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className={`overflow-hidden rounded-lg bg-slate-900 ${synthetic ? 'border border-dashed border-slate-400/40 dark:border-slate-500/30' : ''}`}>
        <div className="flex items-center justify-center">
          <canvas ref={canvasRef} className="block cursor-pointer" />
        </div>
      </div>

      {/* Toggle */}
      {!alwaysSynthetic && (
        <div className="mt-4 flex items-center justify-center">
          <label className="flex cursor-pointer items-center gap-2.5 text-[11px] uppercase tracking-[1.5px]">
            <button
              role="switch"
              aria-checked={synthetic}
              onClick={() => setSynthetic(!synthetic)}
              className={`relative inline-flex h-3.5 w-7 shrink-0 items-center rounded-full border transition-colors ${
                synthetic
                  ? 'border-emerald-400/50 bg-emerald-500/20'
                  : 'border-slate-600 bg-slate-800'
              }`}
            >
              <span
                className={`inline-block h-2 w-2 rounded-full transition-all ${
                  synthetic
                    ? 'translate-x-3.5 bg-emerald-400'
                    : 'translate-x-0.5 bg-slate-500'
                }`}
              />
            </button>
            <span
              className={`transition-colors ${
                synthetic ? 'text-slate-200' : 'text-slate-500'
              }`}
            >
              Synthetic Monorepo
            </span>
          </label>
        </div>
      )}
    </motion.div>
  );
}
