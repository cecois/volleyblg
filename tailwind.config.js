module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      green: {
        100: '#D9D3DE',
        200: '#C7BFCF',
        300: '#B6ABC0',
        400: '#9284A2',
        500: '#897B9A',
        600: '#807192',
        700: '#6E5E83',
        800: '#493864',
        900: '#372554',
      },



      gray: {
        900:'#717479',
        800:'#878B91',
        700:'#9EA2A8',
        600:'#B5BAC0',
        500:'#CBD1D8',
        400:'#E2E8F0',
        300:'#E8F0F3',
        200:'#EDF6F6',
        100:'#F3F9F8'
      },
    },
    fontFamily: {
      sans: [
        'Hind',
        'Muli',
        'Catamaran',
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}
