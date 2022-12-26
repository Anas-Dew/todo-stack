const { resolve } = require('path')
const { defineConfig } = require('vite')
// import { defineConfig } from 'vite'

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        documentation: resolve(__dirname, 'documentation.html')}
    }
  }
})