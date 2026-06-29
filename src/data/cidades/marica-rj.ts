import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'marica-rj',
  nome: 'Maricá',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'maricaense',
  tipo: 'cidade',

  populacao: 197300,
  populacaoAno: 2022,
  idhm: 0.765,
  idhmClasse: 'alto',

  resumoEconomico:
    'Maior beneficiária de royalties do petróleo do pré-sal da Bacia de Santos, Maricá viveu uma explosão econômica e populacional — teve o maior crescimento do estado entre 2010 e 2022. Mantém um fundo soberano municipal e uma renda básica em moeda social (Mumbuca), e integra a Região Metropolitana do Rio, com sistema lagunar e praias oceânicas em forte expansão imobiliária.',

  mercado:
    'O crescimento acelerado puxa o mercado fitness junto com o boom imobiliário; a prefeitura investe em arenas e "Vilas do Esporte" com academias ao ar livre, ampliando a base de praticantes e a demanda por personal trainers.',

  bairrosNobres: ['Itaipuaçu', 'Centro', 'Ponta Negra', 'São José'],
  bairrosPopulares: ['Inoã', 'Calaboca', 'Cassorotiba', 'Barroco'],

  parques: [
    {
      nome: 'Orla de Itaipuaçu (Av. Beira Mar)',
      descricao:
        'Tem pista exclusiva de atletismo, ciclovia e academia ao ar livre — o principal ponto de corrida e caminhada da cidade.',
    },
    {
      nome: 'Vila do Esporte (São Bento da Lagoa)',
      descricao:
        'Em Itaipuaçu, reúne quadra poliesportiva, pista de caminhada, campo society e academia ao ar livre.',
    },
    {
      nome: 'Parque Ecológico do Parque Nanci',
      descricao:
        'Área verde usada como sede de corridas, incluindo etapas do Maricá Run.',
    },
  ],
  ciclovias:
    'A malha cicloviária tem cerca de 42 km, com eixos ligando Ponta Negra ao Centro e São José ao Centro.',

  clima:
    'O clima é tropical litorâneo, com média anual em torno de 23,4 °C e temperaturas que costumam variar de 19 °C a 31 °C.',
  climaTreino:
    'O calor e a umidade favorecem treinos cedo de manhã ou no fim de tarde, com hidratação e proteção solar na orla.',

  mobilidade:
    'O acesso principal é pela RJ-106 (Rodovia Amaral Peixoto), que liga a Niterói, São Gonçalo e Saquarema, em processo de duplicação em alguns trechos.',

  corridas: [
    {
      nome: 'Meia Maratona Internacional de Maricá',
      descricao:
        'Criada em 2025, com provas de 5 km, 10 km e 21 km e prova infantil, reunindo milhares de participantes.',
    },
    {
      nome: 'Maricá Run',
      descricao:
        'Etapas no Parque Nanci (incluindo edição de inverno), com provas de 5 km de corrida e caminhada.',
    },
  ],
  culturaEsportiva:
    'A forte aposta pública em esporte e lazer, financiada pelos royalties, revitalizou orlas e estimula corrida, ciclismo e esportes ao ar livre por toda a cidade.',
  academias:
    'A oferta de academias cresce com o boom imobiliário, complementada pelas Vilas do Esporte e pela orla equipada de Itaipuaçu.',

  destaquesFitness: [
    'Orla de Itaipuaçu com pista de atletismo dedicada e academia ao ar livre.',
    'Vilas do Esporte sendo implantadas por distrito.',
    'Calendário próprio de corridas (Meia Maratona Internacional, Maricá Run).',
    'Malha cicloviária de cerca de 42 km integrando bairros.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade que mais cresce no Rio, Maricá investe pesado em esporte público, com orlas equipadas e calendário próprio de corridas. Um personal trainer ajuda a aproveitar a orla de Itaipuaçu e as Vilas do Esporte com método, ajustando horários ao calor litorâneo.',

  vizinhas: ['niteroi-rj', 'rio-de-janeiro-rj', 'cabo-frio-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Maricá', url: 'https://cidades.ibge.gov.br/brasil/rj/marica/panorama' },
    { nome: 'Prefeitura de Maricá', url: 'https://www.marica.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
