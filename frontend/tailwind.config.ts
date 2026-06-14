import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#182232",
        mineral: "#315c8d",
        cement: "#eef1f3",
        clay: "#8f6a4c",
        hydrate: "#3b7f89"
      },
      boxShadow: {
        soft: "0 16px 44px rgba(24, 34, 50, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
