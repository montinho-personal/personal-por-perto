import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paranagua-pr',
  nome: 'Paranaguá',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'parnanguara',
  tipo: 'cidade',

  populacao: 145829,
  populacaoAno: 2022,
  idhm: 0.750,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'Principal cidade do litoral do Paraná, Paranaguá sedia o Porto de Paranaguá — o maior porto graneleiro da América Latina, voltado à exportação de soja, milho e fertilizantes. A economia gira em torno do comércio exterior, da logística portuária e dos serviços associados, com PIB per capita elevado.',

  mercado:
    'Há presença de redes nacionais e academias locais, com mercado de musculação consolidado e cobertura de planos corporativos.',

  bairrosNobres: ['Costeira', 'Divinéia', 'Jardim Ouro Fino', 'Centro Histórico'],
  bairrosPopulares: ['Vila São Vicente', 'Vila dos Comerciários', 'Porto dos Padres', 'Parque São João'],

  parques: [
    {
      nome: 'Orla da Baía de Paranaguá',
      descricao:
        'Calçadão para caminhada, com mirantes e bancos à beira da baía.',
    },
    {
      nome: 'Espaço público da orla',
      descricao:
        'Tem pista de cerca de 3.500 m para caminhada e corrida, aparelhos de musculação, pista de skate e quadras de areia.',
    },
    {
      nome: 'Praça Portugal',
      descricao:
        'Tem academia ao ar livre, parte de um conjunto de equipamentos públicos em vários bairros.',
    },
  ],
  ciclovias:
    'A malha cicloviária está em expansão, com cerca de 15 km de ciclovia previstos na concessão da BR-277 ligando o perímetro urbano ao acesso ao porto.',

  clima:
    'O clima é subtropical úmido, sempre úmido, com chuvas o ano todo (sem estação seca).',
  climaTreino:
    'A alta umidade e o calor exigem hidratação reforçada e horários mais frescos (manhã e fim de tarde), com atenção a treinos ao ar livre em dias de chuva.',

  mobilidade:
    'O acesso principal é pela BR-277 (Curitiba–Paranaguá), via estruturante de ligação ao porto.',

  corridas: [
    {
      nome: 'Corrida e Meia Maratona do Porto',
      descricao:
        'Com provas de 5 km, 10 km e 21 km, reúne milhares de atletas e é a primeira corrida a percorrer uma faixa portuária operacional.',
    },
    {
      nome: 'Corrida do Porto',
      descricao:
        'Prova de rua consolidada no calendário do litoral, promovida no entorno portuário.',
    },
  ],
  culturaEsportiva:
    'Cidade portuária com forte adesão a corridas de rua (a Corrida do Porto está consolidada no calendário do litoral), com a orla e o centro histórico como cenário de eventos.',
  academias:
    'A oferta reúne redes e academias locais, com a orla e a baía funcionando como ponto gratuito de caminhada e treino funcional.',

  destaquesFitness: [
    'Orla e baía como point gratuito de caminhada e treino funcional ao ar livre.',
    'Calendário forte de corrida de rua (Corrida e Meia Maratona do Porto).',
    'Academias ao ar livre instaladas em praças de bairro.',
    'Clima úmido e quente, que pede foco em hidratação e ajuste de horários.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Maior porto graneleiro da América Latina, Paranaguá tem orla, centro histórico e uma corrida de rua única que cruza a área portuária. Um personal trainer ajuda a aproveitar a orla da baía com método, ajustando horários e hidratação ao clima úmido do litoral.',

  vizinhas: ['curitiba-pr', 'sao-jose-dos-pinhais-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Paranaguá', url: 'https://cidades.ibge.gov.br/brasil/pr/paranagua/panorama' },
    { nome: 'Prefeitura de Paranaguá', url: 'https://www.paranagua.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
