import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'currais-novos-rn',
  nome: 'Currais Novos',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'currais-novense',
  tipo: 'cidade',

  populacao: 41318,
  populacaoAno: 2022,
  idhm: 0.691,
  idhmClasse: 'médio',
  altitudeM: 445,

  resumoEconomico:
    'Principal porta de entrada do Seridó potiguar pela BR-226, Currais Novos é conhecida como "Capital do Doce" pela tradição em doces caseiros e tem na mineração de scheelita uma marca histórica — a Mina Brejuí, a maior mina de scheelita da América do Sul, ergueu boa parte da cidade no século XX e hoje é parque temático e geossítio do Seridó Geoparque Mundial da UNESCO. A economia atual combina comércio e serviços que atendem toda a microrregião, pecuária e laticínios típicos do Seridó, como o queijo de coalho e o queijo de manteiga, além de um turismo de natureza em alta.',

  mercado:
    'Como cidade-polo de uma fatia do Seridó, Currais Novos concentra renda, comércio e serviços que sustentam uma demanda por personal trainers maior do que o porte do município sugeriria. A rede de academias de musculação e estúdios de funcional, somada a uma cena de corrida de rua e de esportes de aventura ligada às serras e cânions da região, abre espaço para profissionais que oferecem acompanhamento presencial e online a moradores e a quem vem treinar das cidades vizinhas.',

  bairrosNobres: ['Centro', 'Manoel Salustino', 'Silvio Bezerra de Melo', 'Walfredo Galvão'],
  bairrosPopulares: ['Antônio Rafael', 'Parque das Pedras', 'Paizinho Maria', 'Alto de Santa Rita'],

  parques: [
    {
      nome: 'Parque Temático da Mina Brejuí',
      descricao:
        'Complexo da antiga maior mina de scheelita da América do Sul, hoje geossítio do Seridó Geoparque Mundial da UNESCO, com museu mineral, memorial e galerias desativadas. O entorno e suas trilhas são usados por quem combina caminhada e visita ao patrimônio.',
    },
    {
      nome: 'Pico do Totoró',
      descricao:
        'Formação rochosa que se ergue na zona rural de Currais Novos, com o Açude do Totoró ao pé. É um dos cartões-postais da cidade e ponto de prática de trilha, escalada e rapel, atraindo praticantes de esportes de aventura.',
    },
    {
      nome: 'Morro do Cruzeiro',
      descricao:
        'Mirante religioso com vista panorâmica da cidade e do Seridó, geossítio da região. A subida é procurada por caminhantes e por quem busca um treino com ganho de altitude perto do Centro.',
    },
    {
      nome: 'Cânions dos Apertados',
      descricao:
        'Conjunto de cânions esculpidos pelo rio na zona rural, geossítio do Seridó Geoparque, cenário de caminhadas e atividades de ecoturismo nos arredores de Currais Novos.',
    },
  ],
  ciclovias:
    'A cidade tem estrutura cicloviária limitada, concentrada em avenidas centrais, e o pedal de lazer e treino acontece sobretudo em vias urbanas de menor movimento e em estradas vicinais rumo às serras e açudes da região.',

  clima:
    'O clima é semiárido quente e seco, típico do Seridó potiguar e do bioma Caatinga, com sol forte o ano inteiro, baixa umidade do ar e temperaturas que costumam superar os 35 °C nos meses mais quentes. As chuvas se concentram no primeiro semestre, e a altitude em torno de 445 m ameniza um pouco as noites.',
  climaTreino:
    'O calor intenso e a baixa umidade pedem treino logo cedo de manhã ou após o pôr do sol, com hidratação reforçada e proteção solar. Atividades ao ar livre no meio do dia devem ser evitadas, e a aclimatação é importante para quem chega de regiões mais úmidas ou frias.',

  mobilidade:
    'O deslocamento é predominantemente por carro, moto e ônibus, com a BR-226 como principal eixo de ligação de Currais Novos a Natal, a Caicó e ao restante do Seridó. O tamanho compacto da cidade facilita trajetos curtos a pé ou de bicicleta dentro da malha urbana.',

  corridas: [
    {
      nome: 'Circuito Mandacaru de Enduro a Pé',
      descricao:
        'Prova de enduro a pé que explora trilhas e o relevo do Seridó nos arredores de Currais Novos, voltada a quem gosta de correr e caminhar em meio à Caatinga e às serras da região.',
    },
    {
      nome: 'Pé na Trilha',
      descricao:
        'Evento anual de caminhada e trilha que percorre belezas naturais do Seridó currais-novense, reunindo praticantes locais e de cidades vizinhas em percursos pelo campo.',
    },
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'Provas de rua organizadas ao longo do ano em datas comemorativas e festivas da cidade, com percursos curtos partindo de áreas centrais e movimentando os corredores amadores do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Currais Novos é fortemente marcada pelo ecoturismo e pelos esportes de aventura — trilha, escalada e rapel em pontos como o Pico do Totoró e os Cânions dos Apertados —, somados a uma cena de corrida e caminhada que cresce com eventos como o Circuito Mandacaru e o Pé na Trilha. O futebol amador e o ciclismo também têm público, e as festas tradicionais da "Capital do Doce" reúnem a comunidade ao longo do ano.',
  academias:
    'A rede de academias de musculação e estúdios de funcional da cidade, somada ao acesso fácil às serras, açudes e geossítios do entorno, dá boa cobertura a quem treina, atendendo também a moradores de municípios próximos que buscam estrutura na cidade-polo.',

  destaquesFitness: [
    'Pico do Totoró e Cânions dos Apertados: esportes de aventura e trilha em meio à Caatinga do Seridó.',
    'Morro do Cruzeiro como mirante com subida procurada por caminhantes e por treinos com ganho de altitude.',
    'Cena de trilha e corrida em crescimento, com eventos como o Circuito Mandacaru de Enduro a Pé e o Pé na Trilha.',
    'Cidade-polo do Seridó pela BR-226, que atrai público da região para academias e treinos.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade-polo do Seridó e "Capital do Doce", com forte vocação para o ecoturismo e os esportes de aventura, Currais Novos é um bom lugar para quem quer treinar respeitando o clima do semiárido. Um personal trainer ajuda a montar uma rotina que aproveite as horas mais frescas do dia e potencialize os resultados — da trilha no Pico do Totoró à musculação nas academias da cidade.',

  vizinhas: ['caico-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Currais Novos', url: 'https://cidades.ibge.gov.br/brasil/rn/currais-novos/panorama' },
    { nome: 'Prefeitura de Currais Novos', url: 'https://curraisnovos.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
