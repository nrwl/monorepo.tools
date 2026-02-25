import { LinkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function AIToolsComparison(): JSX.Element {
  return (
    <div
      data-test-id="ai-tools-comparison"
      id="ai-tools-comparison"
      className="bg-slate-50 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="group text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            How Do Monorepo Tools Compare on AI?
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-tools-comparison"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Monorepo tools vary widely in AI support — from no integration at
            all to full MCP servers, agent skills, workspace analysis, and
            self-healing CI. See how Bazel, Gradle, Lage, Lerna, moon, Nx,
            Pants, Rush, and Turborepo stack up across six AI capability
            dimensions.
          </p>
          <div className="mt-10">
            <Link
              href="/compare#ai-support"
              className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              Compare AI Support
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
