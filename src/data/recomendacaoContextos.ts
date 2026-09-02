/**
 * Contextos do bloco "Personal por Perto recomenda".
 *
 * O bloco em si é um só. O que muda de página para página é a PONTE — a
 * frase que liga o que a pessoa acabou de ler ao motivo de existir uma
 * recomendação ali. Sem essa ponte, o mesmo bloco em mil páginas é
 * publicidade repetida; com ela, é continuação do texto.
 *
 * Cada contexto traz três variantes da ponte, para teste A/B:
 *
 *   direta   — "Para quem busca acompanhamento individual online"
 *   problema — "Não encontrou uma opção presencial que faça sentido?"
 *   decisao  — "Se o online fizer mais sentido para a sua rotina"
 *
 * Só a ponte varia. Título do bloco, motivos, ressalva e botão são fixos:
 * teste com duas variáveis não diz qual delas moveu o resultado.
 */
import type { Topico } from '../lib/ctaTaxonomia';

export type VarianteRec = 'direta' | 'problema' | 'decisao';

export const VARIANTES_REC: VarianteRec[] = ['direta', 'problema', 'decisao'];

/** Letra curta para o relatório do GA. */
export const LETRA_REC: Record<VarianteRec, 'A' | 'B' | 'C'> = {
  direta: 'A',
  problema: 'B',
  decisao: 'C',
};

/**
 * A ponte pode depender do lugar (páginas locais) ou não (as demais).
 * Por isso é função: a regência sai certa e o limite de caracteres é
 * verificável no teste.
 */
export type Ponte = (local?: string) => string;

export interface ContextoRec {
  id: string;
  pontes: Record<VarianteRec, Ponte>;
}

/** Limite da ponte, verificado por teste. Duas linhas no celular. */
export const LIMITE_PONTE = 155;

/**
 * Contextos por tópico da taxonomia.
 *
 * Tópico ausente = sem bloco. É a regra de ouro do briefing virada em
 * código: se não existe uma razão lógica para considerar acompanhamento
 * depois de ler AQUELE conteúdo, não há bloco nenhum a mostrar.
 */
export const CONTEXTOS: Partial<Record<Topico, ContextoRec>> = {
  /* Páginas de cidade, bairro e estado. */
  'local-comercial': {
    id: 'local',
    pontes: {
      direta: (l) =>
        `Para quem prefere acompanhamento individual sem depender de estar ${l ?? 'na região'}.`,
      problema: (l) =>
        `Não encontrou uma opção presencial que faça sentido ${l ?? 'na sua região'}?`,
      decisao: (l) =>
        `Se o formato online fizer mais sentido do que procurar alguém ${l ?? 'perto de você'}.`,
    },
  },

  /* Preço e contratação. */
  'preco-contratacao': {
    id: 'preco',
    pontes: {
      direta: () => 'Para quem quer comparar o presencial com uma opção de acompanhamento online.',
      problema: () => 'Se o valor do acompanhamento presencial ficou acima do seu orçamento.',
      decisao: () => 'Se depois de ver os números o online fizer mais sentido para o seu caso.',
    },
  },

  /* Presencial x online. */
  'formato-acompanhamento': {
    id: 'formato',
    pontes: {
      direta: () => 'Para quem já concluiu que o acompanhamento online combina com a sua rotina.',
      problema: () => 'Se a agenda ou o deslocamento inviabilizam o acompanhamento presencial.',
      decisao: () => 'Se depois da comparação o formato online for o que faz mais sentido.',
    },
  },

  /* Como escolher um profissional. */
  'escolha-decisao': {
    id: 'escolha',
    pontes: {
      direta: () => 'Para quem decidiu procurar acompanhamento e quer conhecer uma opção online.',
      problema: () => 'Se você sabe o que procurar mas ainda não sabe por onde começar.',
      decisao: () => 'Se os critérios acima apontarem para acompanhamento individual online.',
    },
  },

  /* Guias de público específico — gestantes, terceira idade, corredores. */
  'publico-especifico': {
    id: 'publico',
    pontes: {
      direta: () => 'Para quem quer acompanhamento individual pensado para o próprio caso.',
      problema: () => 'Se o seu caso pede mais atenção do que um programa genérico oferece.',
      decisao: () => 'Se você concluiu que precisa de alguém acompanhando de perto.',
    },
  },

  /* Quem já contratou e quer avaliar o que recebe. */
  'avaliacao-acompanhamento': {
    id: 'acompanhamento',
    pontes: {
      direta: () => 'Para quem quer comparar o acompanhamento atual com outra opção.',
      problema: () => 'Se o acompanhamento que você tem hoje não entrega o que deveria.',
      decisao: () => 'Se você concluiu que vale procurar outro profissional.',
    },
  },
};

/**
 * Onde o bloco NUNCA entra, mesmo que o tópico tivesse contexto.
 *
 * Não é lista de exceções: é a consequência de o bloco existir só onde a
 * intenção é real. Conteúdo informativo puro — como executar um exercício,
 * o que é creatina, água e emagrecimento — está longe demais da
 * contratação, e uma recomendação ali é anúncio, não continuação.
 */
export const TOPICOS_SEM_BLOCO: Topico[] = [
  'execucao-exercicio',
  'nutricao-suplementos',
  'iniciantes',
  'dor-saude',
  'humor',
  'institucional',
];
