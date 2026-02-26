'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './use-in-view';

const COMMAND = 'npx nx configure-ai-agents';

const CHECKBOX_ITEMS = [
  { label: 'Claude Code', tag: 'update available' },
  { label: 'OpenCode', tag: 'update available' },
  { label: 'OpenAI Codex', tag: 'update available' },
  { label: 'GitHub Copilot for VSCode', tag: 'update available' },
  { label: 'Cursor', tag: 'update available' },
  { label: 'Gemini', tag: 'update available' },
];

const TYPING_SPEED = 40;
const ITEM_APPEAR_DELAY = 100;
const CHECK_DELAY = 140;
const HOLD_DURATION = 4000;

type Phase =
  | 'typing'
  | 'fetching'
  | 'selecting'
  | 'checking'
  | 'done'
  | 'hold';

export function ConfigureAiTerminalAnimation() {
  const { ref, inView } = useInView(0.3);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>('typing');
  const [typedChars, setTypedChars] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [checkedItems, setCheckedItems] = useState(0);
  const [showFetching, setShowFetching] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [flashIndex, setFlashIndex] = useState(-1);

  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  const resetCycle = useCallback(() => {
    setPhase('typing');
    setTypedChars(0);
    setVisibleItems(0);
    setCheckedItems(0);
    setShowFetching(false);
    setShowDescription(false);
    setShowSuccess(false);
    setFlashIndex(-1);
  }, []);

  // Typing
  useEffect(() => {
    if (!started) return;
    if (phase !== 'typing') return;
    if (typedChars >= COMMAND.length) {
      const timer = setTimeout(() => {
        setShowFetching(true);
        setPhase('fetching');
      }, 500);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setTypedChars((c) => c + 1),
      TYPING_SPEED + Math.random() * 20
    );
    return () => clearTimeout(timer);
  }, [started, phase, typedChars]);

  // Fetching
  useEffect(() => {
    if (phase !== 'fetching') return;
    const timer = setTimeout(() => setPhase('selecting'), 750);
    return () => clearTimeout(timer);
  }, [phase]);

  // Show items one by one
  useEffect(() => {
    if (phase !== 'selecting') return;
    if (visibleItems >= CHECKBOX_ITEMS.length) {
      const timer = setTimeout(() => setPhase('checking'), 400);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setVisibleItems((v) => v + 1),
      ITEM_APPEAR_DELAY
    );
    return () => clearTimeout(timer);
  }, [phase, visibleItems]);

  // Check items one by one
  useEffect(() => {
    if (phase !== 'checking') return;
    if (checkedItems >= CHECKBOX_ITEMS.length) {
      const t1 = setTimeout(() => setShowDescription(true), 300);
      const t2 = setTimeout(() => {
        setShowSuccess(true);
        setPhase('done');
      }, 500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
    const timer = setTimeout(() => {
      setFlashIndex(checkedItems);
      setTimeout(() => setFlashIndex(-1), 150);
      setCheckedItems((c) => c + 1);
    }, CHECK_DELAY);
    return () => clearTimeout(timer);
  }, [phase, checkedItems]);

  // Done -> hold -> restart
  useEffect(() => {
    if (phase !== 'done') return;
    const timer = setTimeout(() => setPhase('hold'), 500);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'hold') return;
    const timer = setTimeout(resetCycle, HOLD_DURATION);
    return () => clearTimeout(timer);
  }, [phase, resetCycle]);

  return (
    <div ref={ref} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 text-xs text-slate-400">
          Skills &amp; MCP: One command setup
        </span>
      </div>

      {/* Content */}
      <div className="h-80 overflow-hidden px-4 py-3 font-mono text-xs">
        {/* Command line */}
        <div className="flex items-center text-slate-300">
          <span className="mr-2 text-green-400">$</span>
          <span>{COMMAND.slice(0, typedChars)}</span>
          {phase === 'typing' && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="ml-0.5 inline-block h-4 w-1.5 bg-slate-300"
            />
          )}
        </div>

        {/* Fetching */}
        {showFetching && (
          <div className="mt-1 text-slate-500">Fetching nx...</div>
        )}

        {/* Multi-select prompt */}
        {(phase === 'selecting' || phase === 'checking' || phase === 'done' || phase === 'hold') && (
          <div className="mt-3">
            <div className="mb-1 text-indigo-400">
              ? Which AI agents would you like to configure?{' '}
              <span className="text-slate-500">(space to select)</span>
            </div>
            {CHECKBOX_ITEMS.slice(0, visibleItems).map((item, i) => {
              const checked = i < checkedItems;
              const flashing = i === flashIndex;
              return (
                <div
                  key={i}
                  className={`py-0.5 transition-colors duration-150 ${
                    flashing ? 'bg-green-400/10' : ''
                  } ${checked ? 'text-green-400' : 'text-slate-300'}`}
                >
                  <span className="mr-2">{checked ? '\u2714' : '\u25FB'}</span>
                  {item.label}
                  <span className="ml-2 text-slate-500">({item.tag})</span>
                </div>
              );
            })}

            {showDescription && (
              <div className="mt-2 text-[11px] leading-relaxed text-slate-500">
                Installs Nx plugin (MCP + skills + agents). Updates CLAUDE.md.
              </div>
            )}
          </div>
        )}

        {/* Success */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-3 flex items-center gap-2"
          >
            <span className="rounded bg-green-400 px-1.5 py-0.5 text-[10px] font-bold text-slate-900">
              NX
            </span>
            <span className="text-slate-200">
              AI agents configured successfully
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
