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

/**
 * Shared helper: reads current UTM params from window.location.search and
 * sessionStorage. Last-touch: a visit carrying utm_* params overwrites the
 * stored set. Returns the effective UtmParams for the session.
 * 
 * Must only be called client-side (checks window.location.search).
 */
export function readUtmParams(): UtmParams {
  const search = new URLSearchParams(window.location.search);
  const fromUrl: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = search.get(key);
    if (value) fromUrl[key] = value;
  }

  const params = Object.keys(fromUrl).length > 0 ? fromUrl : readStored();
  if (Object.keys(fromUrl).length > 0) persist(fromUrl);

  return params;
}

/**
 * Builds the internal /conf/register URL with UTM params appended as query string.
 * Returns bare "/conf/register" if params are empty.
 */
function buildRegisterUrl(params: UtmParams): string {
  if (Object.keys(params).length === 0) return '/conf/register';
  return `/conf/register?${new URLSearchParams(params).toString()}`;
}

/**
 * Builds the external ti.to URL with UTM params appended.
 * Used only by the register page fallback link.
 */
export function buildTitoUrl(params: UtmParams): string {
  const keys = Object.keys(params);
  if (keys.length === 0) return CONF.registerUrl;
  const url = new URL(CONF.registerUrl);
  for (const key of keys) url.searchParams.set(key, params[key]);
  return url.toString();
}

/**
 * Returns the INTERNAL /conf/register URL with UTM params carried through from the
 * /conf landing URL. Captures utm_* from the current URL into sessionStorage so
 * they persist across in-page navigation (speaker modal, speaker sub-page) even
 * though only /conf receives them. Last-touch: a visit carrying utm_* params
 * overwrites the stored set.
 *
 * SSR-safe: renders "/conf/register" on the server / first client render, then
 * updates after hydration to include utm params to avoid a markup mismatch.
 */
export function useRegisterUrl(): string {
  const [url, setUrl] = useState<string>('/conf/register');

  useEffect(() => {
    const params = readUtmParams();
    setUrl(buildRegisterUrl(params));
  }, []);

  return url;
}
