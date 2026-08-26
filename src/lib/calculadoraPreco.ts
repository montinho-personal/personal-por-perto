/**
 * Motor da Calculadora de Preço do Personal.
 *
 * Determinístico, sem DOM, sem IA. Preço é conta, não inferência de
 * linguagem: o motor apenas combina faixas declaradas com aritmética
 * explicável, e devolve junto a memória do cálculo para que qualquer
 * pessoa possa conferir.
 *
 * Três regras estruturais:
 *   1. faixa sempre, valor exato nunca — arredondamento único e declarado;
 *   2. fallback nunca é silencioso — o resultado diz de que nível veio o dado;
 *   3. o que é extrapolação é rotulado como extrapolação.
 */
import type { Cidade } from './types';
import {
  SEMANAS_POR_MES,
  SESSOES_MES_PACOTE,
  agregar,
  registroDaCidade,
  type Confianca,
  type Faixa,
  type FormatoPreco,
  type Metodologia,
  type NivelDado,
  type RegistroPreco,
} from '../data/precos';

/* ------------------------------------------------------------------ *
 * Entrada e saída
 * ------------------------------------------------------------------ */

export type Frequencia = 1 | 2 | 3 | 4 | 5;

export interface EntradaCalculo {
  cidadeSlug?: string;
  formato: FormatoPreco;
  /** Sessões por semana. Ignorado no formato online, que é mensal. */
  frequencia: Frequencia;
}

export interface LinhaCalculo {
  rotulo: string;
  valor: string;
}

export interface ResultadoPreco {
  /** De onde veio o dado exibido — nunca escondido de quem lê. */
  nivel: NivelDado;
  cidadeNome?: string;
  uf?: string;
  /** Rótulo humano da origem ("São Paulo (SP)", "referência de SP"). */
  origemRotulo: string;
  formato: FormatoPreco;
  frequencia: Frequencia;
  sessoesMes: number;
  /** Faixa por sessão. Ausente no online, que não é vendido por sessão. */
  porSessao?: Faixa;
  /** Faixa mensal — o número que a pessoa veio buscar. */
  mensal: Faixa;
  /** A faixa mensal veio direto do dado ou foi extrapolada? */
  mensalExtrapolada: boolean;
  metodologia: Metodologia;
  confianca: Confianca;
  atualizadoEm: string;
  /** Memória do cálculo, linha a linha. */
  memoria: LinhaCalculo[];
  /** Alerta quando houve fallback ou extrapolação. */
  ressalvas: string[];
}

/* ------------------------------------------------------------------ *
 * Formatação e arredondamento — regra única no projeto inteiro
 * ------------------------------------------------------------------ */

/**
 * Arredondamento declarado: até R$ 1.000, para a dezena mais próxima;
 * acima disso, para a cinquentena. Estimativa com centavos passa uma
 * precisão que o dado não tem.
 */
export function arredondar(valor: number): number {
  if (valor < 1000) return Math.round(valor / 10) * 10;
  return Math.round(valor / 50) * 50;
}

const arredondarFaixa = (f: Faixa): Faixa => ({ min: arredondar(f.min), max: arredondar(f.max) });

/** Formata em real brasileiro, sem centavos. */
export function brl(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export const faixaBrl = (f: Faixa): string => `${brl(f.min)} a ${brl(f.max)}`;

/** Sessões por mês a partir da frequência semanal (52 ÷ 12 semanas). */
export function sessoesPorMes(frequencia: Frequencia): number {
  return Math.round(frequencia * SEMANAS_POR_MES);
}

/* ------------------------------------------------------------------ *
 * Resolução da origem do dado (fallback explícito)
 * ------------------------------------------------------------------ */

interface Origem {
  registro: Omit<RegistroPreco, 'cidadeSlug' | 'cidadeNome' | 'uf'>;
  nivel: NivelDado;
  cidadeNome?: string;
  uf?: string;
  rotulo: string;
}

/**
 * Cidade → estado → nacional. Cada degrau é anunciado no resultado;
 * fallback silencioso seria mentir por omissão.
 */
export function resolverOrigem(cidades: Cidade[], cidadeSlug?: string): Origem {
  if (cidadeSlug) {
    const c = cidades.find((x) => x.slug === cidadeSlug);
    if (c) {
      const r = registroDaCidade(c);
      return { registro: r, nivel: 'cidade', cidadeNome: c.nome, uf: c.uf, rotulo: `${c.nome} (${c.uf})` };
    }
  }
  const nacional = agregar(cidades)!;
  return { registro: nacional, nivel: 'nacional', rotulo: 'referência nacional' };
}

/** Fallback estadual, para quando a cidade não estiver na base. */
export function origemEstadual(cidades: Cidade[], uf: string): Origem | null {
  const doEstado = cidades.filter((c) => c.uf === uf);
  const agg = agregar(doEstado);
  if (!agg) return null;
  return { registro: agg, nivel: 'estado', uf, rotulo: `referência de ${uf}` };
}

/* ------------------------------------------------------------------ *
 * Cálculo
 * ------------------------------------------------------------------ */

export function calcularPreco(cidades: Cidade[], entrada: EntradaCalculo): ResultadoPreco {
  const origem = resolverOrigem(cidades, entrada.cidadeSlug);
  const r = origem.registro;
  const ressalvas: string[] = [];
  const memoria: LinhaCalculo[] = [];

  if (origem.nivel !== 'cidade') {
    ressalvas.push(
      'Não há faixa específica para essa cidade na base. Os valores abaixo são uma referência mais ampla.',
    );
  }

  /* ---- Online: contratado por mês, não por sessão ---- */
  if (entrada.formato === 'online') {
    const mensal = arredondarFaixa(r.online);
    memoria.push(
      { rotulo: 'Formato', valor: 'acompanhamento online (cobrança mensal)' },
      { rotulo: 'Faixa de referência mensal', valor: faixaBrl(r.online) },
      { rotulo: 'Arredondamento', valor: 'dezena mais próxima até R$ 1.000; cinquentena acima disso' },
    );
    return {
      nivel: origem.nivel,
      cidadeNome: origem.cidadeNome,
      uf: origem.uf,
      origemRotulo: origem.rotulo,
      formato: 'online',
      frequencia: entrada.frequencia,
      sessoesMes: sessoesPorMes(entrada.frequencia),
      mensal,
      mensalExtrapolada: false,
      metodologia: r.metodologia,
      confianca: r.confianca,
      atualizadoEm: r.atualizadoEm,
      memoria,
      ressalvas,
    };
  }

  /* ---- Presencial ---- */
  const sessoes = sessoesPorMes(entrada.frequencia);
  const porSessao = arredondarFaixa(r.avulsa);

  memoria.push(
    { rotulo: 'Frequência', valor: `${entrada.frequencia}× por semana` },
    {
      rotulo: 'Sessões por mês',
      valor: `${entrada.frequencia} × 4,33 semanas ≈ ${sessoes} sessões`,
    },
    { rotulo: 'Faixa por sessão avulsa', valor: faixaBrl(r.avulsa) },
  );

  let mensal: Faixa;
  let extrapolada: boolean;

  // O dado de pacote mensal cobre "2 a 3 vezes por semana". Nessas duas
  // frequências ele é usado direto; fora delas, é proporcionalizado pelo
  // valor por sessão dentro do pacote — e isso é dito com todas as letras.
  if (entrada.frequencia === 2 || entrada.frequencia === 3) {
    mensal = arredondarFaixa(r.mensalPacote);
    extrapolada = false;
    memoria.push({
      rotulo: 'Faixa de pacote mensal',
      valor: `${faixaBrl(r.mensalPacote)} (dado de referência para 2 a 3× por semana)`,
    });
  } else {
    const porSessaoPacote: Faixa = {
      min: r.mensalPacote.min / SESSOES_MES_PACOTE,
      max: r.mensalPacote.max / SESSOES_MES_PACOTE,
    };
    mensal = arredondarFaixa({
      min: porSessaoPacote.min * sessoes,
      max: porSessaoPacote.max * sessoes,
    });
    extrapolada = true;
    memoria.push(
      {
        rotulo: 'Valor por sessão dentro do pacote',
        valor: `${faixaBrl(r.mensalPacote)} ÷ ${SESSOES_MES_PACOTE} sessões ≈ ${faixaBrl({
          min: Math.round(porSessaoPacote.min),
          max: Math.round(porSessaoPacote.max),
        })}`,
      },
      {
        rotulo: 'Estimativa mensal',
        valor: `valor por sessão × ${sessoes} sessões`,
      },
    );
    ressalvas.push(
      `A base de referência do portal cobre pacotes de 2 a 3 vezes por semana. Para ${entrada.frequencia}× por semana, a faixa mensal foi proporcionalizada — trate como ordem de grandeza, não como tabela de preço.`,
    );
  }

  memoria.push({ rotulo: 'Arredondamento', valor: 'dezena mais próxima até R$ 1.000; cinquentena acima disso' });

  return {
    nivel: origem.nivel,
    cidadeNome: origem.cidadeNome,
    uf: origem.uf,
    origemRotulo: origem.rotulo,
    formato: 'presencial',
    frequencia: entrada.frequencia,
    sessoesMes: sessoes,
    porSessao,
    mensal,
    mensalExtrapolada: extrapolada,
    metodologia: r.metodologia,
    confianca: r.confianca,
    atualizadoEm: r.atualizadoEm,
    memoria,
    ressalvas,
  };
}

/* ------------------------------------------------------------------ *
 * Rótulos de confiança — o que a interface pode afirmar
 * ------------------------------------------------------------------ */

export const ROTULO_CONFIANCA: Record<Confianca, { titulo: string; texto: string }> = {
  referencial: {
    titulo: 'Faixa de referência editorial',
    texto:
      'Estimativa construída pela redação a partir do perfil da cidade (porte, renda e custo de vida da região), não de uma coleta de preços praticados. Serve para dar ordem de grandeza antes de você pedir orçamento.',
  },
  baixa: {
    titulo: 'Amostra pequena',
    texto: 'Há poucos preços coletados para esta cidade — use com cautela.',
  },
  media: {
    titulo: 'Amostra moderada',
    texto: 'Baseado em uma quantidade razoável de preços coletados nesta cidade.',
  },
  alta: {
    titulo: 'Amostra consistente',
    texto: 'Baseado em um volume consistente de preços coletados e recentes nesta cidade.',
  },
};
