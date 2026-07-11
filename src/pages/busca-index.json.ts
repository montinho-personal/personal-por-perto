/**
 * Índice estático da busca do menu (gerado no build). Cada item tem:
 *   t — título exibido na sugestão
 *   s — subtítulo (categoria / UF)
 *   u — URL da página
 *   k — texto usado no casamento da busca (nome, UF, estado…)
 */
import type { APIRoute } from 'astro';
import { cidades } from '../data/cidades';
import { artigos } from '../data/artigos';

export const GET: APIRoute = () => {
  const itens = [
    ...cidades.map((c) => ({
      t: `Personal trainer em ${c.nome}`,
      s: `${c.tipo === 'regiao' ? 'Região' : 'Cidade'} · ${c.uf}`,
      u: `/personal-trainer/${c.slug}`,
      k: `${c.nome} ${c.uf} ${c.estado}`,
    })),
    ...artigos.map((a) => ({
      t: a.titulo,
      s: a.categoria,
      u: a.url,
      k: a.titulo,
    })),
    { t: 'Encontrar personal por cidade', s: 'Seção', u: '/personal-trainer/', k: 'encontrar personal cidades diretorio' },
    { t: 'Guias de contratação', s: 'Seção', u: '/guias/', k: 'guias contratar personal trainer' },
    { t: 'Musculação', s: 'Seção', u: '/musculacao/', k: 'musculacao treino hipertrofia' },
    { t: 'Emagrecimento', s: 'Seção', u: '/emagrecimento/', k: 'emagrecimento perder peso' },
    { t: 'Mounjaro e Treino', s: 'Seção', u: '/mounjaro-e-treino/', k: 'mounjaro tirzepatida treino' },
  ];

  return new Response(JSON.stringify(itens), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
