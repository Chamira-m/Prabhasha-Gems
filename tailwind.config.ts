import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px", // for small devices like iPhone SE
      sm: "640px", // for mobile devices
      md: "768px", // for tablets and larger phones
      lg: "1024px", // for small laptops and iPad Pro
      xl: "1280px", // for 13-inch MacBook Air
      "2xl": "1440px", // for 13-inch MacBook Pro and larger monitors
      "3xl": "1920px", // for 16-inch MacBook Pro and larger monitors
      "4xl": "2560px", // for very large monitors
    },
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
      fontFamily: {
        "mulish-black": ["mulish-black", "sans"],
        "mulish-blackItalic": ["mulish-blackItalic", "sans"],
        "mulish-bold": ["mulish-bold", "sans"],
        "mulish-boldItalic": ["mulish-boldItalic", "sans"],
        "mulish-extraBold": ["mulish-extraBold", "sans"],
        "mulish-extraBoldItalic": ["mulish-extraBoldItalic", "sans"],
        "mulish-lightItalic": ["mulish-lightItalic", "sans"],
        "mulish-medium": ["mulish-medium", "sans"],
        "mulish-mediumItalic": ["mulish-mediumItalic", "sans"],
        "mulish-regular": ["mulish-regular", "sans"],
        "mulish-semiBold": ["mulish-semiBold", "sans"],
        "mulish-semiBoldItalic": ["mulish-semiBoldItalic", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;
