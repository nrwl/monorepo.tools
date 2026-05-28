import { PALETTE, FONTS } from './data';

const W = 1280;
const H = 700;

type Node = {
  label: string;
  r: number;
  angle: number;
  dist: number;
  color: string;
};

const nodes: Node[] = [
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

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: H,
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
          <g key={`n${i}`}>
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
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 56px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: PALETTE.cyan,
            letterSpacing: 3,
            marginBottom: 18,
          }}
        >
          ◆ ONLINE · FREE · JUNE 23, 2026
        </div>
        <h1
          style={{
            fontFamily: FONTS.display,
            fontSize: 96,
            fontWeight: 500,
            lineHeight: 0.95,
            margin: 0,
            color: PALETTE.text,
            letterSpacing: -2,
          }}
        >
          AI{' '}
          <span style={{ color: PALETTE.pink, fontFamily: FONTS.body }}>♥</span>{' '}
          Monorepos
        </h1>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 14,
            color: PALETTE.textDim,
            marginTop: 14,
            letterSpacing: 4,
          }}
        >
          C O N F &nbsp;&nbsp; 2 0 2 6
        </div>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 17,
            color: PALETTE.text,
            maxWidth: 560,
            lineHeight: 1.5,
            marginTop: 28,
            opacity: 0.9,
          }}
        >
          A half-day virtual conference for engineers working at the
          intersection of monorepos, CI, and agentic AI.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 36,
            alignItems: 'center',
          }}
        >
          <a
            href="#register"
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
            style={{
              color: PALETTE.text,
              padding: '16px 24px',
              fontFamily: FONTS.mono,
              fontSize: 13,
              letterSpacing: 1,
              textDecoration: 'none',
              border: `1px solid ${PALETTE.bgLine}`,
            }}
          >
            SEE AGENDA
          </a>
        </div>
      </div>
    </div>
  );
}
