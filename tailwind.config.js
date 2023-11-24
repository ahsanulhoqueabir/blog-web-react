/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#00bfe3",
                
        "secondary": "#00cc90",
                
        "accent": "#00f3b0",
                
        "neutral": "#292621",
                
        "base-100": "#fff3ff",
                
        "info": "teal",
                
        "success": "#00b97f",
                
        "warning": "#ff5c00",
                
        "error": "#c40038",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

