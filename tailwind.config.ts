import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1440px",
      dpr: {
        raw: "screen and (min-device-pixel-ratio: 2)",
      },
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2.5rem",
          xl: "5rem",
        },
      },
      colors: {
        accent: "#5680E9",
        secondary: "#84CEEB",
        bgColor: "#C1C8E4",
        white: "#FFF",
        black: "#222",
        violet: "#8860D0",
        bgModal: "#5AB9EA",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        extraSmall: "8px",
        small: "12px",
        base: "14px",
        middle: "16px",
        medium: "18px",
        large: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
