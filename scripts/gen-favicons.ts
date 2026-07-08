/**
 * Gera o conjunto de favicons a partir de public/favicon.svg:
 *   - favicon.ico          (16 + 32 + 48, entradas PNG num contêiner ICO)
 *   - apple-touch-icon.png (180×180)
 *   - android-chrome-192x192.png / android-chrome-512x512.png
 * O ICO é montado à mão (header + blobs PNG) para não adicionar dependência —
 * entradas PNG em ICO são suportadas por todos os navegadores e crawlers atuais.
 * Rodar com: npx tsx scripts/gen-favicons.ts
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const SRC = 'public/favicon.svg';

async function png(size: number): Promise<Buffer> {
  const svg = await readFile(SRC);
  // density alta para o rasterizador não serrilhar o traço nos tamanhos pequenos
  return sharp(svg, { density: Math.max(72, (72 * size) / 48) })
    .resize(size, size)
    .png()
    .toBuffer();
}

/** Monta um .ico com entradas PNG (formato ICONDIR + ICONDIRENTRY + blobs). */
function buildIco(entries: { size: number; data: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: ícone
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  entries.forEach((e, i) => {
    const o = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o); // largura (0 = 256)
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1); // altura
    dir.writeUInt8(0, o + 2); // paleta
    dir.writeUInt8(0, o + 3); // reservado
    dir.writeUInt16LE(1, o + 4); // planos
    dir.writeUInt16LE(32, o + 6); // bits por pixel
    dir.writeUInt32LE(e.data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += e.data.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.data)]);
}

const [p16, p32, p48, p180, p192, p512] = await Promise.all(
  [16, 32, 48, 180, 192, 512].map(png),
);

await writeFile(
  'public/favicon.ico',
  buildIco([
    { size: 16, data: p16 },
    { size: 32, data: p32 },
    { size: 48, data: p48 },
  ]),
);
await writeFile('public/apple-touch-icon.png', p180);
await writeFile('public/android-chrome-192x192.png', p192);
await writeFile('public/android-chrome-512x512.png', p512);

console.log('Favicons gerados: favicon.ico (16/32/48), apple-touch-icon (180), android-chrome 192/512.');
