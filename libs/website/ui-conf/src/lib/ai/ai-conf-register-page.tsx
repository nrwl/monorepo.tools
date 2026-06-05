import { createElement, useEffect, useState } from 'react';
import { PALETTE, FONTS } from './data';
import { NavBar, ConfFooter } from './shared';
import { readUtmParams, buildTitoUrl } from './use-register-url';

/**
 * Dedicated registration page hosting the ti.to inline widget with UTM
 * passthrough. The widget reads utm_* from the page URL and saves them as
 * registration metadata.
 * 
 * On mount:
 * 1. Reads utm_* from URL or sessionStorage
 * 2. If utm exist but missing from URL, injects them via history.replaceState
 * 3. Dynamically loads the ti.to widget script (guards against double-injection)
 */
export function AiConfRegisterPage() {
  const [utm, setUtm] = useState<Record<string, string>>({});
  const titoUrl = buildTitoUrl(utm);

  useEffect(() => {
    // Read utm params client-side
    const params = readUtmParams();
    setUtm(params);

    // If utm exists but not in current URL, update history to include them
    const search = new URLSearchParams(window.location.search);
    const hasUtm = Array.from(search.keys()).some((k) => k.startsWith('utm_'));
    if (Object.keys(params).length > 0 && !hasUtm) {
      const newParams = new URLSearchParams(params);
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }

    // Dynamically inject the ti.to widget script (guard against double-injection)
    if (!document.querySelector('script[src*="js.tito.io"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.tito.io/v2/with/inline';
      script.async = true;
      document.body.appendChild(script);
    }
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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar accent={PALETTE.pink} linkBase="/conf" />

      {/* Hero section */}
      <div
        className="mx-auto w-full max-w-[800px] px-5 py-16 md:px-14 md:py-24"
        style={{
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.display,
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.2,
            marginBottom: 12,
            color: PALETTE.text,
          }}
        >
          Reserve your free ticket
        </h1>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 18,
            color: PALETTE.textMute,
            marginBottom: 40,
          }}
        >
          Join us June 23, 2026 for AI{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          Monorepos Conf, a half-day virtual conference on agentic AI in
          monorepos.
        </p>
      </div>

      {/* Widget container */}
      <div
        className="mx-auto w-full max-w-[640px] px-5 md:px-14"
        style={{
          marginBottom: 60,
          flex: 1,
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${PALETTE.bgLine}`,
            borderRadius: 8,
            padding: '32px 24px',
            backdropFilter: 'blur(8px)',
          }}
        >
          {createElement('tito-widget', {
            event: 'nx-conf/2026-ai-monorepos-conf-online',
            'save-metadata-parameters': 'utm_*',
          })}
        </div>

        {/* Fallback link */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 24,
          }}
        >
          <a
            href={titoUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: FONTS.mono,
              fontSize: 13,
              color: PALETTE.textMute,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = PALETTE.cyan;
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = PALETTE.textMute;
            }}
          >
            Having trouble? Register on ti.to →
          </a>
        </div>
      </div>

      <ConfFooter accent={PALETTE.pink} linkBase="/conf" />
    </div>
  );
}

export default AiConfRegisterPage;
