import cx from 'classnames';
import { settings, useTheme } from './theme-toggle';

export function Header() {
  const [setting, setSetting] = useTheme();

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-800">
      <div
        id="animated-background"
        className="transform-gpu lg:bg-contain bg-clip-border bg-origin-border bg-right bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/header-background.svg)',
        }}
      >
        <header className="relative md:min-h-screen px-4 py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
          <div className="absolute right-4 top-5 space-x-4 text-gray-300 dark:text-gray-600">
            {settings.map((variant) => (
              <button
                key={variant.value}
                className={cx(
                  setting === variant.value
                    ? 'text-gray-200 dark:text-gray-500'
                    : '',
                  'p-1 hover:text-gray-400 transition'
                )}
                title={variant.label}
                onClick={() => setSetting(variant.value)}
              >
                <variant.icon className="w-6 h-6" />
                <span className="sr-only">{variant.label}</span>
              </button>
            ))}
          </div>
          <div className="max-w-max mx-auto">
            <div className="w-full">
              <span className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tighter sm:text-8xl">
                monorepo
              </span>
              <span className="text-3xl font-semibold text-yellow-500 tracking-tight sm:text-5xl">
                .tools
              </span>
            </div>
            <div className="mt-14 flex justify-end">
              <div className="sm:w-2/3 sm:border-l-4 border-yellow-500">
                <h1 className="pl-8 py-3 text-2xl font-normal text-gray-800 dark:text-gray-200">
                  Everything you need to know about monorepos, and the tools to
                  build them.
                </h1>
                <p className="text-right text-xs italic text-gray-500">
                  -{' '}
                  <a
                    href="https://nrwl.io"
                    rel="nofollow"
                    title="Nrwl - Monorepo expertise"
                  >
                    Made with love by Nrwl
                  </a>{' '}
                  <a
                    href="https://nx.dev"
                    rel="nofollow"
                    title="Monorepo build tool"
                  >
                    (the company behind Nx)
                  </a>
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
