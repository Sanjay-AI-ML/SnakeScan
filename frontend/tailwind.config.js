/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 950:'#030712', 900:'#0a0f1e', 800:'#0f172a', 700:'#1e293b', 600:'#334155', 500:'#16a34a', 400:'#22c55e', 300:'#4ade80' },
        danger: '#dc2626', warn: '#d97706', safe: '#16a34a', critical: '#dc2626',
      },
      fontFamily: { sans: ['Inter','system-ui','sans-serif'], mono: ['JetBrains Mono','monospace'] },
    },
  },
  plugins: [],
}
