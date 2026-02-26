import { LinkIcon } from '@heroicons/react/24/outline';
import {
  ArrowPathIcon,
  SignalIcon,
  EyeIcon,
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
            AI Agents and CI
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
          <p className="mx-auto mt-8 max-w-4xl text-xl text-gray-700 dark:text-gray-300">
            AI agents are becoming more autonomous. They don't just assist, they
            submit PRs, run builds, and iterate on failures. This means they need
            to effectively navigate{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              both local development and CI
            </mark>
            . In monorepos, where tasks run across hundreds of projects, this
            challenge is amplified.
          </p>
        </div>

        {/* CI Pipeline Bottleneck Animation */}
        <div className="mt-16 hidden md:block">
          <div className="mx-auto max-w-4xl">
            <CiPipelineAnimation />
          </div>
        </div>

        {/* AI-Assisted Code Reviews - kept from original */}
        <div className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative">
            <h2
              id="ai-code-reviews"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              AI-Assisted Code Reviews
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-code-reviews"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              AI-powered tools help with first-pass reviewing by automatically
              analyzing large diffs and flagging the parts that matter. This
              provides another pair of eyes that leads to faster, more focused
              human reviews.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-6 dark:border-black dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <EyeIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Monorepo Context Matters
                </p>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                In a monorepo, a change to a shared library might affect dozens
                of consuming projects. AI reviewers with access to the project
                graph can trace these impacts and flag downstream risks that a
                file-level review would miss.
              </p>
            </div>
          </div>
        </div>

        {/* Self-Healing CI */}
        <div className="relative mx-auto mt-24 max-w-xl lg:mt-36 lg:max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="self-healing-ci"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Self-Healing CI
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#self-healing-ci"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              When CI breaks, an intelligent agent with monorepo context can do
              more than just report the failure. It can diagnose, classify, and
              fix it.
            </p>
          </div>

          {/* Intelligence Levels */}
          <dl className="mt-12 space-y-8">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-6 dark:border-black dark:bg-slate-900">
              <dt className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-gray-800 dark:bg-slate-700 dark:text-gray-200">
                  1
                </div>
                <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Log-Based Fixes
                </p>
              </dt>
              <dd className="ml-11 mt-3 text-gray-600 dark:text-gray-400">
                At the simplest level, the agent reads task output logs and
                proposes a fix based on the error message. Linting failures,
                formatting issues, type errors. Routine problems with clear
                solutions.
              </dd>
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-100 p-6 dark:border-black dark:bg-slate-900">
              <dt className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-gray-800 dark:bg-slate-700 dark:text-gray-200">
                  2
                </div>
                <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Environmental Awareness
                </p>
              </dt>
              <dd className="ml-11 mt-3 text-gray-600 dark:text-gray-400">
                A smarter agent goes further: Is this also failing on another
                branch? Is the database down? Is this an environment issue? By
                cross-referencing data from other runs and infrastructure
                status, it classifies the failure correctly before suggesting a
                fix.
              </dd>
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-100 p-6 dark:border-black dark:bg-slate-900">
              <dt className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-gray-800 dark:bg-slate-700 dark:text-gray-200">
                  3
                </div>
                <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Verified Fixes
                </p>
              </dt>
              <dd className="ml-11 mt-3 text-gray-600 dark:text-gray-400">
                The most valuable level: the agent doesn't just propose a fix,
                it{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  runs the fix against the failing task to verify it actually
                  works
                </mark>
                . This gives high confidence that the fix is correct, and
                enables fully autonomous fix application for trusted failure
                categories, no human intervention needed.
              </dd>
            </div>
          </dl>
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
