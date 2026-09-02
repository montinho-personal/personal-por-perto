import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'toledo-pr',
  nome: 'Toledo',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'toledano',
  tipo: 'cidade',

  populacao: 150470,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 560,

  resumoEconomico:
    'Maior cidade do oeste paranaense e principal polo do agronegócio do estado, Toledo é líder nacional em suinocultura e tem um dos maiores valores de produção agropecuária do Paraná, com gigantes como a BRF e a cooperativa Coopavel. Boa parte dos empregos está ligada a essa cadeia, sustentando alta renda.',

  mercado:
    'O mercado consumidor é robusto, com forte presença de redes e academias locais e oferta diversificada (musculação, crossfit, funcional e personal), sustentada pela renda do agronegócio.',

  bairrosNobres: ['Jardim Porto Alegre', 'Jardim Gisela', 'Vila Industrial', 'Jardim La Salle'],
  bairrosPopulares: ['Jardim Coopagro', 'Vila Pioneiro', 'Jardim Europa', 'Jardim Santa Maria'],

  parques: [
    {
      nome: 'Parque Ecológico Diva Paim Barth (Lago Municipal)',
      descricao:
        'Cartão-postal da cidade, com pista de caminhada e corrida emborrachada, ciclovia, academia ao ar livre e quadra poliesportiva.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Bosques e praças da rede municipal com equipamentos de ginástica.',
    },
    {
      nome: 'Vias de mobilidade (Av. Maripá)',
      descricao:
        'Eixos com ciclovia, usados para pedal e corrida na malha urbana.',
    },
  ],
  ciclovias:
    'Há ciclovias em projetos de mobilidade, como na Av. Maripá; a extensão total da malha ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com verões quentes e úmidos e invernos curtos e amenos, média em torno de 19 °C.',
  climaTreino:
    'Os invernos são menos rigorosos que no resto do Sul, mas o verão quente e úmido pede hidratação e treino nas primeiras horas do dia.',

  mobilidade:
    'Toledo é cortada pela BR-467 (ligação com Cascavel) e pela BR-163, eixos do oeste paranaense.',

  corridas: [
    {
      nome: 'Meia Maratona de Toledo',
      descricao:
        'Tradicional prova com 21 km, rústica de 6 km, revezamento e caminhada, com largada no Lago Municipal.',
    },
    {
      nome: 'Provas da Associação Correr Toledo',
      descricao:
        'Corridas de rua locais com largada no Lago Diva Paim Barth.',
    },
  ],
  culturaEsportiva:
    'Cidade ativa, com o Lago Municipal como hub de corrida e caminhada e boa qualidade de vida que estimula a prática esportiva.',
  academias:
    'A oferta reúne grandes redes e academias locais, com renda alta do agronegócio, complementada pelo Lago Municipal e pelas praças com academia ao ar livre.',

  academiasProximas: [
    { nome: 'Bluefit', detalhe: 'unidade em Toledo' },
    { nome: 'AquaFit', detalhe: 'rede local com três unidades, incluindo natação e hidroginástica' },
    { nome: 'Estrutura do Lago Municipal', detalhe: 'pista do Parque Diva Paim Barth, gratuita' },
  ],

  destaquesFitness: [
    'Lago Municipal como ponto central de treino ao ar livre (pista emborrachada e academia ao ar livre).',
    'Renda alta do agronegócio — público disposto a investir em personal e academias premium.',
    'Presença de grandes redes ao lado de academias locais.',
    'Clima mais ameno que o Sul profundo, favorável ao treino outdoor o ano todo.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Capital do agronegócio do Paraná, Toledo une alta renda e o Lago Municipal como centro de treino. Um personal trainer encontra aqui um público com poder de investir, ideal para treino presencial e online, num clima favorável ao outdoor.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Toledo?',
      resposta:
        'O Lago Municipal — Parque Ecológico Diva Paim Barth — é o coração do treino ao ar livre, com pista movimentada de manhã e no fim de tarde. Completam o mapa as academias (Bluefit, as três unidades da rede local AquaFit e as consolidadas de bairro), as praças com academia ao ar livre e o atendimento em casa. A Meia Maratona de Toledo dá o alvo do calendário para quem corre orientado.',
    },
    {
      pergunta: 'Dá para se preparar para a Meia Maratona de Toledo com personal?',
      resposta:
        'Dá — e o Lago Municipal é a base natural da preparação: percurso plano e seguro para rodagens e intervalados, com a Avenida Maripá completando os treinos mais longos. A planilha típica leva 12 a 16 semanas, com fortalecimento em academia duas vezes por semana. O clima do oeste paranaense colabora quase o ano todo; no verão quente e úmido, os longos migram para o amanhecer. O personal monta a progressão e segura a ansiedade de aumentar volume rápido demais.',
    },
    {
      pergunta: 'Há acompanhamento em Toledo para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Toledo, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou o Lago Municipal), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['cascavel-pr', 'foz-do-iguacu-pr'],

  capaArte: {
    src: '/capas-cidade/toledo-pr.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Toledo (PR) em arte com a Catedral Cristo Rei, o Parque Ecológico Diva Paim Barth e os silos do agronegócio, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Toledo: mais saúde, mais energia, mais vida, com acompanhamento profissional no oeste do Paraná.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Toledo', url: 'https://cidades.ibge.gov.br/brasil/pr/toledo/panorama' },
    { nome: 'Prefeitura de Toledo', url: 'https://www.toledo.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-02',
};
