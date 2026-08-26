/**
 * Configuração central da cobertura presencial do Montinho Personal.
 *
 * Fonte única de verdade da lógica geográfica das ferramentas do portal.
 * NÃO espalhar cidades pelo código: qualquer ferramenta que precise decidir
 * entre "presencial é viável" e "online é o caminho" deve consultar aqui.
 *
 * A base de atendimento presencial é Alphaville (Barueri/SP). O raio real
 * inclui os municípios vizinhos alcançáveis no dia a dia. Cidades fora dessa
 * lista NÃO recebem oferta presencial — o portal não promete o que não existe.
 */

/** Slugs de cidades/regiões com atendimento presencial viável. */
export const cidadesPresencial = [
  'alphaville-sp',
  'tambore-sp',
  'aldeia-da-serra-sp',
  'barueri-sp',
  'santana-de-parnaiba-sp',
  'jandira-sp',
  'itapevi-sp',
  'carapicuiba-sp',
  'osasco-sp',
  'cotia-sp',
] as const;

/**
 * Cidades onde o presencial é possível, mas depende de combinar região e
 * horário (distância maior, trânsito). O resultado deve dizer isso com todas
 * as letras em vez de prometer disponibilidade total.
 */
export const cidadesPresencialCondicional = ['sao-paulo-sp', 'embu-das-artes-sp'] as const;

/** Rótulo curto da base, usado nos textos das ferramentas. */
export const basePresencial = 'Alphaville, em Barueri (SP)';

/** Região de referência citada no resultado quando há cobertura. */
export const regiaoPresencial = 'Alphaville, Barueri, Santana de Parnaíba e cidades vizinhas';

export type NivelPresencial = 'atende' | 'condicional' | 'fora';

/** Classifica uma cidade (por slug) quanto à viabilidade de presencial. */
export function coberturaPresencial(slug?: string): NivelPresencial {
  if (!slug) return 'fora';
  if ((cidadesPresencial as readonly string[]).includes(slug)) return 'atende';
  if ((cidadesPresencialCondicional as readonly string[]).includes(slug)) return 'condicional';
  return 'fora';
}
