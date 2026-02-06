/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",    
  ],
  theme: {
    extend: {
      colors: {
        // Indian Flag Theme Colors
        saffron: {
          DEFAULT: '#FF9933',
          light: '#FFB366',
          dark: '#E68A2E',
          50: '#FFF5EB',
          100: '#FFE6CC',
          200: '#FFCC99',
          300: '#FFB366',
          400: '#FF9933',
          500: '#E68A2E',
          600: '#CC7A29',
          700: '#B36B24',
          800: '#995C1F',
          900: '#804D1A',
        },
        indiaGreen: {
          DEFAULT: '#138808',
          light: '#1AAF0D',
          dark: '#0F6B06',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#138808',
          600: '#107007',
          700: '#0D5806',
          800: '#0A4005',
          900: '#072804',
        },
        navy: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
          dark: '#0f0f1a',
        },
        charcoal: {
          DEFAULT: '#4a4a4a',
          light: '#6a6a6a',
          dark: '#2a2a2a',
        },
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

