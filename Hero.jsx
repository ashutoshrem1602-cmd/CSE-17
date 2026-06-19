/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Netflix-inspired dark theme palette
        cinema: {
          black: "#0B0B0D",   // page background
          dark: "#141417",    // card / surface background
          card: "#1C1C21",    // raised surface (modal, dropdown)
          border: "#2B2B31",
        },
        crimson: {
          DEFAULT: "#E50914", // primary accent (Netflix red)
          dark: "#B20710",
        },
        gold: "#F5C518", // IMDb-style rating gold
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"], // bold cinematic display font
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
