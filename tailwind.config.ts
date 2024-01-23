const COLORS = {
  inherit: "inherit",
  transparent: "transparent",
  current: "currentColor",
  primary: {
    DEFAULT: "#123363",
  },
  secondary: {
    DEFAULT: "#ee5b56",
  },
  text: "#2d2d2d",
  white: "#ffffff",
  light: {
    DEFAULT: "#e5edf3",
  },
  black: "#000000",
  error: {
    DEFAULT: "#ee5b56",
  },
};

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  presets: [require("@uxf/ui/utils/tailwind-config")],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@uxf/ui/**/*.js"],
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
