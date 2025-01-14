/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#002B5C', // Deep Blue
          cyan: '#00B8D9',    // Vibrant Cyan
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#8A2BE2', // Electric Violet
          light: '#F4F5F7',   // Soft Gray
        },
        // Accent Colors
        accent: {
          orange: '#FF5722',  // Energetic Orange
          green: '#00C853',   // Fresh Mint Green
        },
        // Text Colors
        text: {
          primary: '#FFFFFF', // White for dark theme
          secondary: '#94A3B8', // Slate-400 for dark theme
        },
        // Dark Theme Colors
        dark: {
          DEFAULT: '#0A0A0F',    // Main background
          lighter: '#111118',    // Slightly lighter sections
          card: '#16161F',       // Card backgrounds
          nav: '#070709',        // Navigation - darker than main
          footer: '#050507',     // Footer - darkest
          border: '#1E1E2A',     // Border color for dark theme
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #002B5C, #00B8D9)',
        'gradient-secondary': 'linear-gradient(to right, #002B5C, #8A2BE2)',
        'gradient-dark': 'linear-gradient(to bottom, #0A0A0F, #16161F)',
        'spotlight': 'radial-gradient(circle at 50% 50%, rgba(0,43,92,0.15) 0%, rgba(10,10,15,0) 50%)',
      },
    },
  },
  plugins: [],
}

