/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        preto: "#28262C",
        roxo: "#998FC7",
        roxo_claro: "#D4C2FC",
        branco: "#F9F5FF",
      },
    },
  },
  plugins: [],
};
