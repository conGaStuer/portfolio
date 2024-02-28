module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "2vh": "240vh",
        95: "95%",
        90: "90%",
        70: "70vh",
        75: "75vh",
        "3/2vh": "170vh",
        "1/2vh": "50vh",
      },
      width: {
        42: "42%",
        47: "47%",
        90: "90%",
        70: "70%",

        rem: "40rem",
      },
      colors: {
        hidden: "#141414",
        textHidden: "#5c5c5c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
