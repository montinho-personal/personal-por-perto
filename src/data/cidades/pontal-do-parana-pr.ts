import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pontal-do-parana-pr',
  nome: 'Pontal do Paraná',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'pontalense',
  tipo: 'cidade',

  populacao: 30425,
  populacaoAno: 2022,
  idhm: 0.738,
  idhmClasse: 'alto',

  resumoEconomico:
    'Pontal do Paraná fica na entrada da Baía de Paranaguá, no litoral paranaense, ao lado de Matinhos e Paranaguá. A economia gira em torno do turismo de veraneio ao longo de cerca de 23 km de orla e dezenas de balneários, do comércio sazonal, da pesca artesanal (que responde pela maior parte da produção pesqueira do município) e da proximidade com o Porto de Paranaguá, um dos maiores do país. Pontal do Sul também é o principal ponto de embarque para a Ilha do Mel. O Censo 2022 registrou a cidade entre os municípios brasileiros com maior taxa de crescimento populacional, reflexo da atração de moradores fixos e de segunda residência.',

  mercado:
    'O mercado fitness de Pontal do Paraná é sazonal e concentrado nos balneários mais movimentados, como Praia de Leste, Ipanema e Shangri-lá, onde funcionam academias de pequeno e médio porte. A população flutua bastante entre a baixa temporada e o verão, quando o número de pessoas na cidade multiplica com o turismo de veraneio, aumentando a procura por treino ao ar livre, funcional na praia e acompanhamento personalizado por temporada.',

  bairrosNobres: ['Praia de Leste', 'Ipanema', 'Shangri-lá', 'Pontal do Sul'],
  bairrosPopulares: ['Balneário Grajaú', 'Colônia Nova', 'Vila Nova', 'Santa Terezinha'],

  parques: [
    {
      nome: 'Orla de Pontal do Sul',
      descricao:
        'Faixa de praia próxima à Baía de Paranaguá e ao terminal de embarque para a Ilha do Mel, usada para caminhada, corrida e treino ao ar livre com vista para as embarcações e marinas da região.',
    },
    {
      nome: 'Praia de Shangri-lá',
      descricao:
        'Balneário com ondas mais fortes e faixa de areia larga, procurado por surfistas e pescadores; a área preservada de restinga no entorno também serve de cenário para atividades ao ar livre.',
    },
    {
      nome: 'Orla de Ipanema e Praia de Leste',
      descricao:
        'Trecho mais urbanizado do litoral do município, com calçadão, comércio e boa estrutura, concentrando grande parte do movimento de caminhada, corrida e treino funcional na praia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é limitada e concentrada em trechos pontuais da orla; as obras de duplicação da PR-412 entre Matinhos e Pontal do Paraná preveem vias marginais e melhorias para pedestres e ciclistas ao longo do litoral.',

  clima:
    'O clima é subtropical úmido (Cfa), sem estação seca definida, com verões quentes e invernos amenos. A temperatura média anual gira em torno de 21 °C, variando de aproximadamente 15 °C a 29 °C ao longo do ano, com chuvas distribuídas em todas as estações.',
  climaTreino:
    'A umidade constante e o calor do verão pedem hidratação reforçada e treinos ao ar livre nos horários mais frescos, de manhã cedo ou fim de tarde; o inverno mais ameno costuma favorecer o treino na praia e na orla durante boa parte do dia.',

  mobilidade:
    'O acesso à cidade se dá pela PR-407, que liga a BR-277 e Paranaguá ao litoral, e pela PR-412, que corta os balneários e conecta Pontal do Paraná a Matinhos. Ambas as rodovias têm passado por obras de duplicação e requalificação para reduzir congestionamentos, especialmente na alta temporada de verão. O transporte coletivo é feito por ônibus, e Pontal do Sul concentra o embarque de barcos para a Ilha do Mel.',

  corridas: [
    {
      nome: 'Meia Maratona Pelo Autismo',
      descricao:
        'Prova de rua realizada em Pontal do Paraná com percursos de 5 km, 10 km e 21 km, além de caminhada solidária e corrida kids, com largada próxima à orla.',
    },
    {
      nome: 'Desafio das Areias de Pontal do Paraná',
      descricao:
        'Evento de corrida de rua com provas de 5 km e 10 km, realizado em comemoração ao aniversário do município, com percurso passando por uma das praias da cidade.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Pontal do Paraná gira em torno da praia: surf em pontos como Shangri-lá e Ipanema, esportes aquáticos, pesca esportiva e caminhada ou corrida na orla. O calendário de provas de rua e trail aproveita o cenário litorâneo, e o forte movimento turístico de verão intensifica a procura por atividade física ao ar livre.',
  academias:
    'A oferta de academias é formada por estúdios e academias de pequeno e médio porte espalhados pelos balneários mais populosos, como Praia de Leste, Ipanema e Shangri-lá, muitas delas com funcionamento adaptado à sazonalidade do turismo.',

  destaquesFitness: [
    'Cerca de 23 km de orla e dezenas de balneários, com destaque para Praia de Leste, Ipanema, Shangri-lá e Pontal do Sul.',
    'Cultura de surf e esportes aquáticos, com pontos de ondas reconhecidos em Shangri-lá e Ipanema.',
    'Pontal do Sul como porta de embarque para a Ilha do Mel e proximidade com o Porto de Paranaguá.',
    'Forte sazonalidade populacional entre baixa temporada e o verão, que molda a demanda por treino ao ar livre e acompanhamento personalizado.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 280,
    mensalMax: 800,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade litorânea marcada pela praia, pelo surf e pela forte variação entre baixa e alta temporada, Pontal do Paraná oferece um cenário natural favorável ao treino ao ar livre ao longo de boa parte do ano. Um personal trainer ajuda a aproveitar a orla e os balneários com segurança, adaptando os treinos ao calor e à umidade do litoral e mantendo a constância mesmo com a rotina sazonal da cidade.',

  vizinhas: ['paranagua-pr', 'guaratuba-pr', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Pontal do Paraná', url: 'https://cidades.ibge.gov.br/brasil/pr/pontal-do-parana/panorama' },
    { nome: 'Prefeitura de Pontal do Paraná', url: 'https://www.pontaldoparana.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
