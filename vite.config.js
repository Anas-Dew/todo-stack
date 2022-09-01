const { resolve } = require('path')
const { defineConfig } = require('vite')
// import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
    plugins: [
      EnvironmentPlugin(['API_URL']),
    ],
  }
})