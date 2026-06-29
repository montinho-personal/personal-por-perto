import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tucurui-pa',
  nome: 'Tucuruí',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'tucuruiense',
  tipo: 'cidade',

  populacao: 91306,
  populacaoAno: 2022,
  idhm: 0.67,
  idhmClasse: 'médio',
  altitudeM: 35,

  resumoEconomico:
    'No sudeste do Pará, às margens do rio Tocantins, Tucuruí é conhecida por abrigar a Usina Hidrelétrica de Tucuruí, uma das maiores do Brasil, cuja construção a partir dos anos 1970 transformou a cidade. A economia gira em torno da geração de energia, da pesca e do turismo no Lago de Tucuruí, além de comércio e serviços que atendem aos municípios do entorno.',

  mercado:
    'Com cerca de 91 mil habitantes e renda ligada ao setor elétrico, à pesca e ao comércio, Tucuruí sustenta uma rede de academias e estúdios concentrada no centro e nos bairros residenciais, com espaço para personal trainers que atendem em academias de bairro e nas áreas próximas à orla do lago e do rio.',

  bairrosNobres: ['Centro', 'Vila Permanente', 'Nova Matinha', 'Beira Rio'],
  bairrosPopulares: ['Liberdade', 'São Sebastião', 'Vila Pompéia', 'Piedade'],

  parques: [
    {
      nome: 'Usina Hidrelétrica de Tucuruí',
      descricao:
        'Uma das maiores usinas hidrelétricas do Brasil, com barragem de cerca de 11 km de extensão; cartão-postal da cidade e referência de passeios e turismo técnico.',
    },
    {
      nome: 'Lago de Tucuruí',
      descricao:
        'Imenso reservatório formado pela usina, usado para pesca, passeios de barco e lazer; suas margens reúnem moradores ao fim de tarde.',
    },
    {
      nome: 'Orla do Rio Tocantins',
      descricao:
        'Área à beira do rio usada para caminhada e encontros, com vista para a água e movimento nas horas mais frescas.',
    },
  ],
  ciclovias:
    'As vias da Vila Permanente e o entorno da orla são usados por ciclistas; uma malha cicloviária formal e sua extensão ainda não são divulgadas em fonte oficial.',

  clima:
    'O clima é equatorial, quente e chuvoso, com médias anuais em torno de 26 a 28 °C, chuvas fortes de dezembro a abril e período mais seco de junho a setembro.',
  climaTreino:
    'O calor e a umidade elevados pedem treinos cedo de manhã ou no fim da tarde, com sombra e hidratação reforçada; na estação chuvosa, opções cobertas ganham importância.',

  mobilidade:
    'Tucuruí é cortada pela PA-150, principal ligação rodoviária com Belém e o sul do estado, e conta com hidrovia no rio Tocantins, viabilizada pelas eclusas de Tucuruí, que permitem a navegação contornando a barragem.',

  corridas: [
    {
      nome: 'Meia Maratona de Tucuruí',
      descricao:
        'Corrida de rua já em diferentes edições, com largada na cidade e percursos pelas vias urbanas.',
    },
    {
      nome: 'Corrida Solidária do Lions Clube de Tucuruí',
      descricao:
        'Prova de rua e caminhada de cunho solidário organizada pelo Lions Clube local, parte do calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Há hábito de caminhada, corrida e ciclismo nas vias da Vila Permanente e na orla, nas horas mais frescas, com corridas de rua pontuais movimentando a comunidade ao longo do ano.',
  academias:
    'A oferta reúne academias e estúdios concentrados no centro e nos bairros residenciais, complementada pelas áreas abertas junto ao lago e ao rio.',

  destaquesFitness: [
    'Lago e orla do Tocantins como cenário para caminhada, corrida e ciclismo.',
    'Vila Permanente, com vias arborizadas e planejadas, favorável a treinos ao ar livre.',
    'Calendário com corridas de rua locais (Meia Maratona, prova do Lions Clube).',
    'Treinos em horários amenos pelo calor e pela umidade equatorial.',
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
    'Cidade da grande hidrelétrica no sudeste do Pará, Tucuruí tem no Lago de Tucuruí e na orla do Tocantins seus principais espaços ao ar livre. Um personal trainer ajuda a aproveitá-los com método, ajustando horários e hidratação ao clima quente e chuvoso da Amazônia.',

  vizinhas: ['maraba-pa', 'belem-pa', 'parauapebas-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Tucuruí', url: 'https://cidades.ibge.gov.br/brasil/pa/tucurui/panorama' },
    { nome: 'Prefeitura de Tucuruí', url: 'https://www.tucurui.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
