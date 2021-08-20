export default {
  pages: './src/pages',
  dist: './docs',
  public: './public',
  buildOptions: {
    site: 'https://github.readonlydev.com',
    sitemap: true,
  },
  devOptions: {
    //port: 3000,
  },
  renderers: ['@astrojs/renderer-preact', '@astrojs/renderer-react', '@astrojs/renderer-svelte', '@astrojs/renderer-vue', '@astrojs/renderer-solid'],
};
