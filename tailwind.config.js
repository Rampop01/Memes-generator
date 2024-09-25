/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neumorphic: "10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff",
        "inner-neumorphic":
          "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff",
      },
    },
  },
  plugins: [],
};
