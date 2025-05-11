/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5f0',
          100: '#f3e9e0',
          200: '#e7d4c1',
          300: '#dbbe9f',
          400: '#cfa37d',
          500: '#c28b5b',
          600: '#b77648',
          700: '#965c3c',
          800: '#794a35',
          900: '#633d2f',
          950: '#341f18',
        },
        secondary: {
          50: '#f2f8f5',
          100: '#dff0e6',
          200: '#c0e0ce',
          300: '#96c9ad',
          400: '#67ac85',
          500: '#488f6a',
          600: '#357453',
          700: '#2c5d45',
          800: '#264a39',
          900: '#213d31',
          950: '#11221c',
        },
        accent: {
          50: '#fbf7f3',
          100: '#f7ede2',
          200: '#efdac0',
          300: '#e5c098',
          400: '#dba06a',
          500: '#d28346',
          600: '#c06a3a',
          700: '#a05032',
          800: '#82412e',
          900: '#6b3728',
          950: '#391a14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};