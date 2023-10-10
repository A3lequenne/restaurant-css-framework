import { defineConfig } from "vite"
import { resolve } from "path"

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default {
  base: '/restaurant-css-framework/',
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        menu: resolve(root, 'menu', 'index.html'),
        about_us: resolve(root, 'about_us', 'index.html'),
        gallery: resolve(root, 'gallery', 'index.html'),
        contact: resolve(root, 'contact', 'index.html'),
        gallery_2: resolve(root, 'gallery_2', 'index.html'),
        gallery_3: resolve(root, 'gallery_3', 'index.html'),
      }
    }
  }
}