import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'farroupilha-rs',
  nome: 'Farroupilha',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'farroupilhense',
  tipo: 'cidade',

  populacao: 70286,
  populacaoAno: 2022,
  idhm: 0.777,
  idhmClasse: 'alto',
  altitudeM: 783,

  resumoEconomico:
    'Na Serra Gaúcha e na Região Metropolitana da Serra, Farroupilha é berço da imigração italiana no Rio Grande do Sul e Capital Nacional do Moscatel. Reúne forte polo metalmecânico e moveleiro, vitivinicultura com destaque para vinhos e espumantes moscatéis, além de malharia e cultivo de kiwi, sustentando renda alta e baixo desemprego.',

  mercado:
    'Cidade de economia industrial diversificada e renda relativamente alta, conta com rede de academias e estúdios consolidada e ampliação de academias ao ar livre e espaços públicos de treino em parques e praças, descentralizando o acesso pelos bairros.',

  bairrosNobres: ['Centro', 'Cinquentenário', 'São Luiz', 'Medianeira'],
  bairrosPopulares: ['Nossa Senhora de Lourdes', 'Vila Rica', 'Pio X', 'Industrial'],

  parques: [
    {
      nome: 'Parque dos Pinheiros',
      descricao:
        'Reserva ecológica na região central com cerca de 220 mil m², lago artificial, trilha ecológica, pistas para caminhada e corrida, quadras de areia e aparelhos de ginástica.',
    },
    {
      nome: 'Parque Cinquentenário',
      descricao:
        'Espaço de eventos e lazer com quadras esportivas e horários abertos para treino, palco de festas tradicionais da cidade.',
    },
  ],
  ciclovias:
    'A topografia acidentada da Serra Gaúcha limita a malha cicloviária estruturada; o relevo de subidas e descidas é mais explorado por ciclismo de estrada e mountain bike nas saídas rurais.',

  clima:
    'O clima é subtropical de altitude (a cerca de 783 m), com invernos frios, geadas frequentes e verões amenos típicos da Serra Gaúcha.',
  climaTreino:
    'O frio intenso do inverno favorece o treino indoor em boa parte do ano; nas estações mais amenas, os parques e os roteiros rurais entre vinhedos abrem ótimas opções ao ar livre.',

  mobilidade:
    'Farroupilha é cortada pela BR-470 e pela RS-122, principais eixos que a ligam a Caxias do Sul e a Bento Gonçalves, com forte fluxo industrial e de cargas na região serrana.',

  corridas: [
    {
      nome: 'Trilha Noturna – Dia do Desafio',
      descricao:
        'Atividade de corrida e caminhada em trilha noturna realizada na cidade no contexto do Dia do Desafio, com apoio do Sesc/RS.',
    },
    {
      nome: 'Circuito de corridas da Serra Gaúcha',
      descricao:
        'A cidade integra o calendário regional de corridas de rua da Serra, com provas de 5 km, 10 km e percursos maiores ligadas a clubes e eventos esportivos locais.',
    },
  ],
  culturaEsportiva:
    'A vida ao ar livre gira em torno dos parques e dos roteiros rurais entre vinhedos; a cidade tem público ativo em caminhada, corrida e ciclismo, e tradição de eventos comunitários como o Dia do Desafio.',
  academias:
    'A oferta reúne academias e estúdios pela cidade, complementada pelas pistas e aparelhos do Parque dos Pinheiros e pelas quadras do Parque Cinquentenário.',

  destaquesFitness: [
    'Capital Nacional do Moscatel, com forte cultura italiana e enoturismo.',
    'Polo metalmecânico e moveleiro de renda alta e baixo desemprego.',
    'Parque dos Pinheiros, reserva ecológica central com pistas e aparelhos para treino.',
    'Frio serrano que impulsiona a demanda por treino indoor e personal.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Capital Nacional do Moscatel na Serra Gaúcha, Farroupilha une economia industrial forte, cultura italiana e boa estrutura de parques. Um personal trainer ajuda a manter a constância no frio serrano, combinando treino indoor com as caminhadas e corridas nos parques e roteiros da região.',

  vizinhas: ['caxias-do-sul-rs', 'bento-goncalves-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Farroupilha', url: 'https://cidades.ibge.gov.br/brasil/rs/farroupilha/panorama' },
    { nome: 'Prefeitura de Farroupilha', url: 'https://www.farroupilha.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
