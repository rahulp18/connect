/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Popins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
