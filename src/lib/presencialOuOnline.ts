/**
 * presencialOuOnline — motor da ferramenta "Personal presencial ou online:
 * qual combina comigo?".
 *
 * A pergunta que a pessoa faz é "online ou presencial?". A pergunta que ela
 * precisa responder é outra: "qual é o meu gargalo?". Supervisão durante a
 * sessão, planejamento e progressão, flexibilidade de agenda e cobrança são
 * problemas diferentes, e cada um é melhor resolvido por um formato
 * diferente. O motor existe para fazer essa tradução.
 *
 * Princípios que governam cada linha deste arquivo:
 *
 * 1. Não existe formato universalmente melhor. Presença física é um recurso
 *    específico, não sinônimo de qualidade; online é outro modelo de
 *    entrega, não a versão barata. Um bom online supera um presencial mal
 *    estruturado, e vice-versa.
 * 2. Quatro respostas são possíveis, e "os dois funcionam" é uma delas.
 *    Forçar binário quando o perfil não pede seria inventar precisão.
 * 3. Quando os fatores apontam para lados diferentes, o motor MOSTRA o
 *    conflito em vez de escondê-lo atrás de um vencedor. Trade-off exposto
 *    vale mais que veredito falso.
 * 4. A recomendação nunca é ajustada para caber no que se tem a vender. Se
 *    o melhor encaixe é presencial numa região sem atendimento presencial,
 *    a resposta continua sendo presencial — muda o próximo passo, não o
 *    resultado.
 * 5. Orçamento nunca decide sozinho. Quem escolhe online só por ser mais
 *    barato, sem ter autonomia para treinar sozinho, está resolvendo o
 *    problema errado — e o motor diz isso.
 */

/* ------------------------------------------------------------------ *
 * Entradas
 * ------------------------------------------------------------------ */

export type Experiencia = 'nunca' | 'comecando' | 'voltando' | 'algunsMeses' | 'anos' | 'bastante';
export type Autonomia = 'seguranca' | 'maioria' | 'maisOuMenos' | 'perdido' | 'semIdeia';
export type Execucao = 'sim' | 'maioria' | 'alguns' | 'duvida' | 'nao';
export type Supervisao = 'quaseNenhuma' | 'asVezes' | 'frequentemente' | 'bastante' | 'naoSozinho';
export type VideoFeedback = 'muitoBem' | 'provavelmente' | 'incerto' | 'prefiroPresencial' | 'desconfortavel';
export type Objetivo = 'emagrecer' | 'massa' | 'forca' | 'voltar' | 'condicionamento' | 'saude' | 'outro';
export type HorarioFixo = 'facil' | 'maioria' | 'asVezesDificil' | 'bastanteDificil' | 'quaseImpossivel';
export type Deslocamento = 'nenhum' | 'ate10' | '10a20' | '20a30' | 'mais30' | 'naoSei';
export type Cobranca = 'quaseNada' | 'pouco' | 'moderado' | 'bastante' | 'semCobrancaParo';
export type Orcamento = 'pouco' | 'moderado' | 'bastante' | 'decisivo' | 'naoResponder';

/** O que a pessoa mais precisa do profissional. Até 3 escolhas. */
export type Prioridade =
  | 'presenca'
  | 'saberOQueFazer'
  | 'correcao'
  | 'progressao'
  | 'evolucao'
  | 'cobranca'
  | 'adaptacao'
  | 'duvidas'
  | 'motivacao';

export interface Respostas {
  experiencia: Experiencia;
  autonomia: Autonomia;
  execucao: Execucao;
  supervisao: Supervisao;
  videoFeedback: VideoFeedback;
  objetivo: Objetivo;
  /**
   * Reúne previsibilidade de rotina e disponibilidade para horário fixo.
   * As duas perguntas do briefing mediam o mesmo eixo — quem tem rotina
   * imprevisível não mantém horário marcado —, e a regra do projeto manda
   * remover pergunta que não muda o resultado.
   */
  horarioFixo: HorarioFixo;
  deslocamento: Deslocamento;
  cobranca: Cobranca;
  prioridades: Prioridade[];
  /** Opcional de verdade: 'naoResponder' é resposta legítima. */
  orcamento: Orcamento;
  /** Herdada de página local (#c=slug). Nunca muda a recomendação. */
  cidadeSlug?: string;
  cidadeNome?: string;
}

/* ------------------------------------------------------------------ *
 * Saídas
 * ------------------------------------------------------------------ */

export type Formato = 'presencial' | 'online' | 'hibrido' | 'ambos';

/** O eixo em que está o verdadeiro obstáculo da pessoa. */
export type Gargalo = 'supervisao' | 'planejamento' | 'flexibilidade' | 'constancia' | 'misto';

export interface ComparadorLinha {
  criterio: string;
  presencial: string;
  online: string;
  /** Marcado quando o critério pesou de fato nesta recomendação. */
  destaque?: boolean;
}

export type ConflitoId =
  | 'supervisaoVsAgenda'
  | 'supervisaoVsDeslocamento'
  | 'orcamentoVsNecessidade'
  | 'autonomiaVsPreferencia';

export interface Conflito {
  id: ConflitoId;
  titulo: string;
  texto: string;
}

export interface CompatibilidadeMontinho {
  /** O perfil combina com algum serviço oferecido? */
  combina: boolean;
  tipo: 'online' | 'presencial' | 'nenhum';
  motivo: string;
}

export interface ProximoPasso {
  texto: string;
  rotulo: string;
  url: string;
  /** Identificador para analytics. */
  destino: 'personalScore' | 'personalMatch' | 'preco' | 'cidade' | 'rotina';
}

export interface Resultado {
  formato: Formato;
  rotulo: string;
  /** Segunda melhor opção; `null` quando o resultado já é "os dois". */
  alternativa: Formato | null;
  rotuloAlternativa: string | null;
  /** Parágrafo personalizado, construído a partir das respostas. */
  porque: string;
  /** O benefício central deste formato para ESTE perfil. */
  principalBeneficio: string;
  /** O que este formato cobra em troca. Nunca omitido. */
  pontoDeAtencao: string;
  /** Os fatores que mais pesaram, em linguagem de gente. */
  principaisFatores: string[];
  /** Conflito real entre fatores, quando existe. */
  conflito: Conflito | null;
  /** O gargalo real, que é o insight que a pessoa leva embora. */
  gargalo: Gargalo;
  gargaloTexto: string;
  /** Só preenchido no resultado "ambos". */
  criterioDesempate: { presencialSe: string; onlineSe: string } | null;
  comparador: ComparadorLinha[];
  montinho: CompatibilidadeMontinho;
  proximoPasso: ProximoPasso;
  /** Passos secundários, sempre úteis mesmo sem encaixe comercial. */
  outrosPassos: ProximoPasso[];
  conteudo: { url: string; titulo: string }[];
  whatsapp: string;
  share: string;
  analytics: {
    recommendation: Formato;
    experience_level: Experiencia;
    autonomy_level: Autonomia;
    supervision_need: Supervisao;
    schedule_predictability: HorarioFixo;
    video_feedback_acceptance: VideoFeedback;
    goal: Objetivo;
    bottleneck: Gargalo;
    has_conflict: boolean;
  };
  /** Só em desenvolvimento — nunca renderizado em produção. */
  debug: { presencial: number; online: number; margem: number; gatilhos: string[] };
}

/* ------------------------------------------------------------------ *
 * Rótulos
 * ------------------------------------------------------------------ */

const ROTULO: Record<Formato, string> = {
  presencial: 'Personal presencial',
  online: 'Acompanhamento online',
  hibrido: 'Modelo híbrido',
  ambos: 'Os dois formatos podem funcionar',
};

const OBJETIVO_TXT: Record<Objetivo, string> = {
  emagrecer: 'emagrecer',
  massa: 'ganhar massa muscular',
  forca: 'ganhar força',
  voltar: 'voltar a treinar',
  condicionamento: 'melhorar o condicionamento',
  saude: 'melhorar saúde e disposição',
  outro: 'o seu objetivo',
};

const ARTIGOS = {
  online: { url: '/guias/personal-online-funciona/', titulo: 'Personal trainer online funciona?' },
  escolher: { url: '/guias/como-escolher-personal-trainer/', titulo: 'Como escolher um personal trainer' },
  academia: { url: '/guias/personal-trainer-em-academia/', titulo: 'Personal trainer em academia: como funciona' },
  domicilio: { url: '/guias/personal-trainer-a-domicilio/', titulo: 'Personal trainer a domicílio: como funciona' },
  custo: { url: '/guias/quanto-custa-personal-trainer/', titulo: 'Quanto custa um personal trainer' },
  primeiraAula: { url: '/guias/primeira-aula-com-personal-trainer/', titulo: 'Primeira aula com personal trainer' },
  frequencia: {
    url: '/guias/quantas-vezes-por-semana-personal-trainer/',
    titulo: 'Quantas vezes por semana treinar com personal',
  },
} as const;

/* ------------------------------------------------------------------ *
 * Pontuação
 * ------------------------------------------------------------------ */

interface Pontuacao {
  presencial: number;
  online: number;
  fatores: { texto: string; peso: number; lado: 'p' | 'o' }[];
  gatilhos: string[];
}

function pontuar(r: Respostas): Pontuacao {
  let presencial = 0;
  let online = 0;
  const fatores: Pontuacao['fatores'] = [];
  const gatilhos: string[] = [];

  const soma = (lado: 'p' | 'o', peso: number, texto: string, gatilho?: string) => {
    if (peso <= 0) return;
    if (lado === 'p') presencial += peso;
    else online += peso;
    fatores.push({ texto, peso, lado });
    if (gatilho) gatilhos.push(gatilho);
  };

  const prioridades = r.prioridades || [];

  /* --- O que a pessoa diz precisar: o sinal mais direto de todos --- */
  if (prioridades.includes('presenca'))
    soma('p', 4, 'você disse que precisa de alguém com você durante o treino', 'wants_presence');
  if (prioridades.includes('correcao'))
    soma('p', 2, 'você quer correção de execução', 'wants_correction');
  if (prioridades.includes('motivacao'))
    soma('p', 1.5, 'motivação durante a sessão está entre as suas prioridades');
  if (prioridades.includes('saberOQueFazer'))
    soma('o', 2.5, 'sua prioridade é saber exatamente o que fazer, e isso é planejamento', 'wants_plan');
  if (prioridades.includes('progressao'))
    soma('o', 2.5, 'você precisa de progressão de cargas organizada', 'wants_progression');
  if (prioridades.includes('evolucao'))
    soma('o', 2, 'você quer acompanhamento da evolução ao longo do tempo');
  if (prioridades.includes('adaptacao'))
    soma('o', 2.5, 'você precisa que o treino se adapte quando a rotina muda');
  if (prioridades.includes('duvidas'))
    soma('o', 1.5, 'tirar dúvidas está entre as suas prioridades, e isso funciona bem a distância');
  // Cobrança NÃO é exclusiva do presencial: online sério também cobra.
  if (prioridades.includes('cobranca'))
    soma('o', 1, 'você pediu cobrança de constância, que um bom acompanhamento faz também a distância');

  /* --- Necessidade de supervisão: puxa forte para presencial --- */
  const porSupervisao: Record<Supervisao, { p: number; o: number; txt: string; g?: string }> = {
    naoSozinho: { p: 4, o: 0, txt: 'você prefere não treinar sozinho', g: 'high_supervision_need' },
    bastante: { p: 3, o: 0, txt: 'você sente bastante necessidade de ter alguém ao lado', g: 'high_supervision_need' },
    frequentemente: { p: 2, o: 0, txt: 'você sente necessidade frequente de ter alguém ao lado' },
    asVezes: { p: 0.5, o: 0.5, txt: 'você sente necessidade ocasional de companhia no treino' },
    quaseNenhuma: { p: 0, o: 2, txt: 'você quase não sente necessidade de alguém ao lado', g: 'low_supervision_need' },
  };
  const sup = porSupervisao[r.supervisao];
  soma('p', sup.p, sup.txt, sup.g);
  soma('o', sup.o, sup.txt, sup.p ? undefined : sup.g);

  /* --- Autonomia: sabe o que fazer sozinho? --- */
  const porAutonomia: Record<Autonomia, { p: number; o: number; txt: string; g?: string }> = {
    semIdeia: { p: 3, o: 0, txt: 'você não saberia por onde começar sozinho', g: 'low_autonomy' },
    perdido: { p: 2.5, o: 0, txt: 'você se sente bastante perdido treinando sozinho', g: 'low_autonomy' },
    maisOuMenos: { p: 1, o: 0.5, txt: 'você se vira mais ou menos sozinho na academia' },
    maioria: { p: 0, o: 2, txt: 'você sabe o que fazer na maior parte das vezes', g: 'high_autonomy' },
    seguranca: { p: 0, o: 2.5, txt: 'você entra na academia sabendo exatamente o que fazer', g: 'high_autonomy' },
  };
  const aut = porAutonomia[r.autonomia];
  soma('p', aut.p, aut.txt, aut.g);
  soma('o', aut.o, aut.txt, aut.p ? undefined : aut.g);

  /* --- Segurança com a execução (percepção, não diagnóstico técnico) --- */
  const porExecucao: Record<Execucao, { p: number; o: number; txt: string }> = {
    nao: { p: 2.5, o: 0, txt: 'você não se sente seguro com a execução dos exercícios' },
    duvida: { p: 2, o: 0, txt: 'você tem bastante dúvida sobre a própria execução' },
    alguns: { p: 1, o: 0.5, txt: 'você se sente seguro na execução de alguns exercícios' },
    maioria: { p: 0, o: 1, txt: 'você se sente seguro na execução da maioria dos exercícios' },
    sim: { p: 0, o: 1.5, txt: 'você se sente seguro com a execução dos exercícios' },
  };
  const exe = porExecucao[r.execucao];
  soma('p', exe.p, exe.txt);
  soma('o', exe.o, exe.txt);

  /* --- Aceitação de correção remota: o divisor real online × presencial --- */
  const porVideo: Record<VideoFeedback, { p: number; o: number; txt: string; g?: string }> = {
    desconfortavel: {
      p: 3,
      o: 0,
      txt: 'você não se sentiria confortável recebendo correção por vídeo',
      g: 'rejects_video_feedback',
    },
    prefiroPresencial: { p: 2, o: 0, txt: 'você prefere correção presencial à correção por vídeo' },
    incerto: { p: 0.5, o: 0.5, txt: 'você não tem certeza sobre correção por vídeo' },
    provavelmente: { p: 0, o: 1.5, txt: 'correção por vídeo provavelmente funcionaria para você' },
    muitoBem: { p: 0, o: 2.5, txt: 'correção por vídeo funcionaria bem para você', g: 'accepts_video_feedback' },
  };
  const vid = porVideo[r.videoFeedback];
  soma('p', vid.p, vid.txt, vid.g);
  soma('o', vid.o, vid.txt, vid.p ? undefined : vid.g);

  /* --- Experiência --- */
  const porExperiencia: Record<Experiencia, { p: number; o: number; txt: string }> = {
    nunca: { p: 3, o: 0, txt: 'você nunca treinou de verdade' },
    comecando: { p: 2, o: 0, txt: 'você está começando agora' },
    voltando: { p: 0.5, o: 1, txt: 'você está voltando a treinar depois de um tempo' },
    algunsMeses: { p: 0, o: 1.5, txt: 'você treina há alguns meses' },
    anos: { p: 0, o: 2, txt: 'você treina regularmente há anos' },
    bastante: { p: 0, o: 2.5, txt: 'você tem bastante experiência com musculação' },
  };
  const exp = porExperiencia[r.experiencia];
  soma('p', exp.p, exp.txt);
  soma('o', exp.o, exp.txt);

  /* --- Logística: horário fixo --- */
  const porHorario: Record<HorarioFixo, { p: number; o: number; txt: string; g?: string }> = {
    quaseImpossivel: {
      p: 0,
      o: 3.5,
      txt: 'manter horário fixo com um profissional seria quase impossível para você',
      g: 'no_fixed_schedule',
    },
    bastanteDificil: { p: 0, o: 2.5, txt: 'manter horário fixo seria bastante difícil', g: 'no_fixed_schedule' },
    asVezesDificil: { p: 0, o: 1, txt: 'às vezes seria difícil manter horário fixo' },
    maioria: { p: 0.5, o: 0, txt: 'você conseguiria manter horário fixo na maioria das semanas' },
    facil: { p: 1.5, o: 0, txt: 'você conseguiria manter horários fixos com facilidade', g: 'fixed_schedule_ok' },
  };
  const hor = porHorario[r.horarioFixo];
  soma('p', hor.p, hor.txt, hor.p ? hor.g : undefined);
  soma('o', hor.o, hor.txt, hor.o ? hor.g : undefined);

  /* --- Logística: deslocamento --- */
  const porDeslocamento: Record<Deslocamento, { p: number; o: number; txt: string; g?: string }> = {
    nenhum: { p: 0, o: 2.5, txt: 'você não aceitaria deslocamento para treinar', g: 'no_travel' },
    ate10: { p: 0, o: 0.5, txt: 'você aceitaria até 10 minutos de deslocamento' },
    '10a20': { p: 0.5, o: 0, txt: 'você aceitaria de 10 a 20 minutos de deslocamento' },
    '20a30': { p: 1, o: 0, txt: 'você aceitaria de 20 a 30 minutos de deslocamento' },
    mais30: { p: 1.5, o: 0, txt: 'você aceitaria mais de 30 minutos de deslocamento' },
    naoSei: { p: 0, o: 0, txt: '' },
  };
  const des = porDeslocamento[r.deslocamento];
  if (des.txt) {
    soma('p', des.p, des.txt);
    soma('o', des.o, des.txt, des.g);
  }

  /* --- Accountability: existe nos dois formatos, com pesos parecidos --- */
  const porCobranca: Record<Cobranca, { p: number; o: number; txt: string }> = {
    semCobrancaParo: { p: 1, o: 1, txt: 'sem cobrança externa, você normalmente para' },
    bastante: { p: 0.5, o: 0.5, txt: 'você precisa bastante de alguém cobrando sua constância' },
    moderado: { p: 0, o: 0, txt: '' },
    pouco: { p: 0, o: 0, txt: '' },
    quaseNada: { p: 0, o: 0.5, txt: 'você quase não precisa de cobrança externa' },
  };
  const cob = porCobranca[r.cobranca];
  if (cob.txt) {
    soma('p', cob.p, cob.txt);
    soma('o', cob.o, cob.txt);
  }

  /*
   * --- Orçamento: peso baixo e com trava ---
   *
   * Preço não pode decidir formato. Quando a pessoa diz que o investimento
   * é decisivo MAS não tem autonomia para treinar sozinha, o desconto do
   * online resolveria o problema errado — então a contribuição é anulada e
   * o conflito é reportado no resultado.
   */
  const autonomiaBaixa = r.autonomia === 'perdido' || r.autonomia === 'semIdeia';
  const porOrcamento: Record<Orcamento, number> = {
    decisivo: 1.5,
    bastante: 1,
    moderado: 0.5,
    pouco: 0,
    naoResponder: 0,
  };
  const pesoOrcamento = autonomiaBaixa ? 0 : porOrcamento[r.orcamento];
  if (pesoOrcamento > 0) {
    soma('o', pesoOrcamento, 'o investimento mensal pesa na sua decisão');
  }
  if (autonomiaBaixa && (r.orcamento === 'decisivo' || r.orcamento === 'bastante')) {
    gatilhos.push('budget_suppressed_low_autonomy');
  }

  return { presencial, online, fatores, gatilhos };
}

/* ------------------------------------------------------------------ *
 * Conflitos — o que o briefing chama de "mostrar o trade-off"
 * ------------------------------------------------------------------ */

function detectarConflito(r: Respostas, p: Pontuacao): Conflito | null {
  /*
   * "Precisa de supervisão" tem que ser um sinal forte, não qualquer
   * indício. Autonomia baixa sozinha não basta: quem não sabe montar treino
   * mas executa com segurança resolve isso com planejamento, não com
   * presença. Exigir os dois sinais evita que o híbrido — a resposta
   * confortável — vire a saída padrão do motor.
   */
  const supervisaoForte = r.supervisao === 'bastante' || r.supervisao === 'naoSozinho';
  const inseguroTecnico =
    (r.autonomia === 'perdido' || r.autonomia === 'semIdeia') &&
    (r.execucao === 'nao' || r.execucao === 'duvida');
  const precisaSupervisao = supervisaoForte || inseguroTecnico;
  const agendaTravada = r.horarioFixo === 'quaseImpossivel' || r.horarioFixo === 'bastanteDificil';
  const semDeslocamento = r.deslocamento === 'nenhum';
  const autonomiaBaixa = r.autonomia === 'perdido' || r.autonomia === 'semIdeia';

  // 1. Precisa de presença, mas a agenda não comporta compromisso fixo.
  if (precisaSupervisao && agendaTravada) {
    p.gatilhos.push('conflict_supervision_vs_schedule');
    return {
      id: 'supervisaoVsAgenda',
      titulo: 'Sua necessidade aponta para presencial, mas sua rotina aponta para online',
      texto:
        'Você relatou precisar de supervisão durante o treino e, ao mesmo tempo, que manter horário fixo com um profissional seria difícil. Esses dois fatos puxam para lados opostos, e ignorar um deles produziria uma recomendação que não sobrevive à sua semana real. O caminho que costuma resolver os dois é combinar sessões presenciais pontuais — para execução e ajuste técnico — com planejamento e acompanhamento a distância no resto do tempo.',
    };
  }

  // 2. Precisa de presença, mas não aceita nenhum deslocamento.
  if (precisaSupervisao && semDeslocamento) {
    p.gatilhos.push('conflict_supervision_vs_travel');
    return {
      id: 'supervisaoVsDeslocamento',
      titulo: 'Você precisa de supervisão, mas não quer se deslocar',
      texto:
        'Supervisão presencial exige que alguém e você estejam no mesmo lugar. Se você não aceita deslocamento, restam duas saídas honestas: o profissional ir até você (atendimento a domicílio ou no condomínio, que costuma custar mais) ou treinar em um local que já faça parte do seu dia. Vale considerar as duas antes de descartar o presencial por causa da distância.',
    };
  }

  // 3. Preço decidindo o que a necessidade contradiz.
  if (autonomiaBaixa && (r.orcamento === 'decisivo' || r.orcamento === 'bastante')) {
    p.gatilhos.push('conflict_budget_vs_need');
    return {
      id: 'orcamentoVsNecessidade',
      titulo: 'Cuidado para o preço não decidir sozinho',
      texto:
        'Você disse que o investimento pesa bastante na decisão e, ao mesmo tempo, que ainda não saberia se virar sozinho na academia. O acompanhamento online costuma custar menos, mas ele parte do princípio de que você consegue executar o treino sem ninguém do lado. Se essa parte ainda não está de pé, o formato mais barato pode acabar sendo o mais caro — porque não é usado. Uma alternativa comum é começar presencial com frequência baixa e migrar depois.',
    };
  }

  // 4. Autonomia alta, mas gosta de presença — presencial continua legítimo.
  const autonomiaAlta = r.autonomia === 'seguranca' || r.autonomia === 'maioria';
  const querPresenca = (r.prioridades || []).includes('presenca') || r.supervisao === 'bastante' || r.supervisao === 'naoSozinho';
  if (autonomiaAlta && querPresenca) {
    p.gatilhos.push('conflict_autonomy_vs_preference');
    return {
      id: 'autonomiaVsPreferencia',
      titulo: 'Você não precisa de presença — mas quer',
      texto:
        'Pela sua autonomia, você conseguiria treinar bem com acompanhamento a distância. Só que você também disse que valoriza ter alguém junto durante a sessão, e isso é uma preferência legítima, não um erro a ser corrigido. Presença física não deixa de valer porque você já sabe treinar: ela passa a entregar outra coisa — ritmo, companhia e ajuste fino na hora. Vale escolher sabendo que está pagando por isso, e não por necessidade técnica.',
    };
  }

  return null;
}

/* ------------------------------------------------------------------ *
 * Gargalo — o insight que a pessoa leva embora
 * ------------------------------------------------------------------ */

function definirGargalo(r: Respostas): { id: Gargalo; texto: string } {
  const prio = r.prioridades || [];
  const precisaSupervisao =
    r.supervisao === 'bastante' ||
    r.supervisao === 'naoSozinho' ||
    r.autonomia === 'perdido' ||
    r.autonomia === 'semIdeia' ||
    r.execucao === 'nao' ||
    r.execucao === 'duvida';
  const precisaPlano =
    prio.includes('saberOQueFazer') || prio.includes('progressao') || prio.includes('evolucao');
  const precisaFlex =
    r.horarioFixo === 'quaseImpossivel' || r.horarioFixo === 'bastanteDificil' || prio.includes('adaptacao');
  const precisaConstancia = r.cobranca === 'semCobrancaParo' || prio.includes('cobranca');

  const quantos = [precisaSupervisao, precisaPlano, precisaFlex, precisaConstancia].filter(Boolean).length;
  if (quantos >= 3) {
    return {
      id: 'misto',
      texto:
        'O seu obstáculo não é um só: aparecem ao mesmo tempo necessidade de suporte técnico, de planejamento e de uma estrutura que aguente semanas irregulares. Isso não é indecisão sua — é um cenário comum em quem está recomeçando. A consequência prática é que vale priorizar um deles primeiro, em vez de tentar resolver tudo na mesma semana.',
    };
  }
  if (precisaSupervisao) {
    return {
      id: 'supervisao',
      texto:
        'O seu maior gargalo é supervisão. O que trava o seu treino hoje não é falta de informação — é a insegurança de executar sem alguém por perto para confirmar. Enquanto isso não é resolvido, nenhum planejamento sozinho vai render o que poderia.',
    };
  }
  if (precisaFlex && !precisaPlano) {
    return {
      id: 'flexibilidade',
      texto:
        'O seu maior gargalo é flexibilidade. Você já tem condições de treinar; o que quebra a rotina é o compromisso fixo, que a sua semana não sustenta. O formato que resolve isso é o que continua funcionando quando o horário muda.',
    };
  }
  if (precisaPlano) {
    return {
      id: 'planejamento',
      texto:
        'O seu maior gargalo é planejamento. Você consegue executar, mas falta a estrutura por trás: o que fazer, em que ordem, com que carga e quando mudar. Pagar pela presença física em todas as sessões não resolveria isso — quem resolve é quem organiza o programa e acompanha a progressão.',
    };
  }
  if (precisaConstancia) {
    return {
      id: 'constancia',
      texto:
        'O seu maior gargalo é constância. O treino em si não é o problema; o problema é manter a sequência quando a semana aperta. Vale saber que cobrança e acompanhamento existem nos dois formatos — não é preciso pagar por presença física só para ter alguém olhando.',
    };
  }
  return {
    id: 'misto',
    texto:
      'Nenhum obstáculo se destacou com força nas suas respostas, o que costuma significar que você está em condições razoáveis nos dois eixos: consegue executar e consegue se organizar. Nesse cenário, a escolha do formato é mais sobre preferência e logística do que sobre necessidade.',
  };
}

/* ------------------------------------------------------------------ *
 * Comparador — nunca sugere que planejamento é exclusivo do online
 * ------------------------------------------------------------------ */

function montarComparador(r: Respostas, formato: Formato): ComparadorLinha[] {
  const destacarSupervisao = r.supervisao !== 'quaseNenhuma' || formato === 'presencial';
  const destacarAgenda = r.horarioFixo === 'quaseImpossivel' || r.horarioFixo === 'bastanteDificil';
  const destacarDeslocamento = r.deslocamento === 'nenhum' || r.deslocamento === 'ate10';

  return [
    {
      criterio: 'Alguém junto durante a sessão',
      presencial: 'Sim, é o que o formato entrega',
      online: 'Não',
      destaque: destacarSupervisao,
    },
    {
      criterio: 'Correção de execução',
      presencial: 'Na hora, durante o exercício',
      online: 'Por vídeo, com análise depois',
      destaque: r.videoFeedback === 'desconfortavel' || r.videoFeedback === 'prefiroPresencial',
    },
    {
      criterio: 'Flexibilidade de horário',
      presencial: 'Menor: depende de agenda combinada',
      online: 'Maior: você treina quando dá',
      destaque: destacarAgenda,
    },
    {
      criterio: 'Deslocamento',
      presencial: 'Normalmente necessário, de um lado ou do outro',
      online: 'Não é necessário',
      destaque: destacarDeslocamento,
    },
    // As três linhas abaixo existem para desfazer o mito mais comum:
    // planejamento e progressão não pertencem a um formato só.
    { criterio: 'Planejamento do treino', presencial: 'Pode existir', online: 'Pode existir' },
    { criterio: 'Progressão organizada', presencial: 'Pode existir', online: 'Pode existir' },
    { criterio: 'Cobrança de constância', presencial: 'Pode existir', online: 'Pode existir' },
    { criterio: 'Custo', presencial: 'Varia bastante', online: 'Varia bastante' },
  ];
}

/* ------------------------------------------------------------------ *
 * Compatibilidade com o Montinho — sem nunca torcer o resultado
 * ------------------------------------------------------------------ */

function definirMontinho(
  formato: Formato,
  cobertura: 'atende' | 'condicional' | 'fora',
): CompatibilidadeMontinho {
  if (formato === 'online') {
    return {
      combina: true,
      tipo: 'online',
      motivo:
        'Você já tem autonomia para treinar e parece precisar principalmente de planejamento, acompanhamento e ajustes — que é exatamente o que um acompanhamento online entrega. O Montinho Personal, profissional ligado a este projeto, trabalha nesse formato.',
    };
  }
  if ((formato === 'presencial' || formato === 'hibrido' || formato === 'ambos') && cobertura === 'atende') {
    return {
      combina: true,
      tipo: 'presencial',
      motivo:
        'A sua região está dentro da área de atendimento presencial do Montinho Personal, profissional ligado a este projeto. Dá para combinar as sessões presenciais conforme agenda e local.',
    };
  }
  if ((formato === 'presencial' || formato === 'hibrido' || formato === 'ambos') && cobertura === 'condicional') {
    return {
      combina: true,
      tipo: 'presencial',
      motivo:
        'O atendimento presencial do Montinho Personal, profissional ligado a este projeto, pode alcançar a sua região dependendo do ponto exato e do horário — vale confirmar antes de contar com isso.',
    };
  }
  if (formato === 'hibrido' || formato === 'ambos') {
    return {
      combina: true,
      tipo: 'online',
      motivo:
        'A parte de planejamento e acompanhamento do seu caso pode ser resolvida a distância pelo Montinho Personal, profissional ligado a este projeto. As sessões presenciais, você contrataria com alguém da sua região.',
    };
  }
  // Presencial fora da área: nada a oferecer, e dizer isso é o correto.
  return {
    combina: false,
    tipo: 'nenhum',
    motivo:
      'O melhor encaixe para você é o acompanhamento presencial, e o Montinho Personal não atende presencialmente a sua região. Em vez de empurrar um formato que não é o seu, o próximo passo abaixo ajuda você a escolher bem um profissional aí perto.',
  };
}

/* ------------------------------------------------------------------ *
 * Próximo passo
 * ------------------------------------------------------------------ */

function definirPassos(
  r: Respostas,
  formato: Formato,
  montinho: CompatibilidadeMontinho,
): { principal: ProximoPasso; outros: ProximoPasso[] } {
  const cidade = r.cidadeSlug;

  const passoScore: ProximoPasso = {
    texto:
      'O formato não determina a qualidade. Individualização, progressão, acompanhamento e comunicação importam igualmente no presencial e no online — e é isso que separa um bom acompanhamento de uma ficha entregue.',
    rotulo: 'Ver o que um bom acompanhamento deveria oferecer',
    url: '/ferramentas/personal-score/',
    destino: 'personalScore',
  };

  const passoMatch: ProximoPasso = {
    texto:
      'Se quiser aprofundar a análise, o diagnóstico completo cruza objetivo, dias disponíveis, local de treino e o seu maior obstáculo para desenhar a estrutura de acompanhamento.',
    rotulo: 'Aprofundar no diagnóstico completo',
    url: '/ferramentas/encontre-seu-personal-ideal/',
    destino: 'personalMatch',
  };

  const passoPreco: ProximoPasso = {
    texto: 'Para comparar o custo dos formatos na sua região, com a conta aberta.',
    rotulo: 'Ver quanto pode custar',
    url: '/ferramentas/calculadora-preco-personal/',
    destino: 'preco',
  };

  const passoCidade: ProximoPasso | null = cidade
    ? {
        texto:
          'Como o presencial faz mais sentido no seu caso, vale ver o cenário de treino da sua região: academias, parques e as faixas de preço praticadas por lá.',
        rotulo: r.cidadeNome ? `Ver onde treinar em ${r.cidadeNome}` : 'Ver onde treinar na sua região',
        url: `/personal-trainer/${cidade}/`,
        destino: 'cidade',
      }
    : null;

  const passoRotina: ProximoPasso = {
    texto:
      'Antes de contratar qualquer formato, vale desenhar a estrutura que cabe nos dias que você realmente tem — assim a conversa com o profissional começa de um lugar concreto.',
    rotulo: 'Montar treino para minha rotina',
    url: '/ferramentas/treino-para-minha-rotina/',
    destino: 'rotina',
  };

  // Presencial sem cobertura: o passo principal é ajudar a escolher bem.
  if (formato === 'presencial' && !montinho.combina) {
    return {
      principal: passoScore,
      outros: [passoCidade, passoPreco, passoMatch].filter(Boolean) as ProximoPasso[],
    };
  }

  if (formato === 'presencial') {
    return {
      principal: passoCidade ?? passoScore,
      outros: [passoScore, passoPreco, passoMatch].filter(Boolean) as ProximoPasso[],
    };
  }

  if (formato === 'ambos') {
    return { principal: passoPreco, outros: [passoScore, passoMatch, passoRotina] };
  }

  if (formato === 'hibrido') {
    return { principal: passoMatch, outros: [passoScore, passoPreco, passoRotina] };
  }

  // Online
  return { principal: passoScore, outros: [passoMatch, passoPreco, passoRotina] };
}

/* ------------------------------------------------------------------ *
 * Textos do resultado
 * ------------------------------------------------------------------ */

const BENEFICIO: Record<Formato, string> = {
  presencial: 'presença e correção durante a própria sessão',
  online: 'planejamento contínuo sem depender de horário marcado',
  hibrido: 'supervisão onde ela é necessária, flexibilidade no resto do tempo',
  ambos: 'você escolhe pelo que valoriza, sem abrir mão do essencial',
};

const ATENCAO: Record<Formato, string> = {
  presencial:
    'O presencial normalmente exige compatibilidade de horários e algum deslocamento — de você até o profissional, ou dele até você, o que costuma pesar no preço.',
  online:
    'O online supõe que você consiga executar o treino sozinho e registrar o que fez. Sem esse registro, nenhum profissional consegue ajustar nada a distância.',
  hibrido:
    'O híbrido só funciona se as duas partes forem combinadas de forma explícita: quantas sessões presenciais, com que frequência e o que acontece entre elas. Sem isso, ele vira um presencial esparso sem acompanhamento.',
  ambos:
    'Quando os dois formatos servem, o risco deixa de ser a escolha e passa a ser a qualidade de quem você contrata. Um online bem estruturado supera um presencial mal feito, e o contrário também é verdade.',
};

/* ------------------------------------------------------------------ *
 * Motor
 * ------------------------------------------------------------------ */

export function recomendarFormato(
  r: Respostas,
  cobertura: 'atende' | 'condicional' | 'fora' = 'fora',
): Resultado {
  const p = pontuar(r);
  const margem = Math.abs(p.presencial - p.online);
  const conflito = detectarConflito(r, p);

  /*
   * Decisão do formato.
   *
   * A diferença entre "híbrido" e "ambos" é real e importa: híbrido é
   * COMBINAR os dois porque há demanda verdadeira dos dois lados; "ambos"
   * é dizer que qualquer um dos dois resolveria, e a escolha passa a ser
   * de preferência. Colapsar os dois casos numa resposta só esconderia
   * informação útil.
   */
  let formato: Formato;
  /*
   * Híbrido por empate só quando os DOIS lados pontuam alto de verdade e a
   * diferença é pequena. Limiares mais frouxos (5 pontos, margem 3) faziam
   * o híbrido responder a 55% dos perfis numa varredura combinatória — a
   * resposta confortável virando padrão. Com 7 e margem 2, os quatro
   * resultados ficam alcançáveis e nenhum passa de 36%.
   */
  const ambosAltos = p.presencial >= 7 && p.online >= 7;

  // Conflitos logísticos são estruturais: a pessoa precisa de presença e a
  // vida dela não comporta presença em toda sessão. Combinar é a saída.
  const conflitoEstrutural =
    conflito?.id === 'supervisaoVsAgenda' || conflito?.id === 'supervisaoVsDeslocamento';

  /*
   * O caso híbrido clássico: autonomia suficiente para treinar sozinho, mas
   * preferência declarada por correção presencial em vez de vídeo. Não é
   * conflito nem empate — é demanda real e simultânea por planejamento
   * remoto e checagem técnica presencial periódica.
   */
  const autonomiaAlta = r.autonomia === 'seguranca' || r.autonomia === 'maioria';
  const querCorrecaoPresencial =
    r.videoFeedback === 'prefiroPresencial' || r.videoFeedback === 'desconfortavel';
  const supervisaoConstante = r.supervisao === 'bastante' || r.supervisao === 'naoSozinho';
  const correcaoPeriodica = autonomiaAlta && querCorrecaoPresencial && !supervisaoConstante;
  if (correcaoPeriodica) p.gatilhos.push('periodic_in_person_correction');

  if (conflitoEstrutural || correcaoPeriodica) {
    formato = 'hibrido';
  } else if (ambosAltos && margem < 2) {
    formato = 'hibrido';
  } else if (margem < 1.5) {
    formato = 'ambos';
  } else {
    formato = p.presencial > p.online ? 'presencial' : 'online';
  }

  /* --- Alternativa --- */
  let alternativa: Formato | null;
  if (formato === 'ambos') alternativa = null;
  else if (formato === 'hibrido') alternativa = p.presencial >= p.online ? 'presencial' : 'online';
  else if (margem < 3) alternativa = 'hibrido';
  else alternativa = formato === 'presencial' ? 'hibrido' : 'hibrido';

  /* --- Fatores que mais pesaram, do lado que venceu --- */
  const ladoVencedor: 'p' | 'o' = p.presencial >= p.online ? 'p' : 'o';
  const principaisFatores = [...p.fatores]
    .sort((a, b) => b.peso - a.peso)
    .filter((f) => (formato === 'ambos' || formato === 'hibrido' ? true : f.lado === ladoVencedor))
    .slice(0, 3)
    .map((f) => f.texto);

  const gargalo = definirGargalo(r);

  /* --- Parágrafo do "por quê", montado com as respostas da pessoa --- */
  const lista = (itens: string[]) =>
    itens.length <= 1
      ? itens[0] ?? ''
      : `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`;

  const objetivoTxt = OBJETIVO_TXT[r.objetivo];
  const base = `Você disse que ${lista(principaisFatores)}.`;

  const fecho: Record<Formato, string> = {
    presencial: ` Para quem está nesse ponto, ter alguém presente durante a sessão costuma trazer mais confiança e feedback imediato do que qualquer plano bem escrito. Com o objetivo de ${objetivoTxt}, é o que tende a render mais agora.`,
    online: ` Nesse cenário, pagar pela presença física em todas as sessões provavelmente não é o que vai destravar o seu resultado — o ganho maior está em ter o programa organizado e revisado ao longo do tempo, com o objetivo de ${objetivoTxt} em vista.`,
    hibrido: ` Os seus fatores não apontam todos para o mesmo lado, e é por isso que a combinação faz sentido: sessões presenciais onde a supervisão importa, acompanhamento a distância no resto do tempo, com o objetivo de ${objetivoTxt} conduzindo o plano.`,
    ambos: ` Nenhum dos dois lados pesou o suficiente para descartar o outro. Com o objetivo de ${objetivoTxt}, os dois formatos podem funcionar — a escolha passa a ser sobre o que você valoriza mais.`,
  };

  const porque = base + fecho[formato];

  /* --- Critério de desempate, quando o resultado é "ambos" --- */
  const criterioDesempate =
    formato === 'ambos'
      ? {
          presencialSe:
            'Você valoriza ter companhia e ritmo durante a sessão, consegue manter horários combinados e o deslocamento não é um problema real na sua semana.',
          onlineSe:
            'Você prefere treinar no seu tempo, quer poder mudar o horário sem avisar ninguém e valoriza mais o planejamento e a progressão do que a presença física.',
        }
      : null;

  /* --- Conteúdo --- */
  const conteudo: { url: string; titulo: string }[] = [];
  if (formato === 'online' || formato === 'hibrido' || formato === 'ambos') conteudo.push(ARTIGOS.online);
  if (formato === 'presencial' || formato === 'hibrido' || formato === 'ambos') {
    conteudo.push(r.deslocamento === 'nenhum' ? ARTIGOS.domicilio : ARTIGOS.academia);
  }
  conteudo.push(ARTIGOS.escolher);
  if (r.experiencia === 'nunca' || r.experiencia === 'comecando') conteudo.push(ARTIGOS.primeiraAula);
  if (r.orcamento === 'decisivo' || r.orcamento === 'bastante') conteudo.push(ARTIGOS.custo);
  const vistos = new Set<string>();
  const conteudoUnico = conteudo.filter((c) => (vistos.has(c.url) ? false : (vistos.add(c.url), true))).slice(0, 3);

  const montinho = definirMontinho(formato, cobertura);
  const passos = definirPassos(r, formato, montinho);

  /* --- WhatsApp: contextual, sem PII e sem exagero --- */
  const whatsapp = montarWhatsapp(r, formato, gargalo.id, montinho, cobertura);

  const share =
    formato === 'ambos'
      ? 'Fiz o teste "presencial ou online" no Personal por Perto e descobri que os dois formatos funcionariam para mim. Faça o seu: https://www.personalporperto.com.br/ferramentas/presencial-ou-online/'
      : `Fiz o teste "presencial ou online" no Personal por Perto e o resultado foi ${ROTULO[formato].toLowerCase()}. Faça o seu: https://www.personalporperto.com.br/ferramentas/presencial-ou-online/`;

  return {
    formato,
    rotulo: ROTULO[formato],
    alternativa,
    rotuloAlternativa: alternativa ? ROTULO[alternativa] : null,
    porque,
    principalBeneficio: BENEFICIO[formato],
    pontoDeAtencao: ATENCAO[formato],
    principaisFatores,
    conflito,
    gargalo: gargalo.id,
    gargaloTexto: gargalo.texto,
    criterioDesempate,
    comparador: montarComparador(r, formato),
    montinho,
    proximoPasso: passos.principal,
    outrosPassos: passos.outros,
    conteudo: conteudoUnico,
    whatsapp,
    share,
    analytics: {
      recommendation: formato,
      experience_level: r.experiencia,
      autonomy_level: r.autonomia,
      supervision_need: r.supervisao,
      schedule_predictability: r.horarioFixo,
      video_feedback_acceptance: r.videoFeedback,
      goal: r.objetivo,
      bottleneck: gargalo.id,
      has_conflict: Boolean(conflito),
    },
    debug: {
      presencial: Math.round(p.presencial * 10) / 10,
      online: Math.round(p.online * 10) / 10,
      margem: Math.round(margem * 10) / 10,
      gatilhos: p.gatilhos,
    },
  };
}

function montarWhatsapp(
  r: Respostas,
  formato: Formato,
  gargalo: Gargalo,
  montinho: CompatibilidadeMontinho,
  cobertura: 'atende' | 'condicional' | 'fora',
): string {
  const abertura = 'Oi, Montinho! Fiz o teste "presencial ou online" no Personal por Perto.';

  const porGargalo: Record<Gargalo, string> = {
    supervisao: 'ainda preciso de supervisão para treinar com segurança',
    planejamento: 'já treino sozinho e preciso principalmente de planejamento, progressão e ajustes',
    flexibilidade: 'minha rotina muda muito e preciso de um acompanhamento que aguente isso',
    constancia: 'meu maior problema é manter a constância',
    misto: 'aparecem várias necessidades ao mesmo tempo no meu caso',
  };

  if (formato === 'online' || (montinho.tipo === 'online' && formato !== 'presencial')) {
    return [
      abertura,
      '',
      `O resultado indicou acompanhamento online porque ${porGargalo[gargalo]}.`,
      '',
      'Queria entender como funciona a sua consultoria.',
    ].join('\n');
  }

  if (montinho.tipo === 'presencial') {
    const onde = cobertura === 'condicional' ? 'Vi que o presencial talvez alcance a minha região' : 'Vi que você atende a minha região';
    return [
      abertura,
      '',
      `O resultado indicou que, pelo meu momento, ${formato === 'hibrido' ? 'um modelo híbrido' : 'supervisão presencial'} faz mais sentido — ${porGargalo[gargalo]}.`,
      '',
      `${onde} e queria entender como funciona.`,
    ].join('\n');
  }

  return [
    abertura,
    '',
    `O resultado indicou acompanhamento presencial, e entendi que você não atende presencialmente a minha região.`,
    '',
    'Queria entender o que vale procurar em um profissional aqui perto.',
  ].join('\n');
}

export const rotulosFormato = ROTULO;
