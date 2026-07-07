/**
 * Curadoria de cidades em destaque, centralizada para não duplicar listas
 * entre componentes. Duas listas com propósitos distintos:
 * - `cidadesDestaqueHome`: grandes capitais reconhecíveis, para o hero/grid
 *   da homepage (peso em reconhecimento de marca).
 * - `cidadesPopularesFooter`: amostra com cobertura das 5 macrorregiões,
 *   para o rodapé (peso em sinalizar alcance nacional).
 * Edite apenas aqui — nenhum outro arquivo deve hardcodar essas listas.
 */

export const cidadesDestaqueHome: string[] = [
  'sao-paulo-sp',
  'rio-de-janeiro-rj',
  'belo-horizonte-mg',
  'brasilia-df',
  'curitiba-pr',
  'goiania-go',
  'porto-alegre-rs',
  'salvador-ba',
  'florianopolis-sc',
];

export interface CidadeDestaque {
  slug: string;
  nome: string;
  /** Preposição para a âncora "Personal Trainer {prep} {nome}". */
  prep: 'em' | 'no' | 'na';
}

export const cidadesPopularesFooter: CidadeDestaque[] = [
  { slug: 'sao-paulo-sp', nome: 'São Paulo', prep: 'em' },
  { slug: 'rio-de-janeiro-rj', nome: 'Rio de Janeiro', prep: 'no' },
  { slug: 'recife-pe', nome: 'Recife', prep: 'em' },
  { slug: 'salvador-ba', nome: 'Salvador', prep: 'em' },
  { slug: 'manaus-am', nome: 'Manaus', prep: 'em' },
  { slug: 'brasilia-df', nome: 'Brasília', prep: 'em' },
  { slug: 'porto-alegre-rs', nome: 'Porto Alegre', prep: 'em' },
  { slug: 'belem-pa', nome: 'Belém', prep: 'em' },
];
