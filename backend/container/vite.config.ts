import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	server: {
		port: 3000,
		watch: {
			usePolling: true,
		},
	},
	test: {
		alias: {
			'@/': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist',
		target: 'node18',
		ssr: true,
		rollupOptions: {
			input: 'src/index.ts',
			output: {
				format: 'esm',
				entryFileNames: 'index.js',
			},
			external: [
				'express',
				'express-validator',
				'zod',
				/^node:.*/,
				/node_modules/,
			],
			preserveEntrySignatures: 'strict',
		},
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
	},
})
