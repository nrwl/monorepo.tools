import { PALETTE, FONTS, SPEAKERS, Speaker } from './data';
import { SectionLabel, SpeakerAvatar } from './shared';

export function SpeakerGrid({
  onPick,
}: {
  onPick: (speaker: Speaker) => void;
}) {
  return (
    <div
      id="speakers"
      style={{ padding: '96px 80px', background: PALETTE.bgDeeper }}
    >
      <SectionLabel
        index={2}
        label={`Speakers · ${SPEAKERS.length} industry voices`}
        accent={PALETTE.cyan}
      />
      <h2
        style={{
          fontFamily: FONTS.display,
          fontSize: 56,
          fontWeight: 700,
          color: PALETTE.text,
          margin: '28px 0 12px',
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}
      >
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
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
