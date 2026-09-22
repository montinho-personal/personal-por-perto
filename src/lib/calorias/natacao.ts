/**
 * O motor da página de calorias da natação.
 *
 * A QUARTA FÍSICA DO CLUSTER
 *
 * As três primeiras atividades mostraram três relações diferentes entre
 * ritmo e gasto:
 *
 *     caminhada → o que decide é o tempo (e a subida)
 *     corrida   → o que decide é a distância; o ritmo quase não muda o custo
 *     bicicleta → o que decide é a velocidade, e de forma explosiva
 *
 * A natação traz a quarta, e é a mais incômoda de todas: o que decide é o
 * ESTILO e a TÉCNICA. Não o tempo, não a distância, não a velocidade.
 *
 * Duas pessoas do mesmo peso, na mesma piscina, pela mesma hora, podem
 * gastar 340 ou 970 kcal sem que nenhuma das duas esteja fazendo nada
 * errado — uma está nadando peito de recreação, a outra está fazendo
 * borboleta. Nos valores medidos do Compêndio, peito recreativo dá 5,3
 * METs e borboleta dá 13,8. É 2,6 vezes, só trocando o estilo.
 *
 * A ÁGUA COBRA DE UM JEITO DIFERENTE
 *
 * A água é cerca de 800 vezes mais densa que o ar. Correndo, o arrasto é
 * desprezível na velocidade de qualquer mortal; pedalando, ele é dominante
 * acima de 20 km/h; nadando, ele é dominante SEMPRE — inclusive a 2 km/h.
 *
 * E o arrasto na água depende muito mais de como o corpo está posicionado
 * do que da força que ele faz. É por isso que a técnica manda tanto: a
 * literatura mede que, na MESMA velocidade, um nadador de nível alto gasta
 * cerca de 55% menos que um nadador lento (Zamparo e colegas). Nenhuma
 * outra atividade do cluster tem uma dispersão dessas entre pessoas.
 *
 * O ACHADO QUE MUDOU O DESENHO DESTA PÁGINA
 *
 * Calculando o custo por 100 m a partir das três faixas de crawl que o
 * Compêndio publica COM ritmo medido junto, aparece isto (70 kg):
 *
 *     crawl lento  (34 m/min, 5,8 METs) → 20,7 kcal por 100 m
 *     crawl médio  (46 m/min, 8,0 METs) → 21,4 kcal por 100 m
 *     crawl rápido (69 m/min, 10,5 METs) → 18,8 kcal por 100 m
 *
 * Quase plano — e o mais rápido é o mais barato. Isso parece contradizer a
 * física do arrasto, mas não contradiz: as faixas do Compêndio descrevem
 * PESSOAS DIFERENTES. Quem nada 69 m/min tem técnica; quem nada 34 m/min
 * não tem. Dois efeitos gigantes se cancelando — a velocidade encarecendo,
 * a técnica barateando.
 *
 * Para a MESMA pessoa nada se cancela: acelerar encarece muito o metro
 * (0,70 → 1,23 → 2,20 kJ/m a 1,0, 1,5 e 2,0 m/s na medição de Zamparo em
 * nadadores de elite), e melhorar a técnica barateia.
 *
 * A conclusão prática, que nenhuma calculadora brasileira diz: na natação,
 * treinar técnica muda mais o seu gasto do que treinar fôlego — e o número
 * que a internet te dá é o de outra pessoa.
 *
 * CONFERÊNCIA CONTRA FONTE INDEPENDENTE
 *
 * As três faixas de crawl, convertidas para kJ por metro, dão 0,87 / 0,90
 * / 0,78. O ponto medido mais próximo em Zamparo é 0,70 kJ/m a 1,0 m/s,
 * em nadador de elite. Comparando cada faixa com esse ponto:
 *
 *     lento  (0,57 m/s → 43% mais devagar) custa 24% MAIS por metro
 *     médio  (0,76 m/s → 24% mais devagar) custa 28% MAIS por metro
 *     rápido (1,14 m/s → 14% mais rápido)  custa só 12% mais
 *
 * É a assinatura da técnica, medida. As duas faixas lentas nadam bem mais
 * devagar que o elite e mesmo assim pagam mais caro pelo metro. A faixa
 * rápida nada MAIS rápido que o elite e quase empata — porque quem nada
 * 69 m/min já tem técnica.
 *
 * A conferência é contra o ponto medido, e não contra uma reta traçada
 * entre pontos: a curva de Zamparo tem três medições (1,0, 1,5 e 2,0 m/s)
 * e é convexa, então interpolar em linha reta entre elas superestima o
 * meio. Comparar a faixa rápida contra essa reta dava a falsa impressão de
 * que o Compêndio estava barato demais. Estava a reta, não o Compêndio.
 *
 * O RELÓGIO DA PISCINA NÃO É O RELÓGIO DO NADO
 *
 * Este é o erro que infla todas as calculadoras do gênero. Os METs do
 * Compêndio são de nado acontecendo. "Uma hora de natação", na boca de
 * quem nada, quase sempre quer dizer uma hora DE PISCINA — com borda,
 * conversa, ajuste de óculos e descanso entre séries.
 *
 * Aplicar 8 METs a 60 minutos de piscina quando o nado efetivo foram 40
 * superestima em 50%. Por isso existe um cenário próprio para isso aqui, e
 * quem responde quanto descansou é a pessoa, não a ferramenta.
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
  url: 'https://pacompendium.com/water-activities/',
  resumo:
    'mede a natação por estilo e por esforço, e só no crawl publica o ritmo junto do MET: 5,8 METs a 30–45 jardas por minuto, 8,0 a cerca de 50 e 10,5 a cerca de 75. Nos outros estilos publica o MET sem ritmo medido.',
};

export const FONTE_ZAMPARO: Fonte = {
  rotulo:
    'Zamparo P, Capelli C, Pendergast D. Energy cost of swimming of elite long-distance swimmers. European Journal of Applied Physiology, 2005',
  rotuloCurto: 'Zamparo et al. (2005)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/16007454/',
  resumo:
    'mede o custo energético do crawl em nadadores de elite: 0,70 kJ por metro a 1,0 m/s, 1,23 a 1,5 m/s e 2,20 a 2,0 m/s. É a medição que mostra que, para a mesma pessoa, acelerar encarece muito o metro.',
};

export const FONTE_ECONOMIA: Fonte = {
  rotulo:
    'Pendergast DR, Di Prampero PE, Craig AB, et al. Analysis of determinants of swimming economy in front crawl. European Journal of Applied Physiology, 1990',
  rotuloCurto: 'Pendergast et al. (1990)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/2289503/',
  resumo:
    'compara nadadores de níveis diferentes na mesma velocidade e encontra até 55% de diferença no custo energético entre o nível mais alto e o mais baixo — a evidência de que técnica, e não fôlego, é o que mais mexe no gasto da natação.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_ZAMPARO, FONTE_ECONOMIA, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 1;
export const MINUTOS_MAX = 300;
export const MINUTOS_PADRAO = 30;

/** Metros nadados. Meia piscina até uma travessia longa. */
export const METROS_MIN = 25;
export const METROS_MAX = 20000;
export const METROS_PADRAO = 1000;

/**
 * Ritmo, em segundos por 100 m. O recorde mundial dos 100 m livre está
 * perto de 46 s; abaixo disso não existe gente. Acima de 5 min por 100 m
 * já não é nado, é flutuar com deslocamento.
 */
export const RITMO_MIN = 45;
export const RITMO_MAX = 300;

/** Quanto do tempo de piscina foi borda, e não nado. */
export const DESCANSO_MIN = 0;
export const DESCANSO_MAX = 70;

export const KCAL_MIN = 20;
export const KCAL_MAX = 5000;

/**
 * Borboleta é o único estilo cujo MET alto não se sustenta por tempo longo.
 *
 * Provas de borboleta terminam nos 200 m — cerca de dois minutos. Em treino
 * ela aparece em séries curtas, nunca em nado contínuo. Aplicar 13,8 METs a
 * uma hora inteira dá um número correto para um cenário que não existe.
 */
export const BORBOLETA_MINUTOS_ALERTA = 15;

/* ───────────────────────── Tabelas do Compêndio ───────────────────────── */

export type EstiloId = 'crawl' | 'costas' | 'peito' | 'borboleta';

export interface Banda {
  id: string;
  met: number;
  nome: string;
  comoReconhecer: string;
  /**
   * Metros por minuto, quando o Compêndio publicou o ritmo junto do MET.
   * Só o crawl tem. Nos outros estilos é null, e a ferramenta pede o ritmo
   * da pessoa em vez de inventar um.
   */
  metrosPorMin: number | null;
}

export interface Estilo {
  id: EstiloId;
  nome: string;
  nomeCurto: string;
  descricao: string;
  bandas: Banda[];
}

/**
 * Valores do Compêndio 2024, copiados e não ajustados.
 *
 * As faixas de crawl vêm em jardas por minuto na fonte: 30–45 (centro 37,5),
 * ~50 e ~75. Convertidas a 0,9144 m por jarda, dão 34,3, 45,7 e 68,6 m/min.
 */
export const ESTILOS: Estilo[] = [
  {
    id: 'crawl',
    nome: 'Crawl (nado livre)',
    nomeCurto: 'Crawl',
    descricao:
      'O estilo mais eficiente e o único que o Compêndio publica com ritmo medido junto do MET — por isso é o que ancora as contas de distância desta página.',
    bandas: [
      {
        id: 'lento',
        met: 5.8,
        nome: 'Lento',
        comoReconhecer: 'Cerca de 34 m por minuto, ou 2min55 a cada 100 m. Ritmo de quem está aprendendo ou nadando para relaxar.',
        metrosPorMin: 34.3,
      },
      {
        id: 'medio',
        met: 8.0,
        nome: 'Médio',
        comoReconhecer: 'Cerca de 46 m por minuto, ou 2min11 a cada 100 m. Ritmo de quem nada com regularidade.',
        metrosPorMin: 45.7,
      },
      {
        id: 'rapido',
        met: 10.5,
        nome: 'Rápido',
        comoReconhecer: 'Cerca de 69 m por minuto, ou 1min27 a cada 100 m. Ritmo de treino de quem nada bem.',
        metrosPorMin: 68.6,
      },
    ],
  },
  {
    id: 'costas',
    nome: 'Costas',
    nomeCurto: 'Costas',
    descricao:
      'O estilo mais barato em intensidade recreativa — 4,8 METs, o menor de toda a tabela da natação. Respirar é livre, o que deixa o ritmo cair naturalmente.',
    bandas: [
      {
        id: 'lazer',
        met: 4.8,
        nome: 'Recreativo',
        comoReconhecer: 'Nado de costas sem compromisso com o relógio.',
        metrosPorMin: null,
      },
      {
        id: 'treino',
        met: 9.5,
        nome: 'Treino',
        comoReconhecer: 'Nado de costas em série, com ritmo cobrado.',
        metrosPorMin: null,
      },
    ],
  },
  {
    id: 'peito',
    nome: 'Peito',
    nomeCurto: 'Peito',
    descricao:
      'O estilo que mais gente nada no Brasil e o que menos rende por braçada: a pernada de peito é potente, mas a posição do corpo freia a cada ciclo.',
    bandas: [
      {
        id: 'lazer',
        met: 5.3,
        nome: 'Recreativo',
        comoReconhecer: 'O peito de sempre, com a cabeça fora da água boa parte do tempo.',
        metrosPorMin: null,
      },
      {
        id: 'treino',
        met: 10.3,
        nome: 'Treino',
        comoReconhecer: 'Peito técnico, com cabeça entrando na água e ritmo cobrado.',
        metrosPorMin: null,
      },
    ],
  },
  {
    id: 'borboleta',
    nome: 'Borboleta',
    nomeCurto: 'Borboleta',
    descricao:
      'O topo da tabela: 13,8 METs, mais do que correr a 14 km/h. E o único estilo que praticamente ninguém sustenta por tempo longo — ele aparece em séries curtas.',
    bandas: [
      {
        id: 'geral',
        met: 13.8,
        nome: 'Geral',
        comoReconhecer: 'Borboleta acontecendo. O Compêndio não separa por intensidade porque não existe borboleta lenta.',
        metrosPorMin: null,
      },
    ],
  },
];

export const estilo = (id: EstiloId): Estilo => ESTILOS.find((e) => e.id === id) ?? ESTILOS[0];

export const banda = (idEstilo: EstiloId, idBanda: string): Banda => {
  const e = estilo(idEstilo);
  return e.bandas.find((b) => b.id === idBanda) ?? e.bandas[0];
};

/** O MET de um par estilo + banda. */
export const metNatacao = (idEstilo: EstiloId, idBanda: string): number =>
  banda(idEstilo, idBanda).met;

/**
 * Cenários de descanso para o modo "tempo de piscina".
 *
 * Não são constante da literatura, e a página diz isso: são três situações
 * nomeadas para a pessoa se reconhecer em uma, com o campo aberto para quem
 * sabe o próprio número.
 */
export const CENARIOS_PISCINA = [
  { id: 'continuo', nome: 'Nado contínuo', descanso: 5, descricao: 'Entra e nada quase sem parar. Um ou outro ajuste de óculos.' },
  { id: 'aula', nome: 'Aula ou série', descanso: 30, descricao: 'Nada em blocos com descanso na borda entre eles. O caso mais comum.' },
  { id: 'social', nome: 'Piscina social', descanso: 50, descricao: 'Metade do tempo é conversa, espera de raia e borda.' },
] as const;

export type CenarioId = (typeof CENARIOS_PISCINA)[number]['id'];

export const cenario = (id: CenarioId) =>
  CENARIOS_PISCINA.find((c) => c.id === id) ?? CENARIOS_PISCINA[1];

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const metrosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= METROS_MIN && m <= METROS_MAX;

export const ritmoValido = (s: number | null): s is number =>
  s !== null && Number.isFinite(s) && s >= RITMO_MIN && s <= RITMO_MAX;

export const descansoValido = (d: number | null): d is number =>
  d !== null && Number.isFinite(d) && d >= DESCANSO_MIN && d <= DESCANSO_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/**
 * Aceita ritmo tanto como "2:11" quanto como "131" (segundos) ou "2,18"
 * (minutos decimais não — seria ambíguo demais; dois-pontos ou segundos).
 */
export function parseRitmo(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '');
  if (!limpo) return null;
  const comDoisPontos = limpo.match(/^(\d{1,2})[:.](\d{1,2})$/);
  if (comDoisPontos) {
    const min = Number(comDoisPontos[1]);
    const seg = Number(comDoisPontos[2]);
    if (seg >= 60) return null;
    return min * 60 + seg;
  }
  const n = Number(limpo.replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── Contas ───────────────────────── */

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

/** Segundos por 100 m a partir de metros por minuto. */
export const ritmoDeVelocidade = (metrosPorMin: number): number =>
  metrosPorMin > 0 ? (100 / metrosPorMin) * 60 : 0;

/** Metros por minuto a partir de segundos por 100 m. */
export const velocidadeDeRitmo = (segPor100: number): number =>
  segPor100 > 0 ? (100 / segPor100) * 60 : 0;

/** O ritmo de referência de uma banda, quando ela tem um. */
export const ritmoDaBanda = (b: Banda): number | null =>
  b.metrosPorMin === null ? null : ritmoDeVelocidade(b.metrosPorMin);

/** Custo por 100 m, em kcal. É a unidade natural de quem nada. */
export const kcalPor100m = (met: number, pesoKg: number, segPor100: number): number =>
  kcalPorMinuto(met, pesoKg) * (segPor100 / 60);

/**
 * Quanto o ritmo informado pode fugir do ritmo da faixa antes de virar aviso.
 *
 * Só faz sentido no crawl, que é onde o Compêndio publicou ritmo medido — e
 * ali a faixa É definida pelo ritmo. Dizer "crawl rápido" e informar 3 min
 * por 100 m é pedir o MET de uma pessoa com o ritmo de outra, que é
 * exatamente o erro que esta página existe para não cometer.
 */
export const DESVIO_RITMO_ALERTA = 0.3;

export function ritmoIncoerente(
  idEstilo: EstiloId,
  idBanda: string,
  segPor100: number,
): boolean {
  const r = ritmoDaBanda(banda(idEstilo, idBanda));
  if (r === null || !Number.isFinite(segPor100) || segPor100 <= 0) return false;
  return Math.abs(segPor100 - r) / r > DESVIO_RITMO_ALERTA;
}

/* ───────────────────────── O cálculo ───────────────────────── */

export type Cenario = 'agua' | 'piscina';

export interface Resultado {
  cenario: Cenario;
  idEstilo: EstiloId;
  idBanda: string;
  met: number;
  /** Minutos de nado acontecendo. É o que multiplica o MET. */
  minutosNado: number;
  /** Minutos de relógio de piscina. Igual ao de nado fora do cenário piscina. */
  minutosPiscina: number;
  descanso: number;
  /** Metros nadados. Zero quando não há ritmo para derivar distância. */
  metros: number;
  /** Segundos por 100 m usados na conta. Zero quando a distância não entrou. */
  ritmo: number;
  kcal: number;
  kcalLiquida: number;
  /** Custo por 100 m, quando houve ritmo. */
  por100m: number;
  /** Borboleta por tempo longo. Ver BORBOLETA_MINUTOS_ALERTA. */
  volumeImplausivel: boolean;
}

function monta(args: {
  cenario: Cenario;
  idEstilo: EstiloId;
  idBanda: string;
  pesoKg: number;
  minutosNado: number;
  minutosPiscina: number;
  descanso: number;
  metros: number;
  ritmo: number;
}): Resultado {
  const met = metNatacao(args.idEstilo, args.idBanda);
  const kcal = kcalPorMinuto(met, args.pesoKg) * args.minutosNado;
  return {
    cenario: args.cenario,
    idEstilo: args.idEstilo,
    idBanda: args.idBanda,
    met,
    minutosNado: args.minutosNado,
    minutosPiscina: args.minutosPiscina,
    descanso: args.descanso,
    metros: args.metros,
    ritmo: args.ritmo,
    kcal,
    // O líquido desconta o metabolismo de repouso do tempo de nado, não do
    // tempo de piscina: na borda a pessoa gastaria o de repouso de qualquer
    // jeito, e ele já não está sendo contado ali.
    kcalLiquida: kcal - kcalPorMinuto(1, args.pesoKg) * args.minutosNado,
    por100m: args.ritmo > 0 ? kcalPor100m(met, args.pesoKg, args.ritmo) : 0,
    volumeImplausivel: args.idEstilo === 'borboleta' && args.minutosNado > BORBOLETA_MINUTOS_ALERTA,
  };
}

/** Modo 1 — "nadei tantos minutos", já descontada a borda. */
export const deTempo = (
  minutos: number,
  pesoKg: number,
  idEstilo: EstiloId,
  idBanda: string,
): Resultado => {
  const r = ritmoDaBanda(banda(idEstilo, idBanda));
  return monta({
    cenario: 'agua',
    idEstilo,
    idBanda,
    pesoKg,
    minutosNado: minutos,
    minutosPiscina: minutos,
    descanso: 0,
    metros: r === null ? 0 : velocidadeDeRitmo(r) * minutos,
    ritmo: r ?? 0,
  });
};

/** Modo 2 — "nadei tantos metros, neste ritmo". O tempo sai daí. */
export const deDistancia = (
  metros: number,
  pesoKg: number,
  idEstilo: EstiloId,
  idBanda: string,
  segPor100: number,
): Resultado => {
  const minutos = (metros / 100) * (segPor100 / 60);
  return monta({
    cenario: 'agua',
    idEstilo,
    idBanda,
    pesoKg,
    minutosNado: minutos,
    minutosPiscina: minutos,
    descanso: 0,
    metros,
    ritmo: segPor100,
  });
};

/**
 * Modo 3 — tempo de PISCINA, com a borda descontada.
 *
 * É a correção que falta em todas as calculadoras do gênero: o MET vale
 * para o nado, e o relógio da piscina inclui o que não foi nado.
 */
export const dePiscina = (
  minutosPiscina: number,
  pesoKg: number,
  idEstilo: EstiloId,
  idBanda: string,
  descansoPct: number,
): Resultado => {
  const minutosNado = minutosPiscina * (1 - descansoPct / 100);
  const r = ritmoDaBanda(banda(idEstilo, idBanda));
  return monta({
    cenario: 'piscina',
    idEstilo,
    idBanda,
    pesoKg,
    minutosNado,
    minutosPiscina,
    descanso: descansoPct,
    metros: r === null ? 0 : velocidadeDeRitmo(r) * minutosNado,
    ritmo: r ?? 0,
  });
};

/** Modo 4 — meta de calorias. Devolve tempo de nado e metros. */
export function deKcal(
  alvoKcal: number,
  pesoKg: number,
  idEstilo: EstiloId,
  idBanda: string,
  segPor100: number,
): Resultado {
  const porMin = kcalPorMinuto(metNatacao(idEstilo, idBanda), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  const metros = velocidadeDeRitmo(segPor100) * minutos;
  return {
    ...monta({
      cenario: 'agua',
      idEstilo,
      idBanda,
      pesoKg,
      minutosNado: minutos,
      minutosPiscina: minutos,
      descanso: 0,
      metros,
      ritmo: segPor100,
    }),
    kcal: alvoKcal,
  };
}

export const simulacaoUmQuilo = (
  pesoKg: number,
  idEstilo: EstiloId,
  idBanda: string,
  segPor100: number,
): Resultado => deKcal(KCAL_POR_KG_GORDURA, pesoKg, idEstilo, idBanda, segPor100);

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (r === 0) return h === 1 ? '1 hora' : `${h} horas`;
  return `${h}h${String(r).padStart(2, '0')}`;
}

export function formataMetros(m: number): string {
  if (!Number.isFinite(m) || m <= 0) return '—';
  if (m >= 1000) return `${(Math.round(m / 10) / 100).toLocaleString('pt-BR')} km`;
  return `${Math.round(m / 25) * 25} m`;
}

/** Ritmo em segundos por 100 m vira "2min11" — como nadador fala. */
export function formataRitmo(segPor100: number): string {
  if (!Number.isFinite(segPor100) || segPor100 <= 0) return '—';
  const total = Math.round(segPor100);
  const min = Math.floor(total / 60);
  const seg = total % 60;
  if (min === 0) return `${seg}s`;
  return `${min}min${String(seg).padStart(2, '0')}`;
}

export const formataRitmoCurto = (segPor100: number): string => {
  if (!Number.isFinite(segPor100) || segPor100 <= 0) return '—';
  const total = Math.round(segPor100);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
};

export function fraseContexto(pesoKg: number, r: Resultado): string {
  const e = estilo(r.idEstilo);
  const b = banda(r.idEstilo, r.idBanda);
  const nomeBanda = e.bandas.length > 1 ? ` em ritmo ${b.nome.toLowerCase()}` : '';
  if (r.cenario === 'piscina') {
    return (
      `Para uma pessoa de ${Math.round(pesoKg)} kg, ${formataTempo(r.minutosPiscina)} de piscina ` +
      `nadando ${e.nomeCurto.toLowerCase()}${nomeBanda}, com ${Math.round(r.descanso)}% do tempo de ` +
      `borda, dão ${formataTempo(r.minutosNado)} de nado e um gasto estimado de aproximadamente ` +
      `${arredondaKcal(r.kcal).toLocaleString('pt-BR')} kcal.`
    );
  }
  const dist = r.metros > 0 ? `${formataMetros(r.metros)} de ` : '';
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, ${dist}${e.nomeCurto.toLowerCase()}${nomeBanda} ` +
    `durante ${formataTempo(r.minutosNado)} representa um gasto estimado de aproximadamente ` +
    `${arredondaKcal(r.kcal).toLocaleString('pt-BR')} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
export const TEMPOS_TABELA = [15, 30, 45, 60, 90] as const;
export const DISTANCIAS_TABELA = [400, 800, 1000, 1500, 2000, 3000] as const;

export interface LinhaEstilo {
  estilo: Estilo;
  banda: Banda;
  met: number;
  kcal: number;
}

/**
 * A tabela que prova a tese: mesmo peso, mesmo tempo, estilos diferentes.
 * Entra uma linha por banda de cada estilo, em ordem de MET.
 */
export const tabelaPorEstilo = (pesoKg: number, minutos: number): LinhaEstilo[] =>
  ESTILOS.flatMap((e) =>
    e.bandas.map((b) => ({
      estilo: e,
      banda: b,
      met: b.met,
      kcal: arredondaKcal(kcalPorMinuto(b.met, pesoKg) * minutos),
    })),
  ).sort((a, b) => a.met - b.met);

export interface LinhaPeso {
  peso: number;
  kcal: number;
  kcalLiquida: number;
}

export const tabelaPorPeso = (
  minutos: number,
  idEstilo: EstiloId,
  idBanda: string,
): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const r = deTempo(minutos, peso, idEstilo, idBanda);
    return { peso, kcal: arredondaKcal(r.kcal), kcalLiquida: arredondaKcal(r.kcalLiquida) };
  });

export interface LinhaTempo {
  minutos: number;
  kcal: number;
  metros: number;
}

export const tabelaPorTempo = (
  pesoKg: number,
  idEstilo: EstiloId,
  idBanda: string,
): LinhaTempo[] =>
  TEMPOS_TABELA.map((minutos) => {
    const r = deTempo(minutos, pesoKg, idEstilo, idBanda);
    return { minutos, kcal: arredondaKcal(r.kcal), metros: r.metros };
  });

export interface LinhaDistancia {
  metros: number;
  kcal: number;
  minutos: number;
}

export const tabelaPorDistancia = (
  pesoKg: number,
  idEstilo: EstiloId,
  idBanda: string,
  segPor100: number,
): LinhaDistancia[] =>
  DISTANCIAS_TABELA.map((metros) => {
    const r = deDistancia(metros, pesoKg, idEstilo, idBanda, segPor100);
    return { metros, kcal: arredondaKcal(r.kcal), minutos: r.minutosNado };
  });

export interface LinhaCusto {
  banda: Banda;
  metrosPorMin: number;
  ritmo: number;
  kcalPor100m: number;
  kJPorMetro: number;
}

/**
 * O achado do cabeçalho: custo por 100 m nas três faixas de crawl, que o
 * Compêndio publica com ritmo medido. Sai quase plano, e o motivo está
 * escrito na página.
 */
export const tabelaCustoCrawl = (pesoKg: number): LinhaCusto[] =>
  estilo('crawl').bandas.map((b) => {
    const ritmo = ritmoDaBanda(b) ?? 0;
    const kcal = kcalPor100m(b.met, pesoKg, ritmo);
    return {
      banda: b,
      metrosPorMin: b.metrosPorMin ?? 0,
      ritmo,
      kcalPor100m: kcal,
      // 1 kcal = 4,184 kJ. Dividido por 100 m, vira kJ por metro.
      kJPorMetro: (kcal * 4.184) / 100,
    };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_ESTIMATIVA =
  'É uma estimativa, e na natação ela é a mais frouxa de todo o cluster. Técnica muda o custo em até 55% entre pessoas na mesma velocidade — mais do que peso, mais do que idade, mais do que qualquer outra variável que uma calculadora consiga perguntar.';

export const NOTA_PISCINA =
  'Os METs valem para o nado acontecendo. "Uma hora de natação" quase sempre quer dizer uma hora de piscina, com borda, conversa e descanso entre séries — e aplicar o MET ao relógio inteiro é o que infla os números que circulam por aí.';

export const NOTA_SEM_RITMO_MEDIDO =
  'O Compêndio publica ritmo medido junto do MET só para o crawl. Nos outros estilos existe o MET, mas não uma velocidade de referência — por isso a distância aqui sai do SEU ritmo, e não de um número inventado pela ferramenta.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado nesse tempo. O acréscimo real ao seu dia é um pouco menor, e é esse que conta num déficit.';

export const NOTA_RITMO_INCOERENTE =
  'O ritmo informado está longe do ritmo que define essa faixa do Compêndio. No crawl as duas coisas andam juntas: a faixa É o ritmo. Ou ajuste o ritmo, ou escolha a faixa que corresponde a ele — senão a conta usa o esforço de uma pessoa com a velocidade de outra.';

export const NOTA_BORBOLETA =
  'A conta está certa para o tempo informado, mas borboleta contínua por tanto tempo praticamente não existe: as provas terminam nos 200 m e no treino ela aparece em séries curtas. Se a sua hora de piscina teve borboleta, some só os minutos em que ela realmente aconteceu.';

export const NOTA_TECNICA =
  'Na natação, melhorar a técnica mexe mais no seu gasto do que melhorar o fôlego — e mexe nas duas direções. Nadando melhor você gasta menos para percorrer o mesmo, e consegue percorrer muito mais no mesmo tempo. É por isso que aula de natação rende mais que insistir sozinho.';

export const NOTA_APETITE =
  'Muita gente relata mais fome depois de nadar do que depois de outras atividades do mesmo gasto. A água puxa calor do corpo bem mais rápido que o ar, e a literatura discute se isso pesa na compensação alimentar. Não é motivo para não nadar — é motivo para não contar com o gasto sozinho.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. A natação aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio, não pelo movimento.';

export const NOTA_SEGURANCA =
  'A natação é a atividade de menor impacto articular do cluster, o que a torna uma porta de entrada para quem tem dor no joelho, no quadril ou na coluna. Ainda assim, ombro é a articulação que mais sofre em quem nada muito com técnica ruim — e dor que persiste é assunto para médico ou fisioterapeuta, não para aumentar o volume.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
