import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist',
		sourcemap: true,
		lib: {
			entry: 'src/serverless.ts',
			formats: ['cjs'],
		},
	},
})
