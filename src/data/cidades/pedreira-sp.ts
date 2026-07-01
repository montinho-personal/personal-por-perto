import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pedreira-sp',
  nome: 'Pedreira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'pedreirense',
  tipo: 'cidade',

  populacao: 43110,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  altitudeM: 590,

  resumoEconomico:
    'Conhecida como a Capital Nacional da Porcelana, Pedreira construiu sua identidade em torno da produção de porcelana, cerâmica e artigos de decoração, atividade herdada da imigração italiana e consolidada desde o início do século XX. Fábricas e centenas de lojas transformaram a cidade em um polo de turismo de compras, com movimento intenso de visitantes que chegam pela Região Metropolitana de Campinas e pelo Circuito das Águas Paulista. O comércio de louças e artesanato, a gastronomia e o turismo respondem por boa parte da economia local.',

  mercado:
    'Cidade de porte pequeno no interior paulista, Pedreira tem um mercado fitness enxuto, formado por academias de bairro e estúdios de treino ligados ao dia a dia da comunidade e ao fluxo de moradores da região. A procura por personal trainers tende a vir de quem busca acompanhamento individual para aproveitar o relevo de morros e a orla do rio Jaguari, além do público que combina rotina de saúde com a vida tranquila de uma cidade turística.',

  bairrosNobres: ['Centro', 'Jardim Marajoara', 'Vila Monte Alegre', 'Jardim Andrade'],
  bairrosPopulares: ['Nova Pedreira', 'Vila Girio', 'São José', 'Jardim Bela Vista'],

  parques: [
    {
      nome: 'Orla do Rio Jaguari',
      descricao:
        'O rio Jaguari corta a cidade e é um dos cartões-postais de Pedreira; os trechos de margem urbanizada e as vias próximas servem de percurso para caminhada e corrida, com vista para os morros que cercam o vale.',
    },
    {
      nome: 'Morro do Cristo',
      descricao:
        'Ponto elevado com vista panorâmica da cidade e do rio Jaguari, ligado ao centro por teleférico; as ladeiras de acesso são usadas por quem treina subidas ao ar livre.',
    },
    {
      nome: 'Praças e centro histórico',
      descricao:
        'O centro e as praças arborizadas concentram calçadões e vias planas usados para caminhada leve, em meio ao casario ligado à história da porcelana e à imigração italiana.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e restrita a alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do centro, na orla do rio Jaguari e nas estradas vicinais que ligam Pedreira às cidades vizinhas.',

  clima:
    'O clima é tropical de altitude, ameno para os padrões do interior paulista, com verões quentes e chuvosos (de outubro a março) e invernos mais secos e frescos, quando as noites e madrugadas podem ficar frias. A altitude em torno de 590 metros e os morros ao redor ajudam a suavizar as temperaturas em boa parte do ano.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano; no verão vale priorizar o começo da manhã ou o fim da tarde para fugir do calor e das chuvas, enquanto o inverno seco e fresco é convidativo para caminhada, corrida e subidas nos morros.',

  mobilidade:
    'A principal via de acesso é a SP-095 (Rodovia João Beira), que corta a cidade e a conecta a Jaguariúna e ao entroncamento com a Rodovia Dom Pedro I, além de ligar Pedreira a Amparo e ao restante do Circuito das Águas Paulista. Dentro da cidade, o trecho urbano da rodovia funciona como corredor comercial das lojas de porcelana; o deslocamento é feito principalmente por carro, com transporte por ônibus municipal e intermunicipal.',

  corridas: [
    {
      nome: 'Circuito Cidades Paulistas — Etapa Pedreira',
      descricao:
        'Etapa pedreirense de um circuito estadual de corrida de rua, com provas de 5 km e 10 km em percurso urbano, reunindo corredores da cidade e da região metropolitana de Campinas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso da orla do rio Jaguari e das praças do centro para caminhada e corrida, o desafio das subidas nos morros que cercam a cidade e provas de rua ligadas a circuitos regionais, tudo em um ambiente de cidade turística e de clima ameno.',
  academias:
    'A oferta é formada sobretudo por academias de musculação e estúdios de treino funcional distribuídos pelo centro e pelos bairros residenciais, com porte compatível com uma cidade pequena do interior paulista.',

  destaquesFitness: [
    'Capital Nacional da Porcelana, com forte vocação para o turismo de compras.',
    'Orla do rio Jaguari e morros do entorno como espaços para caminhada, corrida e treino de subidas.',
    'Clima tropical de altitude, ameno e favorável ao treino ao ar livre boa parte do ano.',
    'Integração à Região Metropolitana de Campinas e ao Circuito das Águas Paulista pela SP-095.',
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
    'Cidade pequena, turística e de clima ameno, Pedreira reúne a orla do rio Jaguari, os morros do entorno e as praças do centro como cenário para o treino ao ar livre. Um personal trainer ajuda a montar uma rotina que aproveite esse relevo e o clima favorável, ajustando horários ao verão chuvoso e mantendo a constância ao longo do ano.',

  vizinhas: ['jaguariuna-sp', 'campinas-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Pedreira', url: 'https://cidades.ibge.gov.br/brasil/sp/pedreira/panorama' },
    { nome: 'Prefeitura de Pedreira', url: 'https://pedreira.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
