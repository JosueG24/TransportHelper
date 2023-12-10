/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        c_Raven :  "#71788F",
        c_Mischka : "#DFDDE6",
        c_Purple :"#A69DCC",
        c_Ebony : "#04040E",
        c_Opaque: "rgba(0, 0, 0, 0.7)"
      }
    },
  },
  plugins: [],
}
