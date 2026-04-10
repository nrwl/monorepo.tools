'use client';
import { LinkIcon } from '@heroicons/react/24/outline';
import { IsolatedAgentsAnimation } from './isolated-agents-animation';

export function AILocalOptimization(): JSX.Element {
  return (
    <div className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="hidden md:block">
            <IsolatedAgentsAnimation />
          </div>

          <div id="ai-local-optimization">
            <h2
              id="local-optimizations"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Local Optimizations Make Global Throughput Worse
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-local-optimization"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              This is a well-known principle from manufacturing. When one part
              of the pipeline runs fast, work piles up at the boundaries. The
              same applies to AI agents working across polyrepos.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Each agent speeds up work inside its own repo, but has zero
              visibility into what exists beyond its boundary. In between these
              fast, isolated agents sit{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                humans carrying context
              </span>
              . That breaks agent autonomy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
