/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 10px rgba(0, 0, 0, 0.15)', // Custom shadow
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      gridTemplateColumns: {
        'custom': '2fr 1fr 1fr',
      },
      screens: {
        'custom-sm': '750px',
        'custom-md': '900px',
        'custom-lg': '1050px',
      },
    },
  },
  plugins: [],
}
