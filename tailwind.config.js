/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        funky: "linear-gradient(90deg, #FF00A8 0%, #00E0FF 100%)",
        royal: "linear-gradient(90deg, #6F4CFF 0%, #432E99 100%)",
      }),
      borderColor: {
        lavendar: "#8682B1",
      },
      colors: {
        gray: "#8B8B8B",
        midnight: "#191919",
        yellow: "#ffdc82",
        "yellow-light": "#ffdc62",
        white: "#f1f1f1",
        red: "#ff8181",
        blue: "#56acc7",
        orange: "#c68142",
        green: "#75a252",
        pink: "#9d2382",
        purple: "#646cff",
      },
    },
  },
  plugins: [],
};
