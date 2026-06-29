import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'hortolandia-sp',
  nome: 'Hortolândia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'hortolandense',
  tipo: 'cidade',

  populacao: 236641,
  populacaoAno: 2022,
  idhm: 0.756,
  idhmClasse: 'alto',
  altitudeM: 604,

  resumoEconomico:
    'Integrante da Região Metropolitana de Campinas, Hortolândia é um polo industrial e tecnológico que abriga gigantes da tecnologia (com IBM e Dell no "Tech Town") e mais de 500 indústrias, sendo um dos principais mercados de data centers do país. É marcada por forte crescimento populacional e geração de empregos qualificados.',

  mercado:
    'A população jovem em rápido crescimento e os profissionais de indústria e tecnologia ampliam a demanda por academias de bairro e musculação acessível, num perfil mais de volume do que premium.',

  bairrosNobres: ['Remanso Campineiro', 'Parque Ortolândia', 'Jardim Santa Clara do Lago', 'Jardim do Bosque'],
  bairrosPopulares: ['Jardim Amanda', 'Jardim Nossa Senhora de Fátima', 'Jardim Santana', 'Vila Real'],

  parques: [
    {
      nome: 'Parque Socioambiental Irmã Dorothy Stang',
      descricao:
        'Tem pista de caminhada, academia ao ar livre, quadras de areia e playground.',
    },
    {
      nome: 'Parque Escola (CREAPE)',
      descricao:
        'Lagoa com pista de caminhada e ciclovia, academia ao ar livre e áreas de descanso.',
    },
    {
      nome: 'Parque Lago da Fé',
      descricao:
        'Maior área de lazer da cidade, com duas lagoas e pista de caminhada.',
    },
  ],
  ciclovias:
    'Há ciclovia no entorno da lagoa do Parque Escola; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com inverno seco e frio (mais persistente à noite) e verão quente e chuvoso.',
  climaTreino:
    'As manhãs frias de inverno favorecem a corrida; o verão úmido pede atenção à hidratação e aos horários.',

  mobilidade:
    'Hortolândia é servida pelas rodovias Anhanguera (SP-330) e Bandeirantes (SP-348), com acesso à Dom Pedro I e proximidade do Aeroporto de Viracopos.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Mais Saúde Hortolândia',
      descricao:
        'Com 7 km de corrida e 4 km de caminhada, apoiada pela prefeitura.',
    },
    {
      nome: 'Etapas de circuitos regionais de corrida',
      descricao:
        'A cidade recebe provas de circuitos da região metropolitana de Campinas.',
    },
  ],
  culturaEsportiva:
    'Cidade jovem, Hortolândia aposta em parques socioambientais e academias ao ar livre como lazer gratuito, com cultura esportiva em consolidação ligada às corridas apoiadas pela prefeitura.',
  academias:
    'A oferta é voltada a academias de bairro e treino acessível, complementada por uma rede ampla de parques socioambientais gratuitos com academias ao ar livre.',

  destaquesFitness: [
    'Demanda crescente puxada pela expansão populacional e pelos empregos industriais e de tecnologia.',
    'Rede ampla de parques socioambientais gratuitos com academias ao ar livre.',
    'Ciclovia em parque (CREAPE) e novos parques lineares.',
    'Mercado voltado a academias de bairro e treino acessível.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 860,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Polo industrial e tecnológico da RM de Campinas, Hortolândia cresce rápido e investe em parques socioambientais. Um personal trainer encontra aqui um mercado de volume em expansão, com boa estrutura pública para o treino ao ar livre.',

  vizinhas: ['campinas-sp', 'sumare-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Hortolândia', url: 'https://cidades.ibge.gov.br/brasil/sp/hortolandia/panorama' },
    { nome: 'Prefeitura de Hortolândia', url: 'https://www.hortolandia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
