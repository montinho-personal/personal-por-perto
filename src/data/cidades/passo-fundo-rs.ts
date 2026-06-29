import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'passo-fundo-rs',
  nome: 'Passo Fundo',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'passo-fundense',
  tipo: 'cidade',

  populacao: 206215,
  populacaoAno: 2022,
  idhm: 0.776,
  idhmClasse: 'alto',
  altitudeM: 687,

  resumoEconomico:
    '"Capital do Planalto Médio" gaúcho, no norte do RS, Passo Fundo é cidade-polo de mais de cem municípios. É forte em saúde (hospitais de alta complexidade), em educação (com a UPF, maior universidade do norte gaúcho) e em agronegócio e serviços, com um ecossistema de inovação em crescimento.',

  mercado:
    'Há forte demanda regional puxada pela população flutuante universitária e de saúde, com rede de academias ao ar livre municipais espalhadas pelos bairros e uma base sólida de público jovem.',

  bairrosNobres: ['Petrópolis', 'Vila Rodrigues', 'Boqueirão', 'Centro'],
  bairrosPopulares: ['São Cristóvão', 'Valinhos', 'Donária', 'Vera Cruz'],

  parques: [
    {
      nome: 'Parque da Gare',
      descricao:
        'Revitalizado, tem pista de caminhada e corrida, ciclovia, pista de skate e lago — a principal área de lazer, esporte e cultura.',
    },
    {
      nome: 'Parque Municipal',
      descricao:
        'Área com caminhada, ciclovia, quadra e academia ao ar livre.',
    },
    {
      nome: 'Complexo Esportivo Fredolino Chimango',
      descricao:
        'Tem pista de caminhada, academia ao ar livre e campo.',
    },
  ],
  ciclovias:
    'Há ciclovias no Parque da Gare e no Parque Municipal; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido de altitude, com grande amplitude térmica — verões com máximas em torno de 30 °C e invernos com mínimas que podem ficar abaixo de 0 °C.',
  climaTreino:
    'Os invernos frios exigem agasalho e aquecimento prolongado, podendo deslocar os treinos para horários mais quentes ou ambientes fechados.',

  mobilidade:
    'Passo Fundo é um entroncamento rodoviário estratégico do planalto, servida pela BR-285 e pela BR-153.',

  corridas: [
    {
      nome: 'Circuito Municipal de Corrida de Rua',
      descricao:
        'Várias etapas ao longo do ano, com provas de cerca de 5 km.',
    },
    {
      nome: 'Meia Maratona Internacional de Passo Fundo',
      descricao:
        'Prova tradicional realizada em agosto, junto à rústica de aniversário da cidade.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário ativo de corrida de rua (circuito municipal e meia maratona internacional) e uma forte rede pública de academias ao ar livre.',
  academias:
    'A oferta reúne academias e estúdios, com grande público universitário (UPF) e de saúde, complementada pelo Parque da Gare e pela rede de academias ao ar livre.',

  destaquesFitness: [
    'Parque da Gare como cartão-postal e principal ponto de corrida e caminhada.',
    'Circuito Municipal de Corrida com múltiplas etapas anuais.',
    'Grande público universitário (UPF) e de saúde, que sustenta a demanda por personal.',
    'Inverno frio (mínimas abaixo de 0 °C), que abre nicho para treino indoor.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Capital do Planalto Médio gaúcho, Passo Fundo une polo de saúde e educação, o Parque da Gare e calendário de corridas ativo. Um personal trainer ajuda a manter a constância no frio do inverno, combinando indoor com a preparação para as provas de agosto.',

  vizinhas: ['caxias-do-sul-rs', 'porto-alegre-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Passo Fundo', url: 'https://cidades.ibge.gov.br/brasil/rs/passo-fundo/panorama' },
    { nome: 'Prefeitura de Passo Fundo', url: 'https://www.pmpf.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
