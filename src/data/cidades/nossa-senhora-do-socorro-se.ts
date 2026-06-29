import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nossa-senhora-do-socorro-se',
  nome: 'Nossa Senhora do Socorro',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'socorrense',
  tipo: 'cidade',

  populacao: 192330,
  populacaoAno: 2022,
  idhm: 0.664,
  idhmClasse: 'médio',
  altitudeM: 10,

  resumoEconomico:
    'Segunda cidade mais populosa de Sergipe, Nossa Senhora do Socorro integra a Região Metropolitana de Aracaju em conurbação direta com a capital. Cresceu a partir dos grandes conjuntos habitacionais da Grande Aracaju — Marcos Freire, João Alves Filho (Bugio), Taiçoca, Fernando Collor e Parque dos Faróis —, que abrigam a maior parte da população. A economia combina comércio e serviços de bairro, a administração municipal e a base industrial do Distrito Industrial Augusto Franco (DIA), um dos principais polos fabris do estado.',

  mercado:
    'O mercado fitness é o de uma cidade grande e popular da Região Metropolitana de Aracaju: a demanda se concentra em academias de bairro espalhadas pelos conjuntos habitacionais e no atendimento domiciliar, que pesa muito em uma população de perfil popular e geograficamente dispersa. A proximidade e a conurbação com Aracaju ampliam as oportunidades, com muitos moradores treinando ou trabalhando entre as duas cidades. Há espaço para o personal trainer que atende em casa, em condomínios e em academias de menor porte.',

  bairrosNobres: ['Conjunto João Alves Filho (Bugio)', 'Centro', 'Conjunto Marcos Freire III', 'Parque dos Faróis'],
  bairrosPopulares: ['Marcos Freire I', 'Marcos Freire II', 'Taiçoca', 'Conjunto Fernando Collor'],

  parques: [
    {
      nome: 'Praça Luciano Barreto Júnior',
      descricao:
        'Praça no Conjunto Marcos Freire II usada para atividades comunitárias, aulas de funcional e dança e torneios amadores promovidos pela prefeitura.',
    },
    {
      nome: 'Praças e espaços públicos dos conjuntos',
      descricao:
        'As praças dos conjuntos Marcos Freire, João Alves Filho e Fernando Collor concentram caminhada, treino livre e quadras poliesportivas usadas pelos moradores.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de uma malha cicloviária estruturada como a da capital; o deslocamento por bicicleta acontece sobretudo nas vias internas dos conjuntos habitacionais.',

  clima:
    'O clima é tropical litorâneo, quente e úmido o ano todo, com médias próximas de 26 °C, em razão da proximidade do litoral e da baixa altitude (cerca de 10 m).',
  climaTreino:
    'Com calor e umidade altos durante quase todo o ano, o treino ao ar livre rende mais cedo de manhã ou no fim da tarde, com hidratação reforçada. Nos horários de maior sol, os ambientes cobertos e a orientação de um profissional ajudam a manter a constância sem risco.',

  mobilidade:
    'O acesso se dá principalmente pela BR-101 e pela BR-235, que cortam o município e o ligam a Aracaju, a poucos quilômetros de distância. O transporte público é feito por ônibus integrados à malha metropolitana da Grande Aracaju, e boa parte dos moradores se desloca diariamente para a capital.',

  corridas: [
    {
      nome: 'Corre Siri',
      descricao:
        'Corrida de rua que celebra o aniversário do município, organizada pela prefeitura, com percursos de 2,5 km, 5 km e 10 km e categorias masculina, feminina e PcD, reunindo mais de mil participantes.',
    },
    {
      nome: 'Volta de Socorro',
      descricao:
        'Corrida de rua tradicional promovida pelo município, com largada e percurso por pontos do centro e dos conjuntos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente comunitária, sustentada por iniciativas da prefeitura como o projeto Socorro, Sol e Esporte, com torneios de futsal, vôlei de praia e basquete 3x3, além de aulas gratuitas de funcional e dança nas praças. As corridas de rua municipais vêm ganhando público e movimentam o calendário local.',
  academias:
    'O atendimento se apoia em academias de bairro distribuídas pelos conjuntos habitacionais e em estúdios de menor porte, complementados pelo forte peso do personal domiciliar em uma cidade extensa e de perfil popular.',

  destaquesFitness: [
    'Segunda cidade mais populosa de Sergipe, em conurbação direta com Aracaju.',
    'Grandes conjuntos habitacionais (Marcos Freire, João Alves Filho, Taiçoca) com forte demanda de bairro e domiciliar.',
    'Calendário próprio de corridas (Corre Siri e Volta de Socorro) e projetos esportivos da prefeitura.',
    'Praças comunitárias com aulas de funcional e dança e torneios amadores.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade grande e popular da Região Metropolitana de Aracaju, Nossa Senhora do Socorro tem sua vida ativa nos conjuntos habitacionais, nas praças e no calendário esportivo municipal. Um personal trainer ajuda a transformar a academia de bairro, o atendimento em casa e o clima quente do litoral em um plano de treino consistente, ajustado à rotina entre Socorro e a capital.',

  vizinhas: ['aracaju-se'],

  fontes: [
    { nome: 'IBGE Cidades — Nossa Senhora do Socorro', url: 'https://cidades.ibge.gov.br/brasil/se/nossa-senhora-do-socorro/panorama' },
    { nome: 'Prefeitura de Nossa Senhora do Socorro', url: 'https://www.socorro.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
