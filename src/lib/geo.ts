/**
 * Resolver da hierarquia geográfica: Brasil › Estado › Cidade › Bairro.
 *
 * POR QUE ESTE ARQUIVO EXISTE
 *
 * Os dados geográficos já eram centralizados (`src/data/bairros.ts` e
 * `src/data/cidades/`), mas as RELAÇÕES entre eles estavam espalhadas: cada
 * página de bairro escrevia o próprio breadcrumb à mão, cada `relacionados`
 * era uma lista manual, e nenhuma delas linkava o estado. O resultado media-se
 * no HTML: 63 das 101 páginas de bairro recebiam **um único** link interno em
 * todo o site — a pílula da cidade-mãe.
 *
 * Este módulo é a única fonte de verdade para essas relações. Tudo o que
 * precisa navegar a hierarquia — breadcrumb visual, JSON-LD, cards da cidade,
 * bloco de relacionados, hub estadual, auditoria — pergunta aqui.
 *
 * REGRA QUE NÃO SE NEGOCIA: nada aqui infere proximidade. Dois bairros só são
 * relacionados se compartilham `zona` (divisão real da cidade) ou se alguém
 * declarou a relação à mão com um motivo escrito. Mesmo estado não conta.
 * Mesma cidade, sozinho, também não.
 */
import { bairros, bairrosPorCidade, type Bairro } from '../data/bairros';
import { cidadesPorSlug } from '../data/cidades';
import { estadoPorSlug } from '../data/estados';
import type { Cidade, Crumb } from './types';

/** Caminho oficial de cada tipo de página — sempre com barra final. */
export const rota = {
  home: () => '/',
  hub: () => '/personal-trainer/',
  estado: (estadoSlug: string) => `/estado/${estadoSlug}/`,
  cidade: (cidadeSlug: string) => `/personal-trainer/${cidadeSlug}/`,
  bairro: (bairroSlug: string) => `/${bairroSlug}/`,
} as const;

const porSlug: Record<string, Bairro> = Object.fromEntries(bairros.map((b) => [b.slug, b]));

/** O bairro, ou undefined se o slug não estiver registrado. */
export function getBairro(slug: string): Bairro | undefined {
  return porSlug[slug];
}

/** A cidade-mãe de um bairro. */
export function cidadeDoBairro(slug: string): Cidade | undefined {
  const b = porSlug[slug];
  return b ? cidadesPorSlug[b.cidade] : undefined;
}

/**
 * Breadcrumb completo de uma página de bairro, com os cinco níveis da
 * hierarquia: Início › Personal Trainer › Estado › Cidade › Bairro.
 *
 * Antes desta função cada página escrevia três níveis à mão, pulando o hub
 * nacional e o estado — o que tirava do bairro dois links de subida e deixava
 * o JSON-LD contando uma hierarquia diferente da real.
 */
export function crumbsBairro(slug: string): Crumb[] {
  const b = porSlug[slug];
  if (!b) throw new Error(`crumbsBairro: bairro "${slug}" não registrado em src/data/bairros.ts`);
  const cidade = cidadesPorSlug[b.cidade];
  if (!cidade) throw new Error(`crumbsBairro: cidade "${b.cidade}" do bairro "${slug}" não existe`);
  const estado = estadoPorSlug[cidade.estadoSlug];
  const crumbs: Crumb[] = [
    { nome: 'Início', url: rota.home() },
    { nome: 'Personal Trainer', url: rota.hub() },
  ];
  if (estado) crumbs.push({ nome: estado.nome, url: rota.estado(cidade.estadoSlug) });
  crumbs.push({ nome: cidade.nome, url: rota.cidade(cidade.slug) });
  crumbs.push({ nome: b.nome, url: rota.bairro(b.slug) });
  return crumbs;
}

export interface BairroRelacionado {
  bairro: Bairro;
  url: string;
  /** Por que este bairro aparece aqui. Vira texto na página. */
  motivo: string;
}

/**
 * Bairros relacionados a um bairro, no máximo `limite`.
 *
 * Ordem de prioridade:
 *   1. relações declaradas à mão (carregam o motivo escrito por quem declarou);
 *   2. bairros da MESMA cidade e da MESMA zona.
 *
 * Bairro sem `zona` e sem relação declarada devolve lista vazia — e a página
 * simplesmente não mostra o bloco. É o comportamento correto para Icaraí e
 * Gleba Palhano, que são os únicos bairros publicados das cidades deles:
 * inventar um "bairro próximo" ali seria mentira de arquitetura.
 */
export function relacionadosDoBairro(slug: string, limite = 4): BairroRelacionado[] {
  const b = porSlug[slug];
  if (!b) return [];
  const out: BairroRelacionado[] = [];
  const vistos = new Set([slug]);

  for (const r of b.relacionados ?? []) {
    const alvo = porSlug[r.slug];
    if (!alvo || vistos.has(r.slug)) continue;
    vistos.add(r.slug);
    out.push({ bairro: alvo, url: rota.bairro(alvo.slug), motivo: r.motivo });
  }

  if (b.zona) {
    const daZona = (bairrosPorCidade[b.cidade] ?? [])
      .filter((o) => o.zona === b.zona && !vistos.has(o.slug))
      .sort((x, y) => (y.prioridade ?? 0) - (x.prioridade ?? 0) || x.nome.localeCompare(y.nome, 'pt-BR'));
    for (const o of daZona) {
      if (out.length >= limite) break;
      vistos.add(o.slug);
      out.push({ bairro: o, url: rota.bairro(o.slug), motivo: `na mesma região da cidade (${b.zona})` });
    }
  }

  return out.slice(0, limite);
}

/**
 * Bairros de uma cidade, ordenados por prioridade editorial e depois por nome.
 * É a lista que a página da cidade publica — a principal fonte de autoridade
 * dos bairros, por desenho.
 */
export function bairrosDaCidade(cidadeSlug: string): Bairro[] {
  return [...(bairrosPorCidade[cidadeSlug] ?? [])].sort(
    (a, b) => (b.prioridade ?? 0) - (a.prioridade ?? 0) || a.nome.localeCompare(b.nome, 'pt-BR'),
  );
}

/**
 * Uma seleção pequena de bairros de um estado, para o hub estadual.
 *
 * Deliberadamente limitada: o hub estadual existe para distribuir autoridade
 * às CIDADES. Listar todos os bairros de todas as cidades transformaria a
 * página num diretório e diluiria o sinal. O corte prioriza bairros marcados
 * como prioritários e no máximo um por cidade, para não empilhar seis bairros
 * da capital e nenhum do resto do estado.
 */
export function bairrosDoEstado(estadoSlug: string, limite = 8): BairroRelacionado[] {
  const candidatos = bairros
    .map((b) => ({ b, cidade: cidadesPorSlug[b.cidade] }))
    .filter((x): x is { b: Bairro; cidade: Cidade } => !!x.cidade && x.cidade.estadoSlug === estadoSlug)
    .sort(
      (x, y) =>
        (y.b.prioridade ?? 0) - (x.b.prioridade ?? 0) ||
        (y.cidade.populacao ?? 0) - (x.cidade.populacao ?? 0) ||
        x.b.nome.localeCompare(y.b.nome, 'pt-BR'),
    );

  const out: BairroRelacionado[] = [];
  const porCidade = new Map<string, number>();

  /**
   * Três passes com cota crescente por cidade. A cota existe para o hub não
   * virar "os seis bairros da capital": a primeira rodada garante representação
   * de cada cidade publicada antes de qualquer cidade repetir.
   */
  for (const cota of [1, 2, Infinity]) {
    for (const { b, cidade } of candidatos) {
      if (out.length >= limite) return out;
      if (out.some((o) => o.bairro.slug === b.slug)) continue;
      if ((porCidade.get(cidade.slug) ?? 0) >= cota) continue;
      porCidade.set(cidade.slug, (porCidade.get(cidade.slug) ?? 0) + 1);
      out.push({ bairro: b, url: rota.bairro(b.slug), motivo: cidade.nome });
    }
  }
  return out;
}

/**
 * Validação da integridade do grafo. Usada pelo script de auditoria e
 * disponível para testes: devolve a lista de problemas encontrados nos DADOS
 * (o HTML é auditado à parte, em `scripts/audit-links-locais.ts`).
 */
export function problemasDoGrafo(): string[] {
  const erros: string[] = [];
  for (const b of bairros) {
    const cidade = cidadesPorSlug[b.cidade];
    if (!cidade) {
      erros.push(`${b.slug}: cidade-mãe "${b.cidade}" não existe`);
      continue;
    }
    if (!estadoPorSlug[cidade.estadoSlug]) {
      erros.push(`${b.slug}: estado "${cidade.estadoSlug}" da cidade ${cidade.slug} não existe`);
    }
    for (const r of b.relacionados ?? []) {
      const alvo = porSlug[r.slug];
      if (!alvo) {
        erros.push(`${b.slug}: relação declarada com "${r.slug}", que não está registrado`);
        continue;
      }
      if (!r.motivo?.trim()) erros.push(`${b.slug}: relação com ${r.slug} sem motivo escrito`);
    }
    // Zona só faz sentido comparada dentro da mesma cidade; uma zona usada por
    // um bairro só não gera relação nenhuma, e isso é esperado, não erro.
  }
  return erros;
}
