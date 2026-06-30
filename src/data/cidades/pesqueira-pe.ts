import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pesqueira-pe',
  nome: 'Pesqueira',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'pesqueirense',
  tipo: 'cidade',

  populacao: 62722,
  populacaoAno: 2022,
  idhm: 0.61,
  idhmClasse: 'baixo',
  altitudeM: 654,

  resumoEconomico:
    'Cidade do Agreste pernambucano, no Vale do Ipojuca, Pesqueira nasceu aos pés da Serra do Ororubá, território histórico do povo indígena Xukuru. No início do século XX tornou-se um polo da indústria de doces e conservas, com a célebre Fábrica Peixe (Carlos de Britto & Cia, fundada em 1902) e a produção de extrato de tomate, atividade que marcou a economia local por décadas. Hoje a base econômica reúne comércio, serviços, agricultura e agropecuária, em uma cidade que serve de referência regional para os municípios vizinhos.',

  mercado:
    'O mercado fitness é o de uma cidade média do interior pernambucano: academias locais de musculação e funcional, estúdios de treino e a estrutura pública de praças e academias da saúde sustentam a maior parte da demanda. O personal trainer atende sobretudo treino individualizado, condicionamento e acompanhamento de quem busca alternativa à academia tradicional.',

  bairrosNobres: ['Centro', 'Prado', 'Mimoso'],
  bairrosPopulares: ['Xucurus', 'São Cristóvão', 'Cohab II'],

  parques: [
    {
      nome: 'Praças e logradouros do Centro histórico',
      descricao:
        'O núcleo central, com a Igreja Matriz e o casario antigo, concentra praças usadas para caminhada e encontros, em um cenário que preserva a memória da cidade.',
    },
    {
      nome: 'Serra do Ororubá',
      descricao:
        'Conjunto de serras a cerca de 1.000–1.125 m de altitude, território do povo Xukuru do Ororubá, com clima mais ameno e trilhas em meio à paisagem do semiárido de altitude.',
    },
    {
      nome: 'Academias da saúde',
      descricao:
        'Equipamentos públicos de ginástica ao ar livre distribuídos pela cidade, de acesso livre, usados para alongamento e treino funcional básico.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de uma malha cicloviária estruturada; o ciclismo acontece sobretudo em vias urbanas e em estradas vicinais rumo à serra.',

  clima:
    'O clima é semiárido do Agreste, porém mais ameno na cidade e especialmente na Serra do Ororubá, graças à altitude (cerca de 650 m no núcleo urbano e acima de 1.000 m na serra). As temperaturas são mais suaves que as do Sertão e do litoral, com ar seco e estação chuvosa concentrada no outono e início do inverno.',
  climaTreino:
    'A altitude torna o treino ao ar livre mais agradável do que em boa parte do interior, mas o sol é forte e a umidade baixa ao meio-dia — manhã e fim de tarde são as melhores janelas, sempre com hidratação reforçada.',

  mobilidade:
    'O principal acesso é pela BR-232, que liga Pesqueira ao Recife (a cerca de 215 km) e ao restante do Agreste e do Sertão. A cidade não tem metrô (o Metrô do Recife atende apenas a região metropolitana da capital), e a circulação interna é feita por vias urbanas e transporte rodoviário.',

  corridas: [
    {
      nome: 'Corridas e caminhadas locais',
      descricao:
        'Provas de rua e caminhadas comunitárias acontecem pontualmente na cidade, geralmente associadas a festas e datas do calendário municipal, com percursos pelo centro e bairros.',
    },
    {
      nome: 'Treinos de rua e na serra',
      descricao:
        'Grupos de corrida e ciclismo usam as vias urbanas e as subidas em direção à Serra do Ororubá, aproveitando o clima mais ameno de altitude.',
    },
  ],
  culturaEsportiva:
    'Pesqueira integra o chamado Circuito do Frio do Agreste e tem no clima de altitude um atrativo para atividades ao ar livre. A cultura esportiva é a de uma cidade média do interior, com corrida, ciclismo e futebol amador presentes no dia a dia, somados à força da cultura indígena Xukuru na identidade local.',
  academias:
    'A oferta concentra academias locais de musculação e funcional e estúdios menores, complementadas pelas academias da saúde públicas. A presença de grandes redes nacionais é limitada, o que abre espaço para o atendimento de personal trainers.',

  destaquesFitness: [
    'Clima semiárido mais ameno na cidade e, sobretudo, na Serra do Ororubá, favorável ao treino ao ar livre.',
    'Serra do Ororubá: altitude, trilhas e subidas para corrida e ciclismo.',
    'Estrutura pública de praças e academias da saúde de acesso livre.',
    'Cidade-referência regional, polo histórico de conservas e do Agreste pernambucano.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade do Agreste aos pés da Serra do Ororubá, Pesqueira combina história — do povo Xukuru à indústria de conservas — com um clima de altitude mais ameno, propício ao treino ao ar livre. Em um mercado de cidade média, com poucas grandes redes, o personal trainer ajuda a estruturar o treino com método, aproveitando praças, serra e vias urbanas com segurança.',

  vizinhas: ['caruaru-pe', 'arcoverde-pe', 'belo-jardim-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Pesqueira', url: 'https://cidades.ibge.gov.br/brasil/pe/pesqueira/panorama' },
    { nome: 'Prefeitura de Pesqueira', url: 'https://pesqueira.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
