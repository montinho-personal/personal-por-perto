import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sinop-mt',
  nome: 'Sinop',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'sinopense',
  tipo: 'cidade',

  populacao: 196312,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 384,

  resumoEconomico:
    'Polo do agronegócio do norte de Mato Grosso, sobre a BR-163, Sinop tem a soja como carro-chefe, seguida de milho e carne, com a madeira ainda presente na economia. É a terceira do estado em exportações e tem PIB per capita elevado — uma cidade jovem (fundada em 1974) e planejada, com avenidas largas e alta renda.',

  mercado:
    'Cidade jovem e próspera do agro, Sinop tem forte demanda fitness atendida por redes, academias locais e personal trainers atuantes — perfil ideal também para consultoria online.',

  bairrosNobres: ['Jardim Botânico', 'Residencial Bella Suíça', 'Jardim Belo Horizonte', 'Jardim das Oliveiras'],
  bairrosPopulares: ['Jardim Violetas', 'Jardim Primavera', 'Jardim Boa Esperança', 'Jardim Imperial'],

  parques: [
    {
      nome: 'Parque Florestal de Sinop',
      descricao:
        'Cerca de 100 hectares de mata nativa com lago de 30 mil m², espaços de convívio, quadras, campo e pista de caminhada.',
    },
    {
      nome: 'Parque Jardim Botânico',
      descricao:
        'Tem pista de caminhada em piso intertravado (mais de 13 mil m²), academias ao ar livre, playground e quadras poliesportivas, de acesso gratuito.',
    },
    {
      nome: 'Parque Gigante do Norte',
      descricao:
        'Complexo de 70 mil m² com pista de caminhada, academia ao ar livre, centro de treinamento, quadras e estádio.',
    },
  ],
  ciclovias:
    'A ciclovia e pista de caminhada da Avenida das Itaúbas tem cerca de 1,7 km, com iluminação LED, e há outras ciclovias distribuídas pelos setores.',

  clima:
    'O clima é tropical quente e úmido, com estação chuvosa no verão e seca no inverno, típico do norte de Mato Grosso.',
  climaTreino:
    'O calor e a umidade elevados exigem treinos nos horários mais frescos e atenção redobrada à hidratação.',

  mobilidade:
    'Sinop é estruturada pela BR-163, principal rota de escoamento de commodities aos portos, eixo central da cidade.',

  corridas: [
    {
      nome: 'Corrida Cidade de Sinop',
      descricao:
        'Prova de rua com arena montada no estacionamento do Shopping Sinop.',
    },
    {
      nome: 'SNP Run',
      descricao:
        'Corrida de rua já consolidada no calendário local, com inscrições que esgotam antes do prazo.',
    },
  ],
  culturaEsportiva:
    'Cidade planejada, Sinop tem ampla infraestrutura esportiva pública (Parque Gigante do Norte e complexos esportivos), eventos municipais de saúde e um calendário crescente de corridas de rua.',
  academias:
    'A oferta reúne redes nacionais já instaladas e academias locais, com público jovem de renda alta, complementada pelo Parque Gigante do Norte e pelo Jardim Botânico.',

  destaquesFitness: [
    'Renda alta do agro e população jovem em rápido crescimento — mercado fitness em expansão.',
    'Redes nacionais já instaladas, além de academias locais.',
    'Parque Gigante do Norte e Jardim Botânico como polos de treino ao ar livre gratuitos.',
    'Eventos de corrida consolidados (SNP Run, Corrida Cidade de Sinop).',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 350,
    mensalMax: 940,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade jovem e próspera do agro mato-grossense, Sinop tem ótima infraestrutura esportiva pública e renda alta. Um personal trainer ajuda a aproveitar o Parque Gigante do Norte e o Jardim Botânico com método, ajustando horários e hidratação ao calor do norte de MT.',

  vizinhas: ['cuiaba-mt', 'rondonopolis-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Sinop', url: 'https://cidades.ibge.gov.br/brasil/mt/sinop/panorama' },
    { nome: 'Prefeitura de Sinop', url: 'https://www.sinop.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
