/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FEFDFB', 100: '#FBF8F3', 200: '#F5EFE5' },
        teal: {
          50: '#EDF8F5', 100: '#D4EFE8', 200: '#ADDDD0',
          300: '#7DC7B3', 400: '#4BAD93', 500: '#0D7C66',
          600: '#0A6553', 700: '#084D40', 800: '#06362D', 900: '#0B1D26',
        },
        bark: { 100: '#E8DFD5', 200: '#D4C5B5', 300: '#B8A48E', 400: '#8C7560', 500: '#6B5744' },
        clay: { 500: '#C67D4A', 600: '#A86638' },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.8s ease-out 0.15s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.3s forwards',
        'fade-up-delay-3': 'fadeUp 0.8s ease-out 0.45s forwards',
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
