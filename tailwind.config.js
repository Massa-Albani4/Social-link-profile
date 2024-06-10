/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors: {
      green: "hsl(75, 94%, 57%)",
      white: "hsla(0, 0%, 100%, .86)",
      "white-200": "hsla(0, 0%, 100%, .65)",
      grey: "hsl(0, 0%, 20%)",
      "dark-grey": "hsl(0, 0%, 12%)",
      black: "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
