import { useEffect, useState } from 'react';
import { PALETTE, FONTS, Speaker, SPEAKERS } from './data';
import { CountdownPill, NavBar, SpeakerModal, ConfFooter } from './shared';
import { NodeGraphHero, Stat } from './hero';
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
      <NodeGraphHero />
      <div
        style={{
          padding: '40px 56px',
          borderTop: `1px solid ${PALETTE.bgLine}`,
          borderBottom: `1px solid ${PALETTE.bgLine}`,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          gap: 32,
          background: PALETTE.bgDeeper,
        }}
      >
        <Stat label="DATE" value="23rd June 2026" tone={PALETTE.pink} />
        <Stat label="FORMAT" value="Online, free" tone={PALETTE.cyan} />
        <div style={{ justifySelf: 'end' }}>
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
            history.replaceState(
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
