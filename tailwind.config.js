/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //primaryColors
        primaryGreen: "#088269",
        primaryBlack: "#202020",
        primaryCream: "#F8F7F3",
        primaryWhite: "#FFFFFF",

        //secondaryColor
        secondaryGreen1: "#23473B",
        secondaryGreen2: "#07745E",
        secondaryGreen3: "#BDDBC7",
        secondaryGreen4: "#E1EFE6",
        secondaryGray: "#7A7687",
        accent: "#D5D1E1",
      },
    },
  },
  plugins: [],
};
