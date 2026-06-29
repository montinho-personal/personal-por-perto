import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caucaia-ce',
  nome: 'Caucaia',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'caucaiense',
  tipo: 'cidade',

  populacao: 355679,
  populacaoAno: 2022,
  idhm: 0.682,
  idhmClasse: 'médio',
  altitudeM: 29,

  resumoEconomico:
    'Segunda maior cidade do Ceará e integrante da Região Metropolitana de Fortaleza, Caucaia tem a segunda maior economia do estado, puxada pela indústria ligada ao Complexo Industrial e Portuário do Pecém (siderurgia, ZPE e energia), além de forte comércio e serviços. O turismo é destaque na Praia do Cumbuco, meca internacional do kitesurf.',

  mercado:
    'O mercado é pulverizado em bairros populosos da Jurema, com academias de bairro, enquanto o eixo litorâneo do Cumbuco, Tabuba e Icaraí atende turismo e veraneio, com demanda por treino funcional, kitesurf e atividades de praia.',

  bairrosNobres: ['Cumbuco', 'Tabuba', 'Icaraí', 'Iparana'],
  bairrosPopulares: ['Jurema', 'Parque Albano', 'Nova Metrópole', 'Parque Potira'],

  parques: [
    {
      nome: 'Praia do Cumbuco',
      descricao:
        'Cerca de 4 km de orla com dunas e lagoas; meca do kitesurf e do windsurf e ideal para corrida e treino funcional na areia.',
    },
    {
      nome: 'Praia de Icaraí',
      descricao:
        'Orla urbana de fácil acesso para caminhada e esportes de praia.',
    },
    {
      nome: 'Praia da Tabuba',
      descricao:
        'Orla com boa infraestrutura de lazer, usada para atividade ao ar livre.',
    },
  ],
  ciclovias:
    'A extensão e o traçado da malha cicloviária ainda não são divulgados em fonte oficial.',

  clima:
    'O clima é tropical quente e semiárido ameno, com ventos fortes e constantes no litoral do Cumbuco.',
  climaTreino:
    'O calor intenso e o sol forte pedem treino cedo de manhã ou no fim de tarde, com hidratação; o vento litorâneo favorece os esportes ao ar livre.',

  mobilidade:
    'Caucaia é servida pela BR-222 e pela CE-085 (Rodovia Estruturante), eixos de ligação com Fortaleza e o litoral oeste rumo ao Pecém.',

  corridas: [
    {
      nome: 'Bota Pra Correr — Etapa Cumbuco',
      descricao:
        'Festival nacional de corrida em cenário de dunas, lagoas e vento, no Cumbuco.',
    },
    {
      nome: 'Eventos de turismo esportivo no Cumbuco',
      descricao:
        'Provas ligadas ao calendário de turismo esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Caucaia tem forte cultura de esportes de vento e praia (kitesurf e windsurf de nível internacional no Cumbuco) e um calendário emergente de corridas de turismo esportivo.',
  academias:
    'A oferta reúne academias de bairro na região da Jurema e serviços voltados ao turismo no eixo litorâneo, com as praias funcionando como academia a céu aberto.',

  destaquesFitness: [
    'Cumbuco como hub internacional de kitesurf e windsurf.',
    'Orla extensa (Cumbuco, Icaraí e Tabuba) para corrida e funcional na areia.',
    'Demanda crescente de turismo esportivo.',
    'Rede de academias de bairro na região da Jurema.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Segunda maior do Ceará e meca do kitesurf no Cumbuco, Caucaia une indústria do Pecém e litoral vibrante. Um personal trainer ajuda a aproveitar a orla com método, ajustando horários e hidratação ao calor e ao vento do litoral.',

  vizinhas: ['fortaleza-ce', 'sobral-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Caucaia', url: 'https://cidades.ibge.gov.br/brasil/ce/caucaia/panorama' },
    { nome: 'Prefeitura de Caucaia', url: 'https://www.caucaia.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
