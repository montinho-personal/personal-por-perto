import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alcobaca-ba',
  nome: 'Alcobaça',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'alcobacense',
  tipo: 'cidade',

  populacao: 24530,
  populacaoAno: 2022,
  idhm: 0.61,
  idhmClasse: 'médio',
  altitudeM: 5,

  resumoEconomico:
    'Nascida como Arraial de Itanhém em 12 de novembro de 1772, às margens do rio que lhe deu origem, Alcobaça tem 24.530 habitantes (Censo 2022) e território 100% de Mata Atlântica em 1.482 km². A economia combina pesca, agropecuária, comércio e um turismo que cresce com a Costa das Baleias — a região do extremo sul baiano que recebe as jubartes vindas da Antártida entre julho e novembro.',

  mercado:
    'O mercado de personal trainer aqui é enxuto e de relação próxima, com poucos profissionais atendendo moradores, pescadores e o público de veraneio que multiplica a cidade na alta temporada. A academia do centro divide espaço com o atendimento a domicílio e com o treino na areia — que, numa cidade de praia extensa e plana, é praticamente gratuito.',

  bairrosNobres: ['Centro', 'Praia de Alcobaça', 'Barra do Itanhém', 'Farol'],
  bairrosPopulares: ['São Sebastião', 'Bela Vista', 'Cohab', 'Zona Rural'],

  parques: [
    {
      nome: 'Praia de Alcobaça',
      descricao:
        'O cartão-postal urbano da cidade, com faixa de areia extensa e mar sem grandes ondulações — a melhor pista natural para caminhada e corrida, especialmente na maré baixa.',
    },
    {
      nome: 'Praia da Barra do Itanhém',
      descricao:
        'A cerca de 4 km ao sul do centro, no encontro do rio Itanhém com o mar, reúne casas de veraneio, restaurantes e água calma — cenário de remada e stand up paddle.',
    },
    {
      nome: 'Praia do Farol',
      descricao:
        'Marcada pelo farol tradicional, oferece vista aberta da costa do extremo sul baiano e um percurso de areia menos movimentado que o da praia urbana.',
    },
    {
      nome: 'Rio Itanhém',
      descricao:
        'O rio que deu origem à cidade continua sendo eixo de vida e de lazer, com passeios de barco e travessias que fazem parte do cotidiano ribeirinho.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada, mas o terreno plano e a escala pequena da cidade fazem da bicicleta o transporte cotidiano — e das estradas para as praias vizinhas, o circuito de quem pedala.',

  clima:
    'Tropical úmido do litoral, quente o ano inteiro, com chuvas bem distribuídas e temperaturas amenizadas pela brisa marítima. O inverno é ameno e coincide com o começo da temporada das baleias.',
  climaTreino:
    'O calor e a umidade concentram o treino ao ar livre no começo da manhã e no fim da tarde — horários que também pegam a maré e a luz mais agradáveis na praia. No miolo do dia, sombra e ambiente coberto resolvem, com hidratação reforçada.',

  mobilidade:
    'A cidade é compacta e plana, o que torna o deslocamento a pé e de bicicleta natural. O acesso regional se faz pela BA-001, o eixo litorâneo que liga Alcobaça a Caravelas ao sul e ao Prado ao norte.',

  corridas: [
    {
      nome: 'Provas do calendário da Costa das Baleias',
      descricao:
        'A região recebe corridas de praia e provas ligadas ao calendário turístico do extremo sul baiano, com percursos planos na areia firme e na orla.',
    },
  ],
  culturaEsportiva:
    'A vida de praia e de rio coloca natação, remada e caminhada na areia no cotidiano. O futebol de areia e de campo domina o fim de semana, e o turismo de observação de baleias movimenta a cidade entre julho e novembro.',
  academias:
    'A oferta formal é compacta e concentrada no centro, complementada por profissionais que atendem a domicílio e na praia, além das estruturas de pousadas na temporada.',

  destaquesFitness: [
    'Praia urbana com faixa de areia extensa e mar calmo — pista natural de caminhada.',
    'Encontro do rio Itanhém com o mar, na Barra, para remada e stand up paddle.',
    'Temporada de baleias-jubarte entre julho e novembro na Costa das Baleias.',
    'Terreno plano e cidade compacta, que favorecem bicicleta e corrida de rua.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 110,
    onlineMax: 310,
  },

  conclusao:
    'Alcobaça tem praia extensa, rio na porta e um dos litorais mais preservados do país. Um personal trainer daqui usa a areia como equipamento e a academia como base de força — um plano que serve tanto para quem mora quanto para quem passa a temporada.',

  vizinhas: ['caravelas-ba', 'prado-ba', 'teixeira-de-freitas-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Alcobaça', url: 'https://cidades.ibge.gov.br/brasil/ba/alcobaca/panorama' },
    { nome: 'Prefeitura de Alcobaça', url: 'https://www.alcobaca.ba.gov.br/' },
    { nome: 'ICMBio — Parque Nacional Marinho dos Abrolhos', url: 'https://www.gov.br/icmbio/' },
  ],
  atualizadoEm: '2026-08-07',
};
