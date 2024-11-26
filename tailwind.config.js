/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        barcon: ['Bar Con', 'sans-serif'], // Add custom font here
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
