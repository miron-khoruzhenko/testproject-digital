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
        lightBlue : '#42A9ED',
        darkBlue : '#10101D'
      }
    },
    backgroundImage : {
      'hero-bg' : "url('/src/assets/hero-bg.jpg')"
    }
  },
  plugins: [],
}