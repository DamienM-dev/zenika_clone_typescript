import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        greyText: "rgba(0, 0, 0, 0.54)",
        blackArrow: "rgba(0, 0, 0, 0.87)",
        bgDarkMode: "#121212",
        bgDarModeLow: "#1e1e1e",
        bgDarkModeGrey: "#292929",
        bgSuccess: "#F4FBF6",
        textSuccess: "#203C25",
        bgDarkSuccess: "#121B17",
        textDarkSuccess: "#B1F1CB",
        bgError: "#FFF8F7",
        textError: "#5C271F",
        bgDarkError: "#1F1513",
        textDarkError: "#FBD3CB",
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
