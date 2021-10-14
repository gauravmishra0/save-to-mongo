const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    plugins: [
      require('daisyui'),
      require('@tailwindcss/custom-forms'),
    ],
    extend: {
      colors: {
        // Colors you want to add go here
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber, 
        vblue: '#5950B7',
        vgray: '#9EA3AE',
        vgreen: '#D5FAFC',
        vteal: '#2EC5CE',
      },
      fontFamily: {
        roboto: ['Roboto'],
        sanspro: ['Source Sans Pro'],
        manrope: ['Manrope']

      },
      backgroundImage: {
        'hero-lg': "url(https://i.ibb.co/XzyPwgq/Background.png)",
        
    },
    }
  }
}