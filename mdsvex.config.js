import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svx'],
  smartypants: {
    dashes: 'oldschool'
  }
});

export default config;
