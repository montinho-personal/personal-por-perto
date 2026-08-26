/**
 * Registro de coordenadas verificadas dos locais do Mapa Fitness.
 *
 * Separado dos dados editoriais de propósito: o nome e a descrição de um
 * parque são apuração da redação; a coordenada é um fato geográfico que
 * precisa de fonte própria, validação e data de verificação. Misturar os
 * dois tornaria impossível saber o que foi conferido e quando.
 *
 * COMO POPULAR
 * ------------
 * `npm run fitness:geo -- <slug-da-cidade>` consulta o OpenStreetMap
 * (licença ODbL, uso permitido com atribuição), valida cada coordenada
 * contra a caixa delimitadora do município e escreve aqui apenas o que
 * passou. Rode de uma máquina com rede aberta — o ambiente de
 * desenvolvimento em nuvem bloqueia os endpoints do OSM.
 *
 * REGRA INEGOCIÁVEL
 * -----------------
 * Coordenada só entra aqui verificada. Um pin errado destrói a confiança
 * de quem se deslocou até o lugar errado — e nenhum ganho de SEO paga
 * isso. Enquanto uma cidade não tiver coordenadas, a seção funciona
 * normalmente como lista filtrável; o mapa gráfico simplesmente não é
 * desenhado.
 */

export interface CoordenadaLocal {
  lat: number;
  lng: number;
  /** Data ISO da verificação. */
  verificadoEm: string;
  /** Procedência (ex.: 'osm:way/12345'). */
  fonte: string;
}

/** cidadeSlug -> { localSlug -> coordenada } */
export const geoPorCidade: Record<string, Record<string, CoordenadaLocal>> = {
  // Populado por scripts/ingest-fitness-geo.ts.
};

/**
 * Caixas delimitadoras aproximadas por município, usadas para reprovar
 * coordenada que caia fora da cidade (o erro geográfico mais comum ao
 * geocodificar por nome: "Parque Municipal" existe em dezenas de cidades).
 * Formato: [latMin, lngMin, latMax, lngMax].
 */
export const bboxPorCidade: Record<string, [number, number, number, number]> = {
  // Populado junto com as coordenadas.
};

/** A coordenada cai dentro do município? */
export function coordenadaPlausivel(cidadeSlug: string, lat: number, lng: number): boolean {
  const bbox = bboxPorCidade[cidadeSlug];
  if (!bbox) return false;
  const [latMin, lngMin, latMax, lngMax] = bbox;
  return lat >= latMin && lat <= latMax && lng >= lngMin && lng <= lngMax;
}
