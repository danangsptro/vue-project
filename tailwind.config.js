/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {},
    colors:{
      orangeLight: '#fff7ed',
      orange: '#fb923c',
      white : '#fff',
      amber: '#ffedd5',
      green: '#16a34a',
      gray: '#e5e7eb',
      red: '#dc2626',
      gray500: '#a0aec0',
      orangeBlue: '#ffedd5'

    },
    textColor:{
      'white' : '#fff',
      'orange': '#fb923c',
      'green': '#16a34a',
      'gray': '#e5e7eb',
      'gray-500': '#a0aec0',
      'gray-600' : '#718096;'
    }
  },
  plugins: [],
}
