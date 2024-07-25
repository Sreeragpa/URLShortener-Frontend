/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        text_color:"rgba(var(--text-color))",
        bg_color: "rgba(var(--bg-color))",
        accent_blue: "rgba(var(--accent-blue))",
        accent_light_blue: "rgba(var(--accent-light-blue))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

