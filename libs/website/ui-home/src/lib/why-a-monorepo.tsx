import { LinkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const taxItems = [
  {
    polyrepo: {
      title: 'Cumbersome code sharing',
      detail:
        'Sharing code across repos means setting up a dedicated repository, CI, package publishing, and version management. Consumers must reconcile incompatible versions of shared dependencies. The overhead discourages sharing in the first place.',
    },
    monorepo: {
      title: 'Share code without publishing overhead',
      detail:
        'No versioned packages needed when all consumers are in the same repo. Sharing a new library is as simple as creating a folder. Existing CI handles everything.',
    },
  },
  {
    polyrepo: {
      title: 'Significant code duplication',
      detail:
        'When sharing is too costly, teams reimplement common services and components in each repo. This multiplies maintenance, security patching, and quality control across every copy.',
    },
    monorepo: {
      title: 'Single source of truth',
      detail:
        'Common services and components live in one place. Fix a bug once, every consumer gets the fix. No copies to track down.',
    },
  },
  {
    polyrepo: {
      title: 'Costly cross-repo changes',
      detail:
        'A bug in a shared library means multiple PRs across disconnected histories, sequenced merges, and compatibility gymnastics: beta releases, consumer upgrades, stable releases, repeat.',
    },
    monorepo: {
      title: 'Atomic commits across projects',
      detail:
        'Everything works together at every commit. A breaking change in a shared library and the fix in every consumer land in the same PR. No sequenced merges, no compatibility dance.',
    },
  },
  {
    polyrepo: {
      title: 'Hard to enforce conventions',
      detail:
        'Each repo makes its own choices about tooling, dependencies, code structure, and documentation. Enforcing organizational standards means maintaining separate configs and review processes per repo. Drift is the default.',
    },
    monorepo: {
      title: 'Enforceable conventions at scale',
      detail:
        'Organizational rules live in one place and apply everywhere: code style, dependency policies, repo structure, documentation standards. Tooling can enforce constraints automatically. Consistency is the default.',
    },
  },
];

function PulsingDot({
  color,
}: {
  color: 'red' | 'green';
}): JSX.Element {
  const bg = color === 'red' ? 'bg-red-500' : 'bg-green-500';
  const ring =
    color === 'red' ? 'bg-red-400 dark:bg-red-500' : 'bg-green-400 dark:bg-green-500';
  return (
    <span className="relative mt-2 flex h-2 w-2 shrink-0">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-50 ${ring}`}
      />
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${bg}`}
      />
    </span>
  );
}

function TaxRow({
  polyrepo,
  monorepo,
}: {
  polyrepo: { title: string; detail: string };
  monorepo: { title: string; detail: string };
}): JSX.Element {
  const [activePopover, setActivePopover] = useState<
    'polyrepo' | 'monorepo' | null
  >(null);

  return (
    <div className="grid gap-x-8 gap-y-2 lg:grid-cols-2">
      {/* Polyrepo item */}
      <div
        className="group relative flex items-start gap-3 py-2"
        onMouseEnter={() => setActivePopover('polyrepo')}
        onMouseLeave={() => setActivePopover(null)}
      >
        <PulsingDot color="red" />
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 lg:hidden">
            Polyrepo
          </span>
          <p className="cursor-default text-lg font-medium text-gray-800 dark:text-gray-200">
            {polyrepo.title}
          </p>
          {/* Popover */}
          {activePopover === 'polyrepo' && (
            <div className="absolute left-0 top-full z-10 mt-1 w-80 rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:w-96">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {polyrepo.detail}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Monorepo item */}
      <div
        className="group relative flex items-start gap-3 py-2"
        onMouseEnter={() => setActivePopover('monorepo')}
        onMouseLeave={() => setActivePopover(null)}
      >
        <PulsingDot color="green" />
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 lg:hidden">
            Monorepo
          </span>
          <p className="cursor-default text-lg font-medium text-gray-800 dark:text-gray-200">
            {monorepo.title}
          </p>
          {/* Popover */}
          {activePopover === 'monorepo' && (
            <div className="absolute left-0 top-full z-10 mt-1 w-80 rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:w-96">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {monorepo.detail}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function WhyAMonorepo(): JSX.Element {
  return (
    <div
      data-test-id="why-a-monorepo"
      id="why-a-monorepo"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # The Polyrepo Tax
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#why-a-monorepo"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          Isolation buys autonomy. But autonomy has a compounding cost.
        </p>
      </div>

      {/* Intro */}
      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1
              id="polyrepo-concept"
              className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
            >
              A &ldquo;Polyrepo&rdquo;
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#polyrepo-concept"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h1>
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
              The opposite of a monorepo is often called a
              &ldquo;polyrepo&rdquo;: each team or application lives in{' '}
              <b className="text-gray-900 dark:text-white">
                its own repository
              </b>
              , with its own dependencies, tooling, build artifact, and CI
              pipeline.
            </p>
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
              Organizations adopt polyrepos to give teams{' '}
              <b className="text-gray-900 dark:text-white">autonomy</b>:
              independent choices about libraries, release cadence, and
              contribution rules. But this autonomy comes through{' '}
              <b className="text-gray-900 dark:text-white">isolation</b>, and
              isolation doesn&apos;t eliminate the need for integration.{' '}
              <b className="text-gray-900 dark:text-white">
                It just delays it.
              </b>{' '}
              Shared contracts still need to align. Breaking changes still need
              coordinating. The feedback just arrives{' '}
              <b className="text-gray-900 dark:text-white">
                later in the development cycle
              </b>
              , when it&apos;s harder and more expensive to act on.
            </p>
          </div>
          <div>
            <img
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover"
              src="/images/polyrepo-practice.svg"
              alt="polyrepo practice"
            />
          </div>
        </div>

        {/* Side-by-side comparison */}
        <div className="mx-auto mt-16 max-w-4xl">
          {/* Column headers — hidden on mobile where inline labels are shown */}
          <div className="mb-6 hidden gap-x-8 lg:grid lg:grid-cols-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Polyrepo
            </h3>
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
              Monorepo
            </h3>
          </div>

          {/* Divider */}
          <div className="mb-4 hidden border-t border-slate-200 dark:border-slate-700 lg:block" />

          {/* Rows */}
          <div className="space-y-2">
            {taxItems.map((item, index) => (
              <TaxRow
                key={index}
                polyrepo={item.polyrepo}
                monorepo={item.monorepo}
              />
            ))}
          </div>
        </div>

        {/* AI bridge callout */}
        <div className="mt-16">
          <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
            <div className="px-6 pt-10 pb-12 text-center sm:px-16 sm:pt-16 lg:py-16 xl:py-20 xl:px-20">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                The Polyrepo Tax gets worse with AI
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-gray-700 dark:text-gray-300">
                Repo boundaries act as walls for both humans and AI assistants.
                An AI agent cannot see beyond the repo boundary and has to rely
                on specs and docs rather than the actual implementation.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
