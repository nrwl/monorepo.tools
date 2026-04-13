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
      </div>
    </footer>
  );
}

export default Footer;
