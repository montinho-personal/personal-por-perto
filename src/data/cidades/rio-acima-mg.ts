import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-acima-mg',
  nome: 'Rio Acima',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'rio-acimense',
  tipo: 'cidade',

  populacao: 10365,
  populacaoAno: 2022,
  idhm: 0.673,
  idhmClasse: 'médio',
  altitudeM: 753,

  resumoEconomico:
    'No vetor sul da Região Metropolitana de Belo Horizonte, Rio Acima fica às margens do rio das Velhas, cujas cabeceiras drenam a região, no encontro da Serra da Moeda com a Serra do Gandarela. É uma cidade pequena, com pouco mais de 10 mil habitantes, cuja economia é fortemente ligada à indústria e à mineração de ferro, que respondem pela maior parte do valor adicionado do município. Ao mesmo tempo, com grande parte do território em área de proteção ambiental, cachoeiras e nascentes, cresce a vocação para o turismo de natureza e o ecoturismo, que aproximam a cidade dos moradores de BH em busca de trilhas e ar livre.',

  mercado:
    'Por integrar a Região Metropolitana de Belo Horizonte, Rio Acima sofre influência do mercado fitness da capital, mas mantém o perfil de cidade pequena, com academias locais e forte presença de atividades ao ar livre. A procura por personal trainers tende a crescer entre moradores e entre quem tem casa de campo na região, muitas vezes voltada a treino funcional, corrida em trilha e preparo para as subidas das serras do entorno.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Nossa Senhora do Carmo', 'Loteamentos da serra'],
  bairrosPopulares: ['Barra do Cônego', 'Marzagão', 'Água Limpa', 'São José'],

  parques: [
    {
      nome: 'Parque Nacional da Serra do Gandarela',
      descricao:
        'Unidade de conservação federal com sede em Rio Acima, marcada por dezenas de cachoeiras, nascentes e campos de altitude; suas trilhas e quedas d’água atraem caminhantes e corredores de trilha em contato direto com a natureza.',
    },
    {
      nome: 'Serra da Moeda e Calçada da Estrada Real',
      descricao:
        'Aos pés da Serra da Moeda, a região guarda trechos centenários de calçamento de pedra da Estrada Real, ligados ao Caminho Sabarabuçu; percursos de subida usados para caminhada, ciclismo e treino ao ar livre com vista das montanhas.',
    },
    {
      nome: 'Margens do rio das Velhas',
      descricao:
        'A cidade nasceu junto ao rio das Velhas, na bacia do São Francisco; as margens e as estradas rurais em direção a Marzagão são usadas para pedal, caminhada e cicloturismo em meio a cachoeiras e paisagens de serra.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta, mas a região é procurada para ciclismo e mountain bike, com destaque para as estradas rurais que acompanham o rio das Velhas rumo a Marzagão e para as subidas das serras da Moeda e do Gandarela.',

  clima:
    'O clima é tropical de altitude, com verões chuvosos e invernos secos e mais amenos. A altitude da sede (em torno de 750 m) e das serras próximas favorece temperaturas agradáveis boa parte do ano, com manhãs frias no inverno, tardes amenas e chuvas concentradas entre novembro e março.',
  climaTreino:
    'As temperaturas amenas e o relevo de serra tornam a região convidativa para treino ao ar livre, sobretudo no período seco (abril a setembro). No verão chuvoso, convém atenção à umidade e aos trechos escorregadios nas trilhas, e as subidas das serras pedem progressão de carga para quem está começando.',

  mobilidade:
    'A principal ligação da cidade é a rodovia MG-030, que conecta Rio Acima a Nova Lima, a Raposos e a Belo Horizonte, com projeto de duplicação para melhorar a mobilidade no vetor sul da Região Metropolitana. O acesso aos distritos e aos pontos de natureza se dá por estradas vicinais, e o transporte urbano é feito por ônibus, com fluxo de visitantes nos fins de semana.',

  corridas: [
    {
      nome: 'Circuito Gandarela',
      descricao:
        'Iniciativa ligada ao entorno do Parque Nacional da Serra do Gandarela, com atividades e percursos de caminhada e corrida em trilha na região de Rio Acima, valorizando as cachoeiras e os campos de altitude.',
    },
    {
      nome: 'Provas de trail run da região metropolitana',
      descricao:
        'A proximidade com Belo Horizonte e com as serras da Moeda e do Gandarela coloca Rio Acima na rota de corredores de trilha que buscam percursos técnicos e naturais no vetor sul da capital.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Rio Acima é fortemente ligada à natureza: corrida em trilha, ciclismo nas serras, caminhadas em cachoeiras e nas nascentes do rio das Velhas. A proximidade com Belo Horizonte também aproxima a cidade do calendário de provas e da rotina de treino da capital.',
  academias:
    'A oferta é composta principalmente por academias locais de musculação e treino funcional, concentradas na área central, complementadas por estúdios menores e por profissionais que atendem em condomínios e ao ar livre nas regiões de serra.',

  destaquesFitness: [
    'Parque Nacional da Serra do Gandarela, com sede na cidade, e dezenas de cachoeiras e trilhas para treino de natureza.',
    'Serra da Moeda e trechos da Estrada Real, com subidas exigentes para corrida, caminhada e ciclismo.',
    'Nascentes e margens do rio das Velhas, ideais para pedal e cicloturismo em direção a Marzagão.',
    'Cidade do vetor sul da RM de Belo Horizonte, com clima tropical de altitude e forte vocação para esportes ao ar livre.',
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
    'Cidade de serra e de águas no vetor sul da Região Metropolitana de Belo Horizonte, Rio Acima reúne clima ameno, cachoeiras e trilhas que convidam ao movimento. Um personal trainer ajuda a aproveitar esse cenário com segurança, montando uma rotina que respeita o relevo, prepara o corpo para as subidas das serras e mantém a constância ao longo do ano.',

  vizinhas: ['nova-lima-mg', 'sabara-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Acima', url: 'https://cidades.ibge.gov.br/brasil/mg/rio-acima/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Rio Acima', url: 'https://www.prefeiturarioacima.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
