import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aracatuba-sp',
  nome: 'Araçatuba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'araçatubense',
  tipo: 'cidade',

  populacao: 200124,
  populacaoAno: 2022,
  idhm: 0.788,
  idhmClasse: 'alto',

  resumoEconomico:
    'Principal cidade do noroeste paulista e capital regional de média influência, Araçatuba é um polo do agronegócio — historicamente a "Capital do Boi Gordo" (pecuária de corte) e forte no setor sucroenergético. Conhecida como "Cidade-Coração", é centro regional de comércio, saúde e educação superior.',

  mercado:
    'Como centro regional de serviços e saúde, a cidade sustenta boa demanda por academias e treino; o clima quente reforça a procura por treino ao ar livre nos horários amenos e por musculação em ambiente climatizado.',

  bairrosNobres: ['Jardim Nova Yorque', 'Ipanema', 'Jardim Guanabara', 'Parque Baguaçu'],
  bairrosPopulares: ['Conjunto Antônio Villela Silva', 'Conjunto Elias Stefan', 'Santana', 'Conjunto Hilda Mandarino'],

  parques: [
    {
      nome: 'Parque Ecológico Baguaçu',
      descricao:
        'Tem pista de caminhada e ciclovia, academia ao ar livre, playground e trilha ecológica às margens do Ribeirão Baguaçu, de entrada gratuita.',
    },
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde com sombra e trilhas, que abriga a Cidade da Criança.',
    },
    {
      nome: 'Parque da Fazenda',
      descricao:
        'Área verde municipal de lazer com trilhas, de entrada gratuita.',
    },
  ],
  ciclovias:
    'A extensão total da malha cicloviária urbana ainda não é divulgada em fonte oficial; há rota de cicloturismo regional partindo da cidade.',

  clima:
    'O clima é tropical de savana, quente a maior parte do ano, com verões quentes e chuvosos (com frequência acima de 35 °C).',
  climaTreino:
    'O treino ao ar livre é recomendável no início da manhã e no fim de tarde, com hidratação reforçada; a musculação climatizada ganha relevância no verão.',

  mobilidade:
    'O acesso principal é pela Rodovia Marechal Rondon (SP-300), um dos grandes eixos do interior paulista.',

  corridas: [
    {
      nome: 'Corrida de Rua José dos Santos Primo',
      descricao:
        'Prova oficial do calendário municipal, com percurso de 5 km aferido pela CBAt.',
    },
    {
      nome: 'Team Run',
      descricao:
        'Corrida de 5 km, caminhada de 3 km e corrida kids, com supervisão da Federação Paulista de Atletismo.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário municipal de corridas de rua ativo (com aferição oficial) e uso intenso dos parques públicos gratuitos, com tradição esportiva ligada também ao agronegócio.',
  academias:
    'A oferta reúne academias e estúdios, com base de clientes que vem também das cidades vizinhas, complementada pelo Parque Baguaçu e pelo Bosque Municipal.',

  destaquesFitness: [
    'Parque Baguaçu como principal polo público de corrida, ciclismo e treino funcional.',
    'Calendário consolidado de corridas de rua oficiais.',
    'Centro regional de saúde e serviços, com base de clientes das cidades vizinhas.',
    'Clima quente que favorece o treino outdoor matinal e a musculação climatizada.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade-Coração do noroeste paulista, Araçatuba une agronegócio, polo de saúde e bons parques. Um personal trainer ajuda a aproveitar o Parque Baguaçu com método, ajustando horários e hidratação ao calor da região.',

  vizinhas: ['sao-jose-do-rio-preto-sp', 'bauru-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Araçatuba', url: 'https://cidades.ibge.gov.br/brasil/sp/aracatuba/panorama' },
    { nome: 'Prefeitura de Araçatuba', url: 'https://www.aracatuba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
