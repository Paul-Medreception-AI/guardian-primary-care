/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0095e9", dark: "#00304b", mid: "#1a80b6", light: "#e0f4ff",
        ink: "#00304b", cream: "#f7fbfe", muted: "#5a6b7a", border: "#cde9fa",
        highlight: "#37b6ff",
      },
      fontFamily: {
        display: ["var(--font-marcellus)", "Georgia", "serif"],
        sans: ["var(--font-lato)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
module.exports = config;
