import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'iturama-mg',
  nome: 'Iturama',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ituramense',
  tipo: 'cidade',

  populacao: 38295,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  altitudeM: 453,

  resumoEconomico:
    'No extremo oeste do Triângulo Mineiro, na região do Pontal, Iturama tem a economia ancorada no agronegócio. O setor sucroalcooleiro é o principal motor — a usina da Coruripe instalada no município processa grandes volumes de cana e gera empregos diretos e indiretos —, ao lado da pecuária e da agricultura. A proximidade com o rio Grande e a represa de Água Vermelha (Usina Hidrelétrica de Água Vermelha) acrescenta vocação para pesca esportiva, esportes náuticos e turismo de lazer às margens do reservatório.',

  mercado:
    'Como cidade média do interior mineiro, Iturama tem um mercado fitness enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre quem busca acompanhamento individualizado e entre moradores que querem aproveitar as praças, o Parque João XXIII e a orla da represa como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim América', 'Bom Sucesso', 'São Miguel'],
  bairrosPopulares: ['Amazonas', 'Tiradentes', 'Antônio Bráulio', 'Santa Rita'],

  parques: [
    {
      nome: 'Parque João XXIII',
      descricao:
        'Área de lazer arborizada usada pela população para caminhada, corrida leve e descanso, um dos espaços públicos mais frequentados da cidade para atividade ao ar livre.',
    },
    {
      nome: 'Praça do Santuário',
      descricao:
        'Principal praça de Iturama, ponto de encontro no centro da cidade e referência para quem faz caminhadas no perímetro urbano.',
    },
    {
      nome: 'Orla da Represa de Água Vermelha (rio Grande)',
      descricao:
        'O lago formado pela Usina Hidrelétrica de Água Vermelha, no rio Grande, é palco de pesca esportiva, esportes náuticos e lazer, com trechos de margem aproveitados para atividade física em meio à natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais que cortam a região canavieira.',

  clima:
    'O clima é tropical, com verão quente e chuvoso (de outubro a março) e inverno seco e mais ameno. Por estar no oeste do Triângulo Mineiro, em baixa altitude para os padrões de Minas, a cidade enfrenta dias bastante quentes no auge do verão e a estação seca traz baixa umidade do ar, sobretudo entre julho e setembro.',
  climaTreino:
    'O calor do verão pede treinar bem cedo ou no fim da tarde, com hidratação reforçada; no período seco, a baixa umidade exige atenção redobrada à hidratação e às vias aéreas. Ambientes climatizados são a opção mais confortável nos picos de calor.',

  mobilidade:
    'Iturama se conecta por rodovias à malha do Triângulo Mineiro e do interior paulista: a BR-497 liga a cidade ao eixo de Uberlândia, enquanto a MG-255 e a MG-426 fazem a ligação com Frutal e a divisa com São Paulo. O transporte urbano é feito por ônibus, e os deslocamentos curtos dentro da cidade favorecem caminhada e bicicleta.',

  corridas: [
    {
      nome: 'Corrida Evolua-se',
      descricao:
        'Prova de rua realizada em Iturama, com percursos de corrida e caminhada pelas ruas da cidade, reunindo praticantes locais e da região do Pontal.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e do Parque João XXIII para caminhada e corrida, a pesca esportiva e os esportes náuticos na represa de Água Vermelha, e provas de rua que movimentam a comunidade. O Centro Olímpico e os equipamentos públicos completam a oferta de espaços para a prática.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Capital regional do Pontal do Triângulo Mineiro, com economia ancorada no setor sucroalcooleiro e na pecuária.',
    'Represa de Água Vermelha, no rio Grande, com pesca esportiva, esportes náuticos e lazer às margens do reservatório.',
    'Parque João XXIII e praças como espaços de caminhada e corrida ao ar livre.',
    'Clima tropical com verão quente e chuvoso e inverno seco, que pede planejamento de horário e hidratação no treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade do Pontal do Triângulo Mineiro, cercada por canaviais e às margens da represa de Água Vermelha, Iturama oferece praças, parques e a orla do rio Grande como cenário para o treino ao ar livre. Um personal trainer ajuda a organizar a rotina respeitando o calor do verão e a secura do inverno, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['frutal-mg', 'ituiutaba-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Iturama', url: 'https://cidades.ibge.gov.br/brasil/mg/iturama/panorama' },
    { nome: 'Prefeitura de Iturama', url: 'https://www.iturama.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
