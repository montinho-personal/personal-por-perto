import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maranguape-ce',
  nome: 'Maranguape',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'maranguapense',
  tipo: 'cidade',

  populacao: 105093,
  populacaoAno: 2022,
  idhm: 0.659,
  idhmClasse: 'médio',
  altitudeM: 68,

  resumoEconomico:
    'Integrante da Região Metropolitana de Fortaleza, Maranguape fica a cerca de 27 km da capital, aos pés da Serra de Maranguape. A economia se apoia em serviços, indústria e agropecuária, com tradição histórica na cana-de-açúcar e na produção de cachaça. A cidade é conhecida nacionalmente como terra natal do humorista Chico Anysio.',

  mercado:
    'O mercado fitness é mais concentrado e ligado ao comércio do Centro e dos bairros centrais, com oferta crescente puxada pela proximidade com Fortaleza e pela população metropolitana.',

  bairrosNobres: ['Centro', 'Penedo', 'Aningas', 'Coité'],
  bairrosPopulares: ['Tabatinga', 'Lameirão', 'Muriti', 'João XXIII'],

  parques: [
    {
      nome: 'Serra de Maranguape',
      descricao:
        'Maciço residual de mata úmida que se ergue sobre o município, com trilhas ecológicas e clima mais ameno, procurado para caminhadas e treinos em meio à natureza.',
    },
    {
      nome: 'Centro histórico e praças',
      descricao:
        'O conjunto de praças e ruas do Centro, ligado à memória de Chico Anysio, serve de circuito urbano para caminhada e corrida leve.',
    },
    {
      nome: 'Distrito de Amanari',
      descricao:
        'Área serrana com lagoas e balneários naturais, usada para passeios e atividades ao ar livre nos fins de semana.',
    },
  ],
  ciclovias:
    'Maranguape não tem rede cicloviária extensa divulgada em fonte oficial; o pedal acontece sobretudo em vias do Centro e em estradas vicinais rumo à serra.',

  clima:
    'O clima é quente o ano todo, de feição tropical com traços semiáridos na parte baixa, enquanto a Serra de Maranguape guarda um microclima mais úmido e ameno; as chuvas se concentram no primeiro semestre.',
  climaTreino:
    'O calor pede treinos no início da manhã ou no fim da tarde, com hidratação reforçada; a serra oferece alternativa mais fresca para quem busca refúgio do sol.',

  mobilidade:
    'Maranguape é cortada pela BR-222 e por rodovias estaduais que a ligam a Fortaleza e às demais cidades da Região Metropolitana, com deslocamento curto até a capital.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário metropolitano',
      descricao:
        'Provas de rua promovidas pelo poder público e por organizadores regionais usam as vias do Centro como percurso.',
    },
    {
      nome: 'Corrida de Jumentos em Lages',
      descricao:
        'Evento tradicional e folclórico realizado no distrito de Lages em dezembro, parte do calendário cultural do município.',
    },
  ],
  culturaEsportiva:
    'A cultura local mistura tradição rural e identidade ligada ao humor de Chico Anysio, com a Serra de Maranguape funcionando como principal cenário para atividades ao ar livre e caminhadas em trilha.',
  academias:
    'A oferta reúne academias e estúdios concentrados no Centro e nos bairros centrais, complementada pelas praças urbanas e pelas trilhas da serra.',

  destaquesFitness: [
    'Serra de Maranguape com trilhas e clima úmido e ameno para treino na natureza.',
    'Centro histórico ligado a Chico Anysio como circuito urbano de caminhada e corrida.',
    'Distrito de Amanari com lagoas e balneários para atividades ao ar livre.',
    'Calor o ano todo na parte baixa, que pede atenção a horário e hidratação.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Aos pés da serra e a poucos quilômetros de Fortaleza, Maranguape combina o calor da parte baixa com o frescor das trilhas serranas. Um personal trainer ajuda a aproveitar esses cenários com método, ajustando horários e hidratação ao clima de cada lugar.',

  vizinhas: ['fortaleza-ce', 'caucaia-ce', 'maracanau-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Maranguape', url: 'https://cidades.ibge.gov.br/brasil/ce/maranguape/panorama' },
    { nome: 'Prefeitura de Maranguape', url: 'https://www.maranguape.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
