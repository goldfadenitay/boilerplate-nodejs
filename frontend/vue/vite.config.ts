import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@composables': path.resolve(__dirname, './src/composables'),
			'@views': path.resolve(__dirname, './src/views'),
			'@store': path.resolve(__dirname, './src/store'),
			'@api': path.resolve(__dirname, './src/api'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@types': path.resolve(__dirname, './src/types'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
})
