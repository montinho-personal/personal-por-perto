import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tres-coracoes-mg',
  nome: 'Três Corações',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'tricordiano',
  tipo: 'cidade',

  populacao: 75485,
  populacaoAno: 2022,
  idhm: 0.744,
  idhmClasse: 'alto',
  altitudeM: 839,

  resumoEconomico:
    'No sul de Minas, Três Corações é conhecida nacionalmente como a terra natal de Pelé e como cidade-sede da Escola de Sargentos das Armas (ESA), que forma sargentos combatentes do Exército. A economia combina agropecuária — com destaque para a produção de café e de milho na região —, indústria e comércio, além da presença militar que ajuda a movimentar serviços locais.',

  mercado:
    'Cidade média do sul de Minas, Três Corações reúne uma base de clientes estável formada por servidores, militares ligados à ESA, comerciantes e profissionais liberais. O clima ameno de altitude e os espaços públicos para atividade física sustentam a demanda por personal trainers tanto em academias quanto ao ar livre.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Alto da Boa Vista', 'Parque das Colinas'],
  bairrosPopulares: ['Jardim Esperança', 'Monte Alegre', 'Novo Horizonte', 'Chácara General Banda'],

  parques: [
    {
      nome: 'Parque Municipal',
      descricao:
        'Conta com pista asfaltada de cerca de 1.500 m para caminhada, corrida e ciclismo, além de quadras esportivas, campos de futebol, pista de skate e academias ao ar livre.',
    },
    {
      nome: 'Parque Dondinho',
      descricao:
        'Área de lazer da cidade, na região da Chácara General Banda, usada para caminhada, atividade ao ar livre e como ponto de partida de eventos esportivos locais.',
    },
  ],
  ciclovias:
    'A pista do Parque Municipal é usada para ciclismo de lazer; a extensão total da rede de ciclovias do município ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (cerca de 839 m, no sul de Minas), mais ameno, com verões quentes e chuvosos e invernos secos, com manhãs frias.',
  climaTreino:
    'As temperaturas amenas favorecem o treino ao ar livre na maior parte do ano; no verão, o ideal é evitar o horário de pico de calor e chuva, e no inverno vale o agasalho nas manhãs frias.',

  mobilidade:
    'O principal eixo é a Rodovia Fernão Dias (BR-381), que liga a cidade a São Paulo e a Belo Horizonte; a malha viária regional conecta Três Corações às demais cidades do sul de Minas.',

  corridas: [
    {
      nome: 'Corrida Três Corações',
      descricao:
        'Corrida de rua com percurso em torno de 7 km e categorias por faixa etária, com partida no Parque Dondinho e arrecadação de alimentos para instituições de caridade.',
    },
    {
      nome: 'Circuito de Pedal e Corrida IFSULDEMINAS',
      descricao:
        'Evento esportivo ligado ao campus local do IFSULDEMINAS, que reúne provas de corrida de rua e pedal na cidade.',
    },
  ],
  culturaEsportiva:
    'A identidade esportiva tricordiana é marcada pelo futebol — Três Corações é o berço de Pelé, homenageado com monumento na Praça Pelé — e pela presença da ESA, que reforça a cultura de condicionamento físico na cidade. O calendário inclui corridas de rua de cunho comunitário.',
  academias:
    'A oferta de academias e estúdios atende a um público diversificado, da clientela civil ao pessoal ligado à ESA, complementada pela pista do Parque Municipal e pelos espaços de lazer ao ar livre.',

  destaquesFitness: [
    'Parque Municipal com pista asfaltada de cerca de 1.500 m e academias ao ar livre.',
    'Clima ameno de altitude, favorável ao treino externo na maior parte do ano.',
    'Forte cultura física associada à ESA e ao futebol, na terra natal de Pelé.',
    'Corrida Três Corações com perfil comunitário, no calendário esportivo local.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 140,
    onlineMax: 360,
  },

  conclusao:
    'Terra natal de Pelé e sede da Escola de Sargentos das Armas, Três Corações une clima ameno de altitude, bons espaços públicos para treino e uma cultura física enraizada. Um personal trainer ajuda a aproveitar o Parque Municipal e as corridas locais com método e constância ao longo do ano.',

  vizinhas: ['varginha-mg', 'pouso-alegre-mg', 'lavras-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Três Corações', url: 'https://cidades.ibge.gov.br/brasil/mg/tres-coracoes/panorama' },
    { nome: 'Prefeitura de Três Corações', url: 'https://www.trescoracoes.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
