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
            Monorepo tools vary widely in AI support, from no integration at
            all to full MCP servers, agent skills, workspace analysis, and
            self-healing CI.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            <Link
              href="https://nx.dev"
              className="font-semibold text-blue-600 underline decoration-blue-600/30 underline-offset-4 transition hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              Nx
            </Link>{' '}
            checks all the boxes.{' '}
            <Link
              href="/compare#ai-support"
              className="font-semibold text-blue-600 underline decoration-blue-600/30 underline-offset-4 transition hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              Compare tools &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
