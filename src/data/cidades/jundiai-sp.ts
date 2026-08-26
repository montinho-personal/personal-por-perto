import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jundiai-sp',
  nome: 'Jundiaí',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'jundiaiense',
  tipo: 'cidade',

  populacao: 443221,
  populacaoAno: 2022,
  idhm: 0.822,
  idhmClasse: 'muito alto',
  altitudeM: 762,

  resumoEconomico:
    'Uma das economias mais ricas do interior paulista, Jundiaí tem parque industrial diversificado (alimentos e bebidas, metalurgia, autopeças) e abriga operações de grandes grupos. É a "Terra da Uva" e guarda a Serra do Japi, uma Reserva da Biosfera da Mata Atlântica reconhecida pela Unesco. Cidade de alto IDHM e ótima qualidade de vida, com forte cultura de vida ao ar livre.',

  mercado:
    'Cidade de alta renda, Jundiaí tem redes nacionais presentes (como a Smart Fit) e uma forte cultura de caminhada, corrida e ciclismo, favorecida pela Serra do Japi e por parques com mais de 20 km de pistas públicas. A demanda por personal trainers acompanha esse perfil ativo e exigente.',

  bairrosNobres: ['Anhangabaú', 'Jardim Ana Maria', 'Vila Japi', 'Parque do Colégio'],
  bairrosPopulares: ['Vila Rami', 'Jardim Tamoio', 'Ponte São João', 'Eloy Chaves'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Com cerca de 500 mil m² às margens de um reservatório, tem duas pistas de cooper de 2,1 km, pista de caminhada de cerca de 2.760 m, ciclovia iluminada, academia ao ar livre (com equipamentos acessíveis), bebedouros e duchas.',
    },
    {
      nome: 'Jardim Botânico de Jundiaí',
      descricao:
        'Com ciclovia e área de caminhada, é conectado ao Parque da Cidade por uma ciclovia — um circuito completo para treino ao ar livre.',
    },
    {
      nome: 'Serra do Japi',
      descricao:
        'Área de mata preservada (mais de 90 km² no município), com trilhas para caminhada e treino em ambiente natural — um diferencial raro entre as cidades do interior.',
    },
  ],
  ciclovias:
    'A ciclovia que liga o Jardim Botânico ao Parque da Cidade soma cerca de 7 km, e está em implantação a Ciclovia dos Bandeirantes, que ligará a região à capital.',

  clima:
    'O clima é subtropical de altitude (cerca de 762 m), com invernos mais amenos e secos e verões quentes e chuvosos; a mata e a altitude deixam o ar mais fresco.',
  climaTreino:
    'As condições para treino ao ar livre são ótimas, especialmente nas manhãs. No verão, vale ficar atento às chuvas de fim de tarde.',

  mobilidade:
    'Jundiaí é servida pelas rodovias Anhanguera (SP-330) e dos Bandeirantes (SP-348), dois dos principais eixos de São Paulo, além da João Cereser, sendo um dos maiores polos logísticos do país e bem conectada à capital e a Campinas.',

  corridas: [
    {
      nome: 'Prova Pedestre Unimed Jundiaí',
      descricao:
        'Uma das corridas mais tradicionais da região, com percursos de 5 km e 10 km (corrida e caminhada) e prova kids.',
    },
    {
      nome: 'Circuito Eco no Parque da Cidade',
      descricao:
        'Corrida gratuita no Parque da Cidade, com provas de 5 km e 10 km, parte de um calendário esportivo ativo.',
    },
  ],
  culturaEsportiva:
    'Jundiaí tem tradição em provas pedestres e forte uso dos parques e da Serra do Japi para caminhada, corrida e ciclismo. É uma cidade reconhecida por qualidade de vida e gestão premiada, o que se reflete na boa infraestrutura esportiva.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit) e estúdios de funcional e crossfit, atendendo um público de alta renda que valoriza tanto a musculação quanto o treino ao ar livre.',

  academiasProximas: [
    { nome: 'Smart Fit Jardim Liberdade', detalhe: 'na Av. Antônio Frederico Ozanan' },
    { nome: 'Smart Fit Jundiaí Shopping', detalhe: 'unidade da rede dentro do shopping' },
    { nome: 'Bluefit Centro', detalhe: 'na Rua XV de Novembro, no Centro' },
    { nome: 'Bluefit Anhangabaú', detalhe: 'na Av. Nove de Julho' },
    { nome: 'Bluefit Ponte de Campinas', detalhe: 'na Av. União dos Ferroviários' },
  ],

  destaquesFitness: [
    'Parque da Cidade com pistas de cooper de 2,1 km, academia ao ar livre e ciclovia iluminada.',
    'Serra do Japi para trilha e caminhada em Mata Atlântica preservada.',
    'Presença de redes nacionais em uma cidade de alta renda.',
    'Provas pedestres tradicionais (Unimed, Circuito Eco) consolidando a cena de corrida.',
  ],

  precos: {
    avulsaMin: 85,
    avulsaMax: 195,
    mensalMin: 420,
    mensalMax: 1150,
    onlineMin: 190,
    onlineMax: 480,
  },

  conclusao:
    'Rica, arborizada e com a Serra do Japi como quintal, Jundiaí é um convite à vida ativa. Um personal trainer ajuda a aproveitar o Parque da Cidade, as trilhas e as academias da cidade com um plano sob medida — unindo qualidade de vida e resultado.',

  vizinhas: ['campinas-sp', 'sao-paulo-sp', 'sorocaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Jundiaí', url: 'https://cidades.ibge.gov.br/brasil/sp/jundiai/panorama' },
    { nome: 'Prefeitura de Jundiaí', url: 'https://www.jundiai.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-26',
  capaArte: {
    src: '/capas-cidade/jundiai-sp.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Jundiaí (SP) em arte que une treino de força e a paisagem real da cidade — a Serra do Japi ao fundo, a ponte estaiada e os prédios do centro expandido — Personal por Perto',
    legenda:
      'Treino personalizado em Jundiaí: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
