/**
 * O motor da página de calorias da dança.
 *
 * A SÉTIMA DO CLUSTER — E A PRIMEIRA EM QUE VOCÊ NÃO ESCOLHE A INTENSIDADE
 *
 *     caminhada → você escolhe o ritmo
 *     corrida   → você escolhe o pace
 *     bicicleta → você escolhe a velocidade
 *     natação   → você escolhe o estilo e o ritmo
 *     escada    → você escolhe a pressa
 *     corda     → você escolhe a cadência
 *     dança     → quem escolhe é a música
 *
 * Numa aula de Zumba ninguém "dança mais devagar". A coreografia e o BPM
 * decidem, e o que sobra para a pessoa é escolher a aula. Por isso aqui o
 * único seletor de intensidade é o TIPO de dança — não há campo de ritmo,
 * porque ele seria uma promessa falsa de controle.
 *
 * O PROBLEMA QUE ESTA PÁGINA EXISTE PARA RESOLVER
 *
 * Dança é, de longe, a atividade em que os números que circulam têm menos
 * relação com medição. Duas coisas acontecem ao mesmo tempo:
 *
 * 1. O Compêndio NÃO TEM uma linha para Zumba. Nem para samba, forró ou
 *    sertanejo. Mesmo assim você encontra "Zumba = 7 METs" publicado em
 *    toda parte, como se fosse valor medido. Ele não é: é o valor de
 *    "dança aeróbica, geral" (código 03015, 7,3 METs) reaproveitado.
 *
 * 2. Zumba TEM medição própria, e ela contradiz esse número por cima. O
 *    estudo de Luettgen e Porcari, encomendado pelo ACE, mediu 8,8 METs —
 *    mais que os 7,3 da dança aeróbica genérica.
 *
 * E o mesmo estudo é citado errado na outra direção. Ele reporta 369 kcal
 * por aula, e esse número viaja pela internet como "uma aula de Zumba
 * queima 369 calorias". A aula medida tinha 39 MINUTOS, não sessenta, e as
 * 19 participantes eram mulheres de 18 a 22 anos com cerca de 62 kg — que é
 * o peso que 9,5 kcal/min a 8,8 METs implica.
 *
 * Dois erros opostos, tirados do mesmo artigo: subestimam o MET e
 * superestimam a aula.
 *
 * O QUE A TABELA DESTA PÁGINA TEM E O QUE NÃO TEM
 *
 * Só entra estilo com fonte. São seis, e cada linha declara de onde veio.
 * Samba, forró e sertanejo NÃO entram — não porque não importem, mas porque
 * não encontramos medição que pudéssemos conferir ("não conferimos" é
 * diferente de "ninguém mediu"), e preencher a lacuna com um número plausível seria
 * exatamente o que esta página critica.
 *
 * Nota de estrutura, para quem for conferir a fonte: na atualização de 2024
 * os códigos 03015 a 03022 saíram do capítulo "Dancing" e foram para
 * "Conditioning exercises". Os valores continuam os mesmos; muda o lugar.
 *
 * A AULA NÃO É O QUE VOCÊ DANÇA — E AQUI ISSO É DIFERENTE
 *
 * Como na natação e na corda, o relógio da aula inclui tempo que não é a
 * atividade. Mas a natureza desse tempo é outra: na piscina é descanso na
 * borda, na corda é intervalo entre séries, e na aula de dança é o
 * professor ensinando o passo — você está de pé, se movendo devagar,
 * gastando mais que em repouso.
 *
 * Esta ferramenta conta esse tempo como REPOUSO, que é subestimar de
 * propósito. O valor verdadeiro fica um pouco acima do que ela devolve.
 * Numa calculadora de caloria, cujo defeito endêmico é inflar, errar para
 * baixo com o erro declarado é melhor que acertar por sorte.
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
  url: 'https://pacompendium.com/dancing/',
  resumo:
    'mede dança de salão rápida em 4,5 METs (código 03031), aula de ballet, jazz ou moderno em 5,0 (03010), dança aeróbica geral em 7,3 (03015) e aeróbica de alto impacto em 7,3 (03021). Não tem linha para Zumba, samba, forró ou sertanejo.',
};

export const FONTE_ZUMBA: Fonte = {
  rotulo:
    'Luettgen M, Foster C, Doberstein S, Mikat R, Porcari J. Zumba: is the "fitness-party" a good workout? Journal of Sports Science and Medicine, 2012;11:357-358',
  rotuloCurto: 'Luettgen et al. (2012)',
  url: 'https://www.jssm.org/volume11/iss2/cap/jssm-11-357.pdf',
  resumo:
    'mediu 19 mulheres de 18 a 22 anos em aula real de Zumba e encontrou 8,8 METs, 9,5 kcal por minuto e 369 kcal por aula — de 39 minutos, não de uma hora. É a medição própria de Zumba que o número "7 METs" publicado por aí ignora.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_ZUMBA, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 5;
export const MINUTOS_MAX = 240;
export const MINUTOS_PADRAO = 45;

/** Quanto da aula foi dançando de verdade, em porcentagem. */
export const DANCANDO_MIN = 20;
export const DANCANDO_MAX = 100;
export const DANCANDO_PADRAO = 70;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── Os dados do estudo de Zumba ───────────────────────── */

/**
 * Os números exatos que Luettgen e colegas reportaram, para a página poder
 * mostrar o que o estudo diz de fato — e o que a internet faz com ele.
 */
export const ESTUDO_ZUMBA = {
  met: 8.8,
  kcalPorMinuto: 9.5,
  kcalPorAula: 369,
  minutosDaAula: 39,
  participantes: 19,
  idadeMin: 18,
  idadeMax: 22,
} as const;

/**
 * O peso que o próprio estudo implica.
 *
 * Se 8,8 METs custam 9,5 kcal/min, a equação de METs devolve a massa das
 * participantes. Serve para mostrar que as 369 kcal não são de uma pessoa
 * de 70 kg — e ninguém que cita o número diz isso.
 */
export const pesoImplicitoDoEstudo = (): number =>
  (ESTUDO_ZUMBA.kcalPorMinuto * 200) / (ESTUDO_ZUMBA.met * 3.5);

/* ───────────────────────── A tabela ───────────────────────── */

export type OrigemFonte = 'compendio' | 'estudo';

export interface Estilo {
  id: string;
  nome: string;
  /**
   * Nome curto, para os botões.
   *
   * Existe por medição: com os nomes completos nos chips, a 390px o bloco de
   * seleção ocupava seis linhas e empurrava o resultado para 1.597px de
   * rolagem — acima do limite de 1.500 que as outras seis ferramentas
   * cumprem. O nome completo continua na tabela e no texto.
   */
  nomeCurto: string;
  met: number;
  /** Código do Compêndio, quando existe. */
  codigo: string;
  origem: OrigemFonte;
  comoReconhecer: string;
}

/**
 * Só estilo com fonte. Cada linha declara de onde o número veio, e a página
 * mostra essa coluna — é o ponto dela.
 */
export const ESTILOS: Estilo[] = [
  {
    id: 'salao',
    nomeCurto: 'Salão',
    nome: 'Dança de salão (rápida)',
    met: 4.5,
    codigo: '03031',
    origem: 'compendio',
    comoReconhecer: 'A categoria do Compêndio para dança de par em ritmo rápido, dançada de verdade — não o passo básico marcado devagar.',
  },
  {
    id: 'ballet',
    nomeCurto: 'Ballet e jazz',
    nome: 'Ballet, jazz ou moderno',
    met: 5.0,
    codigo: '03010',
    origem: 'compendio',
    comoReconhecer: 'Aula ou ensaio. O Compêndio mede o conjunto, incluindo as pausas de correção.',
  },
  {
    id: 'baixo-impacto',
    nomeCurto: 'Baixo impacto',
    nome: 'Dança aeróbica de baixo impacto',
    met: 5.0,
    codigo: '03020',
    origem: 'compendio',
    comoReconhecer: 'Coreografia sem salto, com um pé sempre no chão. A versão de menor impacto articular.',
  },
  {
    id: 'aerobica',
    nomeCurto: 'Aeróbica geral',
    nome: 'Dança aeróbica geral',
    met: 7.3,
    codigo: '03015',
    origem: 'compendio',
    comoReconhecer: 'A categoria genérica de aula coreografada. É daqui que sai o "7 METs" que todos publicam como se fosse Zumba.',
  },
  {
    id: 'alto-impacto',
    nomeCurto: 'Alto impacto',
    nome: 'Dança aeróbica de alto impacto',
    met: 7.3,
    codigo: '03021',
    origem: 'compendio',
    comoReconhecer: 'Coreografia com salto e os dois pés saindo do chão.',
  },
  {
    id: 'zumba',
    nomeCurto: 'Zumba',
    nome: 'Zumba',
    met: ESTUDO_ZUMBA.met,
    codigo: '—',
    origem: 'estudo',
    comoReconhecer: 'Aula de Zumba de verdade, medida em laboratório. Não está no Compêndio: vem de medição própria.',
  },
];

export const estilo = (id: string): Estilo => ESTILOS.find((e) => e.id === id) ?? ESTILOS[3];

export const metDanca = (id: string): number => estilo(id).met;

/**
 * Estilos que as pessoas procuram e que NINGUÉM mediu.
 *
 * A página lista isto de propósito. Dizer "não sei" onde não se sabe é o
 * que separa esta tabela das que preenchem a lacuna com número plausível.
 */
export const SEM_MEDICAO = ['Samba (no pé)', 'Forró', 'Sertanejo universitário', 'Funk', 'Axé', 'Pole dance'] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const dancandoValido = (d: number | null): d is number =>
  d !== null && Number.isFinite(d) && d >= DANCANDO_MIN && d <= DANCANDO_MAX;

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

export type Cenario = 'dancando' | 'aula';

export interface Resultado {
  cenario: Cenario;
  idEstilo: string;
  met: number;
  /** Minutos dançando de verdade. É o que multiplica o MET do estilo. */
  minutosDancando: number;
  /** Minutos de relógio da aula. Igual ao de dança fora do cenário de aula. */
  minutosAula: number;
  /** Porcentagem da aula que foi dança. 100 fora do cenário de aula. */
  dancando: number;
  kcal: number;
  kcalLiquida: number;
  /** Quanto do total veio do tempo de instrução, contado como repouso. */
  kcalInstrucao: number;
}

function monta(args: {
  cenario: Cenario;
  idEstilo: string;
  pesoKg: number;
  minutosDancando: number;
  minutosAula: number;
  dancando: number;
}): Resultado {
  const met = metDanca(args.idEstilo);
  const minutosParado = Math.max(args.minutosAula - args.minutosDancando, 0);
  const daDanca = kcalPorMinuto(met, args.pesoKg) * args.minutosDancando;
  // O tempo de instrução entra como repouso: subestima de propósito, porque
  // na aula a pessoa está de pé e se movendo devagar, não sentada.
  const daInstrucao = kcalPorMinuto(1, args.pesoKg) * minutosParado;
  const kcal = daDanca + daInstrucao;
  return {
    cenario: args.cenario,
    idEstilo: args.idEstilo,
    met,
    minutosDancando: args.minutosDancando,
    minutosAula: args.minutosAula,
    dancando: args.dancando,
    kcal,
    // O líquido desconta o repouso do relógio INTEIRO: é o acréscimo real
    // ao dia de quem foi à aula, contra ter ficado em casa parado.
    kcalLiquida: kcal - kcalPorMinuto(1, args.pesoKg) * args.minutosAula,
    kcalInstrucao: daInstrucao,
  };
}

/** Modo 1 — "dancei tantos minutos", já sem o tempo de instrução. */
export const deTempo = (minutos: number, pesoKg: number, idEstilo = 'aerobica'): Resultado =>
  monta({ cenario: 'dancando', idEstilo, pesoKg, minutosDancando: minutos, minutosAula: minutos, dancando: 100 });

/** Modo 2 — tempo de AULA, com a fração que foi dança de verdade. */
export const deAula = (
  minutosAula: number,
  pesoKg: number,
  idEstilo = 'aerobica',
  dancandoPct = DANCANDO_PADRAO,
): Resultado =>
  monta({
    cenario: 'aula',
    idEstilo,
    pesoKg,
    minutosDancando: minutosAula * (dancandoPct / 100),
    minutosAula,
    dancando: dancandoPct,
  });

/** Modo 3 — meta de calorias. Devolve minutos dançando. */
export function deKcal(alvoKcal: number, pesoKg: number, idEstilo = 'aerobica'): Resultado {
  const porMin = kcalPorMinuto(metDanca(idEstilo), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...deTempo(minutos, pesoKg, idEstilo), kcal: alvoKcal };
}

export const simulacaoUmQuilo = (pesoKg: number, idEstilo = 'aerobica'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idEstilo);

/**
 * A aula que o estudo realmente mediu, reproduzida pela nossa conta.
 *
 * Se o motor estiver certo, aplicar 8,8 METs ao peso implícito das
 * participantes por 39 minutos tem que devolver as 369 kcal do artigo. É a
 * conferência que prova que a página está citando o estudo, e não chutando.
 */
export const reproduzEstudo = (): { kcal: number; kcalDoArtigo: number; erro: number } => {
  const kcal = kcalPorMinuto(ESTUDO_ZUMBA.met, pesoImplicitoDoEstudo()) * ESTUDO_ZUMBA.minutosDaAula;
  return {
    kcal,
    kcalDoArtigo: ESTUDO_ZUMBA.kcalPorAula,
    erro: Math.abs(kcal - ESTUDO_ZUMBA.kcalPorAula) / ESTUDO_ZUMBA.kcalPorAula,
  };
};

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

export function fraseContexto(pesoKg: number, r: Resultado): string {
  const e = estilo(r.idEstilo);
  if (r.cenario === 'aula') {
    return (
      `Para uma pessoa de ${Math.round(pesoKg)} kg, ${formataTempo(r.minutosAula)} de aula de ` +
      `${e.nome.toLowerCase()} com ${Math.round(r.dancando)}% do tempo dançando dão ` +
      `${formataTempo(r.minutosDancando)} de dança e um gasto estimado de aproximadamente ` +
      `${formataKcal(r.kcal)} kcal.`
    );
  }
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, ${formataTempo(r.minutosDancando)} de ` +
    `${e.nome.toLowerCase()} representam um gasto estimado de aproximadamente ` +
    `${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
/* 2 horas entrou pelos prints de 06/10/2026: "30 minutos", "1 hora" e "2 horas de dança queima quantas calorias" são as três primeiras do autocompletar. */
export const MINUTOS_TABELA = [15, 30, 45, 60, 90, 120] as const;

/**
 * Os três estilos da tabela por tempo: o mais leve medido (salão rápido), a
 * aula coreografada genérica e o mais intenso (Zumba). A busca pergunta
 * "1 hora de dança" sem dizer qual, e a resposta muda quase o dobro entre
 * as pontas — então a tabela dá a faixa em vez de escolher um estilo.
 */
export const ESTILOS_TABELA_TEMPO = ['salao', 'aerobica', 'zumba'] as const;

export interface LinhaEstilo {
  estilo: Estilo;
  kcal45: number;
  kcalPorMin: number;
}

/** A tabela central: 45 min de dança efetiva em cada estilo, com a fonte. */
export const tabelaPorEstilo = (pesoKg: number): LinhaEstilo[] =>
  ESTILOS.map((e) => ({
    estilo: e,
    kcal45: kcalPorMinuto(e.met, pesoKg) * 45,
    kcalPorMin: kcalPorMinuto(e.met, pesoKg),
  }));

export interface LinhaPeso {
  peso: number;
  kcal: number;
  kcalLiquida: number;
}

export const tabelaPorPeso = (minutos = 45, idEstilo = 'aerobica'): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const r = deTempo(minutos, peso, idEstilo);
    return { peso, kcal: r.kcal, kcalLiquida: r.kcalLiquida };
  });

export interface LinhaTempo {
  minutos: number;
  kcal: number;
}

export const tabelaPorTempo = (pesoKg: number, idEstilo = 'aerobica'): LinhaTempo[] =>
  MINUTOS_TABELA.map((minutos) => ({ minutos, kcal: deTempo(minutos, pesoKg, idEstilo).kcal }));

export interface LinhaTempoEstilos {
  minutos: number;
  /** Uma entrada por estilo de ESTILOS_TABELA_TEMPO, na mesma ordem. */
  kcal: number[];
}

export const tabelaTempoPorEstilo = (pesoKg: number): LinhaTempoEstilos[] =>
  MINUTOS_TABELA.map((minutos) => ({
    minutos,
    kcal: ESTILOS_TABELA_TEMPO.map((id) => deTempo(minutos, pesoKg, id).kcal),
  }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_ZUMBA_NAO_ESTA =
  'O Compêndio de Atividades Físicas não tem uma linha para Zumba. O "7 METs" que circula é o valor de dança aeróbica geral reaproveitado — e a medição própria de Zumba, feita em laboratório, dá 8,8 METs. Quem publica 7 está usando o número de outra coisa, e por baixo.';

export const NOTA_369 =
  'As 369 kcal que a internet atribui a "uma aula de Zumba" vêm de um estudo real, mas a aula medida tinha 39 minutos e as participantes eram 19 mulheres de 18 a 22 anos, com cerca de 62 kg pela própria conta do artigo. Citar o número sem essas três informações é citar outra coisa.';

export const NOTA_METS_REPETIDOS =
  'Duas coisas na tabela parecem erro de digitação e não são. Ballet e dança aeróbica de baixo impacto têm o mesmo valor (5,0), e dança aeróbica geral tem o mesmo valor do alto impacto (7,3). São códigos diferentes do Compêndio que caíram na mesma medição — e a segunda coincidência é informativa: a categoria genérica foi medida no nível do ALTO impacto. Se a sua aula é de baixo impacto, usar o valor genérico superestima em cerca de 46%.';

export const NOTA_APROXIMACAO_HONESTA =
  'Se você dança forró, samba no pé ou sertanejo e quer um número, a linha de dança de par em ritmo rápido é a referência mais próxima que existe. Mas é aproximação por semelhança — o mesmo procedimento que criticamos nas outras páginas, com uma diferença: aqui está dito que é aproximação, e você decide se serve.';

export const NOTA_SEM_MEDICAO =
  'Samba, forró, sertanejo, funk e axé não estão nesta tabela porque não encontramos medição de gasto deles que pudéssemos conferir numa fonte. Você vai encontrar números para eles por aí; não sabemos de onde vêm, e preferimos dizer isso a repeti-los.';

export const NOTA_INSTRUCAO =
  'O tempo em que o professor ensina o passo entra na conta como repouso. Isso subestima: você está de pé, se movendo devagar, gastando mais que sentado. O valor verdadeiro fica um pouco acima do que esta ferramenta devolve — e numa calculadora de caloria, errar para baixo com o erro declarado é melhor que inflar.';

export const NOTA_NAO_ESCOLHE =
  'Dança é a única atividade deste nosso conjunto em que você não escolhe a intensidade: a coreografia e a música escolhem. Ninguém faz uma aula de Zumba "mais devagar". O que dá para escolher é a aula — e é por isso que aqui o único seletor é o tipo de dança.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. Na dança a variação entre pessoas é grande porque a amplitude do movimento é livre: duas pessoas na mesma aula, na mesma música, podem estar fazendo coisas bem diferentes. Quem marca o passo com pouca amplitude gasta bem menos que quem dança inteiro.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. A dança aumenta o gasto do dia e treina coordenação; onde a gordura sai primeiro é decidido por genética e hormônio, não pelo movimento.';

export const NOTA_SEGURANCA =
  'Aula de dança coreografada tem salto, giro e mudança rápida de direção — e tornozelo e joelho são o que mais reclama, principalmente em piso duro e com tênis errado. As versões de baixo impacto existem justamente para isso, e dor que persiste é assunto para médico ou fisioterapeuta, não para aumentar a frequência.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
