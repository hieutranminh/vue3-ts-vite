import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
  },
});
