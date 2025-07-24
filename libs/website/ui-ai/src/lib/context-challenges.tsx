import {
  LinkIcon,
  EyeSlashIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  ArchiveBoxXMarkIcon,
} from '@heroicons/react/24/outline';

export function ContextChallenges(): JSX.Element {
  return (
    <div
      id="context-challenges"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # Your AI Assistant Might Get Lost
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#context-challenges"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Turns out, just having all your code in one place doesn't
            automatically make AI more effective
          </p>
        </div>

        {/* Hero Section with image and callout */}
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative lg:order-2">
            <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100">
              It's Like Only Navigating with StreetView
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              LLMs rely entirely on provided context. Monorepos have all code in
              one place, but raw code access isn't enough. It's analogous to{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                navigating a city using only street view.
              </mark>{' '}
              You can see individual files (streets) clearly, but without an
              aerial view of the architecture (city layout), it's unlikely to
              pick optimal routes.
            </p>
          </div>

          <div className="mt-10 lg:order-1 lg:mt-0">
            <img
              className="mx-auto w-full rounded-lg shadow-lg"
              width={500}
              src="/images/ai/ai-streetview.avif"
              alt="AI assistant only seeing individual files without understanding the broader architectural context"
            />
          </div>
        </div>

        {/* Research-backed insights */}
        <div className="mt-16">
          <h3 className="text-center text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100">
            Getting Lost in the Middle
          </h3>
          <p className="mx-auto mt-8 max-w-4xl text-xl text-gray-700 dark:text-gray-300">
            Research has shown that it's not about providing as much context as
            possible, but it's more about providing the right context.
          </p>

          <div className="lg:gap-22 mt-12 grid gap-16 pt-12 lg:grid-cols-3">
            <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-200 text-gray-800 dark:bg-slate-700 dark:text-gray-200">
                  <ExclamationTriangleIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="mt-4 block">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Context Degradation
                </h2>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                  Recent research on 'context rot' reveals that even though
                  modern LLMs have million-token context windows, their
                  performance actually degrades with longer inputs. Simply
                  feeding more code doesn't improve understanding. It can make
                  it worse.
                </p>
              </div>
            </section>

            <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-200 text-gray-800 dark:bg-slate-700 dark:text-gray-200">
                  <CpuChipIcon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-4 block">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Missing Semantic Understanding
                </h2>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                  Just relying on lexical matching (finding specific code
                  patterns) is not enough. Having a higher-level understanding
                  of the architecture and dependencies is essential to provide
                  effective results.
                </p>
              </div>
            </section>

            <section className="rounded-md bg-slate-100 px-4 py-6 shadow-md dark:bg-slate-900">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-200 text-gray-800 dark:bg-slate-700 dark:text-gray-200">
                  <ArchiveBoxXMarkIcon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-4 block">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  The 'Lost in the Middle' Problem
                </h2>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                  AI models struggle most with information buried in the middle
                  of long contexts. In a large monorepo, the most relevant
                  context might be scattered across dozens of files, making it
                  effectively invisible to file-level analysis.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
