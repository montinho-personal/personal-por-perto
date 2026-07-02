import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'silveiras-sp',
  nome: 'Silveiras',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'silveirense',
  tipo: 'cidade',

  populacao: 6186,
  populacaoAno: 2022,
  idhm: 0.678,
  idhmClasse: 'médio',
  altitudeM: 620,

  resumoEconomico:
    'Silveiras é uma pequena cidade histórica do Vale do Paraíba paulista, na microrregião de Bananal, a cerca de 260 km da capital. Conhecida como a "Capital do Tropeirismo", nasceu de um rancho de pouso de tropeiros ligados ao ciclo do café que ligava Minas Gerais ao porto de Paraty, no Rio de Janeiro, tornando-se vila em 1842 e cidade em 1864. A economia atual gira em torno da administração pública, do comércio e serviços locais, da pecuária leiteira e de um artesanato tradicional de entalhe e pintura em madeira (peças que reproduzem aves da região), que já é exportado. O turismo histórico e cultural, ligado ao casario colonial preservado e à Fundação Nacional do Tropeirismo, complementa a renda do município, que também tem parte do território em área de proteção ambiental (APA) e nos contrafortes da Serra da Bocaina.',

  mercado:
    'Por se tratar de uma cidade pequena e com forte perfil rural e turístico, Silveiras não tem um mercado fitness estruturado como o de centros maiores da região, como Guaratinguetá ou Lorena. A procura por personal trainer tende a ser pontual, muitas vezes vinda de moradores que buscam atendimento individualizado justamente pela escassez de academias maiores, de visitantes de pousadas rurais interessados em atividades ao ar livre, ou de quem já treina fora da cidade e busca acompanhamento à distância.',

  bairrosNobres: ['Centro Histórico'],
  bairrosPopulares: ['Vila Marina', 'Bairro da Esperança', 'Bom Jesus', 'Macacos'],

  parques: [
    {
      nome: 'Centro Histórico de Silveiras',
      descricao:
        'Conjunto de casarões e igrejas coloniais preservados em torno da praça central, tombado como patrimônio histórico; as ruas de paralelepípedo e o entorno arborizado funcionam como espaço natural para caminhada.',
    },
    {
      nome: 'Serra da Bocaina',
      descricao:
        'Parte do território municipal avança sobre os contrafortes da Serra da Bocaina, com trilhas e mirantes usados por quem busca caminhada e atividade física em meio à natureza, em altitudes bem superiores à da sede.',
    },
    {
      nome: 'Área de Proteção Ambiental (APA) de Silveiras',
      descricao:
        'Unidade de conservação estadual que abrange parte do município, preservando remanescentes de Mata Atlântica e oferecendo cenário para caminhadas e passeios rurais ligados ao turismo local.',
    },
  ],
  ciclovias:
    'Silveiras não possui infraestrutura cicloviária urbana estruturada; o deslocamento a pé e de bicicleta acontece principalmente nas ruas do pequeno centro histórico e em estradas rurais de terra que cortam o município.',

  clima:
    'O clima é subtropical de altitude, com verões mais chuvosos e invernos secos e mais frios, sobretudo nas partes elevadas do município, próximas à Serra da Bocaina. A precipitação média anual fica em torno de 1.577 mm, concentrada no verão, o que contrasta com o inverno seco típico do Vale do Paraíba.',
  climaTreino:
    'As manhãs e noites de inverno costumam ser bem frias, favorecendo treinos ao ar livre em horários mais quentes do dia, enquanto o verão chuvoso pede atenção às condições das ruas e estradas de terra; a amplitude térmica entre o centro histórico e as áreas mais altas da Serra da Bocaina também deve ser considerada por quem treina fora.',

  mobilidade:
    'O acesso a Silveiras se dá principalmente pela Rodovia SP-171 (Rodovia dos Tropeiros), que corta a região histórica do Vale do Paraíba e liga o município a cidades vizinhas como Areias, Lavrinhas, Queluz e Cruzeiro, além de dar acesso a Lorena, na rodovia Presidente Dutra. Por ser uma cidade pequena, o deslocamento interno é feito majoritariamente a pé, de bicicleta ou por veículo próprio, sem sistema de transporte coletivo urbano relevante.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local é modesta e informal, mais associada a caminhadas no centro histórico e a passeios e trilhas rurais ligados ao turismo ecológico e ao tropeirismo do que a provas organizadas de corrida de rua, que não têm registro consolidado no município.',
  academias:
    'A oferta de academias é bastante limitada, compatível com o porte pequeno da cidade, concentrando-se em poucos espaços de musculação e ginástica na área central; boa parte da prática de exercícios acontece de forma independente, ao ar livre ou em casa, muitas vezes com apoio de personal trainer.',

  destaquesFitness: [
    'Capital do Tropeirismo: centro histórico colonial preservado, com ruas e casarões que servem de cenário para caminhada.',
    'Território que avança sobre a Serra da Bocaina, com trilhas e mirantes em altitude elevada.',
    'Cidade pequena com mercado de academias escasso, o que reforça a procura por atendimento individualizado.',
    'Clima subtropical de altitude, com invernos frios e secos e verões mais chuvosos, exigindo adaptação do horário de treino.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 500,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cercada por serra e história, Silveiras oferece um cenário colonial preservado e uma rotina de treino que ainda depende muito da iniciativa individual, dada a oferta enxuta de academias. Um personal trainer é um caminho natural para quem busca orientação constante na cidade, seja aproveitando o centro histórico para caminhadas, seja treinando em casa ou à distância.',

  vizinhas: ['lorena-sp', 'cunha-sp', 'guaratingueta-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Silveiras', url: 'https://cidades.ibge.gov.br/brasil/sp/silveiras/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Silveiras', url: 'https://silveiras.sp.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
