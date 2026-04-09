'use client';
import { LinkIcon } from '@heroicons/react/24/outline';
import { IsolatedAgentsAnimation } from './isolated-agents-animation';

export function AILocalOptimization(): JSX.Element {
  return (
    <div
      id="ai-local-optimization"
      className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # AI Without the Bigger Picture
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-local-optimization"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Today, each repository gets its own AI agent session. Every agent
            operates in isolation,{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              optimizing locally
            </mark>{' '}
            without any awareness of what exists beyond its repo boundary.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="mx-auto hidden max-w-2xl md:block">
            <IsolatedAgentsAnimation />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Each agent sees only its own repo. It doesn&apos;t know about
              shared types in another repo, downstream consumers that depend on
              its API, or the platform team&apos;s standards that apply across
              all repos.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              The result: agents duplicate work, introduce inconsistencies, and
              miss cross-repo impacts. A change in one repo breaks consumers in
              another, and no agent sees it coming.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Agents operate at a local maximum based on the information
              available in a single repo, missing downstream impacts, shared
              types, and cross-project relationships. Optimization stays within
              each island, never across your organization as a whole.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
