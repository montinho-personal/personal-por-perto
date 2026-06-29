import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'curvelo-mg',
  nome: 'Curvelo',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'curvelano',
  tipo: 'cidade',

  populacao: 80665,
  populacaoAno: 2022,
  idhm: 0.713,
  idhmClasse: 'alto',
  altitudeM: 633,

  resumoEconomico:
    'Conhecida como "Coração de Minas" pela posição central no estado, Curvelo é um polo regional da área central mineira. A economia combina pecuária (com tradição na criação de gado), comércio e serviços que atendem aos municípios vizinhos, além de um setor agropecuário e de reflorestamento expressivo. A localização estratégica, num importante entroncamento rodoviário, reforça o papel da cidade como centro logístico e de abastecimento da região.',

  mercado:
    'Cidade média mineira com comércio regional ativo e classe média em crescimento, Curvelo tem demanda por academias, musculação, treino funcional e acompanhamento de personal trainers, impulsionada por uma cena local de corrida de rua e pelo uso de praças e espaços públicos para atividade física.',

  bairrosNobres: ['Centro', 'Santa Terezinha', 'Bela Vista', 'JK'],
  bairrosPopulares: ['Santo Antônio', 'Boa Vista', 'Maria Imaculada', 'Pedreira'],

  parques: [
    {
      nome: 'Parque de Exposições Antônio Ernesto de Salvo',
      descricao:
        'Amplo espaço usado para eventos agropecuários e atividades ao ar livre, com áreas abertas que servem a caminhadas e treinos nas proximidades.',
    },
    {
      nome: 'Praça da Estação',
      descricao:
        'Espaço público revitalizado no centro, ponto de encontro e de caminhada leve, com área de convivência e biblioteca infantil.',
    },
    {
      nome: 'Praças e áreas verdes do entorno do Centro',
      descricao:
        'Conjunto de praças arborizadas usadas por moradores para caminhada e atividade física ao ar livre no fim de tarde.',
    },
  ],
  ciclovias:
    'A cidade tem alguns trechos de ciclofaixa e vias usadas por ciclistas; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, típico da região central mineira de cerrado e serras, com verão chuvoso e inverno seco; as temperaturas médias costumam oscilar entre cerca de 19 °C e 26 °C ao longo do ano.',
  climaTreino:
    'O período seco e ameno (outono e inverno) favorece treino ao ar livre em quase qualquer horário, enquanto o calor e as chuvas de verão pedem atenção à hidratação e preferência pelo começo da manhã ou fim de tarde.',

  mobilidade:
    'Curvelo é um importante entroncamento rodoviário: fica no início da BR-135 (junto à BR-040, sentido norte de Minas e Montes Claros) e é ponto de partida da BR-259, que liga a cidade a Diamantina, além da ligação pela LMG-754 rumo a Cordisburgo — o que dá acesso fácil à região central mineira e a destinos turísticos próximos como a Serra do Cipó e Inhotim.',

  corridas: [
    {
      nome: 'Corrida de Rua AABB Curvelo',
      descricao:
        'Prova de rua promovida na cidade, com percursos pelas ruas centrais, reunindo corredores da região central de Minas.',
    },
    {
      nome: 'Etapa do Circuito Guimarães Rosa',
      descricao:
        'Curvelo integra o circuito turístico-cultural Guimarães Rosa, que movimenta eventos esportivos e de turismo ativo na região.',
    },
  ],
  culturaEsportiva:
    'Como cidade-polo da região central, Curvelo tem uma cena de corrida de rua e atividade física ao ar livre em crescimento, com provas locais e grupos que usam as praças e vias centrais para treinar — um ambiente favorável a treinadores e assessorias de corrida.',
  academias:
    'A oferta acompanha o porte de cidade média mineira, com academias de musculação, estúdios de treino funcional e espaços de ginástica, complementados pelo uso de praças e áreas verdes do Centro para atividade física ao ar livre.',

  destaquesFitness: [
    'Cidade-polo da região central de Minas, com comércio e serviços que atendem aos municípios vizinhos.',
    'Praças e áreas verdes no Centro usadas para caminhada e treino ao ar livre.',
    'Cena local de corrida de rua em crescimento, com provas e o circuito Guimarães Rosa.',
    'Clima tropical de altitude, com período seco e ameno favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'No "Coração de Minas", Curvelo combina vida de cidade média com praças, clima ameno boa parte do ano e uma cena de corrida em crescimento. Um personal trainer ajuda a estruturar o treino aproveitando os espaços públicos do Centro e ajustando intensidade e horários ao clima tropical de altitude da região central mineira.',

  vizinhas: ['sete-lagoas-mg', 'belo-horizonte-mg', 'montes-claros-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Curvelo', url: 'https://cidades.ibge.gov.br/brasil/mg/curvelo/panorama' },
    { nome: 'Prefeitura de Curvelo', url: 'https://curvelo.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
