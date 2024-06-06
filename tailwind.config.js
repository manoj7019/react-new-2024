/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns : {
        '70/30': '70% 28%',
      },
      screens: {
        'mobile': '350px',
        'tablet': '640px', // => @media (min-width: 640px) { ... }
        'laptop': '1024px', // => @media (min-width: 1024px) { ... }
        'desktop': '1280px', // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}