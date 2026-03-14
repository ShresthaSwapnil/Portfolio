/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#e11d48", // Rose 600 - Subtle accent
        dark: "#0f172a", // Slate 900
        light: "#FDFBF7", // Warm Off-white
        paper: "#FDFBF7",
        charcoal: "#334155", // Slate 700
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        nepali: ["NepaliFont", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        // Clean backgrounds, no patterns by default
      },
    },
  },
  plugins: [],
};
