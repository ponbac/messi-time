module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#363062",
        secondary: "#827397",
        white: "#FFFFFF",
      },
      fontFamily: {
        novaMono: ["Nova Mono", "sans-serif"],
      }
    },
  },
  plugins: [],
};
