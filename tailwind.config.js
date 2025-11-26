/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#040713',
        'brand-primary': '#3b82f6',
        'brand-secondary': '#0ea5e9',
        'brand-accent': '#f97316',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 40px rgba(59, 130, 246, 0.35)',
      },
    },
  },
  plugins: [],
}

