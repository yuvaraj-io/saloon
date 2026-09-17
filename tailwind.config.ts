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
        salon: {
          dark: "#0C1713",
          deep: "#13231C",
          moss: "#1E382B",
          sage: "#3A634E",
          mint: "#84A98C",
          light: "#F4F7F4",
          cream: "#FAF8F5",
          sand: "#EFE9DF",
          gold: "#C5A880",
          goldHover: "#B3956B",
          bronze: "#9A7B56",
          darkMuted: "#192823",
          border: "rgba(197, 168, 128, 0.2)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
