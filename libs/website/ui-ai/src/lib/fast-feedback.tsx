import { LinkIcon } from '@heroicons/react/24/outline';
import { FeedbackLoopAnimation } from './feedback-loop-animation';
import { GeneratorTerminalAnimation } from './generator-terminal-animation';

export function FastFeedback(): JSX.Element {
  return (
    <div
      id="fast-feedback"
      className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <h1 className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # Fast Feedback Loops &amp; Predictability
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#fast-feedback"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-center text-xl text-gray-700 dark:text-gray-300">
            AI agents work by iterating: change, check, adjust. The quality
            of the result depends on{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              tight feedback loops
            </mark>
            , proper guardrails, and how fast the agent can iterate.
            Monorepo tools provide all three.
          </p>
        </div>

        {/* Feedback Loop */}
        <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2
              id="feedback-loops"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Tight Iteration Cycles
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#feedback-loops"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Agents work faster, produce better results, and operate more
              autonomously when they get{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                immediate feedback
              </mark>{' '}
              on every change. Without it, a wrong assumption in step 2
              corrupts steps 3 through 10.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Monorepo tools tighten this loop: only affected tasks run,
              unchanged work is cached, and architectural constraints catch
              violations early.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <FeedbackLoopAnimation />
          </div>
        </div>

        {/* Predictability / Generators */}
        <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="lg:order-2">
            <h2
              id="predictable-scaffolding"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Predictable Code Scaffolding
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#predictable-scaffolding"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Creating a new project shouldn&rsquo;t waste tokens generating
              each file from scratch. Use a template and stamp it down in
              one go, with{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                predictable results
              </mark>{' '}
              that match your codebase conventions. Tools like codemods and
              Nx generators produce{' '}
              <strong>consistent, convention-matching output</strong> every
              time.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Tools like Nx also let you create custom local generators
              tailored to your workspace. Your AI agent can invoke these
              directly, getting deterministic scaffolding without spending
              tokens on boilerplate.
            </p>
          </div>
          <div className="mt-8 lg:order-1 lg:mt-0">
            <GeneratorTerminalAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
