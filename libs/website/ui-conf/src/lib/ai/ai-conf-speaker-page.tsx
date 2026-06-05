import { PALETTE, FONTS, Speaker } from './data';
import { useRegisterUrl } from './use-register-url';
import {
  CountdownPill,
  NavBar,
  ConfFooter,
  TalkBlock,
  SpeakerLinks,
} from './shared';
import { Stat } from './hero';
import { BadgeStage, speakerBadgeContent } from './badge-hero';
import { Hosts } from './hosts';
import { RegisterCTA } from './register-cta';

/**
 * Dedicated, deep-linkable page for a single speaker. Reuses the conf
 * building blocks (badge, talk block, stat bar, hosts, register CTA, footer)
 * assembled around one speaker. Linked from social/email — the homepage keeps
 * its modal-on-click behavior, this page is not navigated to from the grid.
 */
export function AiConfSpeakerPage({ speaker }: { speaker: Speaker }) {
  const registerUrl = useRegisterUrl();
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
      <NavBar accent={PALETTE.pink} linkBase="/conf" />

      {/* hero: talk details + speaker badge, centered as a group */}
      <div
        className="mx-auto flex max-w-[1480px] flex-col items-center gap-12 px-5 py-12 md:flex-row md:items-center md:justify-center md:gap-28 md:px-14 md:py-20 lg:gap-36"
        style={{ background: PALETTE.bg }}
      >
        <div className="order-2 flex w-full max-w-[760px] flex-col items-start text-left md:order-1">
          <div className="w-full">
            <TalkBlock speaker={speaker} accent={PALETTE.pink} showTime large />
          </div>

          <div
            className="mt-6 flex flex-wrap items-center gap-5"
            style={{ marginTop: 24 }}
          >
            <SpeakerLinks speaker={speaker} />
          </div>

          {/* primary actions */}
          <div className="mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
            <a
              href={registerUrl}
              className="w-full justify-center sm:w-auto"
              style={{
                background: PALETTE.pink,
                color: PALETTE.bg,
                padding: '16px 32px',
                fontFamily: FONTS.mono,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                whiteSpace: 'nowrap',
              }}
            >
              RESERVE FREE TICKET →
            </a>
            <a
              href="/conf#speakers"
              className="w-full justify-center sm:w-auto"
              style={{
                color: PALETTE.text,
                padding: '16px 24px',
                fontFamily: FONTS.mono,
                fontSize: 13,
                letterSpacing: 1,
                textDecoration: 'none',
                border: `1px solid ${PALETTE.textDim}`,
                background: 'rgba(10,22,40,0.7)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              SEE ALL TALKS & SPEAKERS →
            </a>
          </div>
        </div>

        {/* badge — identical to /conf-badge?speaker= */}
        <div className="order-1 flex w-full max-w-[440px] shrink-0 justify-center md:order-2">
          <BadgeStage {...speakerBadgeContent(speaker)} />
        </div>
      </div>

      {/* conf info bar */}
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

      <Hosts />
      <RegisterCTA />
      <ConfFooter accent={PALETTE.pink} linkBase="/conf" />
    </div>
  );
}

export default AiConfSpeakerPage;
