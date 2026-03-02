'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './use-in-view';

const COMMAND = 'nx show projects';

const HUMAN_OUTPUT = `@tusky/data-access-products
@tusky/feat-product-detail
@tusky/data-access-ratings
@tusky/feat-current-orders
@tusky/feat-product-list
@tusky/ui-product-detail
@tusky/data-access-order
@tusky/feat-cancel-order
@tusky/feat-create-order
@tusky/feat-past-orders
@tusky/ui-order-detail
@tusky/ui-ratings
@tusky/service-products
@tusky/service-ratings
@tusky/data-products
@tusky/api-products
@tusky/data-ratings
@tusky/api-ratings
@tusky/tusky-design
@tusky/tailwind-sync-plugin
@tusky/api-types
@tusky/shop-e2e
@tusky/shop
@tusky/api`;

const AI_OUTPUT = `["@tusky/data-access-products","@tusky/feat-product-detail","@tusky/data-access-ratings","@tusky/feat-current-orders","@tusky/feat-product-list","@tusky/ui-product-detail","@tusky/data-access-order","@tusky/feat-cancel-order","@tusky/feat-create-order","@tusky/feat-past-orders","@tusky/ui-order-detail","@tusky/ui-ratings","@tusky/service-products","@tusky/service-ratings","@tusky/data-products","@tusky/api-products","@tusky/data-ratings","@tusky/api-ratings","@tusky/tusky-design","@tusky/tailwind-sync-plugin","@tusky/api-types","@tusky/shop-e2e","@tusky/shop","@tusky/api"]`;

const TYPING_SPEED = 50;
const POST_COMMAND_PAUSE = 400;
const OUTPUT_LINE_DELAY = 40;
const HOLD_DURATION = 4000;

type Phase = 'typing' | 'output' | 'hold';

const humanLines = HUMAN_OUTPUT.split('\n');
const totalOutputLines = humanLines.length;

export function AxTerminalAnimation() {
  const { ref, inView } = useInView(0.3);
  const [phase, setPhase] = useState<Phase>('typing');
  const [typedChars, setTypedChars] = useState(0);
  const [outputLines, setOutputLines] = useState(0);

  const resetCycle = () => {
    setPhase('typing');
    setTypedChars(0);
    setOutputLines(0);
  };

  // Typing — use the longer command length
  useEffect(() => {
    if (!inView) return;
    if (phase !== 'typing') return;
    if (typedChars >= COMMAND.length) {
      const timer = setTimeout(() => setPhase('output'), POST_COMMAND_PAUSE);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setTypedChars((c) => c + 1),
      TYPING_SPEED + Math.random() * 30
    );
    return () => clearTimeout(timer);
  }, [inView, phase, typedChars]);

  // Output
  useEffect(() => {
    if (phase !== 'output') return;
    if (outputLines >= totalOutputLines) {
      const timer = setTimeout(() => setPhase('hold'), 200);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setOutputLines((l) => l + 1),
      OUTPUT_LINE_DELAY
    );
    return () => clearTimeout(timer);
  }, [phase, outputLines, totalOutputLines]);

  // Hold then restart
  useEffect(() => {
    if (phase !== 'hold') return;
    const timer = setTimeout(resetCycle, HOLD_DURATION);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Human terminal */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700">
        <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 rounded bg-slate-700 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Human
          </span>
        </div>
        <div className="h-72 overflow-hidden px-4 py-3 font-mono text-xs">
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
          {(phase === 'output' || phase === 'hold') && outputLines > 0 && (
            <div className="mt-2">
              {humanLines.slice(0, outputLines).map((line, i) => (
                <div key={i} className="leading-relaxed text-slate-400">
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* AI Agent terminal */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700">
        <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-400">
            AI Agent
          </span>
        </div>
        <div className="h-72 overflow-hidden px-4 py-3 font-mono text-xs">
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
          {(phase === 'output' || phase === 'hold') && outputLines > 0 && (
            <div className="mt-2 break-all leading-relaxed text-green-400">
              {AI_OUTPUT.slice(0, Math.min(outputLines * 60, AI_OUTPUT.length))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
