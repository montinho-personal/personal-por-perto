import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'frutal-mg',
  nome: 'Frutal',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'frutalense',
  tipo: 'cidade',

  populacao: 58588,
  populacaoAno: 2022,
  idhm: 0.73,
  idhmClasse: 'alto',
  altitudeM: 516,

  resumoEconomico:
    'No Triângulo Mineiro, Frutal tem economia apoiada no agronegócio: é um polo sucroalcooleiro, com usinas de açúcar e etanol instaladas a poucos quilômetros da cidade, e mantém forte tradição em pecuária, com destaque para a produção de leite e de carne. Comércio, agroindústria de alimentos e a presença universitária complementam a base econômica do município.',

  mercado:
    'O mercado de personal trainers acompanha o porte de cidade média do interior mineiro, com academias de bairro, estúdios e profissionais autônomos que atendem em domicílio e em condomínios. A presença de estudantes universitários e o clima favorável ao ar livre sustentam a demanda por treino orientado durante boa parte do ano.',

  bairrosNobres: ['Cidade Jardim', 'Granville Casablanca', 'Cidade das Águas', 'Jardim das Esmeraldas'],
  bairrosPopulares: ['Eldorado', 'Santos Dumont', 'Estudantil', 'Jardim dos Palmares'],

  parques: [
    {
      nome: 'Parque Ecológico de Frutal',
      descricao:
        'Área verde urbana usada para caminhada e corrida, com trilhas e espaço arborizado, é o principal ponto público de treino ao ar livre na cidade.',
    },
    {
      nome: 'Praças e avenidas da área central',
      descricao:
        'As praças e os canteiros das principais avenidas concentram caminhadas no início da manhã e no fim da tarde, servindo de circuito urbano para quem treina ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em avenidas principais; a extensão oficial total não é divulgada em fonte pública consolidada.',

  clima:
    'O clima é tropical, típico do Triângulo Mineiro e do bioma Cerrado, com verão quente e chuvoso e inverno seco e ameno; as máximas no verão podem passar de 30 °C.',
  climaTreino:
    'O inverno seco e ameno favorece o treino ao ar livre, sobretudo cedo de manhã; no verão, vale evitar o meio do dia e o fim de tarde (calor e chuvas) e reforçar a hidratação.',

  mobilidade:
    'Frutal fica no eixo da BR-364, que liga São Paulo ao Triângulo Mineiro e segue rumo a Goiás e Mato Grosso do Sul, e a poucos quilômetros da BR-153 (Transbrasiliana), o que garante boa conexão rodoviária com a região.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de rua organizadas por clubes de serviço e entidades locais, como a corrida promovida pelo Rotary Club, com percursos voltados a corredores iniciantes e amadores.',
    },
    {
      nome: 'Circuitos de caminhada e corrida no Parque Ecológico',
      descricao:
        'O Parque Ecológico e as avenidas centrais funcionam como percursos informais para treinos de base e preparação para provas regionais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Frutal é a de uma cidade média do interior, com adesão à caminhada e à corrida de rua, uso das áreas verdes públicas e movimentação esportiva ligada à comunidade universitária.',
  academias:
    'A oferta reúne academias de bairro, estúdios e profissionais autônomos, complementados pela estrutura pública do Parque Ecológico e das praças para treino ao ar livre.',

  destaquesFitness: [
    'Parque Ecológico de Frutal como principal hub público de treino ao ar livre.',
    'Cidade universitária (UEMG/UFTM), com público estudantil que movimenta a demanda fitness.',
    'Clima tropical com inverno seco, favorável ao treino ao ar livre boa parte do ano.',
    'Mercado de cidade média, com academias de bairro, estúdios e atendimento em domicílio.',
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
    'Polo sucroalcooleiro e de pecuária leiteira do Triângulo Mineiro, Frutal alia clima favorável, áreas verdes e uma comunidade universitária ativa. Um personal trainer ajuda a aproveitar o Parque Ecológico e a estrutura local com método, seja para começar a treinar, seja para preparar provas de rua na região.',

  vizinhas: ['uberaba-mg', 'uberlandia-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Frutal', url: 'https://cidades.ibge.gov.br/brasil/mg/frutal/panorama' },
    { nome: 'Prefeitura de Frutal', url: 'https://www.frutal.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
