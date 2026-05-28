import { PALETTE, FONTS, AGENDA } from './data';
import { SectionLabel } from './shared';

export function Agenda() {
  return (
    <div
      id="agenda"
      style={{ padding: '96px 80px', background: PALETTE.bg }}
    >
      <SectionLabel
        index={1}
        label="Agenda · June 23 · all times PT"
        accent={PALETTE.pink}
      />
      <h2
        style={{
          fontFamily: FONTS.display,
          fontSize: 96,
          fontWeight: 700,
          color: PALETTE.text,
          margin: '28px 0 48px',
          letterSpacing: -3,
          lineHeight: 0.9,
          maxWidth: 1100,
        }}
      >
        All signal.{' '}
        <span style={{ color: PALETTE.pink }}>Zero filler.</span>
      </h2>

      <div style={{ border: `1px solid ${PALETTE.bgLine}` }}>
        {AGENDA.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr 220px 40px',
              alignItems: 'center',
              padding: '28px 32px',
              borderBottom:
                i < AGENDA.length - 1
                  ? `1px solid ${PALETTE.bgLine}`
                  : 'none',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,77,141,0.04)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 18,
                color: PALETTE.text,
              }}
            >
              {s.time}
              <span style={{ color: PALETTE.textMute }}> — {s.end}</span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontSize: 22,
                  color: PALETTE.text,
                  marginBottom: 6,
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 14,
                  color: PALETTE.textDim,
                  lineHeight: 1.5,
                  maxWidth: 600,
                }}
              >
                {s.desc}
              </div>
            </div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 13,
                color: PALETTE.text,
                textAlign: 'right',
              }}
            >
              {s.speaker}
            </div>
            <div
              style={{
                textAlign: 'right',
                color: PALETTE.textMute,
                fontFamily: FONTS.mono,
              }}
            >
              →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
