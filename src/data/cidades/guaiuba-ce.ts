import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaiuba-ce',
  nome: 'Guaiúba',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'guaiubano',
  tipo: 'cidade',

  populacao: 24325,
  populacaoAno: 2022,
  idhm: 0.617,
  idhmClasse: 'médio',
  altitudeM: 65,

  resumoEconomico:
    'Município da Região Metropolitana de Fortaleza, Guaiúba fica no sopé da serra da Aratanha, a pouco mais de 25 km da capital pela CE-060. A economia tem base na agropecuária — herança da antiga produção de café e algodão nas serras — com criação de aves, suínos e abate de animais, além do comércio local e da mão de obra que se desloca para os polos industriais e de serviços da região metropolitana. As nascentes e açudes da serra e o rio Guaiúba marcam a paisagem e a identidade do lugar.',

  mercado:
    'Por ser uma cidade pequena integrada à Região Metropolitana de Fortaleza, o mercado fitness de Guaiúba é enxuto e concentrado em academias de bairro; parte dos moradores também busca estrutura na capital e em cidades vizinhas. A procura por personal trainers tende a vir de quem quer acompanhamento próximo, sem depender de deslocamento, aproveitando o relevo de serra e o clima ameno das partes altas para o treino ao ar livre.',

  bairrosNobres: ['Centro', 'Água Verde', 'Itacima', 'Dourado'],
  bairrosPopulares: ['Baú', 'São Gerônimo (Núcleo Colonial Pio XII)', 'Timbaúba', 'Cachoeira'],

  parques: [
    {
      nome: 'Serra da Aratanha (APA)',
      descricao:
        'Área de Proteção Ambiental que abrange Guaiúba, Pacatuba e Maranguape; o maciço úmido de mata e nascentes oferece trilhas, subidas e trechos de mata para caminhada e treino ao ar livre em clima mais ameno que o da planície.',
    },
    {
      nome: 'Rio Guaiúba e açudes da serra',
      descricao:
        'O rio Guaiúba nasce na serra da Aratanha e corre pelo município, que conta com dezenas de pequenos açudes; o entorno das águas e das estradas vicinais serve de percurso para quem caminha, pedala ou corre.',
    },
    {
      nome: 'Centro e vias urbanas',
      descricao:
        'As ruas do Centro e dos bairros próximos concentram o vaivém diário de caminhada e corrida leve, no ritmo tranquilo de uma cidade pequena de interior metropolitano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta; o pedal acontece sobretudo nas vias urbanas e nas estradas vicinais que ligam o Centro aos distritos e à serra, exigindo atenção ao compartilhar espaço com o tráfego rodoviário.',

  clima:
    'O clima é tropical quente, típico do interior metropolitano cearense, com uma estação chuvosa concentrada no primeiro semestre (o "inverno" do sertão) e um segundo semestre seco e mais quente. A proximidade da serra da Aratanha ameniza as temperaturas nas partes mais altas, que costumam ser mais frescas e úmidas que a depressão sertaneja ao redor.',
  climaTreino:
    'O calor pede treinar de manhã cedo ou no fim da tarde, com hidratação reforçada, sobretudo no segundo semestre. As partes altas da serra oferecem alívio térmico e são boas para atividade ao ar livre; na estação chuvosa, vale ter alternativa em ambiente coberto para não perder a constância.',

  mobilidade:
    'Guaiúba se conecta a Fortaleza principalmente pela CE-060, a cerca de 25 a 30 km da capital, com a BR-116 servindo de eixo estrutural da Região Metropolitana nas cidades vizinhas. O transporte é feito por ônibus e vans intermunicipais, e boa parte dos moradores se desloca diariamente para trabalhar ou estudar na capital e nos municípios do entorno.',

  corridas: [
    {
      nome: 'Provas na Região Metropolitana de Fortaleza',
      descricao:
        'Guaiúba não tem um calendário próprio consolidado de corridas de rua; os corredores locais costumam participar de provas em Fortaleza e cidades vizinhas, que concentram o calendário metropolitano.',
    },
    {
      nome: 'Trilhas e treino na serra da Aratanha',
      descricao:
        'O relevo de serra favorece a prática de trilha e treino de subida ao ar livre, opção informal muito usada por quem gosta de correr e caminhar em meio à mata da APA.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol de campo e de várzea, presente nas cidades pequenas do Ceará, com o uso crescente da serra da Aratanha para caminhada, trilha e treino ao ar livre. A proximidade de Fortaleza aproxima os moradores do calendário esportivo da capital.',
  academias:
    'A oferta se resume a academias de bairro de musculação e treino funcional, de porte compatível com uma cidade pequena; parte da estrutura mais completa é buscada na capital e em municípios vizinhos da Região Metropolitana.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Fortaleza aos pés da serra da Aratanha, a cerca de 25 km da capital pela CE-060.',
    'Serra da Aratanha (APA) com trilhas, mata e clima mais ameno para treino ao ar livre.',
    'Rio Guaiúba e dezenas de pequenos açudes marcando a paisagem e os percursos.',
    'Economia de base agropecuária e comércio local, com forte deslocamento diário para Fortaleza.',
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
    'Cidade pequena, serrana e integrada à Região Metropolitana de Fortaleza, Guaiúba oferece um cenário favorável ao treino ao ar livre, com o clima mais ameno da serra da Aratanha e percursos entre mata, açudes e estradas vicinais. Um personal trainer ajuda a organizar a rotina respeitando o calor da planície, aproveitando as partes altas e mantendo a constância mesmo com o deslocamento frequente para a capital.',

  vizinhas: ['pacatuba-ce', 'maranguape-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Guaiúba', url: 'https://cidades.ibge.gov.br/brasil/ce/guaiuba/panorama' },
    { nome: 'Prefeitura de Guaiúba', url: 'https://www.guaiuba.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
