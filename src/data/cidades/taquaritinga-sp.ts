import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'taquaritinga-sp',
  nome: 'Taquaritinga',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'taquaritinguense',
  tipo: 'cidade',

  populacao: 52260,
  populacaoAno: 2022,
  idhm: 0.748,
  idhmClasse: 'alto',
  altitudeM: 565,

  resumoEconomico:
    'No centro-norte paulista, na região de Ribeirão Preto e Jaboticabal, Taquaritinga tem economia ancorada no agronegócio e nos serviços. O campo combina a cana-de-açúcar do complexo sucroalcooleiro com uma tradição forte de citricultura (laranja e limão) e fruticultura, embora os canaviais tenham avançado sobre antigos pomares. A indústria de transformação de alimentos marca a história local, e um polo empresarial às margens da rodovia SP-333 concentra empresas que empregam parte da população.',

  mercado:
    'Como cidade média do interior paulista, Taquaritinga tem um mercado fitness em expansão, formado por academias de musculação e estúdios de treino funcional, somados a profissionais autônomos. A procura por personal trainers cresce entre quem busca acompanhamento individualizado e quem aproveita as praças e o parque municipal para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Contendas', 'Residencial Laranjeiras', 'Vila Di Santi'],
  bairrosPopulares: ['São Sebastião', 'Santo Antônio', 'Paraíso', 'Vila Buscardi'],

  parques: [
    {
      nome: 'Parque Municipal de Lazer "Prefeito Ernesto Salvagni"',
      descricao:
        'Principal espaço de lazer ao ar livre da cidade, com mais de 1.000 metros de pistas de circulação iluminadas por LED para caminhada e corrida, academia ao ar livre, playground, pista de skate e área de pesca — ponto de encontro de quem treina com segurança no fim da tarde.',
    },
    {
      nome: 'Praça Dr. Horácio Ramalho',
      descricao:
        'Praça central da cidade, no Centro, onde ficam a Prefeitura e a Câmara Municipal; o entorno arborizado é usado para caminhadas leves e como referência do dia a dia urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias dos bairros residenciais e no parque municipal.',

  clima:
    'O clima é tropical de altitude, com inverno seco e ameno e verão quente e chuvoso, temperatura média anual em torno de 24 °C e cerca de 1.600 mm de chuva por ano. A maior parte da precipitação se concentra entre novembro e março, enquanto os meses de inverno tendem a ser mais secos.',
  climaTreino:
    'Nos meses mais quentes e úmidos do verão, treinar bem cedo ou no fim da tarde, com boa hidratação, é o caminho mais confortável; o inverno seco e ameno costuma ser a época mais agradável para atividades ao ar livre, com atenção à baixa umidade nos dias mais secos.',

  mobilidade:
    'A cidade se conecta à região por rodovias, com destaque para a SP-333, que liga Taquaritinga ao eixo de Ribeirão Preto e Jaboticabal e concentra o polo empresarial local. O transporte urbano é feito por ônibus, e o deslocamento dentro da cidade depende bastante de carro, moto e bicicleta.',

  corridas: [
    {
      nome: 'Corrida 1º de Maio',
      descricao:
        'Prova de rua promovida pela cidade, com percursos para diferentes níveis, que reúne corredores locais e da região em uma das datas mais tradicionais do calendário esportivo municipal.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o uso do parque municipal e das praças para caminhada e corrida, provas de rua que mobilizam a comunidade e a tradição de eventos populares da cidade, num ritmo típico do interior paulista.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior de São Paulo.',

  destaquesFitness: [
    'Parque Municipal de Lazer "Prefeito Ernesto Salvagni", com pistas iluminadas para caminhada e corrida.',
    'Clima tropical de altitude, com inverno seco e ameno favorável ao treino ao ar livre.',
    'Corrida 1º de Maio, prova de rua tradicional no calendário da cidade.',
    'Economia de agronegócio (cana-de-açúcar e citricultura) e indústria de alimentos, com polo empresarial na SP-333.',
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
    'Cidade média do centro-norte paulista, com clima ameno no inverno e boa estrutura de lazer ao ar livre, Taquaritinga oferece um cenário convidativo para quem quer treinar com constância. Um personal trainer ajuda a montar uma rotina que aproveite o parque municipal e as praças, ajustando horários ao calor do verão e mantendo o progresso ao longo do ano.',

  vizinhas: ['jaboticabal-sp', 'catanduva-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Taquaritinga', url: 'https://cidades.ibge.gov.br/brasil/sp/taquaritinga/panorama' },
    { nome: 'Prefeitura de Taquaritinga', url: 'https://www.taquaritinga.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
