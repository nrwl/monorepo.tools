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
  SortDescendingIcon,
  StatusOnlineIcon,
  SwitchVerticalIcon,
  TerminalIcon,
} from '@heroicons/react/solid';

export function MonorepoFeatures() {
  return (
    <div className="py-16 bg-slate-800 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
            # Monorepo tools
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-300">
            How do they compare? let's see how each tools answer to each
            features.
          </p>
        </div>

        {/*MANAGEMENT*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-bold text-gray-100 tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Management
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-900 rounded" />
        </div>

        {/*Code Boundaries*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <HandIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code Boundaries
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Code Sharing*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <CodeIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code sharing
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Consistent Tooling*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <TerminalIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code sharing
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>
          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*WORKSPACE*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-bold text-gray-100 tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Workspace{' '}
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-900 rounded" />
        </div>

        {/*Dependency Graph Visualization*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <PresentationChartLineIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Dependency graph visualization
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Detecting Affected Projects/Packages*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <LightBulbIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Detecting affected projects/packages
            </h3>

            <p className="mt-3 text-lg text-gray-200">
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
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*TASKS*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-bold text-gray-100 tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Tasks
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-900 rounded" />
        </div>

        {/*Local Task Coordination*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <SwitchVerticalIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local task coordination
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Local Computation Caching*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <DocumentDownloadIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Local task coordination
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Cloud Computation Caching*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <CloudDownloadIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed computation caching
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Distributed Task Execution*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <CollectionIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Distributed task execution
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*SCALABILITY*/}
        <div className="mt-24 lg:mt-32 text-2xl flex leading-loose font-bold text-gray-100 tracking-tight sm:text-3xl sm:leading-relaxed items-center">
          Scalability
          <div className="ml-4 flex flex-grow h-1 w-full bg-slate-900 rounded" />
        </div>

        {/*Performance*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <LightningBoltIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Performance
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Code Generation*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <CogIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code generation
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
          </dl>
        </div>

        {/*Enforcing Code Style*/}
        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-gray-200 rounded-md bg-slate-900">
              <StatusOnlineIcon className="w-6 h-6" />
            </div>
            <h3 className="ml-16 text-xl font-medium text-gray-200 sm:text-2xl sm:leading-relaxed">
              Enforcing code style
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                className="relative mx-auto border border-black"
                width={490}
                src="https://place-hold.it/980x749/1e293b/fff"
                alt=""
              />
            </div>
          </div>

          <dl className="space-y-6">
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam impedito iste blanditiis facere.
              </dd>
            </div>
            <div className="p-4 bg-gray-900 rounded-md border border-black">
              <dt>
                <p className="px-3 py-2 inline-flex items-center justify-center rounded-md bg-slate-800 text-gray-300 text-sm uppercase tracking-widest">
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-400">
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
