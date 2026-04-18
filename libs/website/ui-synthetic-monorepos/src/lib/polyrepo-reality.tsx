'use client';
import { LinkIcon } from '@heroicons/react/24/outline';
import { PolyrepoIslandsAnimation } from './polyrepo-islands-animation';

export function PolyrepoReality(): JSX.Element {
  return (
    <div
      id="polyrepo-reality"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # The Polyrepo Reality
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#polyrepo-reality"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Most organizations don&rsquo;t have one giant monorepo. They have a
            handful of monorepos per team, plus dozens of standalone repos. Each
            one is an island.
          </p>
        </div>

        <div className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>For humans</strong>, collaboration, visibility, and
              enforcing common standards across an organization becomes much
              harder. A platform engineer who needs to ensure multiple systems
              work together cohesively has to manually catalog, inspect, and
              cross-reference dozens of repos to make sure things align.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              <strong>For AI agents</strong>, repository boundaries are{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                walls they cannot see across
              </mark>
              . Each agent session only sees one repo. To implement a
              cross-cutting feature, you need separate AI sessions per repo. You
              become the &ldquo;human context bridge,&rdquo; manually
              transferring knowledge between sessions.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <PolyrepoIslandsAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
