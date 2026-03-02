'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './use-in-view';

const JSON_OUTPUT = `{
  "name": "@tusky/shop",
  "root": "apps/shop",
  "tags": ["type:app"],
  "targets": {
    "build": {
      "executor": "nx:run-commands",
      "cache": true,
      "command": "vite build"
    },
    "serve": {
      "executor": "nx:run-commands",
      "command": "vite"
    },
    "lint": {
      "executor": "nx:run-commands",
      "cache": true,
      "command": "eslint ."
    },
    "typecheck": {
      "executor": "nx:run-commands",
      "cache": true,
      "command": "tsc --build"
    }
  }
}`;

const COMMAND = 'nx show project @tusky/shop --json';

const TYPING_SPEED = 50;
const POST_COMMAND_PAUSE = 400;
const OUTPUT_LINE_DELAY = 35;
const POST_OUTPUT_PAUSE = 1800;
const UI_DISPLAY_DURATION = 5000;
const FADE_DURATION = 0.4;

type Phase = 'typing' | 'output' | 'ui';

// Simplified recreation of the Nx project detail UI
function ProjectDetailUI() {
  const targets = [
    { name: 'build', command: 'vite build', cache: true },
    { name: 'serve', command: 'vite', continuous: true },
    { name: 'lint', command: 'eslint .', cache: true },
    { name: 'typecheck', command: 'tsc --build', cache: true },
    { name: 'dev', command: 'vite', continuous: true },
  ];

  return (
    <div className="h-full overflow-hidden px-4 py-3 text-xs">
      {/* Header */}
      <div className="border-b border-slate-700 pb-2">
        <h3 className="text-lg font-semibold text-slate-100">@tusky/shop</h3>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-slate-400">Tags:</span>
          <span className="inline-flex rounded-md bg-slate-700 px-1.5 py-0.5 text-[10px] text-slate-300 ring-1 ring-inset ring-slate-600">
            type:app
          </span>
        </div>
        <p className="mt-1 text-slate-400">
          <span className="font-medium text-slate-300">Root:</span> apps/shop
        </p>
      </div>

      {/* Targets */}
      <div className="mt-2">
        <h4 className="mb-1.5 text-sm font-semibold text-slate-200">Targets</h4>
        <ul className="space-y-1.5">
          {targets.map((target, i) => (
            <motion.li
              key={target.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.08 }}
              className="flex items-center justify-between rounded-md border border-slate-700/60 bg-slate-800/80 px-3 py-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-100">{target.name}</span>
                <span className="text-slate-500">{target.command}</span>
              </div>
              <div>
                {target.cache && (
                  <span className="rounded-md bg-green-400/10 px-1.5 py-0.5 text-[10px] font-medium text-green-500 ring-1 ring-inset ring-green-500/40">
                    Cacheable
                  </span>
                )}
                {target.continuous && (
                  <span className="rounded-md bg-slate-400/10 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 ring-1 ring-inset ring-slate-400/40">
                    Continuous
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const jsonOutputLines = JSON_OUTPUT.split('\n');
const totalJsonOutputLines = jsonOutputLines.length;

export function ProjectDetailsTerminalAnimation() {
  const { ref, inView } = useInView(0.3);
  const [phase, setPhase] = useState<Phase>('typing');
  const [typedChars, setTypedChars] = useState(0);
  const [outputLines, setOutputLines] = useState(0);

  const resetCycle = useCallback(() => {
    setPhase('typing');
    setTypedChars(0);
    setOutputLines(0);
  }, []);

  // Typing phase
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

  // Output phase
  useEffect(() => {
    if (phase !== 'output') return;
    if (outputLines >= totalJsonOutputLines) {
      const timer = setTimeout(() => setPhase('ui'), POST_OUTPUT_PAUSE);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setOutputLines((l) => l + 1),
      OUTPUT_LINE_DELAY
    );
    return () => clearTimeout(timer);
  }, [phase, outputLines]);

  // UI phase -> restart
  useEffect(() => {
    if (phase !== 'ui') return;
    const timer = setTimeout(resetCycle, UI_DISPLAY_DURATION);
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
          AI Agent: Inspecting project metadata
        </span>
      </div>

      {/* Content area */}
      <div className="relative h-72 overflow-hidden">
        <AnimatePresence mode="wait">
          {(phase === 'typing' || phase === 'output') && (
            <motion.div
              key="terminal"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION }}
              className="h-full overflow-hidden px-4 py-3 font-mono text-xs"
            >
              {/* Command line */}
              <div className="flex items-center text-slate-300">
                <span className="mr-2 text-green-400">$</span>
                <span>{COMMAND.slice(0, typedChars)}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="ml-0.5 inline-block h-4 w-1.5 bg-slate-300"
                />
              </div>

              {/* Output */}
              {phase === 'output' && outputLines > 0 && (
                <div className="mt-2 text-slate-400">
                  {jsonOutputLines.slice(0, outputLines).map((line, i) => (
                    <div key={i} className="whitespace-pre leading-relaxed">
                      {colorizeJson(line)}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {phase === 'ui' && (
            <motion.div
              key="ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION }}
              className="h-full"
            >
              <ProjectDetailUI />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function colorizeJson(line: string) {
  const parts = line.split(/("[\w@/:.\-\s]+")\s*:/);
  if (parts.length === 1) {
    const valueParts = line.split(/("[\w@/:.\-\s]+")/);
    if (valueParts.length > 1) {
      return (
        <>
          {valueParts.map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className="text-green-400">{part}</span>
            ) : (
              <span key={i}>{colorizeBooleans(part)}</span>
            )
          )}
        </>
      );
    }
    return <span>{colorizeBooleans(line)}</span>;
  }

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i}>
            <span className="text-blue-400">{part}</span>:
          </span>
        ) : (
          <span key={i}>{colorizeValues(part)}</span>
        )
      )}
    </>
  );
}

function colorizeValues(text: string) {
  const parts = text.split(/("[\w@/:.\-\s]+")/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-green-400">{part}</span>
        ) : (
          <span key={i}>{colorizeBooleans(part)}</span>
        )
      )}
    </>
  );
}

function colorizeBooleans(text: string) {
  const parts = text.split(/(true|false)/);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) =>
        part === 'true' || part === 'false' ? (
          <span key={i} className="text-yellow-400">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
