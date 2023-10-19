/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      primaryButton: {
        backgroundColor: '#304ffe', 
        color: '#fff',       
        padding: '8px 16px',       
        borderRadius: '4px',      
      },
    },
  },
  plugins: [],
};
