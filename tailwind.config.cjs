/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#1c1c1c",
        ghost: "rgb(209 213 219)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["dark"],
  },
};
