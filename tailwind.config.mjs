/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#989e95",
        "pink": "#e7dbd9",
        "yellow": "#e6e2cc",
        "gray": "#ededed",
        "dark-gray": "#3b3b3b",
        "darkdark-gray": "#242424",
        "brown": "#2e1700",
        "medium-gray": "#6b6b6b",
        "light-gray": "#636363",
        "light-orange": "#fccaab",
        "light-light-gray": "#b8b8b8",
        "light-green" :"#a8ffa8"
            },
      fontFamily: {
        lora: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 5px rgba(255, 255, 255, 0.3)',
        },
      });
    },
  ],
};
