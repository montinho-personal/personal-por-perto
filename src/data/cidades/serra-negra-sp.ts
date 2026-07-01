import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'serra-negra-sp',
  nome: 'Serra Negra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'serra-negrense',
  tipo: 'cidade',

  populacao: 29894,
  populacaoAno: 2022,
  idhm: 0.767,
  idhmClasse: 'alto',
  altitudeM: 927,

  resumoEconomico:
    'Estância turística hidromineral do Circuito das Águas Paulista, encravada numa ramificação da Serra da Mantiqueira, Serra Negra tem a economia fortemente ligada ao turismo. A cidade é conhecida como a "Cidade das Malhas", com centenas de lojas e confecções de tricô herdadas da imigração italiana, e vive das fontes de água mineral, do turismo de saúde e de descanso, da hotelaria e do comércio voltado ao visitante. O teleférico até o alto da serra e o clima ameno de altitude são atrativos de longa data que sustentam o fluxo de turistas o ano inteiro.',

  mercado:
    'Por ser uma cidade pequena e de perfil turístico, o mercado fitness de Serra Negra é enxuto e gira em torno de academias locais e do público que combina descanso com atividade ao ar livre. A procura por personal trainers aparece tanto entre moradores quanto entre visitantes e proprietários de casas de veraneio que querem aproveitar o clima ameno e o relevo de serra para treinar, além de quem trabalha na hotelaria e no comércio e busca orientação para manter a rotina.',

  bairrosNobres: ['Centro', 'Alto da Serra', 'Jardim Belvedere', 'Belvedere do Lago'],
  bairrosPopulares: ['Três Barras', 'Colinas de Serra Negra', 'Bosque dos Arapongas', 'Nossa Senhora do Rosário'],

  parques: [
    {
      nome: 'Alto da Serra e Pico da Fonseca',
      descricao:
        'Ponto mais alto e cartão-postal da cidade, acessível pelo teleférico ou por estrada; o mirante e as ruas em aclive do alto reúnem vista panorâmica e servem de percurso para quem treina em subidas.',
    },
    {
      nome: 'Praça Sesquicentenário e Centro',
      descricao:
        'Área central junto à estação do teleférico e ao comércio de malhas, com calçadões e praças usados para caminhada e como ponto de partida de trajetos a pé pela cidade.',
    },
    {
      nome: 'Fontes de água mineral e balneários',
      descricao:
        'As fontes hidrominerais que dão fama à estância ficam em áreas ajardinadas e arborizadas, boas para caminhada leve e atividade ao ar livre em ritmo tranquilo.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, própria de uma cidade pequena de serra; o pedal e a corrida acontecem principalmente nas ruas do Centro e nas estradas rurais em aclive que ligam os bairros altos, exigindo atenção ao relevo.',

  clima:
    'O clima é tropical de altitude, suavizado pelos cerca de 927 metros da cidade, com temperaturas amenas o ano todo — verões mais brandos que os das cidades vizinhas de menor altitude e invernos frios, com mínimas que podem chegar a poucos graus. A umidade e o ar puro da serra fazem parte da vocação da estância hidromineral.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre em quase todos os horários, mas o relevo de serra torna qualquer percurso mais exigente pelas subidas. No inverno vale aquecer bem antes de sair, e nos dias mais frios e úmidos convém agasalho leve; o calor raramente é um limitador como em cidades quentes.',

  mobilidade:
    'Serra Negra fica a cerca de 150 km da capital e se conecta ao Circuito das Águas Paulista principalmente pela SP-105 (Rodovia Antônio Bonfim Lopes), além de ligações a Amparo, Lindóia e Águas de Lindóia. O deslocamento interno é feito por carro e por linhas de ônibus, e o relevo acidentado marca boa parte dos trajetos urbanos.',

  corridas: [
    {
      nome: 'Corrida e Caminhada de Serra Negra',
      descricao:
        'Prova de rua realizada na cidade que reúne moradores e visitantes em percurso pelo relevo de serra, reforçando a vocação da estância para atividades ao ar livre.',
    },
    {
      nome: 'Etapas de trail run na região',
      descricao:
        'A cidade recebe etapas de corridas de montanha e trail run que exploram as trilhas e subidas da Serra da Mantiqueira no entorno, atraindo corredores em busca de percursos técnicos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura caminhada e corrida aproveitando o clima ameno, o trail run pelas trilhas da serra e o uso do Centro e das fontes para atividade leve. O turismo de saúde e de descanso convive com um público crescente que busca movimento em meio à natureza de altitude.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, em porte compatível com uma cidade pequena de perfil turístico.',

  destaquesFitness: [
    'Estância hidromineral do Circuito das Águas Paulista, com clima ameno de altitude o ano todo.',
    'Relevo de serra e o Alto da Serra / Pico da Fonseca como cenário de treino em subidas e trail run.',
    'Cidade das Malhas: economia voltada ao turismo, ao tricô e às fontes de água mineral.',
    'Trilhas da Serra da Mantiqueira no entorno, que atraem corridas de montanha e atividade ao ar livre.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade pequena de serra, com clima ameno e forte vocação turística, Serra Negra convida a treinar ao ar livre aproveitando o relevo e o ar puro de altitude. Um personal trainer ajuda a adaptar o treino às subidas características da cidade, a organizar a rotina entre trabalho e descanso e a manter a constância aproveitando trilhas, praças e o entorno da Serra da Mantiqueira.',

  vizinhas: ['jaguariuna-sp', 'braganca-paulista-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Serra Negra', url: 'https://cidades.ibge.gov.br/brasil/sp/serra-negra/panorama' },
    { nome: 'Prefeitura de Serra Negra', url: 'https://www.serranegra.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
