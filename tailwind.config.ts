import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Poppins"],
      },
      colors: {
        borderGray: "#CDCDCD",
        trainPageGray: "#A2A2A2",
        testGray: "#ccc",
        btnGray: "#A6A6A6",
        lightGray: "#D9D9D9",
        cardBg: "#12151B",
      },
    },
  },
  plugins: [],
};
export default config;
