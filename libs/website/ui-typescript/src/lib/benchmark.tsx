import { LinkIcon } from '@heroicons/react/24/outline';
import { Graph } from './graph/graph';

export function Benchmark(): React.JSX.Element {
  return (
    <div
      id="benchmark"
      className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          # Performance Benchmarks
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#type-references"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          Understand the performance impact of how you setup your TypeScript
          monorepo
        </p>
      </div>

      <article className="relative mx-auto  max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100">
            Shipping code faster
          </h2>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4 dark:text-gray-300">
            How you structure your TypeScript monorepo impacts more than your
            developer experience, it can also impact how fast changes in your
            repo are built and released to the world. With package linking and
            project references, the overall build time for your monorepo can be
            significantly faster. With faster CI times, you can get things
            shipped faster all while having a better developer experience.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mx-auto mt-10 h-full w-3/5 object-cover"
            src="/images/typescript/cicd.svg"
            alt="a figure eight with arrows"
          />
        </div>
      </article>

      <article className="relative mx-auto  mt-12 max-w-6xl sm:mt-16 lg:mt-24">
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
          In the{' '}
          <a
            className="border-b border-yellow-500 px-1 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
            href="https://github.com/nrwl/typecheck-timings"
          >
            following example
          </a>
          , we compare the build times for a TypeScript monorepo using path
          aliases with a TypeScript monorepo using project refernces and
          workspaces. This example uses Nx, but other monorepo tools may have
          similar results.
        </p>

        <Graph />
      </article>

      <article className="relative mx-auto  mt-12 max-w-7xl sm:mt-16 lg:mt-24">
        <div className="mx-auto max-w-2xl">
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            What's worth mentioning here is that while the cold build between
            the two different setups for their cold builds is not too drastic,
            subsequent builds with project references start to show the bigger
            picture. With project references in place, changes made to any
            package in our monorepo reduces the amount of time spent building.
          </p>
        </div>
      </article>
    </div>
  );
}
