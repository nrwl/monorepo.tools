'use client';
import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './use-in-view';
import { drawRotatingCube } from './rotating-cube';

/*
 * Synthetic monorepo visualization based on the reference diagram:
 * - Two monorepo boundary boxes at top (Monorepo A with frontend+utils+ui,
 *   Monorepo B with backend+auth)
 * - Standalone repo cubes scattered below (mobile, shared, design, API)
 * - Green connection lines between all of them with data flow pulses
 * - Dashed outer boundary representing the synthetic monorepo
 */

const CUBE_COLOR = 'rgba(52,211,153,0.45)';
const INNER_COLOR = 'rgba(148,163,184,0.8)';
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

// Monorepo A contents (top-left box)
const MONO_A_CUBES: CubeConfig[] = [
  { cx: 80, cy: 80, outerSize: 50, innerSize: 20, label: 'App 1', sublabel: 'frontend', angleOffset: 0 },
  { cx: 175, cy: 60, outerSize: 42, innerSize: 17, label: 'Lib A', sublabel: 'utils', angleOffset: 1.4 },
  { cx: 175, cy: 120, outerSize: 42, innerSize: 17, label: 'Lib B', sublabel: 'ui', angleOffset: 3.2 },
];

// Monorepo B contents (top-right box)
const MONO_B_CUBES: CubeConfig[] = [
  { cx: 400, cy: 80, outerSize: 50, innerSize: 20, label: 'App 2', sublabel: 'backend', angleOffset: 2.1 },
  { cx: 500, cy: 80, outerSize: 42, innerSize: 17, label: 'Lib C', sublabel: 'auth', angleOffset: 4.6 },
];

// Standalone repos (scattered below)
const STANDALONE_CUBES: CubeConfig[] = [
  { cx: 100, cy: 340, outerSize: 55, innerSize: 22, label: 'App 3', sublabel: 'mobile', angleOffset: 0.8 },
  { cx: 300, cy: 230, outerSize: 48, innerSize: 19, label: 'Lib D', sublabel: 'shared', angleOffset: 3.9 },
  { cx: 300, cy: 370, outerSize: 48, innerSize: 19, label: 'Lib E', sublabel: 'design', angleOffset: 5.2 },
  { cx: 490, cy: 330, outerSize: 55, innerSize: 22, label: 'App 4', sublabel: 'API', angleOffset: 1.7 },
];

const ALL_CUBES = [...MONO_A_CUBES, ...MONO_B_CUBES, ...STANDALONE_CUBES];

// Cross-repo connections (indices into ALL_CUBES)
// 0=App1, 1=LibA, 2=LibB, 3=App2, 4=LibC, 5=App3, 6=LibD, 7=LibE, 8=App4
const CONNECTIONS = [
  { from: 1, to: 6 },  // Lib A (utils) -> Lib D (shared)
  { from: 2, to: 6 },  // Lib B (ui) -> Lib D (shared)
  { from: 3, to: 6 },  // App 2 (backend) -> Lib D (shared)
  { from: 4, to: 8 },  // Lib C (auth) -> App 4 (API)
  { from: 5, to: 7 },  // App 3 (mobile) -> Lib E (design)
  { from: 5, to: 6 },  // App 3 (mobile) -> Lib D (shared)
  { from: 8, to: 6 },  // App 4 (API) -> Lib D (shared)
  { from: 8, to: 7 },  // App 4 (API) -> Lib E (design)
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
  const pauseStartRef = useRef<(number | null)[]>(ALL_CUBES.map(() => null));
  const pauseAccumRef = useRef<number[]>(ALL_CUBES.map(() => 0));

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    let found = -1;
    for (let i = 0; i < ALL_CUBES.length; i++) {
      const dx = mx - ALL_CUBES[i].cx;
      const dy = my - ALL_CUBES[i].cy;
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

    function draw(time: number) {
      if (!ctx) return;
      const t = time / 1000;
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      // Outer dashed boundary (synthetic monorepo)
      ctx.strokeStyle = OUTER_BORDER_COLOR;
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 6]);
      const pad = 14;
      ctx.beginPath();
      ctx.roundRect(pad, pad, CANVAS_W - pad * 2, CANVAS_H - pad * 2, 12);
      ctx.stroke();
      ctx.setLineDash([]);

      // Monorepo A boundary box
      ctx.strokeStyle = MONO_BORDER_COLOR;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.roundRect(30, 30, 220, 130, 8);
      ctx.stroke();
      ctx.setLineDash([]);

      // Monorepo A label
      ctx.font = '10px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(148,163,184,0.5)';
      ctx.fillText('Monorepo A', 40, 46);

      // Monorepo B boundary box
      ctx.setLineDash([4, 3]);
      ctx.strokeStyle = MONO_BORDER_COLOR;
      ctx.beginPath();
      ctx.roundRect(350, 30, 210, 120, 8);
      ctx.stroke();
      ctx.setLineDash([]);

      // Monorepo B label
      ctx.textAlign = 'left';
      ctx.fillText('Monorepo B', 360, 46);

      // Standalone repo labels
      ctx.font = '8px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(148,163,184,0.4)';
      for (const cube of STANDALONE_CUBES) {
        ctx.fillText('standalone repo', cube.cx, cube.cy + cube.outerSize / 2 + 28);
      }

      // Intra-monorepo connections (solid, subtle)
      const INTRA_EDGES = [
        // Monorepo A: App 1 -> Lib A, App 1 -> Lib B
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        // Monorepo B: App 2 -> Lib C
        { from: 3, to: 4 },
      ];
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

      // Cross-repo connections
      for (let i = 0; i < CONNECTIONS.length; i++) {
        const conn = CONNECTIONS[i];
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

      // Draw all cubes
      for (let i = 0; i < ALL_CUBES.length; i++) {
        const cube = ALL_CUBES[i];
        const isHovered = hoveredRef.current === i;
        let pauseTotal = pauseAccumRef.current[i];
        if (isHovered && pauseStartRef.current[i] !== null) {
          pauseTotal += t - pauseStartRef.current[i]!;
        }

        drawRotatingCube(ctx, t - pauseTotal, {
          cx: cube.cx, cy: cube.cy,
          size: cube.outerSize, innerSize: cube.innerSize,
          color: CUBE_COLOR, innerColor: INNER_COLOR,
          speed: SPEED, angleOffset: cube.angleOffset,
          canvasWidth: CANVAS_W, canvasHeight: CANVAS_H,
        });
      }

      // Cube labels (two-line: name + sublabel)
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

      // "Synthetic Monorepo" label at bottom
      ctx.font = 'bold 13px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(148,163,184,0.4)';
      ctx.fillText('Synthetic Monorepo', CANVAS_W / 2, CANVAS_H - 22);

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
      className="flex items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700"
    >
      <canvas ref={canvasRef} className="block cursor-pointer" />
    </motion.div>
  );
}
