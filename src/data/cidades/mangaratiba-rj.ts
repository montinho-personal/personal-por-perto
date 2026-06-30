import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mangaratiba-rj',
  nome: 'Mangaratiba',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'mangaratibense',
  tipo: 'cidade',

  populacao: 41220,
  populacaoAno: 2022,
  idhm: 0.753,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'No litoral sul fluminense, na Costa Verde, Mangaratiba tem economia voltada ao turismo náutico e de praia, à pesca e à logística portuária. Na Ilha Guaíba funciona o terminal marítimo de minério de ferro da Vale, abastecido por ferrovia operada pela MRS Logística a partir de Itaguaí. O turismo de veraneio movimenta vilarejos e praias como Itacuruçá, Muriqui e Portogalo, com forte fluxo de embarcações rumo às ilhas da baía.',

  mercado:
    'O público de veranistas, donos de casas de praia e o fluxo náutico sustentam uma demanda sazonal, mais aquecida no verão, complementada por moradores fixos do Centro e dos bairros litorâneos. A oferta é de menor escala que a dos grandes centros, com academias de bairro e atendimento personalizado em condomínios e pousadas.',

  bairrosNobres: ['Portogalo', 'Itacuruçá', 'Praia do Saco', 'Centro'],
  bairrosPopulares: ['Muriqui', 'Conceição de Jacareí', 'Praia Grande', 'Sahy'],

  parques: [
    {
      nome: 'Orla e Praia do Centro de Mangaratiba',
      descricao:
        'Faixa de areia e calçada à beira-mar no núcleo histórico, com píer e área de caminhada que reúne moradores e turistas.',
    },
    {
      nome: 'Praia de Muriqui',
      descricao:
        'Uma das praias mais movimentadas do município, com extensa faixa de areia usada para caminhada, corrida leve e esportes de praia.',
    },
    {
      nome: 'Ilha de Itacuruçá e enseada de Itacuruçá',
      descricao:
        'Polo de turismo náutico e pesca, ponto de partida de passeios de escuna, com águas calmas para natação, remo e stand-up paddle.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos da orla; a extensão oficial não é amplamente divulgada, e o pedal costuma seguir vias locais e a margem da Rio-Santos.',

  clima:
    'O clima é tropical úmido, quente o ano todo, típico do litoral sul fluminense, com verões chuvosos entre a Serra do Mar e o Atlântico e alta umidade constante.',
  climaTreino:
    'Dá para treinar ao ar livre o ano inteiro, mas o calor e a umidade pedem horários de início e fim de dia e boa hidratação; os meses mais secos, entre o outono e o inverno, são os mais confortáveis para corrida e treino na orla.',

  mobilidade:
    'A coluna vertebral da cidade é a BR-101 (Rodovia Rio-Santos), que liga Mangaratiba ao Rio de Janeiro e a Angra dos Reis cortando a Costa Verde entre a serra e o mar. O município conta ainda com travessias marítimas para as ilhas e com o terminal portuário da Ilha Guaíba (Vale), ligado por ferrovia a Itaguaí.',

  corridas: [
    {
      nome: 'Corridas de rua na orla',
      descricao:
        'Provas e percursos comunitários ao longo da orla e das praias aproveitam a paisagem da Costa Verde para incentivar a atividade física.',
    },
    {
      nome: 'Trilhas da Mata Atlântica',
      descricao:
        'Caminhadas e trilhas em trechos de Mata Atlântica entre a serra e o mar, com acesso a cachoeiras e mirantes da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Mangaratiba é marcada pelo mar: vela, pesca, remo, stand-up paddle e mergulho ligados à baía e às ilhas, somados a caminhadas em trilhas da Mata Atlântica e a corrida leve na orla.',
  academias:
    'A oferta reúne academias de bairro no Centro e nos núcleos litorâneos com atendimento personalizado em condomínios, pousadas e casas de praia, ganhando força na alta temporada de verão.',

  destaquesFitness: [
    'Turismo náutico e de praia como pano de fundo para treino ao ar livre.',
    'Orlas do Centro e de Muriqui para corrida e caminhada à beira-mar.',
    'Esportes aquáticos (SUP, vela, remo, mergulho) na baía e nas ilhas.',
    'Trilhas da Mata Atlântica entre a Serra do Mar e o Atlântico.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de mar e ilhas na Costa Verde, Mangaratiba une praias, turismo náutico e trilhas da Mata Atlântica. Um personal trainer ajuda a aproveitar as orlas de Muriqui e do Centro e os esportes aquáticos com método, ajustando o treino ao calor úmido do litoral sul fluminense.',

  vizinhas: ['itaguai-rj', 'angra-dos-reis-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Mangaratiba', url: 'https://cidades.ibge.gov.br/brasil/rj/mangaratiba/panorama' },
    { nome: 'Prefeitura de Mangaratiba', url: 'https://prefeitura.mangaratiba.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
