/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tile-pattern': ` linear-gradient(white 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.3) 2px, transparent 2px);`,
      },
      backgroundSize: {
        'tile-pattern': '100px 100px',
      },

      colors: {
      },
    },
  },
  plugins: [],
}