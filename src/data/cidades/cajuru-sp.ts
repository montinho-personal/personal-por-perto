import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cajuru-sp',
  nome: 'Cajuru',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cajuruense',
  tipo: 'cidade',

  populacao: 23830,
  populacaoAno: 2022,
  idhm: 0.713,
  idhmClasse: 'alto',
  altitudeM: 750,

  resumoEconomico:
    'Na Alta Mogiana, região histórica do café entre Ribeirão Preto e a divisa com Minas, Cajuru combina agropecuária — cana, café e pecuária — com comércio e serviços de cidade-polo local. A proximidade com Ribeirão Preto, a cerca de 50 km, conecta a cidade a um dos mercados mais dinâmicos do interior paulista.',

  mercado:
    'O mercado de treino é o de cidade média do interior: academias de bairro, personal trainers conhecidos pelo nome e uma vida ativa que acontece nas praças e nas estradas rurais. O clima de altitude da Alta Mogiana, com inverno seco, favorece o treino ao ar livre boa parte do ano.',

  bairrosNobres: ['Centro', 'Jardim Bela Vista', 'Alto da Boa Vista', 'Jardim Eldorado'],
  bairrosPopulares: ['Cohab', 'Jardim Santa Rosa', 'Vila Industrial', 'Jardim Alvorada'],

  parques: [
    {
      nome: 'Praça central e áreas de lazer urbanas',
      descricao:
        'As praças do centro concentram a caminhada diária, o alongamento e a vida social da cidade — o circuito clássico do interior paulista.',
    },
    {
      nome: 'Estradas rurais da Alta Mogiana',
      descricao:
        'As estradas de terra entre cafezais, canaviais e pastos rendem caminhadas longas e pedais com o horizonte aberto da região.',
    },
    {
      nome: 'Serras e cachoeiras do entorno',
      descricao:
        'A vizinhança serrana da Alta Mogiana, na divisa com Cássia dos Coqueiros, guarda cachoeiras e trilhas procuradas nos fins de semana.',
    },
  ],
  ciclovias:
    'O pedal é forte nas estradas rurais e nas rotas entre as cidades da Alta Mogiana; a malha cicloviária urbana é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima tropical de altitude: verão quente e chuvoso, inverno seco e ameno — o padrão da Alta Mogiana cafeeira.',
  climaTreino:
    'O inverno seco é a melhor estação para treinar ao ar livre; no verão, manhãs e fins de tarde são as janelas, com atenção às chuvas de tarde.',

  mobilidade:
    'Cajuru se conecta pela SP-338 a Ribeirão Preto, a cerca de 50 km — polo regional de serviços, saúde e emprego que faz parte da rotina de muitos moradores.',

  corridas: [
    {
      nome: 'Provas da região de Ribeirão Preto',
      descricao:
        'O calendário de corridas de rua da Alta Mogiana e de Ribeirão Preto oferece provas de 5 km e 10 km ao longo do ano, a uma hora de casa.',
    },
  ],
  culturaEsportiva:
    'A vida ativa da cidade gira em torno das praças, dos campos de futebol e das estradas rurais — com grupos de caminhada e pedal crescendo ano a ano.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, no formato próximo e pessoal típico das cidades médias do interior.',

  destaquesFitness: [
    'Clima de altitude da Alta Mogiana, com inverno seco ideal para treinar fora.',
    'Estradas rurais entre cafezais como cenário de caminhadas e pedais.',
    'Proximidade de Ribeirão Preto e seu calendário de provas de rua.',
    'Cachoeiras e trilhas da vizinhança serrana para o lazer ativo.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade da Alta Mogiana entre cafezais e serras, Cajuru tem o ritmo do interior e o clima de altitude a favor de quem treina. Um personal trainer ajuda a transformar praças, estradas rurais e a rotina local em resultado consistente.',

  vizinhas: ['ribeirao-preto-sp', 'cravinhos-sp', 'franca-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cajuru', url: 'https://cidades.ibge.gov.br/brasil/sp/cajuru/panorama' },
    { nome: 'Prefeitura de Cajuru', url: 'https://www.cajuru.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
