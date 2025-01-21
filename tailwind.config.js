/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /** https://colorswall.com/palette/327666 */
        "er-orange": "#ed8a09", // Elden Ring Orange
        "er-green-50": "#e1e2d6", // Timid Green
        "er-green-500": "#378661", // Chrysocolla Green
        "er-blue-300": "#3db9b2", // Green Grapple
        "er-blue-600": "#1f648d", // Traditional Blue
        "er-blue-800": "#003a6c", // Ateneo Blue

        "raisin-black": "#252531",
      },
    },
  },
  plugins: [],
};
