import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'luis-correia-pi',
  nome: 'Luís Correia',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'luiscorreense',
  tipo: 'cidade',

  populacao: 30641,
  populacaoAno: 2022,
  idhm: 0.541,
  idhmClasse: 'baixo',
  pibPerCapita: 15071,
  pibPerCapitaAno: 2023,
  altitudeM: 5,

  resumoEconomico:
    'Uma das quatro cidades litorâneas do Piauí, Luís Correia tem 30.641 habitantes (Censo 2022) em 1.074 km² e concentra a maior parte da faixa de praia do estado: são 46 km de litoral, do Coqueiro e da Atalaia até a Praia de Macapá, na Ponta do Anel. O município abriga parte da APA Delta do Parnaíba, criada em 1996 com 313.800 hectares, e vive de pesca, comércio e de um turismo que cresce puxado pela proximidade com Parnaíba, a cerca de 10 km.',

  mercado:
    'O mercado de personal trainer acompanha a sazonalidade do litoral: cresce na alta temporada, com hóspedes de pousadas, e se sustenta o resto do ano com moradores e trabalhadores do turismo. O atendimento acontece na areia, na orla e a domicílio — a oferta de academia formal é pequena e concentrada no centro e na Atalaia.',

  bairrosNobres: ['Centro', 'Praia de Atalaia', 'Coqueiro', 'Maramar'],
  bairrosPopulares: ['Alto da Boa Vista', 'São José', 'Cohab', 'Zona Rural'],

  parques: [
    {
      nome: 'Praia de Atalaia',
      descricao:
        'Também conhecida como praia de Amarração, é o cartão-postal e a praia mais movimentada do município — faixa de areia extensa e a melhor pista natural de caminhada da cidade.',
    },
    {
      nome: 'Praia do Coqueiro',
      descricao:
        'Uma das mais estruturadas do litoral piauiense, com coqueiros na orla, mar próprio para banho e boa oferta de bares e restaurantes.',
    },
    {
      nome: 'Praia de Macapá',
      descricao:
        'Na Ponta do Anel, é conhecida pelos ventos fortes que a tornaram destino de kitesurf e de outros esportes de vela.',
    },
    {
      nome: 'Lençóis Piauienses',
      descricao:
        'A cerca de 15 km do centro, na divisa com Parnaíba, o campo de dunas de areia branca guarda lagoas de água cristalina — caminhar na areia fofa das dunas é um dos estímulos mais pesados que existem para pernas.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada, mas o terreno plano faz da bicicleta o transporte cotidiano, e a estrada que liga as praias ao centro e a Parnaíba é o percurso preferido de quem pedala.',

  clima:
    'Tropical litorâneo, quente o ano inteiro, com chuvas concentradas no primeiro semestre e ventos fortes na segunda metade do ano — os mesmos que fazem a fama de Macapá entre os velejadores.',
  climaTreino:
    'O calor e a insolação forte concentram o treino ao ar livre no começo da manhã e no fim da tarde, com hidratação e proteção solar levadas a sério. A brisa constante ajuda no conforto térmico da orla, mas engana quanto à intensidade do sol.',

  mobilidade:
    'A cidade é plana e compacta. O acesso regional se faz pela PI-116 e pela ligação com Parnaíba, a cerca de 10 km — Teresina fica a 338 km, pela BR-343 e depois pela PI-315.',

  corridas: [
    {
      nome: 'Provas de praia do litoral piauiense',
      descricao:
        'O calendário regional reúne corridas de praia e provas ligadas à temporada turística, com percursos planos na areia firme da maré baixa.',
    },
  ],
  culturaEsportiva:
    'A vida litorânea coloca natação, caminhada na areia e esportes de vela no cotidiano — o kitesurf de Macapá é o mais visível deles. O futebol de areia domina o fim de semana e a pesca artesanal segue estruturando a rotina de boa parte das comunidades.',
  academias:
    'A oferta formal é compacta, concentrada no centro e no eixo da Atalaia, complementada pelas estruturas de pousadas na temporada e por profissionais que atendem a domicílio e na praia.',

  destaquesFitness: [
    '46 km de litoral, com areia firme na maré baixa para caminhada e corrida.',
    'Dunas dos Lençóis Piauienses a cerca de 15 km — areia fofa e alto gasto energético.',
    'Ventos de Macapá, que sustentam kitesurf e esportes de vela o ano todo.',
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
    'Com 46 quilômetros de praia e um campo de dunas no quintal, Luís Correia entrega de graça o que academia nenhuma reproduz. Um personal trainer daqui usa a areia como equipamento e a musculação como base de força — para que a caminhada na duna não vire lesão no dia seguinte.',

  vizinhas: ['parnaiba-pi', 'piripiri-pi', 'teresina-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Luís Correia', url: 'https://www.ibge.gov.br/cidades-e-estados/pi/luis-correia.html' },
    { nome: 'Prefeitura de Luís Correia', url: 'https://www.luiscorreia.pi.gov.br/' },
    { nome: 'ICMBio — APA Delta do Parnaíba', url: 'https://www.gov.br/icmbio/' },
  ],
  atualizadoEm: '2026-08-05',
};
