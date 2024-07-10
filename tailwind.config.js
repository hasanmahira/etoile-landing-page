const aspectRatio = require('@tailwindcss/aspect-ratio');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'neon': '0 0 15px rgba(255, 255, 255, 0.5)'
      },
      colors: {
        "blue-etoile": "#4286F5",
        "purple-etoile": "#7C448B",
        "magenta-etoile": "#C350E2",
        "dark-etoile": "#000C02",
        "deep-purple": "#27195A",
        "light-gray": "#F2F3F8",
        "royal-blue": "#373FBE",
        "teal-etoile": "#8BD9C3",
        "dark-green": "#073A0E",
        "cyan-etoile": "#04F5EF",
        "aqua-etoile": "#3CBAAF",
        "black-etoile": "#000000",
        "white-etoile": "#FFFFFF",
        "gray-etoile": "#F6F5F6",
        "light-cyan": "#EAF5F2",
        "bright-blue": "#1369D8",
        "navy-etoile": "#021059",
        midnight: "#010724",
        navy: "#0D0111", // Example of adding a custom color
        primary: "#4286F5", // Primary button color
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#FFF',
        red: '#E35050',
        'like-green': '#28646E',
        'like-cyan': '#50E3C2',
        'like-cyan-light': '#AAF1E7',
        'like-cyan-vlight': '#D7ECEC',
        'dark-gray': '#4A4A4A',
        'medium-gray': '#9B9B9B',
        'shade-gray': '#EBEBEB',
        'light-gray': '#F7F7F7',
        'airdrop-gold': '#D1AB79',
        'neon-blue': '#00dbde',
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        darkmode: ["Darkmode DarkmodeOn", "sans-serif"],
        "darkmode-xl": ["Darkmode DarkmodeOn XLight", "sans-serif"],
        'display': 'proxima-nova, sans-serif',
        'body': '"Open Sans", sans-serif',
      },
      fontSize: {
        104: "104px", // add custom font-sizes as needed
      },
      letterSpacing: {
        "4-99": "4.99px", // example of custom letter spacing
      },
      lineHeight: {
        182: "182px", // custom line heights
      },
    },
  },
  variants: {
    extend: {
      keyframes: {
        ['key-visual-pulse']: {
          '0%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
      },
      height: {
        '1/2': '50%',
        '3/4': '75%',
        '90': '90%',  // Custom height as 90%
      }
    },
  },
  plugins: [aspectRatio],
}
