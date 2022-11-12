/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '500px',
      lg: '976px',
      xl: '1440px',
      "2xl": '1440px',
  },
    extend: {
      colors:{
        veryDarkMagenta: 'hsl(300, 43%, 22%)',
        softPink: 'hsl(333, 80%, 67%)',
        darkGrayishMagenta: 'hsl(303, 10%, 53%)',
        lightGrayishMagenta: 'hsl(300, 24%, 96%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        leaguespartan: ['League Spartan', "sans-serif"],
      },
    },
  },
  plugins: [],
}