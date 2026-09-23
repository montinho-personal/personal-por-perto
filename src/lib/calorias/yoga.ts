/**
 * O motor da página de calorias de yoga e pilates.
 *
 * A OITAVA DO CLUSTER — E A PRIMEIRA EM QUE O INSTRUMENTO DE MEDIDA MENTE
 *
 * As sete anteriores discutem tabela e física: qual MET, qual trabalho
 * mecânico, qual variável decide. Esta discute outra coisa — POR QUE O SEU
 * RELÓGIO ESTÁ ERRADO justamente aqui.
 *
 * Relógio e aplicativo estimam caloria a partir da frequência cardíaca. A
 * equação que faz essa conversão foi construída com gente se exercitando em
 * temperatura normal. No calor, a frequência cardíaca sobe por
 * termorregulação — o corpo manda sangue para a pele para dissipar calor —
 * sem que o gasto metabólico suba junto.
 *
 * Resultado: numa aula de hot yoga o seu relógio vê frequência alta,
 * aplica uma equação que não vale ali e devolve um número inflado. Não é
 * defeito do aparelho: é a equação sendo usada fora do domínio dela.
 *
 * A MEDIÇÃO QUE FECHA O ASSUNTO
 *
 * O grupo do Houston Methodist comparou, nos MESMOS praticantes, uma aula
 * de yoga em sala quente e a mesma aula em temperatura normal:
 *
 *     sala normal  151 ± 4 kcal por sessão
 *     sala quente  156 ± 7 kcal por sessão
 *
 * Cinco quilocalorias de diferença, dentro do erro. Sem diferença
 * estatística. O calor faz suar, e suar não é gastar.
 *
 * O QUE A INTERNET PUBLICA
 *
 * Os números que circulam para yoga são inflados por um fator de 2 a 3.
 * "Vinyasa queima 550 kcal por hora" implica 7,5 METs para 70 kg; o valor
 * medido do vinyasa é 2,7 METs, que dá 198 kcal por hora. Quase três vezes.
 *
 * A CONFERÊNCIA CONTRA A TABELA
 *
 * Os 151 kcal por sessão do Houston Methodist, numa aula de uma hora com
 * praticantes de cerca de 65 kg, implicam 2,2 METs. A escada de yoga do
 * Compêndio começa em 2,3 para yoga geral. A medição direta e a tabela
 * chegam ao mesmo lugar — e as duas dizem que yoga é atividade de
 * intensidade baixa.
 *
 * O QUE ISSO NÃO SIGNIFICA
 *
 * Yoga e pilates não são inúteis: eles simplesmente não são ferramentas de
 * gasto calórico. Mobilidade, força de core, equilíbrio, controle
 * respiratório e — o que a literatura mostra com mais consistência —
 * adesão de longo prazo. Esta página existe para tirar a caloria do centro
 * da conversa, não a prática.
 *
 * É a primeira atividade do cluster em que a resposta honesta à pergunta do
 * título é "menos do que você imagina, e esse não é o motivo de fazer".
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
  url: 'https://pacompendium.com/conditioning-exercise/',
  resumo:
    'mede yoga geral em 2,3 METs (código 02175), hatha em 2,5 (02150), vinyasa em 2,7 (02185), hot yoga em 3,0 (02155), Surya Namaskar em 3,5 (02180), power yoga em 4,0 (02160) e pilates geral em 3,0 (02105).',
};

export const FONTE_HOUSTON: Fonte = {
  rotulo:
    'Boyd C, et al. Acute Physiologic Effects of Performing Yoga in The Heat on Energy Expenditure, Range of Motion, and Inflammatory Biomarkers. International Journal of Exercise Science, 2020',
  rotuloCurto: 'Houston Methodist (2020)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/32509120/',
  resumo:
    'comparou nos mesmos 16 praticantes uma aula de yoga em sala quente e a mesma em temperatura normal: 156 ± 7 kcal contra 151 ± 4 kcal, sem diferença estatística no consumo de oxigênio nem no gasto. É a medição direta de que o calor não aumenta o gasto.',
};

export const FONTE_TRACY: Fonte = {
  rotulo:
    'Tracy BL, Hart CEF. Bikram yoga training and physical fitness in healthy young adults. Journal of Strength and Conditioning Research, 2013',
  rotuloCurto: 'Tracy e Hart (2013)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/22820210/',
  resumo:
    'mediu o gasto de uma sessão de Bikram de 90 minutos em cerca de 460 kcal nos homens e 330 nas mulheres — bem abaixo do que se publicava. Os autores atribuem as estimativas infladas ao uso de equações baseadas em frequência cardíaca, que não valem no calor.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_HOUSTON, FONTE_TRACY, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 10;
export const MINUTOS_MAX = 180;
export const MINUTOS_PADRAO = 60;

/** O número que o relógio ou o aplicativo mostrou, para comparar. */
export const RELOGIO_MIN = 20;
export const RELOGIO_MAX = 2000;
export const RELOGIO_PADRAO = 400;

export const KCAL_MIN = 20;
export const KCAL_MAX = 2000;

/* ───────────────────────── O estudo do calor ───────────────────────── */

/**
 * Os números do Houston Methodist, para a página poder mostrar a comparação
 * direta em vez de afirmar que o calor não muda nada.
 */
export const ESTUDO_CALOR = {
  kcalSalaNormal: 151,
  erroNormal: 4,
  kcalSalaQuente: 156,
  erroQuente: 7,
  participantes: 16,
} as const;

/** Bikram de 90 minutos, medido por Tracy e Hart. */
export const ESTUDO_BIKRAM = {
  minutos: 90,
  kcalHomens: 460,
  kcalMulheres: 330,
} as const;

/**
 * A diferença entre sala quente e sala normal, em porcentagem.
 *
 * Existe para a página poder mostrar o tamanho real do efeito do calor em
 * vez de dizer "pouco": são pouco mais de três por cento, dentro do erro de
 * medição dos dois grupos.
 */
export const efeitoDoCalor = (): number =>
  ESTUDO_CALOR.kcalSalaQuente / ESTUDO_CALOR.kcalSalaNormal - 1;

/** As duas medições se sobrepõem dentro da margem de erro? */
export const calorDentroDoErro = (): boolean =>
  ESTUDO_CALOR.kcalSalaNormal + ESTUDO_CALOR.erroNormal >=
  ESTUDO_CALOR.kcalSalaQuente - ESTUDO_CALOR.erroQuente;

/* ───────────────────────── A tabela ───────────────────────── */

export interface Estilo {
  id: string;
  nome: string;
  nomeCurto: string;
  met: number;
  codigo: string;
  comoReconhecer: string;
  /** O calor faz parte da modalidade? Muda o aviso sobre o relógio. */
  noCalor: boolean;
}

/**
 * Valores do Compêndio 2024, copiados e não ajustados. A escada inteira vai
 * de 2,3 a 4,0 METs — e é isso que a página precisa mostrar: a distância
 * entre o yoga mais leve e o mais forte é menor que a distância entre
 * caminhar devagar e caminhar rápido.
 */
export const ESTILOS: Estilo[] = [
  {
    id: 'geral',
    nome: 'Yoga (geral)',
    nomeCurto: 'Yoga geral',
    met: 2.3,
    codigo: '02175',
    comoReconhecer: 'A categoria genérica do Compêndio, com posturas mantidas e transição lenta.',
    noCalor: false,
  },
  {
    id: 'hatha',
    nome: 'Hatha yoga',
    nomeCurto: 'Hatha',
    met: 2.5,
    codigo: '02150',
    comoReconhecer: 'Posturas mantidas por vários ciclos de respiração, com pausa entre elas. O mais praticado.',
    noCalor: false,
  },
  {
    id: 'vinyasa',
    nome: 'Vinyasa yoga',
    nomeCurto: 'Vinyasa',
    met: 2.7,
    codigo: '02185',
    comoReconhecer: 'Sequência encadeada, com transição contínua entre posturas. É o "yoga que cansa".',
    noCalor: false,
  },
  {
    id: 'hot',
    nome: 'Hot yoga',
    nomeCurto: 'Hot yoga',
    met: 3.0,
    codigo: '02155',
    comoReconhecer: 'A mesma prática em sala aquecida. Suar muito mais não significa gastar muito mais.',
    noCalor: true,
  },
  {
    id: 'pilates',
    nome: 'Pilates',
    nomeCurto: 'Pilates',
    met: 3.0,
    codigo: '02105',
    comoReconhecer: 'Pilates geral, de solo ou aparelho. O Compêndio não separa os dois.',
    noCalor: false,
  },
  {
    id: 'surya',
    nome: 'Surya Namaskar',
    nomeCurto: 'Surya Namaskar',
    met: 3.5,
    codigo: '02180',
    comoReconhecer: 'A saudação ao sol executada em série contínua, que é a parte mais ativa da prática.',
    noCalor: false,
  },
  {
    id: 'power',
    nome: 'Power yoga',
    nomeCurto: 'Power',
    met: 4.0,
    codigo: '02160',
    comoReconhecer: 'A versão mais atlética, com sustentação de força e ritmo puxado. O topo da escada.',
    noCalor: false,
  },
];

export const estilo = (id: string): Estilo => ESTILOS.find((e) => e.id === id) ?? ESTILOS[1];

export const metYoga = (id: string): number => estilo(id).met;

/** O topo e o pé da escada, para a página mostrar como ela é curta. */
export const amplitudeDaEscada = (): number =>
  Math.max(...ESTILOS.map((e) => e.met)) / Math.min(...ESTILOS.map((e) => e.met));

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const relogioValido = (r: number | null): r is number =>
  r !== null && Number.isFinite(r) && r >= RELOGIO_MIN && r <= RELOGIO_MAX;

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

export type Cenario = 'tempo' | 'relogio';

export interface Resultado {
  cenario: Cenario;
  idEstilo: string;
  met: number;
  minutos: number;
  kcal: number;
  kcalLiquida: number;
  /** O que o relógio mostrou, no cenário de comparação. Zero fora dele. */
  kcalRelogio: number;
  /** Quantas vezes o relógio passou da estimativa medida. Zero fora do cenário. */
  razaoRelogio: number;
  /** A prática acontece no calor? Decide o aviso sobre a frequência cardíaca. */
  noCalor: boolean;
}

function monta(args: {
  cenario: Cenario;
  idEstilo: string;
  pesoKg: number;
  minutos: number;
  kcalRelogio: number;
}): Resultado {
  const e = estilo(args.idEstilo);
  const kcal = kcalPorMinuto(e.met, args.pesoKg) * args.minutos;
  return {
    cenario: args.cenario,
    idEstilo: args.idEstilo,
    met: e.met,
    minutos: args.minutos,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, args.pesoKg) * args.minutos,
    kcalRelogio: args.kcalRelogio,
    razaoRelogio: kcal > 0 && args.kcalRelogio > 0 ? args.kcalRelogio / kcal : 0,
    noCalor: e.noCalor,
  };
}

/** Modo 1 — "praticei tantos minutos". */
export const deTempo = (minutos: number, pesoKg: number, idEstilo = 'hatha'): Resultado =>
  monta({ cenario: 'tempo', idEstilo, pesoKg, minutos, kcalRelogio: 0 });

/**
 * Modo 2 — "meu relógio disse X".
 *
 * É o modo que nenhuma outra calculadora tem, e ele existe porque aqui o
 * erro mais comum não está na tabela: está no aparelho da pessoa. Ela chega
 * com um número, e o que serve é comparar.
 */
export const deRelogio = (
  kcalRelogio: number,
  minutos: number,
  pesoKg: number,
  idEstilo = 'hot',
): Resultado => monta({ cenario: 'relogio', idEstilo, pesoKg, minutos, kcalRelogio });

/** Modo 3 — meta de calorias. Devolve minutos. */
export function deKcal(alvoKcal: number, pesoKg: number, idEstilo = 'hatha'): Resultado {
  const porMin = kcalPorMinuto(metYoga(idEstilo), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...deTempo(minutos, pesoKg, idEstilo), kcal: alvoKcal };
}

export const simulacaoUmQuilo = (pesoKg: number, idEstilo = 'hatha'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idEstilo);

/**
 * A conferência: a nossa tabela reproduz a medição do Houston Methodist?
 *
 * Eles mediram 151 kcal por sessão em sala normal. Numa aula de uma hora com
 * praticantes de cerca de 65 kg, isso implica um MET que tem que cair no pé
 * da escada de yoga do Compêndio. Se não caísse, a tabela ou a leitura do
 * estudo estariam erradas.
 */
export const PESO_ESTUDO = 65;
export const MINUTOS_ESTUDO = 60;

export const reproduzEstudo = (): { metImplicado: number; metDaTabela: number; erro: number } => {
  const metImplicado =
    ESTUDO_CALOR.kcalSalaNormal / ((3.5 * PESO_ESTUDO) / 200) / MINUTOS_ESTUDO;
  const metDaTabela = metYoga('geral');
  return {
    metImplicado,
    metDaTabela,
    erro: Math.abs(metImplicado - metDaTabela) / metDaTabela,
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

/* ─────────────────── A comparação com o relógio ─────────────────── */

/**
 * O resultado da comparação, num lugar só.
 *
 * Esta função existe por causa de um defeito real: a comparação estava
 * escrita duas vezes — uma na frase do resultado e uma na linha "Diferença"
 * — com regras diferentes. Quando o aparelho marcava MENOS que a estimativa,
 * a linha dizia "o aparelho mostrou MENOS" e a frase, duas linhas acima,
 * dizia "0,5 vezes menos do que o aparelho mostrou", que não quer dizer
 * nada. A página se contradizia sobre a própria conta.
 *
 * Com a regra num lugar só, as duas leituras não podem mais divergir.
 */
export type Comparacao = 'acima' | 'empate' | 'abaixo';

/**
 * A faixa de empate existe porque 1,03× não é "o aparelho inflou": é ruído.
 * Declarar diferença onde não há seria o mesmo erro que a página critica.
 */
export const MARGEM_EMPATE = 0.05;

export function comparaRelogio(r: Resultado): Comparacao {
  if (r.razaoRelogio <= 0) return 'empate';
  if (r.razaoRelogio >= 1 + MARGEM_EMPATE) return 'acima';
  if (r.razaoRelogio <= 1 - MARGEM_EMPATE) return 'abaixo';
  return 'empate';
}

/** A linha "Diferença" do resultado. */
export function textoDiferenca(r: Resultado): string {
  const vezes = r.razaoRelogio.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
  switch (comparaRelogio(r)) {
    case 'acima':
      return `o aparelho mostrou ${vezes}× mais`;
    case 'abaixo':
      return 'o aparelho mostrou MENOS que a estimativa';
    default:
      return 'o aparelho e a estimativa batem';
  }
}

export function fraseContexto(pesoKg: number, r: Resultado): string {
  const e = estilo(r.idEstilo);
  if (r.cenario === 'relogio') {
    const abertura =
      `O seu relógio marcou ${formataKcal(r.kcalRelogio)} kcal. Para ${Math.round(pesoKg)} kg em ` +
      `${formataTempo(r.minutos)} de ${e.nome.toLowerCase()}, a estimativa a partir de medição de ` +
      `consumo de oxigênio é de aproximadamente ${formataKcal(r.kcal)} kcal`;
    const vezes = r.razaoRelogio.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
    switch (comparaRelogio(r)) {
      case 'acima':
        return `${abertura} — ${vezes} vezes menos do que o aparelho mostrou.`;
      case 'abaixo':
        /*
         * O caso incomum, e ele tem uma explicação boa: muitos aparelhos
         * mostram só a caloria "ativa", que é justamente o número líquido
         * que aparece logo abaixo no resultado. Aí não há contradição
         * nenhuma — são duas contas diferentes, e a página tem as duas.
         */
        return (
          `${abertura} — acima do que o aparelho mostrou. Isso costuma ter uma explicação simples: ` +
          `muitos aparelhos mostram só a caloria "ativa", que corresponde ao número líquido logo ` +
          `abaixo, e não ao bruto.`
        );
      default:
        return `${abertura} — praticamente o mesmo número que o aparelho.`;
    }
  }
  /*
   * Escrito sem verbo concordando com o tempo: "1 hora ... representam" está
   * errado e "45 min ... representa" também. Virar a frase resolve para
   * qualquer valor, em vez de exigir um plural condicional.
   */
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ` +
    `${formataTempo(r.minutos)} de ${e.nome.toLowerCase()} é de aproximadamente ` +
    `${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
export const MINUTOS_TABELA = [30, 45, 60, 75, 90] as const;

export interface LinhaEstilo {
  estilo: Estilo;
  kcal60: number;
}

export const tabelaPorEstilo = (pesoKg: number): LinhaEstilo[] =>
  ESTILOS.map((e) => ({ estilo: e, kcal60: kcalPorMinuto(e.met, pesoKg) * 60 }));

export interface LinhaPeso {
  peso: number;
  kcal: number;
  kcalLiquida: number;
}

export const tabelaPorPeso = (minutos = 60, idEstilo = 'hatha'): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const r = deTempo(minutos, peso, idEstilo);
    return { peso, kcal: r.kcal, kcalLiquida: r.kcalLiquida };
  });

export interface LinhaTempo {
  minutos: number;
  kcal: number;
}

export const tabelaPorTempo = (pesoKg: number, idEstilo = 'hatha'): LinhaTempo[] =>
  MINUTOS_TABELA.map((minutos) => ({ minutos, kcal: deTempo(minutos, pesoKg, idEstilo).kcal }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_RELOGIO_MENTE =
  'Relógio e aplicativo estimam caloria a partir da frequência cardíaca, usando uma equação construída com gente se exercitando em temperatura normal. No calor, a frequência sobe por termorregulação — o corpo manda sangue para a pele para dissipar calor — sem que o gasto suba junto. O aparelho vê frequência alta, aplica a equação onde ela não vale e devolve um número inflado. Não é defeito do relógio: é a equação usada fora do domínio dela.';

export const NOTA_CALOR_NAO_MUDA =
  'A medição direta fecha o assunto: nos mesmos praticantes, a mesma aula deu 151 kcal em sala normal e 156 em sala quente. Cinco quilocalorias, dentro da margem de erro das duas medições. O calor faz suar, e suar não é gastar — é o corpo tentando não cozinhar.';

export const NOTA_ESCADA_CURTA =
  'A escada inteira do yoga vai de 2,3 a 4,0 METs. É menos variação do que existe entre caminhar devagar e caminhar rápido. Trocar de estilo de yoga para "gastar mais" muda pouco; o que muda muito é trocar de atividade.';

export const NOTA_NAO_E_O_PONTO =
  'Yoga e pilates não são ferramentas de gasto calórico, e isso não é crítica. Eles entregam mobilidade, força de core, equilíbrio, controle respiratório e — o que a literatura mostra com mais consistência — gente que continua praticando anos depois. Escolher yoga pela caloria é escolher a ferramenta certa pelo motivo errado.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. E aqui essa parcela é enorme, porque a intensidade é baixa — numa hora de hatha, exatamente dois quintos do total são o metabolismo de repouso, que aconteceria de qualquer forma. É o que acontece quando a atividade vale 2,5 METs: um deles é estar vivo.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa, e nesta atividade a variação é grande por um motivo específico: o Compêndio mede categorias amplas, mas duas aulas com o mesmo nome podem ser práticas bem diferentes. Uma aula de hatha com sustentação longa de posturas de força custa mais que uma de relaxamento com o mesmo nome.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura, e nenhuma postura "afina" uma região. Yoga e pilates melhoram controle e mobilidade; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Prática em sala aquecida exige atenção à hidratação e não combina com todo mundo: quem tem pressão descontrolada, é gestante ou usa medicação que afeta a termorregulação deve conversar com médico antes. E dor articular que aparece numa postura é sinal de ajustar a postura, não de insistir nela — assunto para médico ou fisioterapeuta se persistir.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
