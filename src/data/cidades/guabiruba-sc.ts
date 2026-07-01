import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guabiruba-sc',
  nome: 'Guabiruba',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'guabirubense',
  tipo: 'cidade',

  populacao: 24543,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 21,

  resumoEconomico:
    'No Vale do Itajaí, vizinha de Brusque e integrante do chamado Vale Europeu, Guabiruba foi colonizada a partir da década de 1860 por imigrantes alemães (a maioria vinda da região de Baden) e, mais tarde, por italianos, poloneses e austríacos. A economia é fortemente têxtil: a cidade concentra centenas de empresas de fios, malhas, confecções e tinturarias, atividade que se consolidou a partir dos anos 1970 e convive com a metalurgia e um comércio local aquecido. O turismo ligado à natureza e à herança europeia complementa a base produtiva.',

  mercado:
    'Cidade pequena e próspera, encostada em Brusque e no polo têxtil regional, Guabiruba tem um mercado fitness enxuto, formado por academias locais e estúdios de treino. A procura por personal trainers aparece entre trabalhadores da indústria e do comércio que buscam orientação individual, além de quem quer aproveitar as trilhas e o parque municipal para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Imigrantes', 'Guabiruba Sul', 'Planície Alta'],
  bairrosPopulares: ['Lageado Baixo', 'Lageado Alto', 'São Pedro', 'Aymoré'],

  parques: [
    {
      nome: 'Parque Municipal Vereador Érico Vicentini',
      descricao:
        'Grande área de preservação e lazer na zona urbana, com complexo de cachoeiras, a trilha João Bauer em meio à Mata Atlântica e o Labirinto Cultural de Guabiruba — espaço muito usado para caminhada, trilha e treino ao ar livre.',
    },
    {
      nome: 'Entorno do rio Guabiruba e do rio Itajaí-Mirim',
      descricao:
        'Os rios que cortam o município e suas margens desenham vales e vias planas que servem de percurso para caminhada, corrida e pedal no dia a dia.',
    },
    {
      nome: 'Trilhas e morros da Serra do Itajaí',
      descricao:
        'Cercada por remanescentes de Mata Atlântica, a cidade tem trilhas, riachos e cachoeiras no entorno da Serra do Itajaí, cenário natural para trail running e atividades de aventura.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias planas ao longo dos rios e nas ligações com Brusque.',

  clima:
    'O clima é subtropical úmido (mesotérmico), típico do Vale do Itajaí, com verões quentes, invernos amenos e chuvas bem distribuídas ao longo do ano. As temperaturas costumam variar de forma agradável na maior parte do ano, com dias mais quentes e úmidos no verão.',
  climaTreino:
    'A umidade e o calor do verão pedem treinar no início da manhã ou no fim da tarde, com boa hidratação; o inverno ameno favorece atividades ao ar livre, e nos dias de chuva mais intensa os ambientes cobertos são a alternativa mais segura.',

  mobilidade:
    'Guabiruba se conecta à região principalmente pela SC-486 (Rodovia Antônio Heil), que liga a cidade a Brusque e ao acesso à BR-101, além das ligações pela SC-411 (sentido São João Batista) e pela SC-420 (sentido Gaspar e Blumenau). O transporte urbano é feito por ônibus, e a proximidade com Brusque integra o município ao cotidiano do polo têxtil regional.',

  corridas: [
    {
      nome: 'Guaba Trail Run',
      descricao:
        'Prova de trail running realizada em Guabiruba, com percursos de 5 km, 15 km e 25 km pelos morros e trilhas da cidade, associada às comemorações de aniversário do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso do parque municipal e das trilhas da Serra do Itajaí para caminhada e corrida, o trail running em provas locais e uma vida comunitária marcada pelas festas de herança alemã e italiana do Vale Europeu.',
  academias:
    'A oferta é formada por academias locais de musculação e estúdios de treino funcional distribuídos pelo Centro e bairros próximos, com porte compatível com uma cidade pequena do Vale do Itajaí.',

  destaquesFitness: [
    'Parque Municipal Vereador Érico Vicentini, com cachoeiras, trilhas e o Labirinto Cultural como espaço de atividade ao ar livre.',
    'Trilhas da Serra do Itajaí e provas de trail running, como a Guaba Trail Run.',
    'Clima subtropical úmido, que pede ajuste de horário no verão quente e favorece o treino ao ar livre no inverno ameno.',
    'Cidade têxtil do Vale Europeu, vizinha de Brusque, com forte herança de colonização alemã e italiana.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Pequena, próspera e cercada de natureza no Vale do Itajaí, Guabiruba oferece parque municipal, trilhas e um clima subtropical que favorece o treino na maior parte do ano. Um personal trainer ajuda a montar uma rotina que aproveite esses espaços, ajuste os horários ao calor úmido do verão e mantenha a constância entre o trabalho e a vida na cidade.',

  vizinhas: ['brusque-sc', 'blumenau-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Guabiruba', url: 'https://cidades.ibge.gov.br/brasil/sc/guabiruba/panorama' },
    { nome: 'Prefeitura de Guabiruba', url: 'https://guabiruba.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
