import {
  CloudArrowDownIcon,
  CodeBracketIcon,
  CogIcon,
  RectangleStackIcon,
  DocumentArrowDownIcon,
  LightBulbIcon,
  LinkIcon,
  PresentationChartLineIcon,
  ServerIcon,
  SignalIcon,
  ArrowsUpDownIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Local computation caching',
    category: 'Fast',
    icon: DocumentArrowDownIcon,
    anchor: 'local-computation-caching',
  },
  {
    name: 'Local task orchestration',
    category: 'Fast',
    icon: ArrowsUpDownIcon,
    anchor: 'local-task-orchestration',
  },
  {
    name: 'Distributed computation caching',
    category: 'Fast',
    icon: CloudArrowDownIcon,
    anchor: 'distributed-computation-caching',
  },
  {
    name: 'Distributed task execution',
    category: 'Fast',
    icon: RectangleStackIcon,
    anchor: 'distributed-task-execution',
  },
  {
    name: 'Transparent remote execution',
    category: 'Fast',
    icon: ServerIcon,
    anchor: 'transparent-remote-execution',
  },
  {
    name: 'Detecting affected projects/packages',
    category: 'Fast',
    icon: LightBulbIcon,
    anchor: 'detecting-affected-projects-packages',
  },
  {
    name: 'Workspace analysis',
    category: 'Understandable',
    icon: PresentationChartLineIcon,
    anchor: 'workspace-analysis',
  },
  {
    name: 'Dependency graph visualization',
    category: 'Understandable',
    icon: PresentationChartLineIcon,
    anchor: 'dependency-graph-visualization',
  },
  {
    name: 'Code sharing',
    category: 'Manageable',
    icon: CodeBracketIcon,
    anchor: 'source-code-sharing',
  },
  {
    name: 'Consistent tooling',
    category: 'Manageable',
    icon: CommandLineIcon,
    anchor: 'consistent-tooling',
  },
  {
    name: 'Code generation',
    category: 'Manageable',
    icon: CogIcon,
    anchor: 'code-generation',
  },
  {
    name: 'Project constraints and visibility',
    category: 'Manageable',
    icon: SignalIcon,
    anchor: 'explicit-project-constrains',
  },
];

export function MonorepoFeaturesOverview(): JSX.Element {
  return (
    <div
      data-test-id="monorepo-features"
      id="monorepo-features"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Monorepo features
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-features"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Everything you need to make monorepos work.
          </p>
        </div>

        <nav className="px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            What monorepo tools should provide
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-800 dark:text-gray-200">
            Monorepos have a lot of advantages, but to make them work you need
            to have the right tools. As your workspace grows, the tools have to
            help you keep it fast, understandable and manageable.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            {features.map((feature) => (
              <a
                key={feature.anchor}
                href={'#' + feature.anchor}
                title={feature.name}
                className="group relative block overflow-hidden rounded-md bg-slate-100 px-4 py-5 text-gray-800 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 dark:text-gray-200 hover:dark:bg-yellow-500 hover:dark:text-gray-800"
              >
                <div className="relative flex items-center space-x-4">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                  <h3 className="flex flex-grow text-lg font-medium">
                    {feature.name}
                  </h3>
                  <span className="absolute bottom-2.5 right-0 inline-flex items-center rounded-full bg-white bg-opacity-20 px-2.5 py-0.5 text-xs font-medium capitalize">
                    {feature.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
