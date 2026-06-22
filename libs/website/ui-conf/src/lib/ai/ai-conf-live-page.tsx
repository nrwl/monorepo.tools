import { useEffect, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';
import { PALETTE, FONTS, LIVE, AGENDA, SPEAKERS, Speaker } from './data';
import { NavBar, ConfFooter, SpeakerModal } from './shared';
import { LIVE_KEYFRAMES } from './live-banner';
import { PolygraphLaunch } from './polygraph-launch';
import { Hosts } from './hosts';
import { SlotTime, useTimezone, TzMode } from './timezone';

function LiveDot({
  size = 6,
  color = '#fff',
}: {
  size?: number;
  color?: string;
}) {
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

/** Compact PT / local toggle for the schedule rail header. Reuses the shared
 *  useTimezone() hook, so it stays in sync with the /conf agenda toggle. */
function RailTimezoneToggle() {
  const { mode, setMode, showToggle, localLabel } = useTimezone();
  if (!showToggle) return null;
  const tab = (m: TzMode, text: string) => {
    const active = mode === m;
    return (
      <button
        type="button"
        onClick={() => setMode(m)}
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          letterSpacing: 1,
          padding: '3px 8px',
          border: 'none',
          cursor: 'pointer',
          background: active ? 'rgba(245,158,11,0.12)' : 'transparent',
          color: active ? PALETTE.pink : PALETTE.textMute,
          transition: 'color 0.15s, background 0.15s',
        }}
      >
        {text}
      </button>
    );
  };
  return (
    <span
      style={{ display: 'inline-flex', border: `1px solid ${PALETTE.bgLine}` }}
    >
      {tab('pt', 'PT')}
      {tab('local', localLabel || 'LOCAL')}
    </span>
  );
}

export function AiConfLivePage() {
  const { mode, mounted, localLabel } = useTimezone();
  const activeLabel = mounted && mode === 'local' ? localLabel : 'PT';
  const [modalSpeaker, setModalSpeaker] = useState<Speaker | null>(null);

  // Open the speaker modal from a #speaker=<id> hash, mirroring the agenda on
  // the main /conf page so a row click reveals the same talk details.
  useEffect(() => {
    const sync = () => {
      const match = window.location.hash.match(/^#speaker=(.+)$/);
      if (match) {
        const found = SPEAKERS.find((s) => s.id === match[1]);
        if (found) setModalSpeaker(found);
      }
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        background: PALETTE.bg,
        color: PALETTE.text,
        fontFamily: FONTS.body,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <style>{LIVE_KEYFRAMES}</style>
      {/* On wide layouts the rail card is pinned to its column box so its height
          tracks the 16:9 video and the list scrolls inside. Below lg it flows
          normally under the video. */}
      <style>{`
        @media (min-width: 1024px) {
          .live-rail-card { position: absolute; inset: 0; }
        }
      `}</style>
      <NavBar accent={PALETTE.pink} linkBase="/conf" />

      <div className="mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-6 px-5 py-6 md:px-14 md:py-8 lg:grid-cols-[1fr_360px]">
        {/* video */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16 / 9',
            overflow: 'hidden',
            background: '#000',
            border: `1px solid ${PALETTE.bgLine}`,
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${LIVE.youtubeId}?rel=0&modestbranding=1`}
            title="AI ❤️ Monorepos — live stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '6px 11px',
              background: 'rgba(239,68,68,0.92)',
              color: '#fff',
              fontFamily: FONTS.mono,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 0.5,
              pointerEvents: 'none',
            }}
          >
            <LiveDot />
            LIVE
          </span>
        </div>

        {/* schedule rail — orientation only: full running order, click-through
            to talk details (same modal as the /conf agenda). No now/next
            tracking; the live order can shift and we don't track it. */}
        <div style={{ position: 'relative' }}>
          <div
            className="live-rail-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: PALETTE.bgDeeper,
              border: `1px solid ${PALETTE.bgLine}`,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '16px 16px 12px',
                borderBottom: `1px solid ${PALETTE.bgLine}`,
                flex: 'none',
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: PALETTE.textDim,
                }}
              >
                TODAY'S SCHEDULE
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10,
                  marginTop: 6,
                }}
              >
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    color: PALETTE.textMute,
                  }}
                >
                  {AGENDA.length} talks · all times {activeLabel}
                </div>
                <RailTimezoneToggle />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '6px 12px 10px',
                flex: 1,
                minHeight: 0,
                overflowY: 'auto',
              }}
            >
              {AGENDA.map((row, i) => {
                const speaker = SPEAKERS.find((s) => s.name === row.speaker);

                const rowStyle: CSSProperties = {
                  display: 'flex',
                  gap: 11,
                  padding: '11px 10px',
                  borderBottom:
                    i < AGENDA.length - 1
                      ? `1px solid ${PALETTE.grid}`
                      : 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: speaker ? 'pointer' : 'default',
                  transition: 'background 0.15s',
                };
                const onMouseEnter = (e: MouseEvent<HTMLElement>) =>
                  (e.currentTarget.style.background = 'rgba(245,158,11,0.06)');
                const onMouseLeave = (e: MouseEvent<HTMLElement>) =>
                  (e.currentTarget.style.background = 'transparent');

                const inner = (
                  <>
                    <div
                      style={{
                        width: 96,
                        flex: 'none',
                        fontFamily: FONTS.mono,
                        fontSize: 11,
                        color: PALETTE.textMute,
                        paddingTop: 2,
                        lineHeight: 1.35,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <SlotTime item={row} showLabel={false} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: FONTS.display,
                          fontSize: 13.5,
                          fontWeight: 500,
                          color: PALETTE.textDim,
                          lineHeight: 1.32,
                        }}
                      >
                        {row.title}
                      </div>
                      <div
                        style={{
                          fontFamily: FONTS.body,
                          fontSize: 11.5,
                          color: PALETTE.textMute,
                          marginTop: 3,
                        }}
                      >
                        {row.speaker}
                        {speaker ? ` · ${speaker.org}` : ''}
                      </div>
                    </div>
                  </>
                );

                return speaker ? (
                  <a
                    key={i}
                    href={`#speaker=${speaker.id}`}
                    style={rowStyle}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={i}
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
      </div>

      <PolygraphLaunch />
      <Hosts />
      <ConfFooter accent={PALETTE.pink} linkBase="/conf" />

      <SpeakerModal
        speaker={modalSpeaker}
        onClose={() => {
          setModalSpeaker(null);
          if (
            typeof window !== 'undefined' &&
            window.location.hash.startsWith('#speaker=')
          ) {
            window.history.replaceState(
              null,
              '',
              window.location.pathname + window.location.search,
            );
          }
        }}
        accent={PALETTE.pink}
      />
    </div>
  );
}

export default AiConfLivePage;
