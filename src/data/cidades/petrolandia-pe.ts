import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'petrolandia-pe',
  nome: 'Petrolândia',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'petrolandense',
  tipo: 'cidade',

  populacao: 34161,
  populacaoAno: 2022,
  idhm: 0.623,
  idhmClasse: 'médio',
  altitudeM: 282,

  resumoEconomico:
    'No Sertão do São Francisco pernambucano, às margens do Lago de Itaparica, Petrolândia vive uma história marcada pela reconstrução: em 1988, a antiga sede da cidade foi submersa pelo enchimento do reservatório da Usina Hidrelétrica de Itaparica (hoje Luiz Gonzaga), da Chesf, e a população foi transferida para uma nova cidade erguida em terreno mais alto, com parte dos moradores realocada em agrovilas de projetos de irrigação. A usina impulsiona o setor energético e ajuda a explicar por que o município tem um dos maiores PIB per capita do Sertão do São Francisco. A economia atual combina agricultura irrigada (manga, banana, melancia), pecuária, comércio e, sobretudo, a piscicultura em tanques-rede — Petrolândia se firmou como um dos polos de criação de tilápia do país, com artesanato feito a partir da pele do peixe.',

  mercado:
    'O mercado fitness de Petrolândia é típico de uma cidade média do interior do Sertão pernambucano: enxuto, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento individual para treinar com segurança diante do calor do semiárido, muitas vezes aproveitando a orla do lago como extensão ao ar livre da rotina de treino.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Nova Esperança', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Orla Fluvial de Petrolândia',
      descricao:
        'Point turístico e de lazer da cidade nova, às margens do Lago de Itaparica, com calçadão arborizado, quiosques e vista para o pôr do sol — o principal espaço de caminhada, corrida e convívio ao ar livre dos petrolandenses.',
    },
    {
      nome: 'Ilha de Rarrá e passeios de barco',
      descricao:
        'Partindo da orla da cidade nova, passeios de barco levam até a Ilha de Rarrá e sobrevoam de perto a área da antiga Petrolândia, submersa pelo lago — um roteiro que combina turismo náutico com a memória da cidade afogada.',
    },
    {
      nome: 'Mirante do Serrote do Padre',
      descricao:
        'Ponto elevado com vista panorâmica sobre o Lago de Itaparica e a cidade, usado por quem busca um passeio a pé ou de bicicleta fora do perímetro mais urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada nas vias da cidade nova; boa parte do pedal e da corrida acontece na orla fluvial e nas ruas planas do núcleo urbano reconstruído após o alagamento.',

  clima:
    'O clima é semiárido (tipo BSh na classificação de Köppen), com temperatura média anual acima de 24 °C, verões quentes e úmidos concentrando a maior parte das chuvas, e invernos mais secos e amenos, com mínimas que podem chegar a 15 °C. A proximidade do Lago de Itaparica não muda a natureza seca do clima regional, mas oferece um contraponto de água e sombra na orla.',
  climaTreino:
    'O calor do semiárido pede treino bem cedo ou no fim da tarde, com hidratação reforçada e proteção solar; nos horários de pico de temperatura, ambientes climatizados são a opção mais segura, e a orla do lago tende a ser o trecho mais ameno para atividade ao ar livre.',

  mobilidade:
    'O acesso rodoviário à região se dá principalmente pela BR-110, que liga Petrolândia a cidades como Ibimirim, e pela PE-375, que conecta a BR-316 (em Inajá), via Tacaratu, à BR-110 rumo ao município. A cidade nova foi planejada e reconstruída em terreno elevado após 1988, com o transporte urbano simples, típico de uma cidade média do interior, e deslocamentos até as agrovilas e projetos de irrigação feitos por estradas locais.',

  corridas: [
    {
      nome: 'Corrida de Emancipação Política de Petrolândia',
      descricao:
        'Prova de 5 km com largada e chegada na Orla Fluvial, criada pela prefeitura como parte das comemorações do aniversário de emancipação política do município; a primeira edição ocorreu em julho de 2026, reunindo corredores da cidade e da região à beira do Lago de Itaparica.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Petrolândia gira em torno da água: pesca esportiva e passeios náuticos no Lago de Itaparica, além da orla fluvial como espaço de caminhada, corrida e convívio social. O futebol amador também tem presença forte nos bairros, com campos e torneios comunitários organizados pela prefeitura e por associações de moradores.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas no Centro e nos bairros residenciais próximos à orla, com porte compatível com uma cidade média do interior do Sertão pernambucano.',

  destaquesFitness: [
    'Orla Fluvial do Lago de Itaparica como principal espaço de caminhada, corrida e lazer ao ar livre.',
    'Cidade reconstruída em terreno elevado após o alagamento da antiga sede pela Usina Hidrelétrica de Itaparica (hoje Luiz Gonzaga), em 1988.',
    'Um dos polos de piscicultura de tilápia do país, com forte cultura de pesca esportiva e turismo náutico no lago.',
    'Clima semiárido quente, que exige planejamento de horário, hidratação e proteção solar no treino.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 95,
    mensalMin: 200,
    mensalMax: 580,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Reconstruída às margens do Lago de Itaparica depois de ver sua sede original submersa, Petrolândia hoje organiza a vida em torno da orla fluvial e do calor do Sertão do São Francisco. Um personal trainer ajuda a adaptar o treino ao clima semiárido, aproveitando os horários mais amenos e o espaço da orla para manter a constância ao longo do ano.',

  vizinhas: ['petrolina-pe', 'salgueiro-pe', 'serra-talhada-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Petrolândia', url: 'https://cidades.ibge.gov.br/brasil/pe/petrolandia/panorama' },
    { nome: 'Prefeitura de Petrolândia', url: 'https://www.petrolandia.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
