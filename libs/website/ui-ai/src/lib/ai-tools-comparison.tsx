import { ReactComponentElement } from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  MinusIcon,
  QuestionMarkCircleIcon,
  LinkIcon,
  CircleStackIcon,
  PresentationChartLineIcon,
  CubeTransparentIcon,
  BoltIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const Supported = () => (
  <span
    title="natively supported"
    className="mr-3 inline-flex items-center rounded-full text-green-600"
  >
    <CheckCircleIcon className="h-5 w-5" />
    <span className="sr-only">natively supported</span>
  </span>
);
const NotSupported = () => (
  <span
    title="not supported"
    className="mr-3 inline-flex items-center rounded-full text-red-600"
  >
    <XCircleIcon className="h-5 w-5" />
    <span className="sr-only">not supported</span>
  </span>
);
const CommunitySupported = () => (
  <span
    title="community implementation"
    className="mr-3 inline-flex items-center rounded-full text-yellow-600"
  >
    <ExclamationCircleIcon className="h-5 w-5" />
    <span className="sr-only">community implementation</span>
  </span>
);

type SupportLevel =
  | 'yes'
  | 'no'
  | 'planned'
  | 'basic'
  | 'comprehensive'
  | 'none'
  | 'official'
  | 'community';

interface Tool {
  name: string;
  organization: string;
  organizationUrl: string;
  aiIntegration: {
    overallSupport: SupportLevel;
  };
  mcpImplementation: {
    serverAvailable: SupportLevel;
    installationMethod: string;
  };
  aiConfigFiles: {
    available: SupportLevel;
  };
  coreCapabilities: {
    workspaceAnalysis: boolean;
    projectManagement: boolean;
    taskExecution: boolean;
  };
  extendedCapabilities: string[];
  ciIntegration: {
    aiPoweredCI: SupportLevel;
    features: string[];
  };
  maintenance: {
    communityActivity: SupportLevel;
  };
}

const tools: Tool[] = [
  {
    name: 'Bazel',
    organization: 'by Google',
    organizationUrl: 'https://bazel.build/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'basic',
    },
    mcpImplementation: {
      serverAvailable: 'community',
      installationMethod: 'npm package (nacgarg/bazel-mcp-server)',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: true,
      projectManagement: true,
      taskExecution: true,
    },
    extendedCapabilities: ['Dependency Analysis', 'VCS Integration'],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'basic',
    },
  },
  {
    name: 'Gradle',
    organization: 'by Gradle, Inc',
    organizationUrl: 'https://gradle.org/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'basic',
    },
    mcpImplementation: {
      serverAvailable: 'community',
      installationMethod: 'JAR execution (IlyaGulya/gradle-mcp-server)',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: true,
      projectManagement: true,
      taskExecution: true,
    },
    extendedCapabilities: ['Test Execution', 'Build Environment Analysis'],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'basic',
    },
  },
  {
    name: 'Lage',
    organization: 'by Microsoft',
    organizationUrl: 'https://microsoft.com/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'none',
    },
    mcpImplementation: {
      serverAvailable: 'none',
      installationMethod: 'Not available',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: false,
      projectManagement: false,
      taskExecution: false,
    },
    extendedCapabilities: [],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'none',
    },
  },
  {
    name: 'Lerna',
    organization: 'maintained by Nx team',
    organizationUrl: 'https://nrwl.io/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'none',
    },
    mcpImplementation: {
      serverAvailable: 'none',
      installationMethod: 'Not available',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: false,
      projectManagement: false,
      taskExecution: false,
    },
    extendedCapabilities: [],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'none',
    },
  },
  {
    name: 'moon',
    organization: 'by moonrepo',
    organizationUrl: 'https://moonrepo.dev/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'comprehensive',
    },
    mcpImplementation: {
      serverAvailable: 'official',
      installationMethod: 'CLI command (moon mcp)',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: true,
      projectManagement: true,
      taskExecution: true,
    },
    extendedCapabilities: [
      'VCS Integration',
      'Workspace Synchronization',
      'Dependency Management',
    ],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'comprehensive',
    },
  },
  {
    name: 'Nx',
    organization: 'by Nrwl',
    organizationUrl: 'https://nrwl.io/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'comprehensive',
    },
    mcpImplementation: {
      serverAvailable: 'official',
      installationMethod: 'npm package (npx nx-mcp)',
    },
    aiConfigFiles: {
      available: 'yes',
    },
    coreCapabilities: {
      workspaceAnalysis: true,
      projectManagement: true,
      taskExecution: true,
    },
    extendedCapabilities: [
      'Documentation Access',
      'Code Generation',
      'IDE Integration',
      'Cloud Analytics',
      'Performance Insights',
      'AI-Powered CI/CD',
    ],
    ciIntegration: {
      aiPoweredCI: 'comprehensive',
      features: [
        'AI-Powered PR fixes',
        'Conversational CI Analytics',
        'Nx Cloud AI: Explain with AI',
      ],
    },
    maintenance: {
      communityActivity: 'comprehensive',
    },
  },
  {
    name: 'Pants',
    organization: 'by Pants Build',
    organizationUrl: 'https://pantsbuild.org/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'none',
    },
    mcpImplementation: {
      serverAvailable: 'none',
      installationMethod: 'Not available',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: false,
      projectManagement: false,
      taskExecution: false,
    },
    extendedCapabilities: [],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'none',
    },
  },
  {
    name: 'Rush',
    organization: 'by Microsoft',
    organizationUrl: 'https://rushjs.io/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'comprehensive',
    },
    mcpImplementation: {
      serverAvailable: 'official',
      installationMethod: 'npm package (@rushstack/mcp-server)',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: true,
      projectManagement: true,
      taskExecution: true,
    },
    extendedCapabilities: [
      'Documentation Access',
      'Conflict Resolution',
      'Project Migration',
      'Command Validation',
    ],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'comprehensive',
    },
  },
  {
    name: 'Turborepo',
    organization: 'by Vercel',
    organizationUrl: 'https://turbo.build/?utm_source=monorepo.tools',
    aiIntegration: {
      overallSupport: 'none',
    },
    mcpImplementation: {
      serverAvailable: 'none',
      installationMethod: 'Not available',
    },
    aiConfigFiles: {
      available: 'none',
    },
    coreCapabilities: {
      workspaceAnalysis: false,
      projectManagement: false,
      taskExecution: false,
    },
    extendedCapabilities: [],
    ciIntegration: {
      aiPoweredCI: 'none',
      features: [],
    },
    maintenance: {
      communityActivity: 'none',
    },
  },
];

const supportLevelDisplay: Record<
  SupportLevel,
  () => ReactComponentElement<any>
> = {
  yes: () => (
    <span
      title="Yes"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-green-600"
    >
      <CheckCircleIcon className="h-4 w-4" />
      <span className="sr-only">Yes</span>
    </span>
  ),
  no: () => (
    <span
      title="No"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-slate-400"
    >
      <MinusIcon className="h-4 w-4" />
      <span className="sr-only">No</span>
    </span>
  ),
  planned: () => (
    <span
      title="Planned"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-yellow-600"
    >
      <ExclamationCircleIcon className="h-4 w-4" />
      <span className="sr-only">Planned</span>
    </span>
  ),
  basic: () => (
    <span
      title="Basic"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-yellow-600"
    >
      <ExclamationCircleIcon className="h-4 w-4" />
      <span className="sr-only">Basic</span>
    </span>
  ),
  comprehensive: () => (
    <span
      title="Comprehensive"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-green-600"
    >
      <CheckCircleIcon className="h-4 w-4" />
      <span className="sr-only">Comprehensive</span>
    </span>
  ),
  none: () => (
    <span
      title="None"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-slate-400"
    >
      <MinusIcon className="h-4 w-4" />
      <span className="sr-only">None</span>
    </span>
  ),
  official: () => (
    <span
      title="Official"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-green-600"
    >
      <CheckCircleIcon className="h-4 w-4" />
      <span className="sr-only">Official</span>
    </span>
  ),
  community: () => (
    <span
      title="Community"
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-yellow-600"
    >
      <ExclamationCircleIcon className="h-4 w-4" />
      <span className="sr-only">Community</span>
    </span>
  ),
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function AIToolsComparison(): JSX.Element {
  return (
    <div
      data-test-id="ai-tools-comparison"
      id="ai-tools-comparison"
      className="bg-slate-50 dark:bg-slate-800"
    >
      <div className="relative">
        <div className="relative mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <div className="group text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            <span className="block lg:inline">AI Support</span>
            <span className="block lg:inline"> in Monorepo Tools</span>
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-tools-comparison"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Current AI agent integration capabilities across monorepo tools.
          </p>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* MCP Support */}
        <div
          id="mcp-support"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CircleStackIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 sm:text-2xl sm:leading-relaxed dark:text-gray-200">
              Model Context Protocol (MCP) Support
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#mcp-support"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Native support for Model Context Protocol (MCP) servers that
              enable AI agents to access structured workspace information
              and execute tool-specific operations.
            </p>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community-maintained MCP servers available (
                <a
                  href="https://github.com/nacgarg/bazel-mcp-server"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  nacgarg/bazel-mcp-server
                </a>{' '}
                and{' '}
                <a
                  href="https://github.com/aaomidi/bazel-mcp"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  aaomidi/bazel-mcp
                </a>
                ) providing build, test, and dependency analysis capabilities.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Gradle
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community MCP server (
                <a
                  href="https://github.com/IlyaGulya/gradle-mcp-server"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  IlyaGulya/gradle-mcp-server
                </a>
                ) with project information, task execution, and test running
                capabilities.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No MCP server implementation available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No MCP server implementation available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> moon
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Official MCP server via CLI command (
                <a
                  href="https://moonrepo.dev/docs/guides/mcp"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  moon mcp
                </a>
                ) with comprehensive project and task management, workspace
                synchronization, and VCS integration.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Official MCP server (
                <a
                  href="https://nx.dev/features/enhance-AI"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  npx nx-mcp
                </a>
                ) with the most comprehensive AI integration including
                documentation access, code generation, IDE integration, and
                cloud analytics.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Pants
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No MCP server implementation available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Official MCP server (
                <a
                  href="https://www.npmjs.com/package/@rushstack/mcp-server"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  @rushstack/mcp-server
                </a>
                ) with workspace analysis, project migration, conflict
                resolution, and command validation capabilities.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No MCP server implementation available.
              </dd>
            </div>
          </dl>
        </div>

        {/* Workspace Analysis */}
        <div
          id="ai-workspace-analysis"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <PresentationChartLineIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 sm:text-2xl sm:leading-relaxed dark:text-gray-200">
              Workspace Analysis for AI
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-workspace-analysis"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability to provide AI agents with structured workspace
              understanding including project relationships, dependency graphs,
              and overall architecture insights.
            </p>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community MCP servers provide target querying, dependency
                analysis, and build structure understanding.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Gradle
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community MCP server offers project structure analysis and build
                environment insights.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI workspace analysis capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI workspace analysis capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> moon
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Comprehensive workspace analysis including project
                relationships, task dependencies, and VCS integration for change
                detection.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Advanced workspace analysis with project graph visualization,
                filtering capabilities, and real-time workspace monitoring for
                AI agents.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Pants
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI workspace analysis capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Detailed workspace topology analysis with project dependency
                mapping and structured data optimized for AI consumption.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI workspace analysis capabilities available.
              </dd>
            </div>
          </dl>
        </div>

        {/* Project Data */}
        <div
          id="ai-project-data"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CubeTransparentIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 sm:text-2xl sm:leading-relaxed dark:text-gray-200">
              Project Data & Metadata Access
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-project-data"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Access to structured project-level information including
              configurations, dependencies, technology stacks, and ownership
              details for AI analysis and recommendations.
            </p>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community implementations provide target information, dependency
                relationships, and source file associations.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Gradle
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community MCP server provides project details, build environment
                information, and task configurations.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI project data access capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI project data access capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> moon
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Detailed project metadata including configurations, task
                definitions, and dependency relationships with optional
                recursive dependency fetching.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Comprehensive project details including complete configurations,
                external dependencies, fuzzy project matching, and generator
                schemas for project creation.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Pants
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI project data access capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Complete project metadata in structured JSON format including
                package.json content, folder paths, subspace information, and
                Rush-specific metadata.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI project data access capabilities available.
              </dd>
            </div>
          </dl>
        </div>

        {/* Task Execution */}
        <div
          id="ai-task-execution"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <BoltIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 sm:text-2xl sm:leading-relaxed dark:text-gray-200">
              Task Execution & Intelligence
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-task-execution"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The ability for AI agents to understand task definitions,
              execute tasks, monitor progress, and provide intelligent workflow
              recommendations across the workspace.
            </p>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community implementations support build and test execution with
                dependency management and target resolution.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Gradle
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Community MCP server provides task execution with detailed test
                result reporting and hierarchical output management.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI task execution capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI task execution capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> moon
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Task execution with dependency management, workspace
                synchronization, and project-specific task coordination.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Advanced task execution with real-time monitoring, IDE
                integration, generator UI access, and comprehensive task
                dependency analysis for AI optimization suggestions.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Pants
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI task execution capabilities available.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Task execution with command validation, conflict resolution
                capabilities, and automated lockfile management for streamlined
                AI-driven operations.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                No AI task execution capabilities available.
              </dd>
            </div>
          </dl>
        </div>

        {/* Extended Capabilities */}
        <div
          id="ai-extended-capabilities"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 sm:text-2xl sm:leading-relaxed dark:text-gray-200">
              Extended AI Capabilities
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#ai-extended-capabilities"
                className="inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Advanced AI integration features that go beyond core workspace,
              project, and task capabilities, offering specialized functionality
              for enhanced developer productivity.
            </p>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Deep dependency graph analysis with reverse dependency tracking,
                precise source file association, and intelligent target
                resolution for complex build scenarios across multiple community
                implementations.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <CommunitySupported /> Gradle
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Sophisticated test execution with hierarchical result reporting,
                intelligent output filtering to reduce noise, and comprehensive
                build environment analysis for AI-powered optimization
                recommendations.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> moon
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Advanced VCS integration for intelligent change detection,
                automated workspace synchronization capabilities, and dependency
                management with recursive relationship analysis across the
                entire project ecosystem.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Documentation access with contextual search, code generation
                with generator schemas, IDE integration for real-time
                assistance, cloud analytics with performance insights, and
                comprehensive AI-powered CI/CD features including automated PR
                fixes and conversational CI analytics.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Automated conflict resolution for lockfiles, intelligent project
                migration between locations and subspaces, command validation to
                prevent execution errors, and comprehensive workspace topology
                analysis optimized for large-scale enterprise monorepos.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Overview Title */}
      <div className="relative mx-auto mt-32 max-w-xl lg:mt-40 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            id="ai-capabilities-overview"
            className="group text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100"
          >
            Overview
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#ai-capabilities-overview"
              className="inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
        </div>
      </div>

      {/* Mobile view */}
      <section className="lg:hidden">
        <div className="mx-auto max-w-2xl space-y-16 px-4 py-16 sm:px-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="border-t border-slate-100 dark:border-slate-900"
            >
              <div className="-mt-px border-t-2 pt-6">
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {tool.name}{' '}
                  <span className="ml-2 text-xs font-normal">
                    ({tool.organization})
                  </span>
                </h3>
              </div>

              <div className="mt-10 space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    AI Integration Level
                  </h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Overall Support
                      </span>
                      {supportLevelDisplay[tool.aiIntegration.overallSupport]()}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    MCP Implementation
                  </h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        MCP Server
                      </span>
                      {supportLevelDisplay[
                        tool.mcpImplementation.serverAvailable
                      ]()}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    AI Config Files
                  </h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Available
                      </span>
                      {supportLevelDisplay[tool.aiConfigFiles.available]()}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Core Capabilities
                  </h4>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Workspace Analysis
                      </span>
                      {tool.coreCapabilities.workspaceAnalysis ? (
                        <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      ) : (
                        <MinusIcon className="h-4 w-4 text-slate-400" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Project Management
                      </span>
                      {tool.coreCapabilities.projectManagement ? (
                        <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      ) : (
                        <MinusIcon className="h-4 w-4 text-slate-400" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Task Execution
                      </span>
                      {tool.coreCapabilities.taskExecution ? (
                        <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      ) : (
                        <MinusIcon className="h-4 w-4 text-slate-400" />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Extended Capabilities
                  </h4>
                  <div className="mt-4 space-y-2">
                    {tool.extendedCapabilities.length > 0 ? (
                      tool.extendedCapabilities.map((capability, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircleIcon className="mr-2 h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {capability}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center">
                        <MinusIcon className="mr-2 h-4 w-4 text-slate-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          No extended capabilities available
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop view */}
      <section className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="py-3 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tool
                  </th>
                  <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    AI Integration Level
                  </th>
                  <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    MCP Server
                  </th>
                  <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    AI Config Files
                  </th>
                  <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    Workspace Analysis
                  </th>
                  <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Management
                  </th>
                  <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    Task Execution
                  </th>
                  <th className="px-3 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    Extended Capabilities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {tools.map((tool) => (
                  <tr
                    key={tool.name}
                    className="hover:bg-slate-100 dark:hover:bg-slate-700/50"
                  >
                    <td className="py-4 pr-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {tool.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {tool.organization}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center">
                      {supportLevelDisplay[tool.aiIntegration.overallSupport]()}
                    </td>
                    <td className="px-3 py-4 text-center">
                      {supportLevelDisplay[
                        tool.mcpImplementation.serverAvailable
                      ]()}
                    </td>
                    <td className="px-3 py-4 text-center">
                      {supportLevelDisplay[tool.aiConfigFiles.available]()}
                    </td>
                    <td className="px-3 py-4 text-center">
                      {tool.coreCapabilities.workspaceAnalysis ? (
                        <CheckCircleIcon className="mx-auto h-5 w-5 text-green-600" />
                      ) : (
                        <MinusIcon className="mx-auto h-5 w-5 text-slate-400" />
                      )}
                    </td>
                    <td className="px-3 py-4 text-center">
                      {tool.coreCapabilities.projectManagement ? (
                        <CheckCircleIcon className="mx-auto h-5 w-5 text-green-600" />
                      ) : (
                        <MinusIcon className="mx-auto h-5 w-5 text-slate-400" />
                      )}
                    </td>
                    <td className="px-3 py-4 text-center">
                      {tool.coreCapabilities.taskExecution ? (
                        <CheckCircleIcon className="mx-auto h-5 w-5 text-green-600" />
                      ) : (
                        <MinusIcon className="mx-auto h-5 w-5 text-slate-400" />
                      )}
                    </td>
                    <td className="px-3 py-4 text-center">
                      <div className="mx-auto max-w-40 space-y-1">
                        {tool.extendedCapabilities.length > 0 ? (
                          tool.extendedCapabilities.map((capability, index) => (
                            <div key={index} className="text-xs text-green-600">
                              {capability}
                            </div>
                          ))
                        ) : (
                          <div className="text-xs text-slate-400">None</div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto mt-8 max-w-7xl text-xs">
            <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
              <div>
                <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Legend
                </h4>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div className="flex items-center">
                    <CheckCircleIcon className="mr-1 h-4 w-4 text-green-600" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Available/Supported
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ExclamationCircleIcon className="mr-1 h-4 w-4 text-yellow-600" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Basic/Community
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MinusIcon className="mr-1 h-4 w-4 text-slate-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Not Available
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  AI Integration Levels
                </h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <CheckCircleIcon className="mr-1 h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-600">
                      Comprehensive:{' '}
                    </span>
                    Full-featured AI integration with official support
                  </div>
                  <div className="flex items-center">
                    <ExclamationCircleIcon className="mr-1 h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-yellow-600">Basic: </span>
                    Limited AI features or community-driven solutions
                  </div>
                  <div className="flex items-center">
                    <MinusIcon className="mr-1 h-4 w-4 text-slate-400" />
                    <span className="font-medium text-slate-400">None: </span>
                    No AI agent integration available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
