import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'iguatu-ce',
  nome: 'Iguatu',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'iguatuense',
  tipo: 'cidade',

  populacao: 98064,
  populacaoAno: 2022,
  idhm: 0.677,
  idhmClasse: 'médio',
  altitudeM: 218,

  resumoEconomico:
    'Iguatu é o principal polo econômico e de serviços do Centro-Sul cearense, posição construída desde a chegada da ferrovia, em 1910, que transformou a cidade em entreposto comercial. Foi um grande centro produtor de algodão entre as décadas de 1960 e 1980 e hoje tem a economia movida pelos setores de comércio e serviços, móveis e calçados, além da pecuária e da agricultura irrigada apoiada nos açudes da região. Concentra polo educacional, hospitalar e administrativo que atende dezenas de municípios do entorno.',

  mercado:
    'Por ser polo regional de comércio, saúde e educação, Iguatu reúne uma demanda fitness que extrapola seus limites e atrai moradores das cidades vizinhas. A oferta de academias se concentra no Centro e nos bairros de classe média, e o calor do semiárido empurra boa parte do treino ao ar livre para o começo da manhã e o fim da tarde.',

  bairrosNobres: ['Centro', 'Jardim Iguatu', 'Areias', 'Prado'],
  bairrosPopulares: ['Cajueiro', 'Tabuleiro', 'Vila Brasília', 'COHAB'],

  parques: [
    {
      nome: 'Açude Trussu (Roberto Costa)',
      descricao:
        'Grande reservatório da região, com capacidade superior a 300 milhões de metros cúbicos, é referência de lazer, pesca e passeios ao ar livre nas proximidades da cidade.',
    },
    {
      nome: 'Estação Ferroviária e entorno histórico',
      descricao:
        'A antiga estação de 1910, marco da história de Iguatu, e seu entorno no Centro servem de cenário para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'As praças e os corredores centrais concentram a caminhada e a corrida urbanas, especialmente nos horários mais frescos do dia.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no dia a dia, mas a malha de ciclovias dedicadas ainda é limitada, concentrada em trechos do Centro.',

  clima:
    'O clima é semiárido quente (BSw’h’ de Köppen), típico do sertão central cearense, com temperaturas altas o ano inteiro e chuvas concentradas de janeiro a maio; a precipitação média fica em torno de 1.000 mm por ano.',
  climaTreino:
    'O calor constante recomenda treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada e proteção solar; no segundo semestre, mais seco e quente, a atenção precisa ser ainda maior.',

  mobilidade:
    'O acesso se dá principalmente pela BR-116, eixo que liga Iguatu a Fortaleza (cerca de 380 km) e ao restante do Centro-Sul cearense, reforçando seu papel de entroncamento regional. O trânsito interno é tranquilo e a cidade tem escala caminhável no Centro.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — Etapa Iguatu',
      descricao:
        'Prova consolidada no calendário regional, com percursos de 3 km, 5 km e 10 km, além da Maratoninha Sesc voltada ao público infantil.',
    },
    {
      nome: 'Corrida de Aniversário de Iguatu',
      descricao:
        'Prova de rua realizada nas comemorações do aniversário da cidade, que reuniu mais de 2 mil corredores em sua edição mais recente.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua vem ganhando força em Iguatu, com etapas do Circuito Sesc e provas municipais que mobilizam milhares de participantes. O custo de vida acessível e o trânsito leve favorecem a adesão à atividade física na cidade.',
  academias:
    'A oferta de academias acompanha o porte de polo regional, concentrada no Centro e nos bairros de classe média, e é complementada pelas praças, pelos corredores urbanos e pelos espaços de lazer próximos ao Açude Trussu.',

  destaquesFitness: [
    'Polo regional do Centro-Sul cearense, com demanda fitness vinda também das cidades vizinhas.',
    'Açude Trussu e a área histórica da estação ferroviária como cenários de atividade ao ar livre.',
    'Calendário de corridas em ascensão, com o Circuito Sesc e provas municipais de grande adesão.',
    'Clima semiárido quente que concentra o treino ao ar livre nos horários mais amenos.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Como coração do Centro-Sul cearense, Iguatu une infraestrutura de polo regional a um custo de vida acessível e a espaços de treino ao ar livre, do Centro histórico ao Açude Trussu. Um personal trainer ajuda a montar uma rotina segura e adaptada ao calor do semiárido, ajustando horários, hidratação e progressão de carga.',

  vizinhas: ['juazeiro-do-norte-ce', 'crato-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Iguatu', url: 'https://cidades.ibge.gov.br/brasil/ce/iguatu/panorama' },
    { nome: 'Prefeitura de Iguatu', url: 'https://iguatu.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
