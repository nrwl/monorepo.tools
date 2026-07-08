export function Footer() {
  return (
    <footer className="mt-24 bg-slate-50 lg:mt-36 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2026{' '}
          <a href="https://nx.dev" title="Nx">
            Nx
          </a>{' '}
          and <a href="#monorepo-contributors">Contributors</a>
        </p>
        <p className="mt-3 text-center text-sm text-gray-400">
          Check out our sibling site{' '}
          <a
            href="https://metaharness.tools?utm_source=monorepo.tools"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-yellow-500 transition hover:rounded hover:bg-yellow-500 hover:text-gray-800"
          >
            metaharness.tools
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
