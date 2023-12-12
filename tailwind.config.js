/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgNavy: "#0a192f",
        primaryLiteSlate: "#ccd6f6",
        primaryGreen: "#64ffda",
        secondarySlate: "#8892b0",
        lightNavyCard: "#112240",
        imageOverlay: "#0a192f",
      },
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
        interFont: "Inter, 'Open Sans'",
        notoSerif: "'Noto Serif', 'Open Sans'",
      },
    },
  },
  plugins: [],
};
