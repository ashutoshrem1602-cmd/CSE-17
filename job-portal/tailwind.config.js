/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E5F4E", // deep emerald (primary brand color)
          dark: "#15463A",
          light: "#E8F2EE",
        },
        accent: "#F2A341", // warm amber (used on Apply Now buttons)
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"], // headings font
        body: ["Inter", "sans-serif"],   // body text font
      },
    },
  },
  plugins: [],
};
