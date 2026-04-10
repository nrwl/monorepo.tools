'use client';
import { LinkIcon } from '@heroicons/react/24/outline';
import { SyntheticMonorepoAnimation } from './synthetic-monorepo-animation';

export function AIAgentsAcrossBoundaries(): JSX.Element {
  return (
    <div className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div id="ai-agents-across-boundaries">
            <h2
              id="agents-across-boundaries"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              AI Agents Without Walls
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-agents-across-boundaries"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              With a synthetic monorepo, a{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                coordinator agent reads the cross-repo graph
              </mark>
              , spawns per-repo agents, and funnels context between them
              automatically. It walks the upstream and downstream dependencies
              to figure out which repos are actually affected by a change and
              spawns agents only where they need to operate.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              This unlocks the{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                full PR lifecycle across repos
              </mark>
              : submitting changes as coordinated PRs, monitoring CI in each
              repo, and running with full autonomy until everything is green.
              It is as close as you can get to the atomic commits of a true
              monorepo, without moving any code.
            </p>
          </div>

          <div className="mt-8 hidden md:block lg:mt-0">
            <SyntheticMonorepoAnimation alwaysSynthetic />
          </div>
        </div>
      </div>
    </div>
  );
}
