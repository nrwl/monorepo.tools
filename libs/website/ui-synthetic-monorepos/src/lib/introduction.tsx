import { LinkIcon } from '@heroicons/react/24/outline';

export function Introduction(): JSX.Element {
  return (
    <div
      data-test-id="synthetic-monorepos-introduction"
      className="bg-slate-50 dark:bg-slate-800"
    >
      {/* Header */}
      <article className="relative bg-slate-50 pb-32 md:pt-32 dark:bg-slate-800">
        <div className="absolute inset-0">
          <img
            aria-hidden="true"
            className="h-full w-full object-cover"
            src="/images/monorepo-background.jpg"
            alt="cover"
          />
          <div
            className="absolute inset-0 bg-slate-50 mix-blend-lighten dark:bg-slate-800 dark:mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h1
                id="synthetic-monorepos"
                className="group text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
              >
                Synthetic Monorepos
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#synthetic-monorepos"
                  className="inline-flex items-center text-gray-900 dark:text-white"
                >
                  <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
                </a>
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                Sometimes migrating to a single monorepo isn&rsquo;t feasible.
                Sometimes you already have multiple monorepos per team or
                domain. Synthetic monorepos give you{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  monorepo-level intelligence across existing repositories
                </mark>{' '}
                without moving code.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
                For AI agents, every repository boundary is a wall they
                can&rsquo;t see past. As long as your codebase is split into
                islands, agents optimize locally within each one but never
                across your organization as a whole.
              </p>
            </div>
            <div className="mt-16 lg:mt-0">
              <svg
                className="mx-auto h-auto w-2/3 text-slate-800 antialiased dark:text-white"
                viewBox="0 0 400 300"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central connecting hub */}
                <circle
                  cx="200"
                  cy="150"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="12"
                  fill="currentColor"
                  opacity="0.6"
                />

                {/* Repository nodes */}
                {[
                  { x: 80, y: 70 },
                  { x: 320, y: 70 },
                  { x: 60, y: 220 },
                  { x: 340, y: 220 },
                  { x: 200, y: 260 },
                ].map((pos, i) => (
                  <g key={i}>
                    <line
                      x1="200"
                      y1="150"
                      x2={pos.x}
                      y2={pos.y}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      opacity="0.3"
                    />
                    <rect
                      x={pos.x - 20}
                      y={pos.y - 20}
                      width="40"
                      height="40"
                      rx="8"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <rect
                      x={pos.x - 10}
                      y={pos.y - 10}
                      width="20"
                      height="20"
                      rx="4"
                      fill="currentColor"
                      opacity="0.8"
                    />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </article>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-28 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {[
            {
              title: 'The Polyrepo Reality',
              href: '#polyrepo-reality',
            },
            {
              title: 'What Synthetic Monorepos Provide',
              href: '#what-synthetic-monorepos-provide',
            },
            {
              title: 'How It Works',
              href: '#how-it-works',
            },
            {
              title: 'AI Agents Across Boundaries',
              href: '#ai-agents-across-boundaries',
            },
          ].map((card) => (
            <div
              key={card.href}
              className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700"
            >
              <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {card.title}
                </h2>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-4 md:px-6 dark:bg-slate-900">
                <a
                  href={card.href}
                  title={card.title}
                  className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
