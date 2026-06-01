import { PALETTE, FONTS, CONF } from './data';

export function PolygraphLaunch() {
  return (
    <div
      id="polygraph-launch"
      className="px-5 py-12 md:px-20 md:py-16"
      style={{
        background: PALETTE.bgDeeper,
        borderTop: `1px solid ${PALETTE.bgLine}`,
      }}
    >
      <div
        className="px-6 py-10 md:px-12 md:py-12"
        style={{
          border: `1px solid ${PALETTE.bgLine}`,
          background: 'rgba(245,158,11,0.03)',
          maxWidth: 760,
          margin: '0 auto',
        }}
      >
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
            Jeff Cross and Victor Savkin are launching Polygraph live.
          </strong>{' '}
          A platform enabling agentic collaboration across sessions and
          repository boundaries. Catch the announcement at the conf, or get
          early access now.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={CONF.registerUrl}
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
            REGISTER FOR THE CONF →
          </a>
          <a
            href="https://trypolygraph.com/#form"
            target="_blank"
            rel="noreferrer"
            className="justify-center sm:justify-start"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              color: PALETTE.text,
              padding: '14px 24px',
              fontFamily: FONTS.mono,
              fontSize: 13,
              letterSpacing: 1,
              textDecoration: 'none',
              border: `1px solid ${PALETTE.textDim}`,
            }}
          >
            GET EARLY ACCESS →
          </a>
        </div>
      </div>
    </div>
  );
}
