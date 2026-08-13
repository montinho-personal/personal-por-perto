import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pacaraima-rr',
  nome: 'Pacaraima',
  uf: 'RR',
  estado: 'Roraima',
  estadoSlug: 'roraima',
  regiao: 'Norte',
  gentilico: 'pacaraimense',
  tipo: 'cidade',

  populacao: 19305,
  populacaoAno: 2022,
  idhm: 0.65,
  idhmClasse: 'medio',
  altitudeM: 920,

  resumoEconomico:
    'Sentada a 920 metros na Serra de Pacaraima, é o município mais alto de Roraima e de toda a Região Norte — e a porta de entrada terrestre do Brasil para a Venezuela, pela BR-174. O comércio de fronteira, o funcionalismo e a agricultura das comunidades indígenas da Terra Indígena São Marcos sustentam a economia, e o Censo 2022 registrou o maior crescimento populacional do estado, impulsionado pela migração venezuelana.',

  mercado:
    'O mercado formal de treino é pequeno e concentrado na sede, mas o público é peculiar: militares e servidores de fronteira, trabalhadores do comércio e uma comunidade que vive de caminhada em serra no dia a dia. A demanda por acompanhamento profissional cresce com a cidade — e o treino online cobre o que a estrutura local ainda não oferece.',

  bairrosNobres: ['Centro', 'Avenida Venezuela', 'Vila do Aeroporto', 'Suapi'],
  bairrosPopulares: ['Bananal', 'Sorocaima', 'Boca da Mata', 'Nova Esperança'],

  parques: [
    {
      nome: 'Serra de Pacaraima e trilhas de fronteira',
      descricao:
        'A cidade vive a 920 m, entre morros de savana de altitude; caminhadas e subidas de serra fazem parte da rotina de moradores e visitantes.',
    },
    {
      nome: 'Terra Indígena São Marcos',
      descricao:
        'Comunidades Taurepang, Macuxi e Wapixana mantêm trilhas como a do Kuatá (Nova Esperança), com cachoeiras e roteiros de etnoturismo de base comunitária.',
    },
    {
      nome: 'Rota do Monte Roraima e da Gran Sabana',
      descricao:
        'Pacaraima é a passagem brasileira rumo a Santa Elena de Uairén e aos tepuis venezuelanos — quem sonha com o Monte Roraima cruza a fronteira por aqui.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana; a BR-174 e as estradas vicinais das comunidades são usadas por ciclistas com as devidas precauções.',

  clima:
    'Tropical de altitude: os 920 m amenizam o calor equatorial, com noites frescas e ventos constantes de serra — um microclima raro na Região Norte.',
  climaTreino:
    'É dos poucos lugares do Norte onde se treina ao ar livre em quase qualquer horário: o calor pesa menos que em Boa Vista, mas o sol de fronteira segue forte — protetor e água continuam obrigatórios.',

  mobilidade:
    'A BR-174 é a espinha dorsal: 215 km de estrada ligam Pacaraima a Boa Vista, e do outro lado da linha de fronteira começa a rodovia venezuelana rumo a Santa Elena de Uairén. Os deslocamentos internos se fazem a pé, de moto e por estradas de terra entre as comunidades.',

  corridas: [
    {
      nome: 'Desafios das comunidades da TI São Marcos',
      descricao:
        'A comunidade Bananal, na BR-174, realiza desafios anuais de cross-country e provas tradicionais, incluindo corridas com toras de buriti.',
    },
  ],
  culturaEsportiva:
    'O esporte local mistura tradição indígena e vida de fronteira: corridas com tora de buriti e danças como o parixara nas comunidades, futebol de fim de tarde na sede e o fluxo constante de montanhistas a caminho do Monte Roraima.',
  academias:
    'A oferta é enxuta e concentrada na sede, com espaços simples de musculação; boa parte de quem treina sério combina estrutura local com acompanhamento online.',

  destaquesFitness: [
    'Município mais alto da Região Norte: 920 m de altitude e clima ameno para treinar.',
    'Trilhas e cachoeiras da Terra Indígena São Marcos, com etnoturismo de base comunitária.',
    'Porta de entrada brasileira da rota do Monte Roraima, via Santa Elena de Uairén.',
    'Desafios esportivos tradicionais nas comunidades, como as corridas com tora de buriti.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Pacaraima treina em altitude sem saber que isso é privilégio: serra, clima ameno e trilhas de sobra numa cidade onde a caminhada é rotina. Um personal trainer daqui prepara pernas e fôlego para a vida de fronteira — e para quem mira o Monte Roraima, monta a base de meses que a montanha cobra em dias.',

  vizinhas: ['boa-vista-rr', 'uiramuta-rr'],

  fontes: [
    { nome: 'IBGE Cidades — Pacaraima', url: 'https://cidades.ibge.gov.br/brasil/rr/pacaraima/panorama' },
    { nome: 'Prefeitura de Pacaraima', url: 'https://portal.pacaraima.rr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-13',
};
