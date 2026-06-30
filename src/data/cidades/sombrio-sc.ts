import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sombrio-sc',
  nome: 'Sombrio',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'sombriense',
  tipo: 'cidade',

  populacao: 29839,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 17,

  resumoEconomico:
    'No Extremo Sul catarinense, perto do litoral e cortada pela BR-101, Sombrio combina agricultura, indústria e um comércio forte que atende toda a microrregião do Vale do Araranguá. No campo, destacam-se as lavouras de arroz, fumo e banana; na indústria, ganham espaço os setores de móveis, confecção, calçados e cerâmica. A posição às margens da Lagoa de Sombrio e a passagem da rodovia federal reforçam a vocação da cidade como polo de serviços e de circulação de pessoas e cargas.',

  mercado:
    'Como cidade média do interior catarinense, Sombrio tem um mercado fitness em consolidação, formado por academias locais e estúdios distribuídos pelos bairros centrais. A procura por personal trainers tende a crescer entre quem busca treino orientado e quer aproveitar a orla da Lagoa de Sombrio e as áreas planas da cidade para atividade ao ar livre, em um clima litorâneo que favorece o exercício na maior parte do ano.',

  bairrosNobres: ['Centro', 'Januária', 'Furnas', 'São Luiz'],
  bairrosPopulares: ['Nova Brasília', 'Raizeira', 'Guarita', 'Retiro da União'],

  parques: [
    {
      nome: 'Lagoa de Sombrio',
      descricao:
        'Maior lagoa de água doce de Santa Catarina, é o principal cartão-postal da cidade. As margens e os acessos à lagoa servem de cenário para caminhada, corrida e pedal, além de esportes náuticos e pesca, com paisagem aberta e percursos planos.',
    },
    {
      nome: 'Rua Coberta',
      descricao:
        'Trecho do antigo calçadão do Centro requalificado e coberto, virou ponto de encontro e de lazer da cidade. Concentra comércio e eventos — inclusive a largada e a entrega de kits de corridas de rua locais.',
    },
    {
      nome: 'Furnas e Morro da Moça',
      descricao:
        'Conjunto de atrativos naturais nos arredores, com formações rochosas e elevações que oferecem trilhas e mirantes — opções para quem busca atividade ao ar livre fora da malha urbana plana.',
    },
  ],
  ciclovias:
    'O relevo predominantemente plano da área urbana favorece o uso da bicicleta no dia a dia, e parte dos deslocamentos por pedal e das corridas acontece nas vias da cidade e nos acessos à orla da lagoa, ainda com estrutura cicloviária modesta.',

  clima:
    'O clima é subtropical úmido (Cfa), com verões quentes e chuvas bem distribuídas ao longo do ano, influência da proximidade do litoral. As temperaturas raramente chegam a extremos, e a umidade costuma ser alta por estar em região de baixada perto da lagoa e do mar.',
  climaTreino:
    'O clima ameno na maior parte do ano permite treinar ao ar livre com regularidade; no verão, a combinação de calor e umidade pede atenção à hidratação e preferência pelo começo da manhã ou fim da tarde, enquanto o outono e o inverno tendem a ser os períodos mais confortáveis para correr e pedalar.',

  mobilidade:
    'A BR-101 corta o município e é o principal eixo de mobilidade e logística, ligando Sombrio a Araranguá, Criciúma e ao restante do litoral sul; o transporte urbano é feito por ônibus, e o relevo plano facilita os deslocamentos a pé e de bicicleta na área central.',

  corridas: [
    {
      nome: 'Sombrio Night Run',
      descricao:
        'Corrida de rua noturna realizada na cidade, com largada e estrutura ligadas à área central, reunindo corredores da região do Extremo Sul catarinense.',
    },
    {
      nome: 'Corrida Sombrio Por Elas',
      descricao:
        'Prova de rua voltada ao público feminino, com percurso pelo Centro, que reforça a presença das corridas de rua no calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva sombriense aproveita a Lagoa de Sombrio para esportes náuticos, pesca e atividades na orla, soma a tradição das corridas de rua que partem do Centro e da Rua Coberta, e conta com o relevo plano que facilita caminhada e pedal no cotidiano.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e estúdios de treino funcional, concentrados no Centro e nos bairros residenciais, com porte compatível com uma cidade média do interior catarinense.',

  destaquesFitness: [
    'Lagoa de Sombrio, a maior lagoa de água doce de Santa Catarina, como espaço para corrida, pedal e esportes náuticos.',
    'Relevo plano e clima litorâneo ameno, que favorecem treino ao ar livre na maior parte do ano.',
    'Corridas de rua que partem do Centro e da Rua Coberta, como a Sombrio Night Run.',
    'Cidade cortada pela BR-101, com economia de comércio, móveis, confecção e agricultura (arroz, fumo e banana).',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Plana, litorânea e marcada pela Lagoa de Sombrio, a cidade oferece um cenário convidativo para treinar ao ar livre boa parte do ano. Um personal trainer ajuda a aproveitar a orla, as vias planas e as corridas de rua locais, organizando a rotina e mantendo a constância ao longo das estações.',

  vizinhas: ['ararangua-sc', 'criciuma-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Sombrio', url: 'https://cidades.ibge.gov.br/brasil/sc/sombrio/panorama' },
    { nome: 'Prefeitura de Sombrio', url: 'https://www.sombrio.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
