/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Rubik", ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
