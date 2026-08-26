import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campina-grande-pb',
  nome: 'Campina Grande',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'campinense',
  tipo: 'cidade',

  populacao: 419379,
  populacaoAno: 2022,
  idhm: 0.72,
  idhmClasse: 'alto',
  altitudeM: 550,

  resumoEconomico:
    'Campina Grande é o principal polo tecnológico e universitário do interior do Nordeste, sede da UFCG e da UEPB, referências em engenharia e TI — o que lhe rendeu o apelido de "Vale do Silício brasileiro". Sedia também o Maior São João do Mundo, no Parque do Povo. A economia é forte em comércio, serviços e educação, e a altitude na Borborema dá à cidade um clima mais ameno.',

  mercado:
    'O mercado fitness é aquecido e diversificado, impulsionado pela grande população universitária e jovem, com redes, estúdios e academias populares públicas a céu aberto instaladas pela prefeitura. O clima de altitude favorece o treino ao ar livre o ano todo.',

  bairrosNobres: ['Prata', 'Mirante', 'Catolé', 'Bela Vista'],
  bairrosPopulares: ['Bodocongó', 'José Pinheiro', 'Liberdade', 'Pedregal'],

  parques: [
    {
      nome: 'Açude Velho',
      descricao:
        'Cartão-postal no centro, com calçadão para caminhada e corrida ao redor do espelho d’água — ponto de concentração da atividade física na cidade, com academia popular a céu aberto.',
    },
    {
      nome: 'Parque da Criança',
      descricao:
        'O maior parque a céu aberto da cidade, com pista de caminhada e corrida, quadras esportivas e áreas arborizadas, muito movimentado no fim de tarde.',
    },
    {
      nome: 'Parque do Povo',
      descricao:
        'Grande espaço aberto, palco do São João, usado para caminhadas e eventos esportivos ao longo do ano.',
    },
  ],
  ciclovias:
    'A cidade tem malha cicloviária em expansão; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, mais ameno que o do litoral, com noites frescas e brisas constantes graças aos cerca de 550 m da Borborema.',
  climaTreino:
    'As condições para treino ao ar livre são mais confortáveis do que na maior parte do Nordeste — manhãs e noites agradáveis e menor estresse térmico ajudam na constância.',

  mobilidade:
    'O acesso é por rodovias federais: cerca de 1h30 de João Pessoa pela BR-230 (subindo a serra) e cerca de 180 km de Recife pela BR-104, posição que faz da cidade um entroncamento do interior paraibano.',

  corridas: [
    {
      nome: 'Meia Maratona Internacional de Campina Grande',
      descricao:
        'Prova de rua tradicional, com percursos competitivos que atraem corredores de toda a região.',
    },
    {
      nome: 'Campina 21K / Big Run',
      descricao:
        'Eventos de corrida de rua com provas de 3 km, 5 km, 10 km e 21 km, sob supervisão da federação estadual.',
    },
  ],
  culturaEsportiva:
    'Campina Grande tem forte tradição em corrida de rua e um calendário ativo de provas; o ambiente universitário e o clima ameno favorecem a prática esportiva ao ar livre.',
  academias:
    'A oferta reúne redes, estúdios e academias locais, com forte demanda do público jovem e universitário, complementada pelas academias populares públicas a céu aberto.',

  academiasProximas: [
    { nome: 'Smart Fit Catolé', detalhe: 'na Av. Prefeito Severino Bezerra Cabral' },
    { nome: 'Smart Fit Cruzeiro', detalhe: 'segunda unidade da rede na cidade' },
    { nome: 'Selfit Campina Grande', detalhe: 'na Rua Dr. Severino Cruz, no Centro: musculação, funcional e lutas' },
    { nome: 'Bluefit Campina Grande', detalhe: 'unidade da rede na cidade' },
  ],

  destaquesFitness: [
    'Clima de altitude favorável ao treino ao ar livre o ano todo.',
    'Açude Velho e Parque da Criança como hubs gratuitos de caminhada e corrida.',
    'Público jovem e universitário que sustenta a demanda por academias e estúdios.',
    'Calendário consolidado de corridas (meia maratona internacional).',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Polo tecnológico e universitário de clima ameno, Campina Grande é um ótimo lugar para treinar ao ar livre — do Açude Velho ao Parque da Criança. Um personal trainer ajuda a aproveitar esse ambiente e a manter a constância, do iniciante ao corredor de meia maratona.',

  vizinhas: ['joao-pessoa-pb', 'caruaru-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Campina Grande', url: 'https://cidades.ibge.gov.br/brasil/pb/campina-grande/panorama' },
    { nome: 'Prefeitura de Campina Grande', url: 'https://campinagrande.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-26',
  capaArte: {
    src: '/capas-cidade/campina-grande-pb.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Campina Grande (PB) em arte com cartões-postais da Rainha da Borborema — o Açude Velho com o skyline, o portal do Maior São João do Mundo e a estrela do Parque do Povo — Personal por Perto',
    legenda:
      'Treino personalizado em Campina Grande: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
