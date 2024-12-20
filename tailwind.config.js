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
      screens: {
        'xs': "550px",
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'xm': '980px',
        
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}



