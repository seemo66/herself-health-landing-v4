/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        reckless: ['Reckless', 'sans-serif'],
        untitled: ['Untitled Sans', 'sans-serif'],
      },
      colors: {
        lightPink: '#f9d6f0',
        pink: '#9A0180',
        darkPink: '#6a0058',
        tan: '#fff5ed',
        purple: '#8755F1',
        'purple-dark': '#7c4dcf', // hover state
        'purple-darker': '#8755F11A',
        'dusty-indego': '#425281',
        text: '#000000',
      },
      boxShadow: {
        header:
          '0 3px 6px 0 #0000001A,0 11px 11px 0 #00000017,0 25px 15px 0 #0000000D,0 45px 18px 0 #00000003,0 70px 20px 0 #00000000',
      },
    },
  },
  plugins: [],
};
