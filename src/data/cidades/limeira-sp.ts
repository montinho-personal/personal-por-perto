import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'limeira-sp',
  nome: 'Limeira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'limeirense',
  tipo: 'cidade',

  populacao: 291869,
  populacaoAno: 2022,
  idhm: 0.775,
  idhmClasse: 'alto',
  altitudeM: 588,

  resumoEconomico:
    'Limeira é um importante polo citrícola, com forte presença do processamento de suco de laranja, e é reconhecida como a "capital nacional da joia folheada", concentrando boa parte da produção de bijuteria do país. Bem posicionada no interior paulista, fica próxima de Campinas e de Piracicaba, em um eixo industrial e logístico dinâmico.',

  mercado:
    'O mercado fitness é bem desenvolvido, com redes nacionais, boxes de crossfit e ampla cobertura de planos corporativos — um ambiente favorável para personal trainers em academias e estúdios. Os parques municipais reforçam a cultura de treino ao ar livre.',

  bairrosNobres: ['Jardim do Lago', 'Vila Cidade Jardim', 'Jardim Colinas', 'Parque Residencial Abílio Pedro'],
  bairrosPopulares: ['CECAP', 'Novo Mundo', 'Parque Egisto Ragazzo', 'Vila Cláudia'],

  parques: [
    {
      nome: 'Parque Cidade de Limeira',
      descricao:
        'Complexo de cerca de 98,6 mil m² com pista de caminhada e corrida de aproximadamente 1.000 m, academia ao ar livre, trilha ecológica, lago, quadras e ginásio.',
    },
    {
      nome: 'Parque Limeirão',
      descricao:
        'Tem pista de caminhada, academia ao ar livre, pista de skate, ciclovia interna, slackline, quadras de areia e campo de futebol.',
    },
    {
      nome: 'Parque Ecológico do Jardim do Lago',
      descricao:
        'Com pista de caminhada e corrida, academia ao ar livre, lago, campo de futebol e playground, recém-revitalizado e de acesso gratuito.',
    },
  ],
  ciclovias:
    'Há infraestrutura cicloviária dispersa (como na Via Guilherme Dibbern e no Parque Limeirão); a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical com estação seca, média anual em torno de 21,7 °C, verão quente e chuvoso (pico em janeiro) e inverno ameno e seco.',
  climaTreino:
    'No verão, vale priorizar o treino ao ar livre no início da manhã ou no fim de tarde; o inverno seco é o período mais confortável para corrida e atividades externas.',

  mobilidade:
    'Limeira tem posição estratégica no eixo rodoviário paulista, servida pelas rodovias Anhanguera (SP-330) e Bandeirantes (SP-348), além da ligação com Piracicaba.',

  corridas: [
    {
      nome: 'Meia Maratona da Inclusão de Limeira',
      descricao:
        'Prova com percursos de 21 km, 10 km, 5 km e caminhada, com largada no Parque da Cidade.',
    },
    {
      nome: 'TF Experience Running',
      descricao:
        'Corrida de rua com circuitos de 4 km e 8 km, com largada no Limeira Shopping, ao lado de eventos como o APAE Running e as corridas do SESI.',
    },
  ],
  culturaEsportiva:
    'Limeira tem calendário ativo de corridas de rua (provas beneficentes, comerciais e do SESI) e boa adesão às atividades ao ar livre nos parques municipais, com tradição esportiva ligada ao polo regional Campinas/Piracicaba.',
  academias:
    'A oferta reúne redes nacionais, boxes de crossfit e estúdios, com cobertura de planos corporativos, complementada por três parques municipais bem equipados.',

  destaquesFitness: [
    'Três parques municipais bem equipados (pista + academia ao ar livre), de acesso gratuito.',
    'Mercado de academias maduro, com redes nacionais e boxes de crossfit.',
    'Calendário recorrente de corridas de rua (Meia Maratona da Inclusão, TF Experience, SESI).',
    'Inverno seco e ameno favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Polo citrícola e da joia folheada, Limeira tem ótima rede de parques e mercado fitness maduro. Um personal trainer ajuda a aproveitar o Parque Cidade e o Limeirão com método, ajustando os horários ao calor do verão paulista.',

  vizinhas: ['campinas-sp', 'piracicaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Limeira', url: 'https://cidades.ibge.gov.br/brasil/sp/limeira/panorama' },
    { nome: 'Prefeitura de Limeira', url: 'https://www.limeira.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
