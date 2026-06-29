import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'florianopolis-sc',
  nome: 'Florianópolis',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'florianopolitano',
  tipo: 'cidade',

  populacao: 537211,
  populacaoAno: 2022,
  idhm: 0.847,
  idhmClasse: 'muito alto',
  altitudeM: 3,

  resumoEconomico:
    'Capital de Santa Catarina, Florianópolis tem o maior IDHM entre as capitais brasileiras (0,847). A economia é forte em serviços e administração pública e tem na tecnologia seu grande motor — o setor de TI responde por cerca de um quarto do PIB, rendendo à cidade o apelido de "Ilha do Silício". O turismo de praia, sazonal e intenso no verão, completa o cenário de uma das cidades com melhor qualidade de vida do país.',

  mercado:
    'Florianópolis tem uma cultura intensa de musculação, estética e vida saudável. A cidade sedia o Ironberg Floripa, no Itacorubi, referência nacional, além de Smart Fit e de estúdios e clubes premium. A forte cultura de surf — em praias como Joaquina, Mole e Campeche — reforça a procura por treino funcional e preparo físico, fazendo da capital uma das praças fitness mais fortes do Sul.',

  bairrosNobres: ['Jurerê Internacional', 'Lagoa da Conceição', 'Coqueiros', 'Agronômica'],
  bairrosPopulares: ['Capoeiras', 'Monte Cristo', 'Estreito', 'Coloninha'],

  parques: [
    {
      nome: 'Avenida Beira-Mar Norte',
      descricao:
        'Cerca de 10 km de orla com calçadão plano e asfaltado, ciclovia ao lado e academias ao ar livre gratuitas — o principal point de corrida e caminhada da cidade.',
    },
    {
      nome: 'Lagoa da Conceição',
      descricao:
        'Cartão-postal da Ilha, oferece circuitos de corrida e caminhada e prática de remo e stand-up paddle, em um ambiente cercado de natureza.',
    },
    {
      nome: 'Praias Joaquina, Mole e Campeche',
      descricao:
        'Palco de corrida na areia, surf e treino funcional ao ar livre — a expressão da cultura esportiva praiana de Floripa.',
    },
  ],
  ciclovias:
    'A rede cicloviária supera 250 km, conectando a Beira-Mar Norte, o Centro e o Sul da Ilha — uma das mais extensas entre as capitais.',

  clima:
    'O clima é subtropical úmido, com quatro estações bem definidas e verão quente.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo: no verão, vale escolher horários de menor radiação; no inverno, mais frio e úmido, a constância pede roupa adequada e flexibilidade entre o outdoor e a academia.',

  mobilidade:
    'A Ilha é ligada ao continente por três pontes — Pedro Ivo Campos e Colombo Salles (tráfego) e a histórica Hercílio Luz, restaurada. A BR-101 conecta a cidade a Curitiba e Porto Alegre. O trânsito de verão é intenso, o que valoriza treinar perto de casa.',

  corridas: [
    {
      nome: 'Revezamento Volta à Ilha',
      descricao:
        'A maior corrida de revezamento por distância da América Latina: cerca de 140 km contornando a Ilha, disputada desde 1996.',
    },
    {
      nome: 'Maratona Internacional de Floripa',
      descricao:
        'Prova de 42,195 km à beira-mar (com opções de 21 km e trail), em sua maior parte plana, realizada em agosto desde 2017.',
    },
  ],
  culturaEsportiva:
    'O surf faz parte da identidade de Florianópolis, com a Joaquina como palco histórico de campeonatos, e a corrida de rua é fortíssima, da Volta à Ilha à Maratona de Floripa. Some-se a musculação de alto rendimento (Ironberg) e tem-se uma das culturas fitness mais completas do país.',
  academias:
    'Além do Ironberg Floripa, referência nacional, a cidade tem unidades de Smart Fit e diversos estúdios e clubes premium, com forte oferta de funcional e treino voltado a surfistas e corredores.',

  destaquesFitness: [
    'Maior IDHM entre as capitais do Brasil (0,847), com altíssima qualidade de vida.',
    'Beira-Mar Norte: corredor de cerca de 10 km com academias ao ar livre gratuitas.',
    'Sede do Ironberg Floripa, referência nacional em musculação e alto rendimento.',
    'Cultura de surf e praia que sustenta forte demanda por treino funcional.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 210,
    mensalMin: 450,
    mensalMax: 1250,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'Em Florianópolis, treinar é quase uma extensão do estilo de vida: praia, corrida, surf e musculação de alto nível convivem na mesma cidade. Um personal trainer ajuda a organizar tudo isso em torno do seu objetivo, aproveitando a Beira-Mar, a Lagoa e a forte cena fitness da capital.',

  vizinhas: ['balneario-camboriu-sc', 'porto-alegre-rs', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Florianópolis', url: 'https://cidades.ibge.gov.br/brasil/sc/florianopolis/panorama' },
    { nome: 'Prefeitura de Florianópolis', url: 'https://www.pmf.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
