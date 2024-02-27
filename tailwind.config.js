/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-opacity": "#10223e",
      },
    },
    container: {
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px",
      },
    },
    boxShadow: {
      cardShadow: "11px 10px 38px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
