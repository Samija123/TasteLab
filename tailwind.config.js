/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7e8',
          100: '#edf0d1',
          200: '#dde3a6',
          300: '#c9d677',
          400: '#b6c848',
          500: '#9db62a',
          600: '#7d9120',
          700: '#5e6d1a',
          800: '#3e4913',
          900: '#1f240b',
        },
        beige: {
          50: '#fbf9f3',
          100: '#f7f3e7',
          200: '#f0e8cf',
          300: '#e7d8b0',
          400: '#ddc890',
          500: '#d3b770',
          600: '#c4a04e',
          700: '#a3833c',
          800: '#826735',
          900: '#61502d',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};
 