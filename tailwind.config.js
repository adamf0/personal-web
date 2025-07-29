/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // sesuaikan path kamu
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
