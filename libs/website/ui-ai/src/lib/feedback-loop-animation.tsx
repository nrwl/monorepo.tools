'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoopNode {
  id: string;
  label: string;
  detail: string;
  // Position on the elliptical path (angle in degrees, 0 = top)
  angle: number;
}

const NODES: LoopNode[] = [
  {
    id: 'change',
    label: 'Agent Makes a Change',
    detail:
      'The AI agent modifies code across one or more projects in the monorepo. Because everything lives in a single workspace, cross-project changes happen in one atomic operation.',
    angle: 270,
  },
  {
    id: 'affected',
    label: 'Affected Detection',
    detail:
      'The monorepo tool determines exactly which projects are impacted by the change — no need to run everything. This works uniformly across polyglot projects: TypeScript, Java, Go, Python — same command, same interface.',
    angle: 342,
  },
  {
    id: 'run',
    label: 'Run Tasks',
    detail:
      'Run tests, builds, and lints only for affected projects using a single command like `nx run-many --target=test --affected`. Cacheable tasks resolve instantly if nothing changed. One uniform interface across all frameworks in the workspace.',
    angle: 54,
  },
  {
    id: 'boundaries',
    label: 'Module Boundary Check',
    detail:
      'Architectural lint rules (like Nx module boundary rules) catch violations early — before deeper issues surface. If the AI imported from a project it shouldn\'t depend on, it gets immediate feedback and can course-correct without running the full test suite.',
    angle: 126,
  },
  {
    id: 'iterate',
    label: 'Results & Iterate',
    detail:
      'Fast, targeted feedback means fewer tokens spent on exploration and more on fixes. The faster each loop completes, the more iterations the AI agent can do within budget — leading to higher quality outcomes.',
    angle: 198,
  },
];

// Ellipse parameters
const CX = 200;
const CY = 160;
const RX = 160;
const RY = 120;

// Dot travel speed
const DOT_LOOP_DURATION = 4; // seconds per full loop

function getPointOnEllipse(angleDeg: number): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + RX * Math.cos(rad),
    y: CY + RY * Math.sin(rad),
  };
}

// Build the ellipse path as SVG arc
function getEllipsePath(): string {
  return `M ${CX - RX} ${CY} A ${RX} ${RY} 0 1 1 ${CX + RX} ${CY} A ${RX} ${RY} 0 1 1 ${CX - RX} ${CY}`;
}

export function FeedbackLoopAnimation() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Calculate tooltip position relative to viewport
  const handleNodeHover = (node: LoopNode, enter: boolean) => {
    if (!enter) {
      setActiveNode(null);
      setTooltipPos(null);
      return;
    }
    setActiveNode(node.id);
    const pt = getPointOnEllipse(node.angle);
    setTooltipPos({ x: pt.x, y: pt.y });
  };

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <svg
        ref={svgRef}
        viewBox="0 0 400 320"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Elliptical track */}
        <path
          d={getEllipsePath()}
          stroke="#334155"
          strokeWidth="2"
          fill="none"
        />

        {/* Dashed directional hint on the track */}
        <path
          d={getEllipsePath()}
          stroke="#475569"
          strokeWidth="1"
          strokeDasharray="6 4"
          fill="none"
          opacity="0.5"
        />

        {/* Traveling dot */}
        <motion.circle
          r="5"
          fill="#3B82F6"
          filter="url(#glow)"
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: DOT_LOOP_DURATION,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            offsetPath: `path('${getEllipsePath()}')`,
          }}
        />

        {/* Glow filter for the traveling dot */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Node circles and labels */}
        {NODES.map((node) => {
          const pt = getPointOnEllipse(node.angle);
          const isActive = activeNode === node.id;

          // Determine label position offset based on angle
          let textAnchor: 'start' | 'middle' | 'end' = 'middle';
          let labelDx = 0;
          let labelDy = -18;

          // Top area: label above
          if (node.angle > 225 && node.angle <= 315) {
            labelDy = -18;
          }
          // Right area: label to the right
          else if (node.angle > 315 || node.angle <= 45) {
            textAnchor = 'start';
            labelDx = 18;
            labelDy = 5;
          }
          // Bottom area: label below
          else if (node.angle > 45 && node.angle <= 135) {
            labelDy = 28;
          }
          // Left area: label to the left
          else {
            textAnchor = 'end';
            labelDx = -18;
            labelDy = 5;
          }

          return (
            <g
              key={node.id}
              onMouseEnter={() => handleNodeHover(node, true)}
              onMouseLeave={() => handleNodeHover(node, false)}
              className="cursor-pointer"
            >
              {/* Hit area (larger invisible circle) */}
              <circle cx={pt.x} cy={pt.y} r="24" fill="transparent" />

              {/* Outer ring on hover */}
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

              {/* Node circle */}
              <motion.circle
                cx={pt.x}
                cy={pt.y}
                r="10"
                fill={isActive ? '#3B82F6' : '#1E293B'}
                stroke={isActive ? '#60A5FA' : '#475569'}
                strokeWidth="2"
                animate={{
                  fill: isActive ? '#3B82F6' : '#1E293B',
                  stroke: isActive ? '#60A5FA' : '#475569',
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Node label */}
              <text
                x={pt.x + labelDx}
                y={pt.y + labelDy}
                textAnchor={textAnchor}
                fill={isActive ? '#E2E8F0' : '#94A3B8'}
                fontFamily="system-ui, sans-serif"
                fontSize="11"
                fontWeight={isActive ? '600' : '500'}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip overlay */}
      <AnimatePresence>
        {activeNode && tooltipPos && (
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute z-20 w-72 rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {NODES.find((n) => n.id === activeNode)?.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {NODES.find((n) => n.id === activeNode)?.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
