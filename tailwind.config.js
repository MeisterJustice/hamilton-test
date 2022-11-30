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
          "16px",
          {
            lineHeight: "18px",
          },
        ],
        h1: [
          "34px",
          {
            lineHeight: "35px",
          },
        ],
        "h1-sm": [
          "24px",
          {
            lineHeight: "20px",
          },
        ],
      },
    },
  },
  plugins: [],
};
