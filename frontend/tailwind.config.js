/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      lightgrey: "#f9fafb",
    },
    extend: {
      fontFamily: {
        'Onest': ['Onest', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
