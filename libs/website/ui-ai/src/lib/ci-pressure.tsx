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
        <div className="mt-16">
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
                There are two distinct AI systems at play: a{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  specialized remote agent on CI
                </mark>{' '}
                that diagnoses and fixes task failures, and the local
                development agent. With the right integration layer, they
                communicate directly so the local agent sees what's happening
                on CI at the task level, not just a pass/fail status check.
              </p>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                The entire cycle from failure detection to verified fix can
                run autonomously, without human intervention.
              </p>
            </div>

            <dl className="mt-12 space-y-6 lg:mt-0">
              <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
                <dt className="flex items-center gap-2">
                  <ServerStackIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Remote CI Agent
                  </p>
                </dt>
                <dd className="mt-3 text-gray-600 dark:text-gray-400">
                  A specialized agent on CI classifies failures (code bug,
                  environment issue, flaky test) using error logs, the project
                  graph, and historical run data. It proposes a fix and re-runs
                  the failing task to verify it actually works.
                </dd>
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
                <dt className="flex items-center gap-2">
                  <SignalIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Local-Remote Communication
                  </p>
                </dt>
                <dd className="mt-3 text-gray-600 dark:text-gray-400">
                  The local agent connects to the remote CI agent at the task
                  level: which tasks failed, whether a fix is being attempted,
                  and what the proposed changes are. It can wait for the remote
                  agent to finish before deciding what to do next.
                </dd>
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
                <dt className="flex items-center gap-2">
                  <ArrowPathIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Autonomous Resolution
                  </p>
                </dt>
                <dd className="mt-3 text-gray-600 dark:text-gray-400">
                  When the remote agent's fix is verified, the local agent can
                  tell it to apply directly. If the fix is incomplete, the local
                  agent pulls the proposed changes, adjusts what's missing, and
                  pushes again, closing the loop without human intervention.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
