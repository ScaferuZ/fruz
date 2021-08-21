module.exports = {
  // mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Lato: "Lato",
        Playfair: "Playfair Display",
      },
      textColor: {
        primary: "#1F1F1F",
        secondary: "#FFB800",
      },
      backgroundColor: (theme) => ({
        primary: "#1F1F1F",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
