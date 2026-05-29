import { PALETTE, FONTS, SPEAKERS, Speaker } from './data';
import { SectionLabel, SpeakerAvatar, XIcon, GlobeIcon } from './shared';

export function SpeakerGrid({
  onPick,
}: {
  onPick: (speaker: Speaker) => void;
}) {
  return (
    <div
      id="speakers"
      className="px-5 py-16 md:px-20 md:py-24"
      style={{ background: PALETTE.bgDeeper }}
    >
      <SectionLabel
        index={2}
        label={`Speakers · ${SPEAKERS.length} industry voices`}
        accent={PALETTE.cyan}
      />
      <h2
        className="mb-3 mt-7 text-[32px] md:text-[56px]"
        style={{
          fontFamily: FONTS.display,
          fontWeight: 700,
          color: PALETTE.text,
          letterSpacing: -1,
          maxWidth: 800,
        }}
      >
        The people thinking hardest about{' '}
        <span style={{ color: PALETTE.cyan }}>monorepos × agents</span>.
      </h2>
      <div style={{ marginBottom: 48 }} />
      <style>{`
        .speaker-card .speaker-img {
          filter: saturate(0.4) brightness(0.92);
          transition: filter 280ms ease, transform 320ms ease;
        }
        .speaker-card:hover .speaker-img {
          filter: saturate(1) brightness(1);
          transform: scale(1.04);
        }
      `}</style>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SPEAKERS.map((s) => (
          <a
            key={s.id}
            className="speaker-card"
            href={`#speaker=${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              onPick(s);
            }}
            style={{
              border: `1px solid ${PALETTE.bgLine}`,
              padding: 20,
              cursor: 'pointer',
              background: PALETTE.bg,
              transition: 'border-color 0.2s, transform 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              textDecoration: 'none',
              color: 'inherit',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = PALETTE.cyan;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = PALETTE.bgLine;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <SpeakerAvatar speaker={s} height={360} />
            <div>
              {/* Talk-title chip — restore once schedule is locked.
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: PALETTE.cyan,
                  letterSpacing: 2,
                  marginBottom: 6,
                }}
              >
                {s.topic.toUpperCase()}
              </div>
              */}
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontSize: 22,
                  fontWeight: 700,
                  color: PALETTE.text,
                  marginBottom: 4,
                  letterSpacing: -0.5,
                }}
              >
                {s.name}
              </div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 13,
                  color: PALETTE.textDim,
                }}
              >
                {s.role} ·{' '}
                <span style={{ color: PALETTE.text }}>{s.org}</span>
              </div>
              {(s.socialUrl || s.website) && (
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    marginTop: 10,
                    color: PALETTE.textMute,
                  }}
                >
                  {s.socialUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          s.socialUrl,
                          '_blank',
                          'noopener,noreferrer',
                        );
                      }}
                      aria-label={`${s.name} on social media`}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        color: 'inherit',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <XIcon size={14} />
                    </button>
                  )}
                  {s.website && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          s.website,
                          '_blank',
                          'noopener,noreferrer',
                        );
                      }}
                      aria-label={`${s.name}'s website`}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        color: 'inherit',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <GlobeIcon size={14} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
