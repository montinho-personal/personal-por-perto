import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sertaozinho-sp',
  nome: 'Sertãozinho',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'sertanezino',
  tipo: 'cidade',

  populacao: 126887,
  populacaoAno: 2022,
  idhm: 0.761,
  idhmClasse: 'alto',
  altitudeM: 579,

  resumoEconomico:
    'Conhecida como a capital nacional do etanol, Sertãozinho é uma das maiores referências do setor sucroenergético do país, com usinas de açúcar e álcool e um forte polo metalmecânico de centenas de empresas que fabricam equipamentos para usinas — a chamada "fábrica de fábricas". A cidade sedia anualmente a Fenasucro & Agrocana, uma das maiores feiras de bioenergia do mundo, e vem diversificando para etanol de milho, biogás e novas biorrefinarias.',

  mercado:
    'Cidade média industrial próspera na região de Ribeirão Preto, Sertãozinho combina renda gerada pelo setor sucroenergético e metalmecânico com uma população atenta à saúde. O mercado fitness é sustentado por academias e estúdios na malha urbana, complementados por uma forte oferta de personal trainers em atendimento domiciliar e em condomínios.',

  bairrosNobres: ['Jardim Recreio', 'Jardim Eldorado', 'Jardim Athenas', 'Centro'],
  bairrosPopulares: ['Cruzeiro', 'Jardim Santa Marta', 'Jardim Botânico', 'Jardim Boa Vista'],

  parques: [
    {
      nome: 'Parque Ecológico e de Lazer Gustavo Simioni',
      descricao:
        'O maior espaço de lazer da cidade, conhecido como "prainha", com mais de 800 mil m² junto à represa: pista de caminhada e corrida, ciclovia, ampla área verde, quadras, campos e praia artificial.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'Praças arborizadas e calçadões na região central são usados para caminhadas, alongamento e treino funcional ao ar livre nos horários mais amenos do dia.',
    },
  ],
  ciclovias:
    'O Parque Ecológico Gustavo Simioni conta com ciclovia interna para lazer; a extensão total da malha cicloviária urbana permanente não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical, típico da região de Ribeirão Preto, com verões quentes e chuvosos e invernos secos e amenos. O calor regional é marcante, com dias de temperaturas elevadas no verão.',
  climaTreino:
    'O calor da região pede atenção à hidratação e horários estratégicos — cedo de manhã ou no fim de tarde no verão. O período de abril a agosto, mais seco e ameno, é o mais confortável para o treino ao ar livre.',

  mobilidade:
    'Sertãozinho fica a cerca de 22 km de Ribeirão Preto e é integrada à malha rodoviária do interior paulista, com fácil acesso à Rodovia Anhanguera (SP-330), um dos principais corredores logísticos do estado, e à SP-322.',

  corridas: [
    {
      nome: 'Corridas de rua de Sertãozinho',
      descricao:
        'A cidade está entre as que mais recebem provas pedestres na região de Ribeirão Preto, com circuitos de 5 km e 10 km que integram o calendário esportivo local ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A região de Ribeirão Preto tem forte tradição em corrida de rua e ciclismo, e Sertãozinho participa ativamente desse calendário. O esporte amador e a prática em parques fazem parte da rotina dos moradores.',
  academias:
    'A oferta reúne academias de bairro e estúdios na malha urbana, com público sustentado pela renda industrial da cidade, complementada por personal trainers em atendimento domiciliar e em condomínios.',

  destaquesFitness: [
    'Parque Ecológico Gustavo Simioni como hub público completo (pista de caminhada/corrida, ciclovia e ampla área verde).',
    'Renda industrial do polo sucroenergético e metalmecânico sustentando o mercado fitness.',
    'Calendário regional ativo de corridas de rua na microrregião de Ribeirão Preto.',
    'Forte oferta de atendimento domiciliar de personal trainers, além das academias.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Capital nacional do etanol e polo metalmecânico próspero da região de Ribeirão Preto, Sertãozinho une renda industrial, parques completos e calendário ativo de corridas. Um personal trainer ajuda a aproveitar o Parque Ecológico Gustavo Simioni com método, ajustando os horários ao calor da região.',

  vizinhas: ['ribeirao-preto-sp', 'araraquara-sp', 'barretos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Sertãozinho', url: 'https://cidades.ibge.gov.br/brasil/sp/sertaozinho/panorama' },
    { nome: 'Prefeitura de Sertãozinho', url: 'https://www.sertaozinho.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
