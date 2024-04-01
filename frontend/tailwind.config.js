/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      lightgrey: "#f9fafb",
      border: "#ECECEC",
      moradoFuerte: "#5C37EB",
      customBlue: '#635BFF',
      customGray: '#F5F5F5',
      white: 'white'
    },
    extend: {
      fontFamily: {
        Onest: ['Onest', 'sans-serif'],
        satoshi: ["Satoshi", 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #EAE9FE 100%, #D6D5FF 100%)',
      }
    },
  },
  plugins: [],
}
