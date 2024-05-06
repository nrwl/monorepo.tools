export function Tickets() {
  return (
    <section className="relative z-10 mx-auto -mt-28 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
        {/*LINKS*/}
        <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
          <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Attend in Person
            </h2>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              Early Bird pricing through May 31!
            </p>
          </div>
          <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8">
            <a
              href="https://ti.to/nx-conf/monorepoworld2024"
              title="Buy tickets"
              className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Buy tickets<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700">
          <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              Livestream access
            </h2>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              Can't join us in-person? Get a Livestream Access ticket for free!
            </p>
          </div>
          <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8">
            <a
              href="https://ti.to/nx-conf/monorepoworld2024"
              title="Get livestream access"
              className="text-sm font-medium uppercase text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Register for livestream access
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tickets;
