import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-joaquim-de-bicas-mg',
  nome: 'São Joaquim de Bicas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'são-joaquinense',
  tipo: 'cidade',

  populacao: 34348,
  populacaoAno: 2022,
  idhm: 0.662,
  idhmClasse: 'médio',
  altitudeM: 780,

  resumoEconomico:
    'No vetor oeste da Região Metropolitana de Belo Horizonte, às margens da BR-381, São Joaquim de Bicas é uma cidade jovem — emancipada de Igarapé em 1995 — que se firmou como polo logístico e industrial da Grande BH. A posição estratégica no eixo rodoviário entre São Paulo e Belo Horizonte atraiu galpões, distribuidoras, um distrito industrial e o Porto Seco Sul de Minas, além de operações ligadas à mineração da região (incluindo extração de quartzo). O rio Paraopeba corta o município e marca sua história recente, afetado a jusante pelo rompimento da barragem de Brumadinho em 2019.',

  mercado:
    'Cidade-dormitório e polo logístico da RM BH, São Joaquim de Bicas tem um mercado fitness em formação, apoiado na proximidade com Betim e no fluxo de trabalhadores da região. A procura por personal trainers cresce entre quem quer treino orientado perto de casa, sem depender do deslocamento diário para a capital, e entre trabalhadores da indústria e da logística que buscam rotina de atividade física fora do horário comercial.',

  bairrosNobres: ['Centro', 'Tereza Cristina', 'Estância Paraopeba', 'Nazaré'],
  bairrosPopulares: ['Tupanuara', 'Fernando Costa', 'Primavera', 'Vale do Sol'],

  parques: [
    {
      nome: 'Praça da Promessa (bairro Tereza Cristina)',
      descricao:
        'Um dos principais espaços de convivência da cidade, palco de eventos municipais e ponto de encontro para caminhada e atividades ao ar livre no entorno do bairro Tereza Cristina.',
    },
    {
      nome: 'Orla e várzea do rio Paraopeba',
      descricao:
        'O rio que corta o município define a paisagem e os trechos de várzea usados para caminhada; é uma área marcada pela recuperação ambiental em curso após o rompimento da barragem de Brumadinho, que atingiu o Paraopeba a jusante.',
    },
    {
      nome: 'Serras e entorno rural',
      descricao:
        'O relevo de morros e a área rural no limite com Brumadinho e Igarapé oferecem estradas e caminhos para pedal e corrida em meio à Mata Atlântica que recobre o território.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e concentrada em trechos da área urbana; boa parte do pedal acontece em vias locais dos bairros e em estradas de acesso à zona rural, exigindo atenção ao tráfego pesado da BR-381 e das rotas de caminhões.',

  clima:
    'O clima é tropical de altitude, típico da Grande BH: verões quentes e chuvosos (de outubro a março) e invernos amenos e secos, com noites frescas. A cerca de 780 metros de altitude, as temperaturas são mais agradáveis que as do litoral, com boa amplitude térmica entre o dia e a noite.',
  climaTreino:
    'O período seco do inverno favorece o treino ao ar livre, com dias ensolarados e menos chuva; no verão, o calor do meio-dia e as pancadas de chuva de fim de tarde pedem ajuste de horário, com preferência para o começo da manhã. A baixa umidade do inverno reforça a atenção à hidratação.',

  mobilidade:
    'A cidade é cortada pela BR-381 (Fernão Dias), principal ligação com Betim, Belo Horizonte e São Paulo, o que sustenta sua vocação logística. O transporte para a capital e municípios vizinhos é feito por linhas metropolitanas de ônibus, e a dependência do eixo rodoviário faz do deslocamento diário parte da rotina de muitos moradores.',

  corridas: [
    {
      nome: 'Corrida de São Joaquim de Bicas',
      descricao:
        'Prova de rua promovida no calendário do município, com percursos de corrida e caminhada; a edição especial de 30 anos de emancipação, em 2025, foi realizada na Praça da Promessa, no bairro Tereza Cristina, com participação gratuita.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local se apoia em eventos municipais de corrida e caminhada, no futebol de bairro e no uso de praças e vias urbanas para atividade física, num contexto de cidade jovem da Região Metropolitana de Belo Horizonte em que a estrutura esportiva ainda está em expansão.',
  academias:
    'A oferta é formada por academias de bairro voltadas a musculação e treino funcional, distribuídas pela área urbana, com porte compatível com uma cidade em crescimento da Grande BH e complementada pela proximidade da estrutura fitness de Betim.',

  destaquesFitness: [
    'Cidade do vetor oeste da Região Metropolitana de Belo Horizonte, cortada pela BR-381 (Fernão Dias).',
    'Polo logístico e industrial, com distrito industrial e o Porto Seco Sul de Minas às margens da rodovia.',
    'Clima tropical de altitude (cerca de 780 m), com inverno seco favorável ao treino ao ar livre.',
    'Rio Paraopeba no território, área em recuperação ambiental após o rompimento da barragem de Brumadinho.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade jovem e em crescimento na Grande BH, São Joaquim de Bicas combina a rotina de deslocamento pelo eixo da BR-381 com um clima de altitude favorável à atividade física, sobretudo no inverno seco. Um personal trainer ajuda a encaixar o treino na agenda de quem vive entre a cidade e a capital, organizando horários e mantendo a constância perto de casa.',

  vizinhas: ['betim-mg', 'igarape-mg', 'brumadinho-mg'],

  fontes: [
    { nome: 'IBGE Cidades — São Joaquim de Bicas', url: 'https://cidades.ibge.gov.br/brasil/mg/sao-joaquim-de-bicas/panorama' },
    { nome: 'Prefeitura de São Joaquim de Bicas', url: 'https://www.saojoaquimdebicas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
