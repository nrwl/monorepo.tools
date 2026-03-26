'use client';
import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './use-in-view';
import { drawRotatingCube } from './rotating-cube';

/*
 * Central pulsating AI agent circle surrounded by rotating cubes (repos).
 * Dashed lines connect center to each satellite. Pulses travel along
 * the lines representing context flowing between coordinator and per-repo agents.
 */

const AGENT_COLOR = '#FBBF24';
const AGENT_GLOW = 'rgba(251,191,36,0.25)';
const CONNECTION_COLOR = 'rgba(148,163,184,0.35)';
const PULSE_OUT_COLOR = 'rgba(251,191,36,0.85)';
const PULSE_IN_COLOR = 'rgba(52,211,153,0.85)';
const CUBE_COLOR = 'rgba(148,163,184,0.45)';
const INNER_COLOR = 'rgba(148,163,184,0.8)';

const CANVAS_W = 440;
const CANVAS_H = 400;
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2;

interface Satellite {
  angle: number;
  distance: number;
  label: string;
  cubeSize: number;
  innerSize: number;
  angleOffset: number;
}

const SATELLITES: Satellite[] = [
  { angle: -Math.PI / 2 - 0.3, distance: 140, label: 'frontend', cubeSize: 60, innerSize: 24, angleOffset: 0 },
  { angle: -Math.PI / 2 + 0.5, distance: 150, label: 'backend', cubeSize: 60, innerSize: 24, angleOffset: 2.1 },
  { angle: Math.PI / 6, distance: 145, label: 'shared-types', cubeSize: 60, innerSize: 24, angleOffset: 0.9 },
  { angle: Math.PI * 0.65, distance: 135, label: 'data', cubeSize: 60, innerSize: 24, angleOffset: 3.6 },
  { angle: Math.PI + 0.4, distance: 150, label: 'infra', cubeSize: 60, innerSize: 24, angleOffset: 4.8 },
];

const SPEED = 0.4;

function getSatellitePos(sat: Satellite) {
  return {
    x: CENTER_X + Math.cos(sat.angle) * sat.distance,
    y: CENTER_Y + Math.sin(sat.angle) * sat.distance,
  };
}

function drawPulseAlongLine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  t: number,
  offset: number,
  color: string,
  reverse: boolean
) {
  const speed = 0.4;
  const progress = ((t * speed + offset) % 1.8) - 0.4;
  if (progress < 0 || progress > 1) return;

  const p = reverse ? 1 - progress : progress;
  const px = x1 + (x2 - x1) * p;
  const py = y1 + (y2 - y1) * p;
  const alpha =
    progress < 0.15
      ? progress / 0.15
      : progress > 0.85
        ? (1 - progress) / 0.15
        : 1;

  ctx.beginPath();
  ctx.arc(px, py, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha * 0.9;
  ctx.fill();
  ctx.globalAlpha = 1;
}

const HIT_RADIUS = 38;

export function AgentOrchestratorAnimation() {
  const { ref, inView } = useInView(0.2);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const hoveredRef = useRef<number>(-1);
  const pauseStartRef = useRef<(number | null)[]>(SATELLITES.map(() => null));
  const pauseAccumRef = useRef<number[]>(SATELLITES.map(() => 0));

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    let found = -1;
    for (let i = 0; i < SATELLITES.length; i++) {
      const pos = getSatellitePos(SATELLITES[i]);
      const dx = mx - pos.x;
      const dy = my - pos.y;
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

      // Connection lines
      ctx.strokeStyle = CONNECTION_COLOR;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      for (const sat of SATELLITES) {
        const pos = getSatellitePos(sat);
        ctx.beginPath();
        ctx.moveTo(CENTER_X, CENTER_Y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Pulses
      for (let i = 0; i < SATELLITES.length; i++) {
        const pos = getSatellitePos(SATELLITES[i]);
        drawPulseAlongLine(ctx, CENTER_X, CENTER_Y, pos.x, pos.y, t, i * 0.36, PULSE_OUT_COLOR, false);
        drawPulseAlongLine(ctx, CENTER_X, CENTER_Y, pos.x, pos.y, t, i * 0.36 + 0.9, PULSE_IN_COLOR, true);
      }

      // Satellite cubes
      for (let i = 0; i < SATELLITES.length; i++) {
        const sat = SATELLITES[i];
        const pos = getSatellitePos(sat);
        const isHovered = hoveredRef.current === i;
        let pauseTotal = pauseAccumRef.current[i];
        if (isHovered && pauseStartRef.current[i] !== null) {
          pauseTotal += t - pauseStartRef.current[i]!;
        }

        drawRotatingCube(ctx, t - pauseTotal, {
          cx: pos.x, cy: pos.y,
          size: sat.cubeSize, innerSize: sat.innerSize,
          color: CUBE_COLOR, innerColor: INNER_COLOR,
          speed: SPEED, angleOffset: sat.angleOffset,
          canvasWidth: CANVAS_W, canvasHeight: CANVAS_H,
        });
      }

      // Satellite labels
      ctx.font = '10px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(148,163,184,0.7)';
      for (const sat of SATELLITES) {
        const pos = getSatellitePos(sat);
        ctx.fillText(sat.label, pos.x, pos.y + sat.cubeSize / 2 + 16);
      }

      // Central AI agent: outer glow
      const glowR = 30 + Math.sin(t * 1.5) * 4;
      ctx.beginPath();
      ctx.arc(CENTER_X, CENTER_Y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = AGENT_GLOW;
      ctx.globalAlpha = 0.3 + Math.sin(t * 1.5) * 0.1;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Main circle
      const mainR = 19 + Math.sin(t * 2) * 2;
      ctx.beginPath();
      ctx.arc(CENTER_X, CENTER_Y, mainR, 0, Math.PI * 2);
      ctx.fillStyle = AGENT_COLOR;
      ctx.globalAlpha = 0.9;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Inner dot
      ctx.beginPath();
      ctx.arc(CENTER_X, CENTER_Y, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#92400E';
      ctx.fill();

      // Label
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(251,191,36,0.9)';
      ctx.fillText('AI Coordinator', CENTER_X, CENTER_Y + glowR + 16);

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
