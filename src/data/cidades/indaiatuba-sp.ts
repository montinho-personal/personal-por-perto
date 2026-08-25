import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'indaiatuba-sp',
  nome: 'Indaiatuba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'indaiatubano',
  tipo: 'cidade',

  populacao: 255739,
  populacaoAno: 2022,
  idhm: 0.788,
  idhmClasse: 'alto',
  altitudeM: 624,

  resumoEconomico:
    'Integrante da Região Metropolitana de Campinas, Indaiatuba tem renda per capita acima da média nacional e um parque industrial diversificado (com nomes como John Deere e Unilever), impulsionado pela proximidade do Aeroporto Internacional de Viracopos e pela logística rodoviária, com conexão direta às rodovias e ao porto de Santos.',

  mercado:
    'Cidade de alta renda e cultura esportiva consolidada, Indaiatuba tem público com bom poder aquisitivo e bairros planejados que favorecem academias premium, estúdios e personal trainers, com demanda fortíssima por corrida de rua.',

  bairrosNobres: ['Helvétia', 'Jardim Pau Preto', 'Jardim Esplanada', 'Vila Suíça'],
  bairrosPopulares: ['Jardim Morada do Sol', 'CECAP', 'Itaici', 'Cidade Nova'],

  parques: [
    {
      nome: 'Parque Ecológico de Indaiatuba',
      descricao:
        'Projeto de Ruy Ohtake com cerca de 16 km de pistas de caminhada, ciclovias e ciclofaixas, mirante, pista de bicicross e playgrounds — corta boa parte da cidade.',
    },
    {
      nome: 'Parque Ecológico do Buru',
      descricao:
        'Trecho linear com ciclovia e pista de caminhada, em expansão.',
    },
    {
      nome: 'Complexo Esportivo CECAP / Praça do Lago',
      descricao:
        'Núcleos esportivos públicos com ginásio, quadras e áreas de caminhada e corrida.',
    },
  ],
  ciclovias:
    'A rede é extensa e integrada ao parque linear: o Parque Ecológico tem cerca de 16 km de pistas e ciclovias.',

  clima:
    'O clima é tropical de altitude, e a altitude (cerca de 624 m) garante noites mais frescas na estação seca e dias ensolarados.',
  climaTreino:
    'O clima é muito favorável ao treino ao ar livre o ano todo, especialmente para corrida no fim de tarde e à noite.',

  mobilidade:
    'O principal eixo é a Rodovia Santos Dumont (SP-75), duplicada, ligando Campinas a Sorocaba, com integração às demais rodovias e acesso a Viracopos.',

  corridas: [
    {
      nome: 'Corrida de Rua Cidade de Indaiatuba',
      descricao:
        'Prova tradicional já em dezenas de edições, com milhares de inscritos e distâncias de 5 km e 10 km.',
    },
    {
      nome: 'Circuito SESI de Corrida de Rua — Etapa Indaiatuba',
      descricao:
        'Provas recorrentes com apoio institucional, parte do forte calendário local.',
    },
  ],
  culturaEsportiva:
    'Indaiatuba tem forte engajamento popular com corrida de rua, sustentado pela infraestrutura urbana (parque linear), por uma comunidade esportiva ativa e pelo apoio empresarial — é uma das cidades mais ativas do interior nesse quesito.',
  academias:
    'A oferta inclui academias premium e estúdios, com público de alta renda, complementada por um dos melhores espaços públicos de treino do interior paulista.',

  destaquesFitness: [
    'Parque Ecológico (cerca de 16 km) — um dos melhores espaços públicos de treino do interior paulista.',
    'Alta renda e mercado premium para personal e estúdios.',
    'Corrida Cidade de Indaiatuba: um dos maiores eventos de rua da região.',
    'Clima de altitude e cidade arborizada, ideais para treino outdoor.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 185,
    mensalMin: 390,
    mensalMax: 1050,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Cidade de alta renda na RM de Campinas, Indaiatuba tem um parque linear excepcional e uma das cenas de corrida mais fortes do interior. Um personal trainer ajuda a aproveitar o Parque Ecológico com método, num clima de altitude favorável o ano todo.',

  vizinhas: ['campinas-sp', 'salto-sp', 'itu-sp'],

  faqsExtra: [
    {
      pergunta: 'Onde treinar ao ar livre em Indaiatuba?',
      resposta:
        'O Parque Ecológico é o cartão-postal e a pista oficial da cidade: quilômetros de pista de caminhada e ciclovia em anel contínuo, com academia ao ar livre e o palco das principais corridas — da Corrida Cidade de Indaiatuba às provas beneficentes do calendário. O Parque do Mirim, com o Circuito Eco Ambiental, é a alternativa com clima de natureza.',
    },
    {
      pergunta: 'Personal trainer atende em condomínio em Indaiatuba?',
      resposta:
        'Sim — é um dos mercados de condomínio mais fortes do interior paulista: a cidade cresceu em loteamentos fechados com academias próprias, e o atendimento a domicílio é rotina dos profissionais locais. Muitos moradores que trabalham em Campinas ou em Salto preferem treinar no próprio condomínio pela economia de deslocamento.',
    },
    {
      pergunta: 'Quanto custa personal trainer em Indaiatuba em relação a Campinas?',
      resposta:
        'Os valores são próximos — Indaiatuba tem renda alta e público exigente —, com sessões avulsas levemente mais acessíveis que as do Cambuí e pacotes competitivos nos condomínios, onde o profissional otimiza a agenda atendendo vários alunos no mesmo endereço. O formato em dupla é comum entre vizinhos e casais.',
    },
  ],
  capaArte: {
    src: '/capas-cidade/indaiatuba-sp.webp',
    w: 1200,
    h: 800,
    alt: 'Personal trainer em Indaiatuba (SP) em arte com o skyline urbano ao fundo e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Indaiatuba: seu melhor investimento é em você, com acompanhamento profissional na região metropolitana de Campinas.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Indaiatuba', url: 'https://cidades.ibge.gov.br/brasil/sp/indaiatuba/panorama' },
    { nome: 'Prefeitura de Indaiatuba', url: 'https://www.indaiatuba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-25',
};
