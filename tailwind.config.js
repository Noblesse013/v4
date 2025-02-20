/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0 8px rgba(255, 70, 85, 0.5)',
        'text': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 70, 85, 0.3)',
      },
    },
  },
  plugins: [],
};