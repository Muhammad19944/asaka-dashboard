/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      light: ["Acrom-Light"],
      regular: ["Acrom-Regular"],
      medium: ["Acrom-Medium"],
      bold: ["Acrom-Bold"],
    },
    extend: {},
  },
  plugins: [],
}
