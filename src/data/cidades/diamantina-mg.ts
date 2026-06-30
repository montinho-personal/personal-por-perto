import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'diamantina-mg',
  nome: 'Diamantina',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'diamantinense',
  tipo: 'cidade',

  populacao: 47702,
  populacaoAno: 2022,
  idhm: 0.716,
  idhmClasse: 'alto',
  altitudeM: 1113,

  resumoEconomico:
    'Berço de Juscelino Kubitschek e cidade histórica tombada pela UNESCO como Patrimônio Mundial, Diamantina nasceu da mineração de diamantes no Vale do Jequitinhonha, encravada no alto da Serra do Espinhaço. Com a decadência da extração, a economia se reorganizou em torno do turismo histórico e cultural, do comércio e dos serviços, do setor público e, sobretudo, da UFVJM (Universidade Federal dos Vales do Jequitinhonha e Mucuri), que movimenta a cidade com estudantes, pesquisa e empregos. O artesanato do Vale e eventos como a Vesperata, concerto em que músicos tocam das sacadas dos casarões da Rua da Quitanda, reforçam a vocação turística.',

  mercado:
    'Cidade universitária e histórica de porte médio, Diamantina tem um mercado fitness ligado à rotina dos estudantes da UFVJM e dos moradores que aproveitam a serra para se exercitar. A procura por personal trainers costuma vir de quem treina ao ar livre nas ladeiras e trilhas do Espinhaço e de quem busca orientação para musculação e condicionamento em academias do Centro e dos bairros residenciais.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Cidade Nova', 'Bom Jardim'],
  bairrosPopulares: ['Rio Grande', 'Cazuza', 'Palha', 'Bom Jesus'],

  parques: [
    {
      nome: 'Parque Estadual do Biribiri',
      descricao:
        'Unidade de conservação a poucos quilômetros da cidade, com cachoeiras de águas cristalinas, como a da Sentinela, a vila histórica da antiga fábrica de tecidos e trilhas em meio à vegetação de altitude do Espinhaço — destino clássico para caminhada e trail.',
    },
    {
      nome: 'Caminho dos Escravos',
      descricao:
        'Antiga estrada calçada à mão no século XIX entre o Tijuco (atual Diamantina) e o Mendanha; o trecho preservado vira percurso de caminhada e trilha com mirante, muito usado por quem treina ao ar livre.',
    },
    {
      nome: 'Serra dos Cristais',
      descricao:
        'Conjunto de elevações no entorno do Centro Histórico, com pontos como o Cruzeiro Luminoso, que servem de cenário para corridas de trilha, caminhadas e treinos de subida.',
    },
  ],
  ciclovias:
    'O relevo acidentado e o casario histórico de ruas em paralelepípedo limitam a estrutura cicloviária; o pedal e a corrida acontecem mais nas vias da parte mais plana da cidade e nas estradas de acesso à serra e ao Biribiri.',

  clima:
    'Diamantina tem clima tropical de altitude (Cwb), suavizado pelos cerca de 1.100 metros acima do nível do mar. Os verões são amenos e chuvosos (de novembro a janeiro concentra-se a maior parte das chuvas) e os invernos são secos, com dias agradáveis e noites frias — nas madrugadas mais rigorosas, as temperaturas podem chegar perto de poucos graus. É reconhecida por estar entre as cidades de clima mais ameno de Minas.',
  climaTreino:
    'A altitude torna o clima favorável ao treino ao ar livre na maior parte do ano, com calor raramente excessivo. No inverno seco, vale aquecer bem por causa do frio matinal; no verão chuvoso, convém planejar os horários para escapar das pancadas de chuva, e a baixa umidade do período seco pede atenção à hidratação.',

  mobilidade:
    'O principal acesso rodoviário é a BR-367, que liga Diamantina a Curvelo e à BR-040 rumo a Belo Horizonte, cerca de 290 km ao sul. Dentro da cidade, o relevo de serra e as ladeiras de pedra do conjunto histórico tombado marcam o deslocamento, feito por ônibus urbano e a pé, com circulação de carros restrita em parte do centro.',

  corridas: [
    {
      nome: 'Espinhaço Xtreme — Etapa Diamantina',
      descricao:
        'Evento de trail run sediado em Diamantina, com percursos que vão de distâncias curtas a ultras, largando no Centro Histórico e seguindo pelas trilhas da Serra dos Cristais e do Espinhaço.',
    },
    {
      nome: 'Trail Run Espinhaço Extremo',
      descricao:
        'Prova de corrida de montanha na região de Diamantina, com trajetos técnicos pelas serras do entorno, voltada a corredores que buscam desafio em meio à natureza.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente marcada pelo trail run e pelo montanhismo na Serra do Espinhaço, somados às caminhadas em trilhas históricas como o Caminho dos Escravos e ao uso das ladeiras da cidade para treino de subida. A vida universitária da UFVJM e a agenda cultural, da Vesperata aos festivais, dão o tom da rotina ativa local.',
  academias:
    'A oferta reúne academias de musculação e treino funcional no Centro e nos bairros residenciais, em escala compatível com uma cidade histórica e universitária de médio porte do interior mineiro.',

  destaquesFitness: [
    'Centro Histórico tombado pela UNESCO, berço de JK, encravado na Serra do Espinhaço.',
    'Trail run e montanhismo fortes, com provas como o Espinhaço Xtreme partindo da cidade.',
    'Clima de altitude ameno, favorável ao treino ao ar livre na maior parte do ano.',
    'Parque Estadual do Biribiri e Caminho dos Escravos como cenários de trilha e caminhada.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Histórica, universitária e cercada pelas serras do Espinhaço, Diamantina une um clima de altitude convidativo a um cenário natural ideal para o treino ao ar livre. Um personal trainer ajuda a aproveitar as trilhas, ladeiras e parques da região com segurança, ajustando a rotina ao relevo, ao clima seco do inverno e às chuvas do verão para manter a constância o ano todo.',

  vizinhas: ['curvelo-mg', 'montes-claros-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Diamantina', url: 'https://cidades.ibge.gov.br/brasil/mg/diamantina/panorama' },
    { nome: 'Prefeitura de Diamantina', url: 'https://www.diamantina.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
