import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'delfim-moreira-mg',
  nome: 'Delfim Moreira',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'delfinense',
  tipo: 'cidade',

  populacao: 7952,
  populacaoAno: 2022,
  idhm: 0.669,
  idhmClasse: 'médio',
  altitudeM: 1315,

  resumoEconomico:
    'Delfim Moreira fica no extremo sul de Minas Gerais, na Serra da Mantiqueira, na divisa com São Paulo e perto de Campos do Jordão. Pertence à microrregião de Itajubá e foi, entre as décadas de 1940 e 1970, um importante polo agrícola do estado, com destaque para a produção de marmelo (chegou a sediar uma fábrica da Cica para goiabada e marmelada), batata e leite. A pecuária leiteira segue como base econômica, sustentada por pequenos produtores que vendem a laticínios da região, ao lado da lavoura de batata e hortaliças. Nos últimos anos, o turismo rural e o ecoturismo ligado às cachoeiras, trilhas e ao clima frio de montanha vêm ganhando peso na economia local.',

  mercado:
    'Delfim Moreira é um município pequeno e majoritariamente rural — a maior parte dos cerca de 8 mil moradores vive espalhada por dezenas de bairros rurais, com a área urbana concentrada no Centro. O mercado de personal trainers é, por isso, bastante restrito, e a procura tende a vir de quem busca treino adaptado ao frio intenso, de produtores rurais e comerciantes ligados ao turismo, e de visitantes de pousadas e chalés que querem manter a rotina de treino durante a estadia na serra.',

  bairrosNobres: ['Centro', 'Charco', 'Estiva', 'Rio Claro'],
  bairrosPopulares: ['Barreiro', 'Sengó', 'Quilombo', 'São Bernardo'],

  parques: [
    {
      nome: 'Cachoeira do Itagyba',
      descricao:
        'A cerca de 1 km do Centro, reúne duas quedas d\'água de aproximadamente 40 e 20 metros e um grande poço para banho — ponto de referência para caminhada leve e contato com a natureza perto da área urbana.',
    },
    {
      nome: 'Cachoeira Ninho da Águia',
      descricao:
        'Uma das cachoeiras mais procuradas da região, às margens da rodovia que liga Delfim Moreira a Itajubá, com trilhas, poços e estrutura de apoio (lanchonete e estacionamento) para quem combina caminhada e lazer ao ar livre.',
    },
    {
      nome: 'Trilha do Pico do Selado e entorno do Pico dos Marins',
      descricao:
        'Trilha de cerca de 8 km rumo ao Pico do Selado, e nas imediações o Pico dos Marins (2.421 m), na divisa entre Minas Gerais e São Paulo — percursos de montanha exigentes, usados por praticantes de trekking e trail da região.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária formal registrada; o pedal e a corrida acontecem nas vias do Centro e nas estradas rurais e de serra que cortam o município, de relevo bastante acidentado.',

  clima:
    'O clima é tropical de altitude (Cwb, na classificação de Köppen), com inverno frio e seco e verão ameno e chuvoso. Delfim Moreira é uma das cidades mais frias de Minas Gerais: a altitude média de cerca de 1.315 m, que passa de 1.700 m em bairros rurais como o Charco, combinada a céu limpo e ar seco, favorece geadas frequentes e temperaturas negativas no inverno — a região do Charco já registrou -5,7 °C em estações oficiais, com estações particulares na área rural chegando a marcas ainda mais baixas.',
  climaTreino:
    'O frio intenso de altitude pede aquecimento mais longo, roupas em camadas e cuidado redobrado nas primeiras horas da manhã, quando o risco de geada é maior; por outro lado, o clima ameno no restante do dia e a altitude favorecem o treino de resistência ao ar livre, sobretudo fora do pico do inverno.',

  mobilidade:
    'O acesso ao município é feito pela BR-459 e pela MG-350, que liga Delfim Moreira a Itajubá, além da AMG-1915; a topografia de serra torna o trajeto sinuoso e o deslocamento interno depende quase totalmente de veículo próprio, dada a extensão da zona rural e a ausência de transporte coletivo urbano estruturado.',

  corridas: [
    {
      nome: 'Corrida de 10 km de Delfim Moreira',
      descricao:
        'Prova de rua organizada pela Prefeitura, com largada na Praça de Esportes e entrega de medalha de finisher aos participantes.',
    },
    {
      nome: 'Olimpíadas Delfinense',
      descricao:
        'Evento poliesportivo municipal promovido pela Secretaria de Turismo, Cultura, Esporte e Lazer, que inclui modalidades como passeio ciclístico ao lado de outras disputas esportivas locais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno de eventos organizados pela Prefeitura, como a corrida de rua e as Olimpíadas Delfinense, e do uso informal das estradas rurais e trilhas de serra para caminhada, corrida e pedal, num cenário de montanha que também atrai praticantes de trekking em busca do Pico do Selado e do Pico dos Marins.',
  academias:
    'A oferta de academias é modesta e concentrada no Centro, compatível com o pequeno porte do município; parte de quem busca treino mais estruturado recorre a cidades vizinhas maiores, como Itajubá.',

  destaquesFitness: [
    'Uma das cidades mais frias de Minas Gerais, com geadas frequentes e temperaturas negativas no inverno, na Serra da Mantiqueira.',
    'Cachoeiras do Itagyba e Ninho da Águia como pontos de caminhada e contato com a natureza perto do Centro.',
    'Trilhas de montanha exigentes, como o Pico do Selado e o entorno do Pico dos Marins (2.421 m), na divisa com São Paulo.',
    'Economia de base agropecuária (leite, batata) somada a um turismo rural crescente, ligado ao frio e às paisagens de serra.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Pequena, fria e cercada pela Serra da Mantiqueira, Delfim Moreira exige um treino adaptado às baixas temperaturas de altitude e tira proveito das cachoeiras e trilhas do entorno. Um personal trainer ajuda a organizar essa rotina com segurança, respeitando o frio intenso do inverno e aproveitando o cenário de montanha ao longo do ano.',

  vizinhas: ['itajuba-mg', 'pouso-alegre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Delfim Moreira', url: 'https://cidades.ibge.gov.br/brasil/mg/delfim-moreira/panorama' },
    { nome: 'Prefeitura de Delfim Moreira', url: 'https://www.delfimmoreira.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
