'use client';
import { LinkIcon } from '@heroicons/react/24/outline';
import { SyntheticMonorepoAnimation } from './synthetic-monorepo-animation';

export function AIAgentsAcrossBoundaries(): JSX.Element {
  return (
    <div
      id="ai-agents-across-boundaries"
      className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2
              id="agents-across-boundaries"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              AI Agents Across Repo Boundaries
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
              automatically. When the backend agent defines a new DTO structure,
              that information flows to the frontend agent, which updates the UI
              to match. No human required as the context bridge.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              The coordinator manages the{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                full PR lifecycle across repos
              </mark>
              : submitting changes, monitoring CI in each repo, applying
              self-healing fixes when CI fails, and notifying the developer only
              when everything is green and ready for review.
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
