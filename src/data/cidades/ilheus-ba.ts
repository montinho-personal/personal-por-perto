import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ilheus-ba',
  nome: 'Ilhéus',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'ilheense',
  tipo: 'cidade',

  populacao: 178703,
  populacaoAno: 2022,
  idhm: 0.690,
  idhmClasse: 'médio',
  altitudeM: 44,

  resumoEconomico:
    'No litoral sul da Bahia, Ilhéus é a histórica capital do cacau e cenário das obras de Jorge Amado, sendo uma das maiores produtoras do país. Tem forte turismo de praia (cerca de 100 km de litoral), o Porto do Malhado e o Polo de Informática, criado para diversificar a economia após o declínio do cacau.',

  mercado:
    'O mercado está em expansão, impulsionado pela vocação litorânea e por um boom recente da corrida de rua; a orla concentra os treinos ao ar livre, e há academias em bairros como Pontal e Centro.',

  bairrosNobres: ['Pontal', 'Jardim Atlântico', 'Cidade Nova', 'Nossa Senhora da Vitória'],
  bairrosPopulares: ['Banco da Vitória', 'São Jorge', 'Conquista', 'Teotônio Vilela'],

  parques: [
    {
      nome: 'Orla da Avenida Soares Lopes',
      descricao:
        'No centro, é uma extensa avenida à beira-mar, o principal ponto de corrida e caminhada da cidade.',
    },
    {
      nome: 'Praia do Sul (Pontal–Jardim Atlântico)',
      descricao:
        'Faixa de praia urbana para caminhada, corrida e esportes de areia.',
    },
    {
      nome: 'Praia do Norte',
      descricao:
        'Trecho litorâneo usado para treino ao ar livre e atividades de praia.',
    },
  ],
  ciclovias:
    'A Estrada Parque (BA-001), rota cênica Ilhéus–Itacaré, tem trechos com ciclovia; a malha cicloviária urbana ainda não tem extensão divulgada em fonte oficial.',

  clima:
    'O clima é tropical úmido, quente o ano todo e chuvoso.',
  climaTreino:
    'Vale treinar nas primeiras horas da manhã ou no fim de tarde, com hidratação reforçada e atenção à umidade alta.',

  mobilidade:
    'Ilhéus é servida pela BR-415 (ligação a Itabuna e a Vitória da Conquista) e pela BA-001 (Estrada Parque litorânea, sentido Itacaré).',

  corridas: [
    {
      nome: 'Corrida da Ponte',
      descricao:
        'Realizada na Av. Soares Lopes, com passagem pela Ponte Estaiada Jorge Amado.',
    },
    {
      nome: 'RONDESP Sul Night Run',
      descricao:
        'Corrida noturna com percursos de 10 km, 5 km e caminhada, apontada como a maior da região sul da Bahia.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua virou febre na cidade, com a orla como palco principal, somada a uma forte cultura de praia e de esportes ao ar livre.',
  academias:
    'A oferta reúne academias em bairros como Pontal e Centro, com a orla da Av. Soares Lopes e as praias funcionando como academia a céu aberto.',

  destaquesFitness: [
    'Orla da Av. Soares Lopes como hub de corrida e treino funcional ao ar livre.',
    'Cenário litorâneo que favorece esportes de praia (beach tennis, vôlei, natação).',
    'Calendário ativo de corridas de rua (Corrida da Ponte, Night Run).',
    'Clima quente e úmido, que exige foco em horários frescos e hidratação.',
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
    'Capital do cacau e do litoral sul baiano, Ilhéus une praias, história e uma cena de corrida em alta. Um personal trainer ajuda a aproveitar a orla da Soares Lopes com método, ajustando horários e hidratação ao calor úmido.',

  vizinhas: ['itabuna-ba', 'vitoria-da-conquista-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Ilhéus', url: 'https://cidades.ibge.gov.br/brasil/ba/ilheus/panorama' },
    { nome: 'Prefeitura de Ilhéus', url: 'https://www.ilheus.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
