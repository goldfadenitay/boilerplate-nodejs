import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'esnext',
        outDir: 'dist',
        ssr: true,
        rollupOptions: {
            input: 'src/index.ts',
            output: {
                format: 'esm',
            },
        },
    },
});
