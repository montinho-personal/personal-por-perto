import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mage-rj',
  nome: 'Magé',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'mageense',
  tipo: 'cidade',

  populacao: 228127,
  populacaoAno: 2022,
  idhm: 0.653,
  idhmClasse: 'médio',
  altitudeM: 5,

  resumoEconomico:
    'Magé fica na Região Metropolitana do Rio de Janeiro, no fundo da Baía de Guanabara, e organiza-se em distritos como a sede, Santo Aleixo, Rio do Ouro, Suruí, Guia de Pacobaíba (Praia de Mauá) e Vila Inhomirim (com Piabetá e Pau Grande). A economia se apoia no comércio e nos serviços de bairro, na pesca artesanal e na cata de caranguejo ligadas aos manguezais, e ganha força com o turismo de natureza, favorecido pela proximidade do Parque Nacional da Serra dos Órgãos e da APA de Guapimirim.',

  mercado:
    'Cidade grande e popular da Baixada/Região Metropolitana, Magé tem mercado fitness pulverizado em academias de bairro espalhadas pelos distritos, atendendo a uma população trabalhadora. O atendimento domiciliar e os treinos ao ar livre, em praças e na orla dos manguezais, são alternativas comuns onde a oferta de estúdios é menor.',

  bairrosNobres: ['Centro (Magé)', 'Vila Inhomirim', 'Piabetá', 'Santo Aleixo'],
  bairrosPopulares: ['Suruí', 'Piedade', 'Guia de Pacobaíba', 'Rio do Ouro'],

  parques: [
    {
      nome: 'APA de Guapimirim e manguezais da Baía de Guanabara',
      descricao:
        'Área de Proteção Ambiental federal com extensos manguezais no fundo da baía, que rendem caminhadas, observação de aves e passeios de barco guiados por pescadores das comunidades, como em Suruí e na Praia de Piedade.',
    },
    {
      nome: 'Entorno do Parque Nacional da Serra dos Órgãos',
      descricao:
        'O parque nacional, próximo a Magé, oferece trilhas e cachoeiras em Mata Atlântica de serra, opção de treino na natureza e trail para quem busca relevo e ar mais ameno.',
    },
    {
      nome: 'Praias e orla do fundo da Baía de Guanabara',
      descricao:
        'Trechos como a Praia de Mauá (Guia de Pacobaíba) e a Piedade formam orlas calmas para caminhada e corrida leve, integradas à paisagem de manguezal.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é limitada e não há extensão consolidada divulgada em fonte oficial; o uso da bicicleta é comum no deslocamento entre bairros e distritos.',

  clima:
    'O clima é tropical quente e úmido, típico do fundo da Baía de Guanabara, com verões chuvosos; as áreas mais altas, próximas à serra, são um pouco mais amenas.',
  climaTreino:
    'O treino ao ar livre rende mais nas primeiras horas da manhã e no fim da tarde, com hidratação reforçada nos dias de calor; a orla dos manguezais e o entorno serrano oferecem ambientes mais agradáveis.',

  mobilidade:
    'Magé é cortada pela BR-116 (Rio-Magé/Rodovia Washington Luís no eixo da Baixada) e servida pelo trem da SuperVia, com ramais que atendem Vila Inhomirim e Guapimirim a partir de Saracuruna, além de linhas de ônibus municipais e intermunicipais.',

  corridas: [
    {
      nome: 'Corridas de rua municipais',
      descricao:
        'A cidade recebe provas de rua e caminhadas promovidas pela prefeitura e por organizadores regionais, geralmente com largada no Centro e percursos pelos bairros.',
    },
    {
      nome: 'Provas e travessias na natureza',
      descricao:
        'A proximidade da serra e dos manguezais favorece eventos de trail e caminhadas ecológicas guiadas, ligadas ao turismo de base comunitária.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Magé combina futebol e esporte de bairro com atividades ao ar livre ligadas à natureza, como caminhadas nos manguezais e trilhas no entorno da Serra dos Órgãos. O futebol tem raízes históricas, com o tradicional campo de Pau Grande.',
  academias:
    'A oferta é formada principalmente por academias de bairro distribuídas pelos distritos, complementadas por personal trainers que atendem em domicílio e em espaços ao ar livre, como praças e a orla da baía.',

  destaquesFitness: [
    'Manguezais da APA de Guapimirim: caminhada, observação de aves e passeios guiados.',
    'Entorno da Serra dos Órgãos: trilhas e cachoeiras para treino na natureza.',
    'Orlas calmas do fundo da baía (Praia de Mauá, Piedade) para caminhada e corrida leve.',
    'Academias de bairro nos distritos e forte presença de atendimento domiciliar.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'No fundo da Baía de Guanabara e perto da Serra dos Órgãos, Magé reúne manguezais, distritos populares e natureza farta para quem quer treinar. Com mercado pulverizado em academias de bairro e atendimento domiciliar, um personal trainer ajuda a montar uma rotina segura e a aproveitar a orla e as trilhas com método.',

  vizinhas: ['duque-de-caxias-rj', 'sao-goncalo-rj', 'petropolis-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Magé', url: 'https://cidades.ibge.gov.br/brasil/rj/mage/panorama' },
    { nome: 'Prefeitura Municipal de Magé', url: 'https://mage.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM Magé', url: 'https://www.atlasbrasil.org.br/perfil/municipio/330250' },
  ],
  atualizadoEm: '2026-06-29',
};
