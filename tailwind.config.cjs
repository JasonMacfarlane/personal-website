/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
      sans: ['PT Sans', 'sans'],
    },
  },
  plugins: [],
}
