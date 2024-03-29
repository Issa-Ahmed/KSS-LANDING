/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { raleway: "sans-serif" },
      height: { 100: "34rem" },
      spacing: {
        37: "640px",
      },
    },
  },
  plugins: [],
};
