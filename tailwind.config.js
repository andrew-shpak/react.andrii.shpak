module.exports = {
  content: ['./src/**/*.{ts,tsx}'], // Here we are going to tell Tailwind to use any .ts or .tsx file to purge the CSS
  darkMode: 'media', // Use media queries for dark mode, customize it as you want
  theme: {
    extend: {},
  },
  variants: {}, // activate any variant you want here
  plugins: [
    require('prettier-plugin-tailwindcss'),
  ], // add any plugin you need here
}
