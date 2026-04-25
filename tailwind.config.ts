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
        navy: {
          DEFAULT: "#0a1628",
          mid: "#112240",
          light: "#1d3557",
        },
        brand: {
          blue: "#1a56db",
          "blue-bright": "#3b82f6",
          "blue-soft": "#e8f0fe",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(10,22,40,0.08)",
        card: "0 16px 48px rgba(10,22,40,0.1)",
        hero: "0 32px 80px rgba(10,22,40,0.2)",
        glow: "0 8px 32px rgba(26,86,219,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 4s ease-in-out infinite",
        ticker: "ticker 35s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        morph: "morphBlob 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        morphBlob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #1a56db 0%, #2563eb 50%, #60a5fa 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #0a1628 0%, #112240 60%, #1d3557 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
