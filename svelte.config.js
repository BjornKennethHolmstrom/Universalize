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
      // For GitHub Pages, use your repository name as base
      base: process.env.NODE_ENV === 'production' ? '/Universalize' : ''
    },
    // Add this to handle the HTTP errors
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore missing links during prerender
        if (path.includes('{base}')) {
          console.warn(`Ignoring invalid path: ${path}`);
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
