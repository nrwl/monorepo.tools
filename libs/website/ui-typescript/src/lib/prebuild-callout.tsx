export function PrebuildCallout(): React.JSX.Element {
  return (
    <div
      id="prebuild-or-direct"
      className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800"
    >
      <article className="bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
            <div className="px-6 pb-12 pt-10 text-center sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                <span className="block text-gray-900 dark:text-white">
                  Direct Exports <span aria-hidden="true">⚔</span>
                  {'  '}
                  <span className="sr-only">vs</span> Pre-built Code
                </span>
              </h1>
              <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
                With workspaces, we have two options for making our code
                accessible through out our codebase. We could prebuild our code
                or we could directly export the TypeScript source. .
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="relative mx-auto  mt-12 max-w-7xl sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="lg:col-start-2">
            <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100">
              Direct Export
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              By directly exporting, this means to take your TypeScript source
              and set it as your exports in a <code>package.json</code>
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              If the modules in your monorepo are for internal use and will
              never be published to a package registry, this is a valid option.
            </p>
          </div>

          <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
            <img
              aria-hidden="true"
              loading="lazy"
              className="relative mx-auto"
              width={490}
              src="images/typescript/direct-export.svg"
              alt="direct export of typescript"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="lg:col-start-1">
            <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100">
              Prebuild
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              With prebuilding, you're running the build tasks needed for any
              module in the monorepo ahead of time. You export the compiled and
              generated code, and provide the generated types.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The benefit here is that everything can be done ahead of time, so
              you only have one task being run. However, if you need to change
              the modules being consumed, you need to rerun the build for the
              affected module. Some monorepo tools, like{' '}
              <a href="https://nx.dev">Nx</a> provide a way to do this, but
              other tools might not.
            </p>
          </div>

          <div className="relative -mx-4 mt-10 lg:col-start-2 lg:mt-0">
            <img
              aria-hidden="true"
              loading="lazy"
              className="relative mx-auto"
              width={490}
              src="images/typescript/prebuild.svg"
              alt="direct export of typescript"
            />
          </div>
        </div>
      </article>

      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
            Either option can work, the major factor would be if you are
            publishing the libraries for others to use outside of your monorepo.
          </p>
        </div>
      </article>
    </div>
  );
}
