/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [svgr(), react(), tsconfigPaths(), viteCommonjs()],
    // external: ['styled-components'],
    // test: {
    //   globals: true,
    //   environment: 'jsdom',
    //   setupFiles: './src/setupTests.ts'
    // },
    server: {
      host: true,
      port: +env.VITE_PORT || 9006,
    },
    css: {
      devSourcemap: true
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src')
        }
      ]
    }
  };
});
