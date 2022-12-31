/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        order_bg: "url('../images/bg-1.png')",
        history_bg: "url('../images/bg-2.png')"
      },
    },
  },
  plugins: [require("daisyui")],
};

