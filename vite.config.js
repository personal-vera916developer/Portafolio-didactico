import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
    environment:"jsdom",
    globals: true,
    include: ["test/**"],
    coverage:{
      exclude:[
        'src/main.jsx',
        'eslint.config.js',
        'vite.config.js',
        'dist'
      ]  
   }
  }
})
