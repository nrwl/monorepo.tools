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
    label: 'rgba(148,163,184,0.9)',
    agent: 'rgba(251,146,60,0.85)',
    agentGlow: 'rgba(251,146,60,0.15)',
    agentMid: 'rgba(251,146,60,0.08)',
  },
  light: {
    cube: 'rgba(71,85,105,0.5)',
    inner: 'rgba(71,85,105,0.6)',
    faceFill: '#e2e8f0',
    label: 'rgba(51,65,85,0.8)',
    agent: 'rgba(234,88,12,0.9)',
    agentGlow: 'rgba(234,88,12,0.2)',
    agentMid: 'rgba(234,88,12,0.1)',
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

const CANVAS_W = 620;
const CANVAS_H = 500;

const CUBES: CubeConfig[] = [
  { cx: 175, cy: 110, outerSize: 85, innerSize: 40, label: 'Monorepo A', angleOffset: 0.5 },
  { cx: 455, cy: 85, outerSize: 80, innerSize: 38, label: 'Monorepo B', angleOffset: 2.8 },
  { cx: 100, cy: 380, outerSize: 60, innerSize: 28, label: 'Mobile App', angleOffset: 0.8 },
  { cx: 300, cy: 270, outerSize: 55, innerSize: 26, label: 'Shared Utilities', angleOffset: 3.9 },
  { cx: 300, cy: 410, outerSize: 55, innerSize: 26, label: 'Design System', angleOffset: 5.2 },
  { cx: 490, cy: 370, outerSize: 60, innerSize: 28, label: 'API', angleOffset: 1.7 },
];

const SPEED = 0.4;
const HIT_RADIUS = 30;

export function IsolatedAgentsAnimation() {
  const { ref, inView } = useInView(0.2);
  const isDark = useIsDark();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const hoveredRef = useRef<number>(-1);
  const pauseStartRef = useRef<(number | null)[]>(Array(CUBES.length).fill(null));
  const pauseAccumRef = useRef<number[]>(Array(CUBES.length).fill(0));

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

    const c = isDark ? COLORS.dark : COLORS.light;

    function draw(time: number) {
      if (!ctx) return;
      const t = time / 1000;
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      // Draw cubes
      for (let i = 0; i < CUBES.length; i++) {
        const cube = CUBES[i];
        const isHovered = hoveredRef.current === i;
        let pauseTotal = pauseAccumRef.current[i];
        if (isHovered && pauseStartRef.current[i] !== null) {
          pauseTotal += t - pauseStartRef.current[i]!;
        }
        drawRotatingCube(ctx, t - pauseTotal, {
          cx: cube.cx, cy: cube.cy,
          size: cube.outerSize, innerSize: cube.innerSize,
          color: c.cube, innerColor: c.inner,
          speed: SPEED, angleOffset: cube.angleOffset,
          outerFillOpacity: 1.0, innerFillOpacity: 0,
          outerFaceFillColor: c.faceFill,
          canvasWidth: CANVAS_W, canvasHeight: CANVAS_H,
        });
      }

      // Draw AI agent dot inside each cube
      for (let i = 0; i < CUBES.length; i++) {
        const cube = CUBES[i];
        const floatX = Math.sin(t * 0.8 + i * 1.3) * 3;
        const floatY = Math.cos(t * 0.6 + i * 1.7) * 3;
        const ax = cube.cx + floatX;
        const ay = cube.cy + floatY;

        const pulse = 0.7 + 0.3 * Math.sin(t * 2 + i * 1.1);

        ctx.beginPath();
        ctx.arc(ax, ay, 14, 0, Math.PI * 2);
        ctx.fillStyle = c.agentGlow;
        ctx.globalAlpha = pulse;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ax, ay, 9, 0, Math.PI * 2);
        ctx.fillStyle = c.agentMid;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ax, ay, 4, 0, Math.PI * 2);
        ctx.fillStyle = c.agent;
        ctx.fill();
        ctx.globalAlpha = 1;

        // "AI agent" label below dot
        ctx.font = '8px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = c.agent;
        ctx.fillText('AI agent', ax, ay + 20);
      }

      // Labels
      ctx.textAlign = 'center';
      for (const cube of CUBES) {
        const baseY = cube.cy + cube.outerSize / 2 + 38;
        ctx.font = 'bold 10px system-ui, sans-serif';
        ctx.fillStyle = c.label;
        ctx.fillText(cube.label, cube.cx, baseY);
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
    >
      <div className="overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900">
        <div className="flex items-center justify-center">
          <canvas ref={canvasRef} className="block cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
}
