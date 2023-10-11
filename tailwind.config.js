/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            
            opacity: '0%'
          },
          '100%': {
            
            opacity: '100%'
          }
        },
        'fade-in1': {
          '0%': {    
            opacity: '0%'
          },
          '50%': {
            opacity: '0%'
          },
          '100%': { 
            opacity: '100%'
          }
        },
        'fade-in2': {
          '0%': {
            
            opacity: '0%'
          },
          '100%': {
            
            opacity: '100%'
          }
        },
      },
      animation: {
        'fade-in': 'fade-in 1s',
        'fade-in1': 'fade-in1 2s',
        'fade-in2': 'fade-in2 .5s'
      }
    },
  },
  plugins: [],
}

