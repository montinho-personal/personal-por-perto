import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cataguases-mg',
  nome: 'Cataguases',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'cataguasense',
  tipo: 'cidade',

  populacao: 66261,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',
  altitudeM: 180,

  resumoEconomico:
    'Na Zona da Mata mineira, às margens do rio Pomba, Cataguases é um polo industrial e cultural do interior de Minas. A economia tem forte tradição têxtil — a cidade é histórica na fabricação de tecidos de algodão e viscose — somada à energia (foi ali que nasceu, em 1905, a companhia que deu origem ao grupo Energisa) e a segmentos de metalurgia, confecção, comércio e serviços. O turismo cultural cresce puxado pelo conjunto de arquitetura e arte modernista, um dos mais notáveis do país.',

  mercado:
    'Como cidade média do interior mineiro, Cataguases tem um mercado fitness enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers aparece entre quem busca acompanhamento individualizado, treino de corrida aproveitando as margens do rio Pomba e orientação para manter a rotina apesar do clima quente e das enchentes sazonais do rio.',

  bairrosNobres: ['Centro', 'Granjaria', 'Vila Teresa', 'Paraíso'],
  bairrosPopulares: ['Beira Rio', 'Vila Reis', 'Aeroporto', 'Santa Clara'],

  parques: [
    {
      nome: 'Margens do rio Pomba',
      descricao:
        'O rio Pomba corta a cidade e suas margens e avenidas beira-rio são o espaço mais usado para caminhada e corrida ao ar livre — trecho que também concentra o casario e o patrimônio histórico do centro.',
    },
    {
      nome: 'Conjunto modernista do centro',
      descricao:
        'Cataguases é referência nacional em arquitetura e arte modernista, com obras assinadas por nomes como Oscar Niemeyer, Burle Marx, Portinari e Paulo Werneck; percorrer o circuito de prédios e praças históricas rende caminhadas urbanas com forte apelo cultural.',
    },
    {
      nome: 'Colégio Estadual Manoel Inácio Peixoto',
      descricao:
        'Escola projetada por Oscar Niemeyer com paisagismo de Burle Marx e obras de artistas modernistas; o entorno e as áreas verdes do conjunto são pontos de referência da cidade para quem circula a pé.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas beira-rio e nas ruas do centro e dos bairros residenciais.',

  clima:
    'O clima é tropical (tipo Aw na classificação de Köppen), com temperaturas elevadas ao longo do ano, verão quente e chuvoso (de setembro a maio, aproximadamente) e inverno mais seco. Por estar em vale às margens do rio Pomba, a cidade convive com enchentes recorrentes no período chuvoso, quando o rio pode transbordar sobre ruas e avenidas centrais.',
  climaTreino:
    'O calor pede treinar cedo pela manhã ou no fim da tarde, com boa hidratação; no período chuvoso, quando o rio Pomba sobe, é prudente ter alternativas cobertas ou em ambiente fechado, e o inverno mais seco tende a ser a época mais confortável para o treino ao ar livre.',

  mobilidade:
    'Cataguases se conecta à região por rodovias como a BR-120 e a BR-116 (Rio-Bahia), articulando o município com cidades vizinhas da Zona da Mata e com os eixos para Rio de Janeiro e o restante de Minas. O transporte urbano é feito por ônibus, e a cidade tem histórica ligação ferroviária ligada à sua formação industrial.',

  corridas: [
    {
      nome: 'KTA Trail Run',
      descricao:
        'Prova de trail run realizada em Cataguases, voltada a corredores que buscam percursos em meio à natureza da Zona da Mata mineira.',
    },
    {
      nome: 'Corridas de rua na Zona da Mata',
      descricao:
        'A cidade participa do calendário regional de corridas de rua da Zona da Mata, com provas que também acontecem em municípios próximos como Muriaé e Ubá.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das margens do rio Pomba para caminhada e corrida, a tradição do futebol amador e a agenda de corridas de rua e trail da região, tudo em uma cidade marcada pela vida cultural e pelo patrimônio modernista.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Cidade às margens do rio Pomba, com avenidas beira-rio usadas para caminhada e corrida.',
    'Referência nacional em arquitetura e arte modernista, com circuito cultural que rende caminhadas urbanas.',
    'Clima tropical quente, que pede planejamento de horário e hidratação no treino.',
    'Polo industrial da Zona da Mata mineira, com tradição têxtil e origem do setor de energia da região.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade cultural e industrial da Zona da Mata, cortada pelo rio Pomba, Cataguases pede um treino adaptado ao clima quente e às cheias sazonais, aproveitando as margens do rio e o circuito histórico para atividade ao ar livre. Um personal trainer ajuda a montar uma rotina consistente, escolher os melhores horários e manter a constância ao longo do ano.',

  vizinhas: ['muriae-mg', 'uba-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Cataguases', url: 'https://cidades.ibge.gov.br/brasil/mg/cataguases/panorama' },
    { nome: 'Atlas Brasil — IDHM Cataguases', url: 'https://www.atlasbrasil.org.br/perfil/municipio/311530' },
    { nome: 'IPHAN — Cataguases (patrimônio modernista)', url: 'http://portal.iphan.gov.br/pagina/detalhes/1289' },
  ],
  atualizadoEm: '2026-06-29',
};
