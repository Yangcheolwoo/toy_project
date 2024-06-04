import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  server: {
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
      },
    },

    port: 3000,
  },
  resolve: {
    alias: { find: '@', replacement: '/src' },
  },
});
