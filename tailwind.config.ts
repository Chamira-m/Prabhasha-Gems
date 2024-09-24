import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightMint: "#D5F9FE",
        mint: "#54BEC5",
        darkMint: "#008EAD",
        darkBlue: "#131F45",
        blueGray: "#374161",
        lightGray: "#BDC1CE",
        white: "#F8F9FB",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
