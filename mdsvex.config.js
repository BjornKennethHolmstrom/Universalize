import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeUrls from 'rehype-urls';

const config = defineConfig({
  extensions: ['.svx'],
  smartypants: {
    dashes: 'oldschool'
  },
  rehypePlugins: [
    [
      rehypeUrls,
      (url, node) => {
        // Only modify internal links (starting with /)
        if (url.href && url.href.startsWith('/') && !url.href.startsWith('//')) {
          // Add base path when in production
          const base = process.env.NODE_ENV === 'production' ? '/Universalize' : '';
          url.href = base + url.href;
        }
        return url;
      }
    ]
  ]
});

export default config;
