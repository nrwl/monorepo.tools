import { LinkIcon } from '@heroicons/react/solid';

export function Conclusion() {
  return (
    <article
      id="perception-shift"
      className="bg-slate-50 dark:bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="relative">
        <h1 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl group">
          # A perception shift
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#perception-shift"
            className="text-gray-900 dark:text-white flex inline-flex items-center"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
          It's complex, we know. But you're not alone in this journey.
        </p>
      </div>
      <div className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h2
            id="monorepo-changes-your-organization"
            className="text-3xl tracking-tight font-semiboldtext-gray-800 dark:text-gray-100sm:text-4xl group"
          >
            A monorepo changes your organization
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-changes-your-organization"
              className="text-gray-900 dark:text-white flex inline-flex items-center"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            It is more than code & tools.{' '}
            <mark className="px-1 bg-yellow-500 rounded-md">
              A monorepo changes your organization
            </mark>{' '}
            & the way you think about code. By adding consistency, lowering the
            friction in creating new projects and performing large scale
            refactorings, by facilitating code sharing and cross-team
            collaboration, it'll allow your organization to work more
            efficiently.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Conclusion;
