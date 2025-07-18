import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        'neon-cyan': 'hsl(var(--neon-cyan))',
        'neon-purple': 'hsl(var(--neon-purple))',
        'neon-emerald': 'hsl(var(--neon-emerald))',
        'neon-magenta': 'hsl(var(--neon-magenta))',
        'neon-gold': 'hsl(var(--neon-gold))',
        'dark-bg': 'hsl(var(--dark-bg))',
        'dark-secondary': 'hsl(var(--dark-secondary))',
        'dark-tertiary': 'hsl(var(--dark-tertiary))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { textShadow: '0 0 20px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-cyan))' },
          to: { textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan))' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 20px hsla(var(--neon-cyan), 0.5), inset 0 0 20px hsla(var(--neon-cyan), 0.1)' },
          '50%': { boxShadow: '0 0 40px hsla(var(--neon-cyan), 0.8), inset 0 0 30px hsla(var(--neon-cyan), 0.2)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(hsla(var(--neon-cyan), 0.1) 1px, transparent 1px), linear-gradient(90deg, hsla(var(--neon-cyan), 0.1) 1px, transparent 1px)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
