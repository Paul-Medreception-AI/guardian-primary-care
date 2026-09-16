/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "#1da1f2", dark: "#13699d", light: "#ddf1fd", ink: "#1a2030", cream: "#f8fcff", muted: "#64748b", border: "#d2eefd" },
      fontFamily: { cormorant: ["var(--font-cormorant)", "Georgia", "serif"], sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
module.exports = config;