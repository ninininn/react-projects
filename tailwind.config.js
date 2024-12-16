/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ECBEA5',
        'secondary': '#ffeec2',
        'blue': '#76bfe1',
        'purple': '#9586c4',
        'pink': '#FFD4D4',
        'orange': '#df8465',
        'green': '#72c095',
        'yellow': '#ebc66a',
        'gray-dark': '#272727',
        'gray': '#919190',
        'gray-light': '#ededed',
        'dark-blue': '#004466',
        'alert': '#c43131'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

