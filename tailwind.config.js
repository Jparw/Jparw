const { plugins } = require("./tailwind-default.config");

module.exports = {
  purge: ["public/index.html"],
  theme:{
    extend: {
      colors: {
        gray: {
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#A0AEC0',
          400: '#718096',
          500: '#2D3748',
         },
         green: {
           100: '#42b883'
         }
      },
      fontFamily:{
        inter: ['Inter']
      }
    },
  },
  plugins: [],
  variants: {},
}