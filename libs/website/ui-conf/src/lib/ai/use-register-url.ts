import { useEffect, useState } from 'react';
import { CONF } from './data';

// Standard UTM keys we forward to the ti.to registration page. Anything else on
// the /conf URL (e.g. ?speaker=, ?name=) is intentionally NOT forwarded.
const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

const STORAGE_KEY = 'conf_utm';

type UtmParams = Record<string, string>;

function readStored(): UtmParams {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}

function persist(params: UtmParams): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    // sessionStorage unavailable (private mode, etc.) — degrade silently.
  }
}

function withUtm(params: UtmParams): string {
  const keys = Object.keys(params);
  if (keys.length === 0) return CONF.registerUrl;
  const url = new URL(CONF.registerUrl);
  for (const key of keys) url.searchParams.set(key, params[key]);
  return url.toString();
}

/**
 * Returns the ti.to registration URL with UTM params carried through from the
 * /conf landing URL. Captures utm_* from the current URL into sessionStorage so
 * they persist across in-page navigation (speaker modal, speaker sub-page) even
 * though only /conf receives them. Last-touch: a visit carrying utm_* params
 * overwrites the stored set.
 *
 * SSR-safe: renders the bare URL on the server / first client render, then
 * updates after hydration to avoid a markup mismatch.
 */
export function useRegisterUrl(): string {
  const [url, setUrl] = useState<string>(CONF.registerUrl);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const fromUrl: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = search.get(key);
      if (value) fromUrl[key] = value;
    }

    const params = Object.keys(fromUrl).length > 0 ? fromUrl : readStored();
    if (Object.keys(fromUrl).length > 0) persist(fromUrl);

    setUrl(withUtm(params));
  }, []);

  return url;
}
