import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aparecida-de-goiania-go',
  nome: 'Aparecida de Goiânia',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'aparecidense',
  tipo: 'cidade',

  populacao: 527796,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 783,

  resumoEconomico:
    'Segunda cidade mais populosa de Goiás, Aparecida de Goiânia é conurbada com a capital, formando uma mancha urbana contínua na região metropolitana. A economia é puxada por serviços e por uma indústria relevante, com distritos empresariais (DAIAG, DIMAG) e a Cidade Empresarial. Esse vínculo direto com Goiânia — um dos maiores polos de musculação do país — amplia o mercado fitness local.',

  mercado:
    'O mercado fitness está em expansão com o crescimento da classe média: academias de bairro, redes como a Smart Fit e estúdios de funcional e crossfit, fortalecidos pela conexão com a capital e por sua forte cultura de musculação e estética.',

  bairrosNobres: ['Setor Garavelo', 'Cidade Vera Cruz', 'Jardim Buriti Sereno', 'Mansões Paraíso'],
  bairrosPopulares: ['Cidade Satélite São Luiz', 'Parque Trindade', 'Jardim Tiradentes', 'Setor Independência'],

  parques: [
    {
      nome: 'Parque da Família',
      descricao:
        'Tem pista de caminhada, duas academias ao ar livre e ciclovia — um dos espaços públicos mais usados para treino na cidade.',
    },
    {
      nome: 'Parque da Criança',
      descricao:
        'Com cerca de 126 mil m², reúne pista, academia ao ar livre, quadras e até pista de BMX, atendendo diferentes públicos.',
    },
    {
      nome: 'Praça José Bonifácio',
      descricao:
        'Tem pista de cerca de 477 m e academia da terceira idade, sendo um ponto de caminhada de bairro.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia integrados a parques, como o Parque da Família, ampliando aos poucos a mobilidade ativa.',

  clima:
    'O clima é tropical de savana, com média em torno de 21 °C e chuvas concentradas entre novembro e março.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo; no período seco (maio a setembro), vale atenção à baixa umidade e ao calor do meio-dia, com boa hidratação.',

  mobilidade:
    'Cortada pela BR-153 e pela GO-040, Aparecida de Goiânia é integrada ao transporte da região metropolitana de Goiânia (incluindo o Eixo Anhanguera), o que facilita o deslocamento entre as duas cidades.',

  corridas: [
    {
      nome: 'Aparecida Correndo Pela Vida',
      descricao:
        'Corrida de 5 km e 10 km com foco em saúde e bem-estar, parte do calendário esportivo local.',
    },
    {
      nome: 'Run Beer Brasil (etapa Aparecida)',
      descricao:
        'Corrida temática de 5 km no Aparecida Shopping, que reforça a cena de corrida de rua da cidade.',
    },
  ],
  culturaEsportiva:
    'Aparecida de Goiânia tem forte adesão a corridas de rua e uso de praças e academias ao ar livre, integrada ao circuito esportivo da região metropolitana de Goiânia — uma das praças de musculação mais fortes do país.',
  academias:
    'A oferta reúne academias de bairro, redes como a Smart Fit e estúdios de funcional e crossfit, com a proximidade de Goiânia ampliando opções e referências de treino.',

  destaquesFitness: [
    'Boa rede de parques com pista e academia ao ar livre.',
    'Calendário ativo de corridas de rua.',
    'Clima favorável ao treino ao ar livre quase o ano todo.',
    'Conurbação com Goiânia, que amplia mercado e cultura de musculação.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Vizinha de uma das capitais mais "fitness" do Brasil, Aparecida de Goiânia tem mercado em expansão e boa estrutura de parques. Um personal trainer ajuda a aproveitar esse ambiente — e a proximidade de Goiânia — com um plano de treino sob medida.',

  vizinhas: ['goiania-go', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Aparecida de Goiânia', url: 'https://cidades.ibge.gov.br/brasil/go/aparecida-de-goiania/panorama' },
    { nome: 'Prefeitura de Aparecida de Goiânia', url: 'https://www.aparecida.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-29',
  capaArte: {
    src: '/capas-cidade/aparecida-de-goiania-go.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Aparecida de Goiânia (GO) em arte com a paisagem urbana da cidade — o viaduto estaiado, os prédios em crescimento e o mapa de Goiás — Personal por Perto',
    legenda:
      'Treino personalizado em Aparecida de Goiânia: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
