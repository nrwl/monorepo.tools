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
          fontWeight: 500,
          color: PALETTE.text,
          margin: '28px 0 12px',
          letterSpacing: -1,
          maxWidth: 800,
        }}
      >
        The people thinking hardest about{' '}
        <span style={{ color: PALETTE.cyan }}>monorepos × agents</span>.
      </h2>
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: 17,
          color: PALETTE.textDim,
          maxWidth: 620,
          lineHeight: 1.5,
          marginBottom: 48,
        }}
      >
        Creators of the tools you use. Click any face for bio and talk
        details.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {SPEAKERS.map((s) => (
          <a
            key={s.id}
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
              transition: 'all 0.15s',
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
            <SpeakerAvatar speaker={s} height={280} />
            <div>
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
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontSize: 24,
                  color: PALETTE.text,
                  marginBottom: 4,
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
