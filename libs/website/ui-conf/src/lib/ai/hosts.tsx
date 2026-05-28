import { PALETTE, FONTS } from './data';

export function Hosts() {
  return (
    <div
      id="hosts"
      style={{
        padding: '96px 80px',
        background: PALETTE.bg,
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: FONTS.display,
          fontSize: 56,
          fontWeight: 700,
          color: PALETTE.text,
          margin: '0 0 64px',
          letterSpacing: -1,
        }}
      >
        Brought to you by
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 80,
        }}
      >
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
