import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        "nunito-light": ["NunitoLight", "sans"],
      },
      colors: {
        greyColor: "#F3F3F3",
        pinkZenika: "#DF2147",
        pinkTitre: "rgba(255, 255, 255, 0.87)",
        backCardAgence: "#F3F3F3",
      },
      boxShadow: {
        custom:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
      height: {
        card: "450px",
      },
    },
  },
  plugins: [],
} satisfies Config;
