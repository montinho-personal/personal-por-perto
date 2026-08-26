/**
 * Ingestão de coordenadas do Mapa Fitness a partir do OpenStreetMap.
 *
 * Por que existe: o portal tem 4.845 locais verificados editorialmente, mas
 * sem coordenada. Este script busca a coordenada de cada um no OSM, valida
 * e escreve o resultado em src/data/fitnessGeo.ts. Só depois disso a cidade
 * ganha mapa gráfico — a lista já funciona desde sempre.
 *
 * LICENÇA
 * -------
 * Dados do OpenStreetMap são ODbL: uso comercial permitido, exigindo
 * atribuição (já emitida no rodapé do mapa) e a mesma licença para bases
 * derivadas. Nada aqui copia base do Google Maps nem faz scraping proibido.
 *
 * ONDE RODAR
 * ----------
 * De uma máquina com rede aberta. O ambiente de desenvolvimento em nuvem
 * bloqueia nominatim.openstreetmap.org e overpass-api.de (403 no gateway),
 * por isso a ingestão não roda por lá.
 *
 * USO
 *   npm run fitness:geo -- barueri-sp
 *   npm run fitness:geo -- barueri-sp alphaville-sp campinas-sp
 *   npm run fitness:geo -- --piloto     (as 10 cidades da fase 1)
 *
 * REGRAS DE VALIDAÇÃO (nenhuma coordenada entra sem passar)
 *   1. o município precisa ter caixa delimitadora obtida do OSM;
 *   2. a coordenada precisa cair dentro dessa caixa;
 *   3. o nome retornado precisa ter semelhança mínima com o nome editorial;
 *   4. resultado ambíguo (vários candidatos distantes entre si) é descartado.
 *
 * O que não passa fica de fora e é listado no relatório para conferência
 * manual. Melhor um mapa com 8 pinos certos do que 20 com 3 errados.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { cidades } from '../src/data/cidades';
import { getFitnessPlaces } from '../src/lib/fitnessPlaces';

const AGENTE = 'PersonalPorPerto/1.0 (contato@personalporperto.com.br)';
const NOMINATIM = 'https://nominatim.openstreetmap.org/search';
const ARQUIVO = 'src/data/fitnessGeo.ts';

/** Fase 1 do rollout: base presencial e as maiores cidades do portal. */
const PILOTO = [
  'barueri-sp',
  'alphaville-sp',
  'santana-de-parnaiba-sp',
  'sao-paulo-sp',
  'campinas-sp',
  'curitiba-pr',
  'recife-pe',
  'belo-horizonte-mg',
  'porto-alegre-rs',
  'fortaleza-ce',
];

const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));

const normalizar = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Semelhança por palavras significativas — evita casar "Parque X" com "Parque Y". */
function semelhanca(a: string, b: string): number {
  const ignorar = new Set(['parque', 'praca', 'municipal', 'da', 'de', 'do', 'dos', 'das', 'e', 'o', 'a']);
  const pa = new Set(normalizar(a).split(' ').filter((p) => p.length > 2 && !ignorar.has(p)));
  const pb = new Set(normalizar(b).split(' ').filter((p) => p.length > 2 && !ignorar.has(p)));
  if (!pa.size) return 0;
  let comuns = 0;
  for (const p of pa) if (pb.has(p)) comuns++;
  return comuns / pa.size;
}

interface RespostaNominatim {
  lat: string;
  lon: string;
  display_name: string;
  name?: string;
  osm_type?: string;
  osm_id?: number;
  boundingbox?: [string, string, string, string];
}

async function consultar(q: string, extra: Record<string, string> = {}): Promise<RespostaNominatim[]> {
  const params = new URLSearchParams({ q, format: 'json', limit: '5', countrycodes: 'br', ...extra });
  const r = await fetch(`${NOMINATIM}?${params}`, { headers: { 'User-Agent': AGENTE } });
  if (!r.ok) throw new Error(`Nominatim respondeu ${r.status}`);
  return (await r.json()) as RespostaNominatim[];
}

/** Caixa delimitadora do município — a trava contra erro geográfico. */
async function bboxDoMunicipio(nome: string, uf: string): Promise<[number, number, number, number] | null> {
  const r = await consultar(`${nome}, ${uf}, Brasil`);
  const municipio = r.find((x) => x.boundingbox);
  if (!municipio?.boundingbox) return null;
  const [latMin, latMax, lngMin, lngMax] = municipio.boundingbox.map(Number);
  return [latMin, lngMin, latMax, lngMax];
}

interface Resultado {
  slug: string;
  nome: string;
  lat: number;
  lng: number;
  fonte: string;
}

async function processarCidade(slug: string, hoje: string) {
  const cidade = cidades.find((c) => c.slug === slug);
  if (!cidade) {
    console.log(`  ✗ cidade desconhecida: ${slug}`);
    return null;
  }

  const bbox = await bboxDoMunicipio(cidade.nome, cidade.uf);
  await espera(1100); // uso educado do Nominatim: no máximo 1 req/s
  if (!bbox) {
    console.log(`  ✗ ${cidade.nome}: não obtive a caixa delimitadora do município`);
    return null;
  }

  const locais = getFitnessPlaces(cidade);
  const aceitos: Resultado[] = [];
  const recusados: string[] = [];

  for (const l of locais) {
    // Academias são estabelecimentos comerciais: mudam de endereço e fecham.
    // Só entram no mapa quando houver fonte própria verificada.
    if (l.categoria === 'gym') {
      recusados.push(`${l.nome} (academia: exige verificação própria)`);
      continue;
    }

    try {
      const candidatos = await consultar(`${l.nome}, ${cidade.nome}, ${cidade.uf}`);
      await espera(1100);

      const dentro = candidatos.filter((c) => {
        const lat = Number(c.lat);
        const lng = Number(c.lon);
        return lat >= bbox[0] && lat <= bbox[2] && lng >= bbox[1] && lng <= bbox[3];
      });

      if (!dentro.length) {
        recusados.push(`${l.nome} (nenhum candidato dentro do município)`);
        continue;
      }

      const melhor = dentro
        .map((c) => ({ c, s: semelhanca(l.nome, c.name || c.display_name) }))
        .sort((a, b) => b.s - a.s)[0];

      if (melhor.s < 0.5) {
        recusados.push(`${l.nome} (nome não confere: "${melhor.c.name ?? melhor.c.display_name}")`);
        continue;
      }

      aceitos.push({
        slug: l.slug,
        nome: l.nome,
        lat: Number(melhor.c.lat),
        lng: Number(melhor.c.lon),
        fonte: `osm:${melhor.c.osm_type ?? 'node'}/${melhor.c.osm_id ?? '?'}`,
      });
    } catch (e) {
      recusados.push(`${l.nome} (erro: ${(e as Error).message})`);
    }
  }

  console.log(`  ${cidade.nome}/${cidade.uf}: ${aceitos.length} aceitos, ${recusados.length} recusados`);
  for (const r of recusados) console.log(`      · ${r}`);

  return { slug, bbox, aceitos, hoje };
}

/* --------------------------------------------------------------------- */

const args = process.argv.slice(2);
const alvos = args.includes('--piloto') ? PILOTO : args.filter((a) => !a.startsWith('--'));

if (!alvos.length) {
  console.log('Uso: npm run fitness:geo -- <slug> [slug…]  |  npm run fitness:geo -- --piloto');
  process.exit(1);
}

const hoje = new Date().toISOString().slice(0, 10);
console.log(`Ingestão de coordenadas (OpenStreetMap · ODbL) — ${alvos.length} cidade(s)\n`);

const resultados = [];
for (const slug of alvos) {
  const r = await processarCidade(slug, hoje);
  if (r) resultados.push(r);
}

if (!resultados.length) {
  console.log('\nNada a gravar.');
  process.exit(1);
}

// Reescreve os dois mapas do arquivo preservando o que já existia.
const fonte = readFileSync(ARQUIVO, 'utf8');

const blocosGeo = resultados
  .filter((r) => r.aceitos.length >= 3) // abaixo disso o mapa não é desenhado mesmo
  .map((r) => {
    const linhas = r.aceitos
      .map(
        (a) =>
          `    '${a.slug}': { lat: ${a.lat}, lng: ${a.lng}, verificadoEm: '${r.hoje}', fonte: '${a.fonte}' },`,
      )
      .join('\n');
    return `  '${r.slug}': {\n${linhas}\n  },`;
  })
  .join('\n');

const blocosBbox = resultados
  .filter((r) => r.aceitos.length >= 3)
  .map((r) => `  '${r.slug}': [${r.bbox.join(', ')}],`)
  .join('\n');

const atualizado = fonte
  .replace(
    /export const geoPorCidade: Record<string, Record<string, CoordenadaLocal>> = \{[\s\S]*?\n\};/,
    `export const geoPorCidade: Record<string, Record<string, CoordenadaLocal>> = {\n${blocosGeo}\n};`,
  )
  .replace(
    /export const bboxPorCidade: Record<string, \[number, number, number, number\]> = \{[\s\S]*?\n\};/,
    `export const bboxPorCidade: Record<string, [number, number, number, number]> = {\n${blocosBbox}\n};`,
  );

writeFileSync(ARQUIVO, atualizado);
console.log(`\n✓ ${ARQUIVO} atualizado. Rode: npm run test:fitness && npm run build`);
