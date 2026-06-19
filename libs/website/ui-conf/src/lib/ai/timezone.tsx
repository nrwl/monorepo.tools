import { useEffect, useState } from 'react';
import { PALETTE, FONTS, CONF, AgendaItem } from './data';

// Conference timezone. All agenda copy refers to it as "PT".
const PT_TZ = 'America/Los_Angeles';
const STORAGE_KEY = 'conf-tz-mode';
// Custom event so every useTimezone() consumer on the page (and across the
// speaker routes) stays in sync the moment the toggle is flipped.
const SYNC_EVENT = 'conf-tz-change';

export type TzMode = 'pt' | 'local';

function getUserTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || PT_TZ;
  } catch {
    return PT_TZ;
  }
}

// GMT offset string (e.g. "GMT-7") for a zone at a given instant. Used to
// decide whether a visitor is effectively already on Pacific time.
function offsetAt(iso: string, timeZone: string): string {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'shortOffset',
    }).formatToParts(new Date(iso));
    return parts.find((p) => p.type === 'timeZoneName')?.value ?? '';
  } catch {
    return '';
  }
}

// Short timezone name (e.g. "CEST", or "GMT+2" depending on the engine).
function abbrevAt(iso: string, timeZone: string): string {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'short',
    }).formatToParts(new Date(iso));
    return parts.find((p) => p.type === 'timeZoneName')?.value ?? '';
  } catch {
    return '';
  }
}

function isPacific(timeZone: string): boolean {
  return offsetAt(CONF.targetISO, timeZone) === offsetAt(CONF.targetISO, PT_TZ);
}

function meridiemParts(iso: string, timeZone: string): { hm: string; mer: string } {
  const s = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(iso));
  const [hm, mer = ''] = s.split(' ');
  return { hm, mer };
}

export type SlotDisplay = { start: string; end: string; label: string };

/** Format a slot's range + timezone label for the active mode. PT mode reuses
 *  the canonical wall-clock strings so it renders identically to before. */
export function formatSlot(
  item: Pick<AgendaItem, 'time' | 'end' | 'startISO' | 'endISO'>,
  mode: TzMode,
  userTz: string
): SlotDisplay {
  if (mode === 'pt') {
    return { start: item.time, end: item.end, label: 'PT' };
  }
  const a = meridiemParts(item.startISO, userTz);
  const b = meridiemParts(item.endISO, userTz);
  // Drop the meridiem on the start when both ends share it ("6:00–6:30 PM").
  const start = a.mer && a.mer === b.mer ? a.hm : `${a.hm} ${a.mer}`.trim();
  const end = `${b.hm} ${b.mer}`.trim();
  return { start, end, label: abbrevAt(item.startISO, userTz) };
}

/** Client-only timezone preference, persisted to localStorage and synced
 *  across every consumer via a window event. Defaults to the visitor's local
 *  timezone (auto-detected); falls back to PT for Pacific visitors. */
export function useTimezone() {
  const [mode, setModeState] = useState<TzMode>('pt');
  const [userTz, setUserTz] = useState(PT_TZ);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const tz = getUserTimeZone();
    setUserTz(tz);
    let stored: TzMode | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY) as TzMode | null;
    } catch {
      stored = null;
    }
    setModeState(stored ?? (isPacific(tz) ? 'pt' : 'local'));
    setMounted(true);

    const sync = () => {
      try {
        const m = localStorage.getItem(STORAGE_KEY) as TzMode | null;
        if (m === 'pt' || m === 'local') setModeState(m);
      } catch {
        /* ignore */
      }
    };
    window.addEventListener(SYNC_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(SYNC_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const setMode = (m: TzMode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
      window.dispatchEvent(new Event(SYNC_EVENT));
    } catch {
      /* ignore */
    }
  };

  const localLabel = abbrevAt(CONF.targetISO, userTz);
  // Hide the toggle for visitors already on Pacific time (nothing to convert).
  const showToggle = mounted && !isPacific(userTz);
  return { mode, setMode, userTz, mounted, showToggle, localLabel };
}

/** Renders a slot's start–end with the active timezone label. Until mounted it
 *  shows PT so SSR and first paint match. */
export function SlotTime({
  item,
  startOnly = false,
  showLabel = true,
  muteColor = PALETTE.textMute,
}: {
  item: AgendaItem;
  startOnly?: boolean;
  // Omit the timezone label where a surrounding header already states it
  // (e.g. the agenda list, whose header reads "ALL TIMES <tz>").
  showLabel?: boolean;
  muteColor?: string;
}) {
  const { mode, userTz, mounted } = useTimezone();
  const { start, end, label } = formatSlot(item, mounted ? mode : 'pt', userTz);
  const suffix = showLabel ? ` ${label}` : '';
  if (startOnly) {
    return showLabel ? (
      <>
        {start} <span style={{ color: muteColor }}>{label}</span>
      </>
    ) : (
      <>{start}</>
    );
  }
  return (
    <>
      {start}
      <span style={{ color: muteColor }}>
        {' '}
        – {end}
        {suffix}
      </span>
    </>
  );
}

/** The "JUNE 23 · ALL TIMES PT" line plus the PT / local toggle, designed to
 *  sit on the schedule header row. */
export function ScheduleTimezoneBar() {
  const { mode, setMode, mounted, showToggle, localLabel } = useTimezone();
  const activeLabel = mounted && mode === 'local' ? localLabel : 'PT';

  const tab = (m: TzMode, text: string) => {
    const active = mode === m;
    return (
      <button
        key={m}
        type="button"
        onClick={() => setMode(m)}
        style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          letterSpacing: 1,
          padding: '4px 10px',
          border: 'none',
          cursor: 'pointer',
          background: active ? 'rgba(245,158,11,0.12)' : 'transparent',
          color: active ? PALETTE.pink : PALETTE.textMute,
          transition: 'color 0.15s, background 0.15s',
        }}
      >
        {text}
      </button>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: 12,
          color: PALETTE.pink,
          letterSpacing: 3,
        }}
      >
        JUNE 23 · ALL TIMES {activeLabel}
      </span>
      {showToggle && (
        <span
          style={{
            display: 'inline-flex',
            border: `1px solid ${PALETTE.bgLine}`,
          }}
        >
          {tab('pt', 'PT')}
          {tab('local', localLabel || 'LOCAL')}
        </span>
      )}
    </div>
  );
}
