/**
 * analyzeTrainingPlan — motor da ferramenta "Meu treino faz sentido?".
 *
 * Auditoria ESTRUTURAL de um programa de treino. Regras determinísticas,
 * zero dependências, zero DOM.
 *
 * Três princípios que governam cada linha deste arquivo:
 *
 * 1. A ferramenta nunca diz "certo" ou "errado". Treino tem contexto. A
 *    linguagem é sempre "coerente", "vale revisar", "depende de volume e
 *    intensidade" — nunca veredito.
 *
 * 2. Todo insight carrega o quanto é confiável. Sabemos a frequência
 *    declarada; não sabemos volume, execução nem proximidade da falha. O
 *    que não dá para concluir é dito explicitamente, e isso é uma seção do
 *    resultado, não uma nota de rodapé.
 *
 * 3. Nenhuma divisão é superior em abstrato. Bro split, PPL, Full Body e
 *    Upper/Lower funcionam em contextos diferentes — o motor não entra em
 *    guerra de internet.
 *
 * O que este motor NÃO faz: não interpreta dor, lesão ou condição de
 * saúde; não avalia execução; não calcula volume por grupo muscular sem
 * dados suficientes; e não prescreve substituição de treino.
 */

/* ------------------------------------------------------------------ *
 * Entradas
 * ------------------------------------------------------------------ */

export type Objetivo = 'hipertrofia' | 'emagrecimento' | 'forca' | 'condicionamento' | 'manutencao' | 'retorno';

export type Experiencia = 'comecando' | 'menos6m' | '6a12m' | '1a3anos' | 'mais3anos' | 'irregular';

/** Grupos que o construtor de semana oferece. */
export type Grupo =
  | 'peito'
  | 'costas'
  | 'ombros'
  | 'biceps'
  | 'triceps'
  | 'quadriceps'
  | 'posterior'
  | 'gluteos'
  | 'panturrilhas'
  | 'core'
  | 'corpoTodo'
  | 'cardio';

export type Prioridade = Grupo | 'corpoTodo' | 'nenhuma';

export type Duracao = 'ate30' | '30a45' | '45a60' | '60a90' | 'mais90' | 'varia';

export type Exercicios = '3ouMenos' | '4a5' | '6a7' | '8a10' | 'mais10' | 'naoSei';

export type Progressao =
  | 'carga'
  | 'repeticoes'
  | 'faixaReps'
  | 'treinoInforma'
  | 'personalManda'
  | 'igual'
  | 'naoSei';

export type Registro = 'sempre' | 'asVezes' | 'nunca';

export type Aderencia = 'sempre' | 'maioria' | 'perde1' | 'perde2mais' | 'quaseNunca';

/** Semana declarada: 7 posições (0 = segunda), cada uma com os grupos do dia. */
export type Semana = Grupo[][];

export interface AuditoriaRespostas {
  objetivo: Objetivo;
  experiencia: Experiencia;
  semana: Semana;
  duracao: Duracao;
  exercicios: Exercicios;
  progressao: Progressao;
  registro: Registro;
  /** Até 2 prioridades, ou 'nenhuma'/'corpoTodo'. */
  prioridades: Prioridade[];
  aderencia: Aderencia;
}

/* ------------------------------------------------------------------ *
 * Saída
 * ------------------------------------------------------------------ */

/** Quão firme é a afirmação, dado o que sabemos. */
export type Confianca = 'alta' | 'media' | 'baixa';

export interface Insight {
  id: string;
  /** Importância relativa: define a ordem e o que entra nos 3 principais. */
  nivel: 'alta' | 'media' | 'baixa';
  confianca: Confianca;
  titulo: string;
  oQueSignifica: string;
  porQueImporta: string;
  oQueRevisar: string;
  artigo?: { url: string; titulo: string };
}

export type Veredito = 'coerente' | 'coerenteComRevisar' | 'variasQuestoes';

/** Assunto do problema principal — usado para escolher o próximo passo. */
export type ProblemaPrincipal =
  | 'aderencia'
  | 'progressao'
  | 'prioridade'
  | 'recuperacao'
  | 'equilibrio'
  | 'duracao'
  | 'complexidade'
  | 'nenhum';

export interface FrequenciaGrupo {
  grupo: Grupo;
  rotulo: string;
  vezes: number;
}

export interface AuditoriaResultado {
  veredito: Veredito;
  vereditoTexto: string;
  resumo: string;
  /** Dias de treino declarados (derivados da semana, não perguntados). */
  diasTreinados: number;
  frequencia: FrequenciaGrupo[];
  pontosFortes: string[];
  /** No máximo 3 — poucos e importantes. */
  atencao: Insight[];
  /** O que a ferramenta honestamente não consegue avaliar. */
  naoDaParaConcluir: string[];
  problemaPrincipal: ProblemaPrincipal;
  proximoPasso: { texto: string; rotulo: string; url: string };
  conteudo: { url: string; titulo: string }[];
  montinho: { motivo: string };
  whatsapp: string;
  share: string;
  analytics: {
    goal: Objetivo;
    experience: Experiencia;
    days_per_week: number;
    primary_priority: string;
    adherence_level: Aderencia;
    progression_method: Progressao;
    primary_issue: ProblemaPrincipal;
    verdict: Veredito;
  };
}

/* ------------------------------------------------------------------ *
 * Dicionários
 * ------------------------------------------------------------------ */

export const GRUPO_TXT: Record<Grupo, string> = {
  peito: 'Peito',
  costas: 'Costas',
  ombros: 'Ombros',
  biceps: 'Bíceps',
  triceps: 'Tríceps',
  quadriceps: 'Quadríceps',
  posterior: 'Posterior de coxa',
  gluteos: 'Glúteos',
  panturrilhas: 'Panturrilhas',
  core: 'Abdômen / core',
  corpoTodo: 'Corpo inteiro',
  cardio: 'Cardio',
};

const OBJETIVO_TXT: Record<Objetivo, string> = {
  hipertrofia: 'hipertrofia',
  emagrecimento: 'emagrecimento',
  forca: 'ganho de força',
  condicionamento: 'condicionamento',
  manutencao: 'manutenção',
  retorno: 'retorno aos treinos',
};

const ADERENCIA_TXT: Record<Aderencia, string> = {
  sempre: 'consegue cumprir praticamente sempre',
  maioria: 'consegue cumprir na maioria das semanas',
  perde1: 'costuma perder um treino por semana',
  perde2mais: 'costuma perder dois ou mais treinos por semana',
  quaseNunca: 'quase nunca consegue cumprir',
};

/** Quantos dias a pessoa efetivamente sustenta, para comparar com o plano. */
const ADERENCIA_PERDA: Record<Aderencia, number> = {
  sempre: 0,
  maioria: 0.5,
  perde1: 1,
  perde2mais: 2.5,
  quaseNunca: 99,
};

const SUPERIORES: Grupo[] = ['peito', 'costas', 'ombros', 'biceps', 'triceps'];
const INFERIORES: Grupo[] = ['quadriceps', 'posterior', 'gluteos', 'panturrilhas'];
/** Grupos que participam de muitos movimentos de empurrar/puxar. */
const SINERGISTAS_EMPURRAR: Grupo[] = ['peito', 'ombros', 'triceps'];

const ARTIGOS = {
  progressao: { url: '/musculacao/progressao-de-carga/', titulo: 'Progressão de carga: como aplicar' },
  frequencia: { url: '/musculacao/frequencia-de-treino/', titulo: 'Frequência de treino: quantas vezes por semana' },
  divisao: { url: '/musculacao/abc-ou-full-body/', titulo: 'ABC ou Full Body: qual escolher' },
  montarAbc: { url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' },
  series: { url: '/musculacao/quantas-series-e-repeticoes/', titulo: 'Quantas séries e repetições fazer' },
  hipertrofia: { url: '/musculacao/hipertrofia-como-funciona/', titulo: 'Hipertrofia: como funciona' },
  forca: { url: '/musculacao/treino-de-forca/', titulo: 'Treino de força: como estruturar' },
  constancia: { url: '/guias/como-nao-desistir-do-treino/', titulo: 'Como não desistir do treino' },
  tempo: { url: '/musculacao/quanto-tempo-de-treino-por-dia/', titulo: 'Quanto tempo de treino por dia é necessário' },
  gluteos: { url: '/musculacao/treino-de-gluteos/', titulo: 'Treino de glúteos: como montar' },
  pernas: { url: '/musculacao/treino-de-pernas/', titulo: 'Treino de pernas: como estruturar' },
} as const;

/* ------------------------------------------------------------------ *
 * Leitura da semana
 * ------------------------------------------------------------------ */

/**
 * Conta a exposição DECLARADA de cada grupo. É deliberadamente literal:
 * "corpo inteiro" conta para todos os grupos musculares, mas não tentamos
 * inferir que supino trabalha tríceps — não sabemos os exercícios. O
 * resultado é exposição declarada, não cálculo fisiológico.
 */
function contarFrequencia(semana: Semana): Map<Grupo, number> {
  const conta = new Map<Grupo, number>();
  const musculares = [...SUPERIORES, ...INFERIORES, 'core' as Grupo];

  for (const dia of semana) {
    const vistosNoDia = new Set<Grupo>();
    for (const g of dia) {
      if (g === 'corpoTodo') {
        for (const m of musculares) vistosNoDia.add(m);
      } else {
        vistosNoDia.add(g);
      }
    }
    for (const g of vistosNoDia) conta.set(g, (conta.get(g) ?? 0) + 1);
  }
  return conta;
}

/** Dias com pelo menos um grupo (cardio conta como dia treinado). */
function contarDias(semana: Semana): number {
  return semana.filter((d) => d.length > 0).length;
}

/** Pares de dias consecutivos (com volta do domingo para a segunda). */
function paresConsecutivos(semana: Semana): [number, number][] {
  const pares: [number, number][] = [];
  for (let i = 0; i < 7; i++) pares.push([i, (i + 1) % 7]);
  return pares;
}

/* ------------------------------------------------------------------ *
 * Pontos fortes — apenas os reais, nunca elogio inventado
 * ------------------------------------------------------------------ */

function montarPontosFortes(r: AuditoriaRespostas, freq: Map<Grupo, number>, dias: number): string[] {
  const f: string[] = [];

  if (r.aderencia === 'sempre' || r.aderencia === 'maioria') {
    f.push('Você consegue cumprir o treino na maioria das semanas — isso é a base de tudo, e muita gente trava exatamente aqui.');
  }
  if (r.registro === 'sempre') {
    f.push('Você registra cargas e repetições. Sem registro não dá para saber se houve progressão; com ele, a conversa muda de achismo para dado.');
  }
  if (['carga', 'repeticoes', 'faixaReps', 'treinoInforma'].includes(r.progressao)) {
    f.push('Existe um critério declarado para aumentar a dificuldade ao longo do tempo, o que é o que separa treinar de repetir.');
  }

  // Equilíbrio empurrar/puxar entre peito e costas.
  const peito = freq.get('peito') ?? 0;
  const costas = freq.get('costas') ?? 0;
  if (peito > 0 && costas > 0 && Math.abs(peito - costas) <= 1) {
    f.push('Peito e costas aparecem com exposição semelhante na semana, o que costuma ajudar no equilíbrio entre empurrar e puxar.');
  }

  // Frequência 2x para os grandes grupos.
  const grandes: Grupo[] = ['peito', 'costas', 'quadriceps'];
  const doisX = grandes.filter((g) => (freq.get(g) ?? 0) >= 2);
  if (doisX.length >= 2) {
    f.push(`Os grupos principais aparecem duas ou mais vezes por semana — uma distribuição que costuma funcionar bem para ${OBJETIVO_TXT[r.objetivo]}.`);
  }

  if (dias <= 3 && (r.aderencia === 'sempre' || r.aderencia === 'maioria')) {
    f.push('A estrutura é enxuta e cabe na sua rotina. Simples e cumprido rende mais do que sofisticado e abandonado.');
  }

  // Descanso presente na semana.
  if (dias > 0 && dias <= 5) {
    f.push('A semana tem dias sem treino, o que dá espaço para recuperação entre as sessões.');
  }

  return f.slice(0, 4);
}

/* ------------------------------------------------------------------ *
 * Regras de análise — cada uma vira no máximo um insight
 * ------------------------------------------------------------------ */

function montarInsights(r: AuditoriaRespostas, freq: Map<Grupo, number>, dias: number): Insight[] {
  const lista: Insight[] = [];
  const prioridadesReais = r.prioridades.filter((p) => p !== 'nenhuma' && p !== 'corpoTodo') as Grupo[];

  /* --- 1. Aderência: o programa cabe na vida? (pilar central) --- */
  const perda = ADERENCIA_PERDA[r.aderencia];
  const diasReais = r.aderencia === 'quaseNunca' ? 0 : Math.max(0, dias - perda);
  if (perda >= 1 && dias > 0) {
    const quase = r.aderencia === 'quaseNunca';
    lista.push({
      id: 'aderencia',
      nivel: 'alta',
      confianca: 'alta', // é a própria pessoa relatando
      titulo: quase
        ? 'Antes de mexer nos exercícios, vale mexer na agenda'
        : 'Seu programa parece exigir mais dias do que a sua rotina comporta',
      oQueSignifica: quase
        ? `Você montou uma semana de ${dias} ${dias === 1 ? 'dia' : 'dias'}, mas relata que quase nunca consegue cumpri-la.`
        : `Sua semana tem ${dias} ${dias === 1 ? 'dia' : 'dias'} de treino, e você relata que ${ADERENCIA_TXT[r.aderencia]} — o que na prática deixa algo em torno de ${Math.round(diasReais)} ${Math.round(diasReais) === 1 ? 'sessão' : 'sessões'}.`,
      porQueImporta:
        'Um programa que não é executado não produz resultado, por melhor que seja no papel. Quando o plano e a rotina não batem, o problema raramente está nos exercícios — está no dimensionamento.',
      oQueRevisar:
        'Considere reorganizar a estrutura para o número de dias que você sustenta numa semana comum. Uma semana menor e cumprida costuma render mais do que uma maior e abandonada pela metade.',
      artigo: ARTIGOS.constancia,
    });
  }

  /* --- 2. Prioridade declarada × distribuição real --- */
  for (const p of prioridadesReais) {
    const exposicao = freq.get(p) ?? 0;
    // O sinal não é a média — num treino com um único dia de perna, os
    // outros grupos da perna puxam a média para baixo e escondem o
    // desalinhamento. O que importa é quantos grupos aparecem MAIS vezes
    // que a prioridade declarada.
    const outrosComMais = [...SUPERIORES, ...INFERIORES].filter(
      (g) => g !== p && (freq.get(g) ?? 0) > exposicao,
    ).length;
    if (exposicao <= 1 && outrosComMais >= 2) {
      lista.push({
        id: `prioridade-${p}`,
        nivel: 'alta',
        confianca: 'media', // sabemos exposição, não volume
        titulo: `Sua prioridade aparece menos que o resto do treino`,
        oQueSignifica: `Você indicou ${GRUPO_TXT[p].toLowerCase()} como prioridade, mas esse grupo aparece diretamente em ${exposicao === 0 ? 'nenhuma sessão' : 'apenas uma sessão'} da semana, enquanto outros grupos aparecem mais vezes.`,
        porQueImporta:
          'Isso não significa que o treino esteja errado — frequência não é a mesma coisa que volume, e um único dia bem carregado pode entregar bastante estímulo. Mas vale conferir se a distribuição realmente reflete o que você elegeu como prioridade.',
        oQueRevisar: `Verifique quanto volume ${GRUPO_TXT[p].toLowerCase()} recebe de fato nessa sessão, e se faria sentido distribuir parte desse trabalho em um segundo dia.`,
        artigo: p === 'gluteos' ? ARTIGOS.gluteos : INFERIORES.includes(p) ? ARTIGOS.pernas : ARTIGOS.frequencia,
      });
      break; // um alerta de prioridade basta
    }
  }

  /* --- 3. Progressão --- */
  if (r.progressao === 'igual' || r.progressao === 'naoSei') {
    lista.push({
      id: 'progressao',
      nivel: 'alta',
      confianca: r.progressao === 'igual' ? 'alta' : 'media',
      titulo: 'Sua progressão está pouco clara',
      oQueSignifica:
        r.progressao === 'igual'
          ? 'Você informou que costuma repetir praticamente as mesmas cargas e repetições ao longo do tempo.'
          : 'Você indicou não ter certeza de como decide aumentar a dificuldade do treino.',
      porQueImporta:
        'Sem algum critério para aumentar a dificuldade, fica difícil saber se o treinamento está avançando. O corpo se adapta ao estímulo que já conhece — é a sobrecarga progressiva que sustenta o resultado ao longo dos meses.',
      oQueRevisar:
        'Defina um critério simples e repetível: subir repetições dentro de uma faixa até o topo e então aumentar a carga costuma ser um bom ponto de partida. O método importa menos do que existir um.',
      artigo: ARTIGOS.progressao,
    });
  }

  /* --- 4. Registro (só pesa em objetivos que dependem de progressão fina) --- */
  if (r.registro === 'nunca' && (r.objetivo === 'hipertrofia' || r.objetivo === 'forca')) {
    lista.push({
      id: 'registro',
      nivel: 'media',
      confianca: 'alta',
      titulo: 'Sem registro, a progressão fica no achismo',
      oQueSignifica: `Você indicou que não registra cargas e repetições, e o seu objetivo é ${OBJETIVO_TXT[r.objetivo]}.`,
      porQueImporta:
        'Para esse objetivo, saber exatamente o que foi feito na semana anterior é o que permite decidir o que fazer nesta. Sem esse histórico, a progressão passa a depender de memória — e memória infla resultado.',
      oQueRevisar: 'Anotar carga, séries e repetições dos exercícios principais já resolve. Não precisa de aplicativo: um caderno serve.',
      artigo: ARTIGOS.progressao,
    });
  }

  /* --- 5. Recuperação: mesmo grupo em dias consecutivos --- */
  const consecutivos = grupoEmDiasConsecutivos(r.semana);
  if (consecutivos.length) {
    const g = consecutivos[0];
    lista.push({
      id: 'consecutivos',
      nivel: 'media',
      confianca: 'baixa', // depende inteiramente de volume e intensidade
      titulo: 'Um grupo aparece em dias seguidos',
      oQueSignifica: `${GRUPO_TXT[g]} aparece em dias consecutivos na sua semana.`,
      porQueImporta:
        'Isso não é automaticamente um problema: dependendo do volume e da intensidade de cada sessão, treinar um grupo em dias seguidos pode funcionar bem. Mas se as duas sessões forem pesadas, a recuperação pode ficar apertada.',
      oQueRevisar:
        'Observe como você se sente na segunda sessão. Se o desempenho cai de forma consistente, vale espaçar os dias ou reduzir o volume de uma delas.',
      artigo: ARTIGOS.frequencia,
    });
  } else {
    /* --- 5b. Sobreposição de sinergistas em dias seguidos --- */
    const overlap = sinergistasEmDiasConsecutivos(r.semana);
    if (overlap) {
      lista.push({
        id: 'overlap',
        nivel: 'media',
        confianca: 'baixa',
        titulo: 'Grupos que trabalham juntos caem em dias seguidos',
        oQueSignifica: `${GRUPO_TXT[overlap.a]} e ${GRUPO_TXT[overlap.b]} aparecem em dias consecutivos — e eles participam dos mesmos movimentos de empurrar.`,
        porQueImporta:
          'O tríceps e o ombro entram em quase todo exercício de peito, e vice-versa. Em dias seguidos, o trabalho indireto se soma ao direto, o que pode limitar o desempenho da segunda sessão.',
        oQueRevisar: 'Veja se dá para intercalar um dia de pernas ou de puxar entre as duas sessões.',
        artigo: ARTIGOS.montarAbc,
      });
    }
  }

  /* --- 6. Equilíbrio entre superiores e inferiores --- */
  const expSup = somaExposicao(freq, SUPERIORES);
  const expInf = somaExposicao(freq, INFERIORES);
  const priorizaSuperior = prioridadesReais.some((p) => SUPERIORES.includes(p));
  if (expInf > 0 && expSup >= expInf * 3 && !priorizaSuperior && r.objetivo !== 'condicionamento') {
    lista.push({
      id: 'equilibrio',
      nivel: 'media',
      confianca: 'media',
      titulo: 'A semana está bastante concentrada em membros superiores',
      oQueSignifica: 'Os grupos de membros superiores aparecem bem mais vezes que os de membros inferiores na sua semana.',
      porQueImporta:
        'Isso pode ser uma escolha deliberada, e nesse caso está tudo certo. Mas quando não é intencional, tende a produzir um desenvolvimento desigual ao longo do tempo — e pernas costumam ser o grupo que mais some das rotinas.',
      oQueRevisar: 'Se membros inferiores não são uma prioridade menor de propósito, vale conferir se a distribuição está refletindo o que você quer.',
      artigo: ARTIGOS.pernas,
    });
  } else if (expSup === 0 && expInf > 0) {
    lista.push({
      id: 'sem-superiores',
      nivel: 'media',
      confianca: 'media',
      titulo: 'Não há trabalho declarado para membros superiores',
      oQueSignifica: 'Na semana que você montou, nenhum grupo de membros superiores aparece.',
      porQueImporta: 'Se isso for temporário ou intencional, sem problema. Se não for, é uma lacuna grande na estrutura.',
      oQueRevisar: 'Confira se algum dia da semana ficou de fora ao montar, ou se essa concentração é mesmo proposital.',
      artigo: ARTIGOS.divisao,
    });
  }

  /* --- 7. Duração × quantidade de trabalho --- */
  const gruposPorDia = mediaGruposPorDia(r.semana);
  const muitoTrabalho = r.exercicios === '8a10' || r.exercicios === 'mais10';
  const poucoTempo = r.duracao === 'ate30' || r.duracao === '30a45';
  if (muitoTrabalho && poucoTempo) {
    lista.push({
      id: 'duracao',
      nivel: 'media',
      confianca: 'media',
      titulo: 'A quantidade de exercícios pode não caber no tempo de sessão',
      oQueSignifica: `Você informou fazer ${r.exercicios === 'mais10' ? 'mais de 10' : '8 a 10'} exercícios por sessão em ${r.duracao === 'ate30' ? 'até 30' : '30 a 45'} minutos.`,
      porQueImporta:
        'Nesse tempo, tantos exercícios normalmente exigem descansos muito curtos entre as séries — o que costuma reduzir a carga que você consegue usar e, com ela, o estímulo de cada série.',
      oQueRevisar:
        'Considere reduzir o número de exercícios e dar mais descanso aos principais. Menos exercícios bem executados costumam render mais do que muitos apressados.',
      artigo: ARTIGOS.series,
    });
  }

  /* --- 8. Complexidade × experiência --- */
  if (
    (r.experiencia === 'comecando' || r.experiencia === 'menos6m') &&
    dias >= 5 &&
    gruposPorDia <= 2 &&
    !r.semana.some((d) => d.includes('corpoTodo'))
  ) {
    lista.push({
      id: 'complexidade',
      nivel: 'media',
      confianca: 'media',
      titulo: 'A divisão é bem segmentada para quem está começando',
      oQueSignifica: `Você treina ${dias} dias por semana com poucos grupos por sessão, e indicou estar no início.`,
      porQueImporta:
        'Divisões muito segmentadas dão a cada grupo pouca frequência semanal. No começo, quando o maior ganho vem de aprender e repetir os movimentos, uma frequência maior por grupo costuma acelerar mais.',
      oQueRevisar:
        'Não é um erro — é uma escolha. Mas vale comparar com uma estrutura de corpo inteiro ou de superior/inferior, que costuma render mais nessa fase.',
      artigo: ARTIGOS.divisao,
    });
  }

  /* --- 9. Frequência baixa para o objetivo declarado --- */
  if (r.objetivo === 'hipertrofia' && dias >= 3) {
    const musculares = [...SUPERIORES, ...INFERIORES];
    const umaVez = musculares.filter((g) => (freq.get(g) ?? 0) === 1);
    if (umaVez.length >= 4 && !lista.some((i) => i.id.startsWith('prioridade'))) {
      lista.push({
        id: 'frequencia-objetivo',
        nivel: 'baixa',
        confianca: 'baixa',
        titulo: 'Vários grupos aparecem só uma vez na semana',
        oQueSignifica: 'Boa parte dos grupos musculares recebe trabalho direto em uma única sessão semanal.',
        porQueImporta:
          'Para hipertrofia, distribuir o mesmo volume em duas sessões costuma ser pelo menos tão eficiente quanto concentrar tudo em uma — e às vezes um pouco melhor. Mas isso depende do volume total, que não temos aqui.',
        oQueRevisar: 'Se cada sessão já é bem carregada, pode estar adequado. Vale observar se você consegue manter a qualidade até o fim dessas sessões.',
        artigo: ARTIGOS.frequencia,
      });
    }
  }

  return lista;
}

/* -------------------------- utilidades ---------------------------- */


function somaExposicao(freq: Map<Grupo, number>, grupos: Grupo[]): number {
  return grupos.reduce((s, g) => s + (freq.get(g) ?? 0), 0);
}

function mediaGruposPorDia(semana: Semana): number {
  const dias = semana.filter((d) => d.length);
  if (!dias.length) return 0;
  return dias.reduce((s, d) => s + d.filter((g) => g !== 'cardio').length, 0) / dias.length;
}

/** Grupo muscular direto repetido em dois dias seguidos. */
function grupoEmDiasConsecutivos(semana: Semana): Grupo[] {
  const achados: Grupo[] = [];
  for (const [a, b] of paresConsecutivos(semana)) {
    for (const g of semana[a]) {
      if (g === 'cardio' || g === 'core' || g === 'corpoTodo') continue;
      if (semana[b].includes(g) && !achados.includes(g)) achados.push(g);
    }
  }
  return achados;
}

/** Grupos sinergistas de empurrar em dias seguidos (peito/ombro/tríceps). */
function sinergistasEmDiasConsecutivos(semana: Semana): { a: Grupo; b: Grupo } | null {
  for (const [i, j] of paresConsecutivos(semana)) {
    const d1 = semana[i].filter((g) => SINERGISTAS_EMPURRAR.includes(g));
    const d2 = semana[j].filter((g) => SINERGISTAS_EMPURRAR.includes(g));
    if (d1.length && d2.length) {
      const a = d1.find((g) => !d2.includes(g)) ?? d1[0];
      const b = d2.find((g) => g !== a) ?? d2[0];
      if (a !== b) return { a, b };
    }
  }
  return null;
}

/* ------------------------------------------------------------------ *
 * O que não dá para concluir — seção fixa, por honestidade
 * ------------------------------------------------------------------ */

function montarNaoDaParaConcluir(r: AuditoriaRespostas): string[] {
  const itens = [
    'O volume semanal real de cada grupo muscular — isso dependeria de saber exercícios, séries e repetições de cada sessão.',
    'A qualidade da execução dos movimentos, que é o que mais muda o resultado de um mesmo treino entre duas pessoas.',
    'O quanto você chega perto do limite em cada série, que determina boa parte do estímulo.',
    'Se os exercícios escolhidos são os mais adequados para o seu corpo, sua estrutura e seu histórico.',
    'Sua recuperação individual, que depende de sono, alimentação, estresse e idade de treino.',
  ];
  if (r.exercicios === 'naoSei') {
    itens.push('Quantos exercícios você faz por sessão — você indicou não ter certeza, e isso limita a leitura de carga de trabalho.');
  }
  return itens;
}

/* ------------------------------------------------------------------ *
 * Veredito — nunca uma nota, sempre uma leitura
 * ------------------------------------------------------------------ */

function definirVeredito(atencao: Insight[]): { veredito: Veredito; texto: string } {
  const altas = atencao.filter((i) => i.nivel === 'alta').length;
  if (altas >= 2) {
    return {
      veredito: 'variasQuestoes',
      texto: 'Há pontos importantes para revisar',
    };
  }
  if (altas === 1 || atencao.length >= 2) {
    return {
      veredito: 'coerenteComRevisar',
      texto: 'Coerente, com pontos para revisar',
    };
  }
  return { veredito: 'coerente', texto: 'A estrutura parece coerente' };
}

/* ------------------------------------------------------------------ *
 * Próximo passo — um só, escolhido pelo problema principal
 * ------------------------------------------------------------------ */

function definirProximoPasso(problema: ProblemaPrincipal): AuditoriaResultado['proximoPasso'] {
  switch (problema) {
    case 'aderencia':
      return {
        texto:
          'O ponto mais importante do seu caso não está nos exercícios: está no dimensionamento da semana. Vale montar uma estrutura a partir dos dias que você sustenta de verdade.',
        rotulo: 'Montar treino para minha rotina',
        url: '/ferramentas/treino-para-minha-rotina/',
      };
    case 'complexidade':
      return {
        texto:
          'Vale comparar a sua divisão atual com uma estrutura montada a partir da sua disponibilidade e da sua fase de treino.',
        rotulo: 'Ver uma estrutura alternativa',
        url: '/ferramentas/treino-para-minha-rotina/',
      };
    case 'progressao':
      return {
        texto:
          'Progressão é o tipo de coisa que se resolve melhor com alguém acompanhando os números ao longo dos meses do que com um ajuste pontual.',
        rotulo: 'Descobrir que acompanhamento combina comigo',
        url: '/ferramentas/encontre-seu-personal-ideal/',
      };
    case 'prioridade':
    case 'equilibrio':
      return {
        texto: 'Se quiser reorganizar a semana para refletir melhor a sua prioridade, dá para montar uma estrutura do zero.',
        rotulo: 'Montar treino para minha rotina',
        url: '/ferramentas/treino-para-minha-rotina/',
      };
    case 'recuperacao':
    case 'duracao':
      return {
        texto: 'Ajustes de distribuição e de carga de sessão ficam mais fáceis quando a estrutura é remontada por inteiro.',
        rotulo: 'Montar treino para minha rotina',
        url: '/ferramentas/treino-para-minha-rotina/',
      };
    default:
      return {
        texto:
          'A estrutura não apresentou pontos estruturais relevantes para revisar. Daqui em diante, o que costuma destravar resultado são detalhes que esta ferramenta não enxerga: execução, volume e progressão fina.',
        rotulo: 'Descobrir que acompanhamento combina comigo',
        url: '/ferramentas/encontre-seu-personal-ideal/',
      };
  }
}

function mapearProblema(insight: Insight | undefined): ProblemaPrincipal {
  if (!insight) return 'nenhum';
  if (insight.id === 'aderencia') return 'aderencia';
  if (insight.id.startsWith('prioridade')) return 'prioridade';
  if (insight.id === 'progressao' || insight.id === 'registro') return 'progressao';
  if (insight.id === 'consecutivos' || insight.id === 'overlap') return 'recuperacao';
  if (insight.id === 'equilibrio' || insight.id === 'sem-superiores' || insight.id === 'frequencia-objetivo') return 'equilibrio';
  if (insight.id === 'duracao') return 'duracao';
  if (insight.id === 'complexidade') return 'complexidade';
  return 'nenhum';
}

/* ------------------------------------------------------------------ *
 * Motor
 * ------------------------------------------------------------------ */

export function analisarTreino(r: AuditoriaRespostas): AuditoriaResultado {
  const freq = contarFrequencia(r.semana);
  const dias = contarDias(r.semana);

  const todos = montarInsights(r, freq, dias);
  // Ordena por importância e mantém apenas os três principais: poucos e
  // importantes vale mais que uma lista de catorze alertas.
  const peso = { alta: 0, media: 1, baixa: 2 } as const;
  const ordenados = [...todos].sort((a, b) => peso[a.nivel] - peso[b.nivel]);
  const atencao = ordenados.slice(0, 3);

  const { veredito, texto } = definirVeredito(atencao);
  const problemaPrincipal = mapearProblema(ordenados[0]);
  const pontosFortes = montarPontosFortes(r, freq, dias);

  const frequencia: FrequenciaGrupo[] = [...SUPERIORES, ...INFERIORES, 'core' as Grupo]
    .map((g) => ({ grupo: g, rotulo: GRUPO_TXT[g], vezes: freq.get(g) ?? 0 }))
    .filter((f) => f.vezes > 0)
    .sort((a, b) => b.vezes - a.vezes || a.rotulo.localeCompare(b.rotulo));

  const resumo = montarResumo(r, dias, atencao, veredito);

  // Conteúdo: artigos dos alertas + um do objetivo, sem repetir.
  const conteudo: { url: string; titulo: string }[] = [];
  for (const i of atencao) if (i.artigo) conteudo.push(i.artigo);
  conteudo.push(r.objetivo === 'forca' ? ARTIGOS.forca : r.objetivo === 'hipertrofia' ? ARTIGOS.hipertrofia : ARTIGOS.frequencia);
  const vistos = new Set<string>();
  const conteudoUnico = conteudo.filter((c) => (vistos.has(c.url) ? false : (vistos.add(c.url), true))).slice(0, 4);

  const prioridadeTxt = r.prioridades
    .filter((p) => p !== 'nenhuma')
    .map((p) => (p === 'corpoTodo' ? 'corpo todo' : GRUPO_TXT[p as Grupo].toLowerCase()))
    .join(' e ');

  // WhatsApp curto: objetivo, frequência, alerta principal, interesse.
  const whatsapp = [
    'Oi, Montinho! Fiz o "Meu treino faz sentido?" no Personal por Perto.',
    '',
    `Objetivo: ${OBJETIVO_TXT[r.objetivo]}. Treino ${dias}x por semana.`,
    atencao.length
      ? `O principal ponto que a análise levantou: ${atencao[0].titulo.toLowerCase()}.`
      : 'A análise não apontou pontos estruturais relevantes.',
    '',
    'Queria entender se você consegue analisar meu treino de forma individual.',
  ].join('\n');

  const share =
    `Analisei meu treino no Personal por Perto: ${dias}x por semana, objetivo de ${OBJETIVO_TXT[r.objetivo]}. ` +
    `Resultado: ${texto.toLowerCase()}. ` +
    'Analise o seu: https://www.personalporperto.com.br/ferramentas/meu-treino-faz-sentido/';

  return {
    veredito,
    vereditoTexto: texto,
    resumo,
    diasTreinados: dias,
    frequencia,
    pontosFortes,
    atencao,
    naoDaParaConcluir: montarNaoDaParaConcluir(r),
    problemaPrincipal,
    proximoPasso: definirProximoPasso(problemaPrincipal),
    conteudo: conteudoUnico,
    montinho: {
      motivo:
        'Esta ferramenta consegue avaliar a estrutura geral do programa: distribuição, frequência declarada, coerência com o objetivo e se a semana cabe na sua rotina. Uma revisão individual vai além — considera os exercícios que você faz, o volume real, a execução, as cargas e a sua evolução ao longo do tempo.',
    },
    whatsapp,
    share,
    analytics: {
      goal: r.objetivo,
      experience: r.experiencia,
      days_per_week: dias,
      primary_priority: prioridadeTxt || 'nenhuma',
      adherence_level: r.aderencia,
      progression_method: r.progressao,
      primary_issue: problemaPrincipal,
      verdict: veredito,
    },
  };
}

function montarResumo(r: AuditoriaRespostas, dias: number, atencao: Insight[], veredito: Veredito): string {
  const base = `Você treina ${dias} ${dias === 1 ? 'dia' : 'dias'} por semana com objetivo de ${OBJETIVO_TXT[r.objetivo]}.`;
  if (veredito === 'coerente') {
    return `${base} A estrutura declarada não apresentou pontos estruturais relevantes para revisar — o que não quer dizer que esteja perfeita, apenas que os problemas mais comuns de organização não aparecem aqui.`;
  }
  if (veredito === 'coerenteComRevisar') {
    return `${base} A estrutura tem pontos bons, e há ${atencao.length === 1 ? 'um ponto' : `${atencao.length} pontos`} que eu revisaria antes de mudar qualquer outra coisa.`;
  }
  return `${base} A estrutura tem pontos bons, mas há questões relevantes de organização que provavelmente estão pesando mais no seu resultado do que a escolha dos exercícios.`;
}

/** Rótulos exportados para a UI. */
export const rotulosAuditoria = {
  objetivo: OBJETIVO_TXT,
  grupo: GRUPO_TXT,
  aderencia: ADERENCIA_TXT,
};
