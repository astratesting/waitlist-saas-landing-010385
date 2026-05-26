import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06080f",
        accent: "#4567b7",
        "accent-light": "#6384d4",
        "accent-dark": "#2d4a8f",
        surface: "#0d1120",
        "surface-2": "#131929",
        border: "#1e2a42",
        muted: "#4a5878",
        "text-primary": "#e8edf8",
        "text-secondary": "#8a9bbf",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(69,103,183,0.3), transparent)",
        "card-glow":
          "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(69,103,183,0.08), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
