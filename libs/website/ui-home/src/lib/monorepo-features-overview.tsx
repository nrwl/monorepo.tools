import {
  CloudDownloadIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  DocumentDownloadIcon,
  LightBulbIcon,
  LinkIcon,
  PresentationChartLineIcon,
  ServerIcon,
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
    anchor: 'source-code-sharing',
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
          <div className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl group">
            # Monorepo features
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-features"
              className="text-gray-900 dark:text-white flex inline-flex items-center"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
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
            to have the right tools. As your workspace grows, the tools have to
            help you keep it fast, understandable and manageable.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2 lg:mt-16 lg:gap-8">
            {features.map((feature) => (
              <a
                key={feature.anchor}
                href={'#' + feature.anchor}
                title={feature.name}
                className="block px-4 py-5 relative overflow-hidden bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 hover:text-gray-800 hover:dark:text-gray-800 hover:bg-yellow-500 hover:dark:bg-yellow-500 rounded-md transition group"
              >
                <div className="relative flex items-center space-x-4">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                  <h3 className="flex flex-grow text-lg font-medium">
                    {feature.name}
                  </h3>
                  <span className="absolute bottom-2.5 right-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white bg-opacity-20 capitalize">
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

export default MonorepoFeaturesOverview;
