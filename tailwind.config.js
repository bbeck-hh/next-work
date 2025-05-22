/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3e7ce',
        secondary: '#240707',
        blue: {
          600: '#1d50c0',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};
