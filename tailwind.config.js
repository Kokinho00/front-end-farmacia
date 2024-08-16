/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'vermelho': '#000000',
        'quaseBranco': '#40e0d0',
        'papayaWhip': '##FFEFD5',
        'peachPuff': '##FFDAB9',
        'paleGoldenrod': '##EEE8AA'
      },
    },
  },
  plugins: [],
}

