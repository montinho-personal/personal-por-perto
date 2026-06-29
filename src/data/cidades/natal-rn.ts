import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'natal-rn',
  nome: 'Natal',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'natalense',
  tipo: 'cidade',

  populacao: 751300,
  populacaoAno: 2022,
  idhm: 0.763,
  idhmClasse: 'alto',
  altitudeM: 30,

  resumoEconomico:
    'Capital do Rio Grande do Norte, a "Cidade do Sol", Natal tem economia movida principalmente pelo turismo — um dos maiores pesos relativos entre as capitais — além de comércio, indústria têxtil e de moda praia e construção civil. Com praias urbanas, dunas e sol quase o ano inteiro, é uma cidade naturalmente voltada à vida ao ar livre.',

  mercado:
    'O mercado fitness natalense é aquecido pela cultura de praia, moda praia e estética, com verão o ano todo. Há forte presença da Smart Fit (Lagoa Nova, Cidade Satélite, Alecrim, Esperança, Partage Norte) e dezenas de academias pela cidade, o que reduz a barreira de entrada para a musculação e amplia a procura por personal trainers.',

  bairrosNobres: ['Tirol', 'Petrópolis', 'Capim Macio', 'Candelária'],
  bairrosPopulares: ['Alecrim', 'Cidade da Esperança', 'Igapó', 'Felipe Camarão'],

  parques: [
    {
      nome: 'Calçadão de Ponta Negra',
      descricao:
        'Cerca de 4 km de orla e calçadão amplo e seguro, ponto de encontro de corredores e caminhantes, especialmente no fim da tarde, com o Morro do Careca ao fundo.',
    },
    {
      nome: 'Via Costeira (Av. Dinarte Mariz)',
      descricao:
        'Cerca de 10 km à beira-mar com ciclovia sinalizada e separada do tráfego — ótima para pedais e corridas mais longas.',
    },
    {
      nome: 'Parque das Dunas',
      descricao:
        'Segundo maior parque urbano do Brasil (cerca de 1.172 hectares), com trilhas em meio à Mata Atlântica — alternativa de endurance e contato com a natureza (aberto de terça a domingo).',
    },
  ],
  ciclovias:
    'Natal tem cerca de 85 km de ciclovias e ciclofaixas, com destaque para a Via Costeira, e metas de expansão para superar 115 km.',

  clima:
    'O clima é tropical úmido, com média em torno de 28 °C e cerca de 2.700 horas de sol por ano — uma das mais ensolaradas do país.',
  climaTreino:
    'O calor e a radiação intensos pedem treino cedo de manhã ou no fim da tarde, com hidratação e proteção solar. A brisa marinha ameniza a sensação térmica na orla.',

  mobilidade:
    'O deslocamento é predominantemente por carro e ônibus, pelos eixos BR-101 e BR-226/BR-304, com a Ponte Newton Navarro ligando à Zona Norte. A cidade não tem metrô urbano consolidado.',

  corridas: [
    {
      nome: 'Meia Maratona do Sol',
      descricao:
        'Prova tradicional com percursos de 5 km, 10 km e 21 km (e desafios maiores), em geral em setembro, aproveitando a orla natalense.',
    },
    {
      nome: 'Circuito de corrida de rua',
      descricao:
        'Etapas de circuitos nacionais passam por Natal, reforçando uma cena de corrida de rua ativa na capital.',
    },
  ],
  culturaEsportiva:
    'Natal tem forte cultura de corrida de rua e de esportes de praia — futebol de areia, beach tennis, surfe e vôlei. O clima ensolarado e as orlas favorecem o treino ao ar livre praticamente o ano inteiro.',
  academias:
    'A ampla presença da Smart Fit, somada a dezenas de academias de bairro e estúdios de funcional, dá boa cobertura à cidade, com a Via Costeira e Ponta Negra como extensões naturais ao ar livre.',

  destaquesFitness: [
    'Ponta Negra e Via Costeira: espaços públicos premium para corrida e treino funcional.',
    'Verão o ano todo e cultura de praia que aquecem a demanda por personal trainer.',
    'Smart Fit bem distribuída, baixando a barreira de entrada para a musculação.',
    'Parque das Dunas e Parque da Cidade para endurance e treino em trilha.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Com sol quase o ano inteiro, orlas estruturadas e a Via Costeira para os treinos mais longos, Natal é um convite à vida ativa. Um personal trainer ajuda a montar uma rotina que respeite o calor e potencialize seus resultados — da corrida em Ponta Negra à musculação nas redes da cidade.',

  vizinhas: ['joao-pessoa-pb', 'fortaleza-ce', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Natal', url: 'https://cidades.ibge.gov.br/brasil/rn/natal/panorama' },
    { nome: 'Prefeitura de Natal', url: 'https://natal.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
