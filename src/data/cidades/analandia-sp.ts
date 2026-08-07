import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'analandia-sp',
  nome: 'Analândia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'analandense',
  tipo: 'cidade',

  populacao: 4589,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',

  resumoEconomico:
    'Com 4.589 habitantes contados pelo Censo 2022 e densidade de 14 hab/km², Analândia é uma das menores cidades do interior paulista — e uma das que mais recebem visitante por morador. O motivo está na paisagem: o município integra a APA Corumbataí, cujo perímetro protege 272 mil hectares de cuestas basálticas, morros testemunho e a área de recarga do Aquífero Guarani. A economia soma agropecuária, comércio e um turismo de aventura consolidado.',

  mercado:
    'Numa cidade desse porte, o personal trainer é figura conhecida e multifuncional: atende na academia do centro, vai à casa do aluno e trabalha com um público que vai do trabalhador rural ao condutor de trilha que precisa de perna e fôlego para a temporada. O boca a boca vale mais que qualquer anúncio.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Jardim Bela Vista', 'Chácaras'],
  bairrosPopulares: ['Cohab', 'Vila Santa Rita', 'São Benedito', 'Zona Rural'],

  parques: [
    {
      nome: 'Morro do Cuscuzeiro',
      descricao:
        'O cartão-postal da cidade: um paredão vertical de arenito avermelhado de cerca de 52 metros, usado para escalada, com trilha de acesso e trabalho de rapel, arvorismo e tirolesa no entorno.',
    },
    {
      nome: 'APA Corumbataí',
      descricao:
        'O perímetro Corumbataí da área de proteção reúne 272.692 hectares em quinze municípios, protegendo as cuestas basálticas, os morros testemunho e a recarga do Aquífero Guarani.',
    },
    {
      nome: 'Cachoeiras e trilhas do entorno',
      descricao:
        'As quedas d’água e trilhas espalhadas pelas propriedades rurais formam o circuito de caminhada e banho da região, com acesso por estradas de terra.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana. As estradas de terra entre as fazendas e os acessos aos morros formam o circuito de cicloturismo e mountain bike, com desnível constante garantido pelo relevo de cuesta.',

  clima:
    'Tropical de altitude, com verão quente e chuvoso e inverno seco e ameno — o relevo de cuesta garante noites frescas boa parte do ano.',
  climaTreino:
    'O clima permite treinar ao ar livre quase o ano inteiro. O inverno seco é a alta temporada das trilhas e da escalada; no verão, as chuvas de fim de tarde recomendam antecipar a sessão para a manhã.',

  mobilidade:
    'A cidade é pequena e caminhável de ponta a ponta. O acesso regional se faz pelas rodovias que ligam a Rio Claro, São Carlos e Leme, com os atrativos naturais a poucos quilômetros do centro por estradas de terra.',

  corridas: [
    {
      nome: 'Provas de trail e travessias da região das cuestas',
      descricao:
        'O calendário regional reúne corridas de montanha e travessias que aproveitam o desnível das cuestas e as estradas rurais, com terreno técnico e subidas longas.',
    },
  ],
  culturaEsportiva:
    'A escalada e o turismo de aventura são a marca local, ao lado do futebol amador e das cavalgadas. Caminhar e subir morro fazem parte da rotina de quem trabalha com o turismo da cidade.',
  academias:
    'A oferta formal é pequena e concentrada no centro, com espaços compactos de musculação — o que abre espaço para o atendimento individual e para o treino em casa.',

  destaquesFitness: [
    'Morro do Cuscuzeiro, paredão de arenito de cerca de 52 m para escalada e rapel.',
    'Relevo de cuesta, com desnível constante nas estradas rurais.',
    'APA Corumbataí, com 272.692 hectares protegidos no seu perímetro.',
    'Clima de altitude que permite treino ao ar livre quase o ano inteiro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Analândia é pequena no censo e generosa no relevo. Um personal trainer daqui trabalha com o que a cidade oferece de graça — subida, trilha e paredão — e usa a academia como base de força para que a aventura do fim de semana não vire lesão na segunda.',

  vizinhas: ['rio-claro-sp', 'sao-carlos-sp', 'leme-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Analândia', url: 'https://www.ibge.gov.br/cidades-e-estados/sp/analandia.html' },
    { nome: 'Prefeitura de Analândia', url: 'https://www.analandia.sp.gov.br/' },
    { nome: 'Guia de Áreas Protegidas SP — APA Corumbataí', url: 'https://guiadeareasprotegidas.sp.gov.br/ap/area-de-protecao-ambiental-corumbatai-botucatu-tejupa-perimetro-corumbatai/' },
  ],
  atualizadoEm: '2026-08-05',
};
