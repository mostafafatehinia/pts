import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#efeff4",
        primary: "#ffcc00",
        gray: {
          DEFAULT: "#212529",
          100: "#8b8b8d",
          200: "#212529",
        },
      },
      boxShadow: {
        card: "0 0 19px -7px rgba(0, 0, 0, .25)",
      },
      fontFamily: {
        yekan: ["IranYekan"],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
