import { LinkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function NoMonorepoFallback(): JSX.Element {
  return (
    <div
      data-test-id="no-monorepo-fallback"
      id="no-monorepo-fallback"
      className="-scroll-mt-16 bg-white sm:-scroll-mt-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="group text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            What If You Cannot Have a Monorepo?
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#no-monorepo-fallback"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
            A <strong>synthetic monorepo</strong> brings the same project graph
            and AI agent capabilities to that setup, without moving any code.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            <Link
              href="/synthetic-monorepos"
              className="font-semibold text-blue-600 underline decoration-blue-600/30 underline-offset-4 transition hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              Explore synthetic monorepos &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
