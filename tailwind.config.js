/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#F5F5F5',
        accent: '#FF6F61',
        dark: '#6d6875',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
