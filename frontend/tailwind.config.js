import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ✅ Add paths to your files
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
