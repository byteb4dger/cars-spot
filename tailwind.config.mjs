/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-flex": ['"Roboto Flex Variable"', "sans-serif"],
        "bebas-neue": ['"Bebas Neue"', "sans-serif"],
        "roboto-condensed": ['"Roboto Condensed Variable"', "sans-serif"],
      },
      colors: {
        backgroundColor: "#F7F7F7",
        lineColor: "#D9DCD5",
        textColor: "#282828",
        blueColor: "#2447FF",
        textColor2: "#1D1D1B",
        dot: "#EDEDED",
      },
    },
  },
  plugins: [],
};
