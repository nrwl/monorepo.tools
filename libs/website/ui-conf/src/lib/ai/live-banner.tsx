import { PALETTE, FONTS, LIVE } from './data';

/** Pulsing "live" dot — red so the live state reads unmistakably. */
function LiveDot({ size = 8, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        flex: 'none',
        animation: 'aiconfLivedot 1.6s infinite',
      }}
    />
  );
}

export const LIVE_KEYFRAMES = `
  @keyframes aiconfLivedot {
    0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.55); }
    70% { box-shadow: 0 0 0 7px rgba(239,68,68,0); }
    100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
  }
  @keyframes aiconfLivepulse {
    0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
    70% { box-shadow: 0 0 0 9px rgba(255,255,255,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
  }
`;

/**
 * Sticky strip under the conf nav announcing that the stream is live, with a
 * CTA that opens the YouTube live stream in a new tab. Deliberately doesn't name
 * the current talk; the running order can shift live and we don't track it.
 * Renders nothing when not live.
 */
export function LiveBanner() {
  if (!LIVE.isLive) return null;

  return (
    <>
      <style>{LIVE_KEYFRAMES}</style>
      <div
        className="py-3"
        style={{
          background: LIVE.red,
          color: '#fff',
          fontFamily: FONTS.body,
        }}
      >
        <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between gap-4 px-5 md:px-14">
          <div className="flex min-w-0 items-center gap-3">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: FONTS.mono,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                flex: 'none',
              }}
            >
              <LiveDot />
              LIVE NOW
            </span>
            <span style={{ opacity: 0.5 }} className="hidden sm:inline">
              —
            </span>
            <span
              className="hidden truncate sm:inline"
              style={{ fontSize: 14 }}
            >
              AI ❤️ Monorepos is streaming{' '}
              <span style={{ opacity: 0.82 }}>now</span>
            </span>
          </div>
          <a
            href={LIVE.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 'none',
              padding: '9px 18px',
              background: PALETTE.bgDeeper,
              color: '#fff',
              fontFamily: FONTS.body,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              animation: 'aiconfLivepulse 1.8s infinite',
            }}
          >
            Join the live stream →
          </a>
        </div>
      </div>
    </>
  );
}

