import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'londrina-pr',
  nome: 'Londrina',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'londrinense',
  tipo: 'cidade',

  populacao: 555937,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 610,

  resumoEconomico:
    'Maior cidade do Norte do Paraná, Londrina nasceu da cultura do café e migrou para uma economia de serviços, comércio, saúde e educação, mantendo forte presença do agronegócio na região. É o principal polo universitário e médico do norte paranaense, com a UEL à frente, o que sustenta um público jovem e ativo.',

  mercado:
    'Cidade universitária, Londrina tem cultura forte de musculação e corrida. Redes como a Smart Fit e academias locais bem avaliadas convivem com estúdios de crossfit e funcional, com ampla cobertura de plataformas de benefícios — e o Lago Igapó como grande ponto de treino ao ar livre.',

  bairrosNobres: ['Gleba Palhano', 'Bela Suíça', 'Terra Bonita', 'Jardim Higienópolis'],
  bairrosPopulares: ['Jardim São Paulo', 'Jardim Inglaterra', 'Vivi Xavier', 'Cinco Conjuntos'],

  parques: [
    {
      nome: 'Lago Igapó',
      descricao:
        'O cartão-postal de Londrina: conjunto de lagos com mais de 4.500 m de extensão, entorno com pista de caminhada, academia ao ar livre revitalizada e quadras. É o "ginásio a céu aberto" da cidade, com trilha de corrida em torno de 6 km no Igapó 1.',
    },
    {
      nome: 'Zerão (Área de Lazer Luigi Borghesi)',
      descricao:
        'Tem pista oval de cooper de 1.050 m, quadras, campos e anfiteatro — ideal para treinos de ritmo e tiros com distância controlada.',
    },
    {
      nome: 'Parque Municipal Arthur Thomas',
      descricao:
        'Cerca de 85 hectares de Mata Atlântica com ampla pista de caminhada, trilhas e academia ao ar livre (aberto de terça a domingo, das 8h às 17h, entrada gratuita).',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias e ciclofaixas em avenidas e no entorno do Lago Igapó, integrando lazer e mobilidade ativa em uma cidade muito arborizada.',

  clima:
    'O clima é subtropical com estações bem definidas: verões quentes e chuvosos (até cerca de 32 °C) e invernos amenos com geadas ocasionais.',
  climaTreino:
    'O treino ao ar livre é confortável quase o ano todo. No verão, vale evitar o fim de tarde (calor e chuva) e, no inverno, priorizar as manhãs mais ensolaradas.',

  mobilidade:
    'Londrina tem rede de ônibus com terminais integrados e avenidas largas, com acesso pelas BR-369 e PR-445, ligando a cidade a Curitiba, Maringá e ao interior de São Paulo. O aeroporto local opera voos domésticos.',

  corridas: [
    {
      nome: 'Maratona de Londrina',
      descricao:
        'Prova de rua com percursos de 5 km, 10 km, 21 km e 42 km, com largada no Catuaí Shopping.',
    },
    {
      nome: 'Meia Maratona Internacional de Londrina',
      descricao:
        'Prova de 5 km, 10 km e 21 km com largada no Lago Igapó, em agosto — parte de um calendário de corrida muito ativo.',
    },
  ],
  culturaEsportiva:
    'Londrina tem tradição forte em corrida de rua, com um calendário oficial repleto de provas pedestres e ciclísticas ao longo do ano, e em ciclismo de estrada. O Lago Igapó é o epicentro do treino ao ar livre da cidade.',
  academias:
    'A oferta reúne a Smart Fit e academias locais bem avaliadas, além de estúdios de crossfit e treino funcional, com forte cobertura de plataformas de benefícios e um público universitário numeroso.',

  destaquesFitness: [
    'Lago Igapó como "ginásio a céu aberto" para caminhada, corrida e academia ao ar livre.',
    'Calendário robusto de corridas (Maratona e Meia Internacional) que move assessorias.',
    'Cidade muito arborizada, favorável ao treino externo.',
    'Forte público universitário (UEL e particulares) — perfil jovem e ativo.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade jovem, arborizada e apaixonada por corrida, Londrina tem no Lago Igapó o seu coração esportivo. Um personal trainer ajuda a transformar essa estrutura — dos lagos às academias — em um plano de treino consistente, ajustado ao seu objetivo e à sua rotina.',

  vizinhas: ['maringa-pr', 'curitiba-pr', 'sorocaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Londrina', url: 'https://cidades.ibge.gov.br/brasil/pr/londrina/panorama' },
    { nome: 'Prefeitura de Londrina', url: 'https://www.londrina.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
