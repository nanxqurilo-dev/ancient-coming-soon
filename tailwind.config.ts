import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C19B5E",
          light: "#D4AF64",
          dark: "#A0793E",
        },
        dark: {
          100: "#1A1816",
          200: "#0D0A08",
          bg: "#080604",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        display: ["var(--font-cinzel)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;