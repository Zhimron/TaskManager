const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css",
  ],
  theme: {
    extend: {
      colors: {
        black: "#030909",
        royalblue: "#4070CC",
        ivory: "#F4F6F5",
        crimson: "#B50000",
        serenity: "#54627B",
      },
      backgroundImage: {
        image: "url('/src/assets/pictures/warlus.png')",
      },
      fontFamily: {
        body: ["Bowlby One SC"],
        text: ["Hammersmith One"],
      },
    },
  },
  plugins: [require("daisyui")],
};
