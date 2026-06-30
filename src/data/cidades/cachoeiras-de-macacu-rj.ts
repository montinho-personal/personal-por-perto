import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cachoeiras-de-macacu-rj',
  nome: 'Cachoeiras de Macacu',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'cachoeirense',
  tipo: 'cidade',

  populacao: 56943,
  populacaoAno: 2022,
  idhm: 0.7,
  idhmClasse: 'alto',
  altitudeM: 57,

  resumoEconomico:
    'Município do leste fluminense, na divisa entre a Baixada e a Serra dos Órgãos, Cachoeiras de Macacu tem economia ligada à agricultura — com forte tradição em olericultura (hortaliças e legumes) que abastece a região metropolitana — e ao ecoturismo. A abundância de rios, poços e cachoeiras, somada à proximidade da Reserva Ecológica de Guapiaçu e do Parque Estadual dos Três Picos, faz da cidade um polo de turismo de natureza e dos recursos hídricos que ajudam a abastecer a Baía de Guanabara.',

  mercado:
    'Cidade média do interior fluminense, com perfil rural e de natureza, Cachoeiras de Macacu reúne um público que valoriza atividades ao ar livre, trilhas e esportes de aventura. A demanda por personal trainers cresce em paralelo às academias de bairro e ao condicionamento voltado a trilhas, corridas em terreno e ciclismo de estrada nos distritos.',

  bairrosNobres: ['Centro', 'Japuíba', 'Funchal', 'Guapiaçu'],
  bairrosPopulares: ['Papucaia', 'Subaúma', 'Boca do Mato', 'Agro Brasil'],

  parques: [
    {
      nome: 'Reserva Ecológica de Guapiaçu (REGUA)',
      descricao:
        'Reserva privada de Mata Atlântica na bacia do alto rio Guapiaçu, com trilhas de diferentes níveis, observação de aves e a Cascata da REGUA, uma das maiores cachoeiras do município — cenário de caminhadas e ecoturismo.',
    },
    {
      nome: 'Parque Estadual dos Três Picos',
      descricao:
        'Maior parque estadual do Rio de Janeiro, com cerca de 65 mil hectares de Mata Atlântica abrangendo parte de Cachoeiras de Macacu. Reúne trilhas para todos os perfis, do passeio leve a desafios mais intensos de montanhismo.',
    },
    {
      nome: 'Cachoeiras e poços dos rios Macacu e Guapiaçu',
      descricao:
        'Rede de quedas-d’água e poços naturais ligados aos rios da região, procurada para banho, caminhada e contato com a natureza nos fins de semana.',
    },
  ],
  ciclovias:
    'O relevo de baixada e serra e a malha rural favorecem o ciclismo de estrada e o mountain bike pelos distritos, mais do que uma rede de ciclovia urbana estruturada.',

  clima:
    'O clima é tropical úmido de interior fluminense, quente no verão e ameno no inverno, com chuvas concentradas no verão e umidade elevada pela proximidade da serra e dos rios.',
  climaTreino:
    'O calor e a umidade do verão pedem hidratação reforçada e treinos nos horários mais frescos, enquanto o outono e o inverno, mais amenos, são ideais para trilhas e corridas de longa distância em terreno.',

  mobilidade:
    'O acesso se dá principalmente pela RJ-116, que liga a cidade a Itaboraí e a Nova Friburgo passando pela serra, com conexão próxima à BR-101 em direção ao restante da região metropolitana e ao norte fluminense.',

  corridas: [
    {
      nome: 'Corridas de rua no Centro e em Papucaia',
      descricao:
        'Provas de rua organizadas pela cidade e por grupos locais, com percursos pelo Centro e pelo distrito de Papucaia, reunindo corredores da região.',
    },
    {
      nome: 'Trilhas e travessias na Serra dos Órgãos',
      descricao:
        'Trilhas e percursos de trail running na área dos Três Picos e do entorno serrano, aproveitando o relevo de Mata Atlântica para corrida e montanhismo.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno da natureza: trilhas, montanhismo, rapel e esportes de aventura, além de ciclismo de estrada pelos distritos e corrida de rua no Centro e em Papucaia.',
  academias:
    'A oferta combina academias de bairro no Centro, em Japuíba e em Papucaia com o condicionamento voltado a trilhas e esportes ao ar livre, atendendo um público que valoriza o contato com a natureza.',

  destaquesFitness: [
    'Reserva Ecológica de Guapiaçu (REGUA), com trilhas de Mata Atlântica e a Cascata da REGUA.',
    'Proximidade do Parque Estadual dos Três Picos, o maior do Rio de Janeiro, para trilhas e montanhismo.',
    'Abundância de rios, poços e cachoeiras para atividades ao ar livre.',
    'Vocação para trail running, ciclismo de estrada e esportes de aventura no entorno serrano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Entre a baixada e a serra, Cachoeiras de Macacu une agricultura, recursos hídricos e ecoturismo num cenário privilegiado para treinar ao ar livre. Um personal trainer ajuda a aproveitar trilhas, cachoeiras e o relevo da Mata Atlântica com segurança e progressão, da REGUA às provas de rua e às travessias na Serra dos Órgãos.',

  vizinhas: ['itaborai-rj', 'niteroi-rj', 'nova-friburgo-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Cachoeiras de Macacu', url: 'https://cidades.ibge.gov.br/brasil/rj/cachoeiras-de-macacu/panorama' },
    { nome: 'Prefeitura de Cachoeiras de Macacu', url: 'https://www.prefeituracachoeiras.com/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3300803' },
  ],
  atualizadoEm: '2026-06-29',
};
