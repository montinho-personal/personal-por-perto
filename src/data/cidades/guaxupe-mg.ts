import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaxupe-mg',
  nome: 'Guaxupé',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'guaxupeano',
  tipo: 'cidade',

  populacao: 50911,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',
  altitudeM: 760,

  resumoEconomico:
    'Conhecida como a Capital Nacional do Café, Guaxupé fica no Sul de Minas e é a sede da Cooxupé, a maior cooperativa de café do país, com milhares de cooperados e café recebido de centenas de municípios da região. A cafeicultura organiza boa parte da economia local — do beneficiamento e da armazenagem à exportação —, acompanhada de um comércio e de serviços ativos que atendem a cidade e os municípios vizinhos. O Festival do Café, realizado por volta de junho e julho, reforça essa identidade cafeeira.',

  mercado:
    'Como cidade média do interior mineiro com renda apoiada na cafeicultura e no comércio, Guaxupé tem um mercado fitness formado sobretudo por academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca acompanhamento individualizado para emagrecimento, condicionamento e qualidade de vida, aproveitando o clima ameno de altitude e os espaços públicos da cidade para treinos ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Primavera', 'Santo Antônio', 'Vila Santa Terezinha'],
  bairrosPopulares: ['Morro Agudo', 'Subúrbio', 'São Benedito', 'Dornelas'],

  parques: [
    {
      nome: 'Parque Municipal da Mogiana',
      descricao:
        'Ampla área verde junto ao centro, com lagos, academias ao ar livre, campo, quadra de peteca e espaço para caminhada — um dos pontos mais usados pelos moradores para atividade física e lazer, e ponto de largada de corridas de rua locais.',
    },
    {
      nome: 'Praça Dr. Antônio Costa Monteiro',
      descricao:
        'Praça central de Guaxupé, espaço de convívio e ponto de referência no Centro, usada para caminhadas leves e encontros ao ar livre.',
    },
    {
      nome: 'Vila Olímpica',
      descricao:
        'Complexo esportivo municipal que reúne diversas modalidades, servindo de base para treinos, encontros desportivos e atividades comunitárias na cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias dos bairros e no entorno do Parque da Mogiana, com algumas saídas para estradas vicinais em meio aos cafezais.',

  clima:
    'Guaxupé tem clima ameno de altitude (cerca de 760 metros), típico do Sul de Minas, com verões quentes e chuvosos e invernos secos e mais frios, quando as madrugadas podem ficar bastante geladas. A estação chuvosa concentra-se entre novembro e março, e a seca, entre maio e setembro.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano. No verão, vale priorizar o início da manhã ou o fim da tarde e reforçar a hidratação por causa do calor e das chuvas; no inverno, o frio das madrugadas pede aquecimento mais cuidadoso antes de correr ou caminhar.',

  mobilidade:
    'Guaxupé é cortada pela BR-491, principal eixo rodoviário que liga a cidade a São Sebastião do Paraíso e à região, com conexões para o interior paulista pela Média Mogiana. O transporte urbano é feito por ônibus, e a posição no Sul de Minas mantém a cidade integrada à malha de rodovias que escoam a produção de café da região.',

  corridas: [
    {
      nome: 'Corrida de rua do Parque da Mogiana',
      descricao:
        'Provas de rua com largada no Parque Municipal da Mogiana e percursos de 5 e 10 km que passam por diversos bairros, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'GUAXURUN',
      descricao:
        'Corrida de rua realizada em Guaxupé, com percurso de 5 km, que movimenta a comunidade de corredores locais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva guaxupeana combina o uso do Parque da Mogiana e da Vila Olímpica para caminhada, corrida e modalidades coletivas, com corridas de rua que percorrem os bairros. O clima ameno de altitude é um aliado de quem treina ao ar livre ao longo do ano.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Capital Nacional do Café e sede da Cooxupé, a maior cooperativa de café do país.',
    'Clima ameno de altitude (cerca de 760 m), favorável ao treino ao ar livre na maior parte do ano.',
    'Parque Municipal da Mogiana e Vila Olímpica como espaços de caminhada, corrida e atividade física.',
    'Corridas de rua locais com percursos de 5 e 10 km que passam pelos bairros da cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade do café, de clima ameno e com bons espaços públicos para atividade física, Guaxupé reúne condições favoráveis para quem quer treinar com constância. Um personal trainer ajuda a montar uma rotina que aproveite o Parque da Mogiana e o clima de altitude, ajustando os horários ao verão chuvoso e ao frio do inverno mineiro.',

  vizinhas: ['sao-sebastiao-do-paraiso-mg', 'mococa-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Guaxupé', url: 'https://cidades.ibge.gov.br/brasil/mg/guaxupe/panorama' },
    { nome: 'Prefeitura de Guaxupé', url: 'https://www.guaxupe.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
