module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A67CE",
        secondary: "#B689C0",
        white: "#FFFFFF",
      },
      fontFamily: {
        novaMono: ["Nova Mono", "sans-serif"],
      }
    },
  },
  plugins: [],
};
