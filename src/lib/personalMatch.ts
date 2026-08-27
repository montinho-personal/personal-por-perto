/**
 * personalMatchEngine — motor de recomendação da ferramenta
 * "Encontre seu Personal Ideal".
 *
 * Regras determinísticas, zero dependências, zero DOM: roda igual no build
 * (para testes) e no navegador (bundle do quiz). A UI não decide nada —
 * ela apenas coleta respostas e renderiza o que sai daqui. Assim o algoritmo
 * pode evoluir sem tocar no front-end.
 *
 * Filosofia: não existe treino perfeito isolado; existe o acompanhamento
 * adequado à rotina, à experiência e ao objetivo daquela pessoa agora.
 * O motor cruza os fatores e monta blocos combináveis de texto — nunca
 * um parágrafo genérico igual para todo mundo.
 */
import { coberturaPresencial } from '../data/atendimentoPresencial';

/* ------------------------------------------------------------------ *
 * Entradas
 * ------------------------------------------------------------------ */

export type Objetivo =
  | 'emagrecer'
  | 'massa'
  | 'definir'
  | 'voltar'
  | 'condicionamento'
  | 'longevidade'
  | 'desempenho';

export type Experiencia = 'nunca' | 'comecando' | 'voltando' | 'algumTempo' | 'experiente' | 'parado';

export type Dias = '2' | '3' | '4' | '5' | '6+' | 'naoSei';

export type Tempo = 'ate30' | '30a45' | '45a60' | '60a90' | 'mais90' | 'varia';

export type Local = 'academia' | 'condominio' | 'casa' | 'arLivre' | 'escolhendo' | 'varia';

export type Dificuldade =
  | 'constancia'
  | 'naoSeiFazer'
  | 'naoSeiSeCerto'
  | 'tempo'
  | 'semResultado'
  | 'desanimo'
  | 'rotinaMuda'
  | 'progressao'
  | 'recomecando';

export type Espera =
  | 'presenca'
  | 'montarTreino'
  | 'evolucao'
  | 'execucao'
  | 'cobranca'
  | 'adaptacao';

/**
 * Limitação física declarada. Não é triagem clínica: a ferramenta nunca
 * pergunta qual é a condição nem diagnostica nada — só ajusta a orientação
 * e reforça a ressalva de médico/fisioterapeuta.
 */
export type Limitacao = 'nao' | 'sim' | 'profissional';

export interface MatchRespostas {
  objetivo: Objetivo;
  experiencia: Experiencia;
  dias: Dias;
  tempo: Tempo;
  local: Local;
  dificuldade: Dificuldade;
  /** Até 2 prioridades. */
  espera: Espera[];
  /** Opcional: existe dor/condição a considerar? (nunca perguntamos qual) */
  limitacao?: Limitacao;
  /** Localização é opcional — a pessoa pode pular. */
  cidadeSlug?: string;
  cidadeNome?: string;
  uf?: string;
}

/* ------------------------------------------------------------------ *
 * Saída
 * ------------------------------------------------------------------ */

export type Modelo = 'presencial' | 'online' | 'hibrido';

/**
 * Painel de dimensões (0–100). Nomes escolhidos para nunca soarem clínicos
 * nem virarem julgamento: medem cenário, não a pessoa.
 */
export interface Dimensoes {
  /** O quanto a pessoa já executa sozinha com segurança. */
  autonomia: number;
  /** O quanto supervisão próxima tende a ajudar agora. */
  supervisao: number;
  /** O quanto o plano precisa sobreviver a semanas diferentes. */
  flexibilidade: number;
  /** O quanto a constância já está construída hoje. */
  constancia: number;
}

/** Linha do comparador presencial × online × híbrido. */
export interface ComparadorLinha {
  criterio: string;
  presencial: string;
  online: string;
  hibrido: string;
}

export interface MatchResultado {
  /** Arquétipo em linguagem de gente (nunca o nome técnico interno). */
  perfil: string;
  perfilResumo: string;
  modelo: Modelo;
  modeloRotulo: string;
  confianca: 'alta' | 'media';
  /** Parágrafos que explicam a recomendação usando AS respostas da pessoa. */
  porque: string[];
  caracteristicas: string[];
  estrutura: string;
  naoPrecisa: string[];
  proximoPasso: string;
  montinho: {
    nivel: 'alta' | 'media' | 'baixa';
    rotulo: string;
    presencial: boolean;
    motivo: string;
    /** Ressalva de transparência quando o encaixe não é completo. */
    ressalva?: string;
  };
  conteudo: { url: string; titulo: string }[];
  /** Painel visual de dimensões (0–100), para as barras do resultado. */
  dimensoes: Dimensoes;
  /** As 3 respostas que mais pesaram — transparência do cálculo (§46). */
  influencias: string[];
  /** Comparador presencial × online × híbrido calculado das respostas. */
  comparador: ComparadorLinha[];
  /** Plano de ação: os próximos 3 passos, gerados das respostas. */
  plano: { titulo: string; texto: string }[];
  /** Checklist para levar à conversa com qualquer personal (copiável). */
  checklist: string[];
  /** Sinais de atenção ao escolher um profissional. */
  redFlags: string[];
  /** Texto curto e não sensível para compartilhar (share nativo/clipboard). */
  share: string;
  /** Ressalva extra quando há limitação declarada. */
  avisoLimitacao?: string;
  /** Mensagem pronta do WhatsApp, escrita como a pessoa escreveria. */
  whatsapp: string;
  /** Chaves não sensíveis para analytics. */
  analytics: { recommendation_type: Modelo; profile: string; goal: Objetivo };
}

/* ------------------------------------------------------------------ *
 * Dicionários de exibição
 * ------------------------------------------------------------------ */

const OBJETIVO_TXT: Record<Objetivo, string> = {
  emagrecer: 'emagrecer',
  massa: 'ganhar massa muscular',
  definir: 'definir o corpo',
  voltar: 'voltar a treinar',
  condicionamento: 'melhorar o condicionamento',
  longevidade: 'envelhecer com mais força e autonomia',
  desempenho: 'melhorar o desempenho',
};

const EXPERIENCIA_TXT: Record<Experiencia, string> = {
  nunca: 'nunca treinou de verdade',
  comecando: 'está começando agora',
  voltando: 'voltou a treinar recentemente',
  algumTempo: 'treina há algum tempo',
  experiente: 'já tem bastante experiência',
  parado: 'está parado no momento',
};

const DIAS_TXT: Record<Dias, string> = {
  '2': 'dois dias por semana',
  '3': 'três dias por semana',
  '4': 'quatro dias por semana',
  '5': 'cinco dias por semana',
  '6+': 'seis ou mais dias por semana',
  naoSei: 'uma frequência ainda indefinida',
};

const TEMPO_TXT: Record<Tempo, string> = {
  ate30: 'até 30 minutos por treino',
  '30a45': 'de 30 a 45 minutos por treino',
  '45a60': 'de 45 a 60 minutos por treino',
  '60a90': 'de 60 a 90 minutos por treino',
  mais90: 'mais de 90 minutos por treino',
  varia: 'um tempo que varia bastante',
};

const LOCAL_TXT: Record<Local, string> = {
  academia: 'na academia',
  condominio: 'na academia do condomínio',
  casa: 'em casa',
  arLivre: 'ao ar livre',
  escolhendo: 'em um lugar que ainda está escolhendo',
  varia: 'em lugares que variam',
};

const DIFICULDADE_TXT: Record<Dificuldade, string> = {
  constancia: 'manter a constância',
  naoSeiFazer: 'não saber o que fazer no treino',
  naoSeiSeCerto: 'não ter certeza se está executando certo',
  tempo: 'falta de tempo',
  semResultado: 'treinar e não ver resultado',
  desanimo: 'desânimo',
  rotinaMuda: 'uma rotina que muda demais',
  progressao: 'dificuldade de progredir',
  recomecando: 'estar recomeçando do zero',
};

const MODELO_ROTULO: Record<Modelo, string> = {
  presencial: 'Personal presencial',
  online: 'Acompanhamento online individualizado',
  hibrido: 'Modelo híbrido',
};

/* ------------------------------------------------------------------ *
 * Pontuação: presencial × online
 * ------------------------------------------------------------------ */

interface Pesos {
  presencial: number;
  online: number;
  /** Cada contribuição registrada, para a explicação "entenda o cálculo". */
  influencias: { texto: string; peso: number }[];
}

function pontuar(r: MatchRespostas): Pesos {
  let presencial = 0;
  let online = 0;
  const influencias: { texto: string; peso: number }[] = [];
  const espera = r.espera || [];

  const soma = (lado: 'p' | 'o', peso: number, texto: string) => {
    if (lado === 'p') presencial += peso;
    else online += peso;
    influencias.push({ texto, peso });
  };

  // O que a pessoa espera do profissional é o sinal mais direto de todos.
  if (espera.includes('presenca'))
    soma('p', 3.5, 'você disse que quer alguém junto durante o treino');
  if (espera.includes('execucao'))
    soma('p', 2, 'você espera correção de execução do profissional');
  if (espera.includes('montarTreino'))
    soma('o', 2.5, 'sua prioridade é ter o treino montado, mais do que companhia na sessão');
  if (espera.includes('evolucao'))
    soma('o', 2, 'você quer alguém acompanhando sua evolução, o que independe de presença física');
  if (espera.includes('adaptacao'))
    soma('o', 2.5, 'você precisa de um treino que se adapte quando a semana muda');
  if (espera.includes('cobranca'))
    soma('o', 1.5, 'você pediu cobrança de constância, que funciona bem a distância');

  // A maior dificuldade tem peso alto: é o gargalo real da pessoa.
  const porDificuldade: Record<Dificuldade, { p: number; o: number; txt: string }> = {
    naoSeiSeCerto: { p: 3, o: 0, txt: 'sua principal insegurança é técnica — não saber se está executando certo' },
    naoSeiFazer: { p: 1.5, o: 1.5, txt: 'seu maior obstáculo é não saber o que fazer no treino' },
    constancia: { p: 1, o: 1.5, txt: 'seu maior obstáculo é a constância, não a técnica' },
    desanimo: { p: 1.5, o: 1, txt: 'o desânimo pesa mais que a técnica no seu caso' },
    tempo: { p: 0, o: 2.5, txt: 'seu limite real é tempo — o plano precisa render em sessões enxutas' },
    rotinaMuda: { p: 0, o: 3.5, txt: 'sua rotina muda demais para um compromisso fixo de horário' },
    semResultado: { p: 0.5, o: 2.5, txt: 'você treina e não vê resultado, o que aponta para falta de progressão organizada' },
    progressao: { p: 0.5, o: 3, txt: 'sua dificuldade é progredir, o que se resolve com planejamento' },
    recomecando: { p: 1.5, o: 1, txt: 'você está recomeçando, e recomeço pede dosagem acompanhada' },
  };
  const d = porDificuldade[r.dificuldade];
  if (d.p) soma('p', d.p, d.txt);
  if (d.o) soma('o', d.o, d.txt);

  // Experiência: quem nunca treinou ganha mais com alguém do lado;
  // quem já treina sozinho ganha mais com planejamento.
  const porExperiencia: Record<Experiencia, { p: number; o: number; txt: string }> = {
    nunca: { p: 3, o: 0, txt: 'você nunca treinou de verdade — presença acelera muito esse começo' },
    comecando: { p: 2, o: 0.5, txt: 'você está começando agora, fase em que execução supervisionada rende mais' },
    voltando: { p: 0.5, o: 1.5, txt: 'você já voltou a treinar, então o ganho maior está na organização' },
    algumTempo: { p: 0, o: 2, txt: 'você já treina há algum tempo e executa sozinho' },
    experiente: { p: 0, o: 2.5, txt: 'sua experiência permite treinar sem alguém ao lado' },
    parado: { p: 1, o: 1, txt: 'você está parado, e a retomada pesa dos dois lados' },
  };
  const e = porExperiencia[r.experiencia];
  if (e.p) soma('p', e.p, e.txt);
  if (e.o) soma('o', e.o, e.txt);

  // Local: treinar fora de academia grande costuma pedir autonomia.
  if (r.local === 'casa') soma('o', 1.5, 'você vai treinar em casa, onde o plano importa mais que a presença');
  if (r.local === 'condominio') soma('o', 1.5, 'você treina no condomínio, formato que combina com acompanhamento a distância');
  if (r.local === 'arLivre') soma('o', 1, 'treino ao ar livre pede um plano adaptável');
  if (r.local === 'varia') soma('o', 1.5, 'seu local de treino varia, o que pede um plano portátil');
  if (r.local === 'academia') soma('p', 1, 'você treina em academia, onde o presencial é viável');
  if (r.local === 'escolhendo') soma('p', 0.5, 'você ainda está escolhendo onde treinar');

  // Tempo curto ou variável favorece um plano que se ajusta sozinho.
  if (r.tempo === 'varia') soma('o', 1.5, 'seu tempo por treino varia muito');
  if (r.tempo === 'ate30') soma('o', 1, 'suas sessões são curtas — densidade importa mais que companhia');

  // Alta frequência torna o presencial caro na prática.
  if (r.dias === '5' || r.dias === '6+')
    soma('o', 1.5, 'com sua frequência alta, presencial em todas as sessões custa caro');
  if (r.dias === '2') soma('p', 0.5, 'com dois dias, cada sessão bem aproveitada vale muito');

  // Limitação declarada: supervisão de execução ganha valor — sempre com
  // a ressalva de médico/fisioterapeuta (adicionada no resultado).
  if (r.limitacao === 'sim')
    soma('p', 1, 'você indicou uma condição ou dor a considerar, o que valoriza supervisão de execução');

  return { presencial, online, influencias };
}

/* ------------------------------------------------------------------ *
 * Arquétipos
 * ------------------------------------------------------------------ */

interface Arquetipo {
  /** Chave interna (analytics). */
  id: string;
  nome: string;
  resumo: string;
}

function definirArquetipo(r: MatchRespostas, modelo: Modelo): Arquetipo {
  const espera = r.espera || [];
  const iniciante = r.experiencia === 'nunca' || r.experiencia === 'comecando';
  const experiente = r.experiencia === 'experiente' || r.experiencia === 'algumTempo';

  // Ordem importa: do caso mais específico para o mais genérico.
  if (iniciante && (r.dificuldade === 'naoSeiSeCerto' || espera.includes('presenca'))) {
    return {
      id: 'presenca-e-seguranca',
      nome: 'Presença e segurança',
      resumo:
        'Você está no começo e precisa principalmente de alguém que ensine a execução e tire o medo de fazer errado.',
    };
  }
  if (iniciante) {
    return {
      id: 'primeiros-passos',
      nome: 'Primeiros passos',
      resumo:
        'Seu ganho maior agora vem de simplicidade: aprender os movimentos básicos e transformar treino em hábito.',
    };
  }
  if (r.dificuldade === 'rotinaMuda' || r.tempo === 'varia' || r.local === 'varia') {
    return {
      id: 'estrutura-e-flexibilidade',
      nome: 'Estrutura + flexibilidade',
      resumo:
        'Sua rotina não é previsível, então o treino precisa ser planejado para sobreviver a semanas diferentes.',
    };
  }
  if (r.dificuldade === 'constancia' || r.dificuldade === 'desanimo') {
    return {
      id: 'constancia-e-cobranca',
      nome: 'Constância acima de tudo',
      resumo:
        'Seu gargalo não é informação: é seguir treinando nas semanas em que a motivação some.',
    };
  }
  if (experiente && (r.dificuldade === 'progressao' || r.dificuldade === 'semResultado')) {
    return {
      id: 'destravar-evolucao',
      nome: 'Destravar a evolução',
      resumo:
        'Você já treina — o que falta é planejamento de progressão, gestão de volume e leitura dos resultados.',
    };
  }
  if (r.experiencia === 'voltando' || r.experiencia === 'parado' || r.dificuldade === 'recomecando') {
    return {
      id: 'retomada-inteligente',
      nome: 'Retomada inteligente',
      resumo:
        'Recomeçar tem regra própria: voltar em um ritmo que o corpo aceite, sem repetir o erro de exagerar na primeira semana.',
    };
  }
  if (r.dificuldade === 'naoSeiFazer' || espera.includes('montarTreino')) {
    return {
      id: 'estrutura-e-planejamento',
      nome: 'Estrutura e planejamento',
      resumo:
        'Você consegue executar razoavelmente bem; o que falta é alguém organizando o que fazer, em que ordem e com qual progressão.',
    };
  }
  return {
    id: modelo === 'presencial' ? 'acompanhamento-proximo' : 'plano-sob-medida',
    nome: modelo === 'presencial' ? 'Acompanhamento próximo' : 'Plano sob medida',
    resumo:
      'Seu perfil pede um acompanhamento ajustado ao seu momento, e não um treino de prateleira.',
  };
}

/* ------------------------------------------------------------------ *
 * Blocos de texto combináveis
 * ------------------------------------------------------------------ */

function blocosPorque(r: MatchRespostas, modelo: Modelo, p: Pesos): string[] {
  const blocos: string[] = [];
  const dias = DIAS_TXT[r.dias];
  const tempo = TEMPO_TXT[r.tempo];
  const dif = DIFICULDADE_TXT[r.dificuldade];

  // Bloco 1 — espelha a rotina declarada (efeito "entenderam minha situação").
  const fraseRotina =
    r.dias === 'naoSei'
      ? `Você ainda não fechou quantos dias por semana consegue treinar, tem ${tempo}`
      : `Você consegue treinar ${dias}, tem ${tempo}`;
  blocos.push(
    `${fraseRotina} e disse que o que mais atrapalha seus resultados hoje é ${dif}. ` +
      `Essa combinação já elimina boa parte das recomendações genéricas que circulam por aí.`,
  );

  // Bloco 2 — traduz a dificuldade em diagnóstico de gargalo.
  const diagnostico: Record<Dificuldade, string> = {
    naoSeiSeCerto:
      'Quando a insegurança é técnica, ninguém resolve por texto: o ganho vem de ter alguém corrigindo o movimento enquanto ele acontece, pelo menos até a execução virar automática.',
    naoSeiFazer:
      'Seu gargalo não é esforço — é direção. Saber exatamente o que fazer em cada dia costuma render mais do que aumentar a frequência.',
    constancia:
      'Constância não se resolve com um treino mais bonito. Resolve-se com um plano que você consiga cumprir na semana ruim, não só na semana boa.',
    desanimo:
      'Desânimo raramente vem de preguiça: vem de treinar sem ver para onde está indo. Ter metas visíveis e alguém acompanhando muda esse jogo.',
    tempo:
      'Com o tempo apertado, o que decide o resultado é a densidade do treino — o que entra e, principalmente, o que sai da sessão.',
    rotinaMuda:
      'Rotina imprevisível quebra qualquer planilha rígida. O que funciona é um plano com versões previstas para a semana cheia e para a semana corrida.',
    semResultado:
      'Treinar e não ver resultado quase sempre aponta para ausência de progressão organizada — não para falta de esforço.',
    progressao:
      'Estagnação é problema de planejamento: volume, intensidade e variação precisam de gestão, não de troca de treino toda semana.',
    recomecando:
      'Recomeçar pede dosagem. O erro clássico é voltar no volume de antes e abandonar na segunda semana por dor ou cansaço.',
  };
  blocos.push(diagnostico[r.dificuldade]);

  // Bloco 3 — fecha explicando a escolha do modelo, citando a distância dos pesos.
  const margem = Math.abs(p.presencial - p.online);
  if (modelo === 'presencial') {
    blocos.push(
      `Por isso a recomendação aqui pende para o presencial: seus pontos de atenção estão concentrados na execução e na segurança, ` +
        `e esse é justamente o tipo de coisa que se resolve mais rápido com alguém do seu lado durante o treino.`,
    );
  } else if (modelo === 'online') {
    blocos.push(
      `Seu maior gargalo provavelmente não é falta de alguém contando repetições ao seu lado, e sim falta de planejamento, progressão e acompanhamento. ` +
        `Por isso um acompanhamento online individualizado tende a entregar mais por real investido no seu caso.`,
    );
  } else {
    blocos.push(
      margem < 1.5
        ? `Seu perfil ficou tecnicamente empatado entre os dois formatos: você tem demandas de execução (que pedem presença) e de organização (que pedem planejamento). ` +
            `O modelo híbrido existe exatamente para esse caso.`
        : `Você tem demandas dos dois lados — execução a corrigir e rotina a organizar. Um período presencial curto seguido de acompanhamento a distância costuma resolver os dois sem pagar por presença todos os dias.`,
    );
  }

  return blocos;
}

function caracteristicasIdeais(r: MatchRespostas, modelo: Modelo): string[] {
  const lista: string[] = [];
  const espera = r.espera || [];

  lista.push(
    r.dias === 'naoSei'
      ? 'ajudar você a definir quantos dias por semana são sustentáveis, antes de montar qualquer plano'
      : `montar o treino em torno de ${DIAS_TXT[r.dias]}, sem exigir uma frequência que você não tem`,
  );

  if (r.tempo === 'ate30' || r.tempo === '30a45') {
    lista.push('trabalhar bem dentro de sessões curtas, cortando o que não é essencial');
  }
  if (r.tempo === 'varia' || r.dificuldade === 'rotinaMuda') {
    lista.push('ter um plano B pronto para a semana em que a rotina virar de cabeça para baixo');
  }
  if (r.local === 'casa' || r.local === 'condominio' || r.local === 'arLivre') {
    lista.push(`saber adaptar exercícios ao que existe de equipamento ${LOCAL_TXT[r.local]}`);
  }
  if (r.experiencia === 'nunca' || r.experiencia === 'comecando') {
    lista.push('ensinar execução com paciência, sem presumir que você já conhece os aparelhos');
  }
  if (r.experiencia === 'experiente' || r.experiencia === 'algumTempo') {
    lista.push('gerir volume e intensidade com critério, em vez de só aumentar a carga');
  }
  if (espera.includes('execucao') || r.dificuldade === 'naoSeiSeCerto') {
    lista.push('corrigir sua execução de forma objetiva — presencialmente ou por vídeo');
  }
  if (espera.includes('evolucao') || r.dificuldade === 'progressao' || r.dificuldade === 'semResultado') {
    lista.push('acompanhar sua evolução com números, não com achismo');
  }
  if (r.dificuldade === 'constancia' || r.dificuldade === 'desanimo' || espera.includes('cobranca')) {
    lista.push('cobrar sua constância de um jeito que ajude, sem virar sargento');
  }
  if (r.limitacao === 'sim') {
    lista.push(
      'adaptar o treino à sua limitação e trabalhar alinhado com o seu médico ou fisioterapeuta',
    );
  }
  lista.push('não trocar seu treino toda semana só para parecer que está fazendo algo novo');

  if (modelo !== 'presencial') {
    lista.push('responder dúvidas em tempo razoável, porque a distância exige mais canal aberto');
  }

  return lista.slice(0, 7);
}

/* ------------------------------------------------------------------ *
 * Painel de dimensões (0–100)
 * ------------------------------------------------------------------ */

const clamp = (v: number) => Math.max(5, Math.min(95, Math.round(v)));

function calcularDimensoes(r: MatchRespostas): Dimensoes {
  // Autonomia atual: quanto a pessoa já executa sozinha com segurança.
  const basePorExperiencia: Record<Experiencia, number> = {
    nunca: 18,
    comecando: 32,
    voltando: 48,
    parado: 42,
    algumTempo: 68,
    experiente: 85,
  };
  let autonomia = basePorExperiencia[r.experiencia];
  if (r.dificuldade === 'naoSeiFazer') autonomia -= 14;
  if (r.dificuldade === 'naoSeiSeCerto') autonomia -= 18;
  if ((r.espera || []).includes('execucao')) autonomia -= 6;

  // Supervisão recomendada: essencialmente o espelho da autonomia,
  // reforçada quando há limitação declarada.
  let supervisao = 100 - autonomia;
  if (r.limitacao === 'sim') supervisao += 10;

  // Flexibilidade necessária: o quanto o plano precisa sobreviver a
  // semanas diferentes entre si.
  let flexibilidade = 30;
  if (r.dificuldade === 'rotinaMuda') flexibilidade += 28;
  if (r.tempo === 'varia') flexibilidade += 20;
  if (r.local === 'varia') flexibilidade += 14;
  if (r.dias === 'naoSei') flexibilidade += 10;
  if (r.dificuldade === 'tempo') flexibilidade += 12;

  // Base de constância hoje — nunca formulada como defeito da pessoa.
  let constancia = 62;
  if (r.dificuldade === 'constancia') constancia -= 32;
  if (r.dificuldade === 'desanimo') constancia -= 26;
  if (r.dificuldade === 'recomecando') constancia -= 14;
  if (r.experiencia === 'parado') constancia -= 12;
  if (r.experiencia === 'experiente') constancia += 16;
  if (r.experiencia === 'algumTempo') constancia += 10;

  return {
    autonomia: clamp(autonomia),
    supervisao: clamp(supervisao),
    flexibilidade: clamp(flexibilidade),
    constancia: clamp(constancia),
  };
}

/* ------------------------------------------------------------------ *
 * Comparador presencial × online × híbrido
 * ------------------------------------------------------------------ */

function montarComparador(modelo: Modelo, margem: number, dim: Dimensoes): ComparadorLinha[] {
  // Adequação por formato, derivada do cálculo — nunca inflando o
  // presencial artificialmente (§47 do briefing é explícito nisso).
  const adequacao: Record<Modelo, string> = {
    presencial: 'Possível',
    online: 'Possível',
    hibrido: 'Adequado',
  };
  adequacao[modelo] = 'Muito adequado';
  if (modelo !== 'hibrido') {
    const perdedor: Modelo = modelo === 'presencial' ? 'online' : 'presencial';
    adequacao[perdedor] = margem >= 3 ? 'Menos indicado agora' : 'Possível';
    // Com autonomia muito alta, o híbrido perde a razão de existir.
    if (modelo === 'online' && dim.autonomia >= 75) adequacao.hibrido = 'Possível';
  }

  return [
    { criterio: 'Supervisão da execução', presencial: 'Alta', online: 'Por vídeo', hibrido: 'Alta no início' },
    { criterio: 'Flexibilidade de horário', presencial: 'Média', online: 'Alta', hibrido: 'Alta' },
    { criterio: 'Autonomia necessária', presencial: 'Baixa', online: 'Alta', hibrido: 'Média' },
    { criterio: 'Custo por semana', presencial: 'Maior', online: 'Menor', hibrido: 'Intermediário' },
    {
      criterio: 'Para o seu cenário',
      presencial: adequacao.presencial,
      online: adequacao.online,
      hibrido: adequacao.hibrido,
    },
  ];
}

/* ------------------------------------------------------------------ *
 * Plano de ação — os próximos 3 passos
 * ------------------------------------------------------------------ */

function montarPlano(r: MatchRespostas, modelo: Modelo, dim: Dimensoes): { titulo: string; texto: string }[] {
  const passos: { titulo: string; texto: string }[] = [];

  // Passo 1 — frequência sustentável.
  if (r.dias === 'naoSei') {
    passos.push({
      titulo: 'Feche sua frequência real',
      texto:
        'Antes de qualquer plano, defina quantos dias você sustenta em uma semana comum — não na semana ideal. Três dias cumpridos valem mais que cinco planejados e abandonados.',
    });
  } else if (r.dias === '2' || r.dias === '3') {
    passos.push({
      titulo: 'Comece com a frequência que você tem',
      texto: `${r.dias === '2' ? 'Dois dias' : 'Três dias'} por semana bem estruturados já produzem resultado. Resista à tentação de prometer mais dias do que a sua rotina entrega — constância vence frequência.`,
    });
  } else {
    passos.push({
      titulo: 'Proteja a recuperação',
      texto:
        'Com a sua frequência, o risco não é treinar pouco — é acumular volume sem recuperar. Um bom plano distribui estímulo e prevê dias mais leves.',
    });
  }

  // Passo 2 — o driver principal do resultado.
  if (r.dificuldade === 'naoSeiSeCerto' || r.dificuldade === 'naoSeiFazer' || dim.autonomia < 40) {
    passos.push({
      titulo: 'Destrave a execução primeiro',
      texto:
        'Seu maior retorno agora vem de aprender a executar com segurança. Priorize as primeiras semanas com correção próxima — o resto do plano constrói em cima disso.',
    });
  } else if (r.dificuldade === 'constancia' || r.dificuldade === 'desanimo') {
    passos.push({
      titulo: 'Monte o plano para a semana ruim',
      texto:
        'Combine com o profissional uma versão mínima do treino para as semanas em que tudo desanda. Quem só tem plano para a semana boa abandona na primeira semana ruim.',
    });
  } else if (r.dificuldade === 'progressao' || r.dificuldade === 'semResultado') {
    passos.push({
      titulo: 'Exija progressão registrada',
      texto:
        'Peça que cargas, séries e evolução sejam anotadas desde o primeiro treino. Sem registro não há progressão — há repetição.',
    });
  } else {
    passos.push({
      titulo: 'Alinhe o plano à sua rotina real',
      texto:
        'Leve para a primeira conversa seus horários, seu tempo por sessão e onde você treina. Um bom acompanhamento começa pela sua agenda, não pelo treino.',
    });
  }

  // Passo 3 — o nível de acompanhamento certo.
  const porModelo: Record<Modelo, { titulo: string; texto: string }> = {
    presencial: {
      titulo: 'Combine a redução da presença desde o início',
      texto:
        'Comece com acompanhamento próximo, mas pergunte já na primeira conversa quando e como a presença vai diminuir. O objetivo é você ganhar autonomia, não dependência.',
    },
    online: {
      titulo: 'Escolha acompanhamento, não planilha',
      texto:
        'No formato online, o que separa um bom serviço de uma ficha genérica é o ciclo de ajustes: correção por vídeo, revisão periódica e canal aberto para dúvidas. Verifique os três.',
    },
    hibrido: {
      titulo: 'Estruture as fases do híbrido',
      texto:
        'Combine quantas sessões presenciais abrem o processo e o que acontece depois. O híbrido funciona quando as fases são claras — presença para destravar execução, distância para sustentar o plano.',
    },
  };
  passos.push(porModelo[modelo]);

  return passos;
}

/* ------------------------------------------------------------------ *
 * Checklist e sinais de atenção
 * ------------------------------------------------------------------ */

function montarChecklist(r: MatchRespostas, modelo: Modelo): string[] {
  const itens = [
    'Como você vai avaliar meu ponto de partida antes de montar o treino?',
    'Como a minha evolução será acompanhada e registrada?',
    'Como funciona a progressão — o que muda e quando?',
    'Qual é a sua experiência com pessoas com o meu objetivo?',
    'Como funcionam horários, remarcação e cancelamento?',
  ];
  if (modelo !== 'presencial') {
    itens.push('Como funciona a correção de execução a distância e qual o prazo de resposta para dúvidas?');
  }
  if (r.local === 'condominio' || r.local === 'casa') {
    itens.push('Você adapta o treino ao equipamento que tenho disponível onde treino?');
  }
  if (r.limitacao === 'sim' || r.limitacao === 'profissional') {
    itens.push('Como o treino vai considerar a minha condição — e você trabalha junto com médico ou fisioterapeuta?');
  }
  return itens;
}

/** Sinais de atenção universais — responsáveis, sem atacar ninguém. */
const RED_FLAGS = [
  'Promessa de resultado garantido ou com prazo fechado.',
  'O mesmo treino para todos os alunos, sem avaliação do ponto de partida.',
  'Nenhuma pergunta sobre sua rotina, seu histórico ou suas limitações.',
  'Troca constante de exercícios sem explicação — variedade não é progressão.',
  'Incentivo a treinar com dor sem orientação de médico ou fisioterapeuta.',
  'Orientações fora do escopo do treino, como prescrição de dieta ou de substâncias.',
];

function estruturaProvavel(r: MatchRespostas): string {
  const base: Record<string, string> = {
    '2': 'Com dois dias disponíveis, uma estrutura Full Body — corpo inteiro em cada sessão — costuma ser o ponto de partida mais lógico, porque garante frequência para cada grupo muscular mesmo treinando pouco.',
    '3': 'Com três dias disponíveis, tanto um Full Body quanto uma divisão que repita os grupos musculares ao longo da semana tendem a fazer sentido — o critério é a frequência por grupo, não o número de aparelhos.',
    '4': 'Com quatro dias, divisões do tipo superior/inferior costumam encaixar bem: dão frequência dobrada por grupo muscular sem alongar demais cada sessão.',
    '5': 'Com cinco dias, há espaço para divisões mais segmentadas, desde que o volume total continue compatível com sua recuperação — treinar mais dias não significa treinar mais no total.',
    '6+': 'Com seis ou mais dias, o cuidado principal deixa de ser o estímulo e passa a ser a recuperação: distribuir volume e prever dias mais leves vale mais do que somar exercícios.',
    naoSei:
      'Antes de definir a divisão, vale fechar quantos dias você sustenta em uma semana comum — não na semana ideal. A estrutura nasce dessa resposta.',
  };
  const tempoNota =
    r.tempo === 'ate30'
      ? ' Com até 30 minutos, priorizar exercícios multiarticulares e reduzir o número de exercícios costuma render mais do que acelerar a sessão inteira.'
      : r.tempo === 'mais90'
        ? ' Ter mais de 90 minutos disponíveis é confortável, mas sessões muito longas costumam perder qualidade no fim — dividir melhor pode valer mais que alongar.'
        : '';
  return `${base[r.dias]}${tempoNota} A definição final depende de uma avaliação completa do seu caso.`;
}

function oQueNaoPrecisa(r: MatchRespostas, modelo: Modelo): string[] {
  const lista: string[] = [];

  if (r.dias === '2' || r.dias === '3') {
    lista.push('Você provavelmente não precisa começar treinando seis dias por semana para ver resultado.');
  }
  if (r.dificuldade === 'semResultado' || r.dificuldade === 'progressao') {
    lista.push('Trocar de treino toda semana provavelmente não resolverá seu principal problema — sem repetir estímulo não há como medir progresso.');
  }
  if (r.experiencia === 'nunca' || r.experiencia === 'comecando') {
    lista.push('Você não precisa de suplemento nenhum para começar, nem de um treino avançado copiado de quem treina há dez anos.');
  }
  if (r.tempo === 'ate30' || r.tempo === '30a45') {
    lista.push('Você não precisa de treinos de duas horas: sessão curta e bem montada resolve, desde que seja consistente.');
  }
  if (modelo === 'online') {
    lista.push('E, pelo seu perfil, provavelmente não precisa pagar por várias aulas presenciais por semana só para ter alguém contando repetições.');
  }
  if (r.dificuldade === 'constancia' || r.dificuldade === 'desanimo') {
    lista.push('Você não precisa de mais motivação pontual — precisa de um plano que funcione mesmo nos dias em que a motivação não aparecer.');
  }
  if (!lista.length) {
    lista.push('Você não precisa de um treino mais complicado do que o seu momento pede — complexidade não é sinônimo de eficiência.');
  }
  return lista.slice(0, 3);
}

/* ------------------------------------------------------------------ *
 * Conteúdo contextual do portal
 * ------------------------------------------------------------------ */

function conteudoRelacionado(r: MatchRespostas): { url: string; titulo: string }[] {
  const itens: { url: string; titulo: string }[] = [];

  const porObjetivo: Partial<Record<Objetivo, { url: string; titulo: string }>> = {
    emagrecer: { url: '/emagrecimento/como-perder-barriga/', titulo: 'Como perder barriga: o que funciona de verdade' },
    massa: { url: '/musculacao/treino-de-forca/', titulo: 'Treino de força: como estruturar' },
    definir: { url: '/emagrecimento/recomposicao-corporal/', titulo: 'Recomposição corporal: perder gordura e ganhar músculo' },
    voltar: { url: '/musculacao/voltar-a-treinar-depois-de-parar/', titulo: 'Voltar a treinar depois de parar' },
    condicionamento: { url: '/emagrecimento/quantos-passos-por-dia/', titulo: 'Quantos passos por dia fazem diferença' },
    longevidade: { url: '/musculacao/treino-de-forca/', titulo: 'Treino de força: como estruturar' },
    desempenho: { url: '/musculacao/tecnicas-avancadas-de-treino/', titulo: 'Técnicas avançadas de treino' },
  };
  const obj = porObjetivo[r.objetivo];
  if (obj) itens.push(obj);

  if (r.experiencia === 'nunca' || r.experiencia === 'comecando') {
    itens.push({ url: '/musculacao/treino-para-iniciantes/', titulo: 'Treino de musculação para iniciantes' });
  } else if (r.dificuldade === 'constancia' || r.dificuldade === 'desanimo') {
    itens.push({ url: '/guias/como-nao-desistir-do-treino/', titulo: 'Como não desistir do treino' });
  } else if (r.dificuldade === 'tempo' || r.tempo === 'ate30') {
    itens.push({ url: '/musculacao/quanto-tempo-de-treino-por-dia/', titulo: 'Quanto tempo de treino por dia é necessário' });
  } else if (r.dificuldade === 'progressao' || r.dificuldade === 'semResultado') {
    itens.push({ url: '/musculacao/frequencia-de-treino/', titulo: 'Frequência de treino: quantas vezes por semana' });
  } else {
    itens.push({ url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu' });
  }

  itens.push({ url: '/guias/quanto-custa-personal-trainer/', titulo: 'Quanto custa um personal trainer' });

  // Deduplica preservando a ordem (objetivo e experiência podem coincidir).
  const vistos = new Set<string>();
  return itens.filter((i) => (vistos.has(i.url) ? false : (vistos.add(i.url), true)));
}

/* ------------------------------------------------------------------ *
 * Compatibilidade com o Montinho — sem forçar a barra
 * ------------------------------------------------------------------ */

function compatibilidadeMontinho(
  r: MatchRespostas,
  modelo: Modelo,
): MatchResultado['montinho'] {
  const cobertura = coberturaPresencial(r.cidadeSlug);
  const podePresencial = cobertura === 'atende' || cobertura === 'condicional';

  // Caso 1 — presencial recomendado E região atendida: o melhor cenário.
  if (modelo === 'presencial' && cobertura === 'atende') {
    return {
      nivel: 'alta',
      rotulo: 'Presencial: alta compatibilidade',
      presencial: true,
      motivo:
        'Seu perfil pede presença durante o treino e você está dentro da região que o Montinho atende presencialmente — dá para começar com acompanhamento direto e migrar para um modelo mais independente conforme sua execução ficar segura.',
    };
  }

  // Caso 2 — presencial recomendado, mas fora da área: transparência obrigatória.
  if (modelo === 'presencial' && !podePresencial) {
    return {
      nivel: 'media',
      rotulo: 'Compatibilidade parcial',
      presencial: false,
      motivo:
        'Pelas suas respostas, você se beneficiaria bastante de ter alguém presente nos primeiros treinos — e essa parte o Montinho não consegue cobrir na sua região, porque o atendimento presencial dele é limitado à Grande São Paulo.',
      ressalva:
        'O caminho honesto no seu caso é procurar alguém presencial aí para destravar a execução. Se isso não for possível agora, um acompanhamento online com envio de vídeos ajuda — mas é uma solução parcial, e é justo você saber disso antes.',
    };
  }

  // Caso 3 — desempenho esportivo específico não é o foco do trabalho.
  if (r.objetivo === 'desempenho') {
    return {
      nivel: 'media',
      rotulo: 'Compatibilidade média',
      presencial: podePresencial,
      motivo:
        'O trabalho do Montinho é centrado em emagrecimento, hipertrofia e retomada de treino — desempenho esportivo específico não é o foco principal dele.',
      ressalva:
        'Se o seu objetivo envolve preparação para uma modalidade específica, vale considerar também um profissional especializado nesse esporte.',
    };
  }

  // Caso 4 — o encaixe clássico: precisa de estrutura, executa sozinho.
  const forte =
    ['emagrecer', 'definir', 'voltar', 'massa', 'longevidade', 'condicionamento'].includes(r.objetivo) &&
    ['constancia', 'rotinaMuda', 'semResultado', 'progressao', 'tempo', 'desanimo', 'recomecando', 'naoSeiFazer'].includes(
      r.dificuldade,
    );

  if (forte) {
    const motivoBase =
      r.objetivo === 'emagrecer' || r.objetivo === 'definir'
        ? 'Emagrecimento é justamente a especialidade dele, e a experiência não é só técnica: ele mesmo perdeu mais de 40 kg e sabe como é a parte difícil.'
        : 'Ele trabalha com planejamento, ajuste de rota e acompanhamento contínuo — que é exatamente onde está o seu gargalo.';
    return {
      nivel: 'alta',
      rotulo: 'Compatibilidade: alta',
      presencial: cobertura === 'atende',
      motivo:
        `Seu perfil combina bastante com a metodologia do Montinho: você precisa principalmente de planejamento, ajustes e acompanhamento constante, e consegue executar seus treinos sozinho. ${motivoBase}`,
    };
  }

  return {
    nivel: 'media',
    rotulo: 'Compatibilidade: média',
    presencial: cobertura === 'atende',
    motivo:
      'Há encaixe com o tipo de acompanhamento que o Montinho oferece, mas seu perfil também funcionaria bem com outros profissionais que trabalhem com planejamento individualizado.',
    ressalva:
      'Vale conversar sem compromisso e comparar: o critério que importa é quem entende melhor a sua rotina, não quem apareceu primeiro.',
  };
}

/* ------------------------------------------------------------------ *
 * Mensagem do WhatsApp
 * ------------------------------------------------------------------ */

function montarWhatsapp(r: MatchRespostas, res: Omit<MatchResultado, 'whatsapp' | 'analytics'>): string {
  const linhas = [
    'Oi, Montinho! Fiz o "Encontre seu Personal Ideal" no Personal por Perto.',
    '',
    `Meu objetivo: ${OBJETIVO_TXT[r.objetivo]}`,
  ];
  if (r.cidadeNome) linhas.push(`Cidade: ${r.cidadeNome}${r.uf ? `/${r.uf}` : ''}`);
  linhas.push(
    `Experiência: ${EXPERIENCIA_TXT[r.experiencia]}`,
    `Disponibilidade: ${r.dias === 'naoSei' ? 'ainda não sei quantos dias consigo' : DIAS_TXT[r.dias]}`,
    `Tempo por treino: ${TEMPO_TXT[r.tempo]}`,
    `Onde treino: ${LOCAL_TXT[r.local]}`,
    `Maior dificuldade: ${DIFICULDADE_TXT[r.dificuldade]}`,
    '',
  );

  const fecho =
    res.montinho.nivel === 'alta'
      ? `O resultado indicou ${res.modeloRotulo.toLowerCase()} e apontou boa compatibilidade com o seu trabalho. Queria entender como isso funcionaria no meu caso.`
      : `O resultado indicou ${res.modeloRotulo.toLowerCase()}. Queria entender se o seu acompanhamento faz sentido para o meu caso.`;
  linhas.push(fecho);

  return linhas.join('\n');
}

/* ------------------------------------------------------------------ *
 * Motor
 * ------------------------------------------------------------------ */

export function personalMatchEngine(r: MatchRespostas): MatchResultado {
  const p = pontuar(r);
  const margem = Math.abs(p.presencial - p.online);

  let modelo: Modelo;
  if (margem < 1.5) modelo = 'hibrido';
  else modelo = p.presencial > p.online ? 'presencial' : 'online';

  // Híbrido também quando os dois lados pontuam alto ao mesmo tempo:
  // demanda real de execução somada a demanda real de organização.
  if (modelo !== 'hibrido' && p.presencial >= 4.5 && p.online >= 4.5) modelo = 'hibrido';

  const arquetipo = definirArquetipo(r, modelo);
  const dimensoes = calcularDimensoes(r);

  // As 3 contribuições de maior peso viram a explicação "entenda o cálculo".
  const influencias = [...p.influencias]
    .sort((a, b) => b.peso - a.peso)
    .slice(0, 3)
    .map((i) => i.texto);

  const avisoLimitacao =
    r.limitacao === 'sim'
      ? 'Você indicou uma condição, dor ou limitação. Antes de começar qualquer treino, converse com um médico ou fisioterapeuta — e leve essa orientação para o profissional que for te acompanhar.'
      : r.limitacao === 'profissional'
        ? 'Você preferiu tratar de condições e limitações diretamente com um profissional — ótimo. Leve esse ponto logo à primeira conversa, junto com qualquer orientação de médico ou fisioterapeuta.'
        : undefined;

  const parcial = {
    perfil: arquetipo.nome,
    perfilResumo: arquetipo.resumo,
    modelo,
    modeloRotulo: MODELO_ROTULO[modelo],
    confianca: (margem >= 3 ? 'alta' : 'media') as 'alta' | 'media',
    porque: blocosPorque(r, modelo, p),
    caracteristicas: caracteristicasIdeais(r, modelo),
    estrutura: estruturaProvavel(r),
    naoPrecisa: oQueNaoPrecisa(r, modelo),
    proximoPasso: proximoPasso(r, modelo),
    montinho: compatibilidadeMontinho(r, modelo),
    conteudo: conteudoRelacionado(r),
    dimensoes,
    influencias,
    comparador: montarComparador(modelo, margem, dimensoes),
    plano: montarPlano(r, modelo, dimensoes),
    checklist: montarChecklist(r, modelo),
    redFlags: RED_FLAGS,
    share: montarShare(r, modelo),
    avisoLimitacao,
  };

  return {
    ...parcial,
    whatsapp: montarWhatsapp(r, parcial),
    analytics: { recommendation_type: modelo, profile: arquetipo.id, goal: r.objetivo },
  };
}

/**
 * Texto de compartilhamento: só objetivo, frequência e formato — nunca
 * limitação, cidade ou qualquer dado sensível.
 */
function montarShare(r: MatchRespostas, modelo: Modelo): string {
  const dias = r.dias === 'naoSei' ? 'frequência a definir' : DIAS_TXT[r.dias];
  return (
    `Fiz o diagnóstico do Personal por Perto: objetivo de ${OBJETIVO_TXT[r.objetivo]}, ${dias}, ` +
    `formato indicado: ${MODELO_ROTULO[modelo].toLowerCase()}. ` +
    'Faça o seu: https://www.personalporperto.com.br/ferramentas/encontre-seu-personal-ideal/'
  );
}

function proximoPasso(r: MatchRespostas, modelo: Modelo): string {
  if (modelo === 'presencial') {
    return 'Procure um profissional que possa acompanhar seus primeiros treinos de perto e combine desde o início quando essa presença poderá diminuir — o objetivo é você ganhar autonomia, não dependência.';
  }
  if (modelo === 'hibrido') {
    return 'Comece com algumas sessões presenciais só para ajustar execução e siga com acompanhamento a distância. Deixe claro na primeira conversa quantas sessões presenciais estão previstas.';
  }
  const dadosRotina =
    r.dias === 'naoSei'
      ? `o tempo que você tem por treino (${TEMPO_TXT[r.tempo]}) e quantos dias consegue sustentar de verdade`
      : `${DIAS_TXT[r.dias]} e ${TEMPO_TXT[r.tempo]}`;
  return `Converse com um profissional que trabalhe com acompanhamento individualizado e leve seus dados reais de rotina — ${dadosRotina}. Um bom acompanhamento começa pela sua agenda, não pelo treino.`;
}

/* ------------------------------------------------------------------ *
 * Rótulos exportados para a UI (evita duplicar strings no componente)
 * ------------------------------------------------------------------ */

export const rotulos = {
  objetivo: OBJETIVO_TXT,
  experiencia: EXPERIENCIA_TXT,
  dias: DIAS_TXT,
  tempo: TEMPO_TXT,
  local: LOCAL_TXT,
  dificuldade: DIFICULDADE_TXT,
  modelo: MODELO_ROTULO,
};
