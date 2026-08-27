import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paulista-pe',
  nome: 'Paulista',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'paulistense',
  tipo: 'cidade',

  populacao: 342167,
  populacaoAno: 2022,
  idhm: 0.732,
  idhmClasse: 'alto',
  altitudeM: 45,

  resumoEconomico:
    'Integrante da Região Metropolitana do Recife, no litoral norte, Paulista é fortemente conurbada com Recife e Olinda. A economia se baseia em comércio e serviços, com peso do turismo de praia ao longo de cerca de 14 km de costa (Janga, Pau Amarelo, Maria Farinha), e tem histórico industrial têxtil.',

  mercado:
    'O mercado urbano é consolidado e adensado pela conurbação com Recife, com demanda forte na orla (Janga e Pau Amarelo), favorável ao treino funcional e ao outdoor.',

  bairrosNobres: ['Janga', 'Maria Farinha', 'Pau Amarelo', 'Nossa Senhora do Ó'],
  bairrosPopulares: ['Paratibe', 'Jardim Paulista', 'Maranguape', 'Mirueira'],

  parques: [
    {
      nome: 'Orla do Janga',
      descricao:
        'Calçadão à beira-mar com ciclofaixa e áreas de sombra; águas calmas, boas para famílias e treino.',
    },
    {
      nome: 'Praia de Pau Amarelo',
      descricao:
        'Praia urbana de areia larga, com piscinas naturais e o histórico Forte de Nossa Senhora dos Prazeres, apta a esportes náuticos.',
    },
    {
      nome: 'Praia de Maria Farinha',
      descricao:
        'Orla extensa no encontro do rio com o mar, com boa estrutura e ponto de partida de passeios.',
    },
  ],
  ciclovias:
    'Há ciclofaixa ao longo da orla do Janga; a extensão total da rede ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, com chuvas de outono e inverno e média em torno de 24,5 °C.',
  climaTreino:
    'O calor e a umidade altos o ano todo pedem treino no início da manhã ou no fim de tarde, com hidratação reforçada.',

  mobilidade:
    'Paulista é servida pela BR-101 (eixo norte da região metropolitana) e pela PE-015 (rodovia litorânea), em conurbação direta com Olinda e Recife.',

  corridas: [
    {
      nome: 'Corrida da Praça da Paixão de Cristo',
      descricao:
        'Prova local com 5 km, caminhada de 3 km e corrida kids, no Jardim Paulista.',
    },
    {
      nome: 'Etapas do circuito metropolitano do Recife',
      descricao:
        'A cidade recebe etapas de circuitos regionais de corrida de rua.',
    },
  ],
  culturaEsportiva:
    'Há forte cultura de praia e esportes náuticos na orla (vela, caiaque e surfe no Janga), com corridas de rua integradas ao circuito metropolitano do Recife.',
  academias:
    'A oferta reúne academias e estúdios, ampliada pela proximidade do Recife, com as praias do Janga e de Pau Amarelo como academia a céu aberto.',

  academiasProximas: [
    { nome: 'Smart Fit Janga', detalhe: 'na Av. João Fonseca de Albuquerque, no Janga' },
    { nome: 'Selfit Paulista', detalhe: 'no Paulista North Way Shopping, na PE-15' },
  ],

  destaquesFitness: [
    'Orla do Janga com calçadão e ciclofaixa — ideal para corrida e funcional outdoor.',
    'Pau Amarelo, com piscinas naturais e areia larga para treino na praia.',
    'Clima quente que exige periodização de horários e hidratação.',
    'Proximidade do Recife, que amplia oferta de academias e formação profissional.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Cidade litorânea da Grande Recife, Paulista tem orlas movimentadas como o Janga e Pau Amarelo. Um personal trainer ajuda a aproveitá-las com método, ajustando horários e hidratação ao calor litorâneo, com a estrutura do Recife logo ao lado.',

  vizinhas: ['recife-pe', 'olinda-pe', 'jaboatao-dos-guararapes-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Paulista', url: 'https://cidades.ibge.gov.br/brasil/pe/paulista/panorama' },
    { nome: 'Prefeitura de Paulista', url: 'https://www.paulista.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',

  capaArte: {
    src: '/capas-cidade/paulista-pe.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Paulista (PE) em arte que reúne treino de musculação, a orla do Janga, a praia de Maria Farinha e as piscinas naturais de Pau Amarelo — Personal por Perto',
    legenda:
      'Treino personalizado em Paulista: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
