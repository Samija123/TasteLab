/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a9c5f',
          light: '#6ab47f',
          dark: '#3a7c4b'
        },
        secondary: {
          DEFAULT: '#f5f2e9',
          light: '#faf8f3',
          dark: '#e5e0d0'
        },
        tertiary: {
          DEFAULT: '#8c6d46',
          light: '#a58963',
          dark: '#6e5636'
        }
      }
    },
  },
  plugins: [],
};
 