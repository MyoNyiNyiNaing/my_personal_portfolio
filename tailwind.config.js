/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    fontSize: {

      sm: ["16px"],
      base: ["22px"],
      base_sm: ["19px"],
      lg: ["24px"],
      hero_title: ["68px"],
      title: ["50px"],
      title_sm: ["40px"],
      btn: ["18px"],
    },

  },
  plugins: [],
};
