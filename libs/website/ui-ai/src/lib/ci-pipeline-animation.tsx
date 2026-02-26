'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from './use-in-view';

const STAGES = ['PLAN', 'CODE', 'CI', 'REVIEW', 'DEPLOY'] as const;
const BOTTLENECK_STAGE = 2;

const COLOR_NEUTRAL = '#64748b';
const COLOR_PASS = '#22c55e';
const COLOR_FAIL = '#ef4444';
const COLOR_HEALED = '#22c55e';

const PIPE_HALF = 7;
const CORNER_R = 12;

type DotRoute =
  | 'main'
  | 'return-down'
  | 'return-left'
  | 'return-up'
  | 'queued'
  | 'healing'
  | 'heal-right'
  | 'heal-up'
  | 'healed';

interface Dot {
  id: number;
  x: number;
  y: number;
  color: string;
  speed: number;
  radius: number;
  route: DotRoute;
  healTimer?: number;
  queueTimer?: number;
  passedCi?: boolean;
}

let nextDotId = 0;

export function CiPipelineAnimation() {
  const { ref: viewRef, inView } = useInView(0.3);
  const [started, setStarted] = useState(false);
  const [dte, setDte] = useState(false);
  const [selfHeal, setSelfHeal] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);
  const dteRef = useRef(false);
  const selfHealRef = useRef(false);

  useEffect(() => { dteRef.current = dte; }, [dte]);
  useEffect(() => { selfHealRef.current = selfHeal; }, [selfHeal]);

  const getStageX = useCallback((stageIndex: number, width: number) => {
    const padding = 40;
    const usable = width - padding * 2;
    return padding + (stageIndex / (STAGES.length - 1)) * usable;
  }, []);

  const getTunnelHeight = useCallback(
    (x: number, width: number, baseHeight: number, dteOn: boolean) => {
      const ciX = getStageX(BOTTLENECK_STAGE, width);
      const narrowWidth = width * 0.18;
      const minRatio = dteOn ? 0.35 : 0.15;
      const minHeight = baseHeight * minRatio;
      const dist = Math.abs(x - ciX);
      if (dist > narrowWidth) return baseHeight;
      const t = dist / narrowWidth;
      const ease = (1 - Math.cos(t * Math.PI)) / 2;
      return minHeight + (baseHeight - minHeight) * ease;
    },
    [getStageX]
  );

  const getDotSpeed = useCallback(
    (x: number, width: number, baseSpeed: number, dteOn: boolean) => {
      const ciX = getStageX(BOTTLENECK_STAGE, width);
      const slowZone = width * 0.15;
      const minFactor = dteOn ? 0.35 : 0.15;
      const minSpeed = baseSpeed * minFactor;
      const fastSpeed = baseSpeed * 2.2;
      const postSpeed = baseSpeed * 0.7;
      const dist = Math.abs(x - ciX);
      if (dist <= slowZone) {
        const t = dist / slowZone;
        const ease = (1 - Math.cos(t * Math.PI)) / 2;
        return minSpeed + (baseSpeed - minSpeed) * ease;
      }
      if (x < ciX) return fastSpeed;
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

    function pushApart(dots: Dot[]) {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.radius + b.radius + 1;
          if (dist < minDist && dist > 0.1) {
            const overlap = (minDist - dist) * 0.3;
            const nx = dx / dist;
            const ny = dy / dist;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;
          }
        }
      }
    }

    // Push queued dots apart vertically (pile up above entry point)
    function pushQueuedApart(dots: Dot[]) {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dy = b.y - a.y;
          const dist = Math.abs(dy);
          const minDist = a.radius + b.radius + 2;
          if (dist < minDist) {
            const overlap = (minDist - dist) * 0.4;
            // Push apart vertically — earlier arrivals go higher
            a.y -= overlap * 0.5;
            b.y += overlap * 0.5;
          }
        }
      }
    }

    // Draw a U-shaped pipe with rounded corners, supporting different top heights per leg
    function drawUPipe(
      ctx: CanvasRenderingContext2D,
      left: number,
      topLeft: number,
      right: number,
      topRight: number,
      bottom: number,
      color: string
    ) {
      const r = CORNER_R;
      const h = PIPE_HALF;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;

      // Outer wall
      ctx.beginPath();
      ctx.moveTo(left - h, topLeft);
      ctx.lineTo(left - h, bottom - r);
      ctx.arcTo(left - h, bottom + h, left - h + r, bottom + h, r);
      ctx.lineTo(right + h - r, bottom + h);
      ctx.arcTo(right + h, bottom + h, right + h, bottom + h - r, r);
      ctx.lineTo(right + h, topRight);
      ctx.stroke();

      // Inner wall
      ctx.beginPath();
      ctx.moveTo(left + h, topLeft);
      ctx.lineTo(left + h, bottom - r);
      ctx.arcTo(left + h, bottom - h, left + h + r, bottom - h, r);
      ctx.lineTo(right - h - r, bottom - h);
      ctx.arcTo(right - h, bottom - h, right - h, bottom - h - r, r);
      ctx.lineTo(right - h, topRight);
      ctx.stroke();
    }

    // Draw an L-shaped pipe (horizontal then up) with rounded corner
    function drawLPipe(
      ctx: CanvasRenderingContext2D,
      startX: number,
      bottomY: number,
      endX: number,
      topY: number,
      color: string
    ) {
      const r = CORNER_R;
      const h = PIPE_HALF;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;

      // Outer wall (bottom-left to right to top)
      ctx.beginPath();
      ctx.moveTo(startX, bottomY + h);
      ctx.lineTo(endX + h - r, bottomY + h);
      ctx.arcTo(endX + h, bottomY + h, endX + h, bottomY + h - r, r);
      ctx.lineTo(endX + h, topY);
      ctx.stroke();

      // Inner wall
      ctx.beginPath();
      ctx.moveTo(startX, bottomY - h);
      ctx.lineTo(endX - h - r, bottomY - h);
      ctx.arcTo(endX - h, bottomY - h, endX - h, bottomY - h - r, r);
      ctx.lineTo(endX - h, topY);
      ctx.stroke();
    }

    const animate = (time: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const mainY = h * 0.38;
      const baseHeight = h * 0.18;
      const currentDte = dteRef.current;
      const currentSelfHeal = selfHealRef.current;

      const ciX = getStageX(BOTTLENECK_STAGE, w);
      const codeX = getStageX(1, w);
      const reviewX = getStageX(3, w);

      // Return pipe geometry — legs connect to actual tunnel walls
      const pipeRight = ciX + 15;
      const pipeLeft = codeX - 10;
      const pipeTopRight = mainY + getTunnelHeight(pipeRight, w, baseHeight, currentDte);
      const pipeTopLeft = mainY + getTunnelHeight(pipeLeft, w, baseHeight, currentDte);
      const pipeBottom = h * 0.78;

      // Self-heal box: at the bottom-right corner of return pipe (the intersection)
      const healBoxW = 90;
      const healBoxH = 24;
      const healBoxX = pipeRight;
      const healBoxY = pipeBottom;

      // Heal exit pipe: from heal box rightward to REVIEW, then up
      const healPipeStartX = healBoxX + healBoxW / 2 + 5;
      const healPipeEndX = reviewX;

      // Queue pile-up area: above the left leg of return pipe
      const queueX = pipeLeft;
      const queueBaseY = pipeTopLeft;

      ctx.clearRect(0, 0, w, h);

      // Stage labels
      STAGES.forEach((stage, i) => {
        const sx = getStageX(i, w);
        const isBottleneck = i === BOTTLENECK_STAGE;
        ctx.fillStyle = isBottleneck ? '#ef4444' : '#64748b';
        ctx.textAlign = 'center';
        ctx.font = isBottleneck
          ? 'bold 11px system-ui, sans-serif'
          : '11px system-ui, sans-serif';
        ctx.letterSpacing = '1.5px';
        ctx.fillText(stage, sx, 16);

        ctx.strokeStyle = isBottleneck
          ? 'rgba(239, 68, 68, 0.3)'
          : 'rgba(100, 116, 139, 0.15)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(sx, 24);
        ctx.lineTo(sx, h - 4);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Main tunnel walls
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const tH = getTunnelHeight(x, w, baseHeight, currentDte);
        if (x === 0) ctx.moveTo(x, mainY - tH);
        else ctx.lineTo(x, mainY - tH);
      }
      ctx.stroke();
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const tH = getTunnelHeight(x, w, baseHeight, currentDte);
        if (x === 0) ctx.moveTo(x, mainY + tH);
        else ctx.lineTo(x, mainY + tH);
      }
      ctx.stroke();

      // Return pipe (U-shape, legs touch tunnel walls)
      drawUPipe(ctx, pipeLeft, pipeTopLeft, pipeRight, pipeTopRight, pipeBottom, 'rgba(239, 68, 68, 0.25)');

      // Self-heal box + exit pipe
      if (currentSelfHeal) {
        // Box at the intersection (bottom-right corner of return pipe)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(
          healBoxX - healBoxW / 2,
          healBoxY - healBoxH / 2,
          healBoxW,
          healBoxH,
          6
        );
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = 'rgba(16, 185, 129, 0.8)';
        ctx.font = 'bold 9px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '0.5px';
        ctx.fillText('SELF-HEAL', healBoxX, healBoxY + 3);

        // L-shaped exit pipe: rightward from box to REVIEW, then up to tunnel wall
        const healPipeTopRight = mainY + getTunnelHeight(healPipeEndX, w, baseHeight, currentDte);
        drawLPipe(ctx, healPipeStartX, pipeBottom, healPipeEndX, healPipeTopRight, 'rgba(16, 185, 129, 0.25)');
      }

      // Spawn
      const spawnInterval = 400;
      if (time - lastSpawnRef.current > spawnInterval) {
        const tunnelH = getTunnelHeight(0, w, baseHeight, currentDte);
        const yOffset = (Math.random() - 0.5) * tunnelH * 1.4;
        dotsRef.current.push({
          id: nextDotId++,
          x: -5,
          y: mainY + yOffset,
          color: COLOR_NEUTRAL,
          speed: 0.8 + Math.random() * 0.4,
          radius: 4 + Math.random() * 1.5,
          route: 'main',
        });
        lastSpawnRef.current = time;
      }

      // Update dots
      const nextDots: Dot[] = [];
      for (const dot of dotsRef.current) {
        switch (dot.route) {
          case 'main': {
            const currentSpeed = getDotSpeed(dot.x, w, dot.speed, currentDte);
            dot.x += currentSpeed;

            const tunnelH = getTunnelHeight(dot.x, w, baseHeight, currentDte);
            const maxY = mainY + tunnelH - dot.radius;
            const minYVal = mainY - tunnelH + dot.radius;
            if (dot.y > maxY) dot.y += (maxY - dot.y) * 0.15;
            else if (dot.y < minYVal) dot.y += (minYVal - dot.y) * 0.15;
            dot.y += (Math.random() - 0.5) * 0.3;
            dot.y = Math.max(minYVal, Math.min(maxY, dot.y));

            if (!dot.passedCi && dot.x > ciX + 20) {
              if (Math.random() < 0.18) {
                dot.color = COLOR_FAIL;
                dot.route = 'return-down';
                dot.x = pipeRight;
              } else {
                dot.passedCi = true;
                dot.color = COLOR_PASS;
              }
            }

            if (dot.x > w + 10) continue;
            break;
          }

          case 'return-down': {
            dot.x = pipeRight;
            dot.y += 1.2;
            if (dot.y >= pipeBottom) {
              dot.y = pipeBottom;
              if (currentSelfHeal) {
                // Enter heal box directly at the intersection
                dot.route = 'healing';
                dot.healTimer = 60 + Math.random() * 40;
                dot.x = healBoxX;
                dot.y = healBoxY;
              } else {
                dot.route = 'return-left';
              }
            }
            break;
          }

          case 'return-left': {
            dot.y = pipeBottom;
            dot.x -= 0.5;
            if (dot.x <= pipeLeft) {
              dot.x = pipeLeft;
              dot.route = 'return-up';
            }
            break;
          }

          case 'return-up': {
            dot.x = pipeLeft;
            dot.y -= 1.2;
            if (dot.y <= pipeTopLeft) {
              dot.y = queueBaseY;
              dot.route = 'queued';
              // Pile up: 80-140 frames (~1.3-2.3s at 60fps)
              dot.queueTimer = 80 + Math.random() * 60;
            }
            break;
          }

          case 'queued': {
            // Dots pile up at the top of the left return leg
            dot.x = queueX + (Math.random() - 0.5) * 2;
            dot.queueTimer = (dot.queueTimer || 0) - 1;
            if (dot.queueTimer! <= 0) {
              dot.route = 'main';
              dot.color = COLOR_NEUTRAL;
              dot.passedCi = false;
              dot.y = mainY;
              dot.x = pipeLeft;
            }
            break;
          }

          case 'healing': {
            dot.healTimer = (dot.healTimer || 0) - 1;
            dot.x = healBoxX + (Math.random() - 0.5) * 4;
            dot.y = healBoxY + (Math.random() - 0.5) * 3;
            if (dot.healTimer! <= 0) {
              dot.route = 'heal-right';
              dot.color = COLOR_HEALED;
              dot.x = healPipeStartX;
              dot.y = pipeBottom;
            }
            break;
          }

          case 'heal-right': {
            dot.y = pipeBottom;
            dot.x += 0.8;
            if (dot.x >= healPipeEndX) {
              dot.x = healPipeEndX;
              dot.route = 'heal-up';
            }
            break;
          }

          case 'heal-up': {
            dot.x = healPipeEndX;
            dot.y -= 1.2;
            const healTopY = mainY + getTunnelHeight(healPipeEndX, w, baseHeight, currentDte);
            if (dot.y <= healTopY) {
              dot.y = mainY;
              dot.route = 'healed';
              dot.passedCi = true;
            }
            break;
          }

          case 'healed': {
            const speed2 = getDotSpeed(dot.x, w, dot.speed, currentDte);
            dot.x += speed2;
            const tH = getTunnelHeight(dot.x, w, baseHeight, currentDte);
            const maxY2 = mainY + tH - dot.radius;
            const minY2 = mainY - tH + dot.radius;
            dot.y = Math.max(minY2, Math.min(maxY2, dot.y));
            if (dot.x > w + 10) continue;
            break;
          }
        }

        nextDots.push(dot);
      }

      // Push apart main flow dots
      const mainDots = nextDots.filter(
        (d) => d.route === 'main' || d.route === 'healed'
      );
      pushApart(mainDots);

      // Push queued dots apart so they visibly pile up
      const queuedDots = nextDots.filter((d) => d.route === 'queued');
      pushQueuedApart(queuedDots);

      // Draw dots
      for (const dot of nextDots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        if (
          dot.route === 'healing' ||
          dot.route === 'return-left' ||
          dot.route === 'return-down' ||
          dot.route === 'return-up' ||
          dot.route === 'queued'
        ) {
          ctx.globalAlpha = 0.6;
        }
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (nextDots.length > 120) {
        dotsRef.current = nextDots.slice(nextDots.length - 120);
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
        className="h-72 w-full md:h-80"
        style={{ display: 'block' }}
      />

      <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
        <label className="flex cursor-pointer items-center gap-2.5 text-sm">
          <button
            role="switch"
            aria-checked={dte}
            onClick={() => setDte(!dte)}
            className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
              dte ? 'bg-blue-500' : 'bg-slate-600'
            }`}
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                dte ? 'translate-x-4' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className="text-slate-300">Distributed Task Execution</span>
        </label>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm">
          <button
            role="switch"
            aria-checked={selfHeal}
            onClick={() => setSelfHeal(!selfHeal)}
            className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
              selfHeal ? 'bg-emerald-500' : 'bg-slate-600'
            }`}
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                selfHeal ? 'translate-x-4' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className="text-slate-300">Self-Healing CI</span>
        </label>
      </div>
    </div>
  );
}
