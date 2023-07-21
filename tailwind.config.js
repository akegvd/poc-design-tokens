const tokens = require('./tokens/tokens');
const kebabCase = require("kebab-case");

const colors = Object.fromEntries(Object
  .values(tokens.color)
  .reduce((acc, modeColors) => [
    ...acc,
    ...Object.values(modeColors).map(({ attributes, value }) => [
      kebabCase(`${attributes.type}-${attributes.item}`), value
    ])
  ], []));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
