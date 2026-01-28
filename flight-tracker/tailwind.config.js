/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // deep blue
        secondary: "#3b82f6", // lighter blue
        accent: "#10b981", // emerald
        dark: "#0f172a", // slate 900
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
