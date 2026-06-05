import { PALETTE, FONTS, SPEAKERS } from './data';
import { SectionLabel } from './shared';

// One-line hooks for confirmed talks. Keyed by speaker id; a talk only shows
// in "Confirmed so far" once it has a talkTitle in data.ts.
const TALK_TEASERS: Record<string, string> = {
  'kent-c-dodds':
    "If agents take over the implementation, judgment is what's left. Kent on what stays most human and valuable in an AI era.",
  'jack-herrington':
    'Code mode as a new approach to agentic AI: drastically fewer tokens, far higher accuracy. Jack shows the results.',
  'kiet-ho':
    "More agents doesn't mean more output. Kiet on a Lean Manufacturing framework for where to apply and tune agent usage at scale.",
  'john-lindquist':
    'John on the daily playbook for running swarms of agents in parallel: tiled panes, fast-model routing, and the muscle memory of a true power user.',
  'nicolas-beaussart':
    'PayFit ripped out micro-frontends across 15+ repos and cut CI from 45 to 5 minutes. Nicolas on the consolidation playbook.',
  'brandon-roberts':
    'AI agents now open PRs alongside us. Brandon on using Nx as a verification sandbox so agents test, catch errors, and self-correct before review.',
};

export function Agenda() {
  const confirmedTalks = SPEAKERS.filter((s) => s.talkTitle);

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

        {confirmedTalks.length > 0 && (
          <div className="mt-16 md:mt-20">
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                color: PALETTE.pink,
                letterSpacing: 3,
                marginBottom: 24,
              }}
            >
              CONFIRMED TALKS
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {confirmedTalks.map((s) => (
                <a
                  key={s.id}
                  href={`#speaker=${s.id}`}
                  className="group flex flex-col"
                  style={{
                    border: `1px solid ${PALETTE.bgLine}`,
                    padding: '28px 28px 24px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = PALETTE.pink;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = PALETTE.bgLine;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    className="text-[22px] md:text-[26px]"
                    style={{
                      fontFamily: FONTS.display,
                      fontWeight: 700,
                      color: PALETTE.text,
                      lineHeight: 1.15,
                      letterSpacing: -0.5,
                      marginBottom: 12,
                    }}
                  >
                    {s.talkTitle}
                  </div>
                  {TALK_TEASERS[s.id] && (
                    <p
                      style={{
                        fontFamily: FONTS.body,
                        fontSize: 15,
                        color: PALETTE.textDim,
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {TALK_TEASERS[s.id]}
                    </p>
                  )}
                  <div
                    className="mt-auto flex items-center justify-between pt-6"
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: 13,
                      color: PALETTE.textMute,
                    }}
                  >
                    <span>
                      {s.name}
                      <span style={{ color: PALETTE.textDim }}> · {s.org}</span>
                    </span>
                    <span style={{ color: PALETTE.pink }}>View talk →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

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
    </div>
  );
}
