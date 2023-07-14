/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        secondary: '#e6e6e6',
        popover: '#ac7897',
        accent: '#fafafa',
      },
      fontFamily: {
        primary: ['Lato', 'sans - serif'],
        secondary: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
