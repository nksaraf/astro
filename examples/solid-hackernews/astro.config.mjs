import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import solid from '@astrojs/solid-start';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [svelte(), solid()],
});
