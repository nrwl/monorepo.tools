import { LinkIcon } from '@heroicons/react/24/outline';
import { CiBottleneckAnimation } from './ci-bottleneck-animation-standalone';

export function CIPressure(): JSX.Element {
  return (
    <div
      id="ai-agents-and-ci"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # AI Agents and CI
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-agents-and-ci"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Content paragraphs */}
        <div className="relative mx-auto mt-8 max-w-xl lg:mt-8 lg:max-w-7xl">
          <p className="mx-auto mt-8 max-w-4xl text-xl text-gray-700 dark:text-gray-300">
            CI is already a challenge in monorepos as teams scale. Now, with AI
            agents autonomously submitting PRs just like developers, this
            pressure intensifies even further. While existing tooling like
            remote caching and distributed execution can alleviate performance
            bottlenecks, there's still the human cost of attending to breaking
            PRs—reviews, fixes, and workflow management.
          </p>
        </div>

        {/* CI Bottleneck Animation */}
        <div className="mt-16 hidden md:block">
          <div className="text-center">
            <div className="relative mx-auto h-64 w-full max-w-4xl">
              <CiBottleneckAnimation />
            </div>
          </div>
        </div>

        {/* Autonomous AI Agents Section */}
        <div className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative">
            <h1
              id="autonomous-ai-agents"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Autonomous AI Agents Managing the PR Pipeline
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#autonomous-ai-agents"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h1>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              This is where AI agents become most valuable, not just
              contributing code, but managing the CI pipeline. Autonomous AI
              agents can handle the tedious work of reviewing PRs and dealing
              with failed PRs to get them through to the main branch faster.
            </p>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  AI-Assisted Code Reviews
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                AI-powered tools can help with first pass reviewing by
                automatically analyzing large diffs and flagging important parts
                that capture the developer reviewer's attention. This provides
                another pair of eyes that can help lead to faster reviews.
              </dd>
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Auto-fixing Common Issues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Sometimes linting and formatting issues slip through the cracks.
                While CI checks catch these before merging, fixing them requires
                switching branches and submitting a patch. This is a tedious
                distraction from real work. An autonomous AI agent with
                sufficient codebase context can handle these routine fixes
                automatically, removing the hassle of attending to failed PRs.
              </dd>
            </div>

            <div className="rounded-md border border-slate-200/50 bg-slate-100/40 p-4 dark:border-black/30 dark:bg-slate-900/40">
              <dt>
                <p className="text-lg font-medium leading-6 text-gray-900/70 dark:text-white/70">
                  And many more...
                </p>
              </dt>
              <dd className="mt-4 text-gray-600/70 dark:text-gray-400/70">
                There are more potential use cases where the reasoning
                capabilities of AI agents can address some of the challenges you
                might face in CI in large monorepos.
              </dd>
            </div>

            <div className="relative h-8 overflow-hidden rounded-t-md border-l border-r border-t border-slate-200/30 bg-slate-100/20 dark:border-black/20 dark:bg-slate-900/20">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-100/20 via-slate-100/10 to-transparent dark:from-slate-900/20 dark:via-slate-900/10 dark:to-transparent"></div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
