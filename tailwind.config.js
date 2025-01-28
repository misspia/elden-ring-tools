/** @type {import('tailwindcss').Config} */

/**
 * Font:
 * https://fonts.google.com/specimen/Cormorant+SC
 */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // boxShadow: {
      //   ''
      // },
      colors: {
        /** https://colorswall.com/palette/327666 */
        "er-orange": "#ed8a09", // Elden Ring Orange
        "er-blue-300": "#3db9b2", // Green Grapple
        "er-blue-600": "#1f648d", // Traditional Blue
        "er-blue-800": "#003a6c", // Ateneo Blue

        /** https://coolors.co/46391e-9c7342-a58141-c58736-dfa04d-ecb86a-d0bd80 */
        "er-gold-200": "#d0bd80",
        "er-gold-300": "#ecb86a",
        "er-gold-400": "#dfa04d",
        "er-gold-500": "#c58736",
        "er-gold-600": "#A58141",
        "er-gold-700": "#9c7342",
        "er-gold-900": "#46391e",

        /** https://coolors.co/040e08-081d1c-102c2b-133534-17403f-1d4746-2e554d-456153-799181-b2c3b4 */
        "er-green-100": "#B2C3B4",
        "er-green-200": "#799181",
        "er-green-300": "#456153",
        "er-green-400": "#2E554D",
        "er-green-500": "#1D4746",
        "er-green-600": "#17403F",
        "er-green-700": "#133534",
        "er-green-800": "#102C2B",
        "er-green-900": "#081D1C",
        "er-green-950": "#378661",

        "er-black": "#252531",
      },
    },
  },
  plugins: [],
};
