import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          plum: "#4A052E",
          berry: "#5C0A3C",
          charcoal: "#111111",
          taupe: "#666666",
          gold: "#D4AF37",
          rose: "#E5A995",
        },
        cream: {
          light: "#FDFBF9",
          warm: "#FAF6F0",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      spacing: {
        section: "5rem",
      },
      transitionDuration: {
        luxury: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
