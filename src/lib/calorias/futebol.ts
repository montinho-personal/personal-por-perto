/**
 * O motor da página de calorias do futebol.
 *
 * A NONA DO CLUSTER — E A PRIMEIRA EM QUE O TEMPO É DECIDIDO POR UMA REGRA
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
 *
 * Três outras páginas já descontam tempo parado: a borda da piscina, o
 * intervalo entre séries de corda, o professor mostrando o passo. Nas três
 * a fração é estimada pela pessoa. Aqui ela é CALCULÁVEL, e é isso que
 * torna esta página diferente.
 *
 * A CONTA DA PELADA
 *
 * Numa pelada com time de fora, o campo comporta um número fixo de
 * jogadores — as vagas — e o resto espera. O total de minutos jogados por
 * todo mundo junto é vagas × duração, porque o campo está sempre cheio. Se
 * todos jogam por igual, cada pessoa jogou:
 *
 *     minutos em campo = duração × vagas ÷ pessoas presentes
 *
 * Society 7 contra 7 com 21 pessoas: 14 ÷ 21 = dois terços do tempo. Duas
 * horas de quadra alugada são oitenta minutos de futebol.
 *
 * E a média vale mesmo quando o rodízio não é justo. No "quem perde sai",
 * quem ganha fica mais e quem perde fica menos — mas os minutos de campo
 * não somem nem aparecem, só mudam de dono. A média do grupo continua
 * sendo exatamente vagas ÷ presentes. O que a regra muda é a distribuição,
 * não a média; e a ferramenta devolve a média, dizendo isso.
 *
 * O QUE O FORMATO MUDA, E O QUE NÃO MUDA
 *
 * Futsal, society e campo parecem atividades diferentes. Randers e colegas
 * mediram homens destreinados jogando 3 contra 3, 5 contra 5 e 7 contra 7,
 * sempre com 80 m² por jogador: frequência cardíaca média de 84%, 85% e
 * 83% da máxima, sem diferença. Com o mesmo espaço por jogador, o número de
 * jogadores não mudou a intensidade.
 *
 * Por isso aqui o formato NÃO muda o MET. Ele muda as vagas — e, com elas,
 * quanto tempo cada um joga. É a variável que o formato realmente mexe.
 *
 * A CONFERÊNCIA
 *
 * Beato e colegas estimaram o gasto de partidas recreativas de futsal de uma
 * hora em 15 homens sedentários de 83 kg: 634 kcal por partida, pela relação
 * individual entre frequência cardíaca e consumo de oxigênio. Isso implica
 * 7,3 METs. O Compêndio dá 7,0 para futebol casual. Uma medição de campo de
 * futsal recreativo e a tabela genérica de futebol casual ficam a 4% uma da
 * outra — o que também sustenta a decisão de não dar MET próprio ao formato.
 *
 * Uma ressalva de leitura, declarada na página: a partida tinha uma hora, e
 * o deslocamento foi rastreado em 52 minutos dela. Lemos as 634 kcal como da
 * partida inteira, que é o que o resumo diz. Se fossem só dos 52 minutos, o
 * MET seria 8,4 — ainda entre o casual (7,0) e o competitivo (9,5).
 *
 * Nota de método, porque a página de yoga critica relógio que estima caloria
 * por frequência cardíaca: aqui a relação foi calibrada em laboratório para
 * cada participante, em temperatura normal e em exercício dinâmico — o
 * domínio em que ela é válida. É o método de campo aceito. O que a página de
 * yoga critica é a equação genérica usada fora desse domínio.
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
    'mede futebol casual, geral, em 7,0 METs (código 15610) e futebol competitivo em 9,5 METs (código 15605 — era 10,0 na versão de 2011).',
};

export const FONTE_BEATO: Fonte = {
  rotulo:
    'Beato M, Impellizzeri FM, Coratella G, Schena F. Quantification of energy expenditure of recreational football. Journal of Sports Sciences, 34(24):2185–2188, 2016',
  rotuloCurto: 'Beato et al. (2016)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/27018845/',
  resumo:
    'estimou o gasto de partidas recreativas de futsal (5 contra 5) de uma hora em 15 homens sedentários de meia-idade, com 83 kg em média, pela relação individual entre frequência cardíaca e consumo de oxigênio: 634 ± 92 kcal por partida, 3.412 metros percorridos, a 85% da frequência cardíaca máxima.',
};

export const FONTE_RANDERS: Fonte = {
  rotulo:
    'Randers MB, et al. Physiological response and activity profile in recreational small-sided football: no effect of the number of players. Scandinavian Journal of Medicine & Science in Sports, 2014',
  rotuloCurto: 'Randers et al. (2014)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/24944137/',
  resumo:
    'fez 12 homens destreinados jogarem 3 contra 3, 5 contra 5 e 7 contra 7, sempre com 80 m² por jogador. A frequência cardíaca média foi de 84,1%, 84,5% e 82,8% da máxima, sem diferença entre os formatos.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_BEATO, FONTE_RANDERS, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

/** Minutos de fato em campo. */
export const MINUTOS_MIN = 5;
export const MINUTOS_MAX = 240;
export const MINUTOS_PADRAO = 60;

/** Tempo no local da pelada: a quadra alugada, do primeiro ao último jogo. */
export const LOCAL_MIN = 10;
export const LOCAL_MAX = 300;
export const LOCAL_PADRAO = 120;

/** Pessoas presentes para jogar, contando você e o time de fora. */
export const PRESENTES_MIN = 2;
export const PRESENTES_MAX = 80;
export const PRESENTES_PADRAO = 21;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── Os estudos ───────────────────────── */

/** Beato et al.: futsal recreativo, uma hora, homens sedentários. */
export const ESTUDO_FUTSAL = {
  kcalPorPartida: 634,
  desvio: 92,
  minutosDaPartida: 60,
  /** Minutos em que o deslocamento foi rastreado dentro da partida. */
  minutosRastreados: 52,
  pesoMedio: 83.0,
  participantes: 15,
  idadeMedia: 43.9,
  metrosPercorridos: 3412,
  fcPctMaxima: 85,
} as const;

/** Randers et al.: o mesmo espaço por jogador, três formatos. */
export const ESTUDO_FORMATOS = {
  participantes: 12,
  m2PorJogador: 80,
  fcPct: { '3v3': 84.1, '5v5': 84.5, '7v7': 82.8 },
} as const;

/* ───────────────────────── Intensidade ───────────────────────── */

export interface Nivel {
  id: string;
  nome: string;
  nomeCurto: string;
  met: number;
  codigo: string;
  comoReconhecer: string;
}

/**
 * Dois níveis, os dois do Compêndio 2024.
 *
 * Não há um terceiro para futsal nem para society, e isso é decisão com
 * fonte: com o mesmo espaço por jogador, o número de jogadores não mudou a
 * intensidade (Randers), e a medição de futsal recreativo cai a 4% do
 * futebol casual (Beato). Um MET próprio por formato seria precisão
 * inventada.
 */
export const NIVEIS: Nivel[] = [
  {
    id: 'casual',
    nome: 'Pelada ou jogo recreativo',
    nomeCurto: 'Pelada',
    met: 7.0,
    codigo: '15610',
    comoReconhecer: 'Racha, pelada, jogo com os amigos.',
  },
  {
    id: 'competitivo',
    nome: 'Jogo competitivo',
    nomeCurto: 'Competitivo',
    met: 9.5,
    codigo: '15605',
    comoReconhecer: 'Campeonato, jogo valendo.',
  },
];

export const nivel = (id: string): Nivel => NIVEIS.find((n) => n.id === id) ?? NIVEIS[0];

export const metFutebol = (id: string): number => nivel(id).met;

/* ───────────────────────── Formatos ───────────────────────── */

export interface Formato {
  id: string;
  nome: string;
  nomeCurto: string;
  /** Jogadores por time em campo, goleiro incluído. */
  porTime: number;
  /** "na quadra", "no society": a preposição muda com o formato. */
  emFormato: string;
}

export const FORMATOS: Formato[] = [
  { id: 'quadra', nome: 'Futsal ou quadra (5 contra 5)', nomeCurto: 'Quadra 5×5', porTime: 5, emFormato: 'na quadra' },
  { id: 'society', nome: 'Society (7 contra 7)', nomeCurto: 'Society 7×7', porTime: 7, emFormato: 'no society' },
  { id: 'campo', nome: 'Campo (11 contra 11)', nomeCurto: 'Campo 11×11', porTime: 11, emFormato: 'no campo' },
];

export const formato = (id: string): Formato => FORMATOS.find((f) => f.id === id) ?? FORMATOS[1];

/** Quantas pessoas cabem em campo ao mesmo tempo. */
export const vagas = (idFormato: string): number => formato(idFormato).porTime * 2;

/**
 * A fração do tempo que cada pessoa passa em campo, em média.
 *
 * Com menos gente que vagas, ninguém espera — joga-se com time menor e
 * todo mundo fica o tempo todo. Daí o teto em 1.
 */
export const fracaoEmCampo = (idFormato: string, presentes: number): number =>
  presentes > 0 ? Math.min(1, vagas(idFormato) / presentes) : 0;

/**
 * Pessoas que o futebol procura e para as quais não conferimos medição.
 *
 * "Não conferimos" é diferente de "ninguém mediu". A frase é sobre o que
 * esta página conseguiu verificar numa fonte primária, e é a única que
 * podemos afirmar.
 */
export const SEM_MEDICAO = ['Goleiro', 'Futebol de areia', 'Futevôlei', 'Futebol andando (walking football)'] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const localValido = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= LOCAL_MIN && m <= LOCAL_MAX;

/** Gente é número inteiro. "20,5 pessoas" é erro de digitação, não dado. */
export const presentesValidos = (p: number | null): p is number =>
  p !== null && Number.isInteger(p) && p >= PRESENTES_MIN && p <= PRESENTES_MAX;

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

export type Cenario = 'pelada' | 'campo';

export interface Resultado {
  cenario: Cenario;
  idNivel: string;
  met: number;
  /** Minutos de fato jogando. É o que multiplica o MET. */
  minutosEmCampo: number;
  /** Minutos no local. Igual aos de campo fora do cenário de pelada. */
  minutosLocal: number;
  /** Minutos esperando no time de fora. */
  minutosFora: number;
  /** Fração do tempo em campo, de 0 a 1. */
  fracao: number;
  idFormato: string;
  presentes: number;
  kcal: number;
  kcalLiquida: number;
}

function monta(args: {
  cenario: Cenario;
  idNivel: string;
  pesoKg: number;
  minutosEmCampo: number;
  minutosLocal: number;
  idFormato: string;
  presentes: number;
}): Resultado {
  const met = metFutebol(args.idNivel);
  /*
   * Só os minutos em campo entram no gasto. O tempo no time de fora é
   * gente de pé, parada ou andando devagar — perto do repouso, que é o que
   * a pessoa gastaria de qualquer forma. Ele não soma no líquido, e somá-lo
   * no bruto só inflaria o número com o que não é futebol.
   */
  const kcal = kcalPorMinuto(met, args.pesoKg) * args.minutosEmCampo;
  return {
    cenario: args.cenario,
    idNivel: args.idNivel,
    met,
    minutosEmCampo: args.minutosEmCampo,
    minutosLocal: args.minutosLocal,
    minutosFora: Math.max(args.minutosLocal - args.minutosEmCampo, 0),
    fracao: args.minutosLocal > 0 ? args.minutosEmCampo / args.minutosLocal : 1,
    idFormato: args.idFormato,
    presentes: args.presentes,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, args.pesoKg) * args.minutosEmCampo,
  };
}

/** Modo 1 — pelada com time de fora: tempo no local, formato e gente presente. */
export const dePelada = (
  minutosLocal: number,
  pesoKg: number,
  idFormato = 'society',
  presentes = PRESENTES_PADRAO,
  idNivel = 'casual',
): Resultado =>
  monta({
    cenario: 'pelada',
    idNivel,
    pesoKg,
    minutosEmCampo: minutosLocal * fracaoEmCampo(idFormato, presentes),
    minutosLocal,
    idFormato,
    presentes,
  });

/** Modo 2 — "joguei tantos minutos", já sem o tempo de fora. */
export const deTempo = (minutos: number, pesoKg: number, idNivel = 'casual'): Resultado =>
  monta({
    cenario: 'campo',
    idNivel,
    pesoKg,
    minutosEmCampo: minutos,
    minutosLocal: minutos,
    idFormato: 'society',
    presentes: 0,
  });

/** Modo 3 — meta de calorias. Devolve minutos em campo. */
export function deKcal(alvoKcal: number, pesoKg: number, idNivel = 'casual'): Resultado {
  const porMin = kcalPorMinuto(metFutebol(idNivel), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...deTempo(minutos, pesoKg, idNivel), kcal: alvoKcal };
}

export const simulacaoUmQuilo = (pesoKg: number, idNivel = 'casual'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idNivel);

/* ───────────────────────── As conferências ───────────────────────── */

/**
 * A medição de futsal recreativo contra a tabela de futebol casual.
 *
 * 634 kcal numa partida de uma hora, com 83 kg de peso médio, implicam um
 * MET. Se ele não caísse perto dos 7,0 do futebol casual, ou a tabela ou a
 * leitura do estudo estariam erradas — e a decisão de não dar MET próprio
 * ao futsal cairia junto.
 */
const metDoEstudo = (minutos: number): number =>
  ESTUDO_FUTSAL.kcalPorPartida / ((3.5 * ESTUDO_FUTSAL.pesoMedio) / 200) / minutos;

export const reproduzFutsal = (): {
  metImplicado: number;
  metDaTabela: number;
  erro: number;
  /** O MET se o gasto fosse só dos 52 minutos rastreados — o teto da leitura. */
  metSeRastreado: number;
} => {
  const metImplicado = metDoEstudo(ESTUDO_FUTSAL.minutosDaPartida);
  const metDaTabela = metFutebol('casual');
  return {
    metImplicado,
    metDaTabela,
    erro: Math.abs(metImplicado - metDaTabela) / metDaTabela,
    metSeRastreado: metDoEstudo(ESTUDO_FUTSAL.minutosRastreados),
  };
};

/**
 * O peso que uma promessa de kcal por hora exige.
 *
 * "Futebol queima até 1.000 kcal por hora" só é verdade para alguém. Esta
 * função diz para quem: o peso que, jogando o tempo todo naquele nível,
 * produziria aquele número.
 */
export const pesoParaKcalPorHora = (kcalHora: number, idNivel = 'competitivo'): number =>
  (kcalHora * 200) / (metFutebol(idNivel) * 3.5 * 60);

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

export const formataPct = (f: number): string => `${Math.round(f * 100)}%`;

/** MET sempre com uma casa, como o Compêndio publica: "7,0", não "7". */
export const formataMet = (m: number): string =>
  m.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/*
 * Frases sem verbo concordando com o tempo ("1 hora ... representam" é o
 * erro que já apareceu no yoga). Virar a frase resolve para qualquer valor.
 */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  const nv = nivel(r.idNivel).nome.toLowerCase();
  if (r.cenario === 'pelada') {
    const f = formato(r.idFormato);
    if (r.fracao >= 1) {
      return (
        `Com ${r.presentes} pessoas para ${vagas(r.idFormato)} vagas ${f.emFormato}, ` +
        `ninguém fica de fora. Para ${Math.round(pesoKg)} kg, o gasto estimado de ` +
        `${formataTempo(r.minutosEmCampo)} de ${nv} é de aproximadamente ${formataKcal(r.kcal)} kcal.`
      );
    }
    return (
      `Com ${r.presentes} pessoas para ${vagas(r.idFormato)} vagas, cada um joga em média ` +
      `${formataPct(r.fracao)} do tempo: ${formataTempo(r.minutosEmCampo)} em campo, de ` +
      `${formataTempo(r.minutosLocal)} no local. Para ${Math.round(pesoKg)} kg, o gasto estimado é ` +
      `de aproximadamente ${formataKcal(r.kcal)} kcal.`
    );
  }
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ` +
    `${formataTempo(r.minutosEmCampo)} de ${nv} é de aproximadamente ${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaPeso {
  peso: number;
  casual: number;
  competitivo: number;
}

/** Uma hora inteira em campo, por peso, nos dois níveis. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => ({
    peso,
    casual: deTempo(60, peso, 'casual').kcal,
    competitivo: deTempo(60, peso, 'competitivo').kcal,
  }));

export interface LinhaRodizio {
  formato: Formato;
  presentes: number;
  fracao: number;
  minutosEmCampo: number;
  kcal: number;
}

/**
 * A tabela central: duas horas de quadra, por formato e por lotação.
 *
 * Só entram combinações que acontecem de verdade: o formato com o campo
 * cheio (ninguém de fora), com um time de fora e com dois.
 */
export const tabelaRodizio = (pesoKg: number, minutosLocal = LOCAL_PADRAO): LinhaRodizio[] =>
  FORMATOS.flatMap((f) =>
    [2, 3, 4].map((times) => {
      const presentes = f.porTime * times;
      const r = dePelada(minutosLocal, pesoKg, f.id, presentes, 'casual');
      return { formato: f, presentes, fracao: r.fracao, minutosEmCampo: r.minutosEmCampo, kcal: r.kcal };
    }),
  );

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_MEDIA_EXATA =
  'A conta devolve a média do grupo, e a média é exata: o campo comporta um número fixo de jogadores, então o total de minutos jogados por todo mundo é vagas × tempo. No "quem perde sai", quem ganha fica mais e quem perde fica menos — mas os minutos só mudam de dono, não somem. Se o seu time ganhou a noite inteira, você jogou mais que a média; se perdeu tudo, menos.';

export const NOTA_FORMATO =
  'Futsal, society e campo não ganharam MET próprio, e isso é decisão com fonte. Com o mesmo espaço por jogador, 3 contra 3, 5 contra 5 e 7 contra 7 deram praticamente a mesma frequência cardíaca média em homens destreinados — entre 83% e 85% da máxima. O que o formato muda de verdade é quantas pessoas cabem em campo — e, com isso, quanto tempo cada uma espera.';

export const NOTA_FORA =
  'O tempo no time de fora não entra no gasto. É gente de pé, conversando, bebendo água — perto do repouso, que a pessoa gastaria de qualquer jeito. Somá-lo só inflaria o número com o que não é futebol.';

export const NOTA_GOLEIRO =
  'Esta conta é para jogador de linha. Para goleiro, não encontramos medição de gasto que pudéssemos conferir, e o número de linha superestima para quem ficou no gol a noite inteira. No rodízio em que todo mundo passa pelo gol, a diferença se dilui.';

export const NOTA_SEM_MEDICAO =
  'Goleiro, futebol de areia, futevôlei e futebol andando não estão na calculadora porque não conseguimos conferir um valor medido para eles numa fonte primária. Números para eles circulam; não sabemos de onde vêm, e preferimos dizer isso.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado nos mesmos minutos em campo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. Em futebol a variação entre pessoas é grande por um motivo que a tabela não vê: o jeito de jogar. No mesmo jogo e no mesmo time, quem volta para marcar corre bem mais que quem fica esperando a bola.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O futebol aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Futebol é esporte de arrancada, freada e contato, e quem joga só no fim de semana está pedindo ao corpo um esforço que ele não treinou durante a semana. Tornozelo, joelho, virilha e posterior de coxa costumam ser o que mais sofre. Quem está voltando depois de anos parado, principalmente depois dos 40, deve conversar com um médico antes — e dor que persiste depois do jogo é assunto para médico ou fisioterapeuta, não para jogar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
