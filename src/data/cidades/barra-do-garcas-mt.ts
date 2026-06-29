import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barra-do-garcas-mt',
  nome: 'Barra do Garças',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'barra-garcense',
  tipo: 'cidade',

  populacao: 69210,
  populacaoAno: 2022,
  idhm: 0.748,
  idhmClasse: 'alto',
  altitudeM: 318,

  resumoEconomico:
    'Maior cidade do leste mato-grossense, Barra do Garças fica na divisa com Goiás, no encontro dos rios Araguaia e Garças, em conurbação com Aragarças (GO) e Pontal do Araguaia (MT). É polo regional de comércio, serviços, saúde e educação do Vale do Araguaia, com forte vocação turística ligada às praias de rio do Araguaia, às águas termais e à Serra do Roncador. O turismo de natureza e a pesca aquecem a economia, especialmente na temporada de praia.',

  mercado:
    'O mercado fitness atende uma cidade média com perfil de polo regional, com academias concentradas no Centro e nas avenidas principais e procura por treino ao ar livre puxada pela orla do Araguaia e pelas trilhas da serra. O turismo de natureza cria demanda sazonal por preparo físico, pesca esportiva e atividades aquáticas.',

  bairrosNobres: ['Centro', 'Nova Barra', 'Jardim Amazônia', 'Setor Aeroporto'],
  bairrosPopulares: ['Vila Santo Antônio', 'Vila Maria', 'São José', 'Setor Industrial'],

  parques: [
    {
      nome: 'Encontro dos Rios Araguaia e Garças',
      descricao:
        'Marco geográfico da cidade, onde o rio Garças deságua no Araguaia; a orla e as praias de rio que surgem na seca são pontos de caminhada, corrida e lazer ao ar livre.',
    },
    {
      nome: 'Parque das Águas Quentes',
      descricao:
        'Complexo de águas termais com piscinas hidrotermais e o mirante do Cristo Redentor, voltado ao lazer e ao bem-estar, com áreas para caminhada.',
    },
    {
      nome: 'Serra do Roncador',
      descricao:
        'Extensão de serra que cerca a cidade, com trilhas, cachoeiras e mirantes que atraem praticantes de trekking, ciclismo e esportes de aventura.',
    },
  ],
  ciclovias:
    'A cidade tem estrutura cicloviária em desenvolvimento ao longo de avenidas centrais; a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente, típico do leste mato-grossense, com estações bem definidas: verão chuvoso e inverno seco. As temperaturas são elevadas boa parte do ano, podendo passar de 40 °C entre setembro e outubro, e o período seco (de abril a setembro) traz baixa umidade do ar.',
  climaTreino:
    'O calor intenso e a baixa umidade na seca tornam recomendável treinar ao ar livre no começo da manhã ou no fim da tarde, com atenção redobrada à hidratação.',

  mobilidade:
    'Barra do Garças está no entroncamento das BR-070 e BR-158, na divisa com Goiás, ligada a Aragarças (GO) pela ponte sobre o rio Araguaia. É a principal porta de entrada do Vale do Araguaia, a cerca de 550 km de Cuiabá, e conta com aeroporto regional.',

  corridas: [
    {
      nome: 'Provas de rua locais',
      descricao:
        'A cidade recebe corridas de rua organizadas por entidades e pelo poder público ao longo do ano, aproveitando a orla e as avenidas centrais.',
    },
    {
      nome: 'Desafios no Vale do Araguaia',
      descricao:
        'A região sedia provas de longa distância e desafios de ultramaratona que percorrem o Vale do Araguaia, atraindo corredores de MT e GO.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente ligada ao rio e à serra: pesca esportiva, esportes aquáticos no Araguaia, trilhas e ciclismo na Serra do Roncador, somados a provas de rua locais. O turismo de natureza reforça a vocação para atividades ao ar livre.',
  academias:
    'A oferta de academias se concentra no Centro e ao longo das avenidas principais, complementada pelo treino ao ar livre na orla do Araguaia e pelas trilhas da serra.',

  destaquesFitness: [
    'Orla do Araguaia e praias de rio na seca como cenário para caminhada e corrida.',
    'Serra do Roncador com trilhas, cachoeiras e ciclismo para esportes de aventura.',
    'Parque das Águas Quentes, com águas termais voltadas ao lazer e bem-estar.',
    'Forte cultura de pesca esportiva e atividades aquáticas no Vale do Araguaia.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Polo do Vale do Araguaia e paraíso das águas, Barra do Garças combina praias de rio, águas termais e a Serra do Roncador num cenário ideal para treinar ao ar livre. Um personal trainer ajuda a montar uma rotina que respeite o calor do leste mato-grossense e a aproveitar a orla, as trilhas e a vida esportiva ligada ao rio com método.',

  vizinhas: ['cuiaba-mt', 'rondonopolis-mt', 'primavera-do-leste-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Barra do Garças', url: 'https://cidades.ibge.gov.br/brasil/mt/barra-do-garcas/panorama' },
    { nome: 'Prefeitura de Barra do Garças', url: 'https://www.barradogarcas.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
