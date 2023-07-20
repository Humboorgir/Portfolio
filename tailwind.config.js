/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        ripple: "ripple 600ms linear",
      },

      keyframes: {
        ripple: {
          "0%": { opacity: "100%", transform: "scale(0)" },
          "100%": { opacity: "0%", transform: "scale(2)" },
        },
      },

      colors: {
        primary: "#0275d8",
      },
    },
  },
  plugins: [],
};
