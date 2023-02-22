/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
  container :{
    padding : '16px',
    center : true,

  },
  extend: {
    screens:{
      '2xl' : '1320'
    }
  },
},
plugins: [],
}
