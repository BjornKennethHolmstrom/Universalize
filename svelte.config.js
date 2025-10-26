// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  
  preprocess: [
    vitePreprocess(),
    mdsvex(mdsvexConfig)
  ],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/Universalize' : ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404s for paths that don't start with base
        // These are internal markdown links that will be fixed by rehype
        if (message.includes('does not begin with `base`')) {
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
