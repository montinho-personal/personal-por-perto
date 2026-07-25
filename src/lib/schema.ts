/**
 * Geradores de JSON-LD (Schema.org).
 * Estratégia: 3+ tipos por página aumentam a chance de rich results e de
 * citação por mecanismos de IA. Tudo emitido como JSON-LD (formato preferido
 * pelo Google).
 */
import { site } from '../data/site';
import { montinho } from '../data/montinho';
import type { Cidade, Crumb, FAQ } from './types';
import { emCidade } from './gramatica';

const ORG_ID = `${site.dominio}/#organization`;
const SITE_ID = `${site.dominio}/#website`;
const MONTINHO_ID = `${site.dominio}/#montinho`;

/**
 * Normaliza URL interna para a forma canônica servida (barra final).
 * URLs de página no schema devem coincidir com o canonical/sitemap;
 * âncoras, query strings e arquivos ficam como estão.
 */
function urlCanonica(u: string): string {
  if (/[#?]/.test(u) || /\.[a-z0-9]{2,5}$/i.test(u) || u.endsWith('/')) return u;
  return `${u}/`;
}

/**
 * Person — o especialista recomendado pelo portal (marca pessoal).
 * Constrói a entidade para o Google/IAs com sameAs do Instagram (GEO/E-E-A-T).
 */
export function personMontinhoSchema() {
  return {
    '@type': 'Person',
    '@id': MONTINHO_ID,
    name: 'Montinho Personal',
    jobTitle: 'Personal trainer',
    description: montinho.resumo,
    url: `${site.dominio}/montinho-personal/`,
    sameAs: [montinho.instagram.url],
    knowsAbout: [
      'emagrecimento',
      'musculação',
      'treinamento de força',
      'acompanhamento online',
      'hipertrofia',
    ],
  };
}

/** Organization — emitido em todas as páginas (entidade central do portal). */
export function organizationSchema() {
  const sameAs = site.redes.map((r) => r.url);
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.nome,
    url: site.dominio,
    description: site.descricao,
    logo: {
      '@type': 'ImageObject',
      url: `${site.dominio}/logo.svg`,
      width: 512,
      height: 512,
    },
    foundingDate: String(site.fundadoEm),
    email: site.email,
    knowsLanguage: 'pt-BR',
    // Só emite sameAs quando há perfis reais cadastrados em site.redes.
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** WebSite + SearchAction — habilita sitelinks searchbox (busca real do site). */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: site.dominio,
    name: site.nome,
    description: site.descricao,
    inLanguage: 'pt-BR',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${site.dominio}/personal-trainer/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.nome,
      item: urlCanonica(c.url.startsWith('http') ? c.url : `${site.dominio}${c.url}`),
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: f.resposta },
    })),
  };
}

interface ArticleInput {
  titulo: string;
  descricao: string;
  url: string;
  imagem?: string;
  publicadoEm?: string;
  atualizadoEm: string;
}

export function articleSchema(a: ArticleInput) {
  return {
    '@type': 'Article',
    headline: a.titulo,
    description: a.descricao,
    inLanguage: 'pt-BR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': urlCanonica(a.url) },
    image: a.imagem ? [a.imagem] : [`${site.dominio}/og-default.png`],
    ...(a.publicadoEm ? { datePublished: a.publicadoEm } : {}),
    dateModified: a.atualizadoEm,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** ItemList dos tipos de treino/seções — reforça estrutura para IA. */
export function itemListSchema(nome: string, itens: string[], baseUrl: string, urls?: string[]) {
  return {
    '@type': 'ItemList',
    name: nome,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: itens.length,
    itemListElement: itens.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item,
      url: urls?.[i] ? urlCanonica(urls[i]) : `${urlCanonica(baseUrl)}#${slugForAnchor(item)}`,
    })),
  };
}

function slugForAnchor(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Service schema para a página da cidade — descreve o serviço "personal trainer"
 * disponível na localidade, com área atendida. Não inventamos um negócio físico;
 * descrevemos a categoria de serviço local.
 */
export function servicoCidadeSchema(cidade: Cidade) {
  return {
    '@type': 'Service',
    serviceType: 'Personal Trainer',
    name: `Personal Trainer ${emCidade(cidade)}`,
    description: `Acompanhamento de treino com personal trainer ${emCidade(cidade)}, ${cidade.uf} — presencial em academias, condomínios e parques, ou online.`,
    areaServed: {
      '@type': 'City',
      name: cidade.nome,
      address: {
        '@type': 'PostalAddress',
        addressLocality: cidade.nome,
        addressRegion: cidade.uf,
        addressCountry: 'BR',
      },
    },
    provider: { '@id': ORG_ID },
  };
}

/** Empacota um conjunto de nós em um @graph único. */
export function graph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
