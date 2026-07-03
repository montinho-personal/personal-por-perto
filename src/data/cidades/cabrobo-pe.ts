import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cabrobo-pe',
  nome: 'Cabrobó',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'cabroboense',
  tipo: 'cidade',

  populacao: 30294,
  populacaoAno: 2022,
  idhm: 0.623,
  idhmClasse: 'médio',
  altitudeM: 325,

  resumoEconomico:
    'Às margens do rio São Francisco, no Sertão do Vale do São Francisco pernambucano, Cabrobó é conhecida como a "Terra da Cebola e do Arroz" pela força da agricultura irrigada, que também produz melancia, melão e tomate para além dos dois carros-chefe. A economia combina essa fruticultura e olericultura irrigadas com a pesca artesanal no rio, a pecuária e um comércio varejista relevante para a região, somado ao peso da administração pública nos empregos locais. A cidade também é marco da presença indígena no sertão: na Ilha da Assunção, em pleno rio São Francisco, vive o povo Truká, e o nome do município remete à ascendência Truká e Pankararu que marcou sua formação.',

  mercado:
    'O mercado fitness de Cabrobó é o de uma cidade pequena do sertão pernambucano, com academias locais de musculação e funcional concentradas no Centro e nos bairros mais próximos. A procura por personal trainer tende a girar em torno de treino individualizado para lidar com o calor extremo do semiárido e de acompanhamento para quem trabalha na lida rural ou no comércio e busca rotina de exercício compatível com a agenda do dia a dia.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['COHAB', 'Pedrinhas', 'Alto do Cancão', 'Alto do Bozano'],

  parques: [
    {
      nome: 'Praça José Caldas Cavalcanti',
      descricao:
        'Principal praça do Centro de Cabrobó, referência de endereço na cidade e ponto de encontro e caminhada para os moradores nas horas mais frescas do dia.',
    },
    {
      nome: 'Margem do rio São Francisco',
      descricao:
        'A beira do "Velho Chico" é paisagem constante na rotina da cidade, usada informalmente para caminhada, pesca e lazer, com a Ilha da Assunção, território do povo Truká, à vista no leito do rio.',
    },
    {
      nome: 'Barragem de Barra do Chapéu',
      descricao:
        'Pequeno reservatório na zona rural do município, com cerca de 1,6 milhão de m³ de capacidade, usado pela população do entorno para pesca e momentos de lazer ao ar livre.',
    },
  ],
  ciclovias:
    'Cabrobó não tem malha cicloviária estruturada; bicicleta e caminhada acontecem nas ruas do Centro e na margem do rio São Francisco, sem infraestrutura dedicada.',

  clima:
    'O clima é semiárido quente, com temperaturas que variam de cerca de 19 °C a 35 °C ao longo do ano e baixa umidade a maior parte do tempo. A vegetação de caatinga hiperxerófila reflete a escassez de chuvas da região, e o IBGE já apontou o município entre os pontos de avanço da desertificação no sertão nordestino.',
  climaTreino:
    'O calor forte e constante torna as primeiras horas da manhã e o fim de tarde os períodos mais seguros para treinar ao ar livre, com hidratação reforçada e proteção solar; no meio do dia, ambientes cobertos ou climatizados são a opção mais indicada.',

  mobilidade:
    'O acesso a Cabrobó é feito pelas rodovias BR-428, BR-116 e PE-483, a cerca de 536 km de Recife. O município faz limite com Terra Nova, Salgueiro, Belém do São Francisco, Orocó e Parnamirim, além da divisa com a Bahia pelo rio São Francisco. Não há transporte sobre trilhos ou hidroviário de passageiros regular; os deslocamentos internos são feitos a pé, de moto, carro ou pelo transporte coletivo local.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Cabrobó está ligada à lida do campo e à tradição rural do sertão: o município chega a sediar cerca de 12 vaquejadas por ano em propriedades rurais de pequeno e médio porte. A pesca no rio São Francisco também é atividade recorrente de lazer, e o "São João das Escolas e dos Bairros" reúne esporte, cultura e comunidade entre as festividades mais aguardadas do calendário local.',
  academias:
    'A oferta de estrutura para treino é pequena e concentrada em academias locais de musculação e funcional na sede do município, compatível com o porte de uma cidade pequena do sertão pernambucano.',

  destaquesFitness: [
    'Vale do São Francisco irrigado: agricultura de cebola, arroz, melancia, melão e tomate estrutura a rotina de trabalho físico de boa parte da população.',
    'Rio São Francisco e a Ilha da Assunção, território do povo indígena Truká, marcam a paisagem, a cultura e o lazer à beira-rio da cidade.',
    'Clima semiárido quente, com mínimas de cerca de 19 °C e máximas de 35 °C, que exige planejamento de horário e hidratação no treino.',
    'Tradição da vaquejada, com cerca de 12 eventos por ano no município, como expressão da cultura física ligada à lida rural do sertão.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Cidade do sertão pernambucano às margens do rio São Francisco, Cabrobó pede um treino que respeite o calor forte do semiárido e aproveite a beira-rio e as praças do Centro como espaço de atividade ao ar livre. Um personal trainer ajuda a organizar essa rotina com segurança, definindo os melhores horários do dia e mantendo a constância em uma cidade de mercado fitness ainda pequeno.',

  vizinhas: ['salgueiro-pe', 'petrolina-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Cabrobó', url: 'https://cidades.ibge.gov.br/brasil/pe/cabrobo/panorama' },
    { nome: 'Prefeitura de Cabrobó', url: 'https://cabrobo.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
