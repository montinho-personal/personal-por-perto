/**
 * Camada de dados do Mapa Fitness da Cidade.
 *
 * A decisão central do produto está aqui: o portal JÁ tem 4.863 locais
 * verificados editorialmente — parques, pistas de corrida e academias
 * nomeadas —, escritos à mão cidade por cidade e presos dentro de prosa.
 * Esta camada os transforma em dados estruturados e navegáveis. Nenhum
 * local é inventado: tudo vem do que já foi apurado e publicado.
 *
 * Coordenadas são tratadas como um campo OPCIONAL e independente. O mapa
 * gráfico é um realce sobre a lista, nunca o contrário: a lista funciona
 * sem coordenada, sem JavaScript e sem provedor de mapas — e é ela que
 * responde à pessoa e ao buscador.
 *
 * Regra dura: nada de característica inferida por chute. Só marcamos que
 * um parque tem pista de caminhada quando o texto editorial daquele parque
 * diz isso.
 */
import type { Cidade } from './types';
import { slugify } from './slug';
import { geoPorCidade } from '../data/fitnessGeo';

/* ------------------------------------------------------------------ *
 * Modelo
 * ------------------------------------------------------------------ */

export type CategoriaLocal = 'gym' | 'park' | 'running' | 'outdoor_gym' | 'sports_center';

/** O que a pessoa consegue fazer ali. Base do filtro por objetivo. */
export type Atividade =
  | 'musculacao'
  | 'correr'
  | 'caminhar'
  | 'funcional'
  | 'ar-livre'
  | 'esportes'
  | 'bike';

/** Procedência do registro — todo local carrega a sua. */
export type FonteLocal = 'editorial' | 'osm';

export interface FitnessPlace {
  id: string;
  nome: string;
  slug: string;
  cidadeSlug: string;
  cidadeNome: string;
  uf: string;
  categoria: CategoriaLocal;
  /** Rótulo curto exibido no cartão (ex.: "Parque", "Pista de corrida"). */
  categoriaRotulo: string;
  atividades: Atividade[];
  /** Nota editorial — o texto já apurado, sem reescrita inventiva. */
  nota: string;
  /** Características SÓ quando o texto editorial as afirma. */
  caracteristicas: string[];
  fonte: FonteLocal;
  /** Coordenada verificada; ausente na maioria dos locais por enquanto. */
  lat?: number;
  lng?: number;
  /** Data ISO da última verificação da coordenada. */
  verificadoEm?: string;
}

/* ------------------------------------------------------------------ *
 * Configuração
 * ------------------------------------------------------------------ */

/** Abaixo disto a seção interativa não aparece — lista curta não é ferramenta. */
export const MIN_LOCAIS_PARA_MAPA = 3;

/** Abaixo disto o mapa gráfico não é desenhado (a lista continua). */
export const MIN_COORDS_PARA_MAPA = 3;

export const ROTULO_CATEGORIA: Record<CategoriaLocal, string> = {
  gym: 'Academia',
  park: 'Parque',
  running: 'Corrida',
  outdoor_gym: 'Academia ao ar livre',
  sports_center: 'Centro esportivo',
};

export const ROTULO_ATIVIDADE: Record<Atividade, string> = {
  musculacao: 'musculação',
  correr: 'correr',
  caminhar: 'caminhar',
  funcional: 'treino funcional',
  'ar-livre': 'treino ao ar livre',
  esportes: 'esportes',
  bike: 'pedalar',
};

/* ------------------------------------------------------------------ *
 * Extração de características a partir do texto editorial
 * ------------------------------------------------------------------ */

/**
 * Cada característica só é marcada se a descrição escrita pela redação a
 * afirmar. É leitura do nosso próprio dado apurado — não inferência sobre
 * o mundo. Se o texto não diz, o campo não existe.
 */
export const PADROES_CARACTERISTICA: { termo: RegExp; rotulo: string; atividade?: Atividade }[] = [
  { termo: /pista de caminhada|pista para caminhada/i, rotulo: 'pista de caminhada', atividade: 'caminhar' },
  { termo: /pista de corrida|pista de atletismo/i, rotulo: 'pista de corrida', atividade: 'correr' },
  { termo: /ciclovia|ciclofaixa/i, rotulo: 'ciclovia', atividade: 'bike' },
  { termo: /academia ao ar livre|aparelhos de gin[áa]stica|equipamentos de gin[áa]stica|academia da terceira idade/i, rotulo: 'aparelhos ao ar livre', atividade: 'funcional' },
  { termo: /quadra(s)?\b/i, rotulo: 'quadras', atividade: 'esportes' },
  { termo: /campo de futebol|campo society/i, rotulo: 'campo de futebol', atividade: 'esportes' },
  { termo: /pista de skate/i, rotulo: 'pista de skate' },
  { termo: /ilumina[çc][ãa]o|iluminado/i, rotulo: 'iluminação' },
  { termo: /24 ?horas|aberto 24/i, rotulo: 'aberto 24h' },
  { termo: /playground|parquinho/i, rotulo: 'playground' },
  { termo: /piscina/i, rotulo: 'piscina' },
  // "ginástica" sozinho aparece em "equipamentos de ginástica", e
  // "alongamento" não implica aula organizada: exigimos evidência de aula.
  { termo: /yoga|tai chi|aulas de gin[áa]stica|aulas gratuitas/i, rotulo: 'aulas ao ar livre', atividade: 'funcional' },
];

function extrair(texto: string): { caracteristicas: string[]; atividades: Atividade[] } {
  const caracteristicas: string[] = [];
  const atividades = new Set<Atividade>();
  for (const p of PADROES_CARACTERISTICA) {
    if (p.termo.test(texto)) {
      caracteristicas.push(p.rotulo);
      if (p.atividade) atividades.add(p.atividade);
    }
  }
  return { caracteristicas, atividades: [...atividades] };
}

/* ------------------------------------------------------------------ *
 * Classificação de parques por nome
 * ------------------------------------------------------------------ */

/**
 * "Parque" no dado editorial é um guarda-chuva: entram praças, orlas,
 * pistas e centros esportivos. O nome próprio resolve a maioria dos casos
 * e evita rotular uma pista de atletismo como parque.
 */
function categoriaDeEspacoPublico(nome: string, descricao: string): CategoriaLocal {
  const n = nome.toLowerCase();
  if (/\bpista\b|autódromo|atletismo/.test(n)) return 'running';
  if (/centro esportivo|ginásio|complexo esportivo|clube|arena|est[áa]dio/.test(n)) return 'sports_center';
  if (/academia ao ar livre/.test(n)) return 'outdoor_gym';
  // Espaço público cujo texto só fala de aparelhos: é academia ao ar livre.
  if (/academia ao ar livre/i.test(descricao) && /pra[çc]a/.test(n)) return 'outdoor_gym';
  return 'park';
}

/* ------------------------------------------------------------------ *
 * Derivação
 * ------------------------------------------------------------------ */

const idDe = (cidadeSlug: string, nome: string) => `${cidadeSlug}--${slugify(nome)}`;

/**
 * Constrói a lista estruturada de locais de uma cidade a partir dos dados
 * editoriais já publicados, anexando coordenada quando existir registro
 * verificado.
 */
export function getFitnessPlaces(cidade: Cidade): FitnessPlace[] {
  const geo = geoPorCidade[cidade.slug] ?? {};
  const locais: FitnessPlace[] = [];
  const vistos = new Set<string>();

  const adicionar = (
    nome: string,
    descricao: string,
    categoria: CategoriaLocal,
    atividadesBase: Atividade[],
  ) => {
    const slug = slugify(nome);
    // Deduplicação: o mesmo espaço pode aparecer como parque e como corrida.
    if (vistos.has(slug)) return;
    vistos.add(slug);

    const { caracteristicas, atividades } = extrair(descricao);
    const coord = geo[slug];

    locais.push({
      id: idDe(cidade.slug, nome),
      nome,
      slug,
      cidadeSlug: cidade.slug,
      cidadeNome: cidade.nome,
      uf: cidade.uf,
      categoria,
      categoriaRotulo: ROTULO_CATEGORIA[categoria],
      atividades: [...new Set([...atividadesBase, ...atividades])],
      nota: descricao,
      caracteristicas,
      fonte: 'editorial',
      lat: coord?.lat,
      lng: coord?.lng,
      verificadoEm: coord?.verificadoEm,
    });
  };

  // Academias nomeadas — só as que a redação confirmou publicamente.
  // A lista editorial mistura estabelecimento comercial com espaço público
  // (praças de ginástica, academias ao ar livre). A distinção não é
  // cosmética: só o espaço público entra na geocodificação automática;
  // endereço de estabelecimento comercial exige verificação própria.
  for (const a of cidade.academiasProximas ?? []) {
    const publico = /pra[çc]a|parque|ao ar livre|p[úu]blic/i.test(a.nome);
    adicionar(
      a.nome,
      a.detalhe ?? '',
      publico ? 'outdoor_gym' : 'gym',
      publico ? ['funcional', 'ar-livre'] : ['musculacao'],
    );
  }

  // Espaços públicos.
  for (const p of cidade.parques) {
    const cat = categoriaDeEspacoPublico(p.nome, p.descricao);
    const base: Atividade[] =
      cat === 'running'
        ? ['correr', 'caminhar']
        : cat === 'sports_center'
          ? ['esportes', 'ar-livre']
          : cat === 'outdoor_gym'
            ? ['funcional', 'ar-livre']
            : ['caminhar', 'ar-livre'];
    adicionar(p.nome, p.descricao, cat, base);
  }

  // Circuitos e pontos de corrida.
  for (const c of cidade.corridas) {
    adicionar(c.nome, c.descricao, 'running', ['correr', 'caminhar']);
  }

  return locais;
}

/* ------------------------------------------------------------------ *
 * Consulta e agregados
 * ------------------------------------------------------------------ */

export interface FiltroLocais {
  categoria?: CategoriaLocal;
  atividade?: Atividade;
}

export function filtrarLocais(locais: FitnessPlace[], f: FiltroLocais): FitnessPlace[] {
  return locais.filter((l) => {
    if (f.categoria && l.categoria !== f.categoria) return false;
    if (f.atividade && !l.atividades.includes(f.atividade)) return false;
    return true;
  });
}

export interface ResumoMapa {
  locais: FitnessPlace[];
  total: number;
  /** Categorias presentes, na ordem em que devem virar filtros. */
  categorias: { id: CategoriaLocal; rotulo: string; total: number }[];
  comCoordenada: number;
  /** A seção interativa deve aparecer nesta cidade? */
  exibirSecao: boolean;
  /** O mapa gráfico deve ser desenhado? */
  exibirMapa: boolean;
}

const ORDEM_CATEGORIA: CategoriaLocal[] = ['park', 'running', 'gym', 'outdoor_gym', 'sports_center'];

/** Monta tudo o que a interface precisa saber sobre a cidade, de uma vez. */
export function resumoMapaFitness(cidade: Cidade): ResumoMapa {
  const locais = getFitnessPlaces(cidade);
  const comCoordenada = locais.filter((l) => l.lat != null && l.lng != null).length;

  const contagem = new Map<CategoriaLocal, number>();
  for (const l of locais) contagem.set(l.categoria, (contagem.get(l.categoria) ?? 0) + 1);

  const categorias = ORDEM_CATEGORIA.filter((c) => contagem.has(c)).map((c) => ({
    id: c,
    rotulo: ROTULO_CATEGORIA[c],
    total: contagem.get(c)!,
  }));

  return {
    locais,
    total: locais.length,
    categorias,
    comCoordenada,
    exibirSecao: locais.length >= MIN_LOCAIS_PARA_MAPA,
    exibirMapa: comCoordenada >= MIN_COORDS_PARA_MAPA,
  };
}
