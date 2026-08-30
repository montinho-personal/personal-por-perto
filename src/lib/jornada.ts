/**
 * jornada — a camada que transforma sete ferramentas soltas num sistema de
 * decisão.
 *
 * O problema que este arquivo resolve: cada ferramenta do portal responde
 * bem a uma pergunta, mas nenhuma sabia que as outras existiam. A pessoa
 * terminava um diagnóstico, recebia um link solto e recomeçava do zero na
 * ferramenta seguinte — respondendo de novo o que já tinha respondido.
 *
 * Aqui moram três coisas, e nenhuma delas toca no DOM:
 *
 * 1. A definição das ETAPAS e a que ferramenta cada uma corresponde.
 * 2. As SITUAÇÕES ("onde você está hoje") e para onde cada uma leva.
 * 3. As REGRAS DE PRÓXIMO PASSO, que leem o mapa acumulado e dizem o que
 *    faz sentido agora — e, principalmente, POR QUÊ.
 *
 * Princípio que governa o arquivo: a jornada é uma camada ADITIVA. Nenhuma
 * ferramenta depende dela para funcionar, nenhuma página perde conteúdo por
 * causa dela, e quem chega do Google direto no meio continua tendo a
 * ferramenta completa. Se o armazenamento local estiver indisponível, tudo
 * degrada para o comportamento antigo, sem erro.
 */

/* ------------------------------------------------------------------ *
 * Etapas e ferramentas
 * ------------------------------------------------------------------ */

export type EtapaId =
  | 'entender'
  | 'organizar'
  | 'avaliar'
  | 'decidir'
  | 'escolher'
  | 'investir'
  | 'evoluir';

export type FerramentaId =
  | 'constancia'
  | 'rotina'
  | 'auditoria'
  | 'personalIdeal'
  | 'formato'
  | 'preco'
  | 'score';

export interface Etapa {
  id: EtapaId;
  ordem: number;
  /** Verbo curto, usado na faixa de progresso. */
  nome: string;
  /** A pergunta que esta etapa responde. */
  pergunta: string;
  ferramenta: FerramentaId;
}

export interface Ferramenta {
  id: FerramentaId;
  slug: string;
  url: string;
  nome: string;
  /** Rótulo curto para a faixa e o mapa. */
  curto: string;
  etapa: EtapaId;
}

export const ETAPAS: Etapa[] = [
  {
    id: 'entender',
    ordem: 1,
    nome: 'Entender',
    pergunta: 'Por que o treino não engata?',
    ferramenta: 'constancia',
  },
  {
    id: 'organizar',
    ordem: 2,
    nome: 'Organizar',
    pergunta: 'Que estrutura cabe na minha semana?',
    ferramenta: 'rotina',
  },
  {
    id: 'avaliar',
    ordem: 3,
    nome: 'Avaliar',
    pergunta: 'O treino que eu faço está bem montado?',
    ferramenta: 'auditoria',
  },
  {
    id: 'decidir',
    ordem: 4,
    nome: 'Decidir',
    pergunta: 'Eu preciso de acompanhamento?',
    ferramenta: 'personalIdeal',
  },
  {
    id: 'escolher',
    ordem: 5,
    nome: 'Escolher',
    pergunta: 'Presencial ou online?',
    ferramenta: 'formato',
  },
  {
    id: 'investir',
    ordem: 6,
    nome: 'Investir',
    pergunta: 'Quanto isso custa por aqui?',
    ferramenta: 'preco',
  },
  {
    id: 'evoluir',
    ordem: 7,
    nome: 'Evoluir',
    pergunta: 'O acompanhamento que eu tenho está de pé?',
    ferramenta: 'score',
  },
];

export const FERRAMENTAS: Record<FerramentaId, Ferramenta> = {
  constancia: {
    id: 'constancia',
    slug: 'diagnostico-da-constancia',
    url: '/ferramentas/diagnostico-da-constancia/',
    nome: 'Diagnóstico da Constância',
    curto: 'Constância',
    etapa: 'entender',
  },
  rotina: {
    id: 'rotina',
    slug: 'treino-para-minha-rotina',
    url: '/ferramentas/treino-para-minha-rotina/',
    nome: 'Treino para Minha Rotina',
    curto: 'Rotina',
    etapa: 'organizar',
  },
  auditoria: {
    id: 'auditoria',
    slug: 'meu-treino-faz-sentido',
    url: '/ferramentas/meu-treino-faz-sentido/',
    nome: 'Meu treino faz sentido?',
    curto: 'Análise do treino',
    etapa: 'avaliar',
  },
  personalIdeal: {
    id: 'personalIdeal',
    slug: 'encontre-seu-personal-ideal',
    url: '/ferramentas/encontre-seu-personal-ideal/',
    nome: 'Encontre seu Personal Ideal',
    curto: 'Personal ideal',
    etapa: 'decidir',
  },
  formato: {
    id: 'formato',
    slug: 'presencial-ou-online',
    url: '/ferramentas/presencial-ou-online/',
    nome: 'Presencial ou online?',
    curto: 'Formato',
    etapa: 'escolher',
  },
  preco: {
    id: 'preco',
    slug: 'calculadora-preco-personal',
    url: '/ferramentas/calculadora-preco-personal/',
    nome: 'Calculadora de Preço',
    curto: 'Investimento',
    etapa: 'investir',
  },
  score: {
    id: 'score',
    slug: 'personal-score',
    url: '/ferramentas/personal-score/',
    nome: 'Personal Score',
    curto: 'Qualidade',
    etapa: 'evoluir',
  },
};

/** Resolve a ferramenta a partir do slug da URL. */
export function ferramentaPorSlug(slug: string): Ferramenta | undefined {
  return Object.values(FERRAMENTAS).find((f) => f.slug === slug);
}

export const etapaDe = (id: FerramentaId): Etapa =>
  ETAPAS.find((e) => e.id === FERRAMENTAS[id].etapa)!;

/* ------------------------------------------------------------------ *
 * "Onde você está hoje?" — entrada por situação, não por nome de ferramenta
 * ------------------------------------------------------------------ */

export interface Situacao {
  id: string;
  /** A frase em que a pessoa precisa se reconhecer. */
  frase: string;
  /** Complemento curto, exibido abaixo. */
  detalhe: string;
  destino: FerramentaId;
  /** Por que este é o começo certo para quem se reconheceu aqui. */
  porque: string;
}

export const SITUACOES: Situacao[] = [
  {
    id: 'perdido',
    frase: 'Quero começar, mas estou perdido',
    detalhe: 'Não sei quantos dias, o que fazer, nem por onde começar.',
    destino: 'rotina',
    porque:
      'Antes de qualquer coisa, vale desenhar uma estrutura que caiba nos dias que você realmente tem. Começar por um plano executável evita o erro mais comum de quem começa: montar a semana ideal e abandonar na terceira.',
  },
  {
    id: 'comecoParo',
    frase: 'Eu começo e paro toda hora',
    detalhe: 'Já tentei várias vezes e nunca passo de algumas semanas.',
    destino: 'constancia',
    porque:
      'Quem começa e para raramente tem problema de vontade. Costuma ter um plano que pede mais dias, mais tempo ou mais deslocamento do que a semana real entrega — e dá para descobrir qual é o gargalo.',
  },
  {
    id: 'duvidaTreino',
    frase: 'Eu treino, mas não sei se meu treino faz sentido',
    detalhe: 'Sigo um treino e desconfio que algo está mal distribuído.',
    destino: 'auditoria',
    porque:
      'Dá para auditar a estrutura do que você já faz: exposição por grupo muscular, coerência com a sua prioridade e se o programa cabe na sua rotina.',
  },
  {
    id: 'contratar',
    frase: 'Quero contratar um personal',
    detalhe: 'Decidi buscar acompanhamento e não sei como escolher.',
    destino: 'personalIdeal',
    porque:
      'O diagnóstico cruza objetivo, experiência, disponibilidade e o seu maior obstáculo para indicar que tipo de acompanhamento faz sentido — e o que procurar no profissional.',
  },
  {
    id: 'formatoDuvida',
    frase: 'Não sei se online ou presencial é melhor para mim',
    detalhe: 'Estou em dúvida entre pagar por presença ou por planejamento.',
    destino: 'formato',
    porque:
      'A resposta depende menos de preço do que se imagina, e mais de autonomia, necessidade de supervisão e do que a sua agenda aguenta.',
  },
  {
    id: 'preco',
    frase: 'Quero saber quanto custa um personal',
    detalhe: 'Preciso de uma faixa de referência antes de negociar.',
    destino: 'preco',
    porque:
      'A calculadora mostra a faixa por sessão e por mês na sua cidade, com a conta aberta e a procedência do dado declarada.',
  },
  {
    id: 'jaTenho',
    frase: 'Já tenho acompanhamento e quero saber se ele é bom',
    detalhe: 'Pago por um personal e tenho a sensação de que algo não está redondo.',
    destino: 'score',
    porque:
      'Dá para avaliar a estrutura do serviço que você contratou e transformar a sensação difusa em perguntas concretas para a próxima conversa.',
  },
];

/* ------------------------------------------------------------------ *
 * O mapa acumulado
 * ------------------------------------------------------------------ */

/**
 * O que o portal guarda sobre a pessoa. Tudo opcional, tudo não sensível,
 * tudo no navegador dela. Nenhum dado identificável entra aqui — sem nome,
 * sem e-mail, sem telefone, sem nome de profissional.
 */
export interface PerfilMapa {
  /** Nível declarado de experiência com treino. */
  experiencia?: string;
  /** Objetivo principal. */
  objetivo?: string;
  /** Dias por semana que a pessoa realmente consegue treinar. */
  diasReais?: number;
  /** Estrutura de treino sugerida (ex.: "Full Body"). */
  divisao?: string;
  /** Gargalo principal encontrado (constância ou formato). */
  gargalo?: string;
  gargaloRotulo?: string;
  /** Formato de acompanhamento recomendado. */
  formato?: string;
  formatoRotulo?: string;
  /** Nível de autonomia percebida. */
  autonomia?: string;
  /** Cidade herdada de página local. */
  cidadeSlug?: string;
  cidadeNome?: string;
  /** Faixa mensal de referência, já formatada. */
  faixaPreco?: string;
  /** Resultado da avaliação do acompanhamento atual (0–100). */
  score?: number;
  /** Principal ponto de atenção do acompanhamento atual. */
  scorePonto?: string;
}

export interface Mapa {
  /** Versão do schema. Incompatível => o mapa é descartado. */
  v: number;
  criadoEm: string;
  atualizadoEm: string;
  /** Ferramentas concluídas, com a data. */
  concluidas: Partial<Record<FerramentaId, string>>;
  perfil: PerfilMapa;
}

export const VERSAO_MAPA = 1;

export const mapaVazio = (hoje: string): Mapa => ({
  v: VERSAO_MAPA,
  criadoEm: hoje,
  atualizadoEm: hoje,
  concluidas: {},
  perfil: {},
});

export const totalConcluidas = (m: Mapa): number => Object.keys(m.concluidas).length;

/** Etapas concluídas, em ordem — alimenta a faixa de progresso. */
export function etapasConcluidas(m: Mapa): EtapaId[] {
  return ETAPAS.filter((e) => Boolean(m.concluidas[e.ferramenta])).map((e) => e.id);
}

/* ------------------------------------------------------------------ *
 * Linhas do mapa — o que a pessoa vê como "o que já sabemos sobre você"
 * ------------------------------------------------------------------ */

export interface LinhaMapa {
  rotulo: string;
  valor: string;
}

export function linhasDoMapa(m: Mapa): LinhaMapa[] {
  const p = m.perfil;
  const linhas: LinhaMapa[] = [];
  if (p.gargaloRotulo) linhas.push({ rotulo: 'Principal dificuldade', valor: p.gargaloRotulo });
  if (p.diasReais) linhas.push({ rotulo: 'Frequência sustentável', valor: `${p.diasReais}× por semana` });
  if (p.divisao) linhas.push({ rotulo: 'Estrutura sugerida', valor: p.divisao });
  if (p.objetivo) linhas.push({ rotulo: 'Objetivo', valor: p.objetivo });
  if (p.autonomia) linhas.push({ rotulo: 'Autonomia no treino', valor: p.autonomia });
  if (p.formatoRotulo) linhas.push({ rotulo: 'Formato mais compatível', valor: p.formatoRotulo });
  if (p.faixaPreco) linhas.push({ rotulo: 'Faixa de investimento', valor: p.faixaPreco });
  if (typeof p.score === 'number') {
    linhas.push({ rotulo: 'Acompanhamento atual', valor: `${p.score}/100` });
  }
  if (p.cidadeNome) linhas.push({ rotulo: 'Região', valor: p.cidadeNome });
  return linhas;
}

/* ------------------------------------------------------------------ *
 * Próximo passo — o coração do sistema
 * ------------------------------------------------------------------ */

export interface ProximoPasso {
  ferramenta: Ferramenta;
  etapa: Etapa;
  /**
   * A ponte narrativa: liga o que a pessoa acabou de descobrir ao que vem
   * agora. Nunca "conheça também" — sempre "por causa de X, agora Y".
   */
  porque: string;
  /** Rótulo do botão, em primeira pessoa. */
  rotulo: string;
}

const feito = (m: Mapa, id: FerramentaId) => Boolean(m.concluidas[id]);

/**
 * Decide o próximo passo a partir do mapa acumulado.
 *
 * A sequência NÃO é rígida: as regras leem o que já se sabe da pessoa e
 * escolhem o que resolve o problema dela agora. Quem chegou dizendo que já
 * tem personal não é empurrado para a etapa 1 só porque ela vem antes.
 *
 * Retorna `null` quando não há próximo passo útil — todas as ferramentas
 * relevantes já foram usadas. Fingir que sempre há mais uma coisa a fazer
 * seria transformar a jornada em esteira.
 */
export function proximoPasso(m: Mapa): ProximoPasso | null {
  const p = m.perfil;

  const montar = (id: FerramentaId, porque: string, rotulo: string): ProximoPasso => ({
    ferramenta: FERRAMENTAS[id],
    etapa: etapaDe(id),
    porque,
    rotulo,
  });

  /* --- Regra 1: quem já tem acompanhamento avalia o que tem --- */
  if (!feito(m, 'score') && p.gargalo === 'jaTemPersonal') {
    return montar(
      'score',
      'Você já tem acompanhamento. Antes de mudar qualquer coisa, vale avaliar se o serviço que você paga está entregando o que deveria.',
      'Avaliar meu acompanhamento',
    );
  }

  /* --- Regra 2: gargalo de rotina/agenda pede estrutura antes de tudo --- */
  if (!feito(m, 'rotina') && (p.gargalo === 'capacidadeRotina' || p.gargalo === 'flexibilidade')) {
    return montar(
      'rotina',
      'O seu gargalo é a semana, não o treino. Antes de avaliar exercícios, vale desenhar uma estrutura que caiba nos dias que você realmente tem.',
      'Montar treino para minha rotina',
    );
  }

  /* --- Regra 3: sabe quantos dias, mas não se o treino está bem montado --- */
  if (feito(m, 'rotina') && !feito(m, 'auditoria')) {
    const dias = p.diasReais ? `${p.diasReais} vezes por semana` : 'com a frequência que definimos';
    return montar(
      'auditoria',
      `Você mostrou que consegue treinar ${dias}, mas ainda não sabemos se o treino que você faz hoje está bem distribuído. Agora vamos verificar isso.`,
      'Analisar meu treino',
    );
  }

  /* --- Regra 4: treino avaliado, falta decidir sobre acompanhamento --- */
  if (feito(m, 'auditoria') && !feito(m, 'personalIdeal') && !feito(m, 'formato')) {
    return montar(
      'personalIdeal',
      'Com a estrutura do treino já olhada, a próxima decisão é se vale ter alguém acompanhando — e que tipo de acompanhamento faria diferença no seu caso.',
      'Descobrir se preciso de acompanhamento',
    );
  }

  /* --- Regra 5: decidiu buscar acompanhamento, falta o formato --- */
  if (feito(m, 'personalIdeal') && !feito(m, 'formato')) {
    return montar(
      'formato',
      'Você já sabe que tipo de acompanhamento faz sentido. Falta a decisão mais concreta: pagar por presença durante o treino ou por planejamento a distância.',
      'Descobrir qual formato combina comigo',
    );
  }

  /* --- Regra 6: formato definido, hora de olhar o investimento --- */
  if (feito(m, 'formato') && !feito(m, 'preco')) {
    const f = p.formatoRotulo ? `${p.formatoRotulo.toLowerCase()}` : 'o formato indicado';
    return montar(
      'preco',
      `Com ${f} definido, o próximo passo é saber que faixa de investimento é razoável na sua região — para você chegar à negociação sabendo o que é normal.`,
      'Ver quanto pode custar',
    );
  }

  /* --- Regra 7: ainda não entendeu por que para --- */
  if (!feito(m, 'constancia') && !feito(m, 'rotina')) {
    return montar(
      'constancia',
      'Antes de escolher treino ou profissional, vale entender por que as tentativas anteriores não engataram. O gargalo costuma estar num lugar diferente do esperado.',
      'Descobrir meu principal gargalo',
    );
  }

  /* --- Regra 8: passou pela constância, falta organizar --- */
  if (!feito(m, 'rotina')) {
    return montar(
      'rotina',
      'Sabendo qual é o seu gargalo, o passo seguinte é transformar isso numa estrutura de treino que sobreviva às semanas ruins.',
      'Montar treino para minha rotina',
    );
  }

  /* --- Regra 9: treina, tem formato, já viu preço — falta avaliar quem contratou --- */
  if (!feito(m, 'score')) {
    return montar(
      'score',
      'Se você já contratou alguém — ou está prestes a — vale saber o que um bom acompanhamento deveria entregar, independentemente do formato.',
      'Ver o que um bom acompanhamento oferece',
    );
  }

  /* --- Regra 10: falta só a auditoria --- */
  if (!feito(m, 'auditoria')) {
    return montar(
      'auditoria',
      'Falta olhar a estrutura do treino em si: distribuição por grupo muscular, frequência e coerência com o seu objetivo.',
      'Analisar meu treino',
    );
  }

  if (!feito(m, 'personalIdeal')) {
    return montar(
      'personalIdeal',
      'Para fechar o quadro, o diagnóstico completo cruza tudo o que você já respondeu e desenha o acompanhamento ideal para o seu caso.',
      'Fazer o diagnóstico completo',
    );
  }

  return null;
}

/* ------------------------------------------------------------------ *
 * Plano de partida — a síntese, quando já há material suficiente
 * ------------------------------------------------------------------ */

/** A síntese só aparece quando existe substância real para sintetizar. */
export const PLANO_MINIMO = 3;

export const podeGerarPlano = (m: Mapa): boolean => totalConcluidas(m) >= PLANO_MINIMO;

export interface Plano {
  linhas: LinhaMapa[];
  acoes: string[];
  /** Frase de abertura, montada a partir do que se descobriu. */
  resumo: string;
}

export function montarPlano(m: Mapa): Plano | null {
  if (!podeGerarPlano(m)) return null;
  const p = m.perfil;
  const acoes: string[] = [];

  if (p.diasReais) {
    acoes.push(
      `Reserve os ${p.diasReais} horários da semana no calendário, com dia e hora — treino sem horário definido compete com tudo o mais.`,
    );
  }
  if (p.divisao) {
    acoes.push(`Monte (ou ajuste) o treino na estrutura ${p.divisao}, que é a que cabe na sua frequência.`);
  }
  if (p.gargaloRotulo) {
    acoes.push(`Ataque primeiro o gargalo principal: ${p.gargaloRotulo.toLowerCase()}. Resolver os outros antes rende pouco.`);
  }
  if (p.formatoRotulo) {
    acoes.push(
      `Decida se vai seguir sozinho ou com acompanhamento — e, se for com, o formato mais compatível com você é ${p.formatoRotulo.toLowerCase()}.`,
    );
  }
  if (!acoes.length) {
    acoes.push('Escolha uma única mudança para esta semana e mantenha as outras como estão.');
  }

  const resumo = [
    'Isto é o que as suas respostas mostraram até agora.',
    'Nada aqui é prescrição de treino nem avaliação física — é um retrato do seu contexto,',
    'montado a partir do que você mesmo declarou nas ferramentas.',
  ].join(' ');

  return { linhas: linhasDoMapa(m), acoes: acoes.slice(0, 4), resumo };
}

/* ------------------------------------------------------------------ *
 * Roteador de entrada — "descubra seu próximo passo"
 * ------------------------------------------------------------------ */

export type TreinaHoje = 'nunca' | 'comecoParo' | 'irregular' | 'regular';
export type MaiorDificuldade = 'naoSeiFazer' | 'naoMantenho' | 'duvidaTreino' | 'tempo';
export type TemAcompanhamento = 'nao' | 'personal' | 'planilha';
export type PensandoContratar = 'decidido' | 'avaliando' | 'sozinho';

export interface RespostasRoteador {
  treina: TreinaHoje;
  dificuldade: MaiorDificuldade;
  acompanhamento: TemAcompanhamento;
  contratar: PensandoContratar;
}

export interface Rota {
  ferramenta: Ferramenta;
  etapa: Etapa;
  /** Por que começar por aqui, citando o que a pessoa acabou de dizer. */
  porque: string;
}

/**
 * Roteia quem não sabe por onde começar.
 *
 * Quatro perguntas, e a ordem das regras importa: quem já paga por
 * acompanhamento tem uma pergunta mais urgente do que quem está começando,
 * mesmo que "avaliar" seja a última etapa da jornada. A jornada é um mapa,
 * não uma esteira.
 */
export function rotearInicio(r: RespostasRoteador): Rota {
  const montar = (id: FerramentaId, porque: string): Rota => ({
    ferramenta: FERRAMENTAS[id],
    etapa: etapaDe(id),
    porque,
  });

  // 1. Quem já paga por acompanhamento: a pergunta urgente é se ele está de pé.
  if (r.acompanhamento === 'personal') {
    return montar(
      'score',
      'Você já paga por acompanhamento. Antes de mudar qualquer coisa, a pergunta mais útil é se o serviço que você já contratou está entregando o que deveria — e isso dá para avaliar em dois minutos.',
    );
  }

  // 2. Recebeu uma planilha: o que dá para avaliar é a estrutura do treino.
  if (r.acompanhamento === 'planilha') {
    return montar(
      'auditoria',
      'Você tem um treino montado por alguém. O caminho mais direto é auditar a estrutura dele: distribuição por grupo muscular, frequência e se o programa cabe na sua semana.',
    );
  }

  // 3. Decidiu contratar: a decisão seguinte é de formato, não de treino.
  if (r.contratar === 'decidido') {
    return montar(
      'personalIdeal',
      'Você já decidiu buscar acompanhamento. O diagnóstico cruza objetivo, experiência e disponibilidade para indicar que tipo de profissional e que formato fazem sentido no seu caso.',
    );
  }

  // 4. Começa e para: o gargalo é aderência, não treino.
  if (r.treina === 'comecoParo' || r.dificuldade === 'naoMantenho') {
    return montar(
      'constancia',
      'Você disse que o problema é manter a sequência. Isso quase nunca é falta de vontade — costuma ser um plano que pede mais do que a sua semana entrega. Vale achar o gargalo antes de trocar de treino.',
    );
  }

  // 5. Já treina e desconfia da estrutura.
  if (r.dificuldade === 'duvidaTreino' && (r.treina === 'regular' || r.treina === 'irregular')) {
    return montar(
      'auditoria',
      'Você já treina e desconfia do que está fazendo. Dá para auditar a estrutura do seu treino atual e ver se ela é coerente com a sua prioridade e com os dias que você tem.',
    );
  }

  // 6. Tempo e rotina: o problema é caber na semana.
  if (r.dificuldade === 'tempo') {
    return montar(
      'rotina',
      'O seu limite é a semana, não o treino. Faz mais sentido desenhar primeiro uma estrutura que caiba nos dias que você realmente tem — inclusive uma versão mínima para as semanas ruins.',
    );
  }

  // 7. Nunca treinou ou não sabe o que fazer: começar pelo plano.
  if (r.treina === 'nunca' || r.dificuldade === 'naoSeiFazer') {
    return montar(
      'rotina',
      'Você está começando e a maior dúvida é o que fazer. Começar por uma estrutura executável evita o erro mais comum: montar a semana ideal e abandonar na terceira.',
    );
  }

  // 8. Está avaliando contratar, sem gargalo claro.
  if (r.contratar === 'avaliando') {
    return montar(
      'formato',
      'Você está avaliando se vale contratar alguém. A decisão mais concreta é entre pagar por presença durante o treino ou por planejamento a distância — e ela depende menos de preço do que se imagina.',
    );
  }

  return montar(
    'constancia',
    'Sem um gargalo evidente nas suas respostas, o começo mais útil é entender o que costuma travar a sua rotina. É de lá que sai o resto.',
  );
}
