import dynamic from 'next/dynamic';
import { PALETTE, FONTS } from './data';

const ConfCard3D = dynamic(
  () => import('./conf-card-3d').then((m) => m.ConfCard3D),
  { ssr: false },
);

export function NodeGraphHero() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: PALETTE.bg,
        padding: '64px 56px 96px',
      }}
    >
      {/* Grid bg */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        aria-hidden
      >
        <defs>
          <pattern
            id="heroGrid"
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
          <radialGradient id="heroFade" cx="50%" cy="55%" r="60%">
            <stop offset="0%" stopColor="rgba(10,22,40,0)" />
            <stop offset="100%" stopColor={PALETTE.bg} />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
        <rect width="100%" height="100%" fill="url(#heroFade)" />
      </svg>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 1100,
          margin: '0 auto',
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
            marginTop: 24,
            opacity: 0.9,
          }}
        >
          A half-day virtual conference for engineers working at the
          intersection of monorepos, CI, and agentic AI.
        </p>

        <div style={{ width: '100%', margin: '56px 0 48px' }}>
          <ConfCard3D />
          <div
            style={{
              marginTop: 14,
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: PALETTE.textMute,
              letterSpacing: 2,
            }}
          >
            ↑ HOVER THE CARD
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
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
