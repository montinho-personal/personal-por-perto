import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production URL of the portal.
const SITE = 'https://personalporperto.com.br';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
    format: 'file',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
  ],
  compressHTML: true,
});
