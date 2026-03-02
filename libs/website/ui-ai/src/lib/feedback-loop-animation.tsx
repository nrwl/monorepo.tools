'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './use-in-view';

interface LoopNode {
  id: string;
  label: string;
  detail: string;
  angle: number; // degrees, 0 = right, 90 = bottom, etc.
  labelSide: 'top' | 'bottom' | 'left' | 'right';
}

const NODES: LoopNode[] = [
  {
    id: 'change',
    label: 'AI Agent Makes Changes',
    detail:
      'The AI agent modifies code across one or more projects in the monorepo. Because everything lives in a single workspace, cross-project changes happen in one atomic operation.',
    angle: 270,
    labelSide: 'top',
  },
  {
    id: 'affected',
    label: 'Affected Projects Only',
    detail:
      'The monorepo tool analyzes the change and determines exactly which projects are impacted. Instead of running everything, only the affected subset is selected. This works uniformly across polyglot projects: TypeScript, Java, Go, Python, all through the same command.',
    angle: 342,
    labelSide: 'right',
  },
  {
    id: 'pipeline',
    label: 'Task Pipeline',
    detail:
      'The monorepo tool knows the dependency graph between projects. If you changed pkg-a, it knows pkg-b (which pkg-a depends on) needs to be built first. The agent does not have to figure out build ordering or debug mysterious failures from missing prerequisites. The tool handles it.',
    angle: 54,
    labelSide: 'right',
  },
  {
    id: 'caching',
    label: 'Task Caching',
    detail:
      'Tasks that have already been computed with the same inputs are restored from cache instantly. In a monorepo with hundreds of projects, most tasks on any given change hit cache. This dramatically speeds up every iteration of the loop, giving the agent faster feedback.',
    angle: 126,
    labelSide: 'left',
  },
  {
    id: 'boundaries',
    label: 'Boundary Check',
    detail:
      'Architectural lint rules (like Nx module boundary rules) catch violations early, before deeper issues surface. If the AI imported from a project it should not depend on, it gets immediate feedback and can course-correct without running the full test suite.',
    angle: 198,
    labelSide: 'left',
  },
];

// SVG viewBox and ellipse
const VB_W = 300;
const VB_H = 300;
const CX = 150;
const CY = 150;
const RX = 110;
const RY = 110;
const CIRCUMFERENCE = 2 * Math.PI * RX;

function getEllipsePath(): string {
  return `M ${CX - RX} ${CY} A ${RX} ${RY} 0 1 1 ${CX + RX} ${CY} A ${RX} ${RY} 0 1 1 ${CX - RX} ${CY}`;
}

function getPointOnEllipse(angleDeg: number): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + RX * Math.cos(rad),
    y: CY + RY * Math.sin(rad),
  };
}

// Desktop: SVG ellipse animation with hover tooltips
function DesktopAnimation() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="loopPulse"
            gradientUnits="userSpaceOnUse"
            x1={CX - RX}
            y1={CY}
            x2={CX + RX}
            y2={CY}
          >
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        {/* Static track */}
        <path
          d={getEllipsePath()}
          stroke="#334155"
          strokeWidth="2"
          fill="none"
        />

        {/* Animated pulse traveling the path */}
        <motion.path
          d={getEllipsePath()}
          stroke="url(#loopPulse)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${CIRCUMFERENCE * 0.15} ${CIRCUMFERENCE * 0.85}`}
          animate={{
            strokeDashoffset: [0, -CIRCUMFERENCE],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Node circles on the ellipse */}
        {NODES.map((node) => {
          const pt = getPointOnEllipse(node.angle);
          const isActive = activeNode === node.id;

          return (
            <g
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className="cursor-pointer"
            >
              <circle cx={pt.x} cy={pt.y} r="20" fill="transparent" />
              <motion.circle
                cx={pt.x}
                cy={pt.y}
                r="14"
                fill="transparent"
                stroke="#3B82F6"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 0.5 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.circle
                cx={pt.x}
                cy={pt.y}
                r="9"
                strokeWidth="2"
                animate={{
                  fill: isActive ? '#3B82F6' : '#1E293B',
                  stroke: isActive ? '#60A5FA' : '#475569',
                }}
                transition={{ duration: 0.2 }}
              />
            </g>
          );
        })}
      </svg>

      {/* HTML labels positioned absolutely outside the SVG circle */}
      {NODES.map((node) => {
        const pt = getPointOnEllipse(node.angle);
        const isActive = activeNode === node.id;
        const pctX = (pt.x / VB_W) * 100;
        const pctY = (pt.y / VB_H) * 100;

        let posStyle: React.CSSProperties = {};
        let alignClass = '';

        switch (node.labelSide) {
          case 'top':
            posStyle = { left: `${pctX}%`, bottom: `${100 - pctY + 5}%` };
            alignClass = '-translate-x-1/2 text-center';
            break;
          case 'bottom':
            posStyle = { left: `${pctX}%`, top: `${pctY + 5}%` };
            alignClass = '-translate-x-1/2 text-center';
            break;
          case 'right':
            posStyle = { left: `${pctX + 5}%`, top: `${pctY}%` };
            alignClass = '-translate-y-1/2';
            break;
          case 'left':
            posStyle = { right: `${100 - pctX + 5}%`, top: `${pctY}%` };
            alignClass = '-translate-y-1/2 text-right';
            break;
        }

        return (
          <div
            key={`label-${node.id}`}
            className={`pointer-events-none absolute whitespace-nowrap text-xs font-medium transition-colors duration-200 ${alignClass} ${
              isActive ? 'text-slate-200' : 'text-slate-400'
            }`}
            style={posStyle}
          >
            {node.label}
          </div>
        );
      })}

      {/* Tooltip overlay centered */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-72 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            {(() => {
              const node = NODES.find((n) => n.id === activeNode);
              return node ? (
                <>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {node.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {node.detail}
                  </p>
                </>
              ) : null;
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile: numbered list with descriptions
function MobileList() {
  return (
    <ol className="space-y-4">
      {NODES.map((node, i) => (
        <li key={node.id} className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-blue-400 ring-1 ring-slate-700">
            {i + 1}
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {node.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {node.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function FeedbackLoopAnimation() {
  const { ref, inView } = useInView(0.3);

  return (
    <>
      {/* Desktop: ellipse animation — only mount when in view */}
      <div ref={ref} className="hidden lg:block">
        {inView && <DesktopAnimation />}
      </div>
      {/* Mobile: numbered list */}
      <div className="lg:hidden">
        <MobileList />
      </div>
    </>
  );
}
