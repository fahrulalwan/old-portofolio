module.exports = {
  theme: {
    fontFamily: {
      display: ['Sailec-Medium', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Sailec-Light', 'Helvetica', 'Arial', 'sans-serif']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widestest: '.25em',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem'
    },

  },
  variants: {
    letterSpacing: ['default', 'responsive', 'hover', 'focus'],
    fontSize: ['default', 'responsive', 'hover', 'focus']
  },
  plugins: []
};
