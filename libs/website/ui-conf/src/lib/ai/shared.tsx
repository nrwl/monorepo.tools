import { useEffect, useMemo, useState } from 'react';
import { PALETTE, FONTS, CONF, LIVE, Speaker, agendaForSpeaker } from './data';
import { useRegisterUrl } from './use-register-url';
import { SlotTime } from './timezone';

function useCountdown(targetISO: string) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  let diff = Math.max(0, target - (now ?? target));
  const d = Math.floor(diff / 86400000);
  diff -= d * 86400000;
  const h = Math.floor(diff / 3600000);
  diff -= h * 3600000;
  const m = Math.floor(diff / 60000);
  diff -= m * 60000;
  const s = Math.floor(diff / 1000);
  return { d, h, m, s, ready: now !== null };
}

export function CountdownPill({
  compact = false,
  tone = 'pink',
}: {
  compact?: boolean;
  tone?: 'pink' | 'cyan';
}) {
  const { d, h, m, s } = useCountdown(CONF.targetISO);
  const pad = (n: number) => String(n).padStart(2, '0');
  const color = tone === 'pink' ? PALETTE.pink : PALETTE.cyan;
  if (compact) {
    return (
      <div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: PALETTE.textMute,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          STARTS IN
        </div>
        <div
          style={{
            fontFamily: FONTS.display,
            fontSize: 28,
            color: PALETTE.text,
            letterSpacing: -1,
            fontVariantNumeric: 'tabular-nums',
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: 6,
          }}
        >
          <span style={{ color }}>▸</span>
          <span style={{ display: 'inline-flex', gap: 18 }}>
            <span>
              {pad(d)}
              <span style={{ color: PALETTE.textMute, fontSize: 18 }}>d</span>
            </span>
            <span>
              {pad(h)}
              <span style={{ color: PALETTE.textMute, fontSize: 18 }}>h</span>
            </span>
            <span>
              {pad(m)}
              <span style={{ color: PALETTE.textMute, fontSize: 18 }}>m</span>
            </span>
            <span>
              {pad(s)}
              <span style={{ color: PALETTE.textMute, fontSize: 18 }}>s</span>
            </span>
          </span>
        </div>
      </div>
    );
  }
  const cell = (n: number, label: string) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 72,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 44,
          fontWeight: 500,
          color: PALETTE.text,
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {pad(n)}
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          color: PALETTE.textMute,
          marginTop: 8,
          letterSpacing: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  );
  const dot = (
    <div
      style={{
        fontFamily: FONTS.mono,
        fontSize: 40,
        color,
        opacity: 0.5,
        lineHeight: 1,
      }}
    >
      :
    </div>
  );
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 16,
        padding: '16px 24px',
        border: `1px solid ${PALETTE.bgLine}`,
        background: 'rgba(255,255,255,0.02)',
        borderRadius: 4,
      }}
    >
      {cell(d, 'DAYS')}
      {dot}
      {cell(h, 'HOURS')}
      {dot}
      {cell(m, 'MINUTES')}
      {dot}
      {cell(s, 'SECONDS')}
    </div>
  );
}

export function NavBar({
  accent = PALETTE.pink,
  linkBase = '',
}: {
  accent?: string;
  /** Prefix for the section anchors. Empty on the main conf page (same-page
   * scroll); set to "/conf" on subpages so the links jump back to the main
   * page's sections. */
  linkBase?: string;
}) {
  const registerUrl = useRegisterUrl();
  return (
    <nav
      className="py-4 md:py-5"
      style={{
        borderBottom: `1px solid ${PALETTE.bgLine}`,
        fontFamily: FONTS.mono,
        fontSize: 13,
        color: PALETTE.text,
        position: 'sticky',
        top: 0,
        zIndex: 5,
        background: 'rgba(10,22,40,0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-5 md:px-14">
        <a
          href="/conf"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: PALETTE.text,
            textDecoration: 'none',
          }}
        >
          <span style={{ fontWeight: 600 }}>
            ai<span style={{ color: accent }}>{'<3'}</span>monorepo
          </span>
          <span style={{ color: PALETTE.textMute }}>/conf/2026</span>
        </a>
        <div className="flex items-center gap-4 md:gap-9">
          <div className="hidden items-center gap-9 md:flex">
            <a
              href="/"
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              ← monorepo.tools
            </a>
            <a
              href={`${linkBase}#agenda`}
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Agenda
            </a>
            <a
              href={`${linkBase}#speakers`}
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Speakers
            </a>
            <a
              href={`${linkBase}#hosts`}
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Hosts
            </a>
            <a
              href="/conf/code-of-conduct"
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Code of Conduct
            </a>
          </div>
          {!LIVE.isLive && (
            <a
              href={registerUrl}
              style={{
                color: PALETTE.bg,
                background: accent,
                padding: '10px 18px',
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Register →
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export function SectionLabel({
  index,
  label,
  accent = PALETTE.pink,
}: {
  index: number;
  label: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        fontFamily: FONTS.mono,
        fontSize: 12,
        color: PALETTE.textDim,
        letterSpacing: 2,
      }}
    >
      <span style={{ color: accent }}>§{String(index).padStart(2, '0')}</span>
      <span style={{ flex: '0 0 auto' }}>{label.toUpperCase()}</span>
      <span style={{ flex: 1, height: 1, background: PALETTE.bgLine }} />
    </div>
  );
}

export function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function GlobeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
    </svg>
  );
}

export function socialHandleFromUrl(url: string) {
  const m = url.match(
    /(?:x\.com|twitter\.com|bsky\.app|linkedin\.com\/in)\/([^/?#]+)/i
  );
  return m ? `@${m[1].replace(/^@/, '')}` : url.replace(/^https?:\/\//, '');
}

export function hostFromUrl(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export function SpeakerAvatar({
  speaker,
  size = '100%',
  height = 280,
}: {
  speaker: Speaker;
  size?: string | number;
  height?: number | string;
}) {
  if (speaker.image) {
    return (
      <div
        className="speaker-img-wrap"
        style={{
          width: size,
          height,
          borderRadius: 12,
          overflow: 'hidden',
          background: PALETTE.bgCard,
          position: 'relative',
        }}
      >
        <img
          src={speaker.image}
          alt={speaker.name}
          loading="lazy"
          className="speaker-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            transition: 'transform 320ms ease',
          }}
        />
      </div>
    );
  }
  return (
    <div
      aria-hidden
      style={{
        width: size,
        height,
        background: `linear-gradient(135deg, ${PALETTE.bgCard} 0%, ${PALETTE.bgDeeper} 100%)`,
        border: `1px solid ${PALETTE.bgLine}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONTS.display,
        fontSize: 56,
        fontWeight: 500,
        color: PALETTE.textMute,
        letterSpacing: -2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>
        {speaker.name
          .split(' ')
          .map((p) => p[0])
          .join('')
          .slice(0, 2)}
      </span>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 70% 30%, ${PALETTE.pink}22, transparent 60%)`,
        }}
      />
    </div>
  );
}

/** Social + website links for a speaker. Shared by the modal and the
 * dedicated speaker page. */
export function SpeakerLinks({ speaker }: { speaker: Speaker }) {
  return (
    <>
      {speaker.socialUrl && (
        <a
          href={speaker.socialUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${speaker.name} on social media`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: PALETTE.textDim,
            textDecoration: 'none',
          }}
        >
          <XIcon size={14} /> {socialHandleFromUrl(speaker.socialUrl)}
        </a>
      )}
      {speaker.website && (
        <a
          href={speaker.website}
          target="_blank"
          rel="noreferrer"
          aria-label={`${speaker.name}'s website`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: PALETTE.textDim,
            textDecoration: 'none',
          }}
        >
          <GlobeIcon size={14} /> {hostFromUrl(speaker.website)}
        </a>
      )}
    </>
  );
}

/** Talk title + abstract block, optionally annotated with the agenda time.
 * Shared by the speaker modal and the dedicated speaker page. */
export function TalkBlock({
  speaker,
  accent = PALETTE.pink,
  showTime = false,
  large = false,
}: {
  speaker: Speaker;
  accent?: string;
  showTime?: boolean;
  /** Roomier padding + larger type for the standalone speaker page. */
  large?: boolean;
}) {
  if (!speaker.talkTitle) return null;
  const slot = showTime ? agendaForSpeaker(speaker.name) : undefined;
  return (
    <div
      style={{
        marginTop: 8,
        padding: large ? 32 : 20,
        border: `1px solid ${PALETTE.bgLine}`,
        background: 'rgba(245,158,11,0.04)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 12,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: accent,
            letterSpacing: 2,
          }}
        >
          TALK
        </div>
        {slot && (
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: PALETTE.textDim,
              whiteSpace: 'nowrap',
            }}
          >
            JUN 23 <span style={{ color: PALETTE.textMute }}>·</span>{' '}
            <SlotTime item={slot} muteColor={PALETTE.textDim} />
          </div>
        )}
      </div>
      <div
        style={{
          fontFamily: FONTS.display,
          fontSize: large ? 28 : 22,
          fontWeight: 700,
          color: PALETTE.text,
          letterSpacing: -0.5,
          marginBottom: large ? 14 : 10,
        }}
      >
        {speaker.talkTitle}
      </div>
      {speaker.talkAbstract && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: large ? 14 : 10,
          }}
        >
          {speaker.talkAbstract.split(/\n\s*\n/).map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: FONTS.body,
                fontSize: large ? 16.5 : 14,
                color: PALETTE.textDim,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export function SpeakerModal({
  speaker,
  onClose,
  accent = PALETTE.pink,
}: {
  speaker: Speaker | null;
  onClose: () => void;
  accent?: string;
}) {
  useEffect(() => {
    if (!speaker) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [speaker, onClose]);
  useEffect(() => {
    if (!speaker || typeof document === 'undefined') return;
    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyOverscroll = body.style.overscrollBehavior;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevHtmlOverscroll = documentElement.style.overscrollBehavior;

    body.style.overflow = 'hidden';
    body.style.overscrollBehavior = 'none';
    documentElement.style.overflow = 'hidden';
    documentElement.style.overscrollBehavior = 'none';

    return () => {
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
      documentElement.style.overflow = prevHtmlOverflow;
      documentElement.style.overscrollBehavior = prevHtmlOverscroll;
    };
  }, [speaker]);
  if (!speaker) return null;
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/conf/speaker/${speaker.id}`
      : `/conf/speaker/${speaker.id}`;
  return (
    <div
      onClick={onClose}
      className="p-0 md:p-10"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: 'rgba(6,16,30,0.85)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="grid h-[100dvh] max-h-[100dvh] w-full grid-cols-1 overflow-y-auto overscroll-contain md:h-auto md:max-h-[90vh] md:grid-cols-[360px_1fr]"
        style={{
          width: '100%',
          maxWidth: 1080,
          boxSizing: 'border-box',
          background: PALETTE.bg,
          border: `1px solid ${PALETTE.bgLine}`,
          position: 'relative',
          overscrollBehavior: 'contain',
        }}
      >
        <div
          className="border-b border-[#475569] p-7 md:border-b-0 md:border-r"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          <SpeakerAvatar speaker={speaker} size="100%" height={380} />
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: PALETTE.textDim,
              lineHeight: 1.6,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 16,
                color: PALETTE.textDim,
                lineHeight: 1.4,
                textAlign: 'center',
              }}
            >
              {speaker.role} ·{' '}
              <span style={{ color: PALETTE.text }}>{speaker.org}</span>
            </div>
          </div>
        </div>
        <div
          className="p-6 md:p-10"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12,
              color: accent,
              letterSpacing: 2,
            }}
          >
            SPEAKER
          </div>
          <h3
            className="text-[32px] md:text-[52px]"
            style={{
              fontFamily: FONTS.display,
              fontWeight: 700,
              color: PALETTE.text,
              lineHeight: 1,
              margin: 0,
              letterSpacing: -1.5,
            }}
          >
            {speaker.name}
          </h3>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 16,
              color: PALETTE.text,
              lineHeight: 1.6,
              margin: '12px 0 0',
              opacity: 0.92,
            }}
          >
            {speaker.bio}
          </p>

          {/* Talk block — restore once schedule is locked.
          <div
            style={{
              marginTop: 18,
              border: `1px solid ${PALETTE.bgLine}`,
              padding: 18,
              background: 'rgba(255,255,255,0.015)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 12,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: accent,
                  letterSpacing: 2,
                }}
              >
                {talk ? (
                  <>
                    {talk.track.toUpperCase()} ·{' '}
                    <SlotTime item={talk} muteColor={accent} />
                  </>
                ) : (
                  `TOPIC · ${speaker.topic.toUpperCase()}`
                )}
              </div>
              {talk && (
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    color: PALETTE.text,
                    whiteSpace: 'nowrap',
                  }}
                >
                  JUN 23 <span style={{ color: PALETTE.textMute }}>·</span>{' '}
                  <SlotTime item={talk} startOnly muteColor={PALETTE.textMute} />
                </div>
              )}
            </div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontSize: 22,
                color: PALETTE.text,
                marginBottom: 8,
                letterSpacing: -0.5,
              }}
            >
              {talk ? talk.title : speaker.topic}
            </div>
            {talk && (
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 13.5,
                  color: PALETTE.textDim,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {talk.desc}
              </p>
            )}
          </div>
          */}

          <TalkBlock speaker={speaker} accent={accent} showTime />

          <div
            style={{
              marginTop: 6,
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <SpeakerLinks speaker={speaker} />
            <a
              href={shareUrl}
              onClick={(e) => {
                e.preventDefault();
                if (typeof navigator !== 'undefined' && navigator.clipboard) {
                  navigator.clipboard.writeText(shareUrl);
                }
              }}
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                color: accent,
                textDecoration: 'none',
                borderBottom: `1px solid ${accent}`,
                paddingBottom: 2,
                marginLeft: 'auto',
              }}
            >
              copy share link →
            </a>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'transparent',
            border: `1px solid ${PALETTE.bgLine}`,
            color: PALETTE.textDim,
            width: 32,
            height: 32,
            cursor: 'pointer',
            fontFamily: FONTS.mono,
            fontSize: 16,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export function ConfFooter({
  accent = PALETTE.pink,
  linkBase = '',
}: {
  accent?: string;
  linkBase?: string;
}) {
  const registerUrl = useRegisterUrl();
  return (
    <footer
      className="py-12"
      style={{
        borderTop: `1px solid ${PALETTE.bgLine}`,
        background: PALETTE.bgDeeper,
        fontFamily: FONTS.mono,
        fontSize: 12,
        color: PALETTE.textDim,
      }}
    >
      <div className="mx-auto grid w-full max-w-[1536px] grid-cols-2 gap-10 px-5 md:grid-cols-4 md:gap-12 md:px-14">
        <div className="col-span-2 md:col-span-1">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 16,
            }}
          >
            <span style={{ color: PALETTE.text, fontWeight: 600 }}>
              ai<span style={{ color: accent }}>{'<3'}</span>monorepo
            </span>
          </div>
          <div
            style={{
              color: PALETTE.textMute,
              lineHeight: 1.7,
              maxWidth: 320,
            }}
          >
            A free half-day virtual conference for engineers and tech leads
            working at the intersection of monorepos and AI.
          </div>
        </div>
        <div>
          <div
            style={{
              color: PALETTE.text,
              marginBottom: 12,
              letterSpacing: 1.5,
            }}
          >
            EVENT
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a
              href={`${linkBase}#agenda`}
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Agenda
            </a>
            <a
              href={`${linkBase}#speakers`}
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Speakers
            </a>
            <a
              href={registerUrl}
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Register
            </a>
          </div>
        </div>
        <div>
          <div
            style={{
              color: PALETTE.text,
              marginBottom: 12,
              letterSpacing: 1.5,
            }}
          >
            BROUGHT TO YOU BY
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a
              href="https://nx.dev"
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Nx → nx.dev
            </a>
            <a
              href="https://trypolygraph.com"
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              Polygraph → trypolygraph.com
            </a>
          </div>
        </div>
        <div>
          <div
            style={{
              color: PALETTE.text,
              marginBottom: 12,
              letterSpacing: 1.5,
            }}
          >
            FOLLOW
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a
              href="https://twitter.com/NxDevTools"
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              @NxDevTools
            </a>
            <a
              href="https://youtube.com/@nxdevtools"
              style={{ color: PALETTE.textDim, textDecoration: 'none' }}
            >
              youtube.com/@nxdevtools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
