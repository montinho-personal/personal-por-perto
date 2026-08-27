import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'americana-sp',
  nome: 'Americana',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'americanense',
  tipo: 'cidade',

  populacao: 237240,
  populacaoAno: 2022,
  idhm: 0.811,
  idhmClasse: 'muito alto',
  altitudeM: 615,

  resumoEconomico:
    'Integrante da Região Metropolitana de Campinas, Americana é um dos principais polos têxteis do Brasil — a região responde por boa parte da produção nacional de tecidos. Tem base industrial diversificada (metalurgia e tecnologia) favorecida pela posição às margens da Anhanguera e um PIB per capita elevado.',

  mercado:
    'Cidade de alta renda e forte cultura de qualidade de vida, Americana tem boa densidade de academias e estúdios, com demanda aquecida por personal e treino ao ar livre nos parques e na ciclovia da Avenida Brasil.',

  bairrosNobres: ['Jardim Ipiranga', 'Jardim São Paulo', 'Cidade Jardim', 'Nova Americana'],
  bairrosPopulares: ['São Vito', 'Zanaga', 'Vila Mathiensen', 'Vila Carioba'],

  parques: [
    {
      nome: 'Parque Ecológico Cid Almeida Franco',
      descricao:
        'Tem pista de caminhada pavimentada de cerca de 1,2 km, academia ao ar livre, lagos e trilhas.',
    },
    {
      nome: 'Jardim Botânico Prefeito Carrol Meneghel',
      descricao:
        'Cerca de 85 mil m² com academia ao ar livre, contíguo ao Parque Ecológico, formando um conjunto verde de cerca de 210 mil m².',
    },
    {
      nome: 'Represa de Salto Grande',
      descricao:
        'Área de lazer e esportes aquáticos, usada para caminhada e corrida no entorno.',
    },
  ],
  ciclovias:
    'A ciclovia da Avenida Brasil tem cerca de 3,3 km e é muito usada por corredores e ciclistas.',

  clima:
    'O clima é tropical de altitude, com verões chuvosos e quentes e invernos secos, com baixa umidade à tarde.',
  climaTreino:
    'No verão, vale treinar cedo ou no fim de tarde; no inverno seco, a atenção deve ser à hidratação por causa da baixa umidade.',

  mobilidade:
    'Americana é cortada pelas rodovias Anhanguera (SP-330) e Luiz de Queiroz (SP-304), com acesso fácil a Campinas.',

  corridas: [
    {
      nome: 'Maratona de Americana',
      descricao:
        'Provas de 7 km, 14 km, 21 km e 42 km, com largada no Centro Cívico.',
    },
    {
      nome: 'Circuito de corridas de rua',
      descricao:
        'Agenda contínua de provas de rua que integra o calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Americana tem tradição de corrida de rua e uso intenso de parques e ciclovias; é uma cidade arborizada, com forte apelo a atividade ao ar livre.',
  academias:
    'A oferta reúne academias e estúdios, com público de IDHM muito alto, complementada pelo conjunto Parque Ecológico/Jardim Botânico e pela ciclovia da Avenida Brasil.',

  academiasProximas: [
    { nome: 'Smart Fit Americana', detalhe: 'na Av. Brasil' },
    { nome: 'Panobianco Americana', detalhe: 'na Av. Campos Sales, no Jardim Girassol' },
    { nome: 'Panobianco Zanaga' },
  ],

  destaquesFitness: [
    'Avenida Brasil como corredor urbano de corrida e ciclismo.',
    'Conjunto Parque Ecológico + Jardim Botânico como maior área verde para treino.',
    'Alta renda e mercado receptivo a personal e treino premium.',
    'Represa de Salto Grande para esportes aquáticos e outdoor.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Polo têxtil de alta renda na RM de Campinas, Americana tem ótimas áreas verdes e ciclovia consolidada. Um personal trainer ajuda a aproveitar o Parque Ecológico e a Avenida Brasil com método, ajustando os horários ao clima de altitude.',

  vizinhas: ['campinas-sp', 'limeira-sp'],

  capaArte: {
    src: '/capas-cidade/americana-sp.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Americana (SP) em arte quadrada com o casarão do Museu Municipal, o pôr do sol na Represa de Salto Grande e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Americana: disciplina, foco e resultado com acompanhamento profissional na região metropolitana de Campinas.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Americana', url: 'https://cidades.ibge.gov.br/brasil/sp/americana/panorama' },
    { nome: 'Prefeitura de Americana', url: 'https://www.americana.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
};
