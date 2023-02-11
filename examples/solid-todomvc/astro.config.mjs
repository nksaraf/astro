import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import solid from '@astrojs/solid-start';
import node from '@astrojs/node';
import inspect from 'vite-plugin-inspect';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	// vite: {
	// 	plugins: [solidStart({ inspect: false })],
	// },
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [svelte(), solid()],
});
