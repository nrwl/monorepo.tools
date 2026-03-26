'use client';
import { useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './use-in-view';
import { drawRotatingCube } from './rotating-cube';

const CUBE_COLOR_OFF = 'rgba(148,163,184,0.55)';
const CUBE_COLOR_ON = 'rgba(52,211,153,0.45)';
const INNER_COLOR = 'rgba(148,163,184,0.8)';
const INNER_COLOR_OPAQUE = 'rgba(148,163,184,0.95)';
const CONNECTION_COLOR = 'rgba(100,160,200,0.45)';
const PULSE_COLOR = 'rgba(251,191,36,0.9)';
const MONO_BORDER_COLOR = 'rgba(148,163,184,0.3)';
const OUTER_BORDER_COLOR = 'rgba(148,163,184,0.2)';

interface CubeConfig {
  cx: number;
  cy: number;
  outerSize: number;
  innerSize: number;
  label: string;
  sublabel?: string;
  angleOffset: number;
}

const CANVAS_W = 580;
const CANVAS_H = 460;

// --- "ON" state: expanded monorepo internals ---

const MONO_A_CUBES: CubeConfig[] = [
  { cx: 80, cy: 80, outerSize: 50, innerSize: 20, label: 'App 1', sublabel: 'frontend', angleOffset: 0 },
  { cx: 175, cy: 60, outerSize: 42, innerSize: 17, label: 'Lib A', sublabel: 'utils', angleOffset: 1.4 },
  { cx: 175, cy: 120, outerSize: 42, innerSize: 17, label: 'Lib B', sublabel: 'ui', angleOffset: 3.2 },
];

const MONO_B_CUBES: CubeConfig[] = [
  { cx: 400, cy: 80, outerSize: 50, innerSize: 20, label: 'App 2', sublabel: 'backend', angleOffset: 2.1 },
  { cx: 500, cy: 80, outerSize: 42, innerSize: 17, label: 'Lib C', sublabel: 'auth', angleOffset: 4.6 },
];

const STANDALONE_CUBES: CubeConfig[] = [
  { cx: 100, cy: 340, outerSize: 55, innerSize: 22, label: 'App 3', sublabel: 'mobile', angleOffset: 0.8 },
  { cx: 300, cy: 230, outerSize: 48, innerSize: 19, label: 'Lib D', sublabel: 'shared', angleOffset: 3.9 },
  { cx: 300, cy: 370, outerSize: 48, innerSize: 19, label: 'Lib E', sublabel: 'design', angleOffset: 5.2 },
  { cx: 490, cy: 330, outerSize: 55, innerSize: 22, label: 'App 4', sublabel: 'API', angleOffset: 1.7 },
];

const ALL_CUBES = [...MONO_A_CUBES, ...MONO_B_CUBES, ...STANDALONE_CUBES];

// --- "OFF" state: collapsed black-box cubes ---

const COLLAPSED_CUBES: CubeConfig[] = [
  // Monorepo A as single large cube (centered in its boundary area)
  { cx: 140, cy: 95, outerSize: 85, innerSize: 40, label: 'Monorepo A', angleOffset: 0.5 },
  // Monorepo B as single large cube
  { cx: 455, cy: 85, outerSize: 80, innerSize: 38, label: 'Monorepo B', angleOffset: 2.8 },
  // Standalone repos (same positions, slightly larger/more opaque)
  { cx: 100, cy: 340, outerSize: 60, innerSize: 28, label: 'App 3', sublabel: 'mobile', angleOffset: 0.8 },
  { cx: 300, cy: 230, outerSize: 55, innerSize: 26, label: 'Lib D', sublabel: 'shared', angleOffset: 3.9 },
  { cx: 300, cy: 370, outerSize: 55, innerSize: 26, label: 'Lib E', sublabel: 'design', angleOffset: 5.2 },
  { cx: 490, cy: 330, outerSize: 60, innerSize: 28, label: 'App 4', sublabel: 'API', angleOffset: 1.7 },
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

export function SyntheticMonorepoAnimation() {
  const { ref, inView } = useInView(0.2);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const hoveredRef = useRef<number>(-1);
  // Use max length for pause tracking (covers both states)
  const maxCubes = Math.max(ALL_CUBES.length, COLLAPSED_CUBES.length);
  const pauseStartRef = useRef<(number | null)[]>(Array(maxCubes).fill(null));
  const pauseAccumRef = useRef<number[]>(Array(maxCubes).fill(0));
  const [synthetic, setSynthetic] = useState(false);
  const syntheticRef = useRef(false);

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

        // Outer dashed boundary
        ctx.strokeStyle = OUTER_BORDER_COLOR;
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        ctx.beginPath();
        ctx.roundRect(14, 14, CANVAS_W - 28, CANVAS_H - 28, 12);
        ctx.stroke();
        ctx.setLineDash([]);

        // Monorepo A boundary
        ctx.strokeStyle = MONO_BORDER_COLOR;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.roundRect(30, 30, 220, 130, 8);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.font = '10px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgba(148,163,184,0.5)';
        ctx.fillText('Monorepo A', 40, 46);

        // Monorepo B boundary
        ctx.setLineDash([4, 3]);
        ctx.strokeStyle = MONO_BORDER_COLOR;
        ctx.beginPath();
        ctx.roundRect(350, 30, 210, 120, 8);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.textAlign = 'left';
        ctx.fillText('Monorepo B', 360, 46);

        // Standalone repo sublabels
        ctx.font = '8px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(148,163,184,0.4)';
        for (const cube of STANDALONE_CUBES) {
          ctx.fillText('standalone repo', cube.cx, cube.cy + cube.outerSize / 2 + 28);
        }

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
          drawPulse(ctx, f.cx, f.cy, tgt.cx, tgt.cy, t, i * 0.5);
        }

        // All expanded cubes
        for (let i = 0; i < ALL_CUBES.length; i++) {
          drawCubeWithPause(ctx, t, i, ALL_CUBES[i], CUBE_COLOR_ON, INNER_COLOR);
        }

        // Cube labels (two-line)
        ctx.textAlign = 'center';
        for (const cube of ALL_CUBES) {
          const baseY = cube.cy + cube.outerSize / 2 + 12;
          ctx.font = 'bold 9px system-ui, sans-serif';
          ctx.fillStyle = 'rgba(148,163,184,0.8)';
          ctx.fillText(cube.label, cube.cx, baseY);
          if (cube.sublabel) {
            ctx.font = '8px system-ui, sans-serif';
            ctx.fillStyle = 'rgba(148,163,184,0.5)';
            ctx.fillText(cube.sublabel, cube.cx, baseY + 11);
          }
        }

        // Bottom label
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(148,163,184,0.4)';
        ctx.fillText('Synthetic Monorepo', CANVAS_W / 2, CANVAS_H - 22);

      } else {
        // === SYNTHETIC OFF: black-box view ===

        // Draw collapsed cubes (fully opaque dark faces, no inner cube, subtle edge highlight)
        for (let i = 0; i < COLLAPSED_CUBES.length; i++) {
          drawCubeWithPause(ctx, t, i, COLLAPSED_CUBES[i], 'rgba(51,65,85,0.9)', INNER_COLOR_OPAQUE, 1.0, 0, '#1e293b');
        }

        // Labels (extra offset for large black-box cubes)
        ctx.textAlign = 'center';
        for (const cube of COLLAPSED_CUBES) {
          const baseY = cube.cy + cube.outerSize / 2 + 22;
          ctx.font = 'bold 10px system-ui, sans-serif';
          ctx.fillStyle = 'rgba(148,163,184,0.8)';
          ctx.fillText(cube.label, cube.cx, baseY);
          if (cube.sublabel) {
            ctx.font = '9px system-ui, sans-serif';
            ctx.fillStyle = 'rgba(148,163,184,0.5)';
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
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700">
        <div className="flex items-center justify-center">
          <canvas ref={canvasRef} className="block cursor-pointer" />
        </div>
      </div>

      {/* Toggle */}
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
    </motion.div>
  );
}
