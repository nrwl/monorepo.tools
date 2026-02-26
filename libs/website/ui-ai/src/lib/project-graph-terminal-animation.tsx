'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './use-in-view';

// Simplified graph output based on real nx graph --print output
const GRAPH_OUTPUT = `{
  "graph": {
    "nodes": {
      "app-web": { "type": "app" },
      "app-mobile": { "type": "app" },
      "e2e": { "type": "e2e" },
      "lib-ui": { "type": "lib" },
      "lib-api": { "type": "lib" },
      "lib-auth": { "type": "lib" },
      "lib-shared": { "type": "lib" },
      "lib-utils": { "type": "lib" }
    },
    "dependencies": {
      "app-web": [
        { "target": "lib-ui" },
        { "target": "lib-api" }
      ],
      "app-mobile": [
        { "target": "lib-ui" },
        { "target": "lib-api" },
        { "target": "lib-auth" }
      ],
      "lib-api": [
        { "target": "lib-shared" },
        { "target": "lib-utils" }
      ],
      "lib-ui": [
        { "target": "lib-shared" }
      ],
      "lib-auth": [
        { "target": "lib-utils" }
      ]
    }
  }
}`;

const COMMAND = 'nx graph --print';

// Phase timing
const TYPING_SPEED = 60; // ms per character
const POST_COMMAND_PAUSE = 400;
const OUTPUT_LINE_DELAY = 40; // ms per line
const POST_OUTPUT_PAUSE = 2000;
const GRAPH_DISPLAY_DURATION = 5000;
const FADE_DURATION = 0.4;

type Phase = 'typing' | 'output' | 'graph';

// SVG Project Graph with animated path
// Animation timing: nodes and edges light up in sequence
const ANIM_START = 0.3;
const EDGE_DURATION = 0.5;
const NODE_DURATION = 0.4;
// Sequence: app-web lights up -> edge to lib-api -> lib-api lights up -> edge to lib-shared -> lib-shared lights up
const TIMING = {
  nodeAppWeb: ANIM_START,
  edgeAppWebToLibApi: ANIM_START + NODE_DURATION * 0.5,
  nodeLibApi: ANIM_START + NODE_DURATION * 0.5 + EDGE_DURATION,
  edgeLibApiToLibShared: ANIM_START + NODE_DURATION * 0.5 + EDGE_DURATION + NODE_DURATION * 0.5,
  nodeLibShared: ANIM_START + NODE_DURATION * 0.5 + EDGE_DURATION + NODE_DURATION * 0.5 + EDGE_DURATION,
};

function ProjectGraphSVG({ animatePath }: { animatePath: boolean }) {
  const highlightColor = '#3B82F6';
  const nodeColor = '#1E293B';
  const edgeColor = '#4B5563';

  return (
    <svg
      viewBox="0 0 400 270"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Edges - static ones */}
      <line x1="150" y1="55" x2="120" y2="85" stroke={edgeColor} strokeWidth="1.5" />
      <line x1="120" y1="115" x2="60" y2="155" stroke={edgeColor} strokeWidth="1.5" />
      <line x1="310" y1="115" x2="60" y2="155" stroke={edgeColor} strokeWidth="1.5" />
      <line x1="310" y1="115" x2="190" y2="155" stroke={edgeColor} strokeWidth="1.5" />
      <line x1="310" y1="115" x2="310" y2="155" stroke={edgeColor} strokeWidth="1.5" />
      <line x1="60" y1="185" x2="120" y2="225" stroke={edgeColor} strokeWidth="1.5" />
      <line x1="190" y1="185" x2="260" y2="225" stroke={edgeColor} strokeWidth="1.5" />
      <line x1="310" y1="185" x2="260" y2="225" stroke={edgeColor} strokeWidth="1.5" />

      {/* Edges on the highlighted path - animate color */}
      <motion.line
        x1="120" y1="115" x2="190" y2="155"
        strokeWidth="2"
        initial={{ stroke: edgeColor }}
        animate={{ stroke: animatePath ? highlightColor : edgeColor }}
        transition={{ duration: EDGE_DURATION, delay: animatePath ? TIMING.edgeAppWebToLibApi : 0 }}
      />
      <motion.line
        x1="190" y1="185" x2="120" y2="225"
        strokeWidth="2"
        initial={{ stroke: edgeColor }}
        animate={{ stroke: animatePath ? highlightColor : edgeColor }}
        transition={{ duration: EDGE_DURATION, delay: animatePath ? TIMING.edgeLibApiToLibShared : 0 }}
      />

      {/* Row 0: e2e */}
      <rect x="110" y="25" width="80" height="30" rx="6" fill={nodeColor} />
      <text x="150" y="45" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">e2e</text>

      {/* Row 1: Applications */}
      <motion.rect
        x="60" y="85" width="120" height="30" rx="6"
        initial={{ fill: nodeColor }}
        animate={{ fill: animatePath ? highlightColor : nodeColor }}
        transition={{ duration: NODE_DURATION, delay: animatePath ? TIMING.nodeAppWeb : 0 }}
      />
      <text x="120" y="105" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">app-web</text>

      <rect x="250" y="85" width="120" height="30" rx="6" fill={nodeColor} />
      <text x="310" y="105" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">app-mobile</text>

      {/* Row 2: Libraries */}
      <rect x="10" y="155" width="100" height="30" rx="5" fill={nodeColor} />
      <text x="60" y="175" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="500">lib-ui</text>

      <motion.rect
        x="140" y="155" width="100" height="30" rx="5"
        initial={{ fill: nodeColor }}
        animate={{ fill: animatePath ? highlightColor : nodeColor }}
        transition={{ duration: NODE_DURATION, delay: animatePath ? TIMING.nodeLibApi : 0 }}
      />
      <text x="190" y="175" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="500">lib-api</text>

      <rect x="260" y="155" width="100" height="30" rx="5" fill={nodeColor} />
      <text x="310" y="175" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="500">lib-auth</text>

      {/* Row 3: Shared */}
      <motion.rect
        x="70" y="225" width="100" height="30" rx="5"
        initial={{ fill: nodeColor }}
        animate={{ fill: animatePath ? highlightColor : nodeColor }}
        transition={{ duration: NODE_DURATION, delay: animatePath ? TIMING.nodeLibShared : 0 }}
      />
      <text x="120" y="245" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="500">lib-shared</text>

      <rect x="210" y="225" width="100" height="30" rx="5" fill={nodeColor} />
      <text x="260" y="245" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="500">lib-utils</text>
    </svg>
  );
}

export function ProjectGraphTerminalAnimation() {
  const { ref, inView } = useInView(0.3);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>('typing');
  const [typedChars, setTypedChars] = useState(0);
  const [outputLines, setOutputLines] = useState(0);
  const [animatePath, setAnimatePath] = useState(false);

  const outputLinesArray = GRAPH_OUTPUT.split('\n');
  const totalOutputLines = outputLinesArray.length;

  // Start only once when scrolled into view
  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  const resetCycle = useCallback(() => {
    setPhase('typing');
    setTypedChars(0);
    setOutputLines(0);
    setAnimatePath(false);
  }, []);

  // Typing phase
  useEffect(() => {
    if (!started) return;
    if (phase !== 'typing') return;
    if (typedChars >= COMMAND.length) {
      const timer = setTimeout(() => setPhase('output'), POST_COMMAND_PAUSE);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setTypedChars((c) => c + 1),
      TYPING_SPEED + Math.random() * 40
    );
    return () => clearTimeout(timer);
  }, [started, phase, typedChars]);

  // Output phase
  useEffect(() => {
    if (phase !== 'output') return;
    if (outputLines >= totalOutputLines) {
      const timer = setTimeout(() => {
        setPhase('graph');
        setTimeout(() => setAnimatePath(true), 300);
      }, POST_OUTPUT_PAUSE);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setOutputLines((l) => l + 1),
      OUTPUT_LINE_DELAY
    );
    return () => clearTimeout(timer);
  }, [phase, outputLines, totalOutputLines]);

  // Graph phase -> restart
  useEffect(() => {
    if (phase !== 'graph') return;
    const timer = setTimeout(resetCycle, GRAPH_DISPLAY_DURATION);
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
          AI Agent: Querying the project graph
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
                  {outputLinesArray.slice(0, outputLines).map((line, i) => (
                    <div key={i} className="leading-relaxed whitespace-pre">
                      {colorizeJson(line)}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {phase === 'graph' && (
            <motion.div
              key="graph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION }}
              className="flex h-full items-center justify-center p-4"
            >
              <ProjectGraphSVG animatePath={animatePath} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Simple JSON syntax highlighting
function colorizeJson(line: string) {
  // Highlight keys
  const parts = line.split(/("[\w-]+")\s*:/);
  if (parts.length === 1) {
    // Check for string values
    const valueParts = line.split(/("[\w-]+")/);
    if (valueParts.length > 1) {
      return (
        <>
          {valueParts.map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className="text-green-400">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </>
      );
    }
    return <span>{line}</span>;
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
  const parts = text.split(/("[\w-]+")/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-green-400">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
