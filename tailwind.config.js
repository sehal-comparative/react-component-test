/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    /* Button.Icon */
    { pattern: /sr-only/ },

    /* Form.tsx */
    { pattern: /space-y-/ },

    /* Switch */
    { pattern: /^h-/ },
    { pattern: /^w-/ },

    { pattern: /translate-x/ },

    { pattern: /indigo/ },
    /* messages */
    { pattern: /blue/ },
    { pattern: /green/ },
    { pattern: /red/ },
    { pattern: /yellow/ },
    { pattern: /purple/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
