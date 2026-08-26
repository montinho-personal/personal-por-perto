/**
 * Auditoria da base de academias do portal.
 *
 * Não verifica se uma academia continua aberta — isso exige checagem no
 * mundo real, uma a uma. O que este script faz é dizer ONDE olhar primeiro:
 * separa o que é estabelecimento nomeado do que é descrição genérica,
 * mede a cobertura por porte de cidade, aponta duplicidades e lista as
 * redes mais citadas (onde um fechamento afeta muitas páginas de uma vez).
 *
 * Uso: npm run audit:academias
 *      npm run audit:academias -- --cidades   (lista as cidades sem academia)
 */
import { cidades } from '../src/data/cidades';
import { getFitnessPlaces } from '../src/lib/fitnessPlaces';

const detalhado = process.argv.includes('--cidades');

/**
 * Entradas que descrevem uma categoria de lugar, não um estabelecimento
 * com nome próprio. Não são erro — são úteis no texto —, mas não podem ser
 * tratadas como academia verificável nem entrar em mapa.
 */
const PADROES_GENERICOS = [
  /^academias? de condom[íi]nio/i,
  /^academias? do condom[íi]nio/i,
  /^est[úu]dios?\b/i,
  /^boxes? de/i,
  /^academias? de bairro/i,
  /^redes? nacionais/i,
  /^pequenas academias/i,
  /^academias? locais/i,
  /^academias? municipais/i,
  /^pra[çc]as? de gin[áa]stica/i,
  /e (boxes|est[úu]dios)/i,
];

/** Redes nacionais: um fechamento local não invalida o nome, mas a unidade sim. */
const REDES = [
  'Smart Fit',
  'Bluefit',
  'Bodytech',
  'Selfit',
  'Panobianco',
  'Bio Ritmo',
  'Just Fit',
  'Gaviões',
  'Allp Fit',
  'Fórmula Academia',
  'Competition',
  'Skyfit',
  'Pratique Fitness',
  'Ironberg',
  'NitroGym',
];

interface Registro {
  cidade: string;
  uf: string;
  populacao: number;
  nome: string;
  detalhe: string;
  generico: boolean;
  rede?: string;
  temEndereco: boolean;
}

const registros: Registro[] = [];
const semAcademia: { slug: string; nome: string; uf: string; pop: number }[] = [];

for (const c of cidades) {
  const nomeadas = getFitnessPlaces(c).filter((l) => l.categoria === 'gym');
  if (!nomeadas.length) {
    semAcademia.push({ slug: c.slug, nome: c.nome, uf: c.uf, pop: c.populacao ?? 0 });
    continue;
  }
  for (const l of nomeadas) {
    const generico = PADROES_GENERICOS.some((p) => p.test(l.nome));
    const rede = REDES.find((r) => l.nome.toLowerCase().includes(r.toLowerCase()));
    // Detalhe com rua, avenida, shopping ou bairro dá pista de onde conferir.
    const temEndereco = /\b(av\.|avenida|rua|estrada|rodovia|shopping|km |n[ºo°] ?\d)/i.test(l.nota);
    registros.push({
      cidade: c.nome,
      uf: c.uf,
      populacao: c.populacao ?? 0,
      nome: l.nome,
      detalhe: l.nota,
      generico,
      rede,
      temEndereco,
    });
  }
}

/* ----------------------------- relatório ----------------------------- */

const linha = (n: number, t: string) => `  ${String(n).padStart(5)}  ${t}`;
const pct = (n: number, total: number) => `${((n / total) * 100).toFixed(1)}%`;

console.log('\n' + '='.repeat(74));
console.log('AUDITORIA DA BASE DE ACADEMIAS');
console.log('='.repeat(74));

const nomeados = registros.filter((r) => !r.generico);
const genericos = registros.filter((r) => r.generico);

console.log('\nVISÃO GERAL');
console.log(linha(cidades.length, 'cidades no portal'));
console.log(linha(cidades.length - semAcademia.length, `cidades com alguma academia citada (${pct(cidades.length - semAcademia.length, cidades.length)})`));
console.log(linha(semAcademia.length, `cidades SEM nenhuma academia citada (${pct(semAcademia.length, cidades.length)})`));
console.log(linha(registros.length, 'entradas na lista de academias'));
console.log(linha(nomeados.length, `estabelecimentos com nome próprio (verificáveis)`));
console.log(linha(genericos.length, 'descrições genéricas (não verificáveis, não vão ao mapa)'));
console.log(linha(nomeados.filter((r) => r.temEndereco).length, 'com pista de endereço no texto'));

/* Cobertura por porte — onde a ausência dói mais. */
console.log('\nCOBERTURA POR PORTE DA CIDADE');
const faixas: [string, number, number][] = [
  ['acima de 500 mil hab.', 500_000, Infinity],
  ['200 a 500 mil hab.', 200_000, 500_000],
  ['100 a 200 mil hab.', 100_000, 200_000],
  ['50 a 100 mil hab.', 50_000, 100_000],
  ['abaixo de 50 mil hab.', 0, 50_000],
];
for (const [rotulo, min, max] of faixas) {
  const naFaixa = cidades.filter((c) => (c.populacao ?? 0) >= min && (c.populacao ?? 0) < max);
  const sem = naFaixa.filter((c) => !getFitnessPlaces(c).some((l) => l.categoria === 'gym'));
  const cobertas = naFaixa.length - sem.length;
  console.log(
    `  ${rotulo.padEnd(24)} ${String(cobertas).padStart(4)}/${String(naFaixa.length).padEnd(4)} com academia  (${sem.length} sem)`,
  );
}

/* Redes: prioridade de verificação por alcance. */
console.log('\nREDES MAIS CITADAS (um fechamento afeta várias páginas)');
const porRede = new Map<string, number>();
for (const r of nomeados) if (r.rede) porRede.set(r.rede, (porRede.get(r.rede) ?? 0) + 1);
for (const [rede, n] of [...porRede.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(linha(n, `${rede} — citada em ${n} cidade(s)`));
}
const independentes = nomeados.filter((r) => !r.rede).length;
console.log(linha(independentes, 'estabelecimentos independentes (verificação individual)'));

/* Genéricos: o que precisa virar nome próprio. */
console.log('\nDESCRIÇÕES GENÉRICAS MAIS FREQUENTES');
const porGenerico = new Map<string, number>();
for (const r of genericos) porGenerico.set(r.nome, (porGenerico.get(r.nome) ?? 0) + 1);
for (const [nome, n] of [...porGenerico.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)) {
  console.log(linha(n, nome));
}

/* Duplicidade dentro da mesma cidade (nomes muito parecidos). */
console.log('\nPOSSÍVEIS DUPLICATAS NA MESMA CIDADE');
let dup = 0;
for (const c of cidades) {
  const nomes = getFitnessPlaces(c)
    .filter((l) => l.categoria === 'gym')
    .map((l) => l.nome);
  for (let i = 0; i < nomes.length; i++) {
    for (let j = i + 1; j < nomes.length; j++) {
      const a = nomes[i].toLowerCase();
      const b = nomes[j].toLowerCase();
      if (a !== b && (a.includes(b) || b.includes(a))) {
        console.log(`  ${c.nome}/${c.uf}: "${nomes[i]}" ~ "${nomes[j]}"`);
        dup++;
      }
    }
  }
}
if (!dup) console.log('  nenhuma');

/* Prioridade: cidades grandes sem academia nomeada. */
console.log('\nPRIORIDADE — cidades grandes sem nenhuma academia citada');
const prioridade = semAcademia.sort((a, b) => b.pop - a.pop).slice(0, 20);
for (const c of prioridade) {
  console.log(`  ${String(c.pop).padStart(9)} hab.  ${c.nome}/${c.uf}  (${c.slug})`);
}
if (detalhado) {
  console.log(`\nTODAS AS ${semAcademia.length} CIDADES SEM ACADEMIA CITADA`);
  for (const c of semAcademia.sort((a, b) => b.pop - a.pop)) {
    console.log(`  ${String(c.pop).padStart(9)} hab.  ${c.nome}/${c.uf}`);
  }
}

console.log('\n' + '='.repeat(74));
console.log('O QUE ESTE RELATÓRIO NÃO DIZ');
console.log('='.repeat(74));
console.log(
  `  Se as ${nomeados.length} academias nomeadas continuam abertas hoje. Isso exige
  conferência no mundo real — o script apenas ordena a fila de verificação.`,
);
