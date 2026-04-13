import { LinkIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    step: '01',
    title: 'Connect your repos',
    detail:
      'Bring existing repositories into a unified workspace graph. No config files needed in target repos, no CI pipeline changes. Metadata-only workspaces bring any repo in with zero friction.',
  },
  {
    step: '02',
    title: 'See the graph',
    detail:
      'The workspace graph automatically discovers dependencies across all connected repositories. Which repo depends on which, what a change affects downstream, how projects relate across teams.',
  },
  {
    step: '03',
    title: 'Apply governance',
    detail:
      'Write conformance rules once, enforce them everywhere. Technology-agnostic rules that work across any language or stack. Run checks on a schedule, not just on code changes.',
  },
  {
    step: '04',
    title: 'Enable AI agents',
    detail:
      'Expose the cross-repo graph to AI agents via structured tooling. Agents read relationships, understand impact, and coordinate changes across repositories as if they were one workspace.',
  },
];

export function HowItWorks(): JSX.Element {
  return (
    <div
      id="how-it-works"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # How It Works
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#how-it-works"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            A synthetic monorepo is an entry point, not an endpoint. Start with
            visibility and gradually deepen integration where it makes sense.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl lg:mt-16">
          <div className="space-y-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-gray-900">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
