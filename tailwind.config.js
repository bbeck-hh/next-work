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
        secondary: '#240707',
        third: '#0E450C',
        fourth: '#BCFCA6',
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
