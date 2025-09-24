import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        marromAtelie: '#6A230F',
        brancoAtelie: '#F6F3E8',
        rosaAtelie: '#FFD9EA',
        cinzaAtelie:'#545454'
      }
    },
  },
  plugins: [],
})
