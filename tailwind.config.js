/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        montserrat: ["Montserrat","serif"],
        kanit: ["Kanit", "serif"],
        outfit: ["Outfit", "serif"],
        exile: ["Exile", "Static"],
        fascinate: ["Fascinate", "Static"],
        flamenco: ["Flamenco", "Static"],
        josefin: ["Josefin", "Sans"],
        marker: ["Permanent Marker", "Static"],
        inter: ["Inter", 'serif'],
        fugaz: ["Fugaz One", "serif"]
      },


      boxShadow: {
        submit: '0px 0px 4px 2px rgba(0, 0, 0, 0.2)',
        div: '0px 0px 8px 3px rgb(248,248,255)'
      }
    },
  },
  plugins: [],
}

