import { LinkIcon } from '@heroicons/react/24/outline';

export function Workspaces(): React.JSX.Element {
  return (
    <div
      id="typescript-path-aliases"
      className="bg-slate-50 px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative">
        <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          # Workspaces
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#workspaces"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
          While path aliases are way to shorten your import statements,
          workspaces allow you to isolate your code in meaningful units
        </p>
      </div>
      <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <h1
            id="mapping-to-a-path"
            className="group text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
          >
            Workspaces at a glance
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#workspaces-at-a-glance"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Workspaces are a built in feature of most JavaScript packages
            managers that allow you to tell the package manager that a certain
            directory contains subprojects. Taking inspiration from tools like{' '}
            <code>lerna</code>, package managers like <code>npm</code>,{' '}
            <code>yarn</code>, and <code>pnpm</code> all provide a way to setup
            a workspace.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 h-full w-full object-cover"
            src="/images/typescript/workspaces.svg"
            alt="project workspaces"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            With workspaces, when your packages manager reads the{' '}
            <code>package.json</code>, it will take any directory in that{' '}
            <code>workspaces</code> and link it to your root{' '}
            <code>node_modules</code>. When your project is being build, the
            build tools can treat things as if it was just another packages
            installed from a package registry. The benefit here is that there is
            no additional overhead that path aliases would introduce.
          </p>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Workspaces however, do require an extra step before the packages can
            be used in your monorepo. Since most packages require some sort of
            build step before being able to consume the code, the monorepo tool
            you choose will have a big impact here. For instance, with Nx, you
            can have the build step of dependent projects be performed before
            you start up the main process. Alternatively, you'd have to build
            the packages manually before starting any other process. Check with
            your monorepo tool to see if they support automatic builds of
            dependencies.
          </p>
        </div>
      </article>
    </div>
  );
}
