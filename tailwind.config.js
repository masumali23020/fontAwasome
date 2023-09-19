/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'sm': '500px',
      'md': '650px',
      'lg': '890px',
      'xl': '1110px',
      '2xl': '1536px',
  
    }
  },
  plugins: [],
}

