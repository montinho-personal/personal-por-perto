import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aguas-de-lindoia-sp',
  nome: 'Águas de Lindóia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'lindoiense',
  tipo: 'cidade',

  populacao: 17930,
  populacaoAno: 2022,
  idhm: 0.745,
  idhmClasse: 'alto',
  pibPerCapita: 44680,
  pibPerCapitaAno: 2023,
  altitudeM: 945,

  resumoEconomico:
    'Estância hidromineral do Circuito das Águas Paulista, encravada em vales da Serra da Mantiqueira, Águas de Lindóia é conhecida como a Capital Termal do Brasil e a Capital Nacional da Água Mineral: a cidade responde por parcela expressiva da água mineral engarrafada consumida no país e possui fontes com água de alta radioatividade natural, historicamente associadas ao alívio de dores musculares. A economia gira em torno do turismo de águas e de bem-estar, com uma rede hoteleira que reúne dezenas de hotéis e pousadas capazes de hospedar milhares de visitantes, atraindo sobretudo o público de terceira idade e quem busca spas, tratamentos termais e descanso.',

  mercado:
    'Por ser uma estância pequena de forte vocação turística, o mercado fitness de Águas de Lindóia é enxuto e bastante ligado ao perfil de bem-estar e terceira idade que caracteriza a cidade. A procura por personal trainers aparece entre moradores, entre visitantes de temporada hospedados em hotéis e pousadas, e entre um público mais velho interessado em hidroginástica, mobilidade e treino de baixo impacto, além de quem trabalha na hotelaria e no comércio voltado ao turista.',

  bairrosNobres: ['Centro', 'Parque das Fontes', 'Jardim Nova Lindóia', 'Vila Helena'],
  bairrosPopulares: ['Vila Assumpção', 'Jardim Paraíso', 'Vila Água Quente', 'Parque Industrial Humberto Corsi'],

  parques: [
    {
      nome: 'Balneário Municipal',
      descricao:
        'Complexo central inaugurado em 1959, com projeto arquitetônico de Oswaldo Arthur Bratke e jardins assinados por Burle Marx. Reúne piscinas de água mineral, um lago com aves e capivaras, pedalinhos e áreas arborizadas — cenário de caminhada leve, hidroginástica e atividades de bem-estar.',
    },
    {
      nome: 'Bosque Municipal Zequinha de Abreu',
      descricao:
        'Área arborizada da cidade com trilhas ao redor de um riacho, usada para caminhada e corrida em ritmo tranquilo, em meio à vegetação característica da Mantiqueira.',
    },
    {
      nome: 'Praça Adhemar de Barros',
      descricao:
        'Praça central com lago para pedalinho, trenzinho e áreas de lazer; é também ponto de largada e chegada de corridas de rua realizadas na cidade, como a Night Run das Águas.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, própria de uma estância pequena; caminhada e corrida se concentram no entorno do Balneário Municipal, no Bosque Zequinha de Abreu e nas ruas do Centro, com passeio de bicicleta mais recreativo do que estruturado.',

  clima:
    'O clima é ameno, de transição entre subtropical e tropical de altitude, favorecido pelos cerca de 945 metros de altitude da cidade — temperatura média anual em torno de 22 °C, com verões mais suaves que os das cidades baixas do interior paulista e invernos frios, sobretudo à noite.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre durante boa parte do ano, tanto a caminhada quanto a corrida leve pelo Balneário e pelo Bosque. No inverno, as manhãs e noites mais frias pedem aquecimento reforçado, especialmente para o público de terceira idade que forma boa parte da demanda por atividade física na cidade.',

  mobilidade:
    'Águas de Lindóia se conecta ao restante do Circuito das Águas Paulista principalmente pela SP-095 (Rodovia João Beira), que liga a estância a Lindóia, Serra Negra, Amparo e Pedreira, com acesso desde a capital e Campinas via rodovias como a SP-340 e a SP-360. O deslocamento interno é feito majoritariamente por veículo próprio e por transporte turístico, com o fluxo de visitantes concentrando o movimento em fins de semana, feriados e temporada.',

  corridas: [
    {
      nome: 'Corrida das Águas',
      descricao:
        'Prova de rua realizada anualmente em Águas de Lindóia, com largada no Espaço Burle Marx e percursos de 5 km e 10 km, já em edições de dois dígitos.',
    },
    {
      nome: 'Night Run das Águas',
      descricao:
        'Corrida noturna de 5 km com largada e chegada na Praça Adhemar de Barros, no Centro da cidade, reunindo moradores e turistas em edições anuais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é marcada pelo turismo de águas e de bem-estar: hidroginástica e caminhada em torno do Balneário Municipal, spas e tratamentos termais voltados a um público majoritariamente de terceira idade, e duas corridas de rua próprias que mobilizam a cidade ao longo do ano.',
  academias:
    'A oferta é formada por academias locais de musculação, hidroginástica e treino funcional, concentradas no Centro e em bairros próximos, em porte compatível com uma estância pequena de perfil turístico e de bem-estar.',

  destaquesFitness: [
    'Estância hidromineral do Circuito das Águas Paulista, conhecida como Capital Termal do Brasil e Capital Nacional da Água Mineral.',
    'Balneário Municipal com jardins de Burle Marx, lago e piscinas de água mineral, usado para caminhada e hidroginástica.',
    'Turismo de bem-estar e terceira idade que sustenta forte cultura de hidroginástica, spa e caminhada.',
    'Duas corridas de rua próprias, a Corrida das Águas e a Night Run das Águas, com edições anuais consolidadas.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 270,
    mensalMax: 750,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Estância pequena e voltada ao turismo de águas e bem-estar, Águas de Lindóia oferece um ambiente ameno e tranquilo para atividade física, do Balneário Municipal às praças centrais. Um personal trainer ajuda a adaptar o treino ao perfil da cidade — da hidroginástica e da mobilidade para o público de terceira idade até a preparação para as corridas de rua locais.',

  vizinhas: ['amparo-sp', 'serra-negra-sp', 'socorro-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Águas de Lindóia', url: 'https://cidades.ibge.gov.br/brasil/sp/aguas-de-lindoia/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Águas de Lindóia', url: 'https://www.aguasdelindoia.sp.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
