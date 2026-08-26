/**
 * Índice enxuto de cidades para o autocomplete da ferramenta
 * "Encontre seu Personal Ideal".
 *
 * Propositalmente separado do índice da busca do menu: aqui só entram os
 * campos necessários (nome, UF, slug e uma chave de busca sem acento), o que
 * mantém o arquivo pequeno. Ele é carregado sob demanda — apenas quando a
 * pessoa chega na etapa de localização —, então não pesa no carregamento
 * inicial da página nem nos Core Web Vitals.
 */
import type { APIRoute } from 'astro';
import { cidades } from '../../data/cidades';

/** Remove acentos para casar "sao jose" com "São José". */
const semAcento = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export const GET: APIRoute = () => {
  const itens = cidades.map((c) => ({
    n: c.nome,
    u: c.uf,
    s: c.slug,
    k: semAcento(`${c.nome} ${c.uf}`),
  }));

  return new Response(JSON.stringify(itens), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
