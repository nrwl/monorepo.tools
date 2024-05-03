import { LinkIcon } from '@heroicons/react/24/outline';

export function Intro(): JSX.Element {
  return (
    <div
      data-test-id="understanding-monorepos"
      className="mt-4 bg-slate-50 dark:bg-slate-800 md:mt-32"
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
                id="intro"
                className="group text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
              >
                Welcome to Monorepo World 2024{' '}
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#intro"
                  className="flex inline-flex items-center text-gray-900 dark:text-white"
                >
                  <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
                </a>
              </h1>

              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                Monorepo World is the ultimate conference where platform
                architects and tool builders come together to advance the state
                of software development. Join us and share ideas to make
                development faster, more scalable, and more collaborative.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                Monorepo World is an in-person experience, with 2 tracks of
                talks and an exhibition hall. Rub elbows with the teams who
                build the tools that power your platform.
              </p>
            </div>

            <svg
              id="Layer_2"
              viewBox="0 0 882.69 427.7"
              version="1.1"
              className="mx-auto mt-16 h-auto w-2/3 antialiased"
              xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </div>
      </article>
    </div>
  );
}
