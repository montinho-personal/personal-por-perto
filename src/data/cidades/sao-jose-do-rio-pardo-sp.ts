import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-do-rio-pardo-sp',
  nome: 'São José do Rio Pardo',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'rio-pardense',
  tipo: 'cidade',

  populacao: 52204,
  populacaoAno: 2022,
  idhm: 0.770,
  idhmClasse: 'alto',
  altitudeM: 676,

  resumoEconomico:
    'No nordeste paulista, às margens do rio Pardo, São José do Rio Pardo nasceu da economia cafeeira do século XIX — o "ouro verde" que sustentou as fazendas da região e atraiu a mão de obra imigrante, sobretudo italiana. Hoje a economia combina a tradição agrícola (com destaque para o café), a indústria de cerâmica vermelha (telhas e tijolos) e um comércio e serviços que atendem a microrregião. A cidade é marcada pela memória de Euclides da Cunha, que viveu ali entre 1898 e 1901 e escreveu boa parte de "Os Sertões" na célebre Casa de Zinco, à beira do rio.',

  mercado:
    'Cidade média do interior paulista, São José do Rio Pardo tem um mercado fitness proporcional ao seu porte, formado por academias de bairro, estúdios de treino funcional e profissionais autônomos. A procura por personal trainers cresce entre quem busca acompanhamento individualizado e aproveita a orla do rio Pardo e as praças como espaço para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Promeca', 'Vila Santa Cruz', 'Jardim Pádua'],
  bairrosPopulares: ['Vila Esperança', 'Jardim Boa Vista', 'Jardim Bandeirantes', 'Cohab'],

  parques: [
    {
      nome: 'Ilha São Pedro (Parque Municipal Vereador Antônio de Pádua Nunes)',
      descricao:
        'Parque urbano numa ilha do rio Pardo, acessado por ponte pênsil e conhecido pelo minizoológico municipal mantido desde 1978. O espaço arborizado é um dos lugares preferidos das famílias rio-pardenses para passeio e caminhada nos fins de semana.',
    },
    {
      nome: 'Casa de Zinco e Ponte Euclides da Cunha',
      descricao:
        'Conjunto histórico à beira do rio Pardo, onde Euclides da Cunha trabalhou na ponte e escreveu parte de "Os Sertões". A casa de zinco é hoje protegida por uma redoma de vidro, e o entorno arborizado junto ao rio serve de percurso para caminhada e corrida leve.',
    },
    {
      nome: 'Cascata',
      descricao:
        'Queda d’água em meio à natureza nos arredores da cidade, ponto tradicional de contemplação e lazer ao ar livre da população rio-pardense.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta, típica de uma cidade média do interior; boa parte do pedal e da corrida acontece nas vias urbanas mais tranquilas, nas praças e ao longo da orla do rio Pardo.',

  clima:
    'O clima é tropical de altitude, influenciado pelos cerca de 676 metros de altitude e pela transição entre cerrado e mata estacional da região. O verão é quente e chuvoso (de outubro a março) e o inverno é mais seco e ameno, com noites frescas e amplitude térmica acentuada entre o dia e a noite.',
  climaTreino:
    'O inverno seco e de temperaturas amenas favorece o treino ao ar livre ao longo de quase todo o dia. No verão, o calor e as chuvas de fim de tarde pedem atenção ao horário e à hidratação — manhãs e fins de tarde costumam ser os períodos mais confortáveis.',

  mobilidade:
    'São José do Rio Pardo é servida pelas rodovias SP-350 (Rodovia Euclides da Cunha) e SP-207, que a conectam às cidades vizinhas do nordeste paulista e ao restante do estado. O deslocamento interno é predominantemente por automóvel e ônibus, com distâncias curtas próprias de uma cidade compacta.',

  corridas: [
    {
      nome: 'Circuito CPFL Energia — São José do Rio Pardo',
      descricao:
        'Etapa de corrida e caminhada de rua (percursos de 5 km e 10 km) realizada na cidade, voltada ao incentivo da atividade física e da qualidade de vida.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças e da orla do rio Pardo para caminhada e corrida, a tradição do futebol local e provas de corrida de rua que mobilizam grupos de corredores da cidade e da região.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional, estúdios menores e profissionais autônomos, distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior paulista.',

  destaquesFitness: [
    'Cidade da memória de Euclides da Cunha, com a Casa de Zinco e a orla do rio Pardo como cenário para atividade ao ar livre.',
    'Ilha São Pedro, parque urbano arborizado acessado por ponte pênsil, usado para passeio e caminhada.',
    'Clima tropical de altitude, com inverno seco e ameno favorável ao treino ao ar livre.',
    'Economia ligada ao café e à cerâmica vermelha, em uma cidade média do nordeste paulista.',
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
    'Cidade tranquila do nordeste paulista, marcada pela história de Euclides da Cunha e pelo rio Pardo, São José do Rio Pardo oferece praças, ilha urbana e clima de altitude que convidam ao treino ao ar livre. Um personal trainer ajuda a organizar a rotina, aproveitar esses espaços e manter a constância ao longo das estações.',

  vizinhas: ['sao-joao-da-boa-vista-sp', 'mococa-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São José do Rio Pardo', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-jose-do-rio-pardo/panorama' },
    { nome: 'Prefeitura de São José do Rio Pardo', url: 'https://saojosedoriopardo.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
