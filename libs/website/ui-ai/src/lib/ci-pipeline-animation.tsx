'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from './use-in-view';

// Pipeline stages
const STAGES = ['PLAN', 'CODE', 'CI', 'REVIEW', 'DEPLOY'] as const;
const BOTTLENECK_STAGE = 2; // CI is the bottleneck (index 2)

// Dot colors
const DOT_COLORS = [
  '#22c55e', // green
  '#3b82f6', // blue
  '#f97316', // orange
  '#ef4444', // red
  '#a855f7', // purple
  '#eab308', // yellow
  '#06b6d4', // cyan
  '#ec4899', // pink
];

interface Dot {
  x: number;
  y: number;
  targetY: number;
  color: string;
  speed: number;
  radius: number;
  stage: number; // which stage segment the dot is in
}

export function CiPipelineAnimation() {
  const { ref: viewRef, inView } = useInView(0.3);
  const [started, setStarted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);

  const getStageX = useCallback((stageIndex: number, width: number) => {
    const padding = 40;
    const usable = width - padding * 2;
    return padding + (stageIndex / (STAGES.length - 1)) * usable;
  }, []);

  // Get the tunnel half-height at a given x position
  const getTunnelHeight = useCallback(
    (x: number, width: number, baseHeight: number) => {
      const ciX = getStageX(BOTTLENECK_STAGE, width);
      const narrowWidth = width * 0.18; // how wide the narrowing zone is
      const minHeight = baseHeight * 0.15; // narrowest point

      const dist = Math.abs(x - ciX);
      if (dist > narrowWidth) return baseHeight;

      // Smooth cosine interpolation
      const t = dist / narrowWidth;
      const ease = (1 - Math.cos(t * Math.PI)) / 2;
      return minHeight + (baseHeight - minHeight) * ease;
    },
    [getStageX]
  );

  // Get dot speed at a given x position (fast before CI, slow through, moderate after)
  const getDotSpeed = useCallback(
    (x: number, width: number, baseSpeed: number) => {
      const ciX = getStageX(BOTTLENECK_STAGE, width);
      const slowZone = width * 0.15;
      const minSpeed = baseSpeed * 0.15;
      const fastSpeed = baseSpeed * 2.2; // pre-bottleneck speed
      const postSpeed = baseSpeed * 0.7; // post-bottleneck speed

      const dist = Math.abs(x - ciX);

      // Through the bottleneck
      if (dist <= slowZone) {
        const t = dist / slowZone;
        const ease = (1 - Math.cos(t * Math.PI)) / 2;
        return minSpeed + (baseSpeed - minSpeed) * ease;
      }

      // Before the bottleneck: fast
      if (x < ciX) return fastSpeed;

      // After the bottleneck: moderate
      return postSpeed;
    },
    [getStageX]
  );

  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = (time: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const centerY = h * 0.5;
      const baseHeight = h * 0.32;

      ctx.clearRect(0, 0, w, h);

      // Draw stage labels
      ctx.font = '11px system-ui, sans-serif';
      ctx.letterSpacing = '1.5px';
      STAGES.forEach((stage, i) => {
        const sx = getStageX(i, w);
        const isBottleneck = i === BOTTLENECK_STAGE;

        // Label
        ctx.fillStyle = isBottleneck ? '#ef4444' : '#64748b';
        ctx.textAlign = 'center';
        ctx.font = isBottleneck
          ? 'bold 11px system-ui, sans-serif'
          : '11px system-ui, sans-serif';
        ctx.fillText(stage, sx, 20);

        // Vertical dashed line
        ctx.strokeStyle = isBottleneck
          ? 'rgba(239, 68, 68, 0.3)'
          : 'rgba(100, 116, 139, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(sx, 28);
        ctx.lineTo(sx, h - 8);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw tunnel walls
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)';
      ctx.lineWidth = 1.5;

      // Top wall
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const tunnelH = getTunnelHeight(x, w, baseHeight);
        const y = centerY - tunnelH;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Bottom wall
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const tunnelH = getTunnelHeight(x, w, baseHeight);
        const y = centerY + tunnelH;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Spawn new dots
      const spawnInterval = 400; // ms between spawns
      if (time - lastSpawnRef.current > spawnInterval) {
        const color =
          DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)];
        const tunnelH = getTunnelHeight(0, w, baseHeight);
        const yOffset = (Math.random() - 0.5) * tunnelH * 1.4;

        dotsRef.current.push({
          x: -5,
          y: centerY + yOffset,
          targetY: centerY + yOffset,
          color,
          speed: 0.8 + Math.random() * 0.4,
          radius: 4 + Math.random() * 2,
          stage: 0,
        });
        lastSpawnRef.current = time;
      }

      // Update and draw dots
      const nextDots: Dot[] = [];
      for (const dot of dotsRef.current) {
        // Move horizontally
        const currentSpeed = getDotSpeed(dot.x, w, dot.speed);
        dot.x += currentSpeed;

        // Constrain Y within tunnel
        const tunnelH = getTunnelHeight(dot.x, w, baseHeight);
        const maxY = centerY + tunnelH - dot.radius;
        const minY = centerY - tunnelH + dot.radius;

        // Gently push dots toward center when tunnel narrows
        if (dot.y > maxY) {
          dot.y += (maxY - dot.y) * 0.15;
        } else if (dot.y < minY) {
          dot.y += (minY - dot.y) * 0.15;
        }

        // Small random drift
        dot.y += (Math.random() - 0.5) * 0.3;

        // Clamp
        dot.y = Math.max(minY, Math.min(maxY, dot.y));

        // Remove if past the right edge
        if (dot.x > w + 10) continue;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        nextDots.push(dot);
      }

      // Cap dots for performance
      if (nextDots.length > 80) {
        dotsRef.current = nextDots.slice(nextDots.length - 80);
      } else {
        dotsRef.current = nextDots;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [started, getStageX, getTunnelHeight, getDotSpeed]);

  return (
    <div ref={viewRef}>
      <canvas
        ref={canvasRef}
        className="h-56 w-full md:h-64"
        style={{ display: 'block' }}
      />
    </div>
  );
}
