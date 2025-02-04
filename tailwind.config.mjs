/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B4E71', // Soft purple - professional and calming
        secondary: '#F4EBE8', // Soft beige - warm and welcoming
        accent: '#9B6B9E', // Muted rose - feminine and professional
        text: '#2D232E', // Deep purple-gray - for text
        light: '#FAF6F7', // Light pink-white - for backgrounds
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}