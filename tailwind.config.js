/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Sans-serif"],
        urdu: ['Noto Nastaliq Urdu'],
      },
      colors: {
        pinkish: {
          50: "#ffe4ef", // Lightest pink
          100: "#ffc9e0",
          200: "#ff99c2",
          300: "#ff6aa4",
          400: "#ff3b86",
          500: "#e2246d", // Main pink
          600: "#b31b56", // Slightly darker
          700: "#84123f", // Darker
          800: "#570927",
          900: "#2a0212",
        },
        grayish: {
          50: "#f9fafb", // Lightest gray for backgrounds
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280", // Neutral gray
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827", // Dark gray for text
        },
      },
      fontFamily: {
        sans: ["Inter", "Sans-serif"],
        serif: ["Merriweather", "Serif"],
      },
    },
  },
  plugins: [],
};
