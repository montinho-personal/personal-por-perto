import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-gabriel-da-cachoeira-am',
  nome: 'São Gabriel da Cachoeira',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'são-gabrielense',
  tipo: 'cidade',

  populacao: 51795,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 51.795 habitantes (Censo 2022), São Gabriel da Cachoeira é a cidade mais indígena do Brasil — cerca de nove em cada dez moradores se declaram indígenas, de mais de vinte etnias, e o município é a Capital Estadual dos Povos Indígenas. Na cabeça do cachorro, no alto rio Negro, a economia combina serviço público, comércio ribeirinho e o ecoturismo de expedição rumo ao Pico da Neblina, o ponto mais alto do país.',

  mercado:
    'O mercado de personal trainer é pequeno e singular: militares dos pelotões de fronteira, servidores em missão e guias indígenas que conduzem expedições de dias pela floresta. A demanda por preparo físico para o Yaripo — como os Yanomami chamam a Neblina — cresce junto com o turismo comunitário, e o treino acontece em academias simples, quintais e na própria trilha.',

  bairrosNobres: ['Centro', 'Praia', 'Dabaru', 'Fortaleza'],
  bairrosPopulares: ['Areal', 'Boa Esperança', 'Tiago Montalvo', 'Graciliano Gonçalves'],

  parques: [
    {
      nome: 'Parque Nacional do Pico da Neblina',
      descricao:
        'Abriga o ponto mais alto do Brasil, com 2.995 metros, na fronteira com a Venezuela. A expedição ao Yaripo parte de São Gabriel, dura vários dias entre barco e trilha e é conduzida por guias Yanomami no modelo de turismo de base comunitária.',
    },
    {
      nome: 'Praias do rio Negro',
      descricao:
        'Na estação seca, as praias de areia branca do rio Negro afloram em frente à cidade — a Praia Grande é o point de banho, futebol de areia e caminhada dos moradores.',
    },
    {
      nome: 'Serra da Bela Adormecida (Curicuriari)',
      descricao:
        'O perfil de montanha que dá contorno ao horizonte da cidade; as trilhas na direção da serra são feitas com condutores locais, em meio à floresta de terra firme.',
    },
    {
      nome: 'Cachoeiras do alto rio Negro',
      descricao:
        'As corredeiras que dão nome ao município pontuam o rio acima e abaixo da cidade, cenário das canoas e do trânsito ribeirinho diário.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária. A bicicleta e a moto são os meios de transporte cotidianos nas ruas da cidade, e o barco cumpre o papel de estrada para as comunidades.',

  clima:
    'Equatorial úmido, quente o ano inteiro, com chuvas abundantes — o alto rio Negro é uma das regiões mais chuvosas do país.',
  climaTreino:
    'Calor e umidade constantes pedem treino no início da manhã ou no fim da tarde e hidratação como parte do programa. Para quem se prepara para a Neblina, a resistência com mochila e o fôlego em terreno encharcado importam mais do que qualquer recorde de academia.',

  mobilidade:
    'Sem ligação rodoviária com o resto do país: chega-se de avião a partir de Manaus ou de barco pelo rio Negro — dias de viagem. Dentro do município, os igarapés e o rio são as vias reais.',

  corridas: [
    {
      nome: 'Corridas e travessias locais',
      descricao:
        'O calendário local reúne provas de rua em datas cívicas e travessias regionais, com forte participação militar e das comunidades.',
    },
  ],
  culturaEsportiva:
    'O futebol é paixão em cada comunidade, e o remo de canoa é habilidade cotidiana. Os pelotões de fronteira mantêm cultura de treinamento físico constante, e a expedição ao Yaripo criou uma geração de guias indígenas com preparo de montanhista.',
  academias:
    'A oferta é simples e concentrada no centro, com academias de musculação de estrutura básica. O treino a domicílio e o funcional ao ar livre — na Praia Grande, na seca — completam o quadro.',

  destaquesFitness: [
    'Base da expedição ao Pico da Neblina, o teto do Brasil com 2.995 m.',
    'Cidade mais indígena do país, com turismo de base comunitária.',
    'Praias do rio Negro como academia a céu aberto na estação seca.',
    'Cultura militar de preparo físico nos pelotões de fronteira.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 580,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'São Gabriel da Cachoeira treina para a floresta: mochila, canoa, trilha encharcada e a maior montanha do Brasil no horizonte. Um personal trainer daqui constrói pernas, costas e fôlego para o Yaripo — e adapta tudo ao calor, à chuva e ao ritmo do rio Negro.',

  vizinhas: ['novo-airao-am', 'manaus-am', 'tefe-am'],

  fontes: [
    { nome: 'IBGE Cidades — São Gabriel da Cachoeira', url: 'https://www.ibge.gov.br/cidades-e-estados/am/sao-gabriel-da-cachoeira.html' },
    { nome: 'ICMBio — Parque Nacional do Pico da Neblina', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/amazonia/lista-de-ucs/parna-do-pico-da-neblina' },
    { nome: 'Portal Amazônia — São Gabriel da Cachoeira', url: 'https://portalamazonia.com/amazonia-de-a-a-z/sao-gabriel-da-cachoeira/' },
  ],
  atualizadoEm: '2026-08-12',
};
