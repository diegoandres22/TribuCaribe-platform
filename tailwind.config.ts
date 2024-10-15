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
      boxShadow: {
        up: "0 -4px 30px -1px rgba(0, 0, 0, 0.2), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ColorBrandPrimary: "var(--VarViolet600)",
        ColorTextGrey: "var(--textGrey)",
        bagwite: "var(--VarPurple800)",
      },
      lineHeight: {
        "tight-mobile": "1.2", // Espaciado personalizado para móviles
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/aspect-ratio")],
};
export default config;
