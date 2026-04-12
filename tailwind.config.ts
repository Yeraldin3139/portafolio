import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/*/.{js,ts,jsx,tsx,mdx}",
    "./components/*/.{js,ts,jsx,tsx,mdx}",
    "./app/*/.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        teal: {
          primary: "#2D9B83",
          light: "#B2DFDB",
          lighter: "#E8F5F3",
          dark: "#1B6B5A",
          border: "#5ECFB1",
        },
        dark: {
          bg: "#0D1F1A",
          card: "#1A2E28",
          text: "#A0B4AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;