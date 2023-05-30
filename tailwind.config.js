/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'S0': '28rem',
        'S1': '32rem',
        'S2': '36rem',
        'S3': '60rem',
        'S4': '29rem',
        'S5': '50rem',
        'S6': '22rem'
      },

      colors: {
        'color1': '#7380a8',
        'color2': '#5C469C'
      }
    },
  },
  plugins: [],
}
