/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  theme: {
    extend: {
      animation: {
        "slide-left-to-right": "slideLTR 1s ease-in-out forwards",
        "slide-in-out": "slideInOut 5s ease-in-out forwards infinite", // Thời gian tùy chỉnh
        "slide-right-to-left": "slideRTL 1s ease-in-out forwards", // Thêm hiệu ứng mới
        "slide-in-left": "slideInLeft 1.5s ease-out forwards",
        "slide-in-right": "slideInRight 1.5s ease-out forwards",
      },
      keyframes: {
        slideLTR: {
          "0%": { transform: "translateX(0%)", opacity: 0 },
          "100%": { transform: "translateX(30%)", opacity: 1 },
        },
        // slideInOut: {
        //   "0%": { width: "-100%" },
        //   "50%": { width: "100%" },
        //   "100%": { width: "0%" },
        // },
        slideRTL: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
