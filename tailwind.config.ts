import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rockwell: ["Rockwell", "serif"],
        "space-grotesk": ["SpaceGrotesk", "sans-serif"],
        rockybilly: ["Rockybilly", "cursive"],
        "rustic-roadway": ["RusticRoadway", "cursive"],
        angelos: ["Angelos", "cursive"],
        awesome: ["Awesome", "cursive"],
      },
      colors: {
        "sentra-apricot-jet": "#E26F3C",
        "sentra-midnight-deck": "#264653",
        "sentra-travertine": "#E9C46A",
        "sentra-dune-mist": "#EFE7DC",
        "sentra-ocean-route": "#4A868C",
      },
    },
  },
  plugins: [],
};
export default config;
