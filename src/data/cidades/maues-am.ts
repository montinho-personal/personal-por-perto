import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maues-am',
  nome: 'Maués',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'mauesense',
  tipo: 'cidade',

  populacao: 61204,
  populacaoAno: 2022,
  idhm: 0.588,
  idhmClasse: 'baixo',
  altitudeM: 18,

  resumoEconomico:
    'Conhecida como a Terra do Guaraná, Maués fica no baixo Amazonas, às margens do rio Maués-Açu, a cerca de 250 km de Manaus em linha reta. A economia é movida pelo cultivo do guaraná — fruto domesticado historicamente pelo povo indígena Sateré-Mawé e marca registrada da cidade —, somado à pesca, ao extrativismo e ao comércio. A produção de guaraná abastece grandes indústrias de refrigerantes e rendeu ao município o título de Capital Nacional do Guaraná.',

  mercado:
    'Por ser uma cidade do interior amazônico, com acesso predominantemente fluvial, o mercado fitness de Maués é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a aparecer entre quem busca acompanhamento individual para lidar com o calor e a umidade constantes e para aproveitar a orla do rio como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Donga Michiles', 'Santa Tereza', 'São Domingos'],
  bairrosPopulares: ['Santa Luzia', 'Esperança', 'São Lázaro', 'Tabuleiro'],

  parques: [
    {
      nome: 'Orla do Rio Maués-Açu',
      descricao:
        'O coração da vida social da cidade, à beira do rio Maués-Açu, reúne calçadões, quiosques e o ponto onde acontece a tradicional Festa do Guaraná — o trecho mais usado para caminhada, corrida e treino ao ar livre no fim do dia.',
    },
    {
      nome: 'Praias fluviais do Maués-Açu',
      descricao:
        'No período de seca o rio descobre praias de areia branca usadas para banho e lazer, que se tornam espaço alternativo para atividades ao ar livre próximas à cidade.',
    },
    {
      nome: 'Entorno da floresta e dos guaranazais',
      descricao:
        'Cercada por floresta amazônica e por extensas áreas de cultivo de guaraná, a cidade tem no entorno natural e nas comunidades ribeirinhas o cenário para caminhadas e atividades ligadas à terra.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do centro e ao longo da orla do rio Maués-Açu.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro (tipo Af de Köppen), com chuvas frequentes e influência direta da floresta amazônica. As temperaturas máximas costumam chegar perto dos 35 °C e as mínimas ficam em torno de 22 °C, com alta umidade do ar mesmo fora do período mais chuvoso.',
  climaTreino:
    'O calor e a umidade elevados pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à recuperação; nos horários mais quentes, ambientes cobertos e ventilados são a opção mais confortável e segura.',

  mobilidade:
    'Maués não tem ligação rodoviária direta e fácil com a capital: o acesso é predominantemente fluvial, por barcos e lanchas que cruzam o rio Maués-Açu e os rios da região a partir de Manaus, além de um pequeno aeroporto. Dentro da cidade, o deslocamento se dá por vias urbanas, motos, mototáxis e pelo próprio rio, que estrutura a rotina e a logística locais.',

  corridas: [
    {
      nome: 'Jogos Escolares de Maués',
      descricao:
        'Competição estudantil do município que inclui atletismo e até provas de natação no rio Maués-Açu, reunindo estudantes da cidade e de comunidades indígenas e ribeirinhas.',
    },
    {
      nome: 'Eventos esportivos da Festa do Guaraná',
      descricao:
        'A programação ligada à maior festa da cidade, na orla do rio, costuma reunir atividades esportivas e de lazer que reforçam o uso do espaço ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla do rio Maués-Açu para caminhada e corrida, a forte tradição da pesca e da vida ribeirinha, os jogos escolares e as atividades em torno da Festa do Guaraná — tudo moldado pelo clima quente e úmido da Amazônia.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, concentradas no centro e nos bairros mais movimentados, com porte compatível com uma cidade do interior do Amazonas.',

  destaquesFitness: [
    'Terra do Guaraná: Capital Nacional do Guaraná, fruto ligado ao povo Sateré-Mawé.',
    'Orla do rio Maués-Açu como principal espaço de caminhada, corrida e treino ao ar livre.',
    'Clima equatorial quente e úmido, que exige planejamento de horário e hidratação no treino.',
    'Cidade de acesso fluvial no baixo Amazonas, com economia de guaraná, pesca e extrativismo.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade ribeirinha, quente e úmida no baixo Amazonas, Maués pede um treino adaptado ao clima e que aproveite a orla do rio Maués-Açu e o entorno natural. Um personal trainer ajuda a organizar a rotina respeitando o calor e a umidade, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['parintins-am', 'itacoatiara-am'],

  fontes: [
    { nome: 'IBGE Cidades — Maués', url: 'https://cidades.ibge.gov.br/brasil/am/maues/panorama' },
    { nome: 'Prefeitura de Maués', url: 'https://www.maues.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
