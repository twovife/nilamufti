/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/mainbg.jpg')",
        "image-1": "url('/bg1.jpg')",
        "image-atas": "url('/atas.png')",
        "image-bawah": "url('/bawah.png')",
      },
      colors: {
        main: "#129B7A",
      },
    },
  },
  plugins: [],
};

module.exports = config;
