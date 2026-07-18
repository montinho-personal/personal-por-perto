import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ferraz-de-vasconcelos-sp',
  nome: 'Ferraz de Vasconcelos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ferrazense',
  tipo: 'cidade',

  populacao: 179198,
  populacaoAno: 2022,
  idhm: 0.738,
  idhmClasse: 'alto',
  altitudeM: 762,

  resumoEconomico:
    'Município da região do Alto Tietê, na porção leste da Região Metropolitana de São Paulo, Ferraz de Vasconcelos surgiu em torno da estação ferroviária aberta no fim do século XIX e cresceu como cidade-dormitório fortemente conectada à capital. A economia é movida por comércio, serviços e indústria de pequeno e médio porte, com grande parte da população deslocando-se diariamente para trabalhar em São Paulo e nas cidades vizinhas do Alto Tietê.',

  mercado:
    'O mercado fitness de Ferraz de Vasconcelos é o retrato da cidade-dormitório: a demanda se organiza em volta da estação central da Linha 11-Coral e dos horários de quem trabalha na capital. As academias de rede de baixo custo se instalaram justamente nesse fluxo — há unidades na Avenida Brasil, no Cidade Kemel e perto da região da estação —, disputando espaço com as academias de bairro que seguram o público dos distritos. Para o personal, os formatos que mais rendem são as sessões cedo da manhã e à noite, encaixadas antes ou depois do trem, o atendimento em casa nos bairros mais distantes do Centro e os finais de semana, quando o morador finalmente tem tempo. O acompanhamento online é o complemento natural para uma rotina em que o horário de chegada raramente é o mesmo dois dias seguidos.',

  bairrosNobres: ['Centro', 'Vila Romanópolis', 'Jardim Pérola', 'Vila São Paulo'],
  bairrosPopulares: ['Vila Corrêa', 'Parque São Francisco', 'Parque Dourado', 'Vila Santo Antônio'],

  parques: [
    {
      nome: 'Parque Municipal Nosso Recanto',
      descricao:
        'Principal área verde de lazer da cidade, no Jardim Pérola, com cerca de 50 mil m². Tem pista de caminhada, pista de skate, quadras poliesportivas, áreas de piquenique e playground, a poucos quilômetros da estação central.',
    },
    {
      nome: 'Praças e áreas de lazer de bairro',
      descricao:
        'Praças e espaços públicos distribuídos pela cidade que concentram caminhadas, alongamento e atividades comunitárias ao ar livre no dia a dia dos moradores.',
    },
    {
      nome: 'Ginásios e quadras municipais',
      descricao:
        'Estrutura municipal com ginásios e quadras poliesportivas que sustentam o esporte comunitário e servem de apoio a treinos e atividades em grupo.',
    },
  ],
  ciclovias:
    'A cidade possui trechos de estrutura cicloviária e ruas usadas por ciclistas no deslocamento cotidiano; a extensão total não é consolidada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude do planalto paulista, com verões chuvosos e invernos mais secos e amenos. A cidade fica na bacia do Alto Tietê, sujeita a chuvas concentradas no verão e a episódios de alagamento em áreas próximas a córregos.',
  climaTreino:
    'O treino ao ar livre rende bem no outono e no inverno, mais secos e frescos; no verão, convém planejar os horários por causa das chuvas de fim de tarde. As manhãs costumam ser as janelas mais estáveis para corrida e atividades externas.',

  mobilidade:
    'A mobilidade gira em torno da CPTM Linha 11-Coral, cuja estação central de Ferraz de Vasconcelos liga a cidade à capital e a Mogi das Cruzes, integrada a um terminal urbano de ônibus municipais e intermunicipais. O acesso rodoviário se dá pela Estrada Índio Tibiriçá e por vias que conectam a cidade à Rodovia Ayrton Senna e ao restante do Alto Tietê.',

  corridas: [
    {
      nome: 'Provas de rua do Alto Tietê',
      descricao:
        'Ferraz de Vasconcelos integra o calendário regional de corridas de rua do Alto Tietê, com provas realizadas na cidade e nos municípios vizinhos ao longo do ano.',
    },
    {
      nome: 'Atividades esportivas municipais',
      descricao:
        'A Secretaria de Esportes promove atividades, eventos e ações de incentivo à prática esportiva em ginásios, quadras e espaços públicos da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é comunitária e ligada ao futebol de várzea, às quadras de bairro e à rede pública de equipamentos. O Parque Nosso Recanto funciona como ponto de encontro para caminhada e corrida, e o esporte amador tem presença forte no cotidiano dos bairros.',
  academias:
    'A oferta é dominada por academias de bairro que atendem a população trabalhadora, complementadas por unidades de rede de baixo custo nos principais eixos da cidade, pelos espaços públicos de treino e pela rede municipal de esportes.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades Avenida Brasil, Cidade Kemel e Estação Gianetti' },
    { nome: 'Allp Fit', detalhe: 'na Avenida Brasil, Vila Romanópolis' },
    { nome: 'Academias de bairro', detalhe: 'opções acessíveis no Centro e nos distritos residenciais' },
  ],

  destaquesFitness: [
    'Parque Municipal Nosso Recanto, principal polo de caminhada e corrida da cidade.',
    'Conexão direta com a capital pela CPTM Linha 11-Coral, que molda a rotina de treino.',
    'Perfil de cidade-dormitório do Alto Tietê, com demanda por horários flexíveis.',
    'Forte cultura esportiva comunitária ligada a quadras e campos de bairro.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 110,
    mensalMin: 280,
    mensalMax: 680,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Cidade-dormitório do Alto Tietê conectada à capital pela Linha 11-Coral, Ferraz de Vasconcelos tem uma demanda muito ligada à rotina de trabalho e aos deslocamentos diários. Um personal trainer ajuda a encaixar o treino no dia a dia — aproveitando o Parque Nosso Recanto, as academias de bairro ou o formato online.',

  faqsExtra: [
    {
      pergunta: 'Como treinar com personal morando em Ferraz e trabalhando em São Paulo?',
      resposta:
        'A chave é ancorar o treino nos horários que a Linha 11-Coral define: sessão cedo, antes do trem, perto de casa ou da estação — ou à noite, na chegada. Duas a três sessões presenciais de 45 a 60 minutos por semana, com um plano B em casa para os dias em que o trem atrasa ou a jornada estica, mantêm a constância. Muitos moradores fecham a conta com o sábado de manhã, o horário mais folgado da semana, e com acompanhamento online nas semanas imprevisíveis.',
    },
    {
      pergunta: 'Onde dá para treinar com personal em Ferraz de Vasconcelos?',
      resposta:
        'Nas academias — unidades de rede na Avenida Brasil, no Cidade Kemel e na região da estação, além das academias de bairro do Centro e dos distritos —, em casa, formato comum nos bairros mais afastados, e ao ar livre no Parque Municipal Nosso Recanto, no Jardim Pérola, que tem pista de caminhada e quadras gratuitas. As praças de bairro com equipamentos de ginástica completam as opções para treino funcional de baixo custo.',
    },
    {
      pergunta: 'Há acompanhamento em Ferraz de Vasconcelos para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de quem já treinou com desconforto. Para o Alto Tietê, o formato mais prático é o acompanhamento online, com treino adaptado à estrutura disponível e ajustes contínuos; o presencial pode ser avaliado conforme agenda e local, a partir da base na região de Alphaville. O trabalho é gradual e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['mogi-das-cruzes-sp', 'suzano-sp', 'itaquaquecetuba-sp'],

  fontes: [
    {
      nome: 'IBGE Cidades — Ferraz de Vasconcelos',
      url: 'https://cidades.ibge.gov.br/brasil/sp/ferraz-de-vasconcelos/panorama',
    },
    { nome: 'Prefeitura de Ferraz de Vasconcelos', url: 'https://ferrazdevasconcelos.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-18',
};
