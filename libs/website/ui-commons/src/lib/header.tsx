export function Header() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-800">
      <div
        id="animated-background"
        className="transform-gpu lg:bg-contain bg-clip-border bg-origin-border bg-right bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/header-background.svg)',
        }}
      >
        <header className=" min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <div className="w-full">
              <span className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tighter sm:text-8xl">
                monorepo
              </span>
              <span className="text-3xl font-semibold text-blue-500 tracking-tight sm:text-5xl">
                .tools
              </span>
            </div>
            <div className="mt-14 flex justify-end">
              <div className="sm:w-2/3 sm:border-l-4 border-blue-500">
                <h1 className="pl-8 py-3 text-2xl font-normal text-gray-800 dark:text-gray-200">
                  Everything you need to know about monorepos, and the tools to
                  build them.
                </h1>
                <p className="text-right text-xs italic text-gray-500">
                  - Made with love by Nrwl (the company behind Nx)
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
