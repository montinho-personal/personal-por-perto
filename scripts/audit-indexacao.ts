/**
 * Lê os exports de "Indexação das páginas" do Search Console e separa o que
 * é problema real do que é rastro de uma correção que já foi feita.
 *
 * O relatório de indexação é atrasado por natureza: ele mostra o estado da
 * ÚLTIMA vez que o Google passou em cada URL. Depois de qualquer mudança no
 * padrão de URL, o relatório continua exibindo, por semanas, o mundo velho —
 * e a leitura ingênua ("398 páginas não indexadas!") leva a mexer no site
 * para consertar algo que já está consertado. O estrago aí é duplo: perde-se
 * tempo e ainda se arrisca uma mudança nova em cima de uma que o Google
 * ainda nem terminou de digerir.
 *
 * Por isso a única pergunta que este script responde é:
 *
 *     esta URL foi rastreada ANTES ou DEPOIS da última mudança de padrão?
 *
 * Antes  -> legado. Some sozinho conforme o Google re-rastreia. Não mexer.
 * Depois -> sinal atual. Só isso merece investigação.
 *
 * Como exportar:
 *   Search Console -> Indexação das páginas -> clique no motivo
 *   -> Exportar -> CSV -> use o "Tabela.csv" de dentro do .zip
 *
 * Uso: npm run audit:indexacao -- caminho/para/*.csv
 */
import { existsSync, readFileSync } from 'node:fs';
import { basename } from 'node:path';

/**
 * Data da consolidação do padrão de URL com barra final e redirect 308 no
 * host (commit 7149cab). É a linha de corte: URL rastreada até aqui viu o
 * site antigo, servido nas duas variantes.
 *
 * Ao mudar padrão de URL de novo (redirect novo, troca de domínio, seção
 * renomeada), atualizar esta data no mesmo commit — senão o script passa a
 * classificar como "atual" um legado da mudança seguinte.
 */
const CORTE = '2026-08-24';

interface Registro {
  url: string;
  path: string;
  rastreio: string;
  comBarra: boolean;
}

/** Serial do Excel (contagem de dias desde 1899-12-30) para 'YYYY-MM-DD'. */
function deSerial(n: number): string {
  const ms = Date.UTC(1899, 11, 30) + n * 86_400_000;
  return new Date(ms).toISOString().slice(0, 10);
}

/** Aceita a data como ISO ('2026-08-24') ou como serial do Excel ('46258'). */
function normalizarData(bruto: string): string {
  const s = bruto.trim().replace(/^"|"$/g, '');
  const iso = s.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return iso[0];
  const num = Number(s);
  return Number.isFinite(num) && num > 20_000 ? deSerial(Math.trunc(num)) : '';
}

function lerCsv(caminho: string): Registro[] {
  const bruto = readFileSync(caminho, 'utf8').replace(/^﻿/, '');
  const regs: Registro[] = [];

  for (const linha of bruto.split(/\r?\n/).slice(1)) {
    if (!linha.trim()) continue;

    // Divide respeitando aspas — a URL pode conter vírgula.
    const campos: string[] = [];
    let atual = '';
    let dentro = false;
    for (const ch of linha) {
      if (ch === '"') dentro = !dentro;
      else if (ch === ',' && !dentro) {
        campos.push(atual);
        atual = '';
      } else atual += ch;
    }
    campos.push(atual);
    if (campos.length < 2) continue;

    const url = campos[0].trim();
    if (!/^https?:\/\//.test(url)) continue;
    const path = url.replace(/^https?:\/\/[^/]+/, '') || '/';

    regs.push({
      url,
      path,
      rastreio: normalizarData(campos[1]),
      comBarra: path.endsWith('/'),
    });
  }
  return regs;
}

/** Primeiro segmento do caminho, para agrupar por seção do portal. */
function secao(path: string): string {
  const seg = path.replace(/^\//, '').split('/');
  return seg.length > 1 && seg[1] !== '' ? `/${seg[0]}/` : `/${seg[0]}`;
}

/* ------------------------------------------------------------------ */

const arquivos = process.argv.slice(2).filter((a) => existsSync(a));
if (!arquivos.length) {
  console.error('Uso: npm run audit:indexacao -- caminho/para/Tabela.csv [outro.csv ...]');
  console.error('(Search Console -> Indexação das páginas -> motivo -> Exportar -> CSV)');
  process.exit(1);
}

console.log('='.repeat(88));
console.log(`AUDITORIA DE INDEXAÇÃO — corte em ${CORTE} (consolidação da barra final)`);
console.log('='.repeat(88));

let totLegado = 0;
let totAtual = 0;

for (const arq of arquivos) {
  const regs = lerCsv(arq);
  if (!regs.length) {
    console.log(`\n${basename(arq)}: nenhuma URL reconhecida — é o "Tabela.csv" do zip?`);
    continue;
  }

  const legado = regs.filter((r) => r.rastreio && r.rastreio <= CORTE);
  const agora = regs.filter((r) => !r.rastreio || r.rastreio > CORTE);
  totLegado += legado.length;
  totAtual += agora.length;

  const semBarra = regs.filter((r) => !r.comBarra).length;

  console.log(`\n${'-'.repeat(88)}`);
  console.log(`${basename(arq)} — ${regs.length} URLs (${semBarra} sem barra final)`);
  console.log('-'.repeat(88));
  console.log(`  legado (rastreado até ${CORTE}): ${String(legado.length).padStart(4)}  — sai sozinho no re-rastreio`);
  console.log(`  sinal atual (rastreado depois):   ${String(agora.length).padStart(4)}  — só isto merece olhar`);

  if (legado.length) {
    const por = new Map<string, number>();
    for (const r of legado) por.set(secao(r.path), (por.get(secao(r.path)) ?? 0) + 1);
    const top = [...por.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
    console.log(`  legado por seção: ${top.map(([s, n]) => `${s} ${n}`).join(' · ')}`);
  }

  if (agora.length) {
    console.log('\n  URLs com sinal atual:');
    for (const r of agora.sort((a, b) => a.rastreio.localeCompare(b.rastreio))) {
      console.log(`    ${r.rastreio || '   sem data'}  ${r.path}`);
    }
  }
}

console.log(`\n${'='.repeat(88)}`);
console.log(`TOTAL: ${totLegado} legado · ${totAtual} sinal atual`);
console.log('='.repeat(88));
console.log('Legado não se conserta com mudança no site — conserta-se esperando o');
console.log('re-rastreio. Mexer no padrão de URL de novo agora só reinicia a contagem.');
