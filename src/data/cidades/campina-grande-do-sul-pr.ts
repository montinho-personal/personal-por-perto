import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campina-grande-do-sul-pr',
  nome: 'Campina Grande do Sul',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'campinense-do-sul',
  tipo: 'cidade',

  populacao: 47825,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 918,

  resumoEconomico:
    'Cidade da Região Metropolitana de Curitiba, no vetor nordeste da capital, Campina Grande do Sul fica no primeiro planalto paranaense, às margens da BR-116, o corredor do Mercosul. A economia combina indústria, comércio, serviços e logística regional: o município abriga o Centro Industrial de Campina Grande do Sul (CICAMP), com atividades nos ramos alimentício, metal-mecânico, de plásticos, tintas e moveleiro. A posição junto à BR-116, que liga Curitiba a São Paulo e ao restante do Sul, reforça a vocação logística e industrial da cidade.',

  mercado:
    'Integrada à economia metropolitana de Curitiba, Campina Grande do Sul tem um mercado fitness em formação, apoiado no crescimento populacional recente e na proximidade com polos maiores da região. A procura por personal trainers aparece principalmente entre moradores que treinam na própria cidade e em quem busca acompanhamento para atividades ao ar livre, aproveitando o relevo e as áreas naturais do entorno.',

  bairrosNobres: ['Centro', 'Jardim Paulista', 'Jardim Graciosa', 'Jardim Araçatuba'],
  bairrosPopulares: ['Eugênia Maria', 'Terra Boa', 'Jardim Santa Rosa', 'Recanto Verde'],

  parques: [
    {
      nome: 'Entorno do Pico Paraná e da Serra do Mar',
      descricao:
        'O município abriga o Pico Paraná, o ponto mais alto do Sul do Brasil, e faz parte da Serra do Mar. Trilhas e acessos às montanhas da região atraem praticantes de montanhismo e de trail, com percursos exigentes em meio à Mata Atlântica.',
    },
    {
      nome: 'Área de Proteção Ambiental do Iraí (APA do Iraí)',
      descricao:
        'Área de proteção que abrange Campina Grande do Sul e municípios vizinhos, ligada aos mananciais que abastecem a região metropolitana. O ambiente preservado do entorno serve de cenário para atividades ao ar livre respeitando as restrições ambientais.',
    },
    {
      nome: 'Áreas verdes e entorno rural',
      descricao:
        'Fora da malha urbana, estradas e áreas de campo do primeiro planalto oferecem percursos para caminhada, corrida e pedal, com o clima ameno e as paisagens de serra como pano de fundo.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do centro e nos acessos rurais, além de rotas que exploram o relevo em direção à serra.',

  clima:
    'O clima é subtropical úmido mesotérmico, ameno na maior parte do ano, com média anual em torno de 16 °C. O inverno é frio, típico do primeiro planalto paranaense e da altitude de cerca de 918 metros, com ocorrência de geadas severas e frequentes; o verão é mais quente e chuvoso, com índice pluviométrico elevado ao longo do ano.',
  climaTreino:
    'O frio de altitude pede aquecimento cuidadoso e roupas em camadas, sobretudo nas manhãs de inverno com geada. O clima ameno favorece o treino ao ar livre em boa parte do ano, com atenção às chuvas do verão e aos horários mais frios do começo do dia.',

  mobilidade:
    'A cidade se conecta a Curitiba e à Região Metropolitana principalmente pela BR-116, o corredor do Mercosul, que também liga o município ao estado de São Paulo e ao restante do Sul. O transporte urbano é feito por ônibus, com integração ao sistema metropolitano, e a rodovia concentra o fluxo de cargas e de deslocamento pendular dos moradores.',

  corridas: [
    {
      nome: 'Campina Big Run',
      descricao:
        'Corrida de rua realizada em Campina Grande do Sul, com percursos de cerca de 3 km, 5 km e 10 km, voltada ao incentivo à atividade física entre os moradores da cidade.',
    },
    {
      nome: 'Trail Run Brisa do Sol',
      descricao:
        'Prova de trail sediada em Campina Grande do Sul, que aproveita o relevo e as trilhas da região para desafiar corredores em percursos fora do asfalto.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva une o uso das vias urbanas para caminhada e corrida ao apelo das montanhas da Serra do Mar, com o Pico Paraná como referência para montanhismo e trail. O clima ameno e o relevo acidentado moldam a prática ao ar livre no município.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade metropolitana de médio-pequeno porte.',

  destaquesFitness: [
    'Abriga o Pico Paraná, ponto mais alto do Sul do Brasil, e faz parte da Serra do Mar.',
    'Clima frio de altitude (cerca de 918 m), com geadas frequentes no inverno.',
    'Vetor nordeste da Região Metropolitana de Curitiba, ligado pela BR-116.',
    'Economia industrial e logística, com o Centro Industrial (CICAMP) e mananciais da APA do Iraí.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade metropolitana de clima frio e cercada pelas montanhas da Serra do Mar, Campina Grande do Sul combina rotina urbana ligada à BR-116 com um entorno natural de serra e altitude. Um personal trainer ajuda a organizar o treino respeitando o frio do inverno, aproveitando o clima ameno para atividades ao ar livre e mantendo a constância ao longo do ano.',

  vizinhas: ['colombo-pr', 'pinhais-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Campina Grande do Sul', url: 'https://cidades.ibge.gov.br/brasil/pr/campina-grande-do-sul/panorama' },
    { nome: 'Prefeitura de Campina Grande do Sul', url: 'https://www.campinagrandedosul.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
