const path = require('path');
const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

module.exports = {
  mode: 'jit',
  content: [
    path.join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        'mw-green': '#00BF63',
        'mw-blue': '#004AAD',
      },
      fontWeight: {
        extrabold: '900',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
