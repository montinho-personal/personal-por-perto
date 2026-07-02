import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'conceicao-da-barra-es',
  nome: 'Conceição da Barra',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'barrense',
  tipo: 'cidade',

  populacao: 27458,
  populacaoAno: 2022,
  idhm: 0.681,
  idhmClasse: 'médio',
  altitudeM: 3,

  resumoEconomico:
    'No extremo norte do litoral capixaba, na foz do rio São Mateus (Cricaré), Conceição da Barra é um dos municípios mais antigos do Espírito Santo, com origem ligada ao seu porto. A economia combina a pesca artesanal — sede da Colônia Z-1, a primeira colônia de pescadores do estado —, o comércio local e a monocultura de eucalipto para produção de celulose, atividade das empresas do setor que ocupa grande parte da área rural do município. O turismo ecológico é outro pilar importante, puxado pelo distrito de Itaúnas, com suas dunas móveis e o Parque Estadual de Itaúnas.',

  mercado:
    'O mercado fitness de Conceição da Barra é pequeno e concentrado na sede e nos períodos de alta temporada, quando o fluxo turístico de Itaúnas e das praias aumenta a procura por atividade física. A oferta de academias é local e modesta, e a busca por personal trainer tende a vir de quem quer treinar ao ar livre aproveitando a orla, as dunas e o clima litorâneo, além de moradores que buscam acompanhamento individualizado numa cidade sem grandes redes de academia.',

  bairrosNobres: ['Centro', 'Bugia', 'Nossa Senhora de Santana', 'Barra Nova'],
  bairrosPopulares: ['Independência', 'Novo Horizonte', 'Barreiras', 'Meleiras'],

  parques: [
    {
      nome: 'Parque Estadual de Itaúnas',
      descricao:
        'Criado em 1991 no distrito de Itaúnas, preserva dunas móveis, restingas, manguezais e remanescentes de Mata Atlântica; é o parque mais visitado do Espírito Santo, com trilhas usadas para caminhada e corrida em meio à natureza.',
    },
    {
      nome: 'Dunas de Itaúnas',
      descricao:
        'Dunas móveis que chegam a cerca de 30 metros de altura, formadas entre as décadas de 1940 e 1970 e que soterraram a antiga vila de Itaúnas; hoje são palco de caminhadas, trekking e, na época seca, sandboard orientado por guias locais.',
    },
    {
      nome: 'Orla e foz do rio São Mateus (Cricaré)',
      descricao:
        'Faixa à beira-rio na sede do município, próxima ao Centro e ao bairro da Bugia, usada para caminhada e como ponto de partida para passeios de barco e pesca.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; o deslocamento de bicicleta acontece mais nas vias do Centro e no acesso entre a sede e as praias, sem malha extensa e sinalizada.',

  clima:
    'O clima é tropical, quente e úmido o ano todo, com temperatura média de cerca de 24 °C, máximas em torno de 30 °C e mínimas por volta de 16 °C. As chuvas se concentram de setembro a janeiro, enquanto agosto costuma ser o mês mais seco.',
  climaTreino:
    'O calor e a umidade elevados pedem treinos no início da manhã ou no fim da tarde, com boa hidratação; a proximidade do mar e das áreas de sombra nas dunas e na Mata Atlântica ajuda a amenizar o esforço nos horários mais quentes.',

  mobilidade:
    'O acesso principal é pela BR-101, a cerca de 20 km da sede, de onde se chega ao município por rodovia estadual; a ES-010, pavimentada desde 2021, liga a sede ao distrito de Itaúnas, cerca de 25 km ao norte, antes percorridos em estrada de terra. A cidade fica a aproximadamente 280 km de Vitória, e o transporte interno é feito por ônibus e veículos particulares.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva e de lazer ao ar livre gira em torno das dunas e da praia de Itaúnas — trekking, sandboard na época seca, surf, stand up paddle, caiaque e pesca esportiva —, além da tradição do forró pé-de-serra, que atrai visitantes ao Festival Nacional de Forró de Itaúnas e mantém a vila como uma referência nacional do gênero. A pesca artesanal, ligada à Colônia Z-1, também marca a relação da população com o rio e o mar.',
  academias:
    'A oferta de academias é pequena e concentrada na sede do município, voltada principalmente a musculação e treino funcional, sem grandes redes nacionais; a orla e as áreas naturais complementam como espaço informal de treino, sobretudo na alta temporada.',

  destaquesFitness: [
    'Parque Estadual de Itaúnas, o mais visitado do Espírito Santo, com trilhas em meio a dunas, restinga e Mata Atlântica.',
    'Dunas móveis de Itaúnas, com até 30 m de altura, usadas para trekking e sandboard na época seca.',
    'Praias como Itaúnas e Guaxindiba, com condições para surf, stand up paddle, caiaque e pesca esportiva.',
    'Cultura do forró pé-de-serra, com o Festival Nacional de Forró de Itaúnas atraindo visitantes o ano todo.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Cidade litorânea do extremo norte capixaba, Conceição da Barra tem nas dunas e na praia de Itaúnas seu maior ativo para o treino ao ar livre, ao lado da pesca e da vida simples de cidade pequena. Um personal trainer ajuda a estruturar o treino aproveitando esse cenário natural, respeitando o calor e a umidade e mantendo a constância mesmo com a oferta local enxuta de academias.',

  vizinhas: ['sao-mateus-es', 'linhares-es', 'aracruz-es'],

  fontes: [
    { nome: 'IBGE Cidades — Conceição da Barra', url: 'https://cidades.ibge.gov.br/brasil/es/conceicao-da-barra/panorama' },
    { nome: 'Prefeitura de Conceição da Barra', url: 'https://conceicaodabarra.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
