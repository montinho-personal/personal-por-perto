/**
 * Helpers de linkagem interna. Centralizam URLs dos pilares e fornecem variação
 * de âncora (anti keyword-stuffing). A variação é determinística por índice para
 * não repetir a mesma âncora na mesma página.
 */
import type { Cidade } from './types';
import { slugify } from './slug';
import { montinho } from '../data/montinho';
import { emCidade } from './gramatica';

/**
 * Monta o link do WhatsApp do Montinho com mensagem pré-preenchida (opcional).
 * Abre direto a conversa; a mensagem contextualiza o lead (de onde veio/objetivo).
 */
export function whatsappUrl(mensagem?: string): string {
  const base = `https://wa.me/${montinho.whatsapp.numero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

/** Domínio externo recomendado pelo portal (sem UTM). */
const MONTINHO_BASE = 'https://montinhopersonal.com.br';

/**
 * Monta a URL do Montinho Personal com parâmetros UTM, para que o Google
 * Analytics do Montinho atribua corretamente as visitas vindas deste portal.
 * `content` identifica o local do clique (ex.: 'header', 'cidade-sao-paulo-sp'),
 * permitindo ver no relatório quais páginas mais geram cliques.
 */
export function montinhoUrl(content = 'site'): string {
  const params = new URLSearchParams({
    utm_source: 'personalporperto.com.br',
    utm_medium: 'referral',
    utm_campaign: 'portal-personal-por-perto',
    utm_content: content,
  });
  return `${MONTINHO_BASE}/?${params.toString()}`;
}

/** UTM content padronizado para o CTA a partir de uma cidade (ou geral). */
export function montinhoUrlCidade(cidade?: string): string {
  return montinhoUrl(cidade ? `cidade-${slugify(cidade)}` : 'recomendacao');
}

// URLs sempre com barra final: é a forma servida pelo build 'directory'
// (sem barra o host responde 301, desperdiçando crawl budget).
export const rotas = {
  cidades: '/personal-trainer/',
  guias: '/guias/',
  comoEscolher: '/guias/como-escolher-personal-trainer/',
  quantoCusta: '/guias/quanto-custa-personal-trainer/',
  montinho: '/montinho-personal/',
  comoAvaliamos: '/como-avaliamos/',
  sobre: '/sobre/',
  musculacao: '/musculacao/',
  emagrecimento: '/emagrecimento/',
  mounjaro: '/mounjaro-e-treino/',
  humor: '/humor-fitness/',
  ferramentas: '/ferramentas/',
  ferramentaMatch: '/ferramentas/encontre-seu-personal-ideal/',
  ferramentaPreco: '/ferramentas/calculadora-preco-personal/',
  ferramentaRotina: '/ferramentas/treino-para-minha-rotina/',
  ferramentaAuditoria: '/ferramentas/meu-treino-faz-sentido/',
} as const;

/** Âncoras variadas para uma cidade. `i` escolhe a variação. */
export function anchorCidade(cidade: Pick<Cidade, 'nome' | 'slug'>, i = 0): string {
  const em = emCidade(cidade);
  const v = [
    `personal trainer ${em}`,
    `treinador particular ${em}`,
    `profissional de educação física ${em}`,
    `acompanhamento de treino ${em}`,
    `treino personalizado ${em}`,
  ];
  return v[i % v.length];
}

/** Âncoras variadas para o pilar "como escolher". */
export function anchorComoEscolher(i = 0): string {
  const v = [
    'como escolher um personal trainer',
    'guia para contratar com segurança',
    'critérios para escolher o profissional certo',
    'passo a passo para avaliar um personal',
  ];
  return v[i % v.length];
}

/** Âncoras variadas para o pilar "quanto custa". */
export function anchorQuantoCusta(i = 0): string {
  const v = [
    'quanto custa um personal trainer',
    'faixas de preço atualizadas',
    'quanto investir em um personal',
    'guia de preços por formato',
  ];
  return v[i % v.length];
}

/** Âncoras variadas para a recomendação de acompanhamento online (Montinho). */
export function anchorMontinho(i = 0): string {
  const v = [
    'acompanhamento online com foco em emagrecimento',
    'consultoria personalizada a distância',
    'treino online para todo o Brasil',
    'a recomendação editorial do portal',
  ];
  return v[i % v.length];
}
