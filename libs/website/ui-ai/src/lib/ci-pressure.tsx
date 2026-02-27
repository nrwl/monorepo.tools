import { LinkIcon } from '@heroicons/react/24/outline';
import {
  ArrowPathIcon,
  SignalIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';
import { CiPipelineAnimation } from './ci-pipeline-animation';

export function CIPressure(): JSX.Element {
  return (
    <div
      id="ai-agents-and-ci"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <h1 className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # AI Agents and CI
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-agents-and-ci"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
        </div>

        {/* Intro */}
        <div className="relative mx-auto mt-8 max-w-xl lg:mt-8 lg:max-w-7xl">
          <p className="mx-auto mt-8 max-w-4xl text-center text-xl text-gray-700 dark:text-gray-300">
            Autonomous agents submit more PRs, faster and more often. In a monorepo, each
            one can trigger tasks across hundreds of projects.{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              CI becomes the bottleneck
            </mark>
            , eroding the productivity gains that agentic engineering promises.
          </p>
        </div>

        {/* CI Pipeline Bottleneck Animation */}
        <div className="mt-16 hidden md:block">
          <div className="mx-auto max-w-4xl">
            <CiPipelineAnimation />
          </div>
        </div>

        {/* Local ↔ Remote Agent Communication */}
        <div className="relative mx-auto mt-24 max-w-xl lg:mt-36 lg:max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h2
                id="local-remote-agents"
                className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
              >
                Local and Remote Agents Working Together
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#local-remote-agents"
                  className="inline-flex items-center text-gray-900 dark:text-white"
                >
                  <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
                </a>
              </h2>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                The local AI agent and CI shouldn't be disconnected worlds. With
                the right integration layer, a local agent can see what's
                happening on CI, not just through GitHub Actions status checks,
                but at the{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  task level
                </mark>
                .
              </p>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                In a monorepo, you don't run a single build. You run tasks
                across hundreds of projects. Knowing which specific task failed,
                seeing its logs, and understanding whether it's a code issue or
                an environment problem makes the difference between a local
                agent that can help and one that's flying blind.
              </p>
            </div>

            <dl className="mt-12 space-y-6 lg:mt-0">
              <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
                <dt className="flex items-center gap-2">
                  <ServerStackIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Task-Level Visibility
                  </p>
                </dt>
                <dd className="mt-3 text-gray-600 dark:text-gray-400">
                  See individual task status, logs, and timing across all
                  projects, not just a pass/fail for the entire pipeline.
                </dd>
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
                <dt className="flex items-center gap-2">
                  <SignalIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Cross-Environment Context
                  </p>
                </dt>
                <dd className="mt-3 text-gray-600 dark:text-gray-400">
                  The local agent can compare its changes against what CI
                  reports, correlating local behavior with remote failures.
                </dd>
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
                <dt className="flex items-center gap-2">
                  <ArrowPathIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Feedback Loop
                  </p>
                </dt>
                <dd className="mt-3 text-gray-600 dark:text-gray-400">
                  The local agent pushes a fix, CI verifies it, and the result
                  flows back, creating a tight autonomous loop for resolving
                  failures.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
