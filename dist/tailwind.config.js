/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
     "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#0A2463',
        accent: '#36CFC9',
        dark: '#1D2129',
        light: '#F7F8FA',
        success: '#52C41A',
        warning: '#FAAD14',
        danger: '#FF4D4F'
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

