import { PALETTE, FONTS } from './data';
import { SectionLabel } from './shared';

export function Agenda() {
  return (
    <div
      id="agenda"
      className="px-5 py-16 md:px-20 md:py-24"
      style={{ background: PALETTE.bg }}
    >
      <SectionLabel
        index={1}
        label="Agenda · June 23 · all times PT"
        accent={PALETTE.pink}
      />
      <h2
        className="mb-12 mt-7 text-[40px] tracking-[-1.5px] md:text-[96px] md:tracking-[-3px]"
        style={{
          fontFamily: FONTS.display,
          fontWeight: 700,
          color: PALETTE.text,
          lineHeight: 0.9,
          maxWidth: 1100,
        }}
      >
        All signal.{' '}
        <span style={{ color: PALETTE.pink }}>Zero filler.</span>
      </h2>

      <div
        className="px-6 py-16 md:px-8 md:py-24"
        style={{
          border: `1px solid ${PALETTE.bgLine}`,
          textAlign: 'center',
          background: 'rgba(245,158,11,0.03)',
        }}
      >
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: PALETTE.pink,
            letterSpacing: 3,
            marginBottom: 18,
          }}
        >
          SCHEDULE
        </div>
        <div
          className="mb-4 text-[32px] tracking-[-1px] md:text-[56px] md:tracking-[-2px]"
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            color: PALETTE.text,
            lineHeight: 0.95,
          }}
        >
          Full schedule{' '}
          <span style={{ color: PALETTE.pink }}>coming soon</span>
        </div>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 16,
            color: PALETTE.textDim,
            lineHeight: 1.6,
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          We&rsquo;re finalizing talk titles and the running order. Check back
          soon, or grab a free seat to be notified when it&rsquo;s live.
        </p>
      </div>

      {/* Full agenda — restore once talk titles are confirmed.
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
              (e.currentTarget.style.background = 'rgba(245,158,11,0.06)')
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
      */}
    </div>
  );
}
