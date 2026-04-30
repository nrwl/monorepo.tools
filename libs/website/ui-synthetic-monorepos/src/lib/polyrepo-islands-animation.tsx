'use client';
import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './use-in-view';
import { useIsDark } from './use-is-dark';
import { drawRotatingCube } from './rotating-cube';

const COLORS = {
  dark: {
    cube: 'rgba(71,85,105,0.95)',
    inner: 'rgba(148,163,184,0.95)',
    faceFill: '#1e293b',
    label: 'rgba(148,163,184,0.85)',
    bg: 'bg-slate-900',
  },
  light: {
    cube: 'rgba(71,85,105,0.5)',
    inner: 'rgba(71,85,105,0.6)',
    faceFill: '#e2e8f0',
    label: 'rgba(51,65,85,0.8)',
    bg: 'bg-slate-100',
  },
};

interface CubeConfig {
  cx: number;
  cy: number;
  outerSize: number;
  innerSize: number;
  label: string;
  angleOffset: number;
}

const COLS = 3;
const ROWS = 2;
const CANVAS_W = 560;
const CANVAS_H = 420;
const SPACING_X = CANVAS_W / (COLS + 1);
const SPACING_Y = CANVAS_H / (ROWS + 1);

const LABELS = [
  'Monorepo A', 'Monorepo B', 'Mobile App',
  'Shared Utilities', 'Design System', 'API',
];

const OFFSETS = [0.5, 2.8, 0.8, 3.9, 5.2, 1.7];

function buildCubes(): CubeConfig[] {
  const cubes: CubeConfig[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const idx = r * COLS + c;
      cubes.push({
        cx: SPACING_X * (c + 1),
        cy: SPACING_Y * (r + 1),
        outerSize: 70,
        innerSize: 30,
        label: LABELS[idx],
        angleOffset: OFFSETS[idx],
      });
    }
  }
  return cubes;
}

const CUBES = buildCubes();
const SPEED = 0.4;
const HIT_RADIUS = 45;

export function PolyrepoIslandsAnimation() {
  const { ref, inView } = useInView(0.2);
  const isDark = useIsDark();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const hoveredRef = useRef<number>(-1);
  // Track when each cube was paused and accumulated pause time
  const pauseStartRef = useRef<(number | null)[]>(CUBES.map(() => null));
  const pauseAccumRef = useRef<number[]>(CUBES.map(() => 0));

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    let found = -1;
    for (let i = 0; i < CUBES.length; i++) {
      const dx = mx - CUBES[i].cx;
      const dy = my - CUBES[i].cy;
      if (Math.sqrt(dx * dx + dy * dy) < HIT_RADIUS) {
        found = i;
        break;
      }
    }

    const prev = hoveredRef.current;
    hoveredRef.current = found;

    // Cube just became hovered: record pause start time
    if (found !== -1 && found !== prev) {
      pauseStartRef.current[found] = performance.now() / 1000;
    }
    // Cube just became unhovered: accumulate paused duration
    if (prev !== -1 && prev !== found && pauseStartRef.current[prev] !== null) {
      const now = performance.now() / 1000;
      pauseAccumRef.current[prev] += now - pauseStartRef.current[prev]!;
      pauseStartRef.current[prev] = null;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const prev = hoveredRef.current;
    if (prev !== -1 && pauseStartRef.current[prev] !== null) {
      const now = performance.now() / 1000;
      pauseAccumRef.current[prev] += now - pauseStartRef.current[prev]!;
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
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    canvas.style.maxWidth = `${CANVAS_W}px`;
    ctx.scale(dpr, dpr);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const c = isDark ? COLORS.dark : COLORS.light;

    function draw(time: number) {
      if (!ctx) return;
      const t = time / 1000;
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      for (let i = 0; i < CUBES.length; i++) {
        const cube = CUBES[i];
        const isHovered = hoveredRef.current === i;

        // Subtract accumulated pause time (and current pause if hovered)
        let pauseTotal = pauseAccumRef.current[i];
        if (isHovered && pauseStartRef.current[i] !== null) {
          pauseTotal += t - pauseStartRef.current[i]!;
        }

        drawRotatingCube(ctx, t - pauseTotal, {
          cx: cube.cx,
          cy: cube.cy,
          size: cube.outerSize,
          innerSize: cube.innerSize,
          color: c.cube,
          innerColor: c.inner,
          speed: SPEED,
          angleOffset: cube.angleOffset,
          outerFillOpacity: 1.0,
          innerFillOpacity: 0,
          outerFaceFillColor: c.faceFill,
          canvasWidth: CANVAS_W,
          canvasHeight: CANVAS_H,
        });
      }

      ctx.font = '10px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = c.label;
      for (const cube of CUBES) {
        ctx.fillText(cube.label, cube.cx, cube.cy + cube.outerSize / 2 + 32);
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [inView, isDark, handleMouseMove, handleMouseLeave]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <canvas ref={canvasRef} className="block cursor-pointer" />
    </motion.div>
  );
}
