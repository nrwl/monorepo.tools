import { PALETTE, FONTS } from './data';

const COLLAB = [
  {
    name: 'TanStack',
    src: '/images/conf/collab/tanstack.svg',
    href: 'https://tanstack.com',
    h: 34,
  },
  {
    name: 'Superset',
    src: '/images/conf/collab/superset.svg',
    href: 'https://superset.sh',
    h: 28,
  },
  {
    name: 'egghead.io',
    src: '/images/conf/collab/egghead.svg',
    href: 'https://egghead.io',
    h: 44,
  },
  {
    name: 'Netlify',
    src: '/images/conf/collab/netlify.svg',
    href: 'https://netlify.com',
    h: 46,
  },
];

export function Hosts() {
  return (
    <div
      id="hosts"
      className="py-16 md:py-24"
      style={{
        background: PALETTE.bg,
        textAlign: 'center',
      }}
    >
      <div className="mx-auto w-full max-w-[1536px] px-5 md:px-20">
        <h2
          className="mb-16 text-[32px] md:text-[56px]"
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            color: PALETTE.text,
            letterSpacing: -1,
          }}
        >
          Brought to you by
        </h2>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
          <a
            href="https://nx.dev"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 32px',
              minWidth: 260,
              minHeight: 120,
              textDecoration: 'none',
            }}
          >
            <img
              src="/images/conf/nx-logo.svg"
              alt="Nx"
              style={{ height: 120, width: 'auto' }}
            />
          </a>
          <div
            className="hidden md:block"
            style={{ width: 1, height: 80, background: PALETTE.bgLine }}
          />
          <a
            href="https://trypolygraph.com?utm_source=monorepo.tools&utm_medium=referral&utm_campaign=ai-conf-2026&utm_content=hosts-logo"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 32px',
              minWidth: 260,
              minHeight: 120,
              textDecoration: 'none',
            }}
          >
            <img
              src="/images/conf/polygraph-logo.svg"
              alt="Polygraph"
              style={{ height: 56, width: 'auto' }}
            />
          </a>
        </div>

        <div className="mt-20 md:mt-28">
          <h3
            className="mb-10 text-[20px] md:text-[28px]"
            style={{
              fontFamily: FONTS.display,
              fontWeight: 700,
              color: PALETTE.textDim,
              letterSpacing: -0.5,
            }}
          >
            In collaboration with
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {COLLAB.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                aria-label={c.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={c.src}
                  alt={c.name}
                  className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                  style={{ height: c.h, width: 'auto' }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
