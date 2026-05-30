import { PALETTE, FONTS, CONF } from './data';

export function RegisterCTA() {
  return (
    <div
      id="register"
      className="pt-20 md:pt-[120px]"
      style={{
        background: PALETTE.bgDeeper,
        borderTop: `1px solid ${PALETTE.bgLine}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="px-5 md:px-20" style={{ textAlign: 'center' }}>
        <h2
          className="text-[56px] tracking-[-2px] sm:text-[110px] sm:tracking-[-4px] lg:text-[220px] lg:tracking-[-8px]"
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            color: PALETTE.text,
            margin: 0,
            lineHeight: 0.85,
          }}
        >
          Join us
          <br />
          <span style={{ color: PALETTE.pink }}>online.</span>
        </h2>
        <p
          className="text-[17px] md:text-[20px]"
          style={{
            fontFamily: FONTS.body,
            color: PALETTE.textDim,
            lineHeight: 1.5,
            maxWidth: 580,
            margin: '32px auto 40px',
          }}
        >
          June 23, 2026. Free. Bring questions, leave with answers.
        </p>
        <a
          href={CONF.registerUrl}
          target="_blank"
          rel="noreferrer"
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
