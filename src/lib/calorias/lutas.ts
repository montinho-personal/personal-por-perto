/**
 * O motor da página de calorias do boxe e das lutas.
 *
 * A DÉCIMA PRIMEIRA DO CLUSTER — E A PRIMEIRA QUE CONTA EM ROUNDS
 *
 *     caminhada → o tempo (e a inclinação)
 *     corrida   → a distância
 *     bicicleta → a velocidade
 *     natação   → o estilo
 *     escada    → a altura
 *     corda     → quase nada; a cadência menos ainda
 *     dança     → a música
 *     yoga      → o instrumento de medida mente
 *     futebol   → quanto tempo você esteve DENTRO do jogo
 *     lutas     → o round, que é a unidade em que a luta acontece
 *
 * Quem treina luta não pensa em minutos: pensa em rounds. "Fiz seis rounds
 * de saco", "rolei cinco de seis minutos". O round tem duração fixa e o
 * intervalo também, então o tempo de esforço sai de uma conta — e o tempo de
 * intervalo fica fora dela, como o time de fora no futebol.
 *
 * O ERRO QUE A PÁGINA DESMONTA
 *
 * "Boxe queima 1.000 kcal por hora" é a conta de uma hora inteira de luta no
 * ringue, e essa hora não existe. A luta amadora tem 3 rounds de 3 minutos;
 * a profissional mais longa, 12 de 3 — trinta e seis minutos de round. O
 * número por hora é verdadeiro por minuto e falso para qualquer luta real.
 *
 * O QUE O COMPÊNDIO DÁ, E O QUE ELE NÃO DÁ
 *
 * Do boxe, usamos sete linhas do Compêndio de 2024 — ringue, saco em quatro
 * ritmos, sparring e round simulado. Das artes marciais, duas, e o próprio
 * Compêndio põe judô, jiu-jitsu, caratê, kickboxing, taekwondo e muay thai
 * como EXEMPLOS da linha de ritmo moderado. Valores separados por modalidade
 * circulam atribuídos ao Compêndio; não conseguimos conferir nenhum deles, e
 * um contradiz o próprio agrupamento (kickboxing a 7,3, quando a linha que o
 * cita como exemplo é 10,3). Ficam fora, e a página diz por quê.
 *
 * A CONFERÊNCIA
 *
 * Perusek e colegas mediram 29 adultos jovens batendo no saco por 30
 * minutos, em 10 blocos de 3, com calorimetria indireta: 21,2 mL de oxigênio
 * por kg por minuto. Isso é 6,06 METs, e o saco em ritmo livre do Compêndio é
 * 5,8. A 4% um do outro — e a medição é por quilo, então não depende do peso
 * de quem foi medido.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
  resumo: string;
}

export const FONTE_COMPENDIO: Fonte = {
  rotulo:
    'Herrmann SD, Willis EA, Ainsworth BE, et al. 2024 Adult Compendium of Physical Activities. Journal of Sport and Health Science, 2024',
  rotuloCurto: 'Compêndio de Atividades Físicas (2024)',
  url: 'https://pacompendium.com/sports/',
  resumo:
    'mede boxe no ringue em 12,3 METs (código 15100 — era 12,8 em 2011), saco de pancada em 5,8 (15110 — era 5,5), saco a 60, 120 e 180 golpes por minuto em 7,0, 8,5 e 10,8 (15113, 15115 e 15118), sparring em 7,8 (15120) e round simulado em 9,3 (15125). Artes marciais: 5,3 em ritmo lento ou para iniciantes (15425) e 10,3 em ritmo moderado (15430), com judô, jiu-jitsu, caratê, kickboxing, taekwondo e muay thai como exemplos.',
};

export const FONTE_PERUSEK: Fonte = {
  rotulo:
    'Perusek K, Sparks K, Little K, Motley M, Patterson S, Wieand J. A comparison of energy expenditure during "Wii Boxing" versus heavy bag boxing in young adults. Games for Health Journal, 3(1):21–24, 2014',
  rotuloCurto: 'Perusek et al. (2014)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/26197251/',
  resumo:
    'mediu 29 adultos jovens (15 homens e 14 mulheres, 25,6 anos em média) em 30 minutos de saco de pancada, em 10 blocos de 3 minutos, por calorimetria indireta: consumo de oxigênio de 21,2 mL por kg por minuto e frequência cardíaca média de 156 batimentos.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_PERUSEK, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const ROUNDS_MIN = 1;
export const ROUNDS_MAX = 30;
export const ROUNDS_PADRAO = 6;

/** Duração de cada round, em minutos. Rola de jiu-jitsu chega a 10. */
export const DURACAO_MIN = 1;
export const DURACAO_MAX = 10;
export const DURACAO_PADRAO = 3;

/** Intervalo entre rounds, em minutos. Zero é treino corrido. */
export const DESCANSO_MIN = 0;
export const DESCANSO_MAX = 5;
export const DESCANSO_PADRAO = 1;

/** Minutos de esforço, já sem intervalo nem explicação do professor. */
export const MINUTOS_MIN = 1;
export const MINUTOS_MAX = 240;
export const MINUTOS_PADRAO = 30;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── As lutas de verdade ───────────────────────── */

/**
 * O formato das lutas, que é o que desmonta o "por hora". São regras do
 * esporte, não medição: a luta amadora de boxe tem 3 rounds de 3 minutos, e
 * a profissional mais longa, 12 de 3.
 */
export const LUTA_AMADORA = { rounds: 3, duracao: 3, descanso: 1 } as const;
export const LUTA_PROFISSIONAL = { rounds: 12, duracao: 3, descanso: 1 } as const;

/* ───────────────────────── O estudo ───────────────────────── */

/** Perusek et al.: saco de pancada, 30 minutos, calorimetria indireta. */
export const ESTUDO_SACO = {
  /** Consumo de oxigênio médio, em mL por kg por minuto. */
  vo2: 21.2,
  minutos: 30,
  blocos: 10,
  minutosPorBloco: 3,
  participantes: 29,
  homens: 15,
  mulheres: 14,
  idadeMedia: 25.6,
  fcMedia: 156,
} as const;

/** 1 MET é 3,5 mL de oxigênio por kg por minuto — a mesma base da equação. */
export const ML_O2_POR_MET = 3.5;

/* ───────────────────────── A tabela ───────────────────────── */

export type Grupo = 'saco' | 'boxe' | 'artes';

export interface Atividade {
  id: string;
  grupo: Grupo;
  nome: string;
  /** Nome curto, para os botões. */
  nomeCurto: string;
  met: number;
  codigo: string;
  comoReconhecer: string;
}

/**
 * Nove linhas do Compêndio 2024, as que conseguimos conferir, e só elas.
 *
 * Os quatro ritmos do saco são linhas separadas no Compêndio, e o valor
 * livre (5,8) fica abaixo até do ritmo de um golpe por segundo (7,0). Os
 * ritmos só valem para quem contou os golpes: no treino livre, as pausas
 * entre sequências estão dentro do 5,8.
 */
export const ATIVIDADES: Atividade[] = [
  {
    id: 'saco',
    grupo: 'saco',
    nome: 'Saco de pancada, ritmo livre',
    nomeCurto: 'Ritmo livre',
    met: 5.8,
    codigo: '15110',
    comoReconhecer: 'O treino no saco do jeito que ele acontece, com as pausas entre sequências.',
  },
  {
    id: 'saco60',
    grupo: 'saco',
    nome: 'Saco a 60 golpes por minuto',
    nomeCurto: '60 golpes/min',
    met: 7.0,
    codigo: '15113',
    comoReconhecer: 'Um golpe por segundo, sem parar. Só use se você contou.',
  },
  {
    id: 'saco120',
    grupo: 'saco',
    nome: 'Saco a 120 golpes por minuto',
    nomeCurto: '120 golpes/min',
    met: 8.5,
    codigo: '15115',
    comoReconhecer: 'Dois golpes por segundo, contínuos, o round inteiro.',
  },
  {
    id: 'saco180',
    grupo: 'saco',
    nome: 'Saco a 180 golpes por minuto',
    nomeCurto: '180 golpes/min',
    met: 10.8,
    codigo: '15118',
    comoReconhecer: 'Três golpes por segundo, contínuos. Só se sustenta em intervalo curto.',
  },
  {
    id: 'sparring',
    grupo: 'boxe',
    nome: 'Sparring',
    nomeCurto: 'Sparring',
    met: 7.8,
    codigo: '15120',
    comoReconhecer: 'Treino com parceiro e contato controlado.',
  },
  {
    id: 'simulado',
    grupo: 'boxe',
    nome: 'Round simulado, sem adversário',
    nomeCurto: 'Round simulado',
    met: 9.3,
    codigo: '15125',
    comoReconhecer: 'Round no ritmo de luta, sem adversário.',
  },
  {
    id: 'ringue',
    grupo: 'boxe',
    nome: 'Luta no ringue',
    nomeCurto: 'Luta no ringue',
    met: 12.3,
    codigo: '15100',
    comoReconhecer: 'Luta de verdade, contra adversário, valendo.',
  },
  {
    id: 'arteLeve',
    grupo: 'artes',
    nome: 'Arte marcial, ritmo lento ou iniciante',
    nomeCurto: 'Lento ou iniciante',
    met: 5.3,
    codigo: '15425',
    comoReconhecer: 'Técnica repetida devagar, ou quem está começando.',
  },
  {
    id: 'arte',
    grupo: 'artes',
    nome: 'Arte marcial, ritmo moderado',
    nomeCurto: 'Moderado',
    met: 10.3,
    codigo: '15430',
    comoReconhecer: 'Os exemplos do Compêndio: judô, jiu-jitsu, caratê, kickboxing, taekwondo e muay thai.',
  },
];

/**
 * Três grupos, e o saco separado: sob o nome do grupo, os botões dizem só o
 * ritmo. No celular de 320px isso tira três linhas de botões do caminho até
 * o resultado.
 */
export const GRUPOS: { id: Grupo; nome: string }[] = [
  { id: 'saco', nome: 'Saco de pancada' },
  { id: 'boxe', nome: 'Boxe' },
  { id: 'artes', nome: 'Artes marciais' },
];

export const atividade = (id: string): Atividade => ATIVIDADES.find((a) => a.id === id) ?? ATIVIDADES[0];

export const metLuta = (id: string): number => atividade(id).met;

/**
 * Valores que circulam e que esta página não usa, porque não conseguimos
 * conferi-los na fonte. "Não conferimos" é diferente de "não existe".
 */
export const SEM_CONFERENCIA = [
  'Judô, com valor próprio',
  'Taekwondo em combate',
  'Kickboxing, com valor próprio',
  'Kendo',
  'Kung fu',
] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

/** Round é número inteiro. "5,5 rounds" é erro de digitação, não dado. */
export const roundsValidos = (r: number | null): r is number =>
  r !== null && Number.isInteger(r) && r >= ROUNDS_MIN && r <= ROUNDS_MAX;

export const duracaoValida = (d: number | null): d is number =>
  d !== null && Number.isFinite(d) && d >= DURACAO_MIN && d <= DURACAO_MAX;

export const descansoValido = (d: number | null): d is number =>
  d !== null && Number.isFinite(d) && d >= DESCANSO_MIN && d <= DESCANSO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── O cálculo ───────────────────────── */

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

export type Cenario = 'rounds' | 'tempo';

export interface Resultado {
  cenario: Cenario;
  idAtividade: string;
  met: number;
  /** Minutos de esforço. É o que multiplica o MET. */
  minutosAtivos: number;
  /** Minutos de intervalo entre rounds. Zero fora do cenário de rounds. */
  minutosDescanso: number;
  rounds: number;
  duracao: number;
  kcal: number;
  kcalLiquida: number;
  /** Quanto do total veio do intervalo, contado como repouso. */
  kcalDescanso: number;
}

function monta(args: {
  cenario: Cenario;
  idAtividade: string;
  pesoKg: number;
  minutosAtivos: number;
  minutosDescanso: number;
  rounds: number;
  duracao: number;
}): Resultado {
  const met = metLuta(args.idAtividade);
  const doEsforco = kcalPorMinuto(met, args.pesoKg) * args.minutosAtivos;
  /*
   * O intervalo entra como repouso. Subestima de propósito: entre um round e
   * outro a pessoa está de pé, respirando forte, e gasta mais que parada.
   * Mas não conferimos medição do intervalo, e contar por cima seria pior.
   */
  const doDescanso = kcalPorMinuto(1, args.pesoKg) * args.minutosDescanso;
  const kcal = doEsforco + doDescanso;
  return {
    cenario: args.cenario,
    idAtividade: args.idAtividade,
    met,
    minutosAtivos: args.minutosAtivos,
    minutosDescanso: args.minutosDescanso,
    rounds: args.rounds,
    duracao: args.duracao,
    kcal,
    // O líquido desconta o repouso do relógio INTEIRO, intervalo incluído:
    // é o acréscimo real ao dia, contra ter ficado parado o mesmo tempo.
    kcalLiquida: kcal - kcalPorMinuto(1, args.pesoKg) * (args.minutosAtivos + args.minutosDescanso),
    kcalDescanso: doDescanso,
  };
}

/**
 * Modo 1 — rounds. O intervalo existe ENTRE os rounds: seis rounds têm cinco
 * intervalos, não seis. Depois do último, o treino acabou.
 */
export const deRounds = (
  rounds: number,
  duracao: number,
  descanso: number,
  pesoKg: number,
  idAtividade = 'saco',
): Resultado =>
  monta({
    cenario: 'rounds',
    idAtividade,
    pesoKg,
    minutosAtivos: rounds * duracao,
    minutosDescanso: Math.max(rounds - 1, 0) * descanso,
    rounds,
    duracao,
  });

/** Modo 2 — "treinei tantos minutos", já sem intervalo nem explicação. */
export const deTempo = (minutos: number, pesoKg: number, idAtividade = 'saco'): Resultado =>
  monta({ cenario: 'tempo', idAtividade, pesoKg, minutosAtivos: minutos, minutosDescanso: 0, rounds: 0, duracao: 0 });

/** Modo 3 — meta de calorias. Devolve minutos de esforço. */
export function deKcal(alvoKcal: number, pesoKg: number, idAtividade = 'saco'): Resultado {
  const porMin = kcalPorMinuto(metLuta(idAtividade), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...deTempo(minutos, pesoKg, idAtividade), kcal: alvoKcal };
}

/** Quantos rounds de uma duração cabem em tantos minutos de esforço. */
export const roundsEquivalentes = (minutos: number, duracao = DURACAO_PADRAO): number =>
  duracao > 0 ? Math.ceil(minutos / duracao - 1e-9) : 0;

export const simulacaoUmQuilo = (pesoKg: number, idAtividade = 'saco'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idAtividade);

/* ───────────────────────── As conferências ───────────────────────── */

/**
 * O saco medido contra a tabela.
 *
 * O consumo de oxigênio por quilo vira MET direto (÷ 3,5), sem depender do
 * peso de quem foi medido. Se ele não caísse perto do saco em ritmo livre,
 * a linha do Compêndio — ou a leitura do estudo — estaria errada.
 */
export const reproduzSaco = (): { metMedido: number; metDaTabela: number; erro: number } => {
  const metMedido = ESTUDO_SACO.vo2 / ML_O2_POR_MET;
  const metDaTabela = metLuta('saco');
  return { metMedido, metDaTabela, erro: Math.abs(metMedido - metDaTabela) / metDaTabela };
};

/** Uma luta de verdade, pelo formato do esporte. */
export const deLuta = (luta: { rounds: number; duracao: number; descanso: number }, pesoKg: number): Resultado =>
  deRounds(luta.rounds, luta.duracao, luta.descanso, pesoKg, 'ringue');

/**
 * O peso que uma promessa de kcal por hora exige.
 *
 * "Boxe queima 1.000 kcal por hora" só é verdade para alguém, e numa hora
 * que não acontece. Esta função diz para quem: o peso que, lutando no ringue
 * sem parar por uma hora, produziria aquele número.
 */
export const pesoParaKcalPorHora = (kcalHora: number, idAtividade = 'ringue'): number =>
  (kcalHora * 200) / (metLuta(idAtividade) * 3.5 * 60);

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export const formataKcal = (k: number): string => arredondaKcal(k).toLocaleString('pt-BR');

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (r === 0) return h === 1 ? '1 hora' : `${h} horas`;
  return `${h}h${String(r).padStart(2, '0')}`;
}

/** MET sempre com uma casa, como o Compêndio publica: "7,0", não "7". */
export const formataMet = (m: number): string =>
  m.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** "1 round", "6 rounds"; a duração aceita decimal ("2,5 min"). */
export const formataRounds = (rounds: number, duracao: number): string =>
  `${rounds} ${rounds === 1 ? 'round' : 'rounds'} de ${duracao.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} min`;

/*
 * Frases sem verbo concordando com o tempo ("1 hora ... representam" é o
 * erro que já apareceu no yoga). Virar a frase resolve para qualquer valor.
 */
/**
 * O nome dentro de uma frase: o qualificador vai entre parênteses. "Saco de
 * pancada, ritmo livre somam" lê como enumeração; "saco de pancada (ritmo
 * livre)" não.
 */
export const nomeNaFrase = (id: string): string => {
  const nome = atividade(id).nome.toLowerCase();
  const i = nome.indexOf(', ');
  return i < 0 ? nome : `${nome.slice(0, i)} (${nome.slice(i + 2)})`;
};

export function fraseContexto(pesoKg: number, r: Resultado): string {
  const at = nomeNaFrase(r.idAtividade);
  if (r.cenario === 'rounds') {
    /*
     * Sem verbo ligando os rounds ao resto: "1 round ... somam" é o erro de
     * concordância que já apareceu no yoga. Os dois-pontos resolvem para
     * qualquer número de rounds.
     */
    const intervalo =
      r.minutosDescanso > 0
        ? ` O intervalo, ${formataTempo(r.minutosDescanso)} no total, entra como repouso.`
        : '';
    return (
      `Para ${Math.round(pesoKg)} kg, ${formataRounds(r.rounds, r.duracao)} de ${at}: ` +
      `${formataTempo(r.minutosAtivos)} de esforço e um gasto estimado de ` +
      `aproximadamente ${formataKcal(r.kcal)} kcal.${intervalo}`
    );
  }
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ` +
    `${formataTempo(r.minutosAtivos)} de ${at} é de aproximadamente ${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaAtividade {
  atividade: Atividade;
  /** Um round de 3 minutos. */
  porRound: number;
  /** Trinta minutos de esforço. */
  meiaHora: number;
}

/** Cada linha do Compêndio, por round e por meia hora de esforço. */
export const tabelaAtividades = (pesoKg: number): LinhaAtividade[] =>
  ATIVIDADES.map((a) => ({
    atividade: a,
    porRound: deTempo(DURACAO_PADRAO, pesoKg, a.id).kcal,
    meiaHora: deTempo(30, pesoKg, a.id).kcal,
  }));

export interface LinhaPeso {
  peso: number;
  saco: number;
  sparring: number;
  arte: number;
}

/** Seis rounds de 3 minutos com 1 de intervalo, por peso. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => ({
    peso,
    saco: deRounds(ROUNDS_PADRAO, DURACAO_PADRAO, DESCANSO_PADRAO, peso, 'saco').kcal,
    sparring: deRounds(ROUNDS_PADRAO, DURACAO_PADRAO, DESCANSO_PADRAO, peso, 'sparring').kcal,
    arte: deRounds(ROUNDS_PADRAO, DURACAO_PADRAO, DESCANSO_PADRAO, peso, 'arte').kcal,
  }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_INTERVALO =
  'O intervalo entre rounds entra como repouso. É uma escolha conservadora: entre um round e outro você está de pé, respirando forte, e gasta mais que parado. Mas não conferimos medição do intervalo, e contar por cima seria pior que contar por baixo.';

export const NOTA_RITMO_SACO =
  'Os três ritmos do saco só valem para quem contou os golpes e manteve o ritmo o round inteiro. No treino livre, as pausas entre sequências estão dentro do 5,8 — que fica abaixo até do ritmo de um golpe por segundo. Se você não contou, use o ritmo livre.';

export const NOTA_SEM_CONFERENCIA =
  'Judô, jiu-jitsu, caratê, kickboxing, taekwondo e muay thai estão na calculadora dentro de "ritmo moderado", porque é assim que o Compêndio os agrupa: como exemplos de uma mesma linha. Valores próprios para judô, taekwondo, kickboxing, kendo e kung fu circulam atribuídos ao Compêndio de 2024. Não conseguimos conferir nenhum deles na fonte, e um deles se contradiz: kickboxing a 7,3, quando a linha que cita o kickboxing como exemplo dá 10,3. Preferimos não usar.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. Em luta, a variação entre pessoas é grande por um motivo que a tabela não vê: a técnica. Quem está começando gasta energia em movimento que não precisava; quem é experiente economiza onde pode — e o mesmo round custa diferente para os dois.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. Treinar luta aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Sparring e luta envolvem impacto, inclusive na cabeça, e são para fazer com professor, equipamento de proteção e parceiro no mesmo nível. No saco, punho e ombro são o que mais reclama — bandagem e luva adequada não são detalhe. Quem vai começar depois de anos parado deve conversar com um médico antes, e dor que persiste é assunto para médico ou fisioterapeuta, não para treinar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
