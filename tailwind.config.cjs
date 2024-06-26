const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: {
          1: "var(--teal-1)",
          2: "var(--teal-2)",
          3: "var(--teal-3)",
          4: "var(--teal-4)",
          5: "var(--teal-5)",
          6: "var(--teal-6)",
          7: "var(--teal-7)",
          8: "var(--teal-8)",
          9: "var(--teal-9)",
          10: "var(--teal-10)",
          11: "var(--teal-11)",
          12: "var(--teal-12)",
          surfaceDark: "#13272580",
          surfaceLight: "#f0faf8cc",
        },
        tealA: {
          1: "var(--teal-a1)",
          2: "var(--teal-a2)",
          3: "var(--teal-a3)",
          4: "var(--teal-a4)",
          5: "var(--teal-a5)",
          6: "var(--teal-a6)",
          7: "var(--teal-a7)",
          8: "var(--teal-a8)",
          9: "var(--teal-a9)",
          10: "var(--teal-a10)",
          11: "var(--teal-a11)",
          12: "var(--teal-a12)",
        },
        gray: {
          1: "var(--gray-1)",
          2: "var(--gray-2)",
          3: "var(--gray-3)",
          4: "var(--gray-4)",
          5: "var(--gray-5)",
          6: "var(--gray-6)",
          7: "var(--gray-7)",
          8: "var(--gray-8)",
          9: "var(--gray-9)",
          10: "var(--gray-10)",
          11: "var(--gray-11)",
          12: "var(--gray-12)",
        },
        grayA: {
          1: "var(--gray-a1)",
          2: "var(--gray-a2)",
          3: "var(--gray-a3)",
          4: "var(--gray-a4)",
          5: "var(--gray-a5)",
          6: "var(--gray-a6)",
          7: "var(--gray-a7)",
          8: "var(--gray-a8)",
          9: "var(--gray-a9)",
          10: "var(--gray-a10)",
          11: "var(--gray-a11)",
          12: "var(--gray-a12)",
        },
      },
    },
  },
  plugins: [],
};
