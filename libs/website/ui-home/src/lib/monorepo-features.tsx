import {
  CloudDownloadIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  DocumentDownloadIcon,
  HandIcon,
  LightBulbIcon,
  LightningBoltIcon,
  PresentationChartLineIcon,
  ServerIcon,
  SortDescendingIcon,
  StatusOnlineIcon,
  SwitchVerticalIcon,
  TerminalIcon,
} from '@heroicons/react/solid';

const Supported = () => (
  <span className="mr-3 w-2 h-2 bg-green-500 rounded-full" />
);
const Unsupported = () => (
  <span className="mr-3 w-2 h-2 bg-red-500 rounded-full" />
);

export function MonorepoFeatures() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Monorepo tools
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
            How do they compare? let's see how each tools answer to each
            features.
          </p>
        </div>

        {/*MANAGEMENT*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Management
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded" />
        </div>

        {/*Code Boundaries*/}
        <div
          id="code-boundaries"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <HandIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code Boundaries
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Code Sharing*/}
        <div
          id="code-sharing"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CodeIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Source Code sharing
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <span className="mr-3 w-2 h-2 bg-green-500 rounded-full" />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Consistent Tooling*/}
        <div
          id="consistent-tooling"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <TerminalIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Consistent tooling
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <span className="mr-3 w-2 h-2 bg-red-500 rounded-full" />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <span className="mr-3 w-2 h-2 bg-green-500 rounded-full" />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*WORKSPACE*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Workspace{' '}
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded" />
        </div>

        {/*Dependency Graph Visualization*/}
        <div
          id="dependency-graph-visualization"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <PresentationChartLineIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Dependency graph visualization
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <iframe
                className="relative mx-auto rounded-md"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v87Y8NgAYLo"
                title="Interactive dependency graph visualization with Nx"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Detecting Affected Projects/Packages*/}
        <div
          id="detecting-affected-projects-packages"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <LightBulbIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Detecting affected projects/packages
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto"
                width={490}
                src="/images/dependency-graph.svg"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*TASKS*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Tasks
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded" />
        </div>

        {/*Local Task Coordination*/}
        <div
          id="local-task-coordination"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <SwitchVerticalIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local task coordination
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Local Computation Caching*/}
        <div
          id="local-computation-caching"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <DocumentDownloadIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local computation caching
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Distributed Computation Caching*/}
        <div
          id="distributed-computation-caching"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CloudDownloadIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed computation caching
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Distributed Task Execution*/}
        <div
          id="distributed-task-execution"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CollectionIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed task execution
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Transparent Remote Execution*/}
        <div
          id="transparent-remote-execution"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <ServerIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Transparent remote execution
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*SCALABILITY*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-boldtext-gray-800 dark:text-gray-100tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Scalability
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-100 dark:bg-slate-900 rounded" />
        </div>

        {/*Performance*/}
        <div
          id="performance"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <LightningBoltIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Performance
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Code Generation*/}
        <div
          id="code-generation"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <CogIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code generation
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Explicit Project Constrains*/}
        <div
          id="explicit-project-constrains"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <StatusOnlineIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Explicit project constrains
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Enforcing Code Style*/}
        <div
          id="enforcing-code-style"
          className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-800 dark:text-gray-200 rounded-md bg-slate-100 dark:bg-slate-900">
              <SortDescendingIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Enforcing code style
            </h3>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-slate-200 dark:border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-widest">
                  <Unsupported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default MonorepoFeatures;
