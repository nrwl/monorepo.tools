import { useEffect, useRef } from 'react';
import { PALETTE, FONTS, CONF } from './data';

const W = 1280;
const H = 700;

type NodeDef = {
  label: string;
  r: number;
  angle: number;
  dist: number;
  color: string;
};

const nodes: NodeDef[] = [
  { label: 'CI', r: 36, angle: -90, dist: 230, color: PALETTE.pink },
  { label: 'Agents', r: 32, angle: -40, dist: 280, color: PALETTE.cyan },
  { label: 'Build Graph', r: 28, angle: 10, dist: 330, color: PALETTE.pink },
  { label: 'Testing', r: 30, angle: 60, dist: 240, color: PALETTE.cyan },
  { label: 'MCP', r: 26, angle: 110, dist: 300, color: PALETTE.lime },
  { label: 'Polyrepo', r: 24, angle: 160, dist: 360, color: PALETTE.textDim },
  { label: 'Reliability', r: 28, angle: 200, dist: 250, color: PALETTE.pink },
  { label: 'Caching', r: 26, angle: 240, dist: 320, color: PALETTE.cyan },
  { label: 'Affected', r: 24, angle: -130, dist: 290, color: PALETTE.cyan },
];

export function NodeGraphHero() {
  const cx = W / 2;
  const cy = H / 2 + 20;
  const pts = nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return {
      ...n,
      x: cx + Math.cos(rad) * n.dist,
      y: cy + Math.sin(rad) * n.dist,
    };
  });

  const svgRef = useRef<SVGSVGElement | null>(null);
  const groupRefs = useRef<(SVGGElement | null)[]>([]);
  const spokeRefs = useRef<(SVGLineElement | null)[]>([]);
  const crossRefs = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // mouse position in SVG coords; init far away so no repulsion
    const mouse = { x: -9999, y: -9999, active: false };
    const handleMove = (e: MouseEvent) => {
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const ctm = svg.getScreenCTM();
      if (!ctm) return;
      const local = pt.matrixTransform(ctm.inverse());
      mouse.x = local.x;
      mouse.y = local.y;
      mouse.active = true;
    };
    const handleLeave = () => {
      mouse.active = false;
    };
    const host = svg.parentElement;
    if (!host) return;
    host.addEventListener('mousemove', handleMove);
    host.addEventListener('mouseleave', handleLeave);

    const phases = pts.map((_, i) => i * 0.7);
    const speeds = pts.map((_, i) => 0.5 + (i % 3) * 0.2);
    const ampX = pts.map((_, i) => 6 + (i % 4) * 2);
    const ampY = pts.map((_, i) => 5 + (i % 5) * 2);

    // current per-node offset (eased toward target each frame)
    const offsets = pts.map(() => ({ x: 0, y: 0 }));

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;

      const positions: { x: number; y: number }[] = [];
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // idle drift
        const idleX = Math.sin(t * speeds[i] + phases[i]) * ampX[i];
        const idleY = Math.cos(t * speeds[i] * 0.9 + phases[i]) * ampY[i];

        // mouse attract: gentle pull toward cursor when within radius
        let attrX = 0;
        let attrY = 0;
        if (mouse.active) {
          const baseX = p.x + idleX;
          const baseY = p.y + idleY;
          const dx = mouse.x - baseX;
          const dy = mouse.y - baseY;
          const dist = Math.hypot(dx, dy);
          const R = 320;
          if (dist < R && dist > 0.01) {
            const k = (1 - dist / R) ** 2; // strong nearby, falls off
            attrX = dx * k * 0.25;
            attrY = dy * k * 0.25;
          }
        }

        const tgtX = idleX + attrX;
        const tgtY = idleY + attrY;
        // ease
        offsets[i].x += (tgtX - offsets[i].x) * 0.18;
        offsets[i].y += (tgtY - offsets[i].y) * 0.18;

        const g = groupRefs.current[i];
        if (g) {
          g.setAttribute(
            'transform',
            `translate(${offsets[i].x.toFixed(2)} ${offsets[i].y.toFixed(2)})`,
          );
        }
        positions.push({ x: p.x + offsets[i].x, y: p.y + offsets[i].y });
      }

      // update spoke lines (hub → node)
      for (let i = 0; i < pts.length; i++) {
        const l = spokeRefs.current[i];
        if (l) {
          l.setAttribute('x2', positions[i].x.toFixed(2));
          l.setAttribute('y2', positions[i].y.toFixed(2));
        }
      }
      // update inter-node lines
      for (let i = 0; i < pts.length; i++) {
        const a = positions[i];
        const b = positions[(i + 3) % pts.length];
        const l = crossRefs.current[i];
        if (l) {
          l.setAttribute('x1', a.x.toFixed(2));
          l.setAttribute('y1', a.y.toFixed(2));
          l.setAttribute('x2', b.x.toFixed(2));
          l.setAttribute('y2', b.y.toFixed(2));
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener('mousemove', handleMove);
      host.removeEventListener('mouseleave', handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 65px - 134px)',
        minHeight: 560,
        overflow: 'hidden',
        background: PALETTE.bg,
      }}
    >
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <pattern
            id="varAGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={PALETTE.grid}
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="varAFade" cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor="rgba(10,22,40,0)" />
            <stop offset="100%" stopColor={PALETTE.bg} />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#varAGrid)" />
        <rect width="100%" height="100%" fill="url(#varAFade)" />
      </svg>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {pts.map((p, i) => (
          <line
            key={i}
            ref={(el) => {
              spokeRefs.current[i] = el;
            }}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke={p.color}
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeDasharray="3 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-14"
              dur={`${1.6 + (i % 4) * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
        {pts.map((p, i) => {
          const next = pts[(i + 3) % pts.length];
          return (
            <line
              key={`x${i}`}
              ref={(el) => {
                crossRefs.current[i] = el;
              }}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke={PALETTE.bgLine}
              strokeOpacity="0.6"
              strokeWidth="0.5"
            />
          );
        })}
        <circle
          cx={cx}
          cy={cy}
          r="380"
          fill="none"
          stroke={PALETTE.bgLine}
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        {pts.map((p, i) => (
          <g
            key={`n${i}`}
            ref={(el) => {
              groupRefs.current[i] = el;
            }}
          >
            <circle cx={p.x} cy={p.y} r={p.r + 4} fill={PALETTE.bg} />
            <circle
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill="none"
              stroke={p.color}
              strokeWidth="1.5"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={p.r - 8}
              fill={p.color}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values={`${p.r - 8};${p.r - 4};${p.r - 8}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fill={PALETTE.text}
              fontFamily={FONTS.mono}
              fontSize="11"
            >
              {p.label}
            </text>
          </g>
        ))}
        <circle
          cx={cx}
          cy={cy}
          r="90"
          fill={PALETTE.bg}
          stroke={PALETTE.pink}
          strokeWidth="1.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r="78"
          fill="none"
          stroke={PALETTE.pink}
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
      </svg>

      <div
        className="px-5 md:px-14"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <h1
          className="text-[44px] tracking-[-1.5px] sm:text-[64px] md:text-[96px] md:tracking-[-3px]"
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            lineHeight: 0.95,
            margin: 0,
            color: PALETTE.text,
          }}
        >
          AI{' '}
          <span style={{ color: PALETTE.pink, fontFamily: FONTS.body }}>♥</span>{' '}
          Monorepos
        </h1>
        <p
          className="mt-6 text-base md:mt-8 md:text-[22px]"
          style={{
            fontFamily: FONTS.body,
            color: PALETTE.text,
            maxWidth: 680,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          A half-day virtual conference for engineers working at the{' '}
          <mark
            style={{
              background: PALETTE.yellow,
              color: PALETTE.bgDeeper,
              padding: '0 6px',
              borderRadius: 4,
            }}
          >
            intersection of monorepos and agentic AI
          </mark>
          .
        </p>
        <div
          className="mt-8 flex w-full max-w-[360px] flex-col items-center gap-4 sm:mt-9 sm:w-auto sm:max-w-none sm:flex-row"
          style={{
            pointerEvents: 'auto',
          }}
        >
          <a
            href={CONF.registerUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full justify-center sm:w-auto"
            style={{
              background: PALETTE.pink,
              color: PALETTE.bg,
              padding: '16px 32px',
              fontFamily: FONTS.mono,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            RESERVE FREE TICKET →
          </a>
          <a
            href="#agenda"
            className="w-full justify-center sm:w-auto"
            style={{
              color: PALETTE.text,
              padding: '16px 24px',
              fontFamily: FONTS.mono,
              fontSize: 13,
              letterSpacing: 1,
              textDecoration: 'none',
              border: `1px solid ${PALETTE.textDim}`,
              background: 'rgba(10,22,40,0.7)',
              backdropFilter: 'blur(6px)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            SEE AGENDA
          </a>
        </div>
      </div>
    </div>
  );
}

export function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          color: PALETTE.textMute,
          letterSpacing: 2,
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONTS.display,
          fontSize: 28,
          color: PALETTE.text,
          letterSpacing: -1,
        }}
      >
        <span style={{ color: tone }}>▸</span> {value}
      </div>
    </div>
  );
}
