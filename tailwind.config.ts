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
        jr: {
          black: "#0A0A0A",
          "black-2": "#151515",
          "black-3": "#1F1F1F",
          white: "#ffffff",
          red: "#D71920",
          "red-hover": "#B01419",
          "red-dark": "#8F0F14",
          gold: "#D5A651",
          "gold-hover": "#E5B661",
          "gold-soft": "rgba(213,166,81,0.12)",
          "gold-softer": "rgba(213,166,81,0.06)",
          muted: "rgba(255,255,255,0.65)",
          "muted-2": "rgba(255,255,255,0.45)",
          "muted-3": "rgba(255,255,255,0.25)",
          line: "rgba(255,255,255,0.06)",
          "line-strong": "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        head: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "Menlo", "monospace"],
      },
      spacing: {
        // 4px base spacing scale
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
      },
      maxWidth: {
        'container': '1280px',
        'content': '1120px',
        'narrow': '768px',
      },
      gridTemplateColumns: {
        // 12 column grid
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      boxShadow: {
        'glow-gold': '0 0 32px rgba(213, 166, 81, 0.15)',
        'glow-gold-lg': '0 0 48px rgba(213, 166, 81, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
export default config;
