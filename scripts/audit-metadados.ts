/**
 * Auditoria de meta title e meta description de TODAS as páginas do site.
 *
 * POR QUE ESTE SCRIPT EXISTE
 *
 * Title e description são as duas únicas frases que o Google mostra antes do
 * clique. Elas são escritas em `src/pages/*.astro` e viajam para seis lugares
 * diferentes do HTML (`<title>`, `meta[name=description]`, `og:title`,
 * `og:description`, `twitter:title`, `twitter:description`) através do
 * `Base.astro`. Quando um desses seis diverge — porque alguém escreveu um
 * `og:title` à mão numa página —, o snippet que o Google monta deixa de ser o
 * que a gente revisou. Isso não aparece lendo o `.astro`; aparece contando
 * tags no HTML gerado. Por isso a auditoria roda sobre `dist/`.
 *
 * O QUE ELA PROTEGE, ALÉM DO COMPRIMENTO
 *
 * A regra comercial do portal: a promessa do snippet precisa corresponder ao
 * que a página entrega. As páginas de bairro NÃO têm lista de profissionais
 * cadastrados, e o atendimento presencial do Montinho acontece só na Arena 18,
 * em Alphaville. Um título que prometa "encontre profissionais na Tijuca" ou
 * "personal presencial perto de você" seria mentira de snippet — o pior tipo
 * de erro de SEO, porque converte clique em decepção e ensina o Google que a
 * página não responde à consulta. A lista `FRASES_PROIBIDAS` existe para que
 * essa regra seja verificada por máquina, não por memória de quem revisa.
 *
 * Uso:
 *   npm run build && npm run audit:metadados
 *   npm run audit:metadados -- --piloto   (só as dez páginas de bairro do piloto)
 *   npm run audit:metadados -- --tabela   (tabela com comprimento de cada página)
 *
 * Sai com código 1 em defeito bloqueante (title/description ausente, duplicado,
 * divergente entre as seis tags, frase proibida, lixo de template).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

const args = process.argv.slice(2);
const soPiloto = args.includes('--piloto');
const comTabela = args.includes('--tabela');

/** As dez páginas de bairro do piloto de metadados (11/09/2026). */
const PILOTO = [
  'personal-trainer-tijuca',
  'personal-trainer-barra-da-tijuca',
  'personal-trainer-savassi',
  'personal-trainer-icarai',
  'personal-trainer-boa-viagem',
  'personal-trainer-leblon',
  'personal-trainer-moema',
  'personal-trainer-brooklin',
  'personal-trainer-asa-sul',
  'personal-trainer-gleba-palhano',
];

/**
 * Faixas de comprimento.
 *
 * Os limites BLOQUEANTES são largos de propósito: o Google não corta por
 * caractere, corta por pixel, e um título de 62 caracteres não é um defeito.
 * Os limites IDEAIS são a meta editorial — viram aviso, não erro, para a
 * auditoria continuar servindo como régua sem virar obstáculo burocrático.
 */
const TITLE_MIN = 25;
const TITLE_MAX = 70;
const TITLE_IDEAL = [45, 60] as const;
const DESC_MIN = 100;
const DESC_MAX = 175;
const DESC_IDEAL = [135, 160] as const;

/**
 * Frases que não podem aparecer em título nem em descrição, com o motivo.
 *
 * Não é filtro de estilo: cada uma promete algo que a página não entrega.
 */
const FRASES_PROIBIDAS: { re: RegExp; motivo: string }[] = [
  {
    re: /contrate o montinho no seu bairro/i,
    motivo: 'o atendimento presencial do Montinho é só na Arena 18, em Alphaville',
  },
  {
    re: /personal presencial perto de voc[eê]/i,
    motivo: 'promete presencial onde o portal só oferece guia e acompanhamento online',
  },
  {
    re: /atendimento do montinho na /i,
    motivo: 'sugere atendimento presencial fora de Alphaville',
  },
  {
    re: /encontre (os )?profissionais cadastrados|profissionais cadastrados/i,
    motivo: 'o portal não tem cadastro de profissionais',
  },
  {
    re: /(os|as) melhores (personais|personal trainers|profissionais)/i,
    motivo: 'superlativo sem metodologia nem lista publicada na página',
  },
  {
    re: /\b(garantido|garantia de resultado|resultado garantido)\b/i,
    motivo: 'promessa de resultado',
  },
  {
    re: /\b(cura|curar)\b/i,
    motivo: 'promessa de cura — proibida em todo o conteúdo',
  },
  {
    re: /\b(cref|confef)\b/i,
    motivo: 'menção a CREF/CONFEF é proibida em todo o conteúdo',
  },
  {
    re: /última chance|corra|vagas? limitadas?|últimas vagas|só hoje|aproveite agora/i,
    motivo: 'falsa urgência',
  },
  {
    re: /voc[eê] não vai acreditar|o segredo que|ninguém te conta/i,
    motivo: 'clickbait',
  },
];

/**
 * Superlativos que o snippet só pode usar se a página publicar o critério.
 *
 * Não bloqueiam — "os melhores lugares para treinar" é legítimo numa página
 * que de fato lista e justifica os lugares. Viram aviso para que a revisão
 * confira a lista em vez de confiar na lembrança de quem escreveu.
 */
const SUPERLATIVOS = /\b(os|as) melhores\b|\bo melhor\b|\bimperd[ií]vel\b|\bdefinitivo\b/i;

/** Lixo de template que nunca deve chegar ao HTML. */
const LIXO = /\b(undefined|null|NaN|\[object Object\])\b/;

/** Emoji e pictogramas — fora do padrão editorial do portal. */
const EMOJI =
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{FE0F}\u{2022}\u{2B00}-\u{2BFF}]/u;

// ---------------------------------------------------------------- utilidades

/** Caminha o dist e devolve o caminho de cada index.html, como rota do site. */
function rotas(dir = DIST, base = ''): Map<string, string> {
  const mapa = new Map<string, string>();
  for (const entrada of readdirSync(dir)) {
    const caminho = join(dir, entrada);
    if (statSync(caminho).isDirectory()) {
      for (const [r, f] of rotas(caminho, `${base}/${entrada}`)) mapa.set(r, f);
    } else if (entrada === 'index.html') {
      mapa.set(`${base}/`, caminho);
    }
  }
  return mapa;
}

/** Decodifica as entidades que o Astro escreve no HTML. */
function texto(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function todas(html: string, re: RegExp): string[] {
  return [...html.matchAll(re)].map((m) => texto(m[1]));
}

/**
 * Conteúdo de uma meta tag, por atributo `name` ou `property`.
 *
 * O delimitador é capturado e fechado por retrovisor (`\1`) de propósito:
 * a versão ingênua `["']([^"']*)["']` corta o valor no primeiro apóstrofo
 * interno e inventa divergências — foi o que aconteceu com a página da Ponta
 * d'Areia, que a auditoria acusou de ter `og:title` diferente do `<title>`
 * quando os dois eram idênticos.
 */
function metas(html: string, chave: string, atributo: 'name' | 'property'): string[] {
  const re = new RegExp(
    `<meta[^>]*${atributo}=["']${chave}["'][^>]*content=(["'])((?:(?!\\1)[\\s\\S])*)\\1|` +
      `<meta[^>]*content=(["'])((?:(?!\\3)[\\s\\S])*)\\3[^>]*${atributo}=["']${chave}["']`,
    'gi',
  );
  return [...html.matchAll(re)].map((m) => texto(m[2] ?? m[4] ?? ''));
}

/**
 * Palavra repetida demais — o sintoma mensurável de keyword stuffing.
 * Ignora palavras curtas e a locução "personal trainer", que é o assunto e
 * aparece legitimamente uma vez em título e uma em descrição.
 */
function repeticaoExcessiva(frase: string): string | null {
  const conta = new Map<string, number>();
  for (const p of frase.toLowerCase().match(/[a-zà-ú]{5,}/gi) ?? []) {
    conta.set(p, (conta.get(p) ?? 0) + 1);
  }
  for (const [p, n] of conta) if (n >= 3) return `"${p}" ${n}×`;
  return null;
}

// ------------------------------------------------------------------ execução

if (!readdirSync('.').includes(DIST)) {
  console.error('dist/ não existe. Rode `npm run build` antes.');
  process.exit(1);
}

interface Pagina {
  rota: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDesc: string;
  twTitle: string;
  twDesc: string;
  nTitles: number;
  nDescs: number;
}

const erros: string[] = [];
const avisos: string[] = [];
const paginas: Pagina[] = [];

const mapa = rotas();
const alvo = [...mapa.entries()].filter(([rota]) =>
  soPiloto ? PILOTO.some((s) => rota === `/${s}/`) : true,
);

for (const [rota, arquivo] of alvo) {
  const html = readFileSync(arquivo, 'utf8');
  const head = html.slice(0, html.indexOf('</head>') + 7);

  const titles = todas(head, /<title[^>]*>([\s\S]*?)<\/title>/gi);
  const descs = metas(head, 'description', 'name');

  const p: Pagina = {
    rota,
    title: titles[0] ?? '',
    description: descs[0] ?? '',
    ogTitle: metas(head, 'og:title', 'property')[0] ?? '',
    ogDesc: metas(head, 'og:description', 'property')[0] ?? '',
    twTitle: metas(head, 'twitter:title', 'name')[0] ?? '',
    twDesc: metas(head, 'twitter:description', 'name')[0] ?? '',
    nTitles: titles.length,
    nDescs: descs.length,
  };
  paginas.push(p);

  // --- presença e unicidade dentro da própria página
  if (p.nTitles !== 1) erros.push(`${rota} tem ${p.nTitles} <title> (esperado 1)`);
  if (p.nDescs !== 1) erros.push(`${rota} tem ${p.nDescs} meta description (esperado 1)`);
  if (!p.title) erros.push(`${rota} sem <title>`);
  if (!p.description) erros.push(`${rota} sem meta description`);

  // --- as seis tags precisam contar a mesma história
  if (p.ogTitle && p.ogTitle !== p.title) erros.push(`${rota} og:title diverge do <title>`);
  if (p.twTitle && p.twTitle !== p.title) erros.push(`${rota} twitter:title diverge do <title>`);
  if (p.ogDesc && p.ogDesc !== p.description)
    erros.push(`${rota} og:description diverge da meta description`);
  if (p.twDesc && p.twDesc !== p.description)
    erros.push(`${rota} twitter:description diverge da meta description`);

  for (const [campo, valor] of [
    ['title', p.title],
    ['description', p.description],
  ] as const) {
    if (!valor) continue;

    if (LIXO.test(valor)) erros.push(`${rota} ${campo} com lixo de template: ${valor}`);
    if (EMOJI.test(valor)) erros.push(`${rota} ${campo} com emoji/pictograma`);

    for (const { re, motivo } of FRASES_PROIBIDAS) {
      if (re.test(valor)) erros.push(`${rota} ${campo} com frase proibida (${motivo}): ${valor}`);
    }

    // Caixa alta gritada: uma palavra inteira em maiúsculas, fora de siglas de
    // até 3 letras (RJ, SP, BH, GLP — legítimas).
    if (SUPERLATIVOS.test(valor))
      avisos.push(`${rota} ${campo} com superlativo a conferir contra o conteúdo: ${valor}`);

    const gritos = valor.match(/\b[A-ZÀ-Ú]{4,}\b/g);
    if (gritos) avisos.push(`${rota} ${campo} em caixa alta: ${gritos.join(', ')}`);

    const rep = repeticaoExcessiva(valor);
    if (rep) avisos.push(`${rota} ${campo} com repetição excessiva: ${rep}`);
  }

  // --- comprimento
  if (p.title) {
    if (p.title.length < TITLE_MIN || p.title.length > TITLE_MAX) {
      erros.push(`${rota} title com ${p.title.length} caracteres (limite ${TITLE_MIN}–${TITLE_MAX})`);
    } else if (p.title.length < TITLE_IDEAL[0] || p.title.length > TITLE_IDEAL[1]) {
      avisos.push(
        `${rota} title com ${p.title.length} caracteres (ideal ${TITLE_IDEAL[0]}–${TITLE_IDEAL[1]})`,
      );
    }
  }
  if (p.description) {
    if (p.description.length < DESC_MIN || p.description.length > DESC_MAX) {
      erros.push(
        `${rota} description com ${p.description.length} caracteres (limite ${DESC_MIN}–${DESC_MAX})`,
      );
    } else if (p.description.length < DESC_IDEAL[0] || p.description.length > DESC_IDEAL[1]) {
      avisos.push(
        `${rota} description com ${p.description.length} caracteres (ideal ${DESC_IDEAL[0]}–${DESC_IDEAL[1]})`,
      );
    }
  }
}

// --- duplicação entre páginas (só faz sentido no varrimento completo)
if (!soPiloto) {
  const porTitle = new Map<string, string[]>();
  const porDesc = new Map<string, string[]>();
  for (const p of paginas) {
    if (p.title) porTitle.set(p.title, [...(porTitle.get(p.title) ?? []), p.rota]);
    if (p.description) porDesc.set(p.description, [...(porDesc.get(p.description) ?? []), p.rota]);
  }
  for (const [t, rs] of porTitle) {
    if (rs.length > 1) erros.push(`title duplicado em ${rs.length} páginas — "${t}": ${rs.join(', ')}`);
  }
  for (const [d, rs] of porDesc) {
    if (rs.length > 1)
      erros.push(`description duplicada em ${rs.length} páginas — "${d.slice(0, 60)}…": ${rs.join(', ')}`);
  }
}

// -------------------------------------------------------------------- saída

if (comTabela) {
  console.log('\nrota'.padEnd(46) + 'title'.padStart(6) + 'desc'.padStart(7));
  for (const p of [...paginas].sort((a, b) => a.rota.localeCompare(b.rota))) {
    console.log(
      p.rota.padEnd(46) + String(p.title.length).padStart(6) + String(p.description.length).padStart(7),
    );
  }
}

console.log(`\nPáginas auditadas: ${paginas.length}${soPiloto ? ' (piloto)' : ''}`);

if (avisos.length) {
  console.log(`\nAvisos (${avisos.length}):`);
  for (const a of avisos) console.log(`  · ${a}`);
}

if (erros.length) {
  console.log(`\nDefeitos bloqueantes (${erros.length}):`);
  for (const e of erros) console.log(`  ✗ ${e}`);
  process.exit(1);
}

console.log('\nSem defeitos bloqueantes de metadados.');
