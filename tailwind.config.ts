import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-25': 'span 25 / span 25',
      },
      gridColumnStart: {
        '13': '13',
        '25': '25',
      },
      gridColumnEnd: {
        '12': '12',
        '25': '25',
      },
      fontFamily: {
        serif: ["var(--font-gopher)", "serif"],
        sans: ["var(--font-gopher)", "sans-serif"],
      },
       colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
