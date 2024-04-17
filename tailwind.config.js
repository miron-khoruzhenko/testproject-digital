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
        customBlue : '#42A9ED'
      }
    },
    backgroundImage : {
      'hero-bg' : "url('/src/assets/hero-bg.jpg')"
    }
  },
  plugins: [],
}