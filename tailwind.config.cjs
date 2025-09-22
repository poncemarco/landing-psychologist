/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBF9F7',  // Muy claro, casi blanco
          100: '#EAE5DE',
          200: '#D5CDC0',
          300: '#BFB5A2',
          400: '#AA9C84',
          500: '#94846B',  // Tono ligeramente más oscuro que el original para un buen contraste
          600: '#7F6D55',  // Tu color original estaría muy cerca de aquí o 500
          700: '#6A5842',
          800: '#544431',
          900: '#3F3223',
          950: '#2A2016',  // Muy oscuro, casi negro
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        // Dejamos Playfair Display como tu fuente serif, ideal para títulos
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        // AQUÍ HACEMOS EL CAMBIO: Reemplazamos 'Source Sans Pro' por 'Montserrat'
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};