/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3F3F3',   
        secondary: '#664275', 
        tertiary:"#E2DAFF",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        custom: ['"Roboto Mono"', 'monospace'],
      },

    },
  },
  plugins: [],
}



