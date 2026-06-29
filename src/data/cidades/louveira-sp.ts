import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'louveira-sp',
  nome: 'Louveira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'louveirense',
  tipo: 'cidade',

  populacao: 51847,
  populacaoAno: 2022,
  idhm: 0.777,
  idhmClasse: 'alto',
  altitudeM: 690,

  resumoEconomico:
    'Localizada entre Jundiaí e Campinas, Louveira tem um dos maiores PIB per capita do Brasil — figurou entre os primeiros do país, puxada por um forte polo industrial e logístico e pela posição estratégica junto às grandes rodovias paulistas. A economia é dominada por serviços e indústria, e a cidade preserva sua identidade agrícola ligada à uva Niagara, herança da imigração italiana, celebrada na tradicional Festa da Uva (parte do Circuito das Frutas).',

  mercado:
    'Com renda elevada e perfil de cidade pequena e próspera, Louveira reúne condomínios residenciais, boa oferta de academias e estúdios e um público que valoriza saúde e bem-estar. Esse cenário sustenta uma demanda consistente por personal trainers, com clientes exigentes que buscam acompanhamento próximo e personalizado.',

  bairrosNobres: ['Centro', 'Jardim Promeca', 'Reserva da Mata', 'Jardim Boa Esperança'],
  bairrosPopulares: ['Leitão', 'Vila Sartori', 'Jardim das Palmeiras', 'Conjunto Habitacional'],

  parques: [
    {
      nome: 'Parque Luigi Martini',
      descricao:
        'Construído ao redor da represa do Córrego Fetá, tem pista de caminhada de cerca de 1.800 m, bebedouros, iluminação, bancos e sanitários — um circuito completo para caminhada e corrida.',
    },
    {
      nome: 'Parque Francisco Bossi (Capivari)',
      descricao:
        'Espaço de lazer com pista de caminhada, ciclovia, academia ao ar livre, playground, deque de madeira, fontes interativas e quiosques — opção moderna para treino e atividade física ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia em seus parques e vias, integrados às pistas de caminhada do Parque Francisco Bossi, favorecendo o pedal e o treino ao ar livre em um ambiente arborizado.',

  clima:
    'O clima é subtropical de altitude (cerca de 690 m), com verões quentes e chuvosos e invernos mais amenos e secos, típicos do interior paulista entre Jundiaí e Campinas.',
  climaTreino:
    'As condições para treino ao ar livre são favoráveis durante boa parte do ano, com manhãs agradáveis; no verão, vale atenção ao calor do meio-dia e às chuvas de fim de tarde.',

  mobilidade:
    'Louveira é cortada pela Rodovia Anhanguera (SP-330) e fica às margens da Rodovia dos Bandeirantes (SP-348), dois dos principais eixos do estado, o que a torna um polo logístico e a conecta rapidamente a Jundiaí, Vinhedo, Valinhos e Campinas.',

  corridas: [
    {
      nome: 'Festa da Uva e Expo Caqui',
      descricao:
        'Maior evento da cidade e parte do Circuito das Frutas, celebra a tradição da uva Niagara com gastronomia, shows e atrações para a família, movimentando a economia e a vida ao ar livre local.',
    },
    {
      nome: 'Corridas e caminhadas nos parques municipais',
      descricao:
        'O Parque Luigi Martini e o Parque Francisco Bossi sediam atividades de caminhada e corrida, com pistas próprias usadas no dia a dia por moradores e em eventos esportivos do calendário municipal.',
    },
  ],
  culturaEsportiva:
    'A cultura ativa de Louveira se apoia nos parques municipais e em um público de alta renda atento à saúde. A forte identidade ligada à uva e ao Circuito das Frutas também alimenta eventos e atividades ao ar livre ao longo do ano.',
  academias:
    'A oferta reúne academias de musculação e estúdios de funcional, cross e treino personalizado, atendendo um público que valoriza acompanhamento de qualidade — um terreno fértil para o personal trainer.',

  destaquesFitness: [
    'Um dos maiores PIB per capita do Brasil, com público de alta renda e renda disponível para serviços de saúde e bem-estar.',
    'Parque Francisco Bossi com pista de caminhada, ciclovia e academia ao ar livre.',
    'Parque Luigi Martini com pista de cerca de 1.800 m ao redor da represa.',
    'Boa oferta de academias e estúdios em uma cidade compacta e próspera.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 180,
    mensalMin: 430,
    mensalMax: 1100,
    onlineMin: 190,
    onlineMax: 480,
  },

  conclusao:
    'Próspera, compacta e bem servida de parques e academias, Louveira oferece um ambiente ideal para quem leva o treino a sério. Um personal trainer ajuda a transformar essa estrutura — do Parque Luigi Martini ao Francisco Bossi — em resultados, com um plano sob medida para a rotina de cada cliente.',

  vizinhas: ['vinhedo-sp', 'jundiai-sp', 'valinhos-sp', 'campinas-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Louveira', url: 'https://cidades.ibge.gov.br/brasil/sp/louveira/panorama' },
    { nome: 'Prefeitura de Louveira', url: 'https://www.louveira.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
