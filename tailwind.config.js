/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

const textBorder = plugin(function ({ matchUtilities, theme, config, e }) {
  const textBorderWidth = `--tw${config("prefix")}-text-border-width`;
  const pos = `var(${textBorderWidth},1px)`;
  const neg = `calc(var(${textBorderWidth}, 1px) * -1)`;

  matchUtilities(
    {
      "text-border": (value) => ({
        "text-shadow": `
            ${pos} ${pos} 0 ${value},
            ${neg} ${neg} 0 ${value},
            ${pos} ${neg} 0 ${value},
            ${neg} ${pos} ${value};
          `,
      }),
    },
    {
      values: flattenColorPalette(theme("colors")),
      type: ["color", "any"],
    }
  );

  matchUtilities(
    {
      "text-border": (value) => ({
        [textBorderWidth]: value,
      }),
    },
    { values: theme("borderWidth") }
  );
});

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // extend standard tailwind colors
        background: "#888888",
        "primary-text": "#000000",
        "main-accent": "#3a5520",
      },
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwindcss-animate"), textBorder],
};
