/**
 * Gera a capa única de cada cidade (imagem de artigo + Open Graph), a partir
 * dos dados reais do portal. Saída em WebP (leve, para a página e o Google
 * Imagens) e PNG (para compartilhamento em redes sociais).
 *
 * Uso: npm run capas   (ou: npx tsx scripts/gen-capas.ts)
 * As imagens são versionadas em public/capas/ — não rodam no build da Vercel.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { cidades } from '../src/data/cidades';
import type { Cidade } from '../src/lib/types';

const OUT = 'public/capas';
const W = 1200;
const H = 630;

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Tamanho de fonte do título conforme o comprimento do nome. */
function tituloSize(nome: string): number {
  const n = nome.length;
  if (n <= 10) return 96;
  if (n <= 14) return 84;
  if (n <= 20) return 66;
  return 54;
}

/** Até 3 estatísticas reais para a linha de dados da capa. */
function statsLine(c: Cidade): string {
  const partes: string[] = [];
  if (c.populacao) partes.push(`${c.populacao.toLocaleString('pt-BR')} habitantes`);
  if (c.idhm) partes.push(`IDHM ${c.idhm.toLocaleString('pt-BR')} (${c.idhmClasse ?? ''})`.trim());
  if (c.tipo === 'regiao' && c.contexto && partes.length < 2) partes.push(c.contexto);
  partes.push(`${c.parques.length} locais de treino`);
  return partes.slice(0, 3).join('   •   ');
}

function svgFor(c: Cidade): string {
  const eyebrow = (c.tipo === 'regiao' ? 'GUIA DA REGIÃO' : 'GUIA POR CIDADE') + '  ·  ' + c.estado.toUpperCase();
  const ts = tituloSize(c.nome);
  const stats = statsLine(c);
  const gent = c.gentilico
    ? `Treino com personal trainer para o público ${c.gentilico}`
    : 'Treino com personal trainer com acompanhamento profissional';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#191c22"/>
      <stop offset="1" stop-color="#0f1115"/>
    </linearGradient>
    <clipPath id="frame"><rect width="${W}" height="${H}"/></clipPath>
  </defs>
  <g clip-path="url(#frame)">
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <!-- elementos decorativos abstratos (sem foto) -->
    <circle cx="1120" cy="560" r="280" fill="#f0641e" opacity="0.10"/>
    <circle cx="1180" cy="120" r="150" fill="#f0641e" opacity="0.07"/>
    <rect x="0" y="0" width="14" height="${H}" fill="#f0641e"/>

    <!-- eyebrow -->
    <text x="80" y="118" font-family="DejaVu Sans, sans-serif" font-size="26" font-weight="bold" letter-spacing="3" fill="#f0641e">${esc(eyebrow)}</text>
    <rect x="80" y="140" width="64" height="5" rx="2.5" fill="#f0641e"/>

    <!-- título -->
    <text x="80" y="250" font-family="DejaVu Sans, sans-serif" font-size="46" fill="#aeb4bf">Personal Trainer em</text>
    <text x="78" y="${250 + ts + 6}" font-family="DejaVu Sans, sans-serif" font-size="${ts}" font-weight="bold" fill="#ffffff">${esc(c.nome)}<tspan font-size="${Math.round(ts * 0.5)}" fill="#f0641e" dx="14">(${esc(c.uf)})</tspan></text>

    <!-- subtítulo -->
    <text x="80" y="${250 + ts + 60}" font-family="DejaVu Sans, sans-serif" font-size="28" fill="#c7ccd4">${esc(gent)}</text>

    <!-- linha de dados -->
    <text x="80" y="540" font-family="DejaVu Sans, sans-serif" font-size="27" font-weight="bold" fill="#e8eaee">${esc(stats)}</text>

    <!-- rodapé -->
    <g transform="translate(80, 588)">
      <rect x="0" y="-18" width="26" height="26" rx="6" fill="none" stroke="#f0641e" stroke-width="3"/>
      <line x1="6" y1="-5" x2="20" y2="-5" stroke="#f0641e" stroke-width="3"/>
      <text x="40" y="2" font-family="DejaVu Sans, sans-serif" font-size="26" font-weight="bold" fill="#ffffff">personalporperto.com.br</text>
    </g>
    <text x="${W - 80}" y="590" text-anchor="end" font-family="DejaVu Sans, sans-serif" font-size="22" fill="#8b919c">Guia editorial independente</text>
  </g>
</svg>`;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  let i = 0;
  for (const c of cidades) {
    const svg = Buffer.from(svgFor(c));
    const base = `personal-trainer-${c.slug}`;
    await sharp(svg).png().toFile(`${OUT}/${base}.png`);
    await sharp(svg).webp({ quality: 82 }).toFile(`${OUT}/${base}.webp`);
    i++;
  }
  console.log(`Capas geradas: ${i} cidades (${i * 2} arquivos) em ${OUT}/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
