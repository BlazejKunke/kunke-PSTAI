/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#146A5C',
        mint: '#EEF8F4',
        accent: '#F4B740',
        text: '#0E0F10'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero': ['2.75rem', { lineHeight: '1.1' }]
      }
    },
  },
  plugins: [],
}