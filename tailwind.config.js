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
      },
      width: {
        42: "42%",
        90: "90%",
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
