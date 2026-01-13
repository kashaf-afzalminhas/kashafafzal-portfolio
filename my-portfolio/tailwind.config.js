/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Deep Navy
        secondary: "#2563EB", // Muted Blue
        accent: "#0D9488", // Soft Teal
        background: "#F8FAFC", // Off-White
        surface: "#F1F5F9", // Light Gray
        heading: "#020617", // Near-Black
        body: "#334155", // Dark Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
