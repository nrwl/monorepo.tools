'use client';
import { LinkIcon } from '@heroicons/react/24/outline';
import { AgentOrchestratorAnimation } from './agent-orchestrator-animation';

export function AIAgentsAcrossBoundaries(): JSX.Element {
  return (
    <div
      id="ai-agents-across-boundaries"
      className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # AI Agents Across Repo Boundaries
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-agents-across-boundaries"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Without a synthetic monorepo, cross-repo features require separate
            AI sessions per repo, with a human bridging context between them.
            With it, a{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              coordinator agent reads the cross-repo graph
            </mark>
            , spawns per-repo agents, and funnels context between them
            automatically.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              From islands to orchestration
            </h3>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              A coordinator agent reads the unified workspace graph and
              understands how all repositories connect. It spawns specialized
              agents for each repo: one for the backend API, one for the
              frontend, one for shared libraries.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Context flows between agents automatically. When the backend agent
              defines a new DTO structure, that information is funneled to the
              frontend agent, which updates the UI to match. No human required
              as the &ldquo;context bridge.&rdquo;
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
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              This is what breaks the island ceiling. AI agents that reason and
              act across your entire organization, not just one repo at a time.
            </p>
          </div>

          <div className="mt-8 hidden md:block lg:mt-0">
            <AgentOrchestratorAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
