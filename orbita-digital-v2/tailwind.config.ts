import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "od-black":   "#0b0f17",
        "od-blue":    "#0d47ff",
        "od-cyan":    "#00b8ff",
        "od-light":   "#00e5ff",
        "od-mid":     "#3155a1",
        "od-gray":    "#8892a4",
        "od-surface": "#111827",
      },
      fontFamily: {
        syne:   ["var(--font-syne)", "sans-serif"],
        dm:     ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-od": "linear-gradient(135deg, #0d47ff, #00b8ff)",
      },
    },
  },
  plugins: [],
};
export default config;
