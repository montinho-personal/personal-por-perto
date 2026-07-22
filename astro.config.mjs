import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { cidades } from './src/data/cidades';
import { estados } from './src/data/estados';

// Canonical production URL of the portal.
const SITE = 'https://www.personalporperto.com.br';

// Mapa slug -> nome, para anexar a capa de cada cidade ao sitemap de imagens.
const nomePorSlug = Object.fromEntries(cidades.map((c) => [c.slug, c.nome]));
// Mapa slug -> arte de capa personalizada (quando existir), usada no sitemap
// de imagens no lugar da capa gerada padrão.
const capaArtePorSlug = Object.fromEntries(
  cidades.filter((c) => c.capaArte).map((c) => [c.slug, c.capaArte]),
);
// Mapas slug -> data real de revisão, para um lastmod confiável por página
// (Google ignora lastmod quando ele muda em tudo a cada deploy).
const lastmodCidade = Object.fromEntries(cidades.map((c) => [c.slug, c.atualizadoEm]));
const lastmodEstado = Object.fromEntries(estados.map((e) => [e.slug, e.atualizadoEm]));

/** Converte 'YYYY-MM-DD' em Date estável (meio-dia UTC evita virada de fuso). */
const dataRevisao = (iso) => new Date(`${iso}T12:00:00Z`);

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
      filter: (page) => !page.includes('/404'),
      // lastmod confiável por página + sitemap de imagens das cidades.
      serialize(item) {
        // Cidades: capa no sitemap de imagens + data real de revisão.
        const mc = item.url.match(/\/personal-trainer\/([^/]+)\/?$/);
        const slug = mc && mc[1];
        if (slug && nomePorSlug[slug]) {
          // Alphaville usa a foto real de transformação no lugar da capa padrão.
          const imgAlphaville = slug === 'alphaville-sp';
          const arte = capaArtePorSlug[slug];
          item.img = [
            {
              url: arte
                ? `${SITE}${arte.src}`
                : imgAlphaville
                  ? `${SITE}/montinho/personal-trainer-alphaville.webp`
                  : `${SITE}/capas/personal-trainer-${slug}.png`,
              title: arte
                ? `Personal Trainer em ${nomePorSlug[slug]}`
                : imgAlphaville
                  ? 'Antes e depois do Montinho Personal — personal trainer em Alphaville'
                  : `Personal Trainer em ${nomePorSlug[slug]}`,
              caption: arte
                ? arte.alt
                : `Guia de personal trainer em ${nomePorSlug[slug]} — Personal por Perto.`,
            },
          ];
          if (lastmodCidade[slug]) item.lastmod = dataRevisao(lastmodCidade[slug]);
        }
        // Estados: data real de revisão do estado.
        const me = item.url.match(/\/estado\/([^/]+)\/?$/);
        const est = me && me[1];
        if (est && lastmodEstado[est]) {
          item.lastmod = dataRevisao(lastmodEstado[est]);
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
});
