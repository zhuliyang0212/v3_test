import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.4.42:8089',
        changeOrigin: true,
        ws: true,
        rewrite: <any>((path: string) => {
          path.replace(/^\/api/, '')
        })
      }
    }
  },
  resolve: {
    alias: {
    // '@': pathResolve('./src')
      '@': path.resolve(__dirname, './src')
    }
  },

})
