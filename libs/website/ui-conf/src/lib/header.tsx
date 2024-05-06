import { useEffect, useState } from 'react';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import cx from 'classnames';

export function Header() {
  const settings = [
    {
      value: 'light',
      label: 'Light',
      icon: SunIcon,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: MoonIcon,
    },
    {
      value: 'system',
      label: 'System',
      icon: ComputerDesktopIcon,
    },
  ];
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-800">
      <div
        id="animated-background"
        className="transform-gpu bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/header-background.svg)',
          backgroundSize: '1200px 600px',
        }}
      >
        <header className="relative px-8 md:grid md:min-h-screen">
          <div className="dark:text-gray-30 flex h-24 w-full items-center justify-between text-xl text-gray-700">
            <svg
              id="Layer_2"
              viewBox="0 0 882.69 427.7"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24"
            >
              <defs id="defs4">
                <linearGradient
                  id="linear-gradient"
                  x1="489.26999"
                  y1="261.78"
                  x2="393.42001"
                  y2="165.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" id="stop1" />
                  <stop offset="1" stopColor="#223f99" id="stop2" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="441.35001"
                  y1="309.70999"
                  x2="441.35001"
                  y2="118"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00bf63" id="stop3" />
                  <stop offset="1" stopColor="#004aad" id="stop4" />
                </linearGradient>
                <style id="style4">
                  {
                    '.cls-1,.cls-2{stroke:#004aad;fill:none;stroke-miterlimit:10;stroke-width:20px}.cls-2{stroke:#00bf63}'
                  }
                </style>
              </defs>
              <g id="Layer_1-2">
                <path
                  style={{
                    fill: 'url(#linear-gradient)',
                    stroke: 'url(#linear-gradient-2)',
                    strokeWidth: '20px',
                    strokeMiterlimit: '10',
                  }}
                  d="M 441.35,118 V 309.71"
                  id="path4"
                />
                <path className="cls-1" d="M 73.88,118 V 407.62" id="path5" />
                <circle
                  className="cls-1"
                  cx="73.879997"
                  cy="64.919998"
                  r="53.080002"
                  id="circle5"
                />
                <circle
                  className="cls-1"
                  cx="441.35001"
                  cy="64.919998"
                  r="53.080002"
                  id="circle6"
                />
                <path
                  className="cls-1"
                  d="m 116.17,101.97 102.74,90.88"
                  id="path6"
                />
                <circle
                  className="cls-1"
                  cx="256.79001"
                  cy="230.00999"
                  r="53.080002"
                  id="circle7"
                />
                <path
                  className="cls-1"
                  d="M 402.15,101.97 299.41,192.85"
                  id="path7"
                />
                <path
                  style={{ fill: '#004aad', strokeWidth: '0' }}
                  d="m 0,353.44 13.86,-12.82 60.02,57.54 58.98,-57.54 13.6,12.82 -72.58,74.26 z"
                  id="path8"
                />
                <path
                  className="cls-2"
                  d="M 809.46,304.43 V 14.81"
                  id="path9"
                />
                <circle
                  className="cls-2"
                  cx="808.81"
                  cy="362.79001"
                  r="53.080002"
                  id="circle9"
                />
                <circle
                  className="cls-2"
                  cx="441.35001"
                  cy="362.79001"
                  r="53.080002"
                  id="circle10"
                />
                <path
                  className="cls-2"
                  d="M 766.52,325.74 663.78,234.85"
                  id="path10"
                />
                <circle
                  className="cls-2"
                  cx="625.90002"
                  cy="197.69"
                  r="53.080002"
                  id="circle11"
                />
                <path
                  className="cls-2"
                  d="M 480.54,325.74 583.28,234.85"
                  id="path11"
                />
                <path
                  style={{ fill: '#ffffff', strokeWidth: '0' }}
                  d="M 882.69,74.26 868.83,87.08 808.81,29.54 749.83,87.08 736.24,74.26 808.81,0 Z"
                  id="path12"
                />
                <path
                  style={{ fill: '#00bf63', strokeWidth: '0' }}
                  d="m 735.58,75.67 13.86,12.82 60.02,-57.54 58.98,57.54 13.6,-12.82 -72.58,-74.26 z"
                  id="path13"
                />
              </g>
            </svg>
            <a
              href="https://ti.to/nx-conf/monorepoworld2024"
              className="hover:bg-mw-green hidden h-8 transition hover:rounded hover:text-gray-800 dark:text-gray-200 md:inline"
            >
              Get Your Tickets
            </a>
            <a
              href="https://sessionize.com/monorepo-world"
              className="hover:bg-mw-green hidden transition hover:rounded hover:text-gray-800 dark:text-gray-200 md:inline"
            >
              Call for Proposals
            </a>
            <a
              href="#get-involved"
              className="hover:bg-mw-green hidden transition hover:rounded hover:text-gray-800 dark:text-gray-200 md:inline"
            >
              Become a Sponsor
            </a>
            <div className="min-w-[128px] space-x-4 text-gray-300 dark:text-gray-600">
              {!isMounted
                ? null
                : settings.map((variant) => (
                    <button
                      key={variant.value}
                      className={cx(
                        theme === variant.value ? 'text-green-500' : '',
                        'p-1'
                      )}
                      title={variant.label}
                      onClick={() => setTheme(variant.value)}
                    >
                      <variant.icon className="h-6 w-6" />
                      <span className="sr-only">{variant.label}</span>
                    </button>
                  ))}
            </div>
          </div>

          <div className="mx-auto max-w-max">
            <div data-test-id="website-name" className="w-full">
              <span className="text-mw-blue text-5xl font-extrabold dark:text-white sm:text-8xl">
                monorepo
              </span>
              <span className="text-mw-green ml-2 text-3xl font-semibold tracking-tight sm:text-5xl">
                world
              </span>
            </div>

            <div className="mt-14 flex justify-center md:justify-end">
              <div className="border-mw-green sm:w-2/3 sm:border-l-4">
                <p
                  data-test-id="website-slogan"
                  className="py-3 text-2xl font-bold text-gray-800 dark:text-gray-200 md:pl-8"
                >
                  <span className="">October 7, 2024</span> <br />
                </p>
                <p
                  data-test-id="website-slogan"
                  className="text-l py-3 font-normal text-gray-800 dark:text-gray-200 md:pl-8"
                >
                  Computer History Museum <br />
                  Mountain View, CA
                  <br />
                </p>

                <p className="text-sm italic text-gray-500 md:pl-8">
                  Hosted by{' '}
                  <a
                    href="https://nx.dev"
                    rel="nofollow"
                    title="Monorepo build tool"
                  >
                    Nx
                  </a>
                </p>
              </div>
            </div>
          </div>
          <a
            title="Go to intro"
            href="#intro"
            aria-hidden="true"
            className="absolute left-1/2 bottom-2 -ml-4 hidden lg:block"
          >
            <svg
              className="text-mw-green h-14 w-14 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </header>
      </div>
    </div>
  );
}

export default Header;
