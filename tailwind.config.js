/** @type {import('tailwindcss').Config} */
// import "./src/shared/assets/Phone.png"
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // 'img':"url('./src/shared/assets/Phone.png')"
      }
    },
  },
  plugins: [],
}

