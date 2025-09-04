/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(0, 0%, 95%)",
        accent: "hsl(160, 60%, 45%)",
        primary: "hsl(210, 70%, 50%)",
        surface: "hsl(0, 0%, 100%)",
        "text-primary": "hsl(0, 0%, 10%)",
        "text-secondary": "hsl(0, 0%, 40%)",
        border: "hsl(214.3 31.8% 91.4%)",
        input: "hsl(214.3 31.8% 91.4%)",
        ring: "hsl(210, 70%, 50%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(0, 0%, 10%)",
        secondary: {
          DEFAULT: "hsl(210 40% 98%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(210 40% 96%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
      },
      borderRadius: {
        lg: "20px",
        md: "12px",
        sm: "8px",
      },
      boxShadow: {
        card: "0 6px 18px hsla(0, 0%, 0%, 0.10)",
      },
      spacing: {
        xl: "32px",
        lg: "24px",
        md: "16px",
        sm: "12px",
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "800" }],
        heading: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
        body: ["1rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        caption: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
