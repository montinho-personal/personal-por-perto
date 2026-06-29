import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sobral-ce',
  nome: 'Sobral',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'sobralense',
  tipo: 'cidade',

  populacao: 203023,
  populacaoAno: 2022,
  idhm: 0.714,
  idhmClasse: 'alto',
  altitudeM: 70,

  resumoEconomico:
    'Principal polo econômico do norte do Ceará e do Vale do Acaraú, Sobral deu um salto com a instalação da indústria calçadista Grendene, hoje grande empregadora regional. É um forte polo universitário (com a UVA, campus da UFC e IFCE), tem centro histórico tombado e é referência nacional em educação básica.',

  mercado:
    'A demanda fitness é sustentada por uma grande população universitária e jovem e pela classe média urbana, com infraestrutura pública de academias ao ar livre em praças e na orla fluvial.',

  bairrosNobres: ['Centro', 'Junco', 'Dom Expedito', 'Domingos Olímpio'],
  bairrosPopulares: ['Alto da Brasília', 'Sumaré', 'Padre Palhano', 'Pedrinhas'],

  parques: [
    {
      nome: 'Margem Esquerda do Rio Acaraú',
      descricao:
        'Orla fluvial revitalizada com calçadão, ciclovia e praças — o principal espaço de caminhada e corrida da cidade.',
    },
    {
      nome: 'Parque Aurélio Ponte',
      descricao:
        'Parque entregue na urbanização da Margem Esquerda do Rio Acaraú, com áreas de lazer e convívio.',
    },
    {
      nome: 'Parque da Cidade',
      descricao:
        'Área verde de cerca de 70 mil m², integrando os bairros Junco, Colina e Campo dos Velhos.',
    },
  ],
  ciclovias:
    'Há ciclovia ao longo da orla revitalizada do Rio Acaraú; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e semiárido, seco, com média em torno de 26 °C.',
  climaTreino:
    'O calor intenso e a baixa umidade recomendam treinar no início da manhã ou à noite, com atenção à hidratação.',

  mobilidade:
    'Sobral é cortada pela BR-222, principal eixo rodoviário do norte do Ceará, ligando Fortaleza ao interior, como cidade-polo regional.',

  corridas: [
    {
      nome: 'Meia Maratona de Sobral',
      descricao:
        'Provas de 5 km, 10 km e 21 km passando por pontos turísticos e pelo centro histórico.',
    },
    {
      nome: 'Etapas da Federação Cearense de Atletismo',
      descricao:
        'Competições oficiais sediadas em Sobral, parte de um calendário esportivo regional.',
    },
  ],
  culturaEsportiva:
    'A cultura de corrida de rua é crescente, com a Meia Maratona como evento-âncora e forte uso esportivo dos espaços públicos da orla do Acaraú.',
  academias:
    'A oferta reúne academias e estúdios, com público universitário expressivo, complementada pela orla do Acaraú e por academias ao ar livre nas praças.',

  destaquesFitness: [
    'Orla revitalizada do Rio Acaraú como pista pública de corrida e ciclismo.',
    'Grande público universitário (UVA/UFC/IFCE) puxando a demanda fitness.',
    'Meia Maratona de Sobral como evento de destaque.',
    'Academias ao ar livre instaladas em praças e bairros.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Polo do norte do Ceará e cidade universitária, Sobral tem orla fluvial revitalizada e cena de corrida em alta. Um personal trainer ajuda a aproveitar a Margem Esquerda do Acaraú com método, ajustando horários e hidratação ao calor do semiárido.',

  vizinhas: ['fortaleza-ce', 'juazeiro-do-norte-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Sobral', url: 'https://cidades.ibge.gov.br/brasil/ce/sobral/panorama' },
    { nome: 'Prefeitura de Sobral', url: 'https://www.sobral.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
