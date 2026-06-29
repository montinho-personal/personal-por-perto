import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'formiga-mg',
  nome: 'Formiga',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'formiguense',
  tipo: 'cidade',

  populacao: 68248,
  populacaoAno: 2022,
  idhm: 0.755,
  idhmClasse: 'alto',
  altitudeM: 841,

  resumoEconomico:
    'Formiga é um dos polos do Centro-Oeste mineiro, na microrregião que leva o nome da cidade. A economia se apoia no comércio e nos serviços que atendem toda a região, complementados por agropecuária, agroindústria e pela presença de instituições de ensino superior como o Centro Universitário de Formiga (UNIFOR-MG) e o campus do IFMG, que dinamizam a vida urbana e atraem estudantes de cidades vizinhas.',

  mercado:
    'O mercado fitness é típico de cidade média mineira em crescimento, com academias de bairro, redes regionais, estúdios e boxes de treino funcional. A presença universitária (UNIFOR-MG e IFMG) aumenta a procura por treino entre o público jovem, e a proximidade do Lago de Furnas aproxima a cidade de esportes ao ar livre e atividades aquáticas.',

  bairrosNobres: ['Centro', 'Água Vermelha', 'Sagrado Coração de Jesus', 'Engenho de Serra'],
  bairrosPopulares: ['Quinzinho', 'São Lucas', 'Rosário', 'Bela Vista'],

  parques: [
    {
      nome: 'Parque Municipal Dr. Leopoldo Corrêa (Praia Popular)',
      descricao:
        'Conhecido como Praia Popular, é um dos principais espaços públicos de lazer da cidade, com área verde e entorno usado para caminhada e atividade física ao ar livre.',
    },
    {
      nome: 'Complexo Esportivo Tancredo Neves',
      descricao:
        'Espaço dedicado à prática esportiva, com quadras de futebol, vôlei, basquete e tênis, além de pista de atletismo e academia ao ar livre.',
    },
    {
      nome: 'Lago de Furnas',
      descricao:
        'O "mar de Minas" às margens de Formiga, usado para natação, pesca e passeios de barco; base do turismo náutico e dos esportes aquáticos da região.',
    },
  ],
  ciclovias:
    'A cidade conta com ruas de baixo tráfego e vias usadas por ciclistas para deslocamento e lazer; a extensão oficial total de ciclovias não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, típico do Centro-Oeste mineiro, com verão quente e chuvoso (dezembro a fevereiro) e inverno seco e ameno, favorecido pela altitude de cerca de 840 metros.',
  climaTreino:
    'O inverno seco e a altitude favorecem o treino ao ar livre, sobretudo no início da manhã. No verão, vale priorizar os horários mais frescos, evitar o fim de tarde (chuvas) e reforçar a hidratação.',

  mobilidade:
    'Formiga é cortada pela MG-050, principal eixo de acesso, com ligação também pela BR-354. Em posição estratégica no Centro-Oeste mineiro, fica a cerca de 190 km de Belo Horizonte e próxima do Lago de Furnas, o que reforça seu papel de polo regional.',

  corridas: [
    {
      nome: 'Circuito Trilhos do Oeste',
      descricao:
        'Prova de corrida realizada em Formiga, com percurso que valoriza a paisagem da região e adesão de corredores locais e de cidades vizinhas.',
    },
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'A cidade recebe provas de corrida de rua ao longo do ano, com apoio da comunidade esportiva e premiação por categorias.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura esportiva ativa, com corridas de rua, futebol e a estrutura pública do Complexo Esportivo Tancredo Neves, que conta com pista de atletismo. O Lago de Furnas reforça a vocação ao ar livre, aproximando a população dos esportes aquáticos e de aventura.',
  academias:
    'A oferta reúne academias de bairro, redes regionais, estúdios e boxes de treino funcional, complementados pela estrutura pública do Complexo Esportivo Tancredo Neves e do Parque Municipal Dr. Leopoldo Corrêa.',

  destaquesFitness: [
    'Complexo Esportivo Tancredo Neves, com pista de atletismo e academia ao ar livre.',
    'Parque Municipal Dr. Leopoldo Corrêa (Praia Popular) como espaço público de caminhada e lazer.',
    'Lago de Furnas e turismo náutico que ampliam as opções de esporte ao ar livre.',
    'Inverno seco e clima de altitude favoráveis ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Polo do Centro-Oeste mineiro, com comércio forte e instituições de ensino superior, Formiga une clima de altitude, estrutura esportiva pública e a proximidade do Lago de Furnas. Um personal trainer ajuda a aproveitar o Complexo Tancredo Neves, o Parque Dr. Leopoldo Corrêa e a preparar provas de rua, com método e segurança.',

  vizinhas: ['divinopolis-mg', 'nova-serrana-mg', 'passos-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Formiga', url: 'https://cidades.ibge.gov.br/brasil/mg/formiga/panorama' },
    { nome: 'Prefeitura de Formiga', url: 'https://www.formiga.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
