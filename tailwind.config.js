/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM+Sans"],
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
