/**
 * Camada de dados de preço do Personal por Perto.
 *
 * PROCEDÊNCIA — leia antes de usar qualquer número daqui.
 *
 * As faixas que o portal publica hoje NÃO são pesquisa de campo. Elas são
 * estimativas editoriais construídas por PERFIL DE CIDADE (porte, renda,
 * IDHM, custo de vida regional): 980 cidades compartilham 288 combinações
 * de faixa, o que mostra o agrupamento por perfil, não coleta individual.
 * Nenhuma cidade cita fonte de preço entre as suas `fontes`.
 *
 * Isso não as torna inúteis — orientam bem quem não faz ideia da ordem de
 * grandeza. Mas proíbe três coisas, e a ferramenta respeita todas:
 *
 *   1. chamar de "preço médio" (não há média de amostra);
 *   2. citar tamanho de amostra ("baseado em 38 preços observados");
 *   3. dar valor exato em vez de faixa.
 *
 * O modelo abaixo já prevê o dia em que houver coleta real: quando um
 * registro ganhar `observacoes`, a confiança sobe para 'amostral' sozinha
 * e os textos passam a citar amostra e período. Até lá, tudo é declarado
 * como referência editorial.
 */
import type { Cidade } from '../lib/types';

/* ------------------------------------------------------------------ *
 * Modelo
 * ------------------------------------------------------------------ */

export type FormatoPreco = 'presencial' | 'online';

/** Como a faixa foi produzida. Define o que a interface pode afirmar. */
export type Metodologia =
  /** Estimativa por perfil socioeconômico da cidade — o estado atual. */
  | 'referencia-editorial'
  /** Preços realmente coletados, com fonte e data. Ainda não existe. */
  | 'amostral';

/** Confiança derivada da metodologia e do tamanho da amostra. */
export type Confianca = 'referencial' | 'baixa' | 'media' | 'alta';

/** Origem do dado exibido, quando houve fallback. */
export type NivelDado = 'cidade' | 'estado' | 'nacional';

export interface Faixa {
  min: number;
  max: number;
}

/** Uma observação real de preço — a estrutura que a coleta futura preenche. */
export interface ObservacaoPreco {
  valor: number;
  formato: FormatoPreco;
  /** Sessões por semana a que o valor se refere, quando for pacote. */
  frequencia?: number;
  fonte: string;
  coletadoEm: string;
}

export interface RegistroPreco {
  cidadeSlug: string;
  cidadeNome: string;
  uf: string;
  /** Por sessão, contratação avulsa. */
  avulsa: Faixa;
  /** Pacote mensal presencial, referente a 2 a 3 sessões por semana. */
  mensalPacote: Faixa;
  /** Acompanhamento online mensal. */
  online: Faixa;
  metodologia: Metodologia;
  confianca: Confianca;
  atualizadoEm: string;
  /** Vazio enquanto não houver coleta real. */
  observacoes: ObservacaoPreco[];
}

/* ------------------------------------------------------------------ *
 * Constantes metodológicas
 * ------------------------------------------------------------------ */

/**
 * Semanas por mês: 52 ÷ 12. Usar 4 subestimaria em quase 8% ao ano —
 * a pessoa pagaria mais do que a conta indicou.
 */
export const SEMANAS_POR_MES = 52 / 12;

/**
 * O pacote mensal do dado editorial cobre "2 a 3 vezes por semana".
 * Adotamos 2,5 sessões semanais como centro dessa definição, o que dá
 * ~11 sessões por mês. É desse número que sai o valor por sessão dentro
 * do pacote, e é ele que permite extrapolar para outras frequências.
 */
export const SESSOES_MES_PACOTE = Math.round(2.5 * SEMANAS_POR_MES); // 11

/** Data da última revisão editorial das faixas. */
export const ATUALIZADO_EM = '2026-08-26';

/* ------------------------------------------------------------------ *
 * Acesso
 * ------------------------------------------------------------------ */

/** Constrói o registro de preço de uma cidade a partir do dado editorial. */
export function registroDaCidade(cidade: Cidade): RegistroPreco {
  const p = cidade.precos;
  return {
    cidadeSlug: cidade.slug,
    cidadeNome: cidade.nome,
    uf: cidade.uf,
    avulsa: { min: p.avulsaMin, max: p.avulsaMax },
    mensalPacote: { min: p.mensalMin, max: p.mensalMax },
    online: { min: p.onlineMin, max: p.onlineMax },
    metodologia: 'referencia-editorial',
    confianca: 'referencial',
    atualizadoEm: cidade.atualizadoEm,
    observacoes: [],
  };
}

/**
 * Referência agregada de um conjunto de cidades — usada nos fallbacks
 * de estado e nacional. Agrega por mínimo dos mínimos e máximo dos
 * máximos: é a leitura honesta de "faixa observada no conjunto", sem
 * fabricar uma média que a base não sustenta.
 */
export function agregar(cidades: Cidade[]): Omit<RegistroPreco, 'cidadeSlug' | 'cidadeNome' | 'uf'> | null {
  if (!cidades.length) return null;
  const faixa = (sel: (c: Cidade) => [number, number]): Faixa => {
    const vals = cidades.map(sel);
    return {
      min: Math.min(...vals.map((v) => v[0])),
      max: Math.max(...vals.map((v) => v[1])),
    };
  };
  return {
    avulsa: faixa((c) => [c.precos.avulsaMin, c.precos.avulsaMax]),
    mensalPacote: faixa((c) => [c.precos.mensalMin, c.precos.mensalMax]),
    online: faixa((c) => [c.precos.onlineMin, c.precos.onlineMax]),
    metodologia: 'referencia-editorial',
    confianca: 'referencial',
    atualizadoEm: ATUALIZADO_EM,
    observacoes: [],
  };
}

/* ------------------------------------------------------------------ *
 * Validação — nada inconsistente pode ir ao ar
 * ------------------------------------------------------------------ */

export interface ProblemaPreco {
  cidade: string;
  problema: string;
}

/** Confere invariantes de um registro. Usado pelos testes e pela auditoria. */
export function validarRegistro(r: RegistroPreco): string[] {
  const erros: string[] = [];
  const conferir = (nome: string, f: Faixa) => {
    if (!Number.isFinite(f.min) || !Number.isFinite(f.max)) erros.push(`${nome}: valor não numérico`);
    if (f.min <= 0 || f.max <= 0) erros.push(`${nome}: valor zero ou negativo`);
    if (f.min > f.max) erros.push(`${nome}: mínimo (${f.min}) maior que máximo (${f.max})`);
    if (f.max > f.min * 12) erros.push(`${nome}: amplitude implausível (${f.min}–${f.max})`);
  };
  conferir('avulsa', r.avulsa);
  conferir('mensalPacote', r.mensalPacote);
  conferir('online', r.online);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.atualizadoEm)) erros.push('data de revisão inválida');
  if (r.metodologia === 'amostral' && !r.observacoes.length) {
    erros.push('metodologia amostral sem observações registradas');
  }
  return erros;
}
