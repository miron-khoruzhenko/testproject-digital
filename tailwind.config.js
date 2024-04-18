/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        manBlue500 : '#42A9ED',
        manBlue600 : '#286690',
        manBlue700 : '#3D4050',
        manBlue800 : '#272733',
        manBlue900 : '#10101D',
      }
    },
    backgroundImage : {
      'hero-bg' : "url('/src/assets/hero-bg.jpg')",
      'order-bg' : "url('/src/assets/order-bg.png')",
    }
  },
  plugins: [],
}