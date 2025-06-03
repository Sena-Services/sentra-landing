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
        // display: ['"Space Grotesk"', "sans-serif"],
        // body: ['"Plus Jakarta Sans"', "sans-serif"],
        // inter: ['"Inter"', "sans-serif"],
        rockwell: ["Rockwell", "serif"],
      },
      colors: {
        "sentra-apricot-jet": "#F4A261",
        "sentra-midnight-deck": "#264653",
        "sentra-travertine": "#E9C46A",
        "sentra-dune-mist": "#2A9D8F",
        "sentra-ocean-route": "#E76F51",
      },
    },
  },
  plugins: [],
};
export default config;
