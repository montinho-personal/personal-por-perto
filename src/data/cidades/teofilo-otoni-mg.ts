import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'teofilo-otoni-mg',
  nome: 'Teófilo Otoni',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'teófilo-otonense',
  tipo: 'cidade',

  populacao: 137418,
  populacaoAno: 2022,
  idhm: 0.701,
  idhmClasse: 'alto',
  altitudeM: 319,

  resumoEconomico:
    'Principal centro urbano do Vale do Mucuri, no nordeste mineiro, Teófilo Otoni é polo regional de comércio e serviços e referência nacional no comércio de pedras preciosas e gemas — é conhecida como capital internacional das pedras preciosas, com lapidação e negócios que atraem compradores de fora do país. A cidade também concentra educação superior, com o campus Mucuri da UFVJM (Universidade Federal dos Vales do Jequitinhonha e Mucuri), e funciona como entreposto de comércio, saúde e educação para os municípios vizinhos.',

  mercado:
    'Cidade média com classe média ligada ao comércio, à lapidação de gemas e ao ensino superior, Teófilo Otoni reúne demanda por academias, musculação, treino funcional e personal trainers, especialmente na área central e nos bairros mais estruturados. A presença universitária e o fluxo de profissionais liberais ajudam a sustentar essa procura.',

  bairrosNobres: ['Centro', 'Grã-Duquesa', 'Funcionários', 'Ipiranga'],
  bairrosPopulares: ['Castro Pires', 'São Jacinto', 'Manoel Pimenta', 'Marajoara'],

  parques: [
    {
      nome: 'Praça Tiradentes',
      descricao:
        'Principal praça do Centro, arborizada e com anfiteatro, é ponto de encontro e de caminhada no coração da cidade.',
    },
    {
      nome: 'Pedra da Lajinha',
      descricao:
        'Mirante natural nos arredores, com trilhas de baixa dificuldade e vista panorâmica — opção para caminhada e atividade ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem ciclofaixas e vias usadas por ciclistas; a extensão total da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente, típico do Vale do Mucuri e do nordeste mineiro, com temperaturas elevadas boa parte do ano e estação chuvosa concentrada no verão; a altitude relativamente baixa (cerca de 319 m) acentua o calor.',
  climaTreino:
    'O calor pede treino ao ar livre logo cedo ou no fim do dia, com atenção redobrada à hidratação; nos horários de pico de sol, o treino indoor em academia tende a ser mais confortável.',

  mobilidade:
    'Teófilo Otoni é cortada pela BR-116 (Rio–Bahia), principal eixo rodoviário que liga o nordeste mineiro ao Rio de Janeiro e à Bahia, reforçando seu papel de entroncamento e polo regional. O deslocamento interno é feito por vias urbanas e linhas de ônibus municipais.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de corrida de rua promovidas por grupos e pelo comércio local ao longo do ano; o calendário varia a cada temporada.',
    },
    {
      nome: 'Circuito Sesc de Corridas (etapas regionais)',
      descricao:
        'O circuito do Sesc/Fecomércio-MG passa por cidades do interior mineiro, ampliando as opções de prova para corredores da região.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva se apoia em academias, grupos de corrida e no uso das praças e áreas ao ar livre da cidade, com o público universitário da UFVJM ajudando a movimentar a procura por atividade física.',
  academias:
    'A oferta acompanha o porte de cidade média polo de região, com academias de musculação, treino funcional e estúdios, complementada por praças e mirantes para atividade ao ar livre.',

  destaquesFitness: [
    'Polo regional do Vale do Mucuri, com classe média ligada ao comércio de gemas e ao ensino superior.',
    'Presença da UFVJM (campus Mucuri), que sustenta um público jovem e ativo.',
    'Praças e mirantes como Praça Tiradentes e Pedra da Lajinha para treino ao ar livre.',
    'Clima quente do nordeste mineiro, que exige orientação de hidratação e horários estratégicos.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo do Vale do Mucuri e capital das pedras preciosas, Teófilo Otoni combina vida urbana de cidade média com praças e mirantes para treino ao ar livre. Um personal trainer ajuda a montar uma rotina consistente, ajustando horários e hidratação ao clima quente do nordeste mineiro.',

  vizinhas: ['governador-valadares-mg', 'ipatinga-mg', 'montes-claros-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Teófilo Otoni', url: 'https://cidades.ibge.gov.br/brasil/mg/teofilo-otoni/panorama' },
    { nome: 'Prefeitura de Teófilo Otoni', url: 'https://www.teofilootoni.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
