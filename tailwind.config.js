/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        primaryLight: "hsl(var(--color-primary-light) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        highlight: "hsl(var(--color-highlight) / <alpha-value>)",
        brown: "hsl(var(--color-brown) / <alpha-value>)"
      },
      borderRadius: {
        DEFAULT: "0.5rem"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Merriweather", "serif"]
      },
      transitionProperty: {
        DEFAULT: "all"
      }
    }
  },
  plugins: []
}