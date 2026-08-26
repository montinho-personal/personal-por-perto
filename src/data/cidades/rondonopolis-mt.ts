import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rondonopolis-mt',
  nome: 'Rondonópolis',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'rondonopolitano',
  tipo: 'cidade',

  populacao: 244911,
  populacaoAno: 2022,
  idhm: 0.755,
  idhmClasse: 'alto',
  altitudeM: 227,

  resumoEconomico:
    'Conhecida como a "Capital Nacional do Agronegócio", Rondonópolis tem o segundo maior PIB de Mato Grosso e é o grande polo logístico do sul do estado. Abriga o maior terminal ferroviário de grãos da América Latina, no cruzamento das BR-163 e BR-364, movimentando milhões de toneladas por ano. O crescimento econômico e populacional puxa a expansão do mercado de serviços, incluindo o fitness.',

  mercado:
    'O mercado fitness está em expansão, acompanhando o crescimento da cidade, com academias concentradas nas regiões mais valorizadas (a leste) e procura crescente por espaços públicos de treino. O calendário ativo de corridas de rua é um termômetro dessa cultura esportiva.',

  bairrosNobres: ['Jardim Atlântico', 'Vila Aurora', 'Sagrada Família', 'Village do Cerrado'],
  bairrosPopulares: ['Vila Operária', 'Vila Olinda', 'Tancredo Neves', 'Jardim Universitário'],

  parques: [
    {
      nome: 'Parque das Águas',
      descricao:
        'Principal área verde urbana da cidade, usada para caminhada, lazer e atividades ao ar livre.',
    },
    {
      nome: 'Parque da Siriema',
      descricao:
        'Parque na região do Portal das Águas, voltado à preservação e ao lazer ativo, com áreas verdes para caminhada.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças, ampliando o acesso público ao treino nos bairros.',
    },
  ],
  ciclovias:
    'A cidade tem estrutura cicloviária em desenvolvimento; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido do cerrado, com chuvas concentradas na primavera e no verão e temperaturas elevadas boa parte do ano.',
  climaTreino:
    'As temperaturas altas tornam recomendável treinar ao ar livre cedo de manhã ou à noite, com atenção redobrada à hidratação.',

  mobilidade:
    'Localizada no entroncamento das BR-163 e BR-364, Rondonópolis é o principal hub rodoferroviário do agronegócio de Mato Grosso, elo logístico entre o Norte e o Sul do país.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de rua tradicional realizada no 1º de maio, reunindo desportistas da cidade e da região.',
    },
    {
      nome: 'Corrida da Justiça e Cidadania',
      descricao:
        'Prova de rua beneficente, parte de um calendário ativo que inclui o Circuito Sesc e a Corrida ACIR.',
    },
  ],
  culturaEsportiva:
    'Rondonópolis tem um calendário ativo de corridas de rua (Corrida do Trabalhador, Circuito Sesc, ACIR Rondon e eventos que combinam corrida e bike), sinalizando forte adesão aos esportes de rua mesmo diante do calor.',
  academias:
    'A oferta de academias acompanha o crescimento da cidade, concentrada nas regiões de maior valorização, complementada pelo Parque das Águas e pelas academias ao ar livre das praças.',

  destaquesFitness: [
    'Calendário robusto de corridas de rua (Trabalhador, Justiça e Cidadania, Circuito Sesc).',
    'Parque das Águas como principal área verde para atividade ao ar livre.',
    'Eventos que combinam corrida e bike.',
    'Mercado fitness em crescimento, puxado pela expansão econômica e populacional.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Capital do agronegócio e polo logístico de MT, Rondonópolis tem um mercado fitness em expansão e uma forte cena de corrida de rua. Um personal trainer ajuda a montar uma rotina que respeite o calor do cerrado e a aproveitar o Parque das Águas e as provas locais com método.',

  vizinhas: ['cuiaba-mt', 'campo-grande-ms'],

  capaArte: {
    src: '/capas-cidade/rondonopolis-mt.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Rondonópolis (MT) em arte quadrada com a ponte sobre o rio Vermelho, o Parque das Águas e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Rondonópolis: foco, disciplina e constância com acompanhamento profissional no sul de Mato Grosso.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Rondonópolis', url: 'https://cidades.ibge.gov.br/brasil/mt/rondonopolis/panorama' },
    { nome: 'Prefeitura de Rondonópolis', url: 'https://www.rondonopolis.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-25',
};
