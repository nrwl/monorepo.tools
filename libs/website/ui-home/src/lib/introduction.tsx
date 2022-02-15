import { LinkIcon } from '@heroicons/react/solid';

export function Introduction() {
  return (
    <div
      data-test-id="understanding-monorepos"
      className="mt-32 bg-slate-50 dark:bg-slate-800"
    >
      {/* Header */}
      <article className="relative bg-slate-50 pb-32 dark:bg-slate-800 md:pt-64">
        <div className="absolute inset-0">
          <img
            aria-hidden="true"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="cover"
          />
          <div
            className="absolute inset-0 bg-slate-50 mix-blend-lighten dark:bg-slate-800 dark:mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h1
                id="understanding-monorepos"
                className="group text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
              >
                Understanding Monorepos{' '}
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#understanding-monorepos"
                  className="flex inline-flex items-center text-gray-900 dark:text-white"
                >
                  <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
                </a>
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                Monorepos are hot right now, especially among Web developers. We
                created this resource to help developers{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  understand what monorepos are
                </mark>
                ,{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  what benefits
                </mark>
                they can bring, and the{' '}
                <mark className="rounded-md bg-yellow-500 px-1">
                  tools available
                </mark>{' '}
                to make monorepo development delightful.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                There are many great monorepo tools, built by great teams, with
                different philosophies. We do our best to represent each tool
                objectively, and{' '}
                <a
                  href="https://github.com/nrwl/monorepo.tools?utm_source=monorepo.tools"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-yellow-500 px-1 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                  title="Contribute to monorepo.tools!"
                >
                  we welcome pull requests if we got something wrong!
                </a>
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                The tools we'll focus on are:&nbsp;
                <a
                  href="https://bazel.build/?utm_source=monorepo.tools"
                  rel="noreferrer"
                  target="_blank"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Bazel (by Google)
                </a>
                , &nbsp;
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://microsoft.github.io/lage/?utm_source=monorepo.tools"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Lage (by Microsoft)
                </a>
                , &nbsp;
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lerna.js.org/?utm_source=monorepo.tools"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Lerna
                </a>
                ,&nbsp;
                <a
                  href="https://nx.dev/?utm_source=monorepo.tools"
                  rel="noreferrer"
                  target="_blank"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Nx (by Nrwl)
                </a>
                ,&nbsp;
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://rushstack.io/?utm_source=monorepo.tools"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Rush (by Microsoft)
                </a>
                , and&nbsp;
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://turborepo.org/?utm_source=monorepo.tools"
                  className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                >
                  Turborepo (by Vercel)
                </a>
                . We chose these tools because of their usage or recognition in
                the Web development community.
              </p>
            </div>
            <svg
              className="mx-auto mt-16 h-auto w-2/3 text-slate-800 antialiased dark:text-white"
              viewBox="0 0 340 340"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M166.655 289.73C166.655 303.466 155.994 313.58 142.6 313.58C129.206 313.58 118.545 303.466 118.545 289.73C118.545 275.994 129.206 265.88 142.6 265.88C155.994 265.88 166.655 275.994 166.655 289.73ZM128.386 289.73C128.386 298.409 134.126 305.038 142.6 305.038C151.074 305.038 156.814 298.409 156.814 289.73C156.814 281.051 151.074 274.423 142.6 274.423C134.126 274.423 128.386 281.051 128.386 289.73Z"
              />
              <path d="M62.1484 312.965H52.9912V266.017H53.7429L76.636 291.165L99.1874 266.017H100.007V312.965H90.7819V295.539C90.7819 292.395 91.1236 287.407 91.1236 287.407C91.1236 287.407 88.3217 291.507 86.1349 293.967L76.9094 304.286H76.021L66.7954 293.967C64.6086 291.507 61.8068 287.407 61.8068 287.407C61.8068 287.407 62.1484 292.395 62.1484 295.539V312.965Z" />
              <path d="M222.435 313.375H223.392V266.495H214.44V285.971C214.44 289.183 215.055 294.445 215.055 294.445C215.055 294.445 211.843 290.208 209.588 288.09L186.148 266.085H185.191V312.965H194.144V293.489C194.144 290.14 193.46 285.015 193.46 285.015C193.46 285.015 196.672 289.183 198.995 291.37L222.435 313.375Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M288.141 289.73C288.141 303.466 277.481 313.58 264.087 313.58C250.692 313.58 240.032 303.466 240.032 289.73C240.032 275.994 250.692 265.88 264.087 265.88C277.481 265.88 288.141 275.994 288.141 289.73ZM249.872 289.73C249.872 298.409 255.613 305.038 264.087 305.038C272.561 305.038 278.301 298.409 278.301 289.73C278.301 281.051 272.561 274.423 264.087 274.423C255.613 274.423 249.872 281.051 249.872 289.73Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.8997 51.0001C45.8997 34.1002 59.5997 20.4001 76.4997 20.4001C93.3996 20.4001 107.1 34.1002 107.1 51.0001C107.1 57.4336 105.114 63.4035 101.723 68.3303L151.891 111.331C156.961 107.603 163.223 105.4 170 105.4C176.776 105.4 183.038 107.603 188.109 111.332L238.277 68.3303C234.886 63.4035 232.9 57.4336 232.9 51.0001C232.9 34.1002 246.601 20.4001 263.5 20.4001C280.4 20.4001 294.1 34.1002 294.1 51.0001C294.1 66.1624 283.073 78.749 268.6 81.177V217.187L293.894 191.894L301.106 199.106L263.5 236.713L225.894 199.106L233.106 191.894L258.4 217.188V81.177C253.59 80.37 249.161 78.4408 245.39 75.6679L195.222 118.669C198.614 123.596 200.6 129.566 200.6 136C200.6 152.9 186.9 166.6 170 166.6C153.1 166.6 139.4 152.9 139.4 136C139.4 129.566 141.385 123.596 144.778 118.669L94.61 75.6679C90.8393 78.4409 86.4098 80.37 81.5997 81.177V217.188L106.894 191.894L114.106 199.106L76.5 236.713L38.8938 199.106L46.1063 191.894L71.3997 217.187V81.177C56.9273 78.749 45.8997 66.1624 45.8997 51.0001ZM76.4997 30.6001C65.2331 30.6001 56.0997 39.7335 56.0997 51.0001C56.0997 62.2667 65.2331 71.4001 76.4997 71.4001C87.7663 71.4001 96.8997 62.2667 96.8997 51.0001C96.8997 39.7335 87.7663 30.6001 76.4997 30.6001ZM170 115.6C158.733 115.6 149.6 124.733 149.6 136C149.6 147.267 158.733 156.4 170 156.4C181.266 156.4 190.4 147.267 190.4 136C190.4 124.733 181.266 115.6 170 115.6ZM263.5 30.6001C274.767 30.6001 283.9 39.7335 283.9 51.0001C283.9 62.2667 274.767 71.4001 263.5 71.4001C252.234 71.4001 243.1 62.2667 243.1 51.0001C243.1 39.7335 252.234 30.6001 263.5 30.6001Z"
              />
            </svg>
          </div>
        </div>
      </article>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-28 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {/*LINKS*/}
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                What is a monorepo
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                Let's start with a common understanding of what a Monorepo is.
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8">
              <a
                href="#what-is-a-monorepo"
                title="What is a monorepo?"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                What is a monorepo<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Why a monorepo
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                What are the situations solved by monorepos.
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8">
              <a
                href="#why-a-monorepo"
                title="Why using a monorepo?"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Why a monorepo?<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Features of a monorepo
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                What to expect from a monorepo tool
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8">
              <a
                href="#monorepo-features"
                title="What are monorepo features?"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Monorepo features<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
