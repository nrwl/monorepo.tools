'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './use-in-view';

// Phase 1: Real file tree from an existing project (discord-cli-core)
const SOURCE_FILES = [
  { name: 'discord-cli-core/', depth: 0, type: 'folder' as const },
  { name: 'package.json', depth: 1, type: 'file' as const },
  { name: 'README.md', depth: 1, type: 'file' as const },
  { name: 'tsconfig.json', depth: 1, type: 'file' as const },
  { name: 'tsconfig.lib.json', depth: 1, type: 'file' as const },
  { name: 'tsconfig.spec.json', depth: 1, type: 'file' as const },
  { name: 'vite.config.mts', depth: 1, type: 'file' as const },
  { name: 'src/', depth: 1, type: 'folder' as const },
  { name: 'index.ts', depth: 2, type: 'file' as const },
  { name: 'lib/', depth: 2, type: 'folder' as const },
  { name: 'client.ts', depth: 3, type: 'file' as const },
  { name: 'client.spec.ts', depth: 3, type: 'file' as const },
  { name: 'config.ts', depth: 3, type: 'file' as const },
  { name: 'config.spec.ts', depth: 3, type: 'file' as const },
  { name: 'formatter.ts', depth: 3, type: 'file' as const },
  { name: 'errors.ts', depth: 3, type: 'file' as const },
];

// Generated output
const GENERATED_FILES = [
  { name: 'mylib/', depth: 0, type: 'folder' as const },
  { name: 'package.json', depth: 1, type: 'file' as const },
  { name: 'README.md', depth: 1, type: 'file' as const },
  { name: 'tsconfig.json', depth: 1, type: 'file' as const },
  { name: 'tsconfig.lib.json', depth: 1, type: 'file' as const },
  { name: 'tsconfig.spec.json', depth: 1, type: 'file' as const },
  { name: 'vite.config.mts', depth: 1, type: 'file' as const },
  { name: 'src/', depth: 1, type: 'folder' as const },
  { name: 'index.ts', depth: 2, type: 'file' as const },
  { name: 'lib/', depth: 2, type: 'folder' as const },
  { name: 'mylib.ts', depth: 3, type: 'file' as const },
  { name: 'mylib.spec.ts', depth: 3, type: 'file' as const },
];

const COMMAND = 'nx g @myorg/tools:cli-package mylib';
const GENERATOR_NAME = '@myorg/tools:cli-package';

const TYPING_SPEED = 50;
const POST_COMMAND_PAUSE = 400;
const PHASE1_DURATION = 3000;
const ARROW_FADE_DURATION = 600;
const ENCODE_HOLD = 3500;
const COMMAND_ARROW_HOLD = 1200;
const GENERATE_FILE_DELAY = 80;
const PHASE3_HOLD = 3000;
const FADE_DURATION = 0.3;

type Phase =
  | 'source-tree'   // Show real project file tree
  | 'encode'        // Arrow ]->, generator box fades in next to tree
  | 'command-setup' // Clear, show generator box with arrow to command
  | 'typing'        // Type the nx g command
  | 'generating'    // Box fades out, files appear
  | 'done';

function FileIcon({ type }: { type: 'file' | 'folder' }) {
  if (type === 'folder') {
    return (
      <svg
        className="mr-1.5 inline h-3.5 w-3.5 text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
    );
  }
  return (
    <svg
      className="mr-1.5 inline h-3.5 w-3.5 text-slate-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FileTree({
  files,
  visibleCount,
  highlight,
}: {
  files: typeof SOURCE_FILES;
  visibleCount?: number;
  highlight?: boolean;
}) {
  const count = visibleCount ?? files.length;

  return (
    <div className="font-mono text-xs leading-relaxed">
      {files.slice(0, count).map((file, i) => (
        <motion.div
          key={`${file.name}-${i}`}
          initial={highlight ? { opacity: 0, x: -8 } : { opacity: 1 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: highlight ? i * 0.05 : 0 }}
          style={{ paddingLeft: `${file.depth * 16}px` }}
          className={
            file.type === 'folder' ? 'text-yellow-500' : 'text-slate-400'
          }
        >
          <FileIcon type={file.type} />
          {file.name}
        </motion.div>
      ))}
    </div>
  );
}

function GeneratorBox({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-lg border border-slate-600 bg-slate-800 text-center shadow-md ${
        compact ? 'px-4 py-3' : 'px-6 py-4'
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <svg
          className="h-4 w-4 text-blue-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span
          className={`font-semibold text-slate-200 ${compact ? 'text-xs' : 'text-sm'}`}
        >
          {GENERATOR_NAME}
        </span>
      </div>
      {!compact && (
        <p className="mt-1.5 text-xs text-slate-500">Local Nx Generator</p>
      )}
    </div>
  );
}

function AnimatedArrow({ direction }: { direction: 'right' | 'down' }) {
  const isRight = direction === 'right';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ARROW_FADE_DURATION / 1000 }}
      className={`flex ${isRight ? 'flex-row items-center' : 'flex-col items-center'} text-blue-400`}
    >
      {isRight ? (
        <svg className="h-4 w-10" viewBox="0 0 40 16" fill="none">
          <motion.path
            d="M0 8 L30 8"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.path
            d="M26 3 L34 8 L26 13"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          />
        </svg>
      ) : (
        <svg className="h-8 w-4" viewBox="0 0 16 32" fill="none">
          <motion.path
            d="M8 0 L8 22"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.path
            d="M3 18 L8 26 L13 18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          />
        </svg>
      )}
    </motion.div>
  );
}

export function GeneratorTerminalAnimation() {
  const { ref, inView } = useInView(0.3);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>('source-tree');
  const [typedChars, setTypedChars] = useState(0);
  const [generatedCount, setGeneratedCount] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  const resetCycle = useCallback(() => {
    setPhase('source-tree');
    setTypedChars(0);
    setGeneratedCount(0);
    setShowArrow(false);
    setShowBox(false);
  }, []);

  // Phase 1: Show source tree, then transition to encode
  useEffect(() => {
    if (!started) return;
    if (phase !== 'source-tree') return;
    const timer = setTimeout(() => setPhase('encode'), PHASE1_DURATION);
    return () => clearTimeout(timer);
  }, [started, phase]);

  // Phase 2: Encode — show arrow then box
  useEffect(() => {
    if (phase !== 'encode') return;
    // Arrow appears first
    const arrowTimer = setTimeout(() => setShowArrow(true), 200);
    // Box fades in after arrow
    const boxTimer = setTimeout(() => setShowBox(true), 800);
    // Hold, then move to command setup
    const nextTimer = setTimeout(
      () => setPhase('command-setup'),
      ENCODE_HOLD
    );
    return () => {
      clearTimeout(arrowTimer);
      clearTimeout(boxTimer);
      clearTimeout(nextTimer);
    };
  }, [phase]);

  // Phase 3: Command setup — show box + arrow + command line
  useEffect(() => {
    if (phase !== 'command-setup') return;
    const timer = setTimeout(() => setPhase('typing'), COMMAND_ARROW_HOLD);
    return () => clearTimeout(timer);
  }, [phase]);

  // Phase 4: Type command
  useEffect(() => {
    if (phase !== 'typing') return;
    if (typedChars >= COMMAND.length) {
      const timer = setTimeout(
        () => setPhase('generating'),
        POST_COMMAND_PAUSE
      );
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setTypedChars((c) => c + 1),
      TYPING_SPEED + Math.random() * 30
    );
    return () => clearTimeout(timer);
  }, [phase, typedChars]);

  // Phase 5: Generate files
  useEffect(() => {
    if (phase !== 'generating') return;
    if (generatedCount >= GENERATED_FILES.length) {
      const timer = setTimeout(() => setPhase('done'), PHASE3_HOLD);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setGeneratedCount((c) => c + 1),
      GENERATE_FILE_DELAY
    );
    return () => clearTimeout(timer);
  }, [phase, generatedCount]);

  // Done: restart
  useEffect(() => {
    if (phase !== 'done') return;
    const timer = setTimeout(resetCycle, 1000);
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
          Predictable Code Scaffolding
        </span>
      </div>

      {/* Content area */}
      <div className="relative h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Phase 1 + 2: Source tree with arrow → generator box */}
          {(phase === 'source-tree' || phase === 'encode') && (
            <motion.div
              key="source-encode"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION }}
              className="flex h-full items-start gap-3 px-4 py-3"
            >
              {/* File tree on the left */}
              <div className="shrink-0">
                <div className="mb-2 text-xs text-slate-500">
                  Existing project
                </div>
                <FileTree files={SOURCE_FILES} />
              </div>

              {/* Arrow + Generator box on the right */}
              {phase === 'encode' && (
                <div className="flex flex-1 flex-col items-center justify-center gap-2 self-center">
                  {showArrow && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-blue-400"
                    >
                      Extract
                    </motion.div>
                  )}
                  <div className="flex items-center gap-3">
                    {showArrow && <AnimatedArrow direction="right" />}
                    {showBox && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <GeneratorBox />
                      </motion.div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Phase 3 + 4: Generator box → arrow → command + output */}
          {(phase === 'command-setup' ||
            phase === 'typing' ||
            phase === 'generating' ||
            phase === 'done') && (
            <motion.div
              key="command-phase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION }}
              className="h-full overflow-hidden px-4 py-3"
            >
              {/* Generator box + down arrow (fades out when generating) */}
              <AnimatePresence>
                {(phase === 'command-setup' || phase === 'typing') && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <GeneratorBox compact />
                    <div className="my-1">
                      <AnimatedArrow direction="down" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Command line */}
              <div className="flex items-center font-mono text-xs text-slate-300">
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

              {/* Generated file tree */}
              {(phase === 'generating' || phase === 'done') &&
                generatedCount > 0 && (
                  <div className="mt-3">
                    <div className="mb-2 font-mono text-xs text-green-400">
                      CREATE
                    </div>
                    <FileTree
                      files={GENERATED_FILES}
                      visibleCount={generatedCount}
                      highlight
                    />
                  </div>
                )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
