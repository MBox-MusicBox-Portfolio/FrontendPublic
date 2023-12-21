import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@Modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@Utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@Components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@Jsons': fileURLToPath(new URL('./src/Jsons', import.meta.url)),
      '@Stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@Images': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
    }
  }
})
