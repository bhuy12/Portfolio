/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class", // bật dark mode theo class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // rất quan trọng: đúng glob cho Vite + React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
