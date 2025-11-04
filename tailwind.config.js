/** @type {import('tailwindcss').Config} */
module.exports = {
  // Habilita el modo oscuro basado en una clase en el tag <html>
  darkMode: "class",
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#136dec",
        "background-light": "#f6f7f8",
        "background-dark": "#101822",
        // Los colores del form-container también estaban personalizados
        // (Aunque el HTML los usa directamente, es bueno tenerlos aquí)
        "card-dark": "#192433",
        "border-dark": "#324867",
        "input-dark": "#111822",
        "placeholder-dark": "#92a9c9",
      },
      fontFamily: {
        // Define la fuente "display" usada en el <body>
        "display": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        // El HTML original usa 'rounded-lg' y 'rounded-xl', que ya existen.
        // Pero si quieres ser exacto con la config provista:
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // El plugin de 'forms' es necesario para 'form-input'
  ],
}