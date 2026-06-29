import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'crato-ce',
  nome: 'Crato',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'cratense',
  tipo: 'cidade',

  populacao: 131050,
  populacaoAno: 2022,
  idhm: 0.713,
  idhmClasse: 'alto',
  altitudeM: 442,

  resumoEconomico:
    'No sul do Ceará, o Crato integra a Região do Cariri (com Juazeiro do Norte e Barbalha). Tem economia mista de comércio, agricultura dos vales irrigados e, sobretudo, educação — é sede da URCA. O clima ameno e as nascentes da Chapada do Araripe lhe dão o apelido de "Oásis do Sertão", e a cidade abriga o Geopark Araripe (UNESCO).',

  mercado:
    'Cidade universitária com cena esportiva regional crescente, o Crato recebe eventos de corrida e ciclismo de alcance multiestadual, sustentando a demanda por academias e assessorias.',

  bairrosNobres: ['Seminário', 'Pimenta', 'Parque Granjeiro', 'Centro'],
  bairrosPopulares: ['Vila Alta', 'Barro Branco', 'Mirandão', 'Santa Luzia'],

  parques: [
    {
      nome: 'Parque Estadual Sítio Fundão',
      descricao:
        'Unidade de conservação que sedia ações de esporte e cultura, com áreas para caminhada.',
    },
    {
      nome: 'Praça Alexandre Arraes',
      descricao:
        'Espaço público que recebe eventos e atividades ao ar livre.',
    },
    {
      nome: 'Trilhas da Chapada do Araripe',
      descricao:
        'O relevo da chapada oferece trilhas para caminhada, ciclismo e treino outdoor.',
    },
  ],
  ciclovias:
    'A extensão de ciclovias ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é ameno pela Chapada do Araripe, com invernos relativamente frescos e verões quentes, e chuvas intensas no primeiro semestre.',
  climaTreino:
    'O clima mais ameno favorece os treinos ao ar livre; as chuvas de janeiro a abril pedem atenção ao planejamento.',

  mobilidade:
    'O acesso se dá pela BR-122 e pela CE-060, integrando o Crato ao eixo da região metropolitana do Cariri (Juazeiro do Norte e Barbalha).',

  corridas: [
    {
      nome: 'Desafio Entre Serras Cariri',
      descricao:
        'Evento de ciclismo e aventura que reúne atletas de vários estados, com percursos de 32 km a 92 km.',
    },
    {
      nome: 'Circuito Sesc de Corridas — Etapa Crato',
      descricao:
        'Etapa da rede nacional Sesc, com maratoninha infantil.',
    },
  ],
  culturaEsportiva:
    'O Crato é forte em esportes de aventura e ciclismo (pelo relevo da Chapada), com eventos que atraem atletas de vários estados, e o perfil universitário reforça o público jovem ativo.',
  academias:
    'A oferta reúne academias e estúdios, com grande público universitário (URCA), complementada pelas trilhas da Chapada do Araripe.',

  destaquesFitness: [
    'Clima ameno e Chapada do Araripe — cenário ideal para trilha, ciclismo e corrida.',
    'Eventos de alcance multiestadual (Desafio Entre Serras Cariri).',
    'Circuito Sesc consolidado no calendário.',
    'Cidade universitária (URCA), com público jovem.',
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
    'Oásis do Sertão e polo educacional do Cariri, o Crato une clima ameno, a Chapada do Araripe e uma cena forte de esportes de aventura. Um personal trainer ajuda a aproveitar as trilhas e provas regionais com método, num dos climas mais agradáveis do interior nordestino.',

  vizinhas: ['juazeiro-do-norte-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Crato', url: 'https://cidades.ibge.gov.br/brasil/ce/crato/panorama' },
    { nome: 'Prefeitura do Crato', url: 'https://www.crato.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
