import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    vue(),
    imagetools()
  ],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png','**/*.PNG', '**/*.svg'],
  server: {
    hmr: {
      overlay: false
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
