import {
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
    name: 'Code boundaries',
    category: 'Management',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HandIcon,
  },
  {
    name: 'Code sharing',
    category: 'Management',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CodeIcon,
  },
  {
    name: 'Consistent tooling',
    category: 'Management',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: TerminalIcon,
  },
  {
    name: 'Dependency graph visualization',
    category: 'Workspace',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Detecting affected projects/packages',
    category: 'Workspace',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LightBulbIcon,
  },
  {
    name: 'Local task coordination',
    category: 'Tasks',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: SwitchVerticalIcon,
  },
  {
    name: 'Local computation caching',
    category: 'Tasks',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: DocumentDownloadIcon,
  },
  {
    name: 'Distributed computation caching',
    category: 'Tasks',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CloudDownloadIcon,
  },
  {
    name: 'Distributed task execution',
    category: 'Tasks',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CollectionIcon,
  },
  {
    name: 'Transparent remote execution',
    category: 'Tasks',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
  {
    name: 'Performance',
    category: 'Scalability',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Code generation',
    category: 'Scalability',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CogIcon,
  },
  {
    name: 'Explicit project constrains',
    category: 'Scalability',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: StatusOnlineIcon,
  },
  {
    name: 'Enforcing code style',
    category: 'Scalability',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: SortDescendingIcon,
  },
];

export function MonorepoFeaturesOverview() {
  return (
    <div className="py-16 bg-slate-800 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
            # Monorepo features
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>

        <div className="px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Inbox support built for efficiency
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis
            in.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-slate-900 rounded-md px-4 py-5"
              >
                <div className="relative">
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-5">
                    <feature.icon
                      className="h-6 w-6 text-gray-200"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="absolute top-2.5 right-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white bg-opacity-5 text-gray-300 capitalize">
                    {feature.category}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-200">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-300">
                    {feature.description}
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

export default MonorepoFeaturesOverview;
