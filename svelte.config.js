import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const dev = process.env.NODE_ENV === 'development';
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(
      {
        pages: 'build',
        assets: 'build',
        fallback: null
      }
    ),
    paths: {
      base: dev ? '' : '/sri-balaji-suppliers'
    },
    prerender: {
      handleMissingId: 'ignore'
    }
  }
};

export default config;
