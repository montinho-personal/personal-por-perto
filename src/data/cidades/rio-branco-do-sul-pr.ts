import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-branco-do-sul-pr',
  nome: 'Rio Branco do Sul',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'rio-branquense',
  tipo: 'cidade',

  populacao: 37558,
  populacaoAno: 2022,
  idhm: 0.679,
  idhmClasse: 'médio',
  altitudeM: 1000,

  resumoEconomico:
    'Conhecida como a Capital do Cimento, Rio Branco do Sul fica no vetor norte da Região Metropolitana de Curitiba, em relevo de serras e formações calcárias. A economia gira em torno da mineração de calcário e da produção de cimento — a cidade abriga a unidade da Votorantim Cimentos, apontada como a maior fábrica de cimento da América Latina, abastecida pelas minas Saivá e Itaretama. Somam-se a isso a fabricação de cal e corretivos agrícolas e a agropecuária, que ocupa a área rural do município.',

  mercado:
    'Como cidade de porte médio na órbita de Curitiba, Rio Branco do Sul tem um mercado fitness concentrado em academias locais de musculação e treino funcional, com parte da população que trabalha ou estuda na capital e nos municípios vizinhos. A procura por personal trainers aparece principalmente entre quem quer treino orientado para o clima frio de altitude e para conciliar a rotina de deslocamento pela RMC.',

  bairrosNobres: ['Centro', 'Jardim Santa Terezinha', 'Vila São Miguel', 'Jardim Guaraituba'],
  bairrosPopulares: ['Tranqueira', 'Barro Preto', 'Vila Nova', 'Sete Voltas'],

  parques: [
    {
      nome: 'Serras e formações calcárias do entorno',
      descricao:
        'O município é cortado por serras como Bromado, Vuturuvu, Santana e Bacaetava, em relevo acidentado do Primeiro Planalto. As estradas e trilhas rurais servem de percurso para quem treina ao ar livre em meio às elevações e ao carste.',
    },
    {
      nome: 'Região cárstica e das cavernas',
      descricao:
        'A ocorrência de rochas calcárias e dolomíticas dá origem a grutas e cavernas na região, como a Caverna de Lancinhas — hoje fechada para visitação, à espera de plano de manejo. O relevo cárstico marca a paisagem do município e do vetor norte da RMC.',
    },
    {
      nome: 'Área urbana e vias do Centro',
      descricao:
        'Boa parte da caminhada e da corrida do dia a dia acontece nas ruas do Centro e dos bairros residenciais, aproveitando o traçado urbano compacto da sede municipal.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos da área urbana; grande parte do pedal e da corrida acontece nas vias da cidade e em estradas rurais, exigindo atenção ao relevo de serras e ao tráfego pesado ligado à mineração.',

  clima:
    'O clima é subtropical de altitude, típico do Primeiro Planalto paranaense, com a sede a cerca de 1.000 metros de altitude. As estações são bem marcadas: verões amenos e chuvosos e invernos frios e úmidos, com ocorrência frequente de geadas e temperaturas próximas de zero nas madrugadas mais rigorosas.',
  climaTreino:
    'O frio de altitude pede aquecimento mais longo e roupa em camadas, sobretudo nas manhãs de inverno com geada; nas horas mais quentes de dias ensolarados, o treino ao ar livre fica mais confortável. A umidade e a névoa do inverno também favorecem alternar entre ambientes cobertos e ao ar livre.',

  mobilidade:
    'A ligação principal com Curitiba se dá pela PR-092, que atravessa o vetor norte da Região Metropolitana passando por Almirante Tamandaré, e segue rumo ao Vale do Ribeira. O transporte coletivo é feito por linhas de ônibus metropolitanas que conectam a cidade à capital e aos municípios vizinhos, e a logística da mineração e do cimento pesa no fluxo das rodovias da região.',

  corridas: [
    {
      nome: 'Provas e caminhadas locais',
      descricao:
        'A cidade recebe eventualmente caminhadas e corridas de rua promovidas por iniciativas locais e escolares; o calendário é modesto e concentra-se em ações pontuais na área urbana.',
    },
    {
      nome: 'Circuitos da Região Metropolitana de Curitiba',
      descricao:
        'Muitos corredores da cidade participam de provas de rua realizadas em Curitiba e em municípios vizinhos da RMC, aproveitando a proximidade com a capital e o calendário mais amplo de eventos da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das ruas da cidade e das estradas rurais para caminhada e corrida, o futebol de bairro e a participação em provas da Região Metropolitana de Curitiba, tudo em um cenário de serras e clima frio de altitude.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, em porte compatível com uma cidade média do interior metropolitano.',

  destaquesFitness: [
    'Capital do Cimento: polo de calcário e mineração no vetor norte da Região Metropolitana de Curitiba.',
    'Relevo de serras e formações calcárias, com região cárstica e cavernas no entorno.',
    'Clima frio de altitude (sede a cerca de 1.000 m), com invernos de geada que pedem aquecimento reforçado.',
    'Proximidade com Curitiba pela PR-092, que amplia o acesso a provas e estrutura esportiva da RMC.',
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
    'Cidade de serras, calcário e clima frio de altitude na órbita de Curitiba, Rio Branco do Sul pede um treino adaptado ao inverno rigoroso e à rotina de deslocamento pela RMC. Um personal trainer ajuda a organizar os horários, ajustar o aquecimento ao frio e manter a constância ao longo das estações bem marcadas do Primeiro Planalto.',

  vizinhas: ['colombo-pr', 'almirante-tamandare-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Branco do Sul', url: 'https://cidades.ibge.gov.br/brasil/pr/rio-branco-do-sul/panorama' },
    { nome: 'Prefeitura de Rio Branco do Sul', url: 'https://riobrancodosul.atende.net/cidadao/pagina/rio-branco-do-sul' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
