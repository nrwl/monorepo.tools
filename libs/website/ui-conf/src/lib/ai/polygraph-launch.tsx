import { useEffect, useState } from 'react';
import { PALETTE, FONTS } from './data';

const TRAILER_EMBED =
  'https://www.youtube.com/embed/6xvOrf4U4zM?autoplay=1&rel=0';

export function PolygraphLaunch() {
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    if (!trailerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTrailerOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [trailerOpen]);

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
          Polygraph now.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://trypolygraph.com"
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
            GET POLYGRAPH NOW →
          </a>
          <button
            type="button"
            onClick={() => setTrailerOpen(true)}
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
              background: 'transparent',
              cursor: 'pointer',
              border: `1px solid ${PALETTE.textDim}`,
            }}
          >
            WATCH THE TRAILER →
          </button>
        </div>
      </div>

      {trailerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Polygraph trailer"
          onClick={() => setTrailerOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            background: 'rgba(15,23,42,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 960 }}
          >
            <div className="flex justify-end" style={{ marginBottom: 12 }}>
              <button
                type="button"
                onClick={() => setTrailerOpen(false)}
                aria-label="Close trailer"
                style={{
                  color: PALETTE.text,
                  background: 'transparent',
                  border: `1px solid ${PALETTE.textDim}`,
                  width: 36,
                  height: 36,
                  fontSize: 18,
                  lineHeight: 1,
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%',
                background: '#000',
              }}
            >
              <iframe
                src={TRAILER_EMBED}
                title="Polygraph trailer"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
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
      )}
    </div>
  );
}
