import { PALETTE, FONTS } from './data';

export function Hosts() {
  return (
    <div
      id="hosts"
      className="px-5 py-16 md:px-20 md:py-24"
      style={{
        background: PALETTE.bg,
        textAlign: 'center',
      }}
    >
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
          href="https://trypolygraph.com"
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
    </div>
  );
}
