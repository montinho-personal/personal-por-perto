/**
 * Quanto descansar entre séries — o motor.
 *
 * A TESE
 *
 * O descanso existe para proteger o desempenho da próxima série. É o que
 * a literatura sustenta: com o volume igualado, descanso curto e longo dão
 * a mesma hipertrofia (Longo et al., 2022); o descanso longo ganha quando
 * deixa fazer mais repetições com a mesma carga (Schoenfeld et al., 2016;
 * de Salles et al., 2009). Por isso o motor pergunta o que gera fadiga —
 * o exercício, as repetições e o quão perto da falha a série terminou — e
 * não o tempo de treino da pessoa.
 *
 * POR QUE UMA ESCADA, E NÃO UMA FÓRMULA
 *
 * Nenhum estudo dá um número de segundos para "supino, 8 repetições, RIR
 * 1". Somar oito modificadores e devolver "143 segundos" seria precisão
 * inventada. O motor anda numa escada de intervalos que alguém usaria de
 * verdade, e cada ajuste é um degrau inteiro com motivo escrito abaixo.
 *
 * O QUE NÃO ENTRA, DE PROPÓSITO
 *
 * - Tempo de treino da pessoa: não achamos evidência que separe a
 *   necessidade de descanso por experiência; a carga absoluta maior de quem
 *   treina há anos já aparece no esforço da série.
 * - %1RM: repetições + proximidade da falha já definem a intensidade
 *   relativa. Seria pedir a mesma informação duas vezes.
 * - Técnicas (superset, drop-set, rest-pause): têm lógica própria e ficam
 *   no texto da página. A calculadora é para série convencional.
 *
 * Detalhes, fontes e a crítica ao briefing: docs/calculadora-descanso.md.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  id: string;
  citacao: string;
  url: string;
  achado: string;
}

export const FONTES: Fonte[] = [
  {
    id: 'singer',
    citacao:
      'Singer A, Wolf M, Generoso L, et al. Give it a rest: a systematic review with Bayesian meta-analysis on the effect of inter-set rest interval duration on muscle hypertrophy. Front Sports Act Living. 2024;6:1429789.',
    url: 'https://doi.org/10.3389/fspor.2024.1429789',
    achado:
      'Pequeno benefício de descansar mais de 60 segundos para hipertrofia; acima de cerca de 90 segundos, sem diferença apreciável detectada.',
  },
  {
    id: 'schoenfeld',
    citacao:
      'Schoenfeld BJ, Pope ZK, Benik FM, et al. Longer interset rest periods enhance muscle strength and hypertrophy in resistance-trained men. J Strength Cond Res. 2016;30(7):1805-1812.',
    url: 'https://journals.lww.com/nsca-jscr/fulltext/2016/07000/longer_interset_rest_periods_enhance_muscle.3.aspx',
    achado:
      'Em homens treinados, 3 minutos entre séries de 8 a 12 repetições deram mais força no supino e no agachamento e mais espessura na coxa do que 1 minuto.',
  },
  {
    id: 'longo',
    citacao:
      'Longo AR, Silva-Batista C, Pedroso K, et al. Volume load rather than resting interval influences muscle hypertrophy during high-intensity resistance training. J Strength Cond Res. 2022;36(6):1554-1559.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35622106/',
    achado:
      'Descanso curto com séries extras para igualar o volume deu a mesma hipertrofia do descanso longo: o que pesou foi o volume que o descanso permitiu.',
  },
  {
    id: 'senna',
    citacao:
      'Senna GW, Willardson JM, Simão R, et al. Effect of different interset rest intervals on performance of single and multijoint exercises with near-maximal loads. J Strength Cond Res. 2016;30(3):710-716.',
    url: 'https://www.bisp-surf.de/Record/PU201603001186',
    achado:
      'Com carga de 3 repetições máximas, o crucifixo manteve as repetições a partir de 2 minutos de descanso; o supino precisou de 3.',
  },
  {
    id: 'desalles',
    citacao:
      'de Salles BF, Simão R, Miranda F, et al. Rest interval between sets in strength training. Sports Med. 2009;39(9):765-777.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19691365/',
    achado:
      'Com cargas de 50% a 90% de 1RM, descansos de 3 a 5 minutos mantiveram mais repetições ao longo das séries e deram mais ganho de força máxima.',
  },
  {
    id: 'grgic',
    citacao:
      'Grgic J, Lazinica B, Mikulic P, Krieger JW, Schoenfeld BJ. The effects of short versus long inter-set rest intervals in resistance training on measures of muscle hypertrophy: a systematic review. Eur J Sport Sci. 2017;17(8):983-993.',
    url: 'https://doi.org/10.1080/17461391.2017.1340524',
    achado:
      'Possível vantagem de descansos longos para hipertrofia em pessoas treinadas, com a ressalva de que ainda havia poucos estudos comparáveis.',
  },
];

/* ───────────────────────── A escada ───────────────────────── */

/** Intervalos que alguém usaria de verdade, em segundos. */
export const ESCADA = [30, 45, 60, 90, 120, 150, 180, 240, 300] as const;
export const DEGRAU_MAX = ESCADA.length - 1;

/** Hipertrofia nunca abaixo de 1 minuto (Singer et al., 2024). */
export const PISO_HIPERTROFIA = ESCADA.indexOf(60);

/**
 * E nunca acima de 4 minutos: acima de ~90 s a meta-análise já não detecta
 * diferença de hipertrofia, e 5 minutos só se justificam quando o objetivo
 * é a carga máxima (de Salles et al., 2009).
 */
export const TETO_HIPERTROFIA = ESCADA.indexOf(240);

/* ───────────────────────── Entradas ───────────────────────── */

export type Objetivo = 'hipertrofia' | 'forca' | 'resistencia' | 'condicionamento' | 'naosei';
export type Demanda = 'alta' | 'media' | 'localizada';
export type Esforco = 'longe' | 'moderado' | 'perto' | 'falha';
export type FaixaReps = '1-5' | '6-8' | '9-12' | '13-15' | '16-20' | '20+';

export const OBJETIVOS: { id: Objetivo; nome: string; dica: string }[] = [
  { id: 'hipertrofia', nome: 'Hipertrofia', dica: 'Ganhar massa muscular' },
  { id: 'forca', nome: 'Força', dica: 'Levantar mais peso' },
  { id: 'resistencia', nome: 'Resistência muscular', dica: 'Aguentar mais repetições' },
  { id: 'condicionamento', nome: 'Condicionamento', dica: 'Fôlego, treino mais corrido' },
  { id: 'naosei', nome: 'Não sei', dica: 'A conta usa hipertrofia' },
];

export const FAIXAS_REPS: { id: FaixaReps; nome: string }[] = [
  { id: '1-5', nome: '1 a 5' },
  { id: '6-8', nome: '6 a 8' },
  { id: '9-12', nome: '9 a 12' },
  { id: '13-15', nome: '13 a 15' },
  { id: '16-20', nome: '16 a 20' },
  { id: '20+', nome: 'Mais de 20' },
];

export const ESFORCOS: { id: Esforco; nome: string; frase: string; rir: string }[] = [
  { id: 'longe', nome: 'Longe da falha', frase: 'Eu conseguiria fazer mais 5 ou mais.', rir: 'RIR 5+' },
  { id: 'moderado', nome: 'Moderado', frase: 'Conseguiria fazer mais umas 3 ou 4.', rir: 'RIR 3–4' },
  { id: 'perto', nome: 'Perto da falha', frase: 'Conseguiria fazer só mais 1 ou 2.', rir: 'RIR 1–2' },
  { id: 'falha', nome: 'Falha ou quase', frase: 'Não sairia mais nenhuma.', rir: 'RIR 0' },
];

/* ───────────────────────── Base de exercícios ───────────────────────── */

export type Regiao = 'pernas' | 'gluteos' | 'peito' | 'costas' | 'ombros' | 'biceps' | 'triceps' | 'core' | 'outro';

export interface Exercicio {
  id: string;
  nome: string;
  /** Como a pessoa digita: sem acento não precisa, a busca normaliza. */
  aliases: string[];
  regiao: Regiao;
  tipo: 'composto' | 'isolador';
  /**
   * Quanto a série cansa o corpo inteiro, não só o músculo. Agachamento e
   * terra movem muita massa e pesam no fôlego; rosca não. É o que separa o
   * descanso do supino do descanso do crucifixo (Senna et al., 2016).
   */
  demanda: Demanda;
  /** Artigo de execução que existe no site. Só URL real. */
  artigo?: string;
  /** Nome feminino ("a rosca direta"), para a frase da explicação. */
  fem?: true;
}

const m = (slug: string) => `/musculacao/${slug}/`;

export const EXERCICIOS: Exercicio[] = [
  // Pernas e glúteos — os que mais cansam o corpo inteiro.
  { id: 'agachamento', nome: 'Agachamento livre', aliases: ['agachamento', 'agacho', 'squat', 'agachamento com barra', 'back squat'], regiao: 'pernas', tipo: 'composto', demanda: 'alta', artigo: m('agachamento-como-fazer') },
  { id: 'agachamento-frontal', nome: 'Agachamento frontal', aliases: ['front squat', 'agachamento frente'], regiao: 'pernas', tipo: 'composto', demanda: 'alta' },
  { id: 'agachamento-smith', nome: 'Agachamento no Smith', aliases: ['smith', 'agachamento smith'], regiao: 'pernas', tipo: 'composto', demanda: 'alta', artigo: m('agachamento-smith-como-fazer') },
  { id: 'hack', nome: 'Agachamento hack', aliases: ['hack', 'hack machine', 'hack squat'], regiao: 'pernas', tipo: 'composto', demanda: 'alta', artigo: m('agachamento-hack-como-fazer') },
  { id: 'leg-press', nome: 'Leg press', aliases: ['leg', 'legpress', 'leg 45', 'leg press 45', 'leg horizontal'], regiao: 'pernas', tipo: 'composto', demanda: 'alta', artigo: m('leg-press-como-fazer') },
  { id: 'terra', nome: 'Levantamento terra', aliases: ['terra', 'deadlift', 'levantamento terra convencional', 'terra sumo', 'sumo'], regiao: 'costas', tipo: 'composto', demanda: 'alta', artigo: m('levantamento-terra-como-fazer') },
  { id: 'terra-romeno', nome: 'Levantamento terra romeno', aliases: ['terra romeno', 'rdl', 'romeno'], regiao: 'pernas', tipo: 'composto', demanda: 'media', artigo: m('levantamento-terra-romeno-como-fazer') },
  { id: 'stiff', nome: 'Stiff', aliases: ['stiff com barra', 'stiff halteres'], regiao: 'pernas', tipo: 'composto', demanda: 'media', artigo: m('stiff-como-fazer') },
  { id: 'bom-dia', nome: 'Bom dia', aliases: ['good morning'], regiao: 'pernas', tipo: 'composto', demanda: 'media', artigo: m('bom-dia-como-fazer') },
  { id: 'bulgaro', nome: 'Agachamento búlgaro', aliases: ['bulgaro', 'búlgaro', 'split squat'], regiao: 'pernas', tipo: 'composto', demanda: 'media', artigo: m('agachamento-bulgaro-como-fazer') },
  { id: 'afundo', nome: 'Afundo', aliases: ['avanço', 'avanco', 'passada', 'lunge'], regiao: 'pernas', tipo: 'composto', demanda: 'media', artigo: m('afundo-como-fazer') },
  { id: 'hip-thrust', nome: 'Elevação pélvica (hip thrust)', aliases: ['hip thrust', 'elevação pélvica', 'elevacao pelvica', 'pélvica'], regiao: 'gluteos', tipo: 'composto', demanda: 'media', artigo: m('elevacao-pelvica-como-fazer'), fem: true },
  { id: 'extensora', nome: 'Cadeira extensora', aliases: ['extensora', 'extensão de joelho', 'cadeira extensora'], regiao: 'pernas', tipo: 'isolador', demanda: 'localizada', artigo: m('cadeira-extensora-como-fazer'), fem: true },
  { id: 'flexora-cadeira', nome: 'Cadeira flexora', aliases: ['flexora sentada', 'cadeira flexora'], regiao: 'pernas', tipo: 'isolador', demanda: 'localizada', artigo: m('cadeira-flexora-como-fazer'), fem: true },
  { id: 'mesa-flexora', nome: 'Mesa flexora', aliases: ['flexora', 'flexora deitada', 'mesa flexora'], regiao: 'pernas', tipo: 'isolador', demanda: 'localizada', artigo: m('mesa-flexora-como-fazer'), fem: true },
  { id: 'adutora', nome: 'Cadeira adutora ou abdutora', aliases: ['adutora', 'abdutora', 'cadeira adutora', 'cadeira abdutora'], regiao: 'gluteos', tipo: 'isolador', demanda: 'localizada', artigo: m('cadeira-adutora-e-abdutora'), fem: true },
  { id: 'coice', nome: 'Coice de glúteo', aliases: ['coice', 'glúteo no cabo', 'gluteo 4 apoios', 'kickback'], regiao: 'gluteos', tipo: 'isolador', demanda: 'localizada', artigo: m('coice-de-gluteo-como-fazer') },
  { id: 'panturrilha', nome: 'Panturrilha', aliases: ['panturrilha em pé', 'panturrilha sentado', 'gêmeos', 'gemeos', 'elevação de panturrilha'], regiao: 'pernas', tipo: 'isolador', demanda: 'localizada', artigo: m('treino-de-panturrilha'), fem: true },

  // Peito, costas e ombros.
  { id: 'supino', nome: 'Supino reto', aliases: ['supino', 'bench press', 'supino com barra', 'supino reto barra', 'supino máquina', 'supino maquina'], regiao: 'peito', tipo: 'composto', demanda: 'media', artigo: m('supino-como-fazer') },
  { id: 'supino-halteres', nome: 'Supino com halteres', aliases: ['supino halter', 'supino com halter', 'supino halteres'], regiao: 'peito', tipo: 'composto', demanda: 'media' },
  { id: 'supino-inclinado', nome: 'Supino inclinado', aliases: ['inclinado', 'supino inclinado barra', 'supino inclinado halteres'], regiao: 'peito', tipo: 'composto', demanda: 'media', artigo: m('supino-inclinado-como-fazer') },
  { id: 'supino-declinado', nome: 'Supino declinado', aliases: ['declinado'], regiao: 'peito', tipo: 'composto', demanda: 'media', artigo: m('supino-declinado-como-fazer') },
  { id: 'supino-fechado', nome: 'Supino fechado', aliases: ['supino pegada fechada', 'close grip'], regiao: 'triceps', tipo: 'composto', demanda: 'media', artigo: m('supino-fechado-como-fazer') },
  { id: 'flexao', nome: 'Flexão de braço', aliases: ['flexão', 'flexao', 'push up', 'apoio'], regiao: 'peito', tipo: 'composto', demanda: 'media', artigo: m('flexao-de-braco-como-fazer'), fem: true },
  { id: 'mergulho', nome: 'Mergulho nas paralelas', aliases: ['paralelas', 'dips', 'mergulho'], regiao: 'triceps', tipo: 'composto', demanda: 'media', artigo: m('mergulho-nas-paralelas-como-fazer') },
  { id: 'crucifixo', nome: 'Crucifixo', aliases: ['crucifixo reto', 'crucifixo halteres', 'fly'], regiao: 'peito', tipo: 'isolador', demanda: 'localizada', artigo: m('crucifixo-como-fazer') },
  { id: 'voador', nome: 'Voador (peck deck)', aliases: ['voador', 'peck deck', 'pec deck', 'fly máquina'], regiao: 'peito', tipo: 'isolador', demanda: 'localizada', artigo: m('voador-como-fazer') },
  { id: 'crossover', nome: 'Crossover', aliases: ['cross over', 'crossover polia'], regiao: 'peito', tipo: 'isolador', demanda: 'localizada', artigo: m('crossover-como-fazer') },
  { id: 'remada-curvada', nome: 'Remada curvada', aliases: ['remada com barra', 'remada curvada barra', 'bent over row'], regiao: 'costas', tipo: 'composto', demanda: 'media', artigo: m('remada-curvada-como-fazer'), fem: true },
  { id: 'remada-cavalinho', nome: 'Remada cavalinho', aliases: ['cavalinho', 'remada t', 't-bar'], regiao: 'costas', tipo: 'composto', demanda: 'media', artigo: m('remada-cavalinho-como-fazer'), fem: true },
  { id: 'remada-sentada', nome: 'Remada sentada', aliases: ['remada baixa', 'remada no cabo', 'remada máquina', 'remada maquina'], regiao: 'costas', tipo: 'composto', demanda: 'media', artigo: m('remada-sentada-como-fazer'), fem: true },
  { id: 'remada-unilateral', nome: 'Remada unilateral', aliases: ['serrote', 'remada serrote', 'remada com halter'], regiao: 'costas', tipo: 'composto', demanda: 'media', artigo: m('remada-unilateral-como-fazer'), fem: true },
  { id: 'puxada', nome: 'Puxada (pulley)', aliases: ['puxada frontal', 'pulley', 'pulldown', 'puxada alta', 'pulldown frente'], regiao: 'costas', tipo: 'composto', demanda: 'media', artigo: m('puxada-como-fazer'), fem: true },
  { id: 'barra-fixa', nome: 'Barra fixa', aliases: ['barra', 'pull up', 'chin up', 'pullup'], regiao: 'costas', tipo: 'composto', demanda: 'media', artigo: m('barra-fixa-como-fazer'), fem: true },
  { id: 'pullover', nome: 'Pullover', aliases: ['pull over'], regiao: 'costas', tipo: 'isolador', demanda: 'localizada', artigo: m('pullover-como-fazer') },
  { id: 'desenvolvimento', nome: 'Desenvolvimento', aliases: ['desenvolvimento militar', 'military press', 'desenvolvimento com barra', 'desenvolvimento halteres', 'overhead press', 'shoulder press'], regiao: 'ombros', tipo: 'composto', demanda: 'media', artigo: m('desenvolvimento-como-fazer') },
  { id: 'desenvolvimento-arnold', nome: 'Desenvolvimento Arnold', aliases: ['arnold', 'arnold press'], regiao: 'ombros', tipo: 'composto', demanda: 'media', artigo: m('desenvolvimento-arnold-como-fazer') },
  { id: 'elevacao-lateral', nome: 'Elevação lateral', aliases: ['lateral', 'elevação lateral halteres', 'elevacao lateral', 'abdução de ombro'], regiao: 'ombros', tipo: 'isolador', demanda: 'localizada', artigo: m('elevacao-lateral-como-fazer'), fem: true },
  { id: 'elevacao-frontal', nome: 'Elevação frontal', aliases: ['frontal', 'elevacao frontal'], regiao: 'ombros', tipo: 'isolador', demanda: 'localizada', artigo: m('elevacao-frontal-como-fazer'), fem: true },
  { id: 'crucifixo-invertido', nome: 'Crucifixo invertido', aliases: ['crucifixo inverso', 'voador invertido', 'posterior de ombro'], regiao: 'ombros', tipo: 'isolador', demanda: 'localizada', artigo: m('crucifixo-invertido-como-fazer') },
  { id: 'face-pull', nome: 'Face pull', aliases: ['facepull', 'puxada para o rosto'], regiao: 'ombros', tipo: 'isolador', demanda: 'localizada', artigo: m('face-pull-como-fazer') },
  { id: 'encolhimento', nome: 'Encolhimento', aliases: ['trapézio', 'trapezio', 'shrug'], regiao: 'costas', tipo: 'isolador', demanda: 'localizada', artigo: m('encolhimento-como-fazer') },

  // Braços.
  { id: 'rosca-direta', nome: 'Rosca direta', aliases: ['rosca', 'bíceps', 'biceps', 'bíceps barra', 'biceps barra', 'rosca barra', 'rosca w'], regiao: 'biceps', tipo: 'isolador', demanda: 'localizada', artigo: m('rosca-direta-como-fazer'), fem: true },
  { id: 'rosca-alternada', nome: 'Rosca alternada', aliases: ['rosca halteres', 'rosca com halter'], regiao: 'biceps', tipo: 'isolador', demanda: 'localizada', artigo: m('rosca-alternada-como-fazer'), fem: true },
  { id: 'rosca-martelo', nome: 'Rosca martelo', aliases: ['martelo', 'hammer curl'], regiao: 'biceps', tipo: 'isolador', demanda: 'localizada', artigo: m('rosca-martelo-como-fazer'), fem: true },
  { id: 'rosca-scott', nome: 'Rosca Scott', aliases: ['scott', 'banco scott'], regiao: 'biceps', tipo: 'isolador', demanda: 'localizada', artigo: m('rosca-scott-como-fazer'), fem: true },
  { id: 'rosca-concentrada', nome: 'Rosca concentrada', aliases: ['concentrada'], regiao: 'biceps', tipo: 'isolador', demanda: 'localizada', artigo: m('rosca-concentrada-como-fazer'), fem: true },
  { id: 'triceps-pulley', nome: 'Tríceps na polia (pulley)', aliases: ['tríceps', 'triceps', 'tríceps pulley', 'triceps pulley', 'tríceps corda', 'triceps corda', 'tríceps polia'], regiao: 'triceps', tipo: 'isolador', demanda: 'localizada', artigo: m('triceps-pulley-como-fazer') },
  { id: 'triceps-testa', nome: 'Tríceps testa', aliases: ['testa', 'triceps testa', 'skull crusher'], regiao: 'triceps', tipo: 'isolador', demanda: 'localizada', artigo: m('triceps-testa-como-fazer') },
  { id: 'triceps-frances', nome: 'Tríceps francês', aliases: ['francês', 'frances', 'triceps frances', 'tríceps acima da cabeça'], regiao: 'triceps', tipo: 'isolador', demanda: 'localizada', artigo: m('triceps-frances-como-fazer') },

  // Core.
  { id: 'abdominal', nome: 'Abdominal', aliases: ['abdômen', 'abdomen', 'abdominal supra', 'crunch', 'abdominal máquina'], regiao: 'core', tipo: 'isolador', demanda: 'localizada', artigo: m('treino-de-abdomen') },
  { id: 'elevacao-pernas', nome: 'Elevação de pernas', aliases: ['abdominal infra', 'elevação de pernas', 'elevacao de pernas', 'infra'], regiao: 'core', tipo: 'isolador', demanda: 'localizada', artigo: m('elevacao-de-pernas-como-fazer'), fem: true },
];

export const exercicio = (id: string): Exercicio | undefined => EXERCICIOS.find((e) => e.id === id);

/** "O supino reto", "A rosca direta" — o sujeito da explicação. */
export const comArtigo = (e: Exercicio): string => `${e.fem ? 'A' : 'O'} ${e.nome.charAt(0).toLowerCase()}${e.nome.slice(1)}`;

/** Os que aparecem como atalho antes de a pessoa digitar. */
export const ATALHOS = ['supino', 'agachamento', 'leg-press', 'puxada', 'rosca-direta', 'elevacao-lateral'];

const normaliza = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * Busca por nome e apelido. Ordena: nome que começa com o texto, depois
 * apelido que começa, depois contém. Devolve no máximo `limite`.
 */
export function buscaExercicios(texto: string, limite = 6): Exercicio[] {
  const q = normaliza(texto);
  if (!q) return [];
  const pontua = (e: Exercicio): number => {
    const nome = normaliza(e.nome);
    const apelidos = e.aliases.map(normaliza);
    if (nome === q || apelidos.includes(q)) return 0;
    if (nome.startsWith(q)) return 1;
    if (apelidos.some((a) => a.startsWith(q))) return 2;
    if (nome.includes(q)) return 3;
    if (apelidos.some((a) => a.includes(q))) return 4;
    return 99;
  };
  return EXERCICIOS.map((e) => ({ e, p: pontua(e) }))
    .filter((x) => x.p < 99)
    // No empate, o atalho (o mais comum) e o nome mais curto vêm antes:
    // "supi" mostra o supino reto, não o "supino com halteres".
    .sort(
      (a, b) =>
        a.p - b.p ||
        Number(ATALHOS.includes(b.e.id)) - Number(ATALHOS.includes(a.e.id)) ||
        a.e.nome.length - b.e.nome.length ||
        a.e.nome.localeCompare(b.e.nome, 'pt-BR'),
    )
    .slice(0, limite)
    .map((x) => x.e);
}

/** Exercício que não está na base: a pessoa diz a região e o tipo. */
export type TipoGenerico = 'pesado' | 'intermediario' | 'isolador';

export const TIPOS_GENERICOS: { id: TipoGenerico; nome: string; dica: string }[] = [
  { id: 'pesado', nome: 'Pesado, vários músculos', dica: 'Como agachamento, terra ou leg press' },
  { id: 'intermediario', nome: 'Vários músculos, mais leve', dica: 'Como supino, remada ou puxada' },
  { id: 'isolador', nome: 'Um músculo só', dica: 'Como rosca, tríceps ou extensora' },
];

export function demandaGenerica(tipo: TipoGenerico): Demanda {
  return tipo === 'pesado' ? 'alta' : tipo === 'intermediario' ? 'media' : 'localizada';
}

/* ───────────────────────── Conversões ───────────────────────── */

/** Número de repetições digitado → faixa. Fora de 1–100, nada. */
export function faixaDasReps(reps: number): FaixaReps | null {
  if (!Number.isFinite(reps) || reps < 1 || reps > 100) return null;
  const r = Math.round(reps);
  if (r <= 5) return '1-5';
  if (r <= 8) return '6-8';
  if (r <= 12) return '9-12';
  if (r <= 15) return '13-15';
  if (r <= 20) return '16-20';
  return '20+';
}

/** RIR direto (modo avançado) → esforço. */
export function esforcoDoRir(rir: number): Esforco | null {
  if (!Number.isFinite(rir) || rir < 0 || rir > 10) return null;
  if (rir < 0.5) return 'falha';
  if (rir <= 2) return 'perto';
  if (rir <= 4) return 'moderado';
  return 'longe';
}

/** RPE 10 = falha; RIR = 10 − RPE. Aceita meio ponto. */
export function esforcoDoRpe(rpe: number): Esforco | null {
  if (!Number.isFinite(rpe) || rpe < 1 || rpe > 10) return null;
  return esforcoDoRir(10 - rpe);
}

/* ───────────────────────── O cálculo ───────────────────────── */

const PARTIDA: Record<Demanda, number> = {
  alta: ESCADA.indexOf(150),
  media: ESCADA.indexOf(120),
  localizada: ESCADA.indexOf(60),
};

/** Poucas repetições = carga alta: sobe. Muitas: desce. */
const AJUSTE_REPS: Record<FaixaReps, number> = {
  '1-5': 1,
  '6-8': 0,
  '9-12': 0,
  '13-15': -1,
  '16-20': -1,
  '20+': -2,
};

/** Perto da falha, a série cansa mais e pede mais tempo para se repetir. */
const AJUSTE_ESFORCO: Record<Esforco, number> = {
  longe: -2,
  moderado: -1,
  perto: 0,
  falha: 1,
};

/**
 * Força quer a próxima série inteira (de Salles et al., 2009). Resistência e
 * condicionamento usam a recuperação incompleta como parte do estímulo —
 * é escolha, não economia de tempo.
 */
const AJUSTE_OBJETIVO: Record<Objetivo, number> = {
  hipertrofia: 0,
  naosei: 0,
  forca: 1,
  resistencia: -2,
  condicionamento: -2,
};

export interface Entrada {
  objetivo: Objetivo;
  demanda: Demanda;
  reps: FaixaReps;
  esforco: Esforco;
}

export interface Fator {
  id: 'exercicio' | 'reps' | 'esforco' | 'objetivo' | 'piso';
  degraus: number;
  texto: string;
}

export interface Resultado {
  entrada: Entrada;
  /** Índices na escada. */
  degrauMin: number;
  degrauMax: number;
  degrauInicio: number;
  min: number;
  max: number;
  inicio: number;
  fatores: Fator[];
}

const largura = (d: Demanda): number => (d === 'localizada' ? 1 : 2);
const ehHipertrofia = (o: Objetivo): boolean => o === 'hipertrofia' || o === 'naosei';
const piso = (o: Objetivo): number => (ehHipertrofia(o) ? PISO_HIPERTROFIA : 0);
const teto = (o: Objetivo): number => (ehHipertrofia(o) ? TETO_HIPERTROFIA : DEGRAU_MAX);

const TEXTO_DEMANDA: Record<Demanda, string> = {
  alta: 'é um exercício pesado, que move muita massa muscular e cansa o corpo inteiro',
  media: 'é um exercício composto, que usa vários músculos ao mesmo tempo',
  localizada: 'é um exercício localizado, que recupera mais rápido',
};

const TEXTO_REPS: Record<FaixaReps, string> = {
  '1-5': 'poucas repetições significam carga alta',
  '6-8': '',
  '9-12': '',
  '13-15': 'com mais repetições, a carga é menor',
  '16-20': 'com mais repetições, a carga é menor',
  '20+': 'séries longas usam carga bem menor',
};

const TEXTO_ESFORCO: Record<Esforco, string> = {
  longe: 'a série termina longe da falha, e cansa pouco',
  moderado: 'a série termina com algumas repetições sobrando',
  perto: '',
  falha: 'a série vai até a falha, e é a que mais cansa',
};

const TEXTO_OBJETIVO: Record<Objetivo, string> = {
  hipertrofia: '',
  naosei: '',
  forca: 'para força, vale chegar à próxima série recuperado',
  resistencia: 'para resistência, a recuperação incompleta faz parte do estímulo',
  condicionamento: 'para condicionamento, a recuperação incompleta faz parte do estímulo',
};

export function calcular(e: Entrada): Resultado {
  const fatores: Fator[] = [{ id: 'exercicio', degraus: 0, texto: TEXTO_DEMANDA[e.demanda] }];
  let d = PARTIDA[e.demanda];

  const add = (id: Fator['id'], degraus: number, texto: string) => {
    d += degraus;
    if (degraus !== 0 && texto) fatores.push({ id, degraus, texto });
  };
  add('reps', AJUSTE_REPS[e.reps], TEXTO_REPS[e.reps]);
  add('esforco', AJUSTE_ESFORCO[e.esforco], TEXTO_ESFORCO[e.esforco]);
  add('objetivo', AJUSTE_OBJETIVO[e.objetivo], TEXTO_OBJETIVO[e.objetivo]);

  const p = piso(e.objetivo);
  if (d < p) {
    if (p > 0) fatores.push({ id: 'piso', degraus: p - d, texto: 'para hipertrofia, menos de 1 minuto tende a custar repetições nas séries seguintes' });
    d = p;
  }
  const t = teto(e.objetivo);
  d = Math.max(0, Math.min(t, d));

  const w = largura(e.demanda);
  let max = Math.min(t, d + w);
  // No teto, a faixa desce em vez de encolher: "4:00 a 5:00" vira "3:00 a 5:00".
  if (max - d < w) d = Math.max(0, max - w);
  if (max === d) max = Math.min(t, d + 1);
  const inicio = d + Math.floor((max - d) / 2);

  return {
    entrada: e,
    degrauMin: d,
    degrauMax: max,
    degrauInicio: inicio,
    min: ESCADA[d],
    max: ESCADA[max],
    inicio: ESCADA[inicio],
    fatores,
  };
}

/** Frase do "por que esse intervalo?", com os fatores que mexeram na conta. */
export function explicacao(r: Resultado, nomeExercicio?: string): string {
  const partes = r.fatores.map((f) => f.texto).filter(Boolean);
  const primeira = `${nomeExercicio ?? 'Este'} ${partes[0]}.`;
  const resto = partes.slice(1);
  const segunda = resto.length ? ` ${maiuscula(resto.join('; '))}.` : '';
  return `${primeira}${segunda} A faixa é para a próxima série sair parecida com esta.`;
}

const maiuscula = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ───────────────────────── O ajuste pela série seguinte ───────────────────────── */

export type Feedback = 'manteve' | 'perdeu12' | 'perdeu3' | 'reduziu' | 'sobrou';

export const FEEDBACKS: { id: Feedback; nome: string }[] = [
  { id: 'manteve', nome: 'Mantive carga e repetições' },
  { id: 'perdeu12', nome: 'Perdi 1 ou 2 repetições' },
  { id: 'perdeu3', nome: 'Perdi 3 ou mais' },
  { id: 'reduziu', nome: 'Tive que baixar a carga' },
  { id: 'sobrou', nome: 'Já estava pronto antes' },
];

export interface Ajuste {
  /** Novo degrau para o próximo descanso. */
  degrau: number;
  segundos: number;
  mudou: -1 | 0 | 1;
  mensagem: string;
}

/**
 * Sugere o próximo descanso a partir do que aconteceu na série.
 *
 * Nunca afirma a causa: queda de repetição também vem de fadiga acumulada,
 * técnica e da própria proximidade da falha. Perto da falha, perder 1 ou 2
 * repetições na série seguinte é esperado mesmo com descanso longo.
 *
 * `subidasSeguidas` conta quantas vezes o descanso já subiu em seguida com
 * queda de desempenho: na terceira, o aviso muda para fadiga acumulada.
 */
export function ajustar(
  r: Resultado,
  degrauAtual: number,
  fb: Feedback,
  subidasSeguidas = 0,
): Ajuste {
  const minimo = Math.max(piso(r.entrada.objetivo), r.degrauMin - 1);
  const pertoDaFalha = r.entrada.esforco === 'perto' || r.entrada.esforco === 'falha';
  const vai = (delta: number, msg: string): Ajuste => {
    const novo = Math.max(minimo, Math.min(teto(r.entrada.objetivo), degrauAtual + delta));
    const mudou = (Math.sign(novo - degrauAtual) as -1 | 0 | 1);
    if (delta > 0 && mudou === 0) {
      return {
        degrau: novo,
        segundos: ESCADA[novo],
        mudou,
        mensagem:
          'O descanso já está no máximo que costuma fazer diferença para este objetivo. Se o desempenho segue caindo, pode ser fadiga acumulada do treino: é comum nas últimas séries. Mantenha o tempo e aceite a queda, ou faça uma série a menos neste exercício.',
      };
    }
    return { degrau: novo, segundos: ESCADA[novo], mudou, mensagem: msg };
  };

  if (subidasSeguidas >= 2 && (fb === 'perdeu3' || fb === 'reduziu')) {
    return vai(
      0,
      'O descanso já subiu duas vezes e o desempenho seguiu caindo. Pode ser fadiga acumulada do treino, não só do descanso: é comum nas últimas séries. Se quiser, mantenha este tempo e aceite a queda, ou faça uma série a menos neste exercício.',
    );
  }

  switch (fb) {
    case 'manteve':
      return vai(0, 'Você manteve o desempenho. Esse intervalo parece funcionar para este exercício hoje.');
    case 'sobrou':
      return vai(
        -1,
        'Se você já estava pronto antes, experimente um descanso um pouco menor e observe se a próxima série sai igual.',
      );
    case 'perdeu12':
      return pertoDaFalha
        ? vai(
            0,
            'Perto da falha, perder 1 ou 2 repetições na série seguinte é esperado, mesmo com descanso longo. Pode manter o tempo.',
          )
        : vai(
            1,
            'Como a série não estava perto da falha, a queda pode indicar que um pouco mais de descanso ajudaria — embora outros fatores também influenciem. Experimente o próximo tempo.',
          );
    case 'perdeu3':
      return vai(
        2,
        'A queda foi grande. Ela pode indicar que você se beneficiaria de mais descanso, embora fadiga acumulada e execução também influenciem. Experimente o próximo tempo e observe.',
      );
    case 'reduziu':
      return vai(
        2,
        'Se você baixou a carga por não aguentar, experimente descansar mais na próxima. Se baixou de propósito, a comparação com a série anterior muda — avalie pela seguinte.',
      );
  }
}

/* ───────────────────────── Formatação ───────────────────────── */

/** 90 → "1:30"; 45 → "0:45". */
export function formataTempo(seg: number): string {
  const s = Math.max(0, Math.round(seg));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, '0')}`;
}

/** 90 → "1 min 30 s"; 120 → "2 minutos"; 45 → "45 segundos". Para leitura em voz alta e FAQs. */
export function formataTempoExtenso(seg: number): string {
  const s = Math.max(0, Math.round(seg));
  const m = Math.floor(s / 60);
  const r = s % 60;
  if (m === 0) return `${r} segundos`;
  if (r === 0) return m === 1 ? '1 minuto' : `${m} minutos`;
  return `${m} min ${r} s`;
}

export const formataFaixa = (r: Resultado): string => `${formataTempo(r.min)} a ${formataTempo(r.max)}`;

export const formataFaixaExtenso = (r: Resultado): string =>
  `${formataTempoExtenso(r.min)} a ${formataTempoExtenso(r.max)}`;

/** Faixa categórica para o analytics: nunca o número exato. */
export function faixaAnalytics(r: Resultado): string {
  if (r.max <= 60) return 'ate_60';
  if (r.max <= 120) return '60_120';
  if (r.max <= 180) return '120_180';
  return 'acima_180';
}

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_RELOGIO =
  'O relógio é ponto de partida, não regra. Se você ainda está ofegante ou sente que não repetiria a série, descanse mais. Se recuperou e o exercício é leve, não precisa esperar o fim da faixa.';

export const NOTA_SEGURANCA =
  'Tontura, dor no peito, falta de ar fora do normal ou dor aguda não se resolvem com mais descanso: pare o treino e procure avaliação médica.';

export const NOTA_TECNICAS =
  'A conta é para séries convencionais. Superset, drop-set, rest-pause e circuito têm lógica própria de descanso — explicada mais abaixo nesta página.';
