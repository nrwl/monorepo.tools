export function Footer() {
  return (
    <footer className="mt-24 bg-slate-50 dark:bg-slate-800 lg:mt-36">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <h2 className="sr-only">monorepo.tools</h2>
          <div className="px-5 py-2">
            <a
              href="#what-is-a-monorepo"
              className="text-base text-gray-500 hover:text-gray-700 dark:text-gray-300"
            >
              What is a monorepo?
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#why-a-monorepo"
              className="text-base text-gray-500 hover:text-gray-700 dark:text-gray-300"
            >
              Why a monorepo?
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#monorepo-features"
              className="text-base text-gray-500 hover:text-gray-700 dark:text-gray-300"
            >
              Monorepo features
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2025 Nx
        </p>
      </div>
    </footer>
  );
}

export default Footer;
