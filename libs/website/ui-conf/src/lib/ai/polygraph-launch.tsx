import { PALETTE, FONTS } from './data';

// Inline (non-autoplay) embed — the trailer now lives on the page rather than
// behind a modal, so it should sit idle until the visitor hits play.
const TRAILER_EMBED = 'https://www.youtube.com/embed/6xvOrf4U4zM?rel=0';

export function PolygraphLaunch() {
  return (
    <div
      id="polygraph-launch"
      className="px-5 py-12 md:px-20 md:py-16"
      style={{
        background: PALETTE.bgDeeper,
        borderTop: `1px solid ${PALETTE.bgLine}`,
        borderBottom: `1px solid ${PALETTE.bgLine}`,
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:gap-12 md:px-12 md:py-12"
        style={{
          border: `1px solid ${PALETTE.bgLine}`,
          background: 'rgba(245,158,11,0.03)',
          maxWidth: 1180,
        }}
      >
        {/* left: copy + CTA */}
        <div>
          <div className="flex items-center gap-4" style={{ marginBottom: 20 }}>
            <img
              src="/images/conf/polygraph-logo.svg"
              alt="Polygraph"
              style={{ height: 30, width: 'auto' }}
            />
            <span
              className="text-[16px] md:text-[18px]"
              style={{
                fontFamily: FONTS.mono,
                color: PALETTE.pink,
                letterSpacing: 2,
                fontWeight: 600,
              }}
            >
              LIVE LAUNCH
            </span>
          </div>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              fontFamily: FONTS.body,
              color: PALETTE.textDim,
              lineHeight: 1.6,
              maxWidth: 580,
              margin: '0 0 28px',
            }}
          >
            <strong style={{ color: PALETTE.text, fontWeight: 700 }}>
              Jeff Cross and Victor Savkin launched Polygraph.
            </strong>{' '}
            A meta-harness that gives your AI coding agents autonomy across
            repository and session boundaries. It works alongside the agents you
            already use, coordinating changes across repos and keeping a
            persistent memory of their work.
          </p>

          <a
            href="https://trypolygraph.com?utm_source=monorepo.tools&utm_medium=referral&utm_campaign=ai-conf-2026&utm_content=launch-cta"
            target="_blank"
            rel="noreferrer"
            className="justify-center sm:justify-start"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: PALETTE.pink,
              color: PALETTE.bg,
              padding: '14px 28px',
              fontFamily: FONTS.mono,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1,
              textDecoration: 'none',
            }}
          >
            TRY POLYGRAPH NOW →
          </a>
        </div>

        {/* right: embedded trailer (16:9) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%',
            background: '#000',
            border: `1px solid ${PALETTE.bgLine}`,
          }}
        >
          <iframe
            src={TRAILER_EMBED}
            title="Polygraph trailer"
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
