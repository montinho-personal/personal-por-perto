/**
 * routineEngine — motor da ferramenta "Treino para Minha Rotina".
 *
 * Regras determinísticas, zero dependências, zero DOM: roda igual no build
 * (testes) e no navegador. A UI não decide nada — ela coleta respostas e
 * renderiza o que sai daqui.
 *
 * Filosofia: o melhor treino não é o que parece mais sofisticado no papel,
 * é o que sobrevive à semana real da pessoa. Sempre que houver conflito
 * entre estrutura elegante e estrutura executável, ganha a executável.
 *
 * O que este motor NÃO faz, deliberadamente: não monta ficha, não define
 * séries e repetições por grupo muscular, não prescreve volume individual
 * e não interpreta condição de saúde. Ele organiza a semana — o resto
 * depende de avaliação individual.
 */

/* ------------------------------------------------------------------ *
 * Entradas
 * ------------------------------------------------------------------ */

export type Objetivo =
  | 'emagrecer'
  | 'massa'
  | 'condicionamento'
  | 'voltar'
  | 'forca'
  | 'saude'
  | 'manter';

export type Experiencia = 'nunca' | 'comecando' | 'voltando' | 'regular' | 'experiente';

/** Dias que a pessoa sustenta numa semana comum — não na semana ideal. */
export type Dias = '2' | '3' | '4' | '5' | '6' | 'varia';

export type Tempo = 'ate30' | '30a45' | '45a60' | '60a75' | 'mais75' | 'varia';

export type Local = 'academia' | 'condominio' | 'casa' | 'arLivre' | 'misturo' | 'vouComecar';

/** Só perguntado quando o local não é academia completa (progressive disclosure). */
export type Equipamento = 'pesoCorporal' | 'halteres' | 'elasticos' | 'banco' | 'barra' | 'completa';

export type Previsibilidade = 'fixa' | 'poucoMuda' | 'mudaBastante' | 'imprevisivel';

export type Dificuldade =
  | 'tempo'
  | 'constancia'
  | 'naoSeiFazer'
  | 'comecoParo'
  | 'semEvolucao'
  | 'progressao'
  | 'rotinaMuda'
  | 'perdidoAcademia';

export interface RotinaRespostas {
  objetivo: Objetivo;
  experiencia: Experiencia;
  dias: Dias;
  tempo: Tempo;
  local: Local;
  /** Opcional: só existe quando o local exige. */
  equipamento?: Equipamento;
  previsibilidade: Previsibilidade;
  dificuldade: Dificuldade;
  /** Contexto herdado de página local — nunca perguntado aqui. */
  cidadeSlug?: string;
  cidadeNome?: string;
}

/* ------------------------------------------------------------------ *
 * Catálogo de divisões
 * ------------------------------------------------------------------ */

export interface Divisao {
  id: string;
  nome: string;
  /** Rótulos das sessões, na ordem do rodízio. */
  sessoes: string[];
  /** Uma frase sobre o que a divisão faz. */
  resumo: string;
  /** Conteúdo do portal que aprofunda a divisão (URL real, validada em teste). */
  artigo?: { url: string; titulo: string };
}

const DIVISOES = {
  fullBody2: {
    id: 'fullBody2',
    nome: 'Full Body 2x por semana',
    sessoes: ['Corpo inteiro A', 'Corpo inteiro B'],
    resumo:
      'Duas sessões de corpo inteiro, alternando ênfase. Com dois dias, treinar o corpo todo em cada sessão garante que nenhum grupo muscular fique uma semana inteira sem estímulo.',
    artigo: { url: '/musculacao/abc-ou-full-body/', titulo: 'ABC ou Full Body: qual escolher' },
  },
  fullBody3: {
    id: 'fullBody3',
    nome: 'Full Body 3x por semana',
    sessoes: ['Corpo inteiro A', 'Corpo inteiro B', 'Corpo inteiro C'],
    resumo:
      'Três sessões de corpo inteiro com ênfases diferentes. É a estrutura mais tolerante a falhas: perder um dia não deixa nenhum grupo muscular órfão na semana.',
    artigo: { url: '/musculacao/abc-ou-full-body/', titulo: 'ABC ou Full Body: qual escolher' },
  },
  upperLowerFull: {
    id: 'upperLowerFull',
    nome: 'Superior / Inferior / Corpo inteiro',
    sessoes: ['Superior', 'Inferior', 'Corpo inteiro'],
    resumo:
      'Uma sessão de membros superiores, uma de inferiores e uma de corpo inteiro fechando a semana. Dá mais espaço por sessão que o Full Body puro, mantendo boa frequência.',
    artigo: { url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' },
  },
  upperLower4: {
    id: 'upperLower4',
    nome: 'Superior / Inferior, duas voltas por semana',
    sessoes: ['Superior A', 'Inferior A', 'Superior B', 'Inferior B'],
    resumo:
      'Cada metade do corpo treinada duas vezes por semana. Com quatro dias, é a estrutura que melhor equilibra frequência por grupo muscular e tempo por sessão.',
    artigo: { url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' },
  },
  fullUpperLower: {
    id: 'fullUpperLower',
    nome: 'Corpo inteiro / Superior / Inferior',
    sessoes: ['Corpo inteiro', 'Superior', 'Inferior'],
    resumo:
      'Abre a semana com corpo inteiro e distribui o resto em superior e inferior. Se a semana desandar depois do primeiro treino, você já pegou o corpo todo uma vez.',
    artigo: { url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' },
  },
  upperLowerPlus: {
    id: 'upperLowerPlus',
    nome: 'Superior / Inferior + sessão de ênfase',
    sessoes: ['Superior A', 'Inferior A', 'Superior B', 'Inferior B', 'Ênfase / pontos fracos'],
    resumo:
      'A base de superior e inferior duas vezes, mais uma quinta sessão dedicada ao que você mais quer desenvolver ou ao que ficou para trás.',
    artigo: { url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' },
  },
  pushPullLegs: {
    id: 'pushPullLegs',
    nome: 'Empurrar / Puxar / Pernas, duas voltas',
    sessoes: ['Empurrar A', 'Puxar A', 'Pernas A', 'Empurrar B', 'Puxar B', 'Pernas B'],
    resumo:
      'Sessões organizadas por padrão de movimento, cada uma repetida duas vezes na semana. Exige seis dias consistentes e boa recuperação para valer a pena.',
    artigo: { url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' },
  },
  sequenciaAB: {
    id: 'sequenciaAB',
    nome: 'Rodízio A / B em sequência',
    sessoes: ['Corpo inteiro A', 'Corpo inteiro B'],
    resumo:
      'Dois treinos que se alternam na ordem em que você conseguir treinar, sem depender de dia fixo da semana. Você nunca "perde" um treino — apenas faz o próximo da fila.',
    artigo: { url: '/musculacao/abc-ou-full-body/', titulo: 'ABC ou Full Body: qual escolher' },
  },
  sequenciaABC: {
    id: 'sequenciaABC',
    nome: 'Rodízio A / B / C em sequência',
    sessoes: ['Corpo inteiro A', 'Corpo inteiro B', 'Corpo inteiro C'],
    resumo:
      'Três treinos que giram na ordem em que a sua semana permitir. O calendário deixa de mandar: o que manda é qual foi o último treino que você fez.',
    artigo: { url: '/musculacao/abc-ou-full-body/', titulo: 'ABC ou Full Body: qual escolher' },
  },
} as const satisfies Record<string, Divisao>;

export type DivisaoId = keyof typeof DIVISOES;

/* ------------------------------------------------------------------ *
 * Saída
 * ------------------------------------------------------------------ */

export interface DiaSemana {
  rotulo: string;
  sessao: string | null;
}

export interface RotinaResultado {
  /** Arquétipo interno (analytics) — nunca exibido como "você é do tipo X". */
  arquetipo: string;
  divisao: Divisao;
  /** Quando a rotina é imprevisível, a semana vira sequência sem dia fixo. */
  modoSequencia: boolean;
  /** Semana ideal: 7 dias rotulados, ou a sequência quando modoSequencia. */
  semanaIdeal: DiaSemana[];
  sessoesIdeais: number;
  sessoesMinimas: number;
  minimaTexto: string;
  duracaoIdeal: string;
  duracaoDiaCorrido: string;
  /** Blocos combináveis que explicam a escolha. */
  porque: string[];
  prioridades: string[];
  evitar: string[];
  /** Segunda estrutura plausível — nunca fingir que só existe uma resposta. */
  alternativa?: { divisao: Divisao; quando: string };
  observacaoEquipamento?: string;
  proximoPasso: string;
  montinho: { nivel: 'alta' | 'media'; motivo: string; ressalva?: string };
  conteudo: { url: string; titulo: string }[];
  share: string;
  whatsapp: string;
  analytics: {
    goal: Objetivo;
    experience: Experiencia;
    days_per_week: Dias;
    session_duration: Tempo;
    training_location: Local;
    schedule_type: Previsibilidade;
    main_obstacle: Dificuldade;
    recommended_split: string;
  };
}

/* ------------------------------------------------------------------ *
 * Dicionários de exibição
 * ------------------------------------------------------------------ */

const OBJETIVO_TXT: Record<Objetivo, string> = {
  emagrecer: 'emagrecer',
  massa: 'ganhar massa muscular',
  condicionamento: 'melhorar o condicionamento',
  voltar: 'voltar a treinar',
  forca: 'ganhar força',
  saude: 'melhorar saúde e disposição',
  manter: 'manter os resultados',
};

const EXPERIENCIA_TXT: Record<Experiencia, string> = {
  nunca: 'nunca treinou de verdade',
  comecando: 'está começando',
  voltando: 'está voltando depois de um tempo',
  regular: 'já treina regularmente',
  experiente: 'tem bastante experiência',
};

const DIAS_TXT: Record<Dias, string> = {
  '2': 'dois dias por semana',
  '3': 'três dias por semana',
  '4': 'quatro dias por semana',
  '5': 'cinco dias por semana',
  '6': 'seis dias por semana',
  varia: 'um número de dias que varia bastante',
};

const TEMPO_TXT: Record<Tempo, string> = {
  ate30: 'até 30 minutos por sessão',
  '30a45': 'de 30 a 45 minutos por sessão',
  '45a60': 'de 45 a 60 minutos por sessão',
  '60a75': 'de 60 a 75 minutos por sessão',
  mais75: 'mais de 75 minutos por sessão',
  varia: 'um tempo que varia bastante',
};

const LOCAL_TXT: Record<Local, string> = {
  academia: 'em academia completa',
  condominio: 'na academia do condomínio',
  casa: 'em casa',
  arLivre: 'ao ar livre',
  misturo: 'em lugares que variam',
  vouComecar: 'em um lugar que ainda vai escolher',
};

const DIFICULDADE_TXT: Record<Dificuldade, string> = {
  tempo: 'falta de tempo',
  constancia: 'falta de constância',
  naoSeiFazer: 'não saber o que fazer',
  comecoParo: 'começar e parar',
  semEvolucao: 'treinar sem ver evolução',
  progressao: 'dificuldade para aumentar cargas',
  rotinaMuda: 'uma rotina que muda muito',
  perdidoAcademia: 'se sentir perdido na academia',
};

const DURACAO: Record<Tempo, { ideal: string; corrido: string }> = {
  ate30: { ideal: '25 a 30 minutos', corrido: '15 a 20 minutos' },
  '30a45': { ideal: '30 a 45 minutos', corrido: '20 a 25 minutos' },
  '45a60': { ideal: '45 a 60 minutos', corrido: '25 a 30 minutos' },
  '60a75': { ideal: '60 a 75 minutos', corrido: '30 a 35 minutos' },
  mais75: { ideal: '75 minutos ou mais', corrido: '35 a 40 minutos' },
  varia: { ideal: '40 a 50 minutos quando der', corrido: '20 a 25 minutos' },
};

/* ------------------------------------------------------------------ *
 * Escolha da divisão
 * ------------------------------------------------------------------ */

const iniciante = (e: Experiencia) => e === 'nunca' || e === 'comecando';
const avancado = (e: Experiencia) => e === 'regular' || e === 'experiente';
const rotinaInstavel = (p: Previsibilidade) => p === 'mudaBastante' || p === 'imprevisivel';
const sessaoCurta = (t: Tempo) => t === 'ate30' || t === '30a45';

/**
 * Quantos dias efetivamente planejar. Aqui mora a regra mais importante da
 * ferramenta: disponibilidade não é obrigação. Quem tem seis dias livres e
 * nunca treinou não começa com seis — e quem não consegue repetir a semana
 * não ganha nada tentando uma estrutura de alta frequência.
 */
function diasPlanejados(r: RotinaRespostas): { dias: number; ajustado: boolean } {
  if (r.dias === 'varia') return { dias: 3, ajustado: false };
  const bruto = Number(r.dias);

  // Iniciante com muita disponibilidade: começar menor e crescer depois.
  if (iniciante(r.experiencia) && bruto >= 5) return { dias: 4, ajustado: true };
  // Quem começa e para não precisa de mais dias — precisa repetir a semana.
  if ((r.dificuldade === 'comecoParo' || r.dificuldade === 'constancia') && bruto >= 5) {
    return { dias: 4, ajustado: true };
  }
  // Retomada: voltar no volume antigo é o erro clássico.
  if (r.experiencia === 'voltando' && bruto >= 5) return { dias: 4, ajustado: true };
  return { dias: bruto, ajustado: false };
}

interface EscolhaDivisao {
  principal: DivisaoId;
  alternativa?: { id: DivisaoId; quando: string };
}

function escolherDivisao(r: RotinaRespostas, dias: number): EscolhaDivisao {
  const sequencia = rotinaInstavel(r.previsibilidade) || r.dias === 'varia';

  // Rotina instável: a sequência substitui o calendário. Vale para qualquer
  // objetivo — nada adianta prescrever segunda/quarta/sexta para quem não
  // sabe em que dia vai conseguir treinar.
  if (sequencia) {
    if (dias <= 2) {
      return {
        principal: 'sequenciaAB',
        alternativa: { id: 'fullBody2', quando: 'se a sua semana estabilizar e você conseguir fixar dois dias' },
      };
    }
    return {
      principal: 'sequenciaABC',
      alternativa: { id: 'fullBody3', quando: 'se em algum período a sua rotina ficar previsível' },
    };
  }

  if (dias <= 2) {
    return {
      principal: 'fullBody2',
      alternativa: { id: 'sequenciaAB', quando: 'se os seus dois dias não caírem sempre nos mesmos dias da semana' },
    };
  }

  if (dias === 3) {
    // Sessão curta com três dias: corpo inteiro fica apertado, dividir ajuda.
    if (sessaoCurta(r.tempo) && avancado(r.experiencia)) {
      return {
        principal: 'upperLowerFull',
        alternativa: { id: 'fullBody3', quando: 'se preferir garantir o corpo todo em cada sessão' },
      };
    }
    // Experiente com sessão longa e foco em massa: mais espaço por sessão.
    if (r.experiencia === 'experiente' && (r.objetivo === 'massa' || r.objetivo === 'forca') && !sessaoCurta(r.tempo)) {
      return {
        principal: 'upperLowerFull',
        alternativa: { id: 'fullBody3', quando: 'se quiser mais frequência por grupo muscular' },
      };
    }
    return {
      principal: 'fullBody3',
      alternativa: { id: 'upperLowerFull', quando: 'se quiser mais volume por sessão e menos pressa dentro do treino' },
    };
  }

  if (dias === 4) {
    // Iniciante com quatro dias ainda ganha mais com corpo inteiro + um dia.
    if (iniciante(r.experiencia)) {
      return {
        principal: 'fullUpperLower',
        alternativa: { id: 'upperLower4', quando: 'quando os movimentos básicos já estiverem automáticos' },
      };
    }
    return {
      principal: 'upperLower4',
      alternativa: { id: 'fullUpperLower', quando: 'se você quiser um dia de corpo inteiro como segurança da semana' },
    };
  }

  if (dias === 5) {
    return {
      principal: 'upperLowerPlus',
      alternativa: { id: 'upperLower4', quando: 'nas semanas em que o quinto dia não acontecer' },
    };
  }

  // Seis dias: só faz sentido com experiência e recuperação em dia.
  return {
    principal: 'pushPullLegs',
    alternativa: { id: 'upperLower4', quando: 'se a recuperação começar a ficar para trás' },
  };
}

/* ------------------------------------------------------------------ *
 * Semana
 * ------------------------------------------------------------------ */

const NOMES_DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

/** Distribui N sessões em 7 dias, espaçando o melhor possível. */
function distribuir(sessoes: string[], dias: number): DiaSemana[] {
  const posicoes = new Set<number>();
  for (let i = 0; i < dias; i++) posicoes.add(Math.round((i * 7) / dias));
  const ordenadas = [...posicoes].sort((a, b) => a - b).slice(0, dias);

  let i = 0;
  return NOMES_DIAS.map((rotulo, idx) => ({
    rotulo,
    sessao: ordenadas.includes(idx) ? (sessoes[i++ % sessoes.length] ?? null) : null,
  }));
}

/** Modo sequência: a ordem é o que importa, não o dia do calendário. */
function sequenciar(sessoes: string[]): DiaSemana[] {
  return sessoes.map((s, i) => ({ rotulo: `${i + 1}º treino`, sessao: s }));
}

/**
 * Semana mínima viável: o número de sessões que ainda mantém a rotina viva
 * numa semana ruim. Existe para desfazer o "perdi a semana" — o pensamento
 * que mais faz gente abandonar treino.
 */
function minimaViavel(dias: number): number {
  if (dias <= 2) return 1;
  return Math.max(2, Math.ceil(dias / 2));
}

/* ------------------------------------------------------------------ *
 * Blocos de texto combináveis
 * ------------------------------------------------------------------ */

function blocosPorque(r: RotinaRespostas, dias: number, ajustado: boolean, div: Divisao, seq: boolean): string[] {
  const blocos: string[] = [];

  // 1 — espelha o cenário declarado.
  const diasFrase =
    r.dias === 'varia'
      ? 'Sua semana varia demais para fixar um número de treinos'
      : `Você informou que consegue treinar ${DIAS_TXT[r.dias]}`;
  blocos.push(
    `${diasFrase}, com ${TEMPO_TXT[r.tempo]}, treinando ${LOCAL_TXT[r.local]}, e quer ${OBJETIVO_TXT[r.objetivo]}. ` +
      `O que mais atrapalha hoje é ${DIFICULDADE_TXT[r.dificuldade]}.`,
  );

  // 2 — justifica a estrutura escolhida.
  blocos.push(div.resumo);

  // 3 — quando reduzimos os dias, a explicação é obrigatória.
  if (ajustado) {
    const motivo =
      iniciante(r.experiencia)
        ? 'Você tem mais dias livres do que isso, mas começar já na frequência máxima é o caminho mais curto para abandonar na terceira semana. Dá para subir depois, quando a semana atual virar rotina.'
        : r.experiencia === 'voltando'
          ? 'Você tem mais dias disponíveis, mas voltar direto no volume de antes é o erro clássico da retomada. Consolidar esta frequência primeiro costuma render mais do que forçar o retorno completo.'
          : 'Você tem mais dias livres, mas pela sua resposta o gargalo não é quantidade de treino: é conseguir repetir a semana. Uma estrutura que você cumpre vale mais do que uma que você abandona.';
    blocos.push(`Planejamos ${dias} sessões, e não mais. ${motivo}`);
  }

  // 4 — modo sequência é a diferença central para rotina instável.
  if (seq) {
    blocos.push(
      'Como a sua rotina não é previsível, a estrutura não usa dias fixos da semana. Você segue a ordem dos treinos: fez o A, o próximo dia que der é o B, depois o C, e recomeça. ' +
        'Assim um dia perdido não vira uma semana perdida — só empurra a fila.',
    );
  }

  return blocos;
}

function montarPrioridades(r: RotinaRespostas, dias: number): string[] {
  const p: string[] = [];

  // Rotina instável é o cenário central da ferramenta: precisa de prioridade
  // própria, não pode cair no texto genérico.
  if (rotinaInstavel(r.previsibilidade) || r.dias === 'varia' || r.dificuldade === 'rotinaMuda') {
    p.push('Seguir a ordem dos treinos, não o calendário. O que define o próximo treino é qual foi o último, não que dia é hoje.');
    p.push('Ter uma versão curta de cada sessão pronta de antemão, para o dia em que sobrar metade do tempo previsto.');
  }

  if (r.dificuldade === 'constancia' || r.dificuldade === 'comecoParo') {
    p.push('Repetir a semana. Antes de melhorar o treino, o objetivo é fazer a mesma semana duas ou três vezes seguidas.');
  }
  if (r.dificuldade === 'semEvolucao' || r.dificuldade === 'progressao') {
    p.push('Registrar carga, séries e repetições. Sem registro não existe progressão — existe repetição.');
    p.push('Aumentar a dificuldade aos poucos no mesmo exercício, em vez de trocar de exercício.');
  }
  if (r.dificuldade === 'tempo' || sessaoCurta(r.tempo)) {
    p.push('Priorizar exercícios que trabalham muitos músculos de uma vez — eles rendem mais quando o tempo é curto.');
  }
  if (r.dificuldade === 'naoSeiFazer' || r.dificuldade === 'perdidoAcademia' || iniciante(r.experiencia)) {
    p.push('Aprender bem poucos movimentos antes de aumentar a variedade. Repetição é o que constrói técnica.');
  }
  if (r.experiencia === 'voltando') {
    p.push('Voltar em um ritmo que o corpo aceite: as duas primeiras semanas servem para readaptar, não para provar nada.');
  }
  if (dias >= 5) {
    p.push('Cuidar da recuperação: com essa frequência, dormir e comer mal limitam mais o resultado do que o treino.');
  }
  if (r.objetivo === 'emagrecer') {
    p.push('Manter a musculação como base e somar atividade fora do treino — o gasto do dia inteiro pesa mais que o da sessão.');
  }
  if (r.objetivo === 'massa' || r.objetivo === 'forca') {
    p.push('Progredir nos exercícios principais. Em estruturas como esta, o resultado vem de subir carga ou repetição nos mesmos movimentos ao longo das semanas.');
  }
  if (r.objetivo === 'manter') {
    p.push('Preservar a frequência mínima. Para manter, treinar menos e com regularidade rende mais do que ciclos de muito treino seguidos de pausas longas.');
  }
  if (avancado(r.experiencia) && dias === 4) {
    p.push('Distribuir o esforço entre as sessões, em vez de concentrar tudo no primeiro treino da semana.');
  }

  p.push('Terminar a semana. Uma sessão a menos é melhor que zero, e muito melhor que recomeçar do zero na semana seguinte.');
  return p.slice(0, 5);
}

function montarEvitar(r: RotinaRespostas, dias: number, ajustado: boolean): string[] {
  const e: string[] = [];

  if (ajustado || dias <= 3) {
    e.push(`Montar um plano que dependa de mais dias do que você sustenta — a estrutura precisa caber em ${dias} sessões.`);
  }
  if (r.dificuldade === 'semEvolucao' || r.dificuldade === 'progressao') {
    e.push('Trocar os exercícios toda semana: sem repetir o estímulo, não há como saber se você progrediu.');
  }
  if (rotinaInstavel(r.previsibilidade) || r.dias === 'varia') {
    e.push('Tratar um dia perdido como semana perdida. A sequência continua de onde parou, não volta ao início.');
  }
  if (sessaoCurta(r.tempo) || r.dificuldade === 'tempo') {
    e.push('Alongar a sessão para "compensar" um treino que não aconteceu — sessão longa demais costuma perder qualidade no fim.');
  }
  if (r.experiencia === 'voltando' || r.dificuldade === 'comecoParo') {
    e.push('Retomar no volume de antes logo na primeira semana. É o motivo mais comum de dor, desânimo e nova pausa.');
  }
  if (iniciante(r.experiencia)) {
    e.push('Copiar treino de quem já treina há anos: o que funciona para essa pessoa não é o que funciona para você agora.');
  }
  if (!e.length) {
    e.push('Aumentar volume sem aumentar recuperação — mais treino só rende quando o corpo consegue absorver.');
  }
  return e.slice(0, 4);
}

/** Observação de equipamento: o plano precisa caber no que existe. */
function notaEquipamento(r: RotinaRespostas): string | undefined {
  if (r.local === 'academia') return undefined;

  const porEquipamento: Partial<Record<Equipamento, string>> = {
    pesoCorporal:
      'Só com peso corporal, a progressão vem de mudar o ângulo, a alavanca e o tempo sob tensão — e não de somar carga. É totalmente viável, mas exige mais criatividade na escolha das variações.',
    elasticos:
      'Com elásticos, a resistência aumenta no fim do movimento. Eles funcionam bem combinados com peso corporal, e a progressão vem da faixa mais forte ou de mais tensão inicial.',
    halteres:
      'Com halteres dá para cobrir praticamente todos os padrões de movimento. A limitação costuma aparecer nos exercícios de perna, onde a carga disponível fica curta antes do resto.',
    banco:
      'Halteres com banco ampliam bastante as opções de superiores. Para pernas, vale explorar variações unilaterais, que exigem menos carga total.',
    barra:
      'Com barra e anilhas você tem progressão de carga real em todos os padrões. Nesse cenário a estrutura funciona praticamente como em academia.',
    completa:
      'Com uma academia doméstica completa, a estrutura funciona igual à de academia — a diferença fica só na variedade de máquinas.',
  };

  if (r.local === 'arLivre') {
    return 'Treinando ao ar livre, a progressão depende de variações de peso corporal e do que houver de barras e estruturas no local. Vale mapear os equipamentos disponíveis antes de fechar a rotina.';
  }
  if (r.local === 'condominio') {
    return 'Academias de condomínio costumam ter halteres, alguns aparelhos e esteira. A estrutura funciona bem — o ajuste maior costuma ser nos exercícios de perna com carga alta.';
  }
  if (r.local === 'misturo') {
    return 'Como você alterna entre locais, vale ter uma versão de cada treino para o lugar com mais equipamento e outra reduzida para o lugar com menos.';
  }
  return r.equipamento ? porEquipamento[r.equipamento] : undefined;
}

/* ------------------------------------------------------------------ *
 * Arquétipo interno (analytics; nunca exibido como rótulo de pessoa)
 * ------------------------------------------------------------------ */

function definirArquetipo(r: RotinaRespostas, dias: number): string {
  if (rotinaInstavel(r.previsibilidade) || r.dias === 'varia') return 'flexivel';
  if (r.dificuldade === 'comecoParo' || r.dificuldade === 'constancia') return 'consistencia';
  if (r.experiencia === 'voltando') return 'retorno';
  if (iniciante(r.experiencia)) return 'iniciante';
  if (avancado(r.experiencia) && (r.dificuldade === 'semEvolucao' || r.dificuldade === 'progressao')) {
    return 'estagnacao';
  }
  if (dias <= 2 || r.tempo === 'ate30') return 'rotina-minima';
  if (dias >= 4 && avancado(r.experiencia)) return 'estruturada';
  return 'geral';
}

/* ------------------------------------------------------------------ *
 * Conteúdo do portal (URLs reais — validadas contra o disco no teste)
 * ------------------------------------------------------------------ */

function conteudoRelacionado(r: RotinaRespostas, div: Divisao): { url: string; titulo: string }[] {
  const itens: { url: string; titulo: string }[] = [];
  if (div.artigo) itens.push(div.artigo);

  const porObjetivo: Record<Objetivo, { url: string; titulo: string }> = {
    emagrecer: {
      url: '/emagrecimento/como-emagrecer-fazendo-musculacao/',
      titulo: 'Como emagrecer fazendo musculação',
    },
    massa: { url: '/musculacao/hipertrofia-como-funciona/', titulo: 'Hipertrofia: como funciona' },
    forca: { url: '/musculacao/treino-de-forca/', titulo: 'Treino de força: como estruturar' },
    voltar: {
      url: '/musculacao/voltar-a-treinar-depois-de-parar/',
      titulo: 'Voltar a treinar depois de parar',
    },
    condicionamento: {
      url: '/musculacao/frequencia-de-treino/',
      titulo: 'Frequência de treino: quantas vezes por semana',
    },
    saude: { url: '/musculacao/treino-de-forca/', titulo: 'Treino de força: como estruturar' },
    manter: { url: '/musculacao/destreino/', titulo: 'Destreino: quanto tempo até perder o ganho' },
  };
  itens.push(porObjetivo[r.objetivo]);

  // Terceiro item pela dificuldade — é o gargalo declarado.
  const porDificuldade: Partial<Record<Dificuldade, { url: string; titulo: string }>> = {
    constancia: { url: '/guias/como-nao-desistir-do-treino/', titulo: 'Como não desistir do treino' },
    comecoParo: { url: '/guias/como-nao-desistir-do-treino/', titulo: 'Como não desistir do treino' },
    tempo: {
      url: '/musculacao/quanto-tempo-de-treino-por-dia/',
      titulo: 'Quanto tempo de treino por dia é necessário',
    },
    semEvolucao: { url: '/musculacao/progressao-de-carga/', titulo: 'Progressão de carga: como aplicar' },
    progressao: { url: '/musculacao/progressao-de-carga/', titulo: 'Progressão de carga: como aplicar' },
    naoSeiFazer: { url: '/musculacao/treino-para-iniciantes/', titulo: 'Treino de musculação para iniciantes' },
    perdidoAcademia: { url: '/musculacao/treino-para-iniciantes/', titulo: 'Treino de musculação para iniciantes' },
    rotinaMuda: { url: '/musculacao/frequencia-de-treino/', titulo: 'Frequência de treino: quantas vezes por semana' },
  };
  const dif = porDificuldade[r.dificuldade];
  if (dif) itens.push(dif);

  if (r.local === 'casa') {
    itens.push({ url: '/musculacao/treino-em-casa-para-iniciantes/', titulo: 'Treino em casa para iniciantes' });
  }

  const vistos = new Set<string>();
  return itens.filter((i) => (vistos.has(i.url) ? false : (vistos.add(i.url), true))).slice(0, 4);
}

/* ------------------------------------------------------------------ *
 * Compatibilidade com o Montinho — depois do valor, nunca antes
 * ------------------------------------------------------------------ */

function compatibilidade(r: RotinaRespostas, arquetipo: string): RotinaResultado['montinho'] {
  if (arquetipo === 'estagnacao') {
    return {
      nivel: 'alta',
      motivo:
        'Pela sua resposta, o problema provavelmente não é a divisão do treino: é progressão, volume, recuperação e execução — coisas que só um acompanhamento individual consegue ajustar olhando o seu histórico.',
    };
  }
  if (arquetipo === 'consistencia' || arquetipo === 'retorno') {
    return {
      nivel: 'alta',
      motivo:
        'Estrutura resolve metade do problema; a outra metade é ter alguém acompanhando os ajustes quando a semana desanda. É exatamente o tipo de acompanhamento que o Montinho faz — planejamento, ajuste de rota e evolução registrada.',
    };
  }
  if (arquetipo === 'iniciante') {
    return {
      nivel: 'media',
      motivo:
        'No começo, o que mais acelera é aprender a executar com segurança. Um acompanhamento individual encurta bastante essa fase.',
      ressalva:
        'Se você preferir começar por conta própria, esta estrutura já dá o caminho. Vale voltar aqui quando quiser subir de nível.',
    };
  }
  return {
    nivel: 'media',
    motivo:
      'Esta ferramenta organiza a semana. Um planejamento individual vai além: considera histórico, execução, escolha de exercícios, volume e progressão ao longo dos meses.',
    ressalva: 'Sem pressa — a estrutura acima já é um ponto de partida utilizável sozinho.',
  };
}

/* ------------------------------------------------------------------ *
 * Motor
 * ------------------------------------------------------------------ */

export function rotinaTreinoEngine(r: RotinaRespostas): RotinaResultado {
  const { dias, ajustado } = diasPlanejados(r);
  const escolha = escolherDivisao(r, dias);
  const divisao = DIVISOES[escolha.principal] as Divisao;
  const seq = rotinaInstavel(r.previsibilidade) || r.dias === 'varia';

  const sessoesIdeais = seq ? divisao.sessoes.length : dias;
  const semanaIdeal = seq ? sequenciar(divisao.sessoes) : distribuir(divisao.sessoes, dias);
  const sessoesMinimas = minimaViavel(sessoesIdeais);

  const minimaTexto =
    sessoesMinimas === 1
      ? 'Numa semana ruim, uma sessão de corpo inteiro já mantém o estímulo vivo e a rotina de pé. É pouco? É. Mas é radicalmente diferente de zero.'
      : `Numa semana ruim, ${sessoesMinimas} sessões seguram o essencial. Não é a semana ideal — é a semana que evita recomeçar do zero na segunda seguinte.`;

  const arquetipo = definirArquetipo(r, dias);
  const alternativa = escolha.alternativa
    ? { divisao: DIVISOES[escolha.alternativa.id] as Divisao, quando: escolha.alternativa.quando }
    : undefined;

  const proximoPasso = seq
    ? 'Defina qual é o treino A e comece por ele no próximo dia que você conseguir. Anote qual foi o último — é isso que diz qual vem em seguida.'
    : `Escolha ${sessoesIdeais === 1 ? 'o dia' : `os ${sessoesIdeais} dias`} da semana e, sempre que possível, deixe um dia de intervalo entre as sessões. Repita a mesma semana pelo menos três vezes antes de mudar qualquer coisa.`;

  const share =
    `Minha estrutura sugerida: ${divisao.nome}${seq ? ' (em sequência, sem dia fixo)' : ''}. ` +
    `Monte a sua: https://www.personalporperto.com.br/ferramentas/treino-para-minha-rotina/`;

  const whatsapp = [
    'Oi, Montinho! Fiz o "Treino para Minha Rotina" no Personal por Perto.',
    '',
    `Meu objetivo: ${OBJETIVO_TXT[r.objetivo]}`,
    `Experiência: ${EXPERIENCIA_TXT[r.experiencia]}`,
    `Disponibilidade: ${DIAS_TXT[r.dias]}`,
    `Tempo por treino: ${TEMPO_TXT[r.tempo]}`,
    `Onde treino: ${LOCAL_TXT[r.local]}`,
    `Maior dificuldade: ${DIFICULDADE_TXT[r.dificuldade]}`,
    '',
    `A ferramenta sugeriu ${divisao.nome.toLowerCase()}. Queria entender como ficaria um planejamento individual para o meu caso.`,
  ].join('\n');

  return {
    arquetipo,
    divisao,
    modoSequencia: seq,
    semanaIdeal,
    sessoesIdeais,
    sessoesMinimas,
    minimaTexto,
    duracaoIdeal: DURACAO[r.tempo].ideal,
    duracaoDiaCorrido: DURACAO[r.tempo].corrido,
    porque: blocosPorque(r, dias, ajustado, divisao, seq),
    prioridades: montarPrioridades(r, dias),
    evitar: montarEvitar(r, dias, ajustado),
    alternativa,
    observacaoEquipamento: notaEquipamento(r),
    proximoPasso,
    montinho: compatibilidade(r, arquetipo),
    conteudo: conteudoRelacionado(r, divisao),
    share,
    whatsapp,
    analytics: {
      goal: r.objetivo,
      experience: r.experiencia,
      days_per_week: r.dias,
      session_duration: r.tempo,
      training_location: r.local,
      schedule_type: r.previsibilidade,
      main_obstacle: r.dificuldade,
      recommended_split: divisao.id,
    },
  };
}

/** Rótulos exportados para a UI não duplicar strings. */
export const rotulosRotina = {
  objetivo: OBJETIVO_TXT,
  experiencia: EXPERIENCIA_TXT,
  dias: DIAS_TXT,
  tempo: TEMPO_TXT,
  local: LOCAL_TXT,
  dificuldade: DIFICULDADE_TXT,
};

export const divisoesDisponiveis = DIVISOES;
