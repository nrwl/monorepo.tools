import { useEffect, useState } from 'react';
import { PALETTE, FONTS, Speaker, SPEAKERS } from './data';
import { CountdownPill, NavBar, SpeakerModal, ConfFooter } from './shared';
import { Stat } from './hero';
import { ThreeCardHero } from './three-card-hero';
import { Agenda } from './agenda';
import { SpeakerGrid } from './speakers';
import { Hosts } from './hosts';
import { RegisterCTA } from './register-cta';

export function AiConfPage() {
  const [modalSpeaker, setModalSpeaker] = useState<Speaker | null>(null);

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
      <NavBar accent={PALETTE.pink} />
      <ThreeCardHero />
      <div
        className="grid grid-cols-1 items-center gap-8 px-5 py-8 md:grid-cols-3 md:px-14 md:py-10"
        style={{
          borderTop: `1px solid ${PALETTE.bgLine}`,
          borderBottom: `1px solid ${PALETTE.bgLine}`,
          background: PALETTE.bgDeeper,
        }}
      >
        <Stat label="DATE" value="June 23, 2026" tone={PALETTE.pink} />
        <div className="md:justify-self-center">
          <Stat label="FORMAT" value="Online, free" tone={PALETTE.cyan} />
        </div>
        <div className="md:justify-self-end">
          <CountdownPill compact />
        </div>
      </div>
      <Agenda />
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
              window.location.pathname + window.location.search,
            );
          }
        }}
        accent={PALETTE.pink}
      />
    </div>
  );
}

export default AiConfPage;
