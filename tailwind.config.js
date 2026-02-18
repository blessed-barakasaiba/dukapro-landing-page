/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // For React
    "../templates/**/*.html"       // For Django templates if you use them
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

