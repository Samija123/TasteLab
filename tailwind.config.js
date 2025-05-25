/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4D7C0F', // Green
        'primary-dark': '#3F6212',
        'primary-light': '#84CC16',
        secondary: '#D7C0AE', // Beige
        'secondary-light': '#E7D6C4',
        'secondary-dark': '#C7B09E',
        accent: '#8B5A2B', // Brown
        'accent-dark': '#704617',
        'accent-light': '#A67C52'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
 