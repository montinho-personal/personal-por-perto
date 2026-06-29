import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sapucaia-do-sul-rs',
  nome: 'Sapucaia do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'sapucaiense',
  tipo: 'cidade',

  populacao: 132107,
  populacaoAno: 2022,
  idhm: 0.726,
  idhmClasse: 'alto',
  altitudeM: 23,

  resumoEconomico:
    'Sapucaia do Sul fica na Região Metropolitana de Porto Alegre, no eixo da BR-116 entre Canoas e São Leopoldo, a cerca de 25 km da capital. É uma cidade de perfil industrial, com forte presença da metalurgia e de indústrias de transformação, complementada por comércio e serviços que atendem o vale do Rio dos Sinos.',

  mercado:
    'Cidade de porte médio e densidade demográfica alta, Sapucaia do Sul concentra academias de bairro e redes de musculação ao longo dos principais corredores comerciais. O personal trainer encontra demanda na orientação individual e no aproveitamento das praças e pistas de caminhada espalhadas pelos bairros.',

  bairrosNobres: ['Centro', 'Piratini', 'Jardim América', 'Boa Vista'],
  bairrosPopulares: ['Lomba da Palmeira', 'Capão da Cruz', 'Walderez', 'Pasqualini'],

  parques: [
    {
      nome: 'Parque Zoológico do Rio Grande do Sul',
      descricao:
        'Localizado na parada 41 da BR-116, é um dos maiores zoológicos da América Latina, com cerca de 780 hectares (620 de reserva florestal). Suas áreas de mata e caminhos arborizados são usadas para caminhada e contato com a natureza.',
    },
    {
      nome: 'Praça da Juventude (Capão da Cruz)',
      descricao:
        'Equipamento público com campo de futebol, quadras de areia e futsal, pista de caminhada, pista de skate e pracinha, reunindo várias modalidades de atividade física ao ar livre.',
    },
    {
      nome: 'CEU das Artes (Vargas)',
      descricao:
        'O Centro de Artes e Esportes Unificado oferece quadra poliesportiva coberta, pista de skate e playground, ampliando o acesso à prática esportiva no bairro.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa nas vias principais, integrados ao deslocamento até as estações da Trensurb; a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, típico da Região Metropolitana de Porto Alegre, com verões quentes e invernos frios em que as mínimas podem se aproximar de zero.',
  climaTreino:
    'A umidade e o frio do inverno favorecem o treino indoor; nos meses quentes, vale priorizar o início da manhã ou o fim da tarde, com hidratação reforçada.',

  mobilidade:
    'Sapucaia do Sul é cortada pela BR-116, principal eixo logístico da região, e atendida pela Trensurb, que liga a cidade a Porto Alegre, Canoas, São Leopoldo e Novo Hamburgo — facilitando o acesso a parques e academias de toda a Grande Porto Alegre.',

  corridas: [
    {
      nome: 'Corrida Rústica de Sapucaia do Sul',
      descricao:
        'Prova promovida pela Prefeitura, com largada na pista de caminhada da Avenida Sapucaia, reunindo a Corrida Kids e percursos para adultos.',
    },
    {
      nome: 'Corrida Sapucaia Sesc',
      descricao:
        'Evento de corrida de rua realizado na cidade, com largada na região da Avenida Lúcio Bittencourt, no bairro Piratini.',
    },
  ],
  culturaEsportiva:
    'O esporte municipal se apoia em praças esportivas, pistas de caminhada e provas de rua que integram famílias e estudantes, com forte uso dos espaços públicos de bairro.',
  academias:
    'A oferta reúne academias de bairro e redes de musculação nos corredores comerciais, complementadas por praças com pista de caminhada e pelas áreas verdes do Parque Zoológico.',

  destaquesFitness: [
    'Parque Zoológico do RS: caminhada em meio a 780 hectares de mata e área de visitação.',
    'Praça da Juventude (Capão da Cruz): pista de caminhada, quadras e pista de skate.',
    'Avenida Sapucaia: pista de caminhada que recebe as corridas municipais.',
    'Trensurb e BR-116: conexão rápida a parques e academias de toda a Grande Porto Alegre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade industrial e bem conectada da Grande Porto Alegre, Sapucaia do Sul combina praças esportivas de bairro com a área verde do Parque Zoológico do RS. Um personal trainer ajuda a estruturar o treino aproveitando as pistas de caminhada e as praças, alternando o ar livre com a academia nos meses frios.',

  vizinhas: ['sao-leopoldo-rs', 'canoas-rs', 'novo-hamburgo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Sapucaia do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/sapucaia-do-sul/panorama' },
    { nome: 'Prefeitura de Sapucaia do Sul', url: 'https://www.sapucaiadosul.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
