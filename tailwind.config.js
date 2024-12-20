/** @type {import('tailwindcss').Config} */
import svgr from "vite-plugin-svgr";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-opacity": "#10223e",
      },
      boxShadow: {
        custom1:
          "0 4px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        cardShadow: "11px 10px 38px rgba(0, 0, 0, 0.1)",
        custom2: "0 10px 20px rgba(0, 0, 0, 0.1)",
      },
    },
    container: {
      padding: 8,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        // "3xl": "1900px",
      },
    },
  },
  plugins: [svgr()],
};
