import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'arcos-mg',
  nome: 'Arcos',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'arcoense',
  tipo: 'cidade',

  populacao: 41417,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 740,

  resumoEconomico:
    'No Centro-Oeste de Minas, na região do Alto São Francisco, Arcos é conhecida como Capital do Calcário por concentrar uma das maiores e melhores reservas do mineral no país. A economia é fortemente industrial e mineral: extração de calcário, fabricação de cimento e cal, insumos para siderurgia, correção de solo para a agricultura e construção civil, além de agropecuária no entorno. A indústria responde por parcela expressiva do valor adicionado do município, que figura entre os maiores PIBs do estado.',

  mercado:
    'Como cidade média do interior mineiro com forte base industrial, Arcos tem um mercado fitness concentrado em academias de musculação e treino funcional e em profissionais que atendem tanto trabalhadores do setor cimenteiro e mineral quanto o público de bairros residenciais. A procura por personal trainers tende a crescer entre quem busca acompanhamento para saúde, condicionamento e conciliação do treino com jornadas de trabalho na indústria.',

  bairrosNobres: ['Centro', 'Niterói', 'Jardim Bela Vista', 'Vila Boa Vista'],
  bairrosPopulares: ['Santo Antônio', 'Sol Nascente', 'Nossa Senhora Aparecida', 'Brasília'],

  parques: [
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'A área central concentra praças e ruas usadas para caminhada e corrida no início do dia e no fim da tarde, ponto de encontro de quem treina ao ar livre na cidade.',
    },
    {
      nome: 'Entorno do rio São Miguel',
      descricao:
        'O rio São Miguel corta a região de Arcos e Pains e drena um terreno cárstico de calcários e dolomitos do Grupo Bambuí; o entorno rural e as estradas próximas servem de percurso para pedal e corrida.',
    },
    {
      nome: 'Região cárstica e grutas',
      descricao:
        'Arcos integra circuitos de grutas e paisagens cársticas do Alto São Francisco, com cavernas, paredões e trilhas que atraem o turismo de aventura e opções de atividade em meio à natureza.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta, típica de cidade média do interior; boa parte do pedal e da corrida acontece nas vias urbanas, nas praças centrais e em estradas vicinais do entorno rural.',

  clima:
    'O clima é tropical de altitude (Cwa na classificação de Köppen), com inverno seco e ameno e verão quente e chuvoso, em bioma de transição entre Cerrado e Mata Atlântica. A cerca de 740 m de altitude, as noites de inverno são mais frescas e a estação chuvosa se concentra entre outubro e março.',
  climaTreino:
    'O verão quente e úmido pede treino cedo ou no fim da tarde, com boa hidratação; o inverno seco costuma ser o período mais confortável para atividade ao ar livre, com atenção ao ar mais seco e à poeira em dias sem chuva.',

  mobilidade:
    'Arcos se conecta pela MG-170, que liga a cidade a Formiga e à região, com acesso ao restante do Centro-Oeste mineiro e a Divinópolis. O transporte urbano é feito por ônibus municipais, e a logística da indústria de cimento e calcário movimenta intenso tráfego de cargas nas rodovias que servem o município.',

  corridas: [
    {
      nome: 'Corrida de Rua Sicoob Arcomcredi',
      descricao:
        'Prova de rua realizada em Arcos com percursos de 5 km e 10 km, reunindo corredores da cidade e da região do Alto São Francisco.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e vias centrais para caminhada e corrida, provas de rua locais e o turismo de aventura ligado às grutas e ao relevo cárstico da região, num ritmo próprio de cidade industrial do interior.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Capital do Calcário: forte base industrial de cimento, cal e mineração no Centro-Oeste de Minas.',
    'Relevo cárstico do Alto São Francisco, com grutas e trilhas que favorecem o turismo de aventura.',
    'Clima tropical de altitude, com inverno seco e ameno propício ao treino ao ar livre.',
    'Provas de rua locais e praças centrais como espaço de caminhada e corrida.',
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
    'Cidade industrial e mineral cercada por um relevo cárstico marcante, Arcos oferece praças urbanas e natureza no Alto São Francisco para quem quer treinar. Um personal trainer ajuda a organizar a rotina conciliando o treino com a jornada de trabalho, aproveitando o inverno seco ao ar livre e mantendo a constância ao longo do ano.',

  vizinhas: ['formiga-mg', 'divinopolis-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Arcos', url: 'https://cidades.ibge.gov.br/brasil/mg/arcos/panorama' },
    { nome: 'Prefeitura de Arcos', url: 'https://www.arcos.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
