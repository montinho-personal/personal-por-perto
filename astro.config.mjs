import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { cidades } from './src/data/cidades';

// Canonical production URL of the portal.
const SITE = 'https://www.personalporperto.com.br';

// Mapa slug -> nome, para anexar a capa de cada cidade ao sitemap de imagens.
const nomePorSlug = Object.fromEntries(cidades.map((c) => [c.slug, c.nome]));

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
    // 'directory' gera /pagina/index.html — URLs limpas em qualquer host
    // estático (Vercel, Netlify, Cloudflare Pages).
    format: 'directory',
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
      // Sitemap de imagens: anexa a capa de cada cidade à sua URL.
      serialize(item) {
        const m = item.url.match(/\/personal-trainer\/([^/]+)\/?$/);
        const slug = m && m[1];
        if (slug && nomePorSlug[slug]) {
          item.img = [
            {
              url: `${SITE}/capas/personal-trainer-${slug}.png`,
              title: `Personal Trainer em ${nomePorSlug[slug]}`,
              caption: `Guia de personal trainer em ${nomePorSlug[slug]} — Personal por Perto.`,
            },
          ];
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
});
