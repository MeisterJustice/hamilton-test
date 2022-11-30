/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/views/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        xl: "90rem",
      },
      fontSize: {
        base: [
          "14px",
          {
            lineHeight: "18px",
          },
        ],
        h1: [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
      },
    },
  },
  plugins: [],
};
