import { LinkIcon } from '@heroicons/react/24/outline';
import {
  BookOpenIcon,
  MapIcon,
  BoltIcon,
  DocumentMagnifyingGlassIcon,
  CircleStackIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export function SmartAISolutions(): JSX.Element {
  return (
    <div
      id="smart-ai-solutions"
      className="overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # The Missing Map
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#smart-ai-solutions"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Moving from file-level scanning to semantic workspace understanding
          </p>

          {/* Opening transition from context challenges */}
          <p className="mx-auto mt-8 max-w-4xl text-xl text-gray-700 dark:text-gray-300">
            The solution to context rot and file-level limitations isn't to
            provide less context, it's to{' '}
            <mark className="rounded-md bg-yellow-500 px-1">
              provide the right context at the right level of abstraction
            </mark>
            . Instead of overwhelming AI with thousands of individual files,
            smart monorepo tooling elevates understanding from file-level to
            architectural-level, giving AI the "map view" it needs to navigate
            complex codebases effectively.
          </p>
        </div>

        {/* AI Evolution Transition */}
        <div className="mt-16">
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="text-center">
              <div className="relative">
                <img
                  className="mx-auto rounded-lg shadow-lg"
                  width={400}
                  src="/images/ai/ai-only-seeing-files.avif"
                  alt="Traditional AI agent overwhelmed by scattered individual files, unable to understand project relationships and workspace structure"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                    Basic AI Agent
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center lg:mt-0">
              <div className="relative">
                <img
                  className="mx-auto rounded-lg shadow-lg"
                  width={400}
                  src="/images/ai/ai-seeing-project-graph.avif"
                  alt="Monorepo-aware AI agent viewing a structured project graph with interconnected nodes, understanding workspace architecture and project dependencies"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                    Monorepo-Aware AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Section - Two Column Layout */}
        <div className="relative mx-auto mt-24 max-w-xl lg:mt-36 lg:max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1
              id="connecting-ai-to-monorepo-tools"
              className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
            >
              Teaching AI the Higher-Level Picture
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#connecting-ai-to-monorepo-tools"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h1>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <dl className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="relative">
                <dt>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                    <MapIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Project Graph & Workspace Structure
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  Provides AI with the missing "map view" of workspace structure
                  and relationships, enabling higher-level understanding vs just
                  file-level "street view". This architectural overview directly
                  addresses the "lost in the middle" problem by surfacing
                  relevant connections upfront.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                    <CubeTransparentIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Workspace & Project Metadata
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  Access to project-level information including dependencies
                  with other projects, external dependencies, technology stacks,
                  and ownership details. While this information is technically
                  extractable via file-level search, structured access prevents
                  context rot by avoiding the need to parse and correlate
                  scattered configuration files across large monorepos.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                    <BoltIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Task Intelligence & Monorepo Features
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  Understanding of available tasks, task dependencies, and
                  monorepo-specific features like caching input/outputs,
                  enabling AI to provide optimization suggestions and
                  intelligent workflow recommendations across the entire
                  workspace.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* How to Expose the Right Context - Alternating Layout */}
        <div className="relative mx-auto mt-32 max-w-xl lg:mt-40 lg:max-w-7xl">
          <div className="mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2
                id="expose-right-context"
                className="group mb-8 text-center text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
              >
                How This Works
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#expose-right-context"
                  className="inline-flex items-center text-gray-900 dark:text-white"
                >
                  <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
                </a>
              </h2>
              <img
                className="mx-auto rounded-lg shadow-lg"
                width={400}
                src="/images/ai/ai-connecting-tooling.avif"
                alt="AI agent seamlessly integrating with monorepo tooling through structured protocols, accessing workspace intelligence and architectural insights"
              />
            </div>

            <div className="mt-10 lg:mt-0">
              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                      <CircleStackIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Model Context Protocol (MCP)
                    </p>
                  </dt>
                  <dd className="ml-16 mt-2 text-base text-gray-700 dark:text-gray-300">
                    Protocol for structured workspace access and targeted
                    information retrieval.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                      <DocumentMagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      AI Configuration & Rules Files
                    </p>
                  </dt>
                  <dd className="ml-16 mt-2 text-base text-gray-700 dark:text-gray-300">
                    Configuration files that instruct AI how to use monorepo
                    tooling effectively.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
                      <CommandLineIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Agent Experience (Ax)
                    </p>
                  </dt>
                  <dd className="ml-16 mt-2 text-base text-gray-700 dark:text-gray-300">
                    CLI tools with discoverable commands and structured output
                    for autonomous AI exploration.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
