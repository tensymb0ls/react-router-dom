/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      componentshadow: "0px 4px 12px 0px #00000014 ",
    },
    colors: {
      colorLightGray: "#DCDCDC",
      colorTextLightGray: "#8A8A8A",
      colorTextBlack: "#161616",
      accent: "#FF855F",
    },
    fontSize: {
      contentSize: "14px", // defautl content font size
      subContentSize: "12px", // subcontent font size: status, aside blocks header, etc
    },
  },
  plugins: [],
};
