'use client';
import { LinkIcon } from '@heroicons/react/24/outline';

export function AIEnablement(): JSX.Element {
  return (
    <div
      id="ai-enablement"
      className="overflow-hidden bg-white pt-16 lg:pt-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # AI Agent Enablement
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-enablement"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            The graph exposes metadata that lets agents see beyond individual
            repo boundaries. Instead of operating at a local maximum within a
            single repo, agents read cross-repo relationships and perform
            coordinated changes.
          </p>
        </div>
      </div>
    </div>
  );
}
