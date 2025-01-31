import { LinkIcon } from '@heroicons/react/24/outline';

export function Introduction(): JSX.Element {
  return (
    <div
      data-test-id="understanding-monorepos"
      className="bg-slate-50 dark:bg-slate-800"
    >
      {/* Header */}
      <article className="relative bg-slate-50 pb-32 md:pt-32 dark:bg-slate-800">
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
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h1
                id="understanding-monorepos"
                className="group text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
              >
                TypeScript Monorepos{' '}
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
                As TypeScript projects increasingly become the standard way of
                developing Frontend and Backend applications, the need for
                standardizing project setup has also increased. One way to
                achieve this is to adopt a monorepo in your organization. With
                TypeScript projects however, there are unique challenges that
                can impact your developer experience significantly.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                There are many ways to make your TypeScript monorepo experience,
                so if you have any suggestions and would like to contribute
                them,{' '}
                <a
                  href="https://github.com/nrwl/monorepo.tools?utm_source=monorepo.tools"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-yellow-500 px-1 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
                  title="Contribute to monorepo.tools!"
                >
                  we welcome pull requests to help improve things!
                </a>
              </p>
            </div>
            <svg
              className="mx-auto mt-8 h-auto w-1/2 text-slate-800 antialiased dark:text-white"
              width="250"
              height="250"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_18_4)">
                <path
                  d="M50 5H462C486.853 5 507 25.1472 507 50V462C507 486.853 486.853 507 462 507H50C25.1472 507 5 486.853 5 462V50C5 25.1472 25.1472 5 50 5Z"
                  stroke="currentColor"
                  strokeWidth="10"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M316.939 407.424V457.485C325.077 461.657 334.702 464.785 345.814 466.871C356.926 468.957 368.637 470 380.949 470C392.948 470 404.346 468.853 415.145 466.558C425.944 464.264 435.413 460.483 443.551 455.216C451.689 449.95 458.132 443.066 462.879 434.566C467.626 426.066 470 415.559 470 403.044C470 393.97 468.644 386.018 465.931 379.187C463.218 372.356 459.306 366.281 454.193 360.962C449.081 355.643 442.951 350.871 435.804 346.647C428.657 342.423 420.597 338.434 411.624 334.68C405.051 331.968 399.156 329.335 393.939 326.78C388.722 324.224 384.288 321.617 380.636 318.958C376.984 316.298 374.167 313.482 372.185 310.51C370.203 307.537 369.211 304.174 369.211 300.419C369.211 296.978 370.098 293.875 371.872 291.111C373.646 288.347 376.15 285.975 379.384 283.993C382.619 282.012 386.583 280.473 391.278 279.378C395.974 278.283 401.19 277.736 406.929 277.736C411.102 277.736 415.51 278.049 420.153 278.674C424.796 279.3 429.465 280.265 434.161 281.568C438.842 282.867 443.419 284.515 447.855 286.496C452.289 288.478 456.384 290.772 460.14 293.38V246.604C452.524 243.684 444.203 241.52 435.178 240.112C426.153 238.704 415.797 238 404.112 238C392.217 238 380.949 239.278 370.307 241.833C359.665 244.388 350.301 248.377 342.214 253.8C334.128 259.224 327.738 266.133 323.043 274.529C318.348 282.924 316 292.962 316 304.643C316 319.557 320.304 332.281 328.912 342.815C337.519 353.348 350.587 362.265 368.116 369.566C375.002 372.382 381.419 375.145 387.366 377.857C393.313 380.569 398.452 383.385 402.781 386.305C407.111 389.225 410.528 392.406 413.033 395.848C415.537 399.289 416.789 403.2 416.789 407.581C416.789 410.814 416.006 413.812 414.441 416.576C412.876 419.34 410.502 421.738 407.32 423.772C404.138 425.806 400.173 427.396 395.426 428.543C390.678 429.691 385.123 430.264 378.758 430.264C367.907 430.264 357.161 428.361 346.518 424.554C335.876 420.748 326.016 415.038 316.939 407.424ZM232.78 284.082H297V243H118V284.082H181.906V467H232.78V284.082Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_18_4">
                  <rect width="512" height="512" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </article>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-28 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {/*LINKS*/}
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Project Structure
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                Let's look at strategies for how to best structure a TypeScript
                Monorepo
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 md:px-8 dark:bg-slate-900">
              <a
                href="#project-structure"
                title="Project Structure"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Project Structure<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Path Aliases
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                Move from long path imports to path aliases for your initial
                step
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 md:px-8 dark:bg-slate-900">
              <a
                href="#path-aliases"
                title="Path Aliases"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Path Aliases<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Workspaces
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                Manage your monorepo using your package manager's workspace
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 md:px-8 dark:bg-slate-900">
              <a
                href="#workspaces"
                title="Use package manager's workspace"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Workspaces<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
            <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Project References
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                How TypeScript can assist in optimizing your monorepo
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 md:px-8 dark:bg-slate-900">
              <a
                href="#project-references"
                title="Project References"
                className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Project References<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
