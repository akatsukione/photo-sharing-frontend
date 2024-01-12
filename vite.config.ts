import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    svgrPlugin(),
    tsConfigPaths(),
  ],
  build: {
    outDir: 'build',
  },
});
