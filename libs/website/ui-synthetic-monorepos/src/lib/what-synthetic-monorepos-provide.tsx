'use client';
import { LinkIcon } from '@heroicons/react/24/outline';
import { SyntheticMonorepoAnimation } from './synthetic-monorepo-animation';

const pillars = [
  {
    title: 'Cross-repo dependency graph',
    detail:
      'The backbone of a synthetic monorepo. Automatically maps how repositories connect: which repo depends on which, what a change affects downstream, and how projects relate across teams.',
  },
  {
    title: 'Governance across boundaries',
    detail:
      'With the graph in place, platform teams can assess the state of any repo in context: run impact analysis before a change and enforce conformance rules across boundaries.',
  },
  {
    title: 'AI agent enablement',
    detail:
      'The graph exposes metadata that lets agents see beyond individual repo boundaries. Instead of operating at a local maximum within a single repo, agents read cross-repo relationships and perform coordinated changes.',
  },
];

export function WhatSyntheticMonoreposProvide(): JSX.Element {
  return (
    <div
      id="what-synthetic-monorepos-provide"
      className="overflow-hidden bg-white py-16 lg:py-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # What a Synthetic Monorepo Provides
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-synthetic-monorepos-provide"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            A synthetic monorepo{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              connects separate repositories into a unified dependency graph
            </mark>{' '}
            without moving any code. The isolated islands from before become a
            connected system that both humans and AI agents can reason about.
          </p>
        </div>

        {/* Connected animation */}
        <div className="mx-auto mt-12 hidden max-w-2xl md:block lg:mt-16">
          <SyntheticMonorepoAnimation />
        </div>

        {/* Three pillars */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-slate-200 bg-slate-50 p-5 dark:border-black dark:bg-slate-800"
            >
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
