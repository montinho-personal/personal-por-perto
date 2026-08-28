/**
 * consistencyEngine — motor do "Diagnóstico da Constância".
 *
 * Auditor de aderência, não quiz de motivação. A pergunta que ele responde
 * não é "você tem disciplina?", e sim "o que na sua rotina está tornando
 * difícil manter o treino?".
 *
 * Princípios que governam este arquivo:
 *
 * 1. Nunca culpar. Quando o plano e a rotina não batem, o defeito está no
 *    plano — não na pessoa. A copy corrige o sistema, nunca o caráter.
 * 2. Nada de diagnóstico psicológico. Avaliamos comportamento declarado e
 *    números (planejado x realizado, deslocamento, duração), não traços.
 * 3. Nada de neuromito. Sem "seu cérebro sabota você", sem dopamina.
 * 4. Se não houver sinal forte, dizer isso. Inventar gargalo para parecer
 *    útil é pior do que admitir que a ferramenta não achou nada.
 * 5. Uma mudança principal, não quinze dicas.
 *
 * Zero dependências, zero DOM: roda igual no build (testes) e no navegador.
 */

/* ------------------------------------------------------------------ *
 * Entradas
 * ------------------------------------------------------------------ */

export type DiasPlanejados = '2' | '3' | '4' | '5' | '6' | 'todos' | 'semNumero';
export type DiasReais = 'nenhum' | '1' | '2' | '3' | '4' | '5mais' | 'varia';
export type Duracao = 'ate30' | '30a45' | '45a60' | '60a90' | 'mais90' | 'nuncaSei';
export type Deslocamento = 'mesmoLugar' | 'ate10' | '10a20' | '20a30' | 'mais30' | 'varia';
export type Previsibilidade = 'muito' | 'razoavel' | 'mudaBastante' | 'quaseNunca';
export type ReacaoFalta = 'proximoDia' | 'compensar' | 'perdido' | 'perdeSemana' | 'desanimo' | 'varia';
export type Clareza = 'sim' | 'quaseSempre' | 'asVezes' | 'decideNaHora' | 'semTreino';
export type Progresso = 'acompanho' | 'maisOuMenos' | 'raramente' | 'naoFacoIdeia' | 'poucoTempo';
export type PlanoB = 'sim' | 'maisOuMenos' | 'nao' | 'nuncaPensei';
export type Local = 'academia' | 'condominio' | 'casa' | 'arLivre' | 'varia';

export type Barreira =
  | 'tempo'
  | 'cansaco'
  | 'trabalho'
  | 'familia'
  | 'deslocamento'
  | 'academiaLotada'
  | 'naoSeiQueFazer'
  | 'treinoDemora'
  | 'desanimo'
  | 'rotinaMuda'
  | 'naoVejoResultado'
  | 'adiando';

export interface ConstanciaRespostas {
  diasPlanejados: DiasPlanejados;
  diasReais: DiasReais;
  duracao: Duracao;
  deslocamento: Deslocamento;
  previsibilidade: Previsibilidade;
  reacaoFalta: ReacaoFalta;
  /** Até 2. */
  barreiras: Barreira[];
  clareza: Clareza;
  progresso: Progresso;
  planoB: PlanoB;
  /** Só perguntado quando o deslocamento sugere atrito logístico. */
  local?: Local;
  /** Contexto herdado de página local — nunca perguntado aqui. */
  cidadeSlug?: string;
  cidadeNome?: string;
}

/* ------------------------------------------------------------------ *
 * Pilares
 * ------------------------------------------------------------------ */

/**
 * Os gargalos que o motor sabe reconhecer.
 *
 * Dois pilares do briefing não foram implementados, de propósito:
 * "dependência de motivação" exigiria perguntar sobre estado interno e
 * resvalaria em julgamento; e "excesso de complexidade" é medido pela
 * clareza — separá-los produziria dois alertas dizendo a mesma coisa.
 * Do mesmo modo, "frequência irreal" e "capacidade da rotina" foram
 * fundidos: são o mesmo sinal visto de dois ângulos.
 */
export type PilarId =
  | 'capacidadeRotina'
  | 'friccaoLogistica'
  | 'tudoOuNada'
  | 'semPlanoB'
  | 'faltaClareza'
  | 'semFeedback'
  | 'sessoesLongas'
  | 'rotinaImprevisivel'
  | 'faltaAcompanhamento';

export interface Gargalo {
  id: PilarId;
  titulo: string;
  /** O que a resposta da pessoa mostra — sempre citando o que ela declarou. */
  oQueMostra: string;
  /** Por que isso atrapalha a constância. */
  porQueAtrapalha: string;
  /** O ajuste concreto. */
  ajuste: string;
  artigo?: { url: string; titulo: string };
}

export interface SemanaSugerida {
  alvo: number;
  minima: number;
  duracaoAlvo: string;
  duracaoMinima: string;
}

export type FerramentaSugerida = 'rotina' | 'personalIdeal' | 'mapa' | 'auditoria' | 'nenhuma';

export interface ConstanciaResultado {
  /** Quando nenhum sinal é forte o bastante, o motor admite isso. */
  temGargalo: boolean;
  resumo: string;
  principal?: Gargalo;
  /** No máximo 2 além do principal. */
  secundarios: Gargalo[];
  /** A única coisa a mudar nesta semana. */
  umaCoisa: string;
  semana: SemanaSugerida;
  planoB: string;
  /** Observação quando as respostas se contradizem. */
  observacao?: string;
  proximoPasso: { texto: string; rotulo: string; url: string; ferramenta: FerramentaSugerida };
  conteudo: { url: string; titulo: string }[];
  montinho?: { motivo: string };
  whatsapp: string;
  share: string;
  analytics: {
    planned_days: string;
    actual_days: string;
    schedule_predictability: Previsibilidade;
    primary_barrier: PilarId | 'nenhum';
    has_fallback_plan: PlanoB;
    commute_bucket: Deslocamento;
    result_type: 'gargalo' | 'sem-gargalo';
  };
  /** Só em desenvolvimento: pontuação e regras acionadas. */
  debug: { pontos: Record<string, number>; regras: string[] };
}

/* ------------------------------------------------------------------ *
 * Configuração central — nada de número mágico espalhado
 * ------------------------------------------------------------------ */

/** Abaixo disto, o motor não afirma que existe gargalo. */
const LIMITE_SINAL = 4;

const DIAS_NUM: Record<DiasPlanejados, number | null> = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  todos: 7,
  semNumero: null,
};

const REAIS_NUM: Record<DiasReais, number | null> = {
  nenhum: 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5mais': 5,
  varia: null,
};

const DURACAO_TXT: Record<Duracao, string> = {
  ate30: 'até 30 minutos',
  '30a45': '30 a 45 minutos',
  '45a60': '45 a 60 minutos',
  '60a90': '60 a 90 minutos',
  mais90: 'mais de 90 minutos',
  nuncaSei: 'um tempo que você nunca sabe ao certo',
};

/** Duração alvo e a versão reduzida para o dia ruim. */
const DURACAO_PAR: Record<Duracao, { alvo: string; minima: string }> = {
  ate30: { alvo: '30 minutos', minima: '15 a 20 minutos' },
  '30a45': { alvo: '30 a 45 minutos', minima: '20 minutos' },
  '45a60': { alvo: '45 minutos', minima: '25 minutos' },
  '60a90': { alvo: '50 a 60 minutos', minima: '30 minutos' },
  mais90: { alvo: '60 minutos', minima: '30 minutos' },
  nuncaSei: { alvo: '45 minutos', minima: '25 minutos' },
};

const DESLOCAMENTO_TXT: Record<Deslocamento, string> = {
  mesmoLugar: 'treina no mesmo lugar onde já está',
  ate10: 'leva até 10 minutos para começar a treinar',
  '10a20': 'leva de 10 a 20 minutos para começar a treinar',
  '20a30': 'leva de 20 a 30 minutos para começar a treinar',
  mais30: 'leva mais de 30 minutos para começar a treinar',
  varia: 'tem um tempo de deslocamento que varia bastante',
};

const BARREIRA_TXT: Record<Barreira, string> = {
  tempo: 'falta de tempo',
  cansaco: 'cansaço',
  trabalho: 'trabalho',
  familia: 'família',
  deslocamento: 'deslocamento',
  academiaLotada: 'academia lotada',
  naoSeiQueFazer: 'não saber o que fazer',
  treinoDemora: 'o treino demorar demais',
  desanimo: 'desânimo',
  rotinaMuda: 'a rotina mudar',
  naoVejoResultado: 'não ver resultado',
  adiando: 'esquecer ou ir adiando',
};

const ARTIGOS = {
  constancia: { url: '/guias/como-nao-desistir-do-treino/', titulo: 'Como não desistir do treino' },
  frequencia: { url: '/musculacao/frequencia-de-treino/', titulo: 'Frequência de treino: quantas vezes por semana' },
  tempo: { url: '/musculacao/quanto-tempo-de-treino-por-dia/', titulo: 'Quanto tempo de treino por dia é necessário' },
  progressao: { url: '/musculacao/progressao-de-carga/', titulo: 'Progressão de carga: como aplicar' },
  resultados: { url: '/musculacao/quanto-tempo-para-ver-resultados/', titulo: 'Quanto tempo para ver resultados' },
  montarAbc: { url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' },
  voltar: { url: '/musculacao/voltar-a-treinar-depois-de-parar/', titulo: 'Voltar a treinar depois de parar' },
  casa: { url: '/musculacao/treino-em-casa-para-iniciantes/', titulo: 'Treino em casa para iniciantes' },
} as const;

/* ------------------------------------------------------------------ *
 * Pontuação
 * ------------------------------------------------------------------ */

interface Pontuacao {
  pontos: Record<PilarId, number>;
  regras: string[];
}

function pontuar(r: ConstanciaRespostas): Pontuacao {
  const p: Record<PilarId, number> = {
    capacidadeRotina: 0,
    friccaoLogistica: 0,
    tudoOuNada: 0,
    semPlanoB: 0,
    faltaClareza: 0,
    semFeedback: 0,
    sessoesLongas: 0,
    rotinaImprevisivel: 0,
    faltaAcompanhamento: 0,
  };
  const regras: string[] = [];
  const soma = (pilar: PilarId, peso: number, regra: string) => {
    p[pilar] += peso;
    regras.push(`${regra} (${pilar} +${peso})`);
  };

  const planejado = DIAS_NUM[r.diasPlanejados];
  const real = REAIS_NUM[r.diasReais];
  const barreiras = r.barreiras || [];

  /* --- Planejado x realizado: o sinal mais forte da ferramenta --- */
  if (planejado !== null && real !== null) {
    const lacuna = planejado - real;
    // A lacuna só é gargalo quando o número realizado é baixo. Quem planeja
    // sete e faz cinco não tem problema de constância — tem uma meta
    // otimista. Apontar isso como falha seria pura implicância.
    const realizaBastante = real >= 4;
    if (!realizaBastante) {
      if (lacuna >= 3) soma('capacidadeRotina', 5, 'lacuna_planejado_realizado_grande');
      else if (lacuna === 2) soma('capacidadeRotina', 4, 'lacuna_planejado_realizado_media');
      else if (lacuna === 1) soma('capacidadeRotina', 2, 'lacuna_planejado_realizado_pequena');
    } else if (lacuna >= 3) {
      soma('capacidadeRotina', 2, 'lacuna_grande_mas_ja_treina_bastante');
    }
  }
  // Sem número definido é, em si, ausência de plano.
  if (r.diasPlanejados === 'semNumero') soma('faltaClareza', 3, 'sem_frequencia_definida');
  if (r.diasReais === 'varia') soma('rotinaImprevisivel', 2, 'frequencia_real_variavel');
  if (r.diasReais === 'nenhum') soma('capacidadeRotina', 3, 'nao_treina_atualmente');

  /* --- Duração --- */
  if (r.duracao === 'mais90') soma('sessoesLongas', 4, 'sessao_muito_longa');
  else if (r.duracao === '60a90') soma('sessoesLongas', 2, 'sessao_longa');
  if (barreiras.includes('treinoDemora')) soma('sessoesLongas', 3, 'barreira_treino_demora');
  if (barreiras.includes('tempo') && (r.duracao === 'mais90' || r.duracao === '60a90')) {
    soma('sessoesLongas', 2, 'tempo_e_sessao_longa');
  }

  /* --- Fricção logística --- */
  if (r.deslocamento === 'mais30') soma('friccaoLogistica', 4, 'deslocamento_longo');
  else if (r.deslocamento === '20a30') soma('friccaoLogistica', 3, 'deslocamento_medio');
  else if (r.deslocamento === '10a20') soma('friccaoLogistica', 1, 'deslocamento_curto');
  if (r.deslocamento === 'varia') soma('friccaoLogistica', 2, 'deslocamento_variavel');
  if (barreiras.includes('deslocamento')) soma('friccaoLogistica', 3, 'barreira_deslocamento');
  if (barreiras.includes('academiaLotada')) soma('friccaoLogistica', 2, 'barreira_academia_lotada');

  /* --- Tudo ou nada --- */
  if (r.reacaoFalta === 'perdeSemana') soma('tudoOuNada', 5, 'perde_a_semana');
  else if (r.reacaoFalta === 'desanimo') soma('tudoOuNada', 4, 'desanima_e_para');
  else if (r.reacaoFalta === 'perdido') soma('tudoOuNada', 3, 'fica_perdido_para_reorganizar');
  else if (r.reacaoFalta === 'compensar') soma('tudoOuNada', 1, 'tenta_compensar');

  /* --- Plano B --- */
  if (r.planoB === 'nao') soma('semPlanoB', 4, 'sem_plano_minimo');
  else if (r.planoB === 'nuncaPensei') soma('semPlanoB', 4, 'nunca_pensou_em_plano_minimo');
  else if (r.planoB === 'maisOuMenos') soma('semPlanoB', 2, 'plano_minimo_vago');

  /* --- Clareza / carga de decisão --- */
  if (r.clareza === 'semTreino') soma('faltaClareza', 5, 'sem_treino_estruturado');
  else if (r.clareza === 'decideNaHora') soma('faltaClareza', 4, 'decide_na_hora');
  else if (r.clareza === 'asVezes') soma('faltaClareza', 2, 'clareza_parcial');
  if (barreiras.includes('naoSeiQueFazer')) soma('faltaClareza', 3, 'barreira_nao_sei_o_que_fazer');

  /* --- Feedback --- */
  if (r.progresso === 'naoFacoIdeia') soma('semFeedback', 4, 'nao_percebe_progresso');
  else if (r.progresso === 'raramente') soma('semFeedback', 3, 'raramente_percebe_progresso');
  else if (r.progresso === 'maisOuMenos') soma('semFeedback', 1, 'percebe_progresso_parcialmente');
  if (barreiras.includes('naoVejoResultado')) soma('semFeedback', 3, 'barreira_nao_vejo_resultado');

  /* --- Previsibilidade --- */
  if (r.previsibilidade === 'quaseNunca') soma('rotinaImprevisivel', 4, 'rotina_imprevisivel');
  else if (r.previsibilidade === 'mudaBastante') soma('rotinaImprevisivel', 3, 'rotina_muda_bastante');
  if (barreiras.includes('rotinaMuda')) soma('rotinaImprevisivel', 2, 'barreira_rotina_muda');

  /* --- Falta de estrutura externa (combinação, nunca isolada) --- */
  if (r.clareza === 'semTreino' && (r.progresso === 'naoFacoIdeia' || r.progresso === 'raramente')) {
    soma('faltaAcompanhamento', 4, 'sem_treino_e_sem_feedback');
  }
  if (r.planoB === 'nuncaPensei' && r.clareza === 'decideNaHora') {
    soma('faltaAcompanhamento', 3, 'sem_plano_e_decide_na_hora');
  }

  return { pontos: p, regras };
}

/* ------------------------------------------------------------------ *
 * Textos dos gargalos — sempre citando o que a pessoa declarou
 * ------------------------------------------------------------------ */

function montarGargalo(id: PilarId, r: ConstanciaRespostas): Gargalo {
  const planejado = DIAS_NUM[r.diasPlanejados];
  const real = REAIS_NUM[r.diasReais];
  const barreiras = (r.barreiras || []).map((b) => BARREIRA_TXT[b]).join(' e ');

  switch (id) {
    case 'capacidadeRotina':
      return {
        id,
        titulo: 'Seu plano pede mais da sua semana do que ela costuma entregar',
        oQueMostra:
          planejado !== null && real !== null
            ? `Você planeja treinar ${planejado} ${planejado === 1 ? 'vez' : 'vezes'} por semana, mas relata conseguir ${real === 0 ? 'nenhuma' : real} na maioria das semanas.`
            : 'Pelas suas respostas, a frequência que você planeja e a que acontece de fato não estão batendo.',
        porQueAtrapalha:
          'Quando o plano depende de uma semana quase perfeita, qualquer imprevisto vira falha — e falhar repetidamente contra a própria meta desgasta mais do que treinar menos. O problema aqui não é falta de vontade: é dimensionamento.',
        ajuste:
          real !== null && real > 0
            ? `Monte a sua rotina-base para ${real} ${real === 1 ? 'sessão' : 'sessões'}. Se sobrar um dia, ótimo — mas o sucesso da semana não deveria depender dele.`
            : 'Escolha um número de sessões que você sustente numa semana ruim, não numa semana boa, e construa a partir dele.',
        artigo: ARTIGOS.frequencia,
      };

    case 'friccaoLogistica':
      return {
        id,
        titulo: 'O maior atrito parece acontecer antes do treino começar',
        oQueMostra: `Você ${DESLOCAMENTO_TXT[r.deslocamento]}${barreiras ? `, e apontou ${barreiras} entre os motivos de faltar` : ''}.`,
        porQueAtrapalha:
          'Cada minuto entre a decisão de treinar e o começo do treino é uma chance de desistir. Quando o custo de chegar é alto, ele é pago todo dia — e nos dias cansados ele é o que decide.',
        ajuste:
          'Reduzir a distância até o treino costuma render mais do que trocar a divisão. Vale avaliar um lugar mais próximo, a academia do prédio ou uma versão em casa para os dias em que o deslocamento inviabiliza.',
        artigo: ARTIGOS.casa,
      };

    case 'tudoOuNada':
      return {
        id,
        titulo: 'O problema parece estar no que acontece depois de faltar',
        oQueMostra:
          r.reacaoFalta === 'perdeSemana'
            ? 'Você relata que, ao perder um treino planejado, costuma perder o restante da semana.'
            : r.reacaoFalta === 'desanimo'
              ? 'Você relata que, ao perder um treino, costuma desanimar e parar por alguns dias.'
              : 'Você relata ficar sem saber como reorganizar a semana quando perde um treino.',
        porQueAtrapalha:
          'Tratar a semana como um placar que zera transforma um treino perdido em vários. Na prática, a diferença entre quem mantém e quem para raramente está nos treinos que dão certo — está no que acontece depois dos que não dão.',
        ajuste:
          'Pare de usar o calendário como placar. Perdeu segunda? O próximo treino é o que estava marcado para segunda, feito no próximo dia possível. A sequência continua de onde parou; ela não recomeça.',
        artigo: ARTIGOS.constancia,
      };

    case 'semPlanoB':
      return {
        id,
        titulo: 'Você tem plano para a semana ideal, mas não para a semana real',
        oQueMostra:
          r.planoB === 'nuncaPensei'
            ? 'Você indicou nunca ter pensado em uma versão mínima do seu treino.'
            : 'Você indicou não ter uma versão reduzida do treino para as semanas apertadas.',
        porQueAtrapalha:
          'Quando o imprevisto chega, você precisa decidir tudo de novo — e decidir cansado, com pouco tempo, quase sempre termina em não treinar. Ter a versão curta pronta de antemão elimina essa decisão.',
        ajuste:
          'Defina hoje, com calma, como é o seu treino de 20 a 30 minutos. Não precisa ser bom: precisa existir antes de você precisar dele.',
        artigo: ARTIGOS.tempo,
      };

    case 'faltaClareza':
      return {
        id,
        titulo: 'Você está gastando decisão no momento em que ela é mais cara',
        oQueMostra:
          r.clareza === 'semTreino'
            ? 'Você indicou não ter um treino estruturado.'
            : 'Você indicou que, com frequência, precisa decidir o que fazer na hora de treinar.',
        porQueAtrapalha:
          'Chegar sem saber o que fazer adiciona um obstáculo bem no ponto em que a disposição já está baixa. Não é um problema de conhecimento: é de carga de decisão no pior momento possível.',
        ajuste:
          'Deixe o treino definido antes de sair de casa — mesmo que seja uma lista simples de exercícios na ordem. A decisão precisa estar tomada antes do cansaço chegar.',
        artigo: ARTIGOS.montarAbc,
      };

    case 'semFeedback':
      return {
        id,
        titulo: 'Você treina, mas não consegue ver que está avançando',
        oQueMostra:
          r.progresso === 'naoFacoIdeia'
            ? 'Você indicou não fazer ideia se está evoluindo.'
            : 'Você indicou raramente perceber a própria evolução.',
        porQueAtrapalha:
          'Esforço sem retorno visível fica difícil de sustentar por meses. E o retorno costuma existir — só não está sendo medido, então não aparece.',
        ajuste:
          'Anote carga, séries e repetições dos exercícios principais. Em três ou quatro semanas você terá evidência concreta de progresso, em vez de depender da sensação.',
        artigo: ARTIGOS.progressao,
      };

    case 'sessoesLongas':
      return {
        id,
        titulo: 'O tamanho da sessão está tornando o treino difícil de encaixar',
        oQueMostra: `Suas sessões costumam durar ${DURACAO_TXT[r.duracao]}${barreiras.includes('tempo') || barreiras.includes('demorar') ? ', e o tempo aparece entre os seus principais obstáculos' : ''}.`,
        porQueAtrapalha:
          'Uma sessão longa exige um bloco grande e contínuo de agenda — e blocos grandes são os primeiros a sumir numa semana cheia. O treino não é abandonado por ser ruim: é abandonado por não caber.',
        ajuste:
          'Antes de procurar mais tempo, vale conferir se a sessão precisa mesmo ser tão longa. Reduzir o número de exercícios e manter os principais costuma preservar quase todo o resultado com bem menos tempo.',
        artigo: ARTIGOS.tempo,
      };

    case 'rotinaImprevisivel':
      return {
        id,
        titulo: 'Sua rotina não comporta um treino preso a dias fixos',
        oQueMostra:
          r.previsibilidade === 'quaseNunca'
            ? 'Você indicou quase nunca saber como será o seu dia.'
            : 'Você indicou que a sua semana muda bastante.',
        porQueAtrapalha:
          'Um plano amarrado a segunda, quarta e sexta falha toda vez que a segunda vira. E cada falha dessas parece culpa sua, quando na verdade é o formato do plano que não combina com a sua rotina.',
        ajuste:
          'Troque o calendário pela sequência: em vez de "segunda é treino A", use "o próximo treino é o A, no próximo dia que der". Assim um dia perdido empurra a fila, mas não quebra nada.',
        artigo: ARTIGOS.frequencia,
      };

    case 'faltaAcompanhamento':
      return {
        id,
        titulo: 'Falta uma estrutura externa que organize e ajuste o processo',
        oQueMostra:
          'Pelas suas respostas, hoje não há um treino definido nem um acompanhamento do que está evoluindo — as duas coisas ficam por sua conta, ao mesmo tempo.',
        porQueAtrapalha:
          'Montar o treino, ajustar quando a semana muda, medir progresso e ainda executar é muita função acumulada. Não é falta de capacidade: é excesso de papéis para uma pessoa só.',
        ajuste:
          'Reduza o número de decisões que dependem de você. Ter uma estrutura definida por alguém de fora — mesmo que temporariamente — costuma destravar mais do que tentar se organizar melhor.',
        artigo: ARTIGOS.constancia,
      };
  }
}

/* ------------------------------------------------------------------ *
 * Semana-alvo e semana mínima
 * ------------------------------------------------------------------ */

function montarSemana(r: ConstanciaRespostas): SemanaSugerida {
  const planejado = DIAS_NUM[r.diasPlanejados];
  const real = REAIS_NUM[r.diasReais];

  // A semana-alvo nasce do que a pessoa já entrega, não do que ela deseja.
  let alvo: number;
  if (real !== null && real > 0) alvo = real;
  else if (real === 0) alvo = 2; // quem não treina começa pequeno
  else if (planejado !== null) alvo = Math.max(2, planejado - 2);
  else alvo = 3;
  alvo = Math.min(6, Math.max(1, alvo));

  const minima = Math.max(1, Math.ceil(alvo / 2));
  const par = DURACAO_PAR[r.duracao];
  return { alvo, minima, duracaoAlvo: par.alvo, duracaoMinima: par.minima };
}

/* ------------------------------------------------------------------ *
 * Próximo passo — resolve o gargalo, não vende por padrão
 * ------------------------------------------------------------------ */

function definirProximoPasso(
  principal: PilarId | null,
  r: ConstanciaRespostas,
): ConstanciaResultado['proximoPasso'] {
  const temCidade = Boolean(r.cidadeSlug);

  if (principal === 'friccaoLogistica') {
    return temCidade
      ? {
          texto: 'Se o atrito está no caminho até o treino, o primeiro ajuste é geográfico, não metodológico.',
          rotulo: `Ver onde treinar em ${r.cidadeNome}`,
          url: `/personal-trainer/${r.cidadeSlug}/#mapa-fitness`,
          ferramenta: 'mapa',
        }
      : {
          texto: 'Se o atrito está no caminho até o treino, vale mapear alternativas mais próximas antes de mexer no programa.',
          rotulo: 'Ver academias e espaços por cidade',
          url: '/personal-trainer/',
          ferramenta: 'mapa',
        };
  }

  if (principal === 'faltaAcompanhamento' || principal === 'semFeedback') {
    return {
      texto:
        'Pelo seu caso, o ganho maior não está em mais informação: está em ter alguém organizando estrutura, ajustes e acompanhamento de evolução.',
      rotulo: 'Descobrir que acompanhamento combina comigo',
      url: '/ferramentas/encontre-seu-personal-ideal/',
      ferramenta: 'personalIdeal',
    };
  }

  if (principal === 'faltaClareza' && r.clareza !== 'semTreino') {
    return {
      texto: 'Você já tem um treino: o que falta é conferir se ele está organizado de um jeito que sustente a sua semana.',
      rotulo: 'Analisar meu treino',
      url: '/ferramentas/meu-treino-faz-sentido/',
      ferramenta: 'auditoria',
    };
  }

  // Capacidade, sessões longas, plano B, tudo-ou-nada, rotina imprevisível
  // e ausência de treino estruturado desembocam todos na mesma coisa:
  // remontar a semana a partir do que é possível.
  return {
    texto:
      'O próximo passo natural é montar uma estrutura a partir dos dias e do tempo que você realmente tem — e já sair com a versão mínima definida.',
    rotulo: 'Montar treino para minha rotina',
    url: '/ferramentas/treino-para-minha-rotina/',
    ferramenta: 'rotina',
  };
}

/* ------------------------------------------------------------------ *
 * Motor
 * ------------------------------------------------------------------ */

export function diagnosticarConstancia(r: ConstanciaRespostas): ConstanciaResultado {
  const { pontos, regras } = pontuar(r);
  const semana = montarSemana(r);

  const ordenados = (Object.entries(pontos) as [PilarId, number][])
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);

  const maior = ordenados[0]?.[1] ?? 0;
  const temGargalo = maior >= LIMITE_SINAL;

  const principalId = temGargalo ? ordenados[0][0] : null;
  const principal = principalId ? montarGargalo(principalId, r) : undefined;
  const secundarios = temGargalo
    ? ordenados
        .slice(1)
        .filter(([, v]) => v >= 3)
        .slice(0, 2)
        .map(([id]) => montarGargalo(id, r))
    : [];

  /* --- Contradição: treina mais do que planeja --- */
  const planejado = DIAS_NUM[r.diasPlanejados];
  const real = REAIS_NUM[r.diasReais];
  let observacao: string | undefined;
  if (planejado !== null && real !== null && real > planejado) {
    observacao =
      'Você indicou treinar mais dias do que planeja. Isso é incomum e sugere que frequência provavelmente não é o seu gargalo — o diagnóstico abaixo ignora esse ponto e olha para os demais.';
  }

  /* --- Resumo --- */
  const resumo = temGargalo
    ? `${principal!.oQueMostra} É esse o ponto que mais parece estar pesando na sua constância hoje.`
    : 'Pelas suas respostas, a sua estrutura atual tem poucas barreiras evidentes de constância: a frequência que você planeja é próxima da que acontece, existe alguma clareza sobre o que fazer e você tem noção do próprio progresso. Se ainda assim a manutenção está difícil, o motivo provavelmente está em fatores que este diagnóstico não avalia — sono, alimentação, carga de trabalho ou algo específico do seu contexto.';

  /* --- A única coisa a mudar --- */
  const umaCoisa = temGargalo
    ? principal!.ajuste
    : `Se quiser um ajuste mesmo assim: proteja a sua semana mínima de ${semana.minima} ${semana.minima === 1 ? 'sessão' : 'sessões'}. É ela que segura a rotina nos meses em que tudo aperta.`;

  const planoB = `Se a semana apertar, a saída não é pular o treino: é encurtá-lo. Tenha pronta uma versão de ${semana.duracaoMinima} — e trate ${semana.minima} ${semana.minima === 1 ? 'sessão' : 'sessões'} como o piso da semana, não como fracasso.`;

  const proximoPasso = definirProximoPasso(principalId, r);

  /* --- Conteúdo --- */
  const conteudo: { url: string; titulo: string }[] = [];
  if (principal?.artigo) conteudo.push(principal.artigo);
  for (const s of secundarios) if (s.artigo) conteudo.push(s.artigo);
  conteudo.push(ARTIGOS.constancia);
  const vistos = new Set<string>();
  const conteudoUnico = conteudo.filter((c) => (vistos.has(c.url) ? false : (vistos.add(c.url), true))).slice(0, 3);

  /* --- Montinho: só quando o gargalo é de estrutura/acompanhamento --- */
  const pedeAcompanhamento =
    principalId === 'faltaAcompanhamento' ||
    principalId === 'faltaClareza' ||
    principalId === 'semFeedback' ||
    principalId === 'capacidadeRotina';
  const montinho = pedeAcompanhamento
    ? {
        motivo:
          'Seu gargalo principal é manter uma estrutura que se adapte à sua semana — e esse é justamente o tipo de coisa que um acompanhamento individual organiza: frequência realista, ajuste quando a rotina muda e progressão acompanhada ao longo dos meses.',
      }
    : undefined;

  /* --- WhatsApp: curto, só o essencial --- */
  const whatsapp = [
    'Oi, Montinho! Fiz o Diagnóstico da Constância no Personal por Perto.',
    '',
    temGargalo
      ? `O principal ponto que apareceu: ${principal!.titulo.toLowerCase()}.`
      : 'O diagnóstico não apontou uma barreira principal clara.',
    planejado !== null && real !== null
      ? `Planejo ${planejado} treinos por semana e consigo fazer ${real} na maioria das semanas.`
      : 'Minha frequência de treino varia bastante.',
    '',
    'Queria entender como você estruturaria um acompanhamento para uma rotina assim.',
  ].join('\n');

  const share = temGargalo
    ? `Fiz o Diagnóstico da Constância do Personal por Perto. Meu principal gargalo: ${principal!.titulo.toLowerCase()}. Faça o seu: https://www.personalporperto.com.br/ferramentas/diagnostico-da-constancia/`
    : 'Fiz o Diagnóstico da Constância do Personal por Perto e minha rotina tem poucas barreiras evidentes. Faça o seu: https://www.personalporperto.com.br/ferramentas/diagnostico-da-constancia/';

  return {
    temGargalo,
    resumo,
    principal,
    secundarios,
    umaCoisa,
    semana,
    planoB,
    observacao,
    proximoPasso,
    conteudo: conteudoUnico,
    montinho,
    whatsapp,
    share,
    analytics: {
      planned_days: r.diasPlanejados,
      actual_days: r.diasReais,
      schedule_predictability: r.previsibilidade,
      primary_barrier: principalId ?? 'nenhum',
      has_fallback_plan: r.planoB,
      commute_bucket: r.deslocamento,
      result_type: temGargalo ? 'gargalo' : 'sem-gargalo',
    },
    debug: { pontos, regras },
  };
}

export const rotulosConstancia = {
  duracao: DURACAO_TXT,
  barreira: BARREIRA_TXT,
  deslocamento: DESLOCAMENTO_TXT,
};
