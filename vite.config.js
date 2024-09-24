import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "testpkg/b.css": "testpkg/proxy_b_css.js"
    }
  },
  optimizeDeps: {
    needsInterop: [
      "testpkg/proxy_b_css.js"
    ]
  },
  plugins: [vue()],
})
