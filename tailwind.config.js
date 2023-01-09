/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*****/****/***/**/*.{js,jsx,ts,tsx}",
    "./src/****/***/**/*.{js,jsx,ts,tsx}",
    "./src/***/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    minWidth: {
      0: "0",
      "1/8": "12%",
      "1/5": "20%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      colors: {
        main: "#002F6C",
        small_card: "#FF7F00",
        button: "#002F6C",
        border_line: "#41B6E6",
        subtitle_text: "#212529",
        logo: "#E45858",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
