import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { find: '@', replacement: '/src' },
  },

  server: {
    // proxy: {
    //   '/api': {
    //     target: 'https://search.naver.com/',
    //     changeOrigin: true,
    //   },
    // },

    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
});
