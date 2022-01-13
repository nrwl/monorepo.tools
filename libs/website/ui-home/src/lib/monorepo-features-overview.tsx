import {
  ChevronDownIcon,
  CloudDownloadIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  DocumentDownloadIcon,
  HandIcon,
  LightBulbIcon,
  LightningBoltIcon,
  PresentationChartLineIcon,
  ServerIcon,
  SortDescendingIcon,
  StatusOnlineIcon,
  SwitchVerticalIcon,
  TerminalIcon,
} from '@heroicons/react/solid';

const features = [
  {
    name: 'Local computation caching',
    category: 'Fast',
    icon: DocumentDownloadIcon,
    anchor: 'local-computation-caching',
  },
  {
    name: 'Local task orchestration',
    category: 'Fast',
    icon: SwitchVerticalIcon,
    anchor: 'local-task-orchestration',
  },
  {
    name: 'Distributed computation caching',
    category: 'Fast',
    icon: CloudDownloadIcon,
    anchor: 'distributed-computation-caching',
  },
  {
    name: 'Distributed task execution',
    category: 'Fast',
    icon: CollectionIcon,
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
    icon: CodeIcon,
    anchor: 'code-sharing',
  },
  {
    name: 'Consistent tooling',
    category: 'Manageable',
    icon: TerminalIcon,
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
    icon: StatusOnlineIcon,
    anchor: 'explicit-project-constrains',
  },
];

export function MonorepoFeaturesOverview() {
  return (
    <div
      id="monorepo-features"
      className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden lg:py-24"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <div className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Monorepo features
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
            Everything you need to make monorepos work.
          </p>
        </div>

        <nav className="px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            What monorepo tools should provide
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-800 dark:text-gray-200">
            Monorepos have a lot of advantages, but to make them work you need
            to have the right tools. As your workspace growth, the tools has to
            help you keep it fast, understandable and manageable.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.anchor}
                className="relative overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-md px-4 py-5 group"
              >
                <a href={'#' + feature.anchor} title={feature.name}>
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-50 dark:bg-white bg-opacity-95 dark:bg-opacity-5"
                    >
                      <feature.icon
                        className="h-6 w-6 text-gray-800 dark:text-gray-200"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="absolute top-2.5 right-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 dark:bg-white bg-opacity-95 dark:bg-opacity-5 text-gray-700 dark:text-gray-300 capitalize">
                      {feature.category}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {feature.name}
                    </h3>
                  </div>
                  <div className="absolute left-0 -bottom-full w-full h-full flex items-center bg-slate-50/70 dark:bg-slate-900/30 group-hover:bottom-0 transition-all ease-out">
                    <div className="mx-auto p-4 bg-slate-50 dark:bg-slate-800 shadow rounded-full">
                      <span className="sr-only">more details</span>
                      <ChevronDownIcon className="h-6 w-6" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MonorepoFeaturesOverview;
