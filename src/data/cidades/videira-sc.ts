import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'videira-sc',
  nome: 'Videira',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'videirense',
  tipo: 'cidade',

  populacao: 55466,
  populacaoAno: 2022,
  idhm: 0.76,
  idhmClasse: 'alto',
  altitudeM: 750,

  resumoEconomico:
    'No Vale do Rio do Peixe, no Meio-Oeste catarinense, Videira é o berço da Perdigão — hoje parte da BRF, uma das maiores empresas de alimentos do mundo — e um dos polos da agroindústria de aves e suínos do Sul do Brasil. À tradição industrial soma-se a vocação agrícola: a cidade é referência em fruticultura de clima temperado e na produção de uva, vinhos e espumantes, o que lhe rendeu o título de Capital Catarinense da Uva e do Espumante. Colonizada por descendentes de italianos e alemães, a cidade carrega ainda a alcunha de "Capital Brasileira do Trabalho".',

  mercado:
    'O mercado fitness acompanha o porte de cidade média catarinense de bom poder aquisitivo, com academias de musculação, estúdios de pilates e crossfit e profissionais de personal training atendendo a demanda local. O inverno frio do Meio-Oeste reforça a procura por treino indoor e por acompanhamento que ajude a manter a constância nos meses mais rigorosos.',

  bairrosNobres: ['Centro', 'Matriz', 'Universitário', 'Bom Pastor'],
  bairrosPopulares: ['Santa Terezinha', 'São Cristóvão', 'Dal Bó', 'Imperial'],

  parques: [
    {
      nome: 'Parque Ecológico do Rio do Peixe',
      descricao:
        'Principal área verde no centro da cidade, às margens do Rio do Peixe, com academia ao ar livre, playground, pista de skate, quadra de areia e anfiteatro — espaço de referência para caminhada e atividade física.',
    },
    {
      nome: 'Parque das Uvas e Praça Central',
      descricao:
        'Espaços públicos no entorno do centro ligados à identidade vitivinícola da cidade, usados para passeio, caminhada e eventos.',
    },
    {
      nome: 'Praças e espaços de bairro',
      descricao:
        'A cidade conta com praças e áreas públicas distribuídas pelos bairros, utilizadas para caminhada e atividade física ao ar livre.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é pontual e ainda em desenvolvimento; a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido (mesotérmico úmido), em altitude de cerca de 750 m no Vale do Rio do Peixe. Os invernos são frios, com geadas frequentes nos meses mais rigorosos do Meio-Oeste catarinense; os verões são amenos a quentes, e as chuvas se distribuem ao longo do ano.',
  climaTreino:
    'No inverno, o frio e as geadas pedem aquecimento prolongado, roupas adequadas e uma alternativa indoor para manter a rotina; no verão ameno, as condições ao ar livre costumam ser favoráveis ao treino.',

  mobilidade:
    'A BR-470 e a SC-355 conectam Videira às demais cidades do Vale do Rio do Peixe e do Meio-Oeste catarinense. O deslocamento interno é predominantemente por carro e ônibus.',

  corridas: [
    {
      nome: 'Videira Wine Run',
      descricao:
        'Corrida de rua que une esporte e a tradição vitivinícola da cidade, com percursos pelo centro e arredores, organizada no calendário esportivo local.',
    },
    {
      nome: 'Corridas e caminhadas de rua locais',
      descricao:
        'Provas de corrida e caminhada organizadas por entidades e assessorias esportivas ao longo do ano, com percursos urbanos.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva local se apoia em corridas de rua — como a Videira Wine Run — e no uso dos espaços públicos, como o Parque Ecológico do Rio do Peixe, para caminhada e treino. O clima frio do inverno dá identidade própria à prática de atividade física, com sazonalidade marcada ao longo do ano.',
  academias:
    'A oferta reúne academias de musculação e estúdios de pilates e crossfit, complementados pelo Parque Ecológico do Rio do Peixe e por praças para atividades ao ar livre nos meses mais amenos.',

  destaquesFitness: [
    'Cerca de 55 mil habitantes e IDHM alto (0,76) — base sólida para serviços de bem-estar.',
    'Berço da Perdigão (hoje BRF) e polo da agroindústria de aves e suínos do Meio-Oeste.',
    'Capital Catarinense da Uva e do Espumante, com Parque Ecológico do Rio do Peixe como principal espaço de treino.',
    'Invernos frios com geadas elevam a demanda por treino indoor e periodização sazonal.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Berço da Perdigão e Capital Catarinense da Uva e do Espumante, Videira combina IDHM alto com a tradição de trabalho do Vale do Rio do Peixe. Um personal trainer ajuda a periodizar o treino conforme as estações — do verão ameno ao inverno frio com geadas — e a aproveitar espaços como o Parque Ecológico do Rio do Peixe.',

  vizinhas: ['cacador-sc', 'concordia-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Videira', url: 'https://cidades.ibge.gov.br/brasil/sc/videira/panorama' },
    { nome: 'Prefeitura de Videira', url: 'https://www.videira.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
