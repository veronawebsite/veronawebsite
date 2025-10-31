/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verona': {
          'white': '#FFFFFF',
          'cream': '#F5F1E8',
          'beige-light': '#E8DCC8',
          'beige': '#D4C4A8',
          'beige-dark': '#B8A888',
          'green-light': '#B8D4A8',
          'green': '#8BAA6F',
          'green-dark': '#6B8A54',
          'olive': '#5A7347',
          'brown-light': '#8B7355',
          'brown': '#6B5A45',
          'brown-dark': '#4A3F2F',
        }
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
