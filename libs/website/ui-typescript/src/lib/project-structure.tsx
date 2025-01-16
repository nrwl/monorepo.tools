import { LinkIcon } from '@heroicons/react/24/outline';

export function ProjectStructure(): JSX.Element {
  return (
    <div
      id="project-structure"
      className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="relative">
          <div className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # Project Structure
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-is-a-monorepo"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Starting off from collocated code and moving towards following best
            practices
          </p>
        </header>

        <article className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100">
              Take your monorepo from just a collection of directories, to well
              defined modules using{' '}
              <mark className="rounded-md bg-yellow-500 px-1">
                Path Aliases
              </mark>
              ,{' '}
              <mark className="rounded-md bg-yellow-500 px-1">Workspaces</mark>,
              and{'  '}
              <mark className="rounded-md bg-yellow-500 px-1">
                Project References
              </mark>
              .
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              By know how each of these concepts work in regards to you
              TypeScript monorepo, you can better organize your codebase and
              keep your builds fast.
            </p>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              aria-hidden="true"
              loading="lazy"
              className="relative mx-auto"
              width={490}
              src="/images/typescript/project-structure.svg"
              alt="monorepo vs polyrepo"
            />
          </div>
        </article>

        <article className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 sm:text-3xl sm:leading-relaxed dark:text-gray-100">
                How your code is shared across a monorepo
              </h2>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                With each of these approaches, what we're really trying to solve
                is how the individual packages in your monorepo are made
                available to each other.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                For instance, if you have app "A" and it is trying to import
                library "B", it can be cumbersome to have to write direct path
                imports to the library. As a project grows, this can be a
                challenge to manage, as well as negatively impacting your build
                times.
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                In addition to this, each approach can impact how TypeScript
                understands your project. From being able to find all the
                references for a symbol across your monorepo, to being able
                provide speedy code completion in your editor.
              </p>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <img
                aria-hidden="true"
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="images/typescript/code-sharing.svg"
                alt="code sharing in monorepos"
              />
            </div>
          </div>
        </article>
        <article className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800">
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              With each of these approaches, what we're really trying to solve
              is how the individual packages in your monorepo are made available
              to each other. If your monorepo is rather new or small and the
              relative connections across each package, you might feel confident
              with using direct imports (directly importing modules using
              relative paths), but as your monorepo eventually grows the need
              for well-defined modules will increase.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
