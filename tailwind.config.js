/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        "healthpilot-primary": "#f1f5f8",
        "healthpilot-secondary": "#eeeeee",
        "healthpilot-thirdary": "#1e40af",
        "option-select-country": "#f1f5f8",
      },
    },
    variants: {
      extend: {
        backgroundColor: ['disabled']
     },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [],
}