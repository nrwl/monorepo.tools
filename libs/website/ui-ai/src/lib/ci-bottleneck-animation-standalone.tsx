'use client';
import {
  forwardRef,
  ReactElement,
  ReactNode,
  useRef,
  FC,
  RefObject,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import {
  ClockIcon,
  FunnelIcon,
  ServerStackIcon,
  UserPlusIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

/**
 * Small wrapper around classNames and twMerge
 * It enables conditional and dynamic class usage,
 * resolves duplications and conflicts for TailwindCSS
 */
function cx(...inputs: classNames.ArgumentArray): string {
  return twMerge(classNames(inputs));
}

// AnimatedCurvedBeam Component
export interface AnimatedCurvedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  bidirectional?: boolean;
  beamFrequency?: number;
  maxConcurrentBeams?: number;
  beamIntensity?: number;
}

type BeamAnimation = {
  x1: [string, string];
  x2: [string, string];
  y1: [string, string];
  y2: [string, string];
};

const AnimatedCurvedBeam: FC<AnimatedCurvedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 8,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#ffaa40',
  gradientStopColor = '#9c40ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  bidirectional = false,
  beamFrequency = 1,
  maxConcurrentBeams,
  beamIntensity = 1,
}) => {
  const baseId = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate optimal beam configuration
  const effectiveDuration = bidirectional ? duration * 2 : duration;
  const calculatedMaxBeams =
    maxConcurrentBeams ??
    Math.min(
      Math.ceil(effectiveDuration / beamFrequency) + 1,
      5 // Hard limit for performance
    );

  // Generate beam count based on duration and frequency
  const totalBeamCount = Math.min(
    Math.ceil(effectiveDuration / beamFrequency),
    calculatedMaxBeams
  );

  // Create staggered delay array
  const beamDelays = useMemo(
    () =>
      Array.from(
        { length: totalBeamCount },
        (_, i) => delay + i * beamFrequency
      ),
    [totalBeamCount, beamFrequency, delay]
  );

  // Generate unique IDs for each beam
  const beamIds = useMemo(
    () =>
      Array.from({ length: totalBeamCount }, (_, i) => `${baseId}-beam-${i}`),
    [totalBeamCount, baseId]
  );

  // Calculate the gradient coordinates based on the reverse prop
  const forwardAnimation: BeamAnimation = {
    x1: reverse ? ['90%', '-10%'] : ['10%', '110%'],
    x2: reverse ? ['100%', '0%'] : ['0%', '100%'],
    y1: ['0%', '0%'],
    y2: ['0%', '0%'],
  };

  const backwardAnimation: BeamAnimation = {
    x1: reverse ? ['-10%', '90%'] : ['110%', '10%'],
    x2: reverse ? ['0%', '100%'] : ['100%', '0%'],
    y1: ['0%', '0%'],
    y2: ['0%', '0%'],
  };

  const animateValue: TargetAndTransition = bidirectional
    ? {
        x1: [
          forwardAnimation.x1[0],
          forwardAnimation.x1[1],
          backwardAnimation.x1[1],
          backwardAnimation.x1[0],
        ],
        x2: [
          forwardAnimation.x2[0],
          forwardAnimation.x2[1],
          backwardAnimation.x2[1],
          backwardAnimation.x2[0],
        ],
        y1: ['0%', '0%', '0%', '0%'],
        y2: ['0%', '0%', '0%', '0%'],
      }
    : forwardAnimation;

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      // For all entries, recalculate the path
      updatePath();
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cx(
        'pointer-events-none absolute left-0 top-0 transform-gpu stroke-2',
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Static background path */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />

      {/* Multiple animated beam paths */}
      {beamIds.map((beamId, index) => (
        <path
          key={beamId}
          d={pathD}
          strokeWidth={pathWidth}
          stroke={`url(#${beamId})`}
          strokeOpacity={beamIntensity}
          strokeLinecap="round"
        />
      ))}

      <defs>
        {/* Multiple gradients with staggered delays */}
        {beamIds.map((beamId, index) => (
          <motion.linearGradient
            key={beamId}
            className="transform-gpu"
            id={beamId}
            gradientUnits={'userSpaceOnUse'}
            initial={{
              x1: '0%',
              x2: '0%',
              y1: '0%',
              y2: '0%',
            }}
            animate={animateValue}
            transition={{
              delay: beamDelays[index],
              duration: bidirectional ? duration * 2 : duration,
              ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <stop stopColor={gradientStartColor} stopOpacity="0" />
            <stop stopColor={gradientStartColor} />
            <stop offset="32.5%" stopColor={gradientStopColor} />
            <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  );
};

// Card Component
const Card = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
>(({ className, children, onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(
        'relative z-10 rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800/40 dark:bg-slate-800/60',
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Enhanced Card with border beam animation
const EnhancedCard = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    showBorderBeam?: boolean;
  }
>(
  (
    { className, children, onMouseEnter, onMouseLeave, showBorderBeam = false },
    ref
  ) => {
    const borderBeamId = useId();

    return (
      <div className="relative">
        <div
          ref={ref}
          className={cx(
            'relative z-10 rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800/40 dark:bg-slate-800/60',
            showBorderBeam && 'border-transparent',
            className
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </div>

        {showBorderBeam && (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <svg
              className="absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.5))' }}
            >
              {/* Static border path */}
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="7"
                fill="none"
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="1"
              />

              {/* Animated beam path */}
              <motion.rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="7"
                fill="none"
                stroke={`url(#border-beam-${borderBeamId})`}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{
                  strokeDasharray: '0 1000',
                }}
                animate={{
                  strokeDasharray: ['0 1000', '50 950', '0 1000'],
                  strokeDashoffset: [0, -100, -1000],
                }}
                transition={{
                  duration: 2.5,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />

              <defs>
                <linearGradient
                  id={`border-beam-${borderBeamId}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop stopColor="#059669" stopOpacity="0" />
                  <stop offset="20%" stopColor="#059669" stopOpacity="1" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="80%" stopColor="#34d399" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>
    );
  }
);

EnhancedCard.displayName = 'EnhancedCard';

// Main CiBottleneckAnimation Component
export function CiBottleneckAnimation(): ReactElement {
  const aiAgent = useRef<HTMLDivElement>(null);
  const betterTools = useRef<HTMLDivElement>(null);
  const ciBottleneck = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const growingTeams = useRef<HTMLDivElement>(null);
  const shipSlower = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full overflow-hidden"
      ref={containerRef}
    >
      <div className="grid w-full grid-cols-1 items-center justify-center gap-6 sm:grid-cols-3 sm:gap-24">
        <div className="relative space-y-2 sm:space-y-12">
          <div className="flex flex-col items-center">
            <EnhancedCard
              ref={aiAgent}
              className="border-green-400/60 bg-green-400/40 dark:border-green-800/60 dark:bg-green-800/40"
              showBorderBeam={true}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-slate-900 dark:text-slate-100">
                  <ServerStackIcon
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-mono text-xs leading-tight">AI Agents</p>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          </div>
          <div className="flex flex-col items-center">
            <Card
              ref={growingTeams}
              className="border-slate-300/40 bg-slate-200/30 opacity-70 dark:border-slate-600/40 dark:bg-slate-700/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <UserPlusIcon
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-mono text-xs leading-tight">
                      Growing Teams
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col items-center">
            <Card
              ref={betterTools}
              className="border-slate-300/40 bg-slate-200/30 opacity-70 dark:border-slate-600/40 dark:bg-slate-700/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <WrenchScrewdriverIcon
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-mono text-xs leading-tight">
                      Better Tools
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="relative space-y-12">
          <div className="flex flex-col items-center">
            <Card
              ref={ciBottleneck}
              className="relative bg-white dark:border-slate-800/60 dark:bg-slate-950"
            >
              <span className="absolute -bottom-8 right-0 hidden items-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-400 ring-1 ring-inset ring-slate-200 sm:inline-flex dark:bg-slate-950 dark:ring-slate-800/60">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400/80 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-orange-500/80" />
                </span>
                Queue increasing
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-slate-900 dark:text-slate-100">
                  <FunnelIcon aria-hidden="true" className="size-5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-mono text-xs leading-tight">
                      CI Bottleneck
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="relative space-y-2 sm:space-y-12">
          <div className="flex flex-col items-center">
            <Card
              ref={shipSlower}
              className="border-red-400/60 bg-red-400/40 dark:border-red-800/60 dark:bg-red-800/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-slate-900 dark:text-slate-100">
                  <ClockIcon aria-hidden="true" className="size-5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-mono text-xs leading-tight">
                      App Release
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <AnimatedCurvedBeam
          containerRef={containerRef}
          fromRef={aiAgent}
          toRef={ciBottleneck}
          curvature={15}
          startXOffset={26}
          endYOffset={0}
          bidirectional={false}
          duration={4}
          className="z-0"
        />
        <AnimatedCurvedBeam
          containerRef={containerRef}
          fromRef={growingTeams}
          toRef={ciBottleneck}
          curvature={0}
          startXOffset={14}
          endYOffset={0}
          bidirectional={false}
          duration={6}
          className="z-0"
        />
        <AnimatedCurvedBeam
          containerRef={containerRef}
          fromRef={betterTools}
          toRef={ciBottleneck}
          curvature={-46}
          startXOffset={26}
          endYOffset={0}
          bidirectional={false}
          duration={6}
          className="z-0"
        />
        <AnimatedCurvedBeam
          containerRef={containerRef}
          fromRef={ciBottleneck}
          toRef={shipSlower}
          curvature={0}
          startXOffset={14}
          endYOffset={0}
          bidirectional={false}
          duration={20}
          delay={1}
          beamFrequency={5}
          className="z-0"
        />
      </div>
    </div>
  );
}
