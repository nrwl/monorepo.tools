import { LinkIcon } from '@heroicons/react/solid';

export function Conclusion() {
  return (
    <article
      id="perception-shift"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <h1 className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # A perception shift
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#perception-shift"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          It's complex, we know. But you're not alone in this journey.
        </p>
      </div>
      <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2
            id="monorepo-changes-your-organization"
            className="font-semiboldtext-gray-800 dark:text-gray-100sm:text-4xl group text-3xl tracking-tight"
          >
            A monorepo changes your organization
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-changes-your-organization"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h2>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            It is more than code & tools.{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
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
