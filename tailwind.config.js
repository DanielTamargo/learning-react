/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      scale: {
        '101': '1.01',
        '105': '1.05',
        '175': '1.75',
      },

      colors: {
        'main-dark': '#1C0B19',
        'main-blue': '#140D4F',
        'main-light': '#4EA699',
        'main-success': '#2DD881',
      }
    },
  },
  plugins: [],
}
