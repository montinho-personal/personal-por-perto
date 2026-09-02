import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'braganca-paulista-sp',
  nome: 'Bragança Paulista',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'bragantino',
  tipo: 'cidade',

  populacao: 176811,
  populacaoAno: 2022,
  idhm: 0.776,
  idhmClasse: 'alto',
  altitudeM: 817,

  resumoEconomico:
    'Polo da região bragantina, a cerca de 85 km de São Paulo pela Fernão Dias e próxima de Campinas, Bragança Paulista tem economia baseada em comércio, educação e serviços, seguida de indústria. Tem forte presença de condomínios de alto padrão atraídos pela rodovia, turismo na represa de Jaguari e um polo universitário com a USF.',

  mercado:
    'A cidade tem público de poder aquisitivo médio-alto e uma cultura de bem-estar associada ao clima de serra e à represa, com rede ativa de academias e procura por treino ao ar livre.',

  bairrosNobres: ['Jardim Europa', 'Jardim Santa Helena', 'Jardim América', 'Jardim Sevilha'],
  bairrosPopulares: ['Jardim São José', 'Vila Aparecida', 'Jardim Recreio', 'Penha'],

  parques: [
    {
      nome: 'Lago do Taboão',
      descricao:
        'Principal espaço de esporte e lazer ao ar livre, com pista de caminhada de cerca de 2,6 km, ciclovia, quadras de areia e basquete e playground.',
    },
    {
      nome: 'Represa de Jaguari',
      descricao:
        'Área de lazer e esportes náuticos e ciclismo no entorno, parte do Sistema Cantareira.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Equipamentos públicos de ginástica distribuídos em praças, ampliando o acesso ao treino nos bairros.',
    },
  ],
  ciclovias:
    'Há ciclovia integrada ao Lago do Taboão (calçadão de cerca de 3 km); a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos secos e amenos — a cidade é estância climática.',
  climaTreino:
    'É ótimo treinar ao ar livre o ano todo; no verão, vale priorizar o início da manhã e o fim de tarde, e no inverno de serra, usar camadas.',

  mobilidade:
    'Bragança é cortada pela Rodovia Fernão Dias (BR-381), ligação São Paulo–Belo Horizonte, principal eixo que impulsiona condomínios e novos moradores.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da Saúde',
      descricao:
        'Prova beneficente local com percurso de 5 km.',
    },
    {
      nome: 'Circuito de corridas de rua',
      descricao:
        'Provas recorrentes de 5 km e 10 km no calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Há forte vínculo com atividades ao ar livre (caminhada, ciclismo e esportes náuticos na represa), favorecido pelo clima de serra, com o Lago do Taboão como coração da prática esportiva pública.',
  academias:
    'A oferta reúne academias e estúdios, com nicho premium nos condomínios de alto padrão, complementada pelo Lago do Taboão e pela represa.',

  destaquesFitness: [
    'Lago do Taboão como hub de corrida, ciclismo e treino funcional ao ar livre.',
    'Público de alto padrão em condomínios — nicho de personal premium.',
    'Clima de altitude favorável ao treino outdoor o ano inteiro.',
    'Polo universitário (USF), com público jovem e demanda por academias.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Polo bragantino de clima de serra, Bragança Paulista une alto padrão, represa e o Lago do Taboão. Um personal trainer ajuda a aproveitar esse cenário com método, mantendo a constância o ano todo no clima ameno de altitude.',

  vizinhas: ['atibaia-sp', 'campinas-sp'],

  capaArte: {
    src: '/capas-cidade/braganca-paulista-sp.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Bragança Paulista (SP) em arte com o letreiro Eu amo Bragança Paulista, o lago do centro e as praças da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Bragança Paulista: treino perto de você, com acompanhamento profissional no circuito das águas paulista.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Bragança Paulista', url: 'https://cidades.ibge.gov.br/brasil/sp/braganca-paulista/panorama' },
    { nome: 'Prefeitura de Bragança Paulista', url: 'https://www.braganca.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
