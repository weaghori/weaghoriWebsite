/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightGold': "#f6d98d",
        'darkGold': "#80652e",
        'dimGold': "rgba(133, 105, 45, 0.1)",
        'formBg': "#1c1f21",
        'lightText': "#676772"
      },

      screens: {

        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }

        'xl': '1600px',
        // => @media (min-width: 1600px) { ... }

        '2xl': '1920px',
        // => @media (min-width: 1920px) { ... }

      },

      fontFamily: {
        'mono': 'Manrope',
      },

      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        zoom: 'zoom 1s ease-in-out', // Adjust timing here
      },

      cursor: {
        'custom': 'url(/src/assets/images/CursorArrowWhite.png), auto', // Replace with your cursor path
      },
    },
  },
  plugins: [],
}

