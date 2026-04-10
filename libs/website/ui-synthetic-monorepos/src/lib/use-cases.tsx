'use client';
import { LinkIcon } from '@heroicons/react/24/outline';

const useCases = [
  {
    title: 'Gradual migration path',
    detail:
      'Start synthetic across all your repos, then cluster the ones that belong together into actual monorepos over time. Move at your own pace instead of planning a big-bang migration.',
  },
  {
    title: 'External vendors and third parties',
    detail:
      'When parts of your system are built by external teams or vendors that cannot be inside your monorepo for visibility or legal reasons, a synthetic monorepo still gives you the graph and coordination across the boundary.',
  },
  {
    title: 'Open source alongside closed source',
    detail:
      'Keep your open source projects as public repos and your internal code private, while still reasoning about dependencies, impact, and cross-repo changes through a single graph.',
  },
];

export function UseCases(): JSX.Element {
  return (
    <div
      id="use-cases"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # Where Synthetic Monorepos Fit
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#use-cases"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Most organizations will not collapse all their code into a single
            monorepo, and they should not have to. Whenever you cannot or do
            not want to merge repositories, but still need a{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              unified view across them
            </mark>
            , a synthetic monorepo is the right fit.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-slate-200 bg-white p-6 dark:border-black dark:bg-slate-900"
            >
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
