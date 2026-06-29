import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vilhena-ro',
  nome: 'Vilhena',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'vilhenense',
  tipo: 'cidade',

  populacao: 95832,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 612,

  resumoEconomico:
    'No extremo sul de Rondônia, na divisa com Mato Grosso e sobre a Chapada dos Parecis, Vilhena é a principal cidade do Cone Sul do estado e um polo agroindustrial voltado à soja, ao milho e a outros grãos. A posição na BR-364, ponto de entrada de quem chega de Cuiabá, reforça seu papel como entreposto comercial e logístico da região.',

  mercado:
    'A musculação se concentra no Centro e nos bairros de maior renda, com academias locais e oferta crescente ligada ao agronegócio. A altitude relativamente alta para os padrões de Rondônia deixa as temperaturas mais amenas que no resto do estado, o que favorece o treino ao ar livre no Parque Ecológico e nas avenidas largas da cidade.',

  bairrosNobres: ['Jardim América', 'Centro', 'Jardim Eldorado', 'Cristo Rei'],
  bairrosPopulares: ['Cidade Verde', 'Bodanese', 'Jardim Primavera', 'Embratel'],

  parques: [
    {
      nome: 'Parque Ecológico Marechal Cândido Rondon',
      descricao:
        'Principal área verde da cidade, em zona de transição entre cerrado e mata amazônica às margens do rio Barão do Melgaço, com pista de caminhada e corrida e trilhas usadas para atividade física.',
    },
    {
      nome: 'Pista do Parque até o IFRO',
      descricao:
        'Trecho sinalizado que liga o Parque Ecológico ao campus do Instituto Federal de Rondônia, com sinalização para pedestres e ciclistas, usado para caminhada e corrida.',
    },
  ],
  ciclovias:
    'A sinalização entre o Parque Ecológico e o IFRO atende pedestres e ciclistas, e as avenidas largas do plano urbano favorecem o deslocamento de bicicleta.',

  clima:
    'O clima é tropical com estação seca bem marcada, típico do sul de Rondônia sobre a Chapada dos Parecis. A altitude deixa as temperaturas mais amenas que no restante do estado, com inverno seco entre maio e setembro e verão chuvoso.',
  climaTreino:
    'A estação seca é a mais favorável ao treino ao ar livre, com tardes mais secas e madrugadas frescas; no período chuvoso, o início da manhã costuma ser a melhor janela. A hidratação segue importante o ano todo.',

  mobilidade:
    'O acesso é pela BR-364, que corta a cidade e liga Rondônia a Mato Grosso na divisa logo ao sul, principal eixo de chegada de quem vem de Cuiabá. Vilhena conta com aeroporto regional e deslocamento interno por ônibus e veículos próprios.',

  corridas: [
    {
      nome: 'Corridas de aniversário de Vilhena',
      descricao:
        'Provas de rua realizadas no calendário comemorativo do município, com percursos de caminhada e corrida pelas avenidas centrais.',
    },
    {
      nome: 'Circuitos e provas locais no Parque Ecológico',
      descricao:
        'Eventos de corrida e caminhada organizados por assessorias e pelo poder público, com largada e percurso ligados ao Parque Ecológico e à pista até o IFRO.',
    },
  ],
  culturaEsportiva:
    'A cidade tem uma comunidade ativa de corredores e caminhantes que se concentra no Parque Ecológico e na pista até o IFRO. O clima mais ameno da chapada e as avenidas largas ajudam a manter a rotina de exercícios ao ar livre durante boa parte do ano.',
  academias:
    'A oferta é formada por academias locais de musculação e estúdios, concentrados no Centro e nos bairros de maior renda, complementados pela estrutura pública do Parque Ecológico.',

  destaquesFitness: [
    'Parque Ecológico Marechal Cândido Rondon como principal espaço de corrida e caminhada.',
    'Pista sinalizada do parque até o IFRO para pedestres e ciclistas.',
    'Clima mais ameno que o restante de Rondônia graças à altitude da chapada.',
    'Avenidas largas no plano urbano que facilitam o treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo agroindustrial do Cone Sul de Rondônia e uma das cidades mais altas do estado, Vilhena combina clima mais ameno e bons espaços ao ar livre. Um personal trainer ajuda a aproveitar o Parque Ecológico e a pista até o IFRO e a montar uma rotina ajustada à estação seca e ao período chuvoso.',

  vizinhas: ['ji-parana-ro', 'porto-velho-ro', 'ariquemes-ro'],

  fontes: [
    { nome: 'IBGE Cidades — Vilhena', url: 'https://cidades.ibge.gov.br/brasil/ro/vilhena/panorama' },
    { nome: 'Prefeitura de Vilhena', url: 'https://vilhena.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
