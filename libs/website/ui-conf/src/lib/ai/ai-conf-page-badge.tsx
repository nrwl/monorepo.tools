import { useEffect, useState } from 'react';
import { PALETTE, FONTS, Speaker, SPEAKERS } from './data';
import { CountdownPill, NavBar, SpeakerModal, ConfFooter } from './shared';
import { Stat } from './hero';
import { BadgeHero } from './badge-hero';
import { Agenda } from './agenda';
import { SpeakerGrid } from './speakers';
import { PolygraphLaunch } from './polygraph-launch';
import { Hosts } from './hosts';
import { RegisterCTA } from './register-cta';
import { LiveBanner, FloatingWatchPill } from './live-banner';

export function AiConfPageBadge() {
  const [modalSpeaker, setModalSpeaker] = useState<Speaker | null>(null);

  // Optional badge overrides via query string, e.g.
  //   /conf-badge?speaker=kent-c-dodds
  //   /conf-badge?name=Ada%20Lovelace&role=Staff%20Engineer
  const [badge, setBadge] = useState<{
    name?: string;
    role?: string;
    speaker?: Speaker;
  }>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const speakerId = params.get('speaker');
    const speaker = speakerId
      ? SPEAKERS.find((s) => s.id === speakerId)
      : undefined;
    setBadge({
      name: params.get('name') ?? undefined,
      role: params.get('role') ?? undefined,
      speaker,
    });
  }, []);

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#speaker=(.+)$/);
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
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <style>{`
        @keyframes aiconfMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      {/* nav + hero + stat bar fill exactly one viewport so the bar pins to
          the bottom on load (hero grows to absorb the leftover height). */}
      <div className="flex min-h-screen flex-col min-[1800px]:min-h-0">
        <NavBar accent={PALETTE.pink} />
        <LiveBanner />
        <div className="flex flex-1 flex-col min-[1800px]:flex-none">
          <BadgeHero
            name={badge.name}
            role={badge.role}
            speaker={badge.speaker}
          />
        </div>
        <div
          className="py-8 md:py-10"
          style={{
            borderTop: `1px solid ${PALETTE.bgLine}`,
            borderBottom: `1px solid ${PALETTE.bgLine}`,
            background: PALETTE.bgDeeper,
          }}
        >
          <div className="mx-auto grid w-full max-w-[1536px] grid-cols-1 items-center gap-8 px-5 md:grid-cols-3 md:px-14">
            <Stat label="DATE" value="June 23, 2026" tone={PALETTE.pink} />
            <div className="md:justify-self-center">
              <Stat label="FORMAT" value="Online, free" tone={PALETTE.cyan} />
            </div>
            <div className="md:justify-self-end">
              <CountdownPill compact />
            </div>
          </div>
        </div>
      </div>
      <Agenda />
      <PolygraphLaunch />
      <SpeakerGrid onPick={setModalSpeaker} />
      <Hosts />
      <RegisterCTA />
      <ConfFooter accent={PALETTE.pink} />
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
              window.location.pathname + window.location.search
            );
          }
        }}
        accent={PALETTE.pink}
      />
      <FloatingWatchPill />
    </div>
  );
}

export default AiConfPageBadge;
