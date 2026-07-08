'use client';
import { LinkIcon } from '@heroicons/react/24/outline';

export function AIEnablement(): JSX.Element {
  return (
    <>
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
              coordinated changes. Agents are augmented to work across a
              synthetic monorepo via a{' '}
              <a
                href="https://metaharness.tools?utm_source=monorepo.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-yellow-500 font-medium text-gray-800 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-800"
              >
                meta-harness
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900">
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div id="ai-meta-harness" className="mx-auto max-w-3xl">
            <h2
              id="enabled-by-meta-harness"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Enabled by a Meta-Harness
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-meta-harness"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              A synthetic monorepo gives agents the map. A meta-harness is what
              lets them act on it: the coordination layer that sits above your
              individual coding agent and spans repositories, sessions, and
              time.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              It spawns and routes the per-repo agents, carries context between
              them, and drives the cross-repo PR and CI lifecycle, so a single
              session can ship a coordinated change across every repo. Learn
              more at{' '}
              <a
                href="https://metaharness.tools?utm_source=monorepo.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-yellow-500 font-medium text-gray-800 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-800"
              >
                metaharness.tools
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
