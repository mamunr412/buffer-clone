/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "rgba(0, 0, 0, 0.1) 0px 6px 24px;",
        "3xl": "rgba(0, 0, 0, 0.2) 0px 0px 30px -1px",
      },
      borderRadius: {
        full: "100vmax",
      },
    },
  },
  plugins: [],
};
