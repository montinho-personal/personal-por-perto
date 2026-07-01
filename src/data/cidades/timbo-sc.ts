import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'timbo-sc',
  nome: 'Timbó',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'timboense',
  tipo: 'cidade',

  populacao: 46099,
  populacaoAno: 2022,
  idhm: 0.784,
  idhmClasse: 'alto',
  altitudeM: 68,

  resumoEconomico:
    'No coração do Vale do Itajaí, Timbó nasceu da colonização alemã e italiana, no encontro dos rios Benedito e dos Cedros, e mantém um dos maiores IDHM de Santa Catarina. A economia é fortemente industrial, com destaque para a metalmecânica (máquinas e equipamentos, eletrodomésticos) e para o setor têxtil e de confecção (malhas), acompanhados por um comércio ativo. O turismo cresceu apoiado na herança germânica do Vale Europeu — gastronomia, arquitetura enxaimel e cultura da cerveja — e, sobretudo, no cicloturismo.',

  mercado:
    'Cidade pequena, próspera e com forte tradição ao ar livre, Timbó tem um mercado fitness que se beneficia da cultura do ciclismo e do uso intenso de parques e ciclovias. A procura por personal trainers aparece entre quem pratica pedal e corrida de rua, quem busca musculação em academias locais e quem quer treino orientado aproveitando a estrutura urbana de lazer da cidade.',

  bairrosNobres: ['Centro', 'Imigrantes', 'Das Nações', 'Dos Estados'],
  bairrosPopulares: ['Araponguinhas', 'Quintino', 'Das Capitais', 'São Roque'],

  parques: [
    {
      nome: 'Parque Central',
      descricao:
        'Inaugurado em 2012, é a principal área verde urbana de Timbó, com gramados, pista de caminhada e corrida, quadras (inclusive de areia), pista de skate, equipamentos de ginástica e playground — um dos pontos mais usados para treino ao ar livre.',
    },
    {
      nome: 'Parque Henry Paul',
      descricao:
        'Às margens do rio Benedito, o parque reúne área verde e acesso ao rio, com rampa para esportes náuticos e passeios de caiaque e stand up paddle — espaço de lazer e atividade física ligada à água.',
    },
    {
      nome: 'Complexo Turístico Jardim do Imigrante e entorno do rio Benedito',
      descricao:
        'A orla e os espaços culturais junto ao rio Benedito, no centro histórico de colonização alemã, formam um circuito agradável para caminhada e para quem gosta de treinar em ambiente arborizado.',
    },
  ],
  ciclovias:
    'Timbó é reconhecida como capital catarinense do cicloturismo e reúne cerca de 40 km de ciclovias e ciclofaixas que conectam pontos turísticos e áreas naturais. A cidade é ponto de partida e chegada do Circuito Vale Europeu, o que faz do pedal parte central da rotina de lazer e de treino local.',

  clima:
    'O clima é subtropical úmido, com chuvas bem distribuídas ao longo do ano e temperatura média anual em torno de 19 °C. O verão (dezembro a março) é quente e mais chuvoso, com janeiro entre os meses de maior precipitação, enquanto o inverno é mais frio e ameno, com o período de abril a agosto tendendo a ser menos chuvoso.',
  climaTreino:
    'As estações bem marcadas favorecem o treino ao ar livre boa parte do ano; no verão, o calor e a umidade pedem hidratação e horários mais frescos, enquanto o inverno frio exige aquecimento cuidadoso. A alta pluviosidade recomenda ter uma alternativa coberta para os dias de chuva.',

  mobilidade:
    'Timbó se conecta à região pela BR-470, principal eixo rodoviário do Vale do Itajaí, e por rodovias estaduais que a ligam a Indaial, Blumenau e Pomerode. O transporte urbano é feito por ônibus, e a forte estrutura cicloviária torna a bicicleta uma opção real de deslocamento e lazer dentro da cidade.',

  corridas: [
    {
      nome: 'Desafio 10 Milhas Morro Azul',
      descricao:
        'Prova de corrida de rua realizada em Timbó, com percurso que mobiliza vias da cidade e reforça a agenda de eventos esportivos de rua no calendário local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Timbó gira em torno do ciclismo — a cidade é referência em cicloturismo e cabeceira do Circuito Vale Europeu —, do uso do Parque Central e da orla do rio Benedito para caminhada e corrida, e de provas de rua que reúnem a comunidade.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo centro e pelos bairros residenciais, em porte compatível com uma cidade de médio-pequeno porte do Vale do Itajaí.',

  destaquesFitness: [
    'Capital catarinense do cicloturismo, com cerca de 40 km de ciclovias e cabeceira do Circuito Vale Europeu.',
    'Parque Central e orla do rio Benedito como espaços de caminhada, corrida e lazer ao ar livre.',
    'Clima subtropical com estações bem marcadas, favorável ao treino ao ar livre boa parte do ano.',
    'Um dos maiores IDHM de Santa Catarina, com economia industrial de metalmecânica e malhas.',
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
    'Com forte cultura ao ar livre, ciclovias por toda parte e parques bem cuidados às margens do rio Benedito, Timbó é uma cidade que convida ao movimento. Um personal trainer ajuda a transformar o gosto pelo pedal e pela caminhada em um treino estruturado, ajustando intensidade e horários às estações bem marcadas do Vale do Itajaí.',

  vizinhas: ['indaial-sc', 'blumenau-sc', 'pomerode-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Timbó', url: 'https://cidades.ibge.gov.br/brasil/sc/timbo/panorama' },
    { nome: 'Prefeitura de Timbó', url: 'https://www.timbo.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
