import { PALETTE, FONTS } from './data';

export function RegisterCTA() {
  return (
    <div
      id="register"
      style={{
        padding: '120px 0 0 0',
        background: PALETTE.bgDeeper,
        borderTop: `1px solid ${PALETTE.bgLine}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '0 80px', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: PALETTE.lime,
            letterSpacing: 3,
            marginBottom: 24,
          }}
        >
          ▍ ▍ ▍ FINAL CALL ▍ ▍ ▍
        </div>
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: 220,
            fontWeight: 700,
            color: PALETTE.text,
            margin: 0,
            letterSpacing: -8,
            lineHeight: 0.85,
          }}
        >
          Join us
          <br />
          <span style={{ color: PALETTE.pink }}>online.</span>
        </h2>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 20,
            color: PALETTE.textDim,
            lineHeight: 1.5,
            maxWidth: 580,
            margin: '32px auto 40px',
          }}
        >
          June 23, 2026. Free. Bring questions, leave with answers.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            background: PALETTE.pink,
            color: PALETTE.bg,
            padding: '24px 48px',
            fontFamily: FONTS.mono,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 1,
            textDecoration: 'none',
          }}
        >
          RESERVE FREE TICKET →
        </a>
      </div>
      <div style={{ height: 120 }} />
    </div>
  );
}
