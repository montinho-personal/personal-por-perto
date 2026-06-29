import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caieiras-sp',
  nome: 'Caieiras',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'caieirense',
  tipo: 'cidade',

  populacao: 95032,
  populacaoAno: 2022,
  idhm: 0.781,
  idhmClasse: 'alto',
  altitudeM: 785,

  resumoEconomico:
    'Na Região Metropolitana de São Paulo, ao norte da capital, Caieiras tem origem ligada à Companhia Melhoramentos de São Paulo, tradicional fabricante de papel e celulose que mantém extensa área de reflorestamento sobre boa parte do território — origem do apelido de "cidade dos pinheirais". Hoje a economia combina indústria de papel e plásticos, comércio e serviços, com forte vínculo de moradia e deslocamento diário para São Paulo.',

  mercado:
    'A condição de cidade-dormitório bem conectada à capital, somada à grande oferta de áreas verdes, sustenta a procura por treino ao ar livre e por personal a domicílio. A demanda concentra-se em condicionamento físico, emagrecimento, saúde e preparo para corridas, com público que valoriza atividade na natureza herdada do entorno de mata e reflorestamento.',

  bairrosNobres: ['Serpa', 'Laranjeiras', 'Vera Tereza', 'Portais (região)'],
  bairrosPopulares: ['Centro', 'Vila Rosina', 'Morro Grande', 'Nova Caieiras'],

  parques: [
    {
      nome: 'Floresta da Companhia Melhoramentos',
      descricao:
        'Grande área de reflorestamento e mata herdada da antiga Companhia Melhoramentos de São Paulo, que recobre parte expressiva do território e dá à cidade sua marca verde, base do apelido de "cidade dos pinheirais".',
    },
    {
      nome: 'Parque Estadual da Cantareira / Serra da Cantareira',
      descricao:
        'Maciço de Mata Atlântica que se estende sobre o município e protege mananciais da Grande São Paulo, com trilhas e relevo de serra que servem de cenário para caminhada, trekking e treino de montanha.',
    },
    {
      nome: 'Áreas verdes e reservas do entorno',
      descricao:
        'Remanescentes de floresta, eucaliptais e reservas no entorno urbano oferecem ao morador opções de caminhada, corrida e atividade física em contato com a natureza.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana não é divulgada em fonte oficial; o uso da bicicleta concentra-se em vias do entorno verde e em trajetos ligados às áreas de reflorestamento e à serra.',

  clima:
    'O clima é subtropical de altitude, ameno e úmido, influenciado pela posição na serra e pela Mata Atlântica, com verões quentes e chuvosos e invernos amenos, com manhãs frias.',
  climaTreino:
    'As condições favorecem o treino ao ar livre, a corrida e a trilha na maior parte do ano, com atenção às chuvas de verão no fim da tarde e ao frio nas primeiras horas do dia no inverno.',

  mobilidade:
    'Caieiras integra a Região Metropolitana de São Paulo e tem como eixos de acesso a Rodovia dos Bandeirantes e a malha viária que liga a cidade à capital e a Franco da Rocha. O transporte sobre trilhos é feito pela CPTM, na Linha 7–Rubi (Luz–Jundiaí), com a Estação Caieiras conectando o município ao centro de São Paulo.',

  corridas: [
    {
      nome: 'Caieiras Night Run',
      descricao:
        'Corrida de rua noturna realizada no município, com largada na pista de atletismo do Estádio Municipal Carlos Ferracini, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Ultramaratona Caieiras',
      descricao:
        'Prova de longa distância sediada em Caieiras, voltada a corredores de resistência, com edições realizadas na cidade.',
    },
    {
      nome: 'Corrida de Páscoa — Volta ao Cristo',
      descricao:
        'Corrida pedestre tradicional do calendário local, associada às celebrações de Páscoa no município.',
    },
  ],
  culturaEsportiva:
    'A cidade combina cultura de corrida de rua, com provas próprias, e forte vocação para a vida ao ar livre, aproveitando o entorno de mata, reflorestamento e a Serra da Cantareira para caminhada, trilha e treino na natureza.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros mais adensados, complementada pelas áreas verdes e pela pista de atletismo do estádio municipal, que ampliam as opções de treino fora dos espaços fechados.',

  destaquesFitness: [
    'Floresta da Companhia Melhoramentos e reservas — treino ao ar livre na "cidade dos pinheirais".',
    'Serra da Cantareira e Parque Estadual da Cantareira para trilha e condicionamento de montanha.',
    'Calendário próprio de corrida de rua, com Night Run e ultramaratona na cidade.',
    'Conexão pela CPTM Linha 7–Rubi e pela Rodovia dos Bandeirantes facilita o acesso à capital.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 290,
    mensalMax: 760,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Cidade verde da Região Metropolitana de São Paulo, Caieiras une herança industrial da Companhia Melhoramentos, vastas áreas de reflorestamento e a Serra da Cantareira. Um personal trainer ajuda o morador a aproveitar esse cenário ao ar livre com método e segurança, do preparo para corridas ao treino de saúde e longevidade, num clima de serra propício à atividade física o ano todo.',

  vizinhas: ['sao-paulo-sp', 'guarulhos-sp', 'mairipora-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Caieiras', url: 'https://cidades.ibge.gov.br/brasil/sp/caieiras/panorama' },
    { nome: 'Prefeitura de Caieiras', url: 'https://www.caieiras.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3509205' },
  ],
  atualizadoEm: '2026-06-29',
};
