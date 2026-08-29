/**
 * personalScoreEngine — motor do "Personal Score: avalie seu acompanhamento".
 *
 * Auditor de qualidade de serviço, NÃO juiz de profissionais. A diferença
 * é o produto inteiro.
 *
 * Princípios que governam cada linha deste arquivo:
 *
 * 1. Nunca dizer que um profissional é bom ou ruim, e nunca sugerir troca.
 *    O resultado aponta o que vale conversar — não o que vale cancelar.
 * 2. Avaliar o serviço pelo que ele PROMETEU. Cobrar correção de execução
 *    presencial de quem vendeu uma planilha é desonesto, e cobrar suporte
 *    diário de quem vendeu acompanhamento mensal também. Por isso cada
 *    pilar só entra na conta quando faz parte do modelo contratado.
 * 3. Online não perde ponto por ser online, e presencial não ganha ponto
 *    por ser presencial. Presença física não é sinônimo de planejamento.
 * 4. Se o acompanhamento parece bom, dizer isso. Inventar problema para
 *    parecer útil destruiria a credibilidade da ferramenta.
 * 5. O melhor entregável não é a nota: são as perguntas que a pessoa leva
 *    para a próxima conversa com o profissional dela.
 *
 * Este motor nunca recebe, guarda ou processa o nome de nenhum
 * profissional. Não existe ranking, não existe base pública.
 */

/* ------------------------------------------------------------------ *
 * Entradas
 * ------------------------------------------------------------------ */

/** O modelo contratado define o que é justo esperar. */
export type TipoServico =
  | 'presencialIndividual'
  | 'presencialGrupo'
  | 'online'
  | 'hibrido'
  | 'planilha';

/** O que o profissional levantou antes de montar o treino. */
export type ItemAvaliacao =
  | 'objetivo'
  | 'experiencia'
  | 'rotina'
  | 'dias'
  | 'tempo'
  | 'historico'
  | 'limitacoes'
  | 'preferencias'
  | 'nenhuma'
  | 'naoLembro';

export type Personalizacao = 'claramente' | 'boaParte' | 'algumasGenericas' | 'muitoGenerico' | 'naoSei';
export type RotinaFit = 'sim' | 'quaseSempre' | 'asVezes' | 'frequentementeNao' | 'dificilmente';
export type Progressao = 'metodoClaro' | 'personalOrienta' | 'asVezes' | 'sempreParecido' | 'naoFacoIdeia';
export type Monitoramento = 'sempre' | 'frequentemente' | 'asVezes' | 'raramente' | 'nunca' | 'naoSei';
export type Ajustes = 'entendoGeralmente' | 'asVezes' | 'normalmenteNao' | 'mudaSemExplicacao' | 'quaseNuncaMuda';
export type Execucao =
  | 'frequencia'
  | 'quandoNecessario'
  | 'raramente'
  | 'nunca'
  | 'onlinePorVideo'
  | 'onlineSemCorrecao'
  | 'naoSeiDizer';
export type Metas = 'sim' | 'maisOuMenos' | 'nao';
export type Comunicacao = 'sim' | 'geralmente' | 'depende' | 'raramente' | 'nao';
export type Adaptabilidade = 'sim' | 'asVezes' | 'dificilmente' | 'nao' | 'nuncaPrecisei';
export type Explicacao = 'sim' | 'normalmente' | 'asVezes' | 'raramente' | 'nuncaPerguntei';
export type Plateau =
  | 'investigaEAjusta'
  | 'conversamos'
  | 'soTrocaTreino'
  | 'quaseNadaMuda'
  | 'nuncaAconteceu'
  | 'naoSei';

export interface ScoreRespostas {
  tipoServico: TipoServico;
  avaliacaoInicial: ItemAvaliacao[];
  personalizacao: Personalizacao;
  rotinaFit: RotinaFit;
  progressao: Progressao;
  /** Não perguntado quando o modelo é planilha. */
  monitoramento?: Monitoramento;
  ajustes: Ajustes;
  /** Não perguntado quando o modelo é planilha. */
  execucao?: Execucao;
  metas: Metas;
  /** Não perguntado quando o modelo é planilha. */
  comunicacao?: Comunicacao;
  /** Não perguntado quando o modelo é planilha. */
  adaptabilidade?: Adaptabilidade;
  explicacao: Explicacao;
  plateau: Plateau;
}

/* ------------------------------------------------------------------ *
 * Pilares
 * ------------------------------------------------------------------ */

export type PilarId =
  | 'avaliacaoInicial'
  | 'individualizacao'
  | 'rotinaFit'
  | 'progressao'
  | 'monitoramento'
  | 'execucao'
  | 'clareza'
  | 'comunicacao'
  | 'adaptabilidade';

export type NivelPilar = 'forte' | 'bom' | 'atencao' | 'revisar' | 'semDados';

export interface PilarAvaliado {
  id: PilarId;
  rotulo: string;
  nivel: NivelPilar;
  rotuloNivel: string;
  /** 0 a 100; nunca exibido isolado por pilar. */
  valor: number;
}

export type NivelGeral = 'muitoConsistente' | 'consistente' | 'algunsPontos' | 'variosPontos';

export interface PontoAtencao {
  id: PilarId;
  titulo: string;
  oQueVoceRelatou: string;
  oQueIssoSignifica: string;
  artigo?: { url: string; titulo: string };
}

export type ProximaFerramenta = 'auditoria' | 'rotina' | 'personalIdeal' | 'preco' | 'nenhuma';

export interface ScoreResultado {
  /** 0 a 100, inteiro. É síntese visual, nunca veredito. */
  score: number;
  nivelGeral: NivelGeral;
  rotuloGeral: string;
  visaoGeral: string;
  pilares: PilarAvaliado[];
  pontosFortes: string[];
  /** No máximo 3. */
  atencao: PontoAtencao[];
  /** De 3 a 5 perguntas para a próxima conversa — o melhor entregável. */
  perguntasParaOPersonal: string[];
  /** O que a ferramenta honestamente não avalia. */
  limitacoes: string[];
  /**
   * Presente quando boa parte dos pilares ficou sem resposta avaliável. O
   * score continua sendo exibido, mas com a ressalva de que se apoia em
   * pouca informação — omitir isso seria vender precisão que não existe.
   */
  ressalvaCobertura?: string;
  proximoPasso: { texto: string; rotulo: string; url: string; ferramenta: ProximaFerramenta };
  conteudo: { url: string; titulo: string }[];
  montinho?: { motivo: string };
  whatsapp: string;
  /** Resumo genérico, sem nome de profissional. */
  share: string;
  analytics: {
    service_type: TipoServico;
    overall_level: NivelGeral;
    score_bucket: string;
    primary_issue: PilarId | 'nenhum';
    individualization_level: NivelPilar;
    progression_level: NivelPilar;
    routine_fit_level: NivelPilar;
  };
}

/* ------------------------------------------------------------------ *
 * Configuração: pilares por modelo de serviço
 * ------------------------------------------------------------------ */

const PILAR_ROTULO: Record<PilarId, string> = {
  avaliacaoInicial: 'Avaliação inicial',
  individualizacao: 'Individualização',
  rotinaFit: 'Adaptação à sua rotina',
  progressao: 'Progressão',
  monitoramento: 'Acompanhamento da evolução',
  execucao: 'Correção de execução',
  clareza: 'Clareza do planejamento',
  comunicacao: 'Comunicação',
  adaptabilidade: 'Capacidade de ajuste',
};

/**
 * Pesos. Os quatro primeiros pesam mais porque são o núcleo do que
 * diferencia acompanhamento de entrega de ficha.
 */
const PESO: Record<PilarId, number> = {
  individualizacao: 3,
  progressao: 3,
  rotinaFit: 3,
  monitoramento: 2.5,
  avaliacaoInicial: 2,
  execucao: 2,
  clareza: 2,
  adaptabilidade: 1.5,
  comunicacao: 1.5,
};

/**
 * Quais pilares fazem parte de cada modelo. É a regra mais importante do
 * motor: quem comprou uma planilha não prometeu acompanhamento contínuo,
 * e cobrar isso seria avaliar o serviço por algo que ele nunca ofereceu.
 */
const PILARES_POR_SERVICO: Record<TipoServico, PilarId[]> = {
  presencialIndividual: [
    'avaliacaoInicial',
    'individualizacao',
    'rotinaFit',
    'progressao',
    'monitoramento',
    'execucao',
    'clareza',
    'comunicacao',
    'adaptabilidade',
  ],
  presencialGrupo: [
    'avaliacaoInicial',
    'individualizacao',
    'rotinaFit',
    'progressao',
    'monitoramento',
    'execucao',
    'clareza',
    'comunicacao',
    'adaptabilidade',
  ],
  online: [
    'avaliacaoInicial',
    'individualizacao',
    'rotinaFit',
    'progressao',
    'monitoramento',
    'execucao',
    'clareza',
    'comunicacao',
    'adaptabilidade',
  ],
  hibrido: [
    'avaliacaoInicial',
    'individualizacao',
    'rotinaFit',
    'progressao',
    'monitoramento',
    'execucao',
    'clareza',
    'comunicacao',
    'adaptabilidade',
  ],
  // Programa entregue sem acompanhamento: só o que foi contratado.
  planilha: ['avaliacaoInicial', 'individualizacao', 'rotinaFit', 'progressao', 'clareza'],
};

/**
 * No formato em dupla ou grupo, atenção individual é naturalmente menor —
 * isso é característica do modelo, não defeito do profissional. O peso da
 * individualização cai para não penalizar o que foi contratado assim.
 */
const AJUSTE_PESO: Partial<Record<TipoServico, Partial<Record<PilarId, number>>>> = {
  presencialGrupo: { individualizacao: 2, execucao: 2.5 },
  // No online, correção existe por vídeo: continua valendo, com peso menor.
  online: { execucao: 1.5 },
};

const SERVICO_TXT: Record<TipoServico, string> = {
  presencialIndividual: 'personal presencial individual',
  presencialGrupo: 'personal presencial em dupla ou grupo',
  online: 'consultoria online',
  hibrido: 'acompanhamento híbrido',
  planilha: 'programa de treino sem acompanhamento contínuo',
};

const ARTIGOS = {
  progressao: { url: '/musculacao/progressao-de-carga/', titulo: 'Progressão de carga: como aplicar' },
  escolher: { url: '/guias/como-escolher-personal-trainer/', titulo: 'Como escolher um personal trainer' },
  avaliacao: { url: '/guias/avaliacao-fisica/', titulo: 'Avaliação física: o que é e por que importa' },
  online: { url: '/guias/personal-online-funciona/', titulo: 'Personal trainer online funciona?' },
  frequencia: { url: '/musculacao/frequencia-de-treino/', titulo: 'Frequência de treino: quantas vezes por semana' },
  primeiraAula: { url: '/guias/primeira-aula-com-personal-trainer/', titulo: 'Primeira aula com personal trainer' },
  quantasVezes: {
    url: '/guias/quantas-vezes-por-semana-personal-trainer/',
    titulo: 'Quantas vezes por semana treinar com personal',
  },
} as const;

/* ------------------------------------------------------------------ *
 * Pontuação por pilar (0 a 100)
 * ------------------------------------------------------------------ */

/** `null` significa "não dá para avaliar" — nunca vira zero. */
function pontuarPilares(r: ScoreRespostas): Map<PilarId, number | null> {
  const m = new Map<PilarId, number | null>();

  /* --- Avaliação inicial: quanto do contexto foi levantado --- */
  const itens = r.avaliacaoInicial || [];
  if (itens.includes('naoLembro')) {
    m.set('avaliacaoInicial', null);
  } else if (itens.includes('nenhuma')) {
    m.set('avaliacaoInicial', 10);
  } else {
    const relevantes: ItemAvaliacao[] = ['objetivo', 'experiencia', 'rotina', 'dias', 'tempo', 'historico', 'limitacoes'];
    const marcados = relevantes.filter((i) => itens.includes(i)).length;
    // Quatro itens já indicam um levantamento razoável; sete é completo.
    m.set('avaliacaoInicial', Math.min(100, Math.round((marcados / 5) * 100)));
  }

  /* --- Individualização --- */
  const porPersonalizacao: Record<Personalizacao, number | null> = {
    claramente: 100,
    boaParte: 78,
    algumasGenericas: 50,
    muitoGenerico: 18,
    naoSei: null,
  };
  m.set('individualizacao', porPersonalizacao[r.personalizacao]);

  /* --- Adaptação à rotina --- */
  const porRotina: Record<RotinaFit, number> = {
    sim: 100,
    quaseSempre: 82,
    asVezes: 52,
    frequentementeNao: 25,
    dificilmente: 10,
  };
  m.set('rotinaFit', porRotina[r.rotinaFit]);

  /* --- Progressão --- */
  const porProgressao: Record<Progressao, number | null> = {
    metodoClaro: 100,
    personalOrienta: 80,
    asVezes: 50,
    sempreParecido: 20,
    naoFacoIdeia: 15,
  };
  m.set('progressao', porProgressao[r.progressao]);

  /* --- Monitoramento --- */
  if (r.monitoramento) {
    const porMonitoramento: Record<Monitoramento, number | null> = {
      sempre: 100,
      frequentemente: 82,
      asVezes: 55,
      raramente: 28,
      nunca: 12,
      naoSei: null,
    };
    m.set('monitoramento', porMonitoramento[r.monitoramento]);
  }

  /* --- Correção de execução: lida conforme o modelo --- */
  if (r.execucao) {
    const porExecucao: Record<Execucao, number | null> = {
      frequencia: 100,
      quandoNecessario: 92, // corrigir só quando precisa é bom critério, não descaso
      raramente: 40,
      nunca: 15,
      onlinePorVideo: 90, // o equivalente legítimo no online
      onlineSemCorrecao: 30,
      naoSeiDizer: null,
    };
    m.set('execucao', porExecucao[r.execucao]);
  }

  /* --- Clareza: metas + explicação + entender os ajustes --- */
  const porMetas: Record<Metas, number> = { sim: 100, maisOuMenos: 55, nao: 20 };
  const porExplicacao: Record<Explicacao, number | null> = {
    sim: 100,
    normalmente: 85,
    asVezes: 55,
    raramente: 25,
    nuncaPerguntei: null, // não perguntar não é falha do profissional
  };
  const porAjustes: Record<Ajustes, number | null> = {
    entendoGeralmente: 100,
    asVezes: 60,
    normalmenteNao: 30,
    mudaSemExplicacao: 20,
    quaseNuncaMuda: null, // estabilidade pode ser proposital
  };
  const partesClareza = [porMetas[r.metas], porExplicacao[r.explicacao], porAjustes[r.ajustes]].filter(
    (v): v is number => v !== null,
  );
  m.set(
    'clareza',
    partesClareza.length ? Math.round(partesClareza.reduce((a, b) => a + b, 0) / partesClareza.length) : null,
  );

  /* --- Comunicação --- */
  if (r.comunicacao) {
    const porComunicacao: Record<Comunicacao, number> = {
      sim: 100,
      geralmente: 85,
      depende: 55,
      raramente: 28,
      nao: 12,
    };
    m.set('comunicacao', porComunicacao[r.comunicacao]);
  }

  /* --- Adaptabilidade --- */
  if (r.adaptabilidade) {
    const porAdaptabilidade: Record<Adaptabilidade, number | null> = {
      sim: 100,
      asVezes: 62,
      dificilmente: 30,
      nao: 15,
      nuncaPrecisei: null, // nunca ter precisado não informa nada
    };
    m.set('adaptabilidade', porAdaptabilidade[r.adaptabilidade]);
  }

  /* --- Resposta à estagnação ajusta progressão e monitoramento --- */
  const porPlateau: Record<Plateau, number> = {
    investigaEAjusta: 12,
    conversamos: 5,
    soTrocaTreino: -10,
    quaseNadaMuda: -18,
    nuncaAconteceu: 0,
    naoSei: 0,
  };
  const delta = porPlateau[r.plateau];
  if (delta !== 0) {
    for (const pilar of ['progressao', 'monitoramento'] as PilarId[]) {
      const atual = m.get(pilar);
      if (typeof atual === 'number') m.set(pilar, Math.max(0, Math.min(100, atual + delta)));
    }
  }

  return m;
}

/* ------------------------------------------------------------------ *
 * Níveis e score
 * ------------------------------------------------------------------ */

function nivelDe(v: number | null | undefined): NivelPilar {
  if (v === null || v === undefined) return 'semDados';
  if (v >= 85) return 'forte';
  if (v >= 65) return 'bom';
  if (v >= 40) return 'atencao';
  return 'revisar';
}

const ROTULO_NIVEL: Record<NivelPilar, string> = {
  forte: 'Muito consistente',
  bom: 'Bom',
  atencao: 'Merece atenção',
  revisar: 'Vale conversar',
  semDados: 'Sem informação suficiente',
};

const ROTULO_GERAL: Record<NivelGeral, string> = {
  muitoConsistente: 'Seu acompanhamento parece muito consistente',
  consistente: 'Seu acompanhamento parece consistente',
  algunsPontos: 'Boa base, com alguns pontos para conversar',
  variosPontos: 'Há vários pontos que valem uma conversa',
};

/* ------------------------------------------------------------------ *
 * Textos dos pontos de atenção — sempre "vale conversar", nunca acusação
 * ------------------------------------------------------------------ */

function montarAtencao(id: PilarId, r: ScoreRespostas): PontoAtencao {
  switch (id) {
    case 'progressao':
      return {
        id,
        titulo: 'A progressão não está clara para você',
        oQueVoceRelatou:
          r.progressao === 'sempreParecido'
            ? 'Você relatou que costuma fazer treinos sempre parecidos, sem um critério que consiga identificar.'
            : 'Você relatou não saber como deveria evoluir no treino.',
        oQueIssoSignifica:
          'Isso não significa que não exista uma estratégia — muitas vezes ela existe e simplesmente não foi comunicada. Mas saber para onde o treino está indo é o que permite perceber avanço, e vale pedir essa clareza.',
        artigo: ARTIGOS.progressao,
      };

    case 'individualizacao':
      return {
        id,
        titulo: 'O treino parece pouco individualizado',
        oQueVoceRelatou:
          r.personalizacao === 'muitoGenerico'
            ? 'Você relatou que o treino parece muito parecido com o de outras pessoas.'
            : 'Você relatou que algumas partes do treino parecem genéricas.',
        oQueIssoSignifica:
          'Programas semelhantes entre alunos com objetivos parecidos não são necessariamente um problema — princípios de treino são os mesmos para todo mundo. O que vale conferir é se as escolhas foram feitas considerando o seu caso: sua experiência, sua rotina e o que você consegue executar.',
        artigo: ARTIGOS.escolher,
      };

    case 'monitoramento':
      return {
        id,
        titulo: 'Você não sabe como a sua evolução está sendo acompanhada',
        oQueVoceRelatou: 'Você relatou que cargas, repetições ou evolução raramente são acompanhados ao longo do tempo.',
        oQueIssoSignifica:
          'Sem algum registro, fica difícil para qualquer profissional saber se o treino está funcionando — e difícil para você perceber avanço. Vale perguntar o que está sendo usado para medir seu progresso.',
        artigo: ARTIGOS.progressao,
      };

    case 'rotinaFit':
      return {
        id,
        titulo: 'O treino não está cabendo na sua rotina',
        oQueVoceRelatou: 'Você relatou dificuldade frequente para cumprir o treino como ele está montado.',
        oQueIssoSignifica:
          'Esse ponto costuma ser o mais decisivo de todos, e nem sempre é o profissional que precisa mudar: às vezes a rotina mudou e isso não foi comunicado. Um programa que não é executado não produz resultado, por melhor que seja no papel.',
        artigo: ARTIGOS.quantasVezes,
      };

    case 'avaliacaoInicial':
      return {
        id,
        titulo: 'Pouco do seu contexto foi levantado antes do treino',
        oQueVoceRelatou: 'Você relatou que poucos aspectos da sua situação foram perguntados antes de o treino ser montado.',
        oQueIssoSignifica:
          'Não existe ritual obrigatório de avaliação, e nem todo profissional usa o mesmo processo. Mas objetivo, experiência, rotina e limitações são informações que mudam bastante uma prescrição — vale garantir que elas foram consideradas.',
        artigo: ARTIGOS.avaliacao,
      };

    case 'clareza':
      return {
        id,
        titulo: 'Falta clareza sobre o que você está fazendo e por quê',
        oQueVoceRelatou:
          'Você relatou não ter certeza do que deveria estar melhorando nas próximas semanas, ou de por que os exercícios foram escolhidos.',
        oQueIssoSignifica:
          'Entender o plano não é detalhe: é o que permite executar melhor e perceber progresso. Muitos profissionais explicam quando perguntados — se você ainda não perguntou, essa é uma conversa fácil de começar.',
        artigo: ARTIGOS.primeiraAula,
      };

    case 'execucao':
      return {
        id,
        titulo: 'Você recebe pouca correção de execução',
        oQueVoceRelatou:
          r.execucao === 'onlineSemCorrecao'
            ? 'Você relatou treinar online sem receber correção de execução.'
            : 'Você relatou receber correções de execução raramente ou nunca.',
        oQueIssoSignifica:
          'No presencial, a correção acontece durante a sessão; no online, o equivalente é a análise por vídeo. Se nenhuma das duas está acontecendo, vale perguntar como a execução está sendo verificada.',
        artigo: ARTIGOS.online,
      };

    case 'comunicacao':
      return {
        id,
        titulo: 'A comunicação está difícil quando surgem dúvidas',
        oQueVoceRelatou: 'Você relatou dificuldade para conseguir orientação quando aparece uma dúvida sobre o treino.',
        oQueIssoSignifica:
          'O nível de suporte varia bastante conforme o serviço contratado, e nem todo modelo inclui resposta rápida. Vale alinhar qual é a expectativa combinada — de parte a parte.',
        artigo: ARTIGOS.escolher,
      };

    case 'adaptabilidade':
      return {
        id,
        titulo: 'O treino tem pouca margem de ajuste quando a sua rotina muda',
        oQueVoceRelatou: 'Você relatou que o treino dificilmente é ajustado quando a sua rotina muda.',
        oQueIssoSignifica:
          'Rotinas mudam — viagens, trabalho, semanas cheias. Um plano que não prevê ajuste tende a ser abandonado justamente nas semanas em que mais importaria mantê-lo.',
        artigo: ARTIGOS.frequencia,
      };
  }
}

/* ------------------------------------------------------------------ *
 * Perguntas para levar ao profissional — o melhor entregável
 * ------------------------------------------------------------------ */

const PERGUNTA_POR_PILAR: Record<PilarId, string> = {
  progressao: 'Como você está planejando a minha progressão de carga ou de repetições nas próximas semanas?',
  monitoramento: 'O que você usa para avaliar se o meu treino está funcionando?',
  individualizacao: 'Quais escolhas deste treino foram feitas especificamente para o meu caso?',
  rotinaFit: 'Consigo cumprir esse treino em uma semana comum. Dá para ajustar a estrutura para os dias que eu realmente tenho?',
  avaliacaoInicial: 'Tem alguma informação sobre minha rotina ou meu histórico que ajudaria você a ajustar o meu treino?',
  clareza: 'Qual é a prioridade principal deste bloco de treino, e o que eu deveria melhorar até a próxima revisão?',
  execucao: 'Como a minha execução está sendo acompanhada, e o que eu deveria observar sozinho?',
  comunicacao: 'Como funciona o canal para dúvidas, e qual é o prazo esperado de resposta?',
  adaptabilidade: 'Se a minha semana mudar, como devo proceder com o treino?',
};

/* ------------------------------------------------------------------ *
 * Limitações — seção fixa, por honestidade
 * ------------------------------------------------------------------ */

const LIMITACOES = [
  'A competência técnica do profissional, que não é observável a partir do que você relatou.',
  'A adequação de cada exercício ao seu corpo, ao seu histórico e às suas eventuais limitações.',
  'A qualidade da sua execução e a segurança de cada prescrição.',
  'Tudo o que acontece fora do que foi perguntado aqui — inclusive o que o profissional faz e não comunica.',
  'A conduta profissional de forma ampla: esta ferramenta olha para a estrutura do serviço, não para a pessoa.',
];

/* ------------------------------------------------------------------ *
 * Próximo passo — resolve o achado, não empurra o Montinho
 * ------------------------------------------------------------------ */

function definirProximoPasso(principal: PilarId | null, nivel: NivelGeral): ScoreResultado['proximoPasso'] {
  if (principal === 'rotinaFit') {
    return {
      texto:
        'Antes de conversar sobre exercícios, vale entender qual estrutura caberia na sua semana de verdade — assim a conversa com o seu profissional começa de um lugar concreto.',
      rotulo: 'Montar treino para minha rotina',
      url: '/ferramentas/treino-para-minha-rotina/',
      ferramenta: 'rotina',
    };
  }
  if (principal === 'progressao' || principal === 'monitoramento' || principal === 'individualizacao') {
    return {
      texto:
        'Vale olhar também para a estrutura do programa em si: distribuição, frequência por grupo e coerência com o seu objetivo. É uma boa base para a conversa.',
      rotulo: 'Analisar meu treino',
      url: '/ferramentas/meu-treino-faz-sentido/',
      ferramenta: 'auditoria',
    };
  }
  if (principal === 'comunicacao' || principal === 'adaptabilidade' || principal === 'execucao') {
    return {
      texto:
        'Talvez o ponto não seja o profissional, e sim o formato: modelos diferentes entregam níveis diferentes de suporte, correção e flexibilidade.',
      rotulo: 'Descobrir que formato combina comigo',
      url: '/ferramentas/encontre-seu-personal-ideal/',
      ferramenta: 'personalIdeal',
    };
  }
  if (nivel === 'muitoConsistente' || nivel === 'consistente') {
    return {
      texto:
        'O acompanhamento parece consistente. Se ainda assim os resultados não vêm como você esperava, o próximo lugar a olhar é a estrutura do programa.',
      rotulo: 'Analisar meu treino',
      url: '/ferramentas/meu-treino-faz-sentido/',
      ferramenta: 'auditoria',
    };
  }
  return {
    texto: 'Leve as perguntas acima para a sua próxima conversa. Elas resolvem a maior parte das dúvidas de clareza.',
    rotulo: 'Analisar meu treino',
    url: '/ferramentas/meu-treino-faz-sentido/',
    ferramenta: 'auditoria',
  };
}

/* ------------------------------------------------------------------ *
 * Motor
 * ------------------------------------------------------------------ */

export function avaliarAcompanhamento(r: ScoreRespostas): ScoreResultado {
  const bruto = pontuarPilares(r);
  const aplicaveis = PILARES_POR_SERVICO[r.tipoServico];
  const ajustes = AJUSTE_PESO[r.tipoServico] ?? {};

  const pilares: PilarAvaliado[] = aplicaveis.map((id) => {
    const v = bruto.get(id) ?? null;
    return {
      id,
      rotulo: PILAR_ROTULO[id],
      nivel: nivelDe(v),
      rotuloNivel: ROTULO_NIVEL[nivelDe(v)],
      valor: v ?? 0,
    };
  });

  /* --- Score ponderado, só sobre o que dá para avaliar --- */
  let soma = 0;
  let pesoTotal = 0;
  for (const id of aplicaveis) {
    const v = bruto.get(id);
    if (typeof v !== 'number') continue;
    const peso = ajustes[id] ?? PESO[id];
    soma += v * peso;
    pesoTotal += peso;
  }
  const score = pesoTotal ? Math.round(soma / pesoTotal) : 0;

  /* --- Quanto do modelo contratado deu para avaliar de fato --- */
  const avaliados = aplicaveis.filter((id) => typeof bruto.get(id) === 'number').length;
  const ressalvaCobertura =
    avaliados === 0
      ? 'Não houve informação suficiente para avaliar nenhum aspecto do acompanhamento. Vale refazer depois de conversar com o seu profissional sobre os pontos abaixo.'
      : avaliados < Math.ceil(aplicaveis.length / 2)
        ? `Este resultado se apoia em ${avaliados} de ${aplicaveis.length} aspectos — nos demais, as respostas foram "não sei" ou "não lembro". Isso é comum e não é um problema, mas significa que a leitura aqui é parcial: as perguntas abaixo servem justamente para preencher o que falta.`
        : undefined;

  const nivelGeral: NivelGeral =
    score >= 85 ? 'muitoConsistente' : score >= 70 ? 'consistente' : score >= 50 ? 'algunsPontos' : 'variosPontos';

  /* --- Pontos fortes: apenas os reais --- */
  const pontosFortes: string[] = [];
  const forte = (id: PilarId) => {
    const v = bruto.get(id);
    return typeof v === 'number' && v >= 80 && aplicaveis.includes(id);
  };
  if (forte('individualizacao')) pontosFortes.push('O treino parece ter sido montado considerando o seu caso.');
  if (forte('rotinaFit')) pontosFortes.push('O treino cabe na sua rotina — o fator que mais decide se um plano funciona.');
  if (forte('progressao')) pontosFortes.push('Existe um critério de progressão que você consegue identificar.');
  if (forte('monitoramento')) pontosFortes.push('Cargas, repetições ou evolução são acompanhados ao longo do tempo.');
  if (forte('execucao')) {
    pontosFortes.push(
      r.execucao === 'onlinePorVideo'
        ? 'Você recebe correção de execução por vídeo — o equivalente adequado no formato online.'
        : 'Você recebe correção de execução quando precisa.',
    );
  }
  if (forte('comunicacao')) pontosFortes.push('Você consegue orientação quando surge uma dúvida.');
  if (forte('adaptabilidade')) pontosFortes.push('O treino pode ser ajustado quando a sua rotina muda.');
  if (forte('clareza')) pontosFortes.push('Você entende o que está fazendo e o que deveria melhorar.');
  if (forte('avaliacaoInicial')) pontosFortes.push('Boa parte do seu contexto foi levantada antes de o treino ser montado.');

  /* --- Pontos de atenção: no máximo 3, os de menor nota --- */
  const candidatos = aplicaveis
    .map((id) => ({ id, v: bruto.get(id) }))
    .filter((x): x is { id: PilarId; v: number } => typeof x.v === 'number' && x.v < 65)
    .sort((a, b) => a.v - b.v || (ajustes[b.id] ?? PESO[b.id]) - (ajustes[a.id] ?? PESO[a.id]));

  const atencao = candidatos.slice(0, 3).map((c) => montarAtencao(c.id, r));
  const principal = candidatos[0]?.id ?? null;

  /* --- Perguntas para o profissional --- */
  const perguntas: string[] = [];
  for (const c of candidatos.slice(0, 3)) perguntas.push(PERGUNTA_POR_PILAR[c.id]);
  if (perguntas.length < 3) {
    // Mesmo com tudo bem, três boas perguntas continuam sendo úteis. A lista
    // cobre todos os pilares porque em modelo enxuto (planilha) os três
    // primeiros podem simplesmente não fazer parte do que foi contratado.
    const ORDEM_PADRAO: PilarId[] = [
      'progressao',
      'monitoramento',
      'clareza',
      'individualizacao',
      'rotinaFit',
      'avaliacaoInicial',
      'execucao',
      'adaptabilidade',
      'comunicacao',
    ];
    for (const id of ORDEM_PADRAO) {
      if (perguntas.length >= 3) break;
      if (aplicaveis.includes(id) && !perguntas.includes(PERGUNTA_POR_PILAR[id])) {
        perguntas.push(PERGUNTA_POR_PILAR[id]);
      }
    }
  }

  /* --- Visão geral --- */
  const servico = SERVICO_TXT[r.tipoServico];
  const visaoGeral =
    nivelGeral === 'muitoConsistente'
      ? `Considerando que o seu formato é ${servico}, as respostas não apontam sinal forte de problema estrutural no acompanhamento. As perguntas abaixo continuam valendo — elas ajudam a manter a clareza ao longo do tempo.`
      : nivelGeral === 'consistente'
        ? `Considerando que o seu formato é ${servico}, o acompanhamento parece bem estruturado. Há ${atencao.length === 1 ? 'um ponto' : `${atencao.length} pontos`} que vale conversar para ganhar mais clareza.`
        : nivelGeral === 'algunsPontos'
          ? `Considerando que o seu formato é ${servico}, o acompanhamento tem uma boa base, mas alguns aspectos importantes não estão claros para você. Isso não quer dizer que estejam ausentes — muitas vezes existem e não foram comunicados.`
          : `Considerando que o seu formato é ${servico}, há vários aspectos do acompanhamento que não estão claros para você. Antes de pensar em trocar de profissional, vale levar estas perguntas para uma conversa: boa parte das dúvidas de estrutura se resolve alinhando expectativas.`;

  /* --- Conteúdo --- */
  const conteudo: { url: string; titulo: string }[] = [];
  for (const a of atencao) if (a.artigo) conteudo.push(a.artigo);
  conteudo.push(ARTIGOS.escolher);
  const vistos = new Set<string>();
  const conteudoUnico = conteudo.filter((c) => (vistos.has(c.url) ? false : (vistos.add(c.url), true))).slice(0, 3);

  /* --- Montinho: nunca como alternativa ao profissional atual --- */
  const montinho =
    nivelGeral === 'algunsPontos' || nivelGeral === 'variosPontos'
      ? {
          motivo:
            'Se quiser comparar com outro modelo de trabalho, o Montinho organiza acompanhamento em torno de planejamento, ajustes e progressão registrada. Isso não é um julgamento sobre o seu profissional atual — é só um ponto de comparação, útil para você saber o que pedir.',
        }
      : undefined;

  /* --- WhatsApp: sem nome de profissional, sem julgamento --- */
  const whatsapp = [
    'Oi, Montinho! Fiz o Personal Score no Personal por Perto.',
    '',
    principal
      ? `O resultado apontou que o ponto com menos clareza no meu acompanhamento é: ${PILAR_ROTULO[principal].toLowerCase()}.`
      : 'O resultado não apontou pontos estruturais relevantes no meu acompanhamento.',
    `Meu formato hoje é: ${servico}.`,
    '',
    'Queria entender como você organiza esse ponto no seu trabalho.',
  ].join('\n');

  /* --- Compartilhamento: genérico, nunca identificando ninguém --- */
  const share = principal
    ? `Fiz o Personal Score no Personal por Perto e descobri que meu maior ponto de atenção é ${PILAR_ROTULO[principal].toLowerCase()}. Avalie o seu: https://www.personalporperto.com.br/ferramentas/personal-score/`
    : `Fiz o Personal Score no Personal por Perto e meu acompanhamento apareceu consistente. Avalie o seu: https://www.personalporperto.com.br/ferramentas/personal-score/`;

  return {
    score,
    nivelGeral,
    rotuloGeral: ROTULO_GERAL[nivelGeral],
    visaoGeral,
    pilares,
    pontosFortes,
    atencao,
    perguntasParaOPersonal: perguntas.slice(0, 5),
    limitacoes: LIMITACOES,
    ressalvaCobertura,
    proximoPasso: definirProximoPasso(principal, nivelGeral),
    conteudo: conteudoUnico,
    montinho,
    whatsapp,
    share,
    analytics: {
      service_type: r.tipoServico,
      overall_level: nivelGeral,
      score_bucket: score >= 85 ? '85-100' : score >= 70 ? '70-84' : score >= 50 ? '50-69' : '0-49',
      primary_issue: principal ?? 'nenhum',
      individualization_level: nivelDe(bruto.get('individualizacao')),
      progression_level: nivelDe(bruto.get('progressao')),
      routine_fit_level: nivelDe(bruto.get('rotinaFit')),
    },
  };
}

export const rotulosScore = { pilar: PILAR_ROTULO, servico: SERVICO_TXT, nivel: ROTULO_NIVEL };
export const pilaresPorServico = PILARES_POR_SERVICO;
