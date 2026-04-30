/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        surface: "var(--color-surface)",
        primary: "var(--color-text)",
        secondary: "var(--color-text-secondary)",
        muted: "var(--color-text-muted)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        nepali: ["NepaliFont", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s var(--ease-out-expo) forwards",
        "slide-up": "slideUp 0.8s var(--ease-out-expo) forwards",
        "spin-slow": "spin 30s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "line-draw": "lineDraw 1.5s var(--ease-out-expo) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        lineDraw: {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "in-out-smooth": "var(--ease-in-out-smooth)",
      },
    },
  },
  plugins: [],
};
