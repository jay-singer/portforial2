/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        big: "40rem",
        left: "55rem",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
