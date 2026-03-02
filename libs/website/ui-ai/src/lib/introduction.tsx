import { LinkIcon } from '@heroicons/react/24/outline';

export function Introduction(): JSX.Element {
  return (
    <div
      data-test-id="ai-monorepo-introduction"
      className="bg-slate-50 dark:bg-slate-800"
    >
      {/* Header */}
      <article className="relative bg-slate-50 pb-32 md:pt-32 dark:bg-slate-800">
        <div className="absolute inset-0">
          <img
            aria-hidden="true"
            className="h-full w-full object-cover"
            src="/images/monorepo-background.jpg"
            alt="cover"
          />
          <div
            className="absolute inset-0 bg-slate-50 mix-blend-lighten dark:bg-slate-800 dark:mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h1
                id="ai-driven-monorepos"
                className="group text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
              >
                AI and Monorepos
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#ai-driven-monorepos"
                  className="inline-flex items-center text-gray-900 dark:text-white"
                >
                  <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
                </a>
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                AI and monorepos elevate each other: monorepos provide unified
                context for powerful agentic workflows, while AI helps navigate
                and automate monorepo complexity.
              </p>
            </div>
            <div className="mt-16 lg:mt-0">
              <svg
                className="mx-auto h-auto w-2/3 text-slate-800 antialiased dark:text-white"
                viewBox="0 0 400 300"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* AI Brain Icon */}
                <circle
                  cx="200"
                  cy="150"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="180" cy="130" r="8" fill="currentColor" />
                <circle cx="220" cy="130" r="8" fill="currentColor" />
                <circle cx="170" cy="160" r="6" fill="currentColor" />
                <circle cx="200" cy="165" r="6" fill="currentColor" />
                <circle cx="230" cy="160" r="6" fill="currentColor" />
                <circle cx="185" cy="185" r="4" fill="currentColor" />
                <circle cx="215" cy="185" r="4" fill="currentColor" />

                {/* Connecting lines representing repo structure */}
                <line
                  x1="120"
                  y1="80"
                  x2="160"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="280"
                  y1="80"
                  x2="240"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="120"
                  y1="220"
                  x2="160"
                  y2="180"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="280"
                  y1="220"
                  x2="240"
                  y2="180"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                {/* Repository nodes */}
                <rect
                  x="100"
                  y="60"
                  width="40"
                  height="40"
                  rx="8"
                  fill="currentColor"
                  opacity="0.7"
                />
                <rect
                  x="260"
                  y="60"
                  width="40"
                  height="40"
                  rx="8"
                  fill="currentColor"
                  opacity="0.7"
                />
                <rect
                  x="100"
                  y="200"
                  width="40"
                  height="40"
                  rx="8"
                  fill="currentColor"
                  opacity="0.7"
                />
                <rect
                  x="260"
                  y="200"
                  width="40"
                  height="40"
                  rx="8"
                  fill="currentColor"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-28 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Teaching AI Agents Your Monorepo
              </h2>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-4 md:px-6 dark:bg-slate-900">
              <a
                href="#how-tools-enable-ai"
                title="Teaching AI Agents Your Monorepo"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Learn more<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Fast Feedback and Predictability
              </h2>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-4 md:px-6 dark:bg-slate-900">
              <a
                href="#fast-feedback"
                title="Fast Feedback and Predictability"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Learn more<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                AI Agents and CI
              </h2>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-4 md:px-6 dark:bg-slate-900">
              <a
                href="#ai-agents-and-ci"
                title="AI Agents and CI"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Learn more<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                AI-Native Tooling
              </h2>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-4 md:px-6 dark:bg-slate-900">
              <a
                href="#ai-native"
                title="AI-Native Tooling"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Learn more<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
