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
          <p className="text-xl text-gray-700 dark:text-gray-300">
            AI agents work by iterating: make a change, check the result,
            adjust. Without feedback, agents accumulate errors with no
            signal to{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              course correct
            </mark>
            . The tighter the feedback loop, the earlier an agent catches
            mistakes and the higher the quality of the final result. Speed
            matters too: faster feedback means more iterations within the
            same budget, compounding the quality advantage.
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
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              Every change an agent makes needs a verdict: did it work, or
              did it break something? That signal allows the agent to{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                self-correct before errors compound
              </mark>
              . Without it, a wrong assumption in step 2 corrupts
              steps 3 through 10.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              Monorepo tools make each loop fast by running only affected
              tasks, caching unchanged work, and enforcing architectural
              constraints early. The result: more iterations, earlier
              correction, better output.
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
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              The most powerful pattern combines{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                AI for intelligence
              </mark>{' '}
              with{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                CLI tools for predictability
              </mark>
              . AI understands <em>when</em> to invoke which command. Tools
              like codemods and Nx generators produce{' '}
              <strong>consistent, convention-matching results</strong> every
              time.
            </p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              Even better: AI agents can analyze your codebase, spot
              recurring patterns, and consolidate them into reusable
              generators on their own. Once extracted, every future scaffold
              is deterministic and convention-matching.
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
