/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '767px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {
      boxShadow: {
        nav: '0 2px 4px 0 rgba(0,0,0,0.1)',
        light: '0 2px 6px 0 rgba(0,0,0,0.1)',
        btn: '0 0 6px 0 rgba(0,0,0,0.2)',
        lighter: '2px 2px 4px 0 rgba(0,0,0,0.1)'
      },
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)', // (Dark Mode Elements)
        'v-dark-blue-dark': 'hsl(207, 26%, 17%)', //  (Dark Mode Background)
        'v-dark-blue-light': 'hsl(200, 15%, 8%)', //  (Light Mode Text)
        'dark-gray': 'hsl(0, 0%, 52%)', //  (Light Mode Input)
        'v-light-gray': 'hsl(0, 0%, 98%)', //  (Light Mode Background)
        'white': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}