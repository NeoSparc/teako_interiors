
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ["Nunito", "sans-serif"],
        orbitron:["Orbitron", "sans-serif"],
        juilius:["Julius Sans One", 'sans-serif']
      }
    },
  },
  plugins: [],
}