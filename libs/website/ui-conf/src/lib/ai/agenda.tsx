import type { CSSProperties, MouseEvent } from 'react';
import { PALETTE, FONTS, SPEAKERS, AGENDA } from './data';
import { SectionLabel } from './shared';

export function Agenda() {
  return (
    <div
      id="agenda"
      className="py-16 md:py-24"
      style={{ background: PALETTE.bg }}
    >
      <div className="mx-auto w-full max-w-[1536px] px-5 md:px-20">
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
          All signal. <span style={{ color: PALETTE.pink }}>Zero filler.</span>
        </h2>

        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: PALETTE.pink,
            letterSpacing: 3,
            marginBottom: 24,
          }}
        >
          SCHEDULE
        </div>
        <div style={{ border: `1px solid ${PALETTE.bgLine}` }}>
          {AGENDA.map((s, i) => {
            // A row links to its speaker's modal (talk details) when a single
            // speaker matches by name. Multi-speaker rows (e.g. the keynote)
            // stay non-clickable.
            const speaker = SPEAKERS.find((sp) => sp.name === s.speaker);
            const rowClass =
              'grid grid-cols-1 gap-3 md:grid-cols-[150px_1fr_220px] md:items-center md:gap-6';
            const rowStyle: CSSProperties = {
              padding: '24px 24px',
              borderBottom:
                i < AGENDA.length - 1
                  ? `1px solid ${PALETTE.bgLine}`
                  : 'none',
              transition: 'background 0.15s',
              textDecoration: 'none',
              color: 'inherit',
              cursor: speaker ? 'pointer' : 'default',
            };
            const onMouseEnter = (e: MouseEvent<HTMLElement>) =>
              (e.currentTarget.style.background = 'rgba(245,158,11,0.06)');
            const onMouseLeave = (e: MouseEvent<HTMLElement>) =>
              (e.currentTarget.style.background = 'transparent');

            const inner = (
              <>
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 15,
                    color: PALETTE.text,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.time}
                  <span style={{ color: PALETTE.textMute }}> – {s.end}</span>
                </div>
                <div>
                  {s.track !== 'Talk' && (
                    <div
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 11,
                        letterSpacing: 2,
                        color: PALETTE.pink,
                        marginBottom: 6,
                      }}
                    >
                      {s.track.toUpperCase()}
                    </div>
                  )}
                  <div
                    className="text-[18px] md:text-[20px]"
                    style={{
                      fontFamily: FONTS.display,
                      fontWeight: 700,
                      color: PALETTE.text,
                      lineHeight: 1.2,
                      letterSpacing: -0.3,
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
                      maxWidth: 620,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
                <div
                  className="md:text-right"
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 13,
                    color: PALETTE.text,
                  }}
                >
                  {s.speaker}
                  {speaker && (
                    <div
                      style={{
                        color: PALETTE.pink,
                        fontSize: 12,
                        marginTop: 6,
                      }}
                    >
                      View details →
                    </div>
                  )}
                </div>
              </>
            );

            return speaker ? (
              <a
                key={i}
                href={`#speaker=${speaker.id}`}
                className={rowClass}
                style={rowStyle}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {inner}
              </a>
            ) : (
              <div
                key={i}
                className={rowClass}
                style={rowStyle}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
