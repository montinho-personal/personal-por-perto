import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'olinda-pe',
  nome: 'Olinda',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'olindense',
  tipo: 'cidade',

  populacao: 349976,
  populacaoAno: 2022,
  idhm: 0.735,
  idhmClasse: 'alto',

  resumoEconomico:
    'Cidade histórica e turística, Olinda foi o primeiro conjunto urbano do Brasil declarado Patrimônio Mundial pela Unesco. O turismo cultural, o Carnaval e o artesanato são pilares da economia, que também se apoia na dinâmica metropolitana — Olinda integra a Região Metropolitana do Recife, com forte conurbação. A orla e as ladeiras do sítio histórico dão à cidade um cenário único para treinar.',

  mercado:
    'O mercado fitness reúne redes e academias de bairro, e a prefeitura mantém o projeto "Academia do Bairro", com treino funcional, ritmos e ginástica em 16 polos espalhados por nove bairros — incluindo a orla do Bairro Novo. A cultura de treino ao ar livre é forte no calçadão, e as ladeiras históricas funcionam como academia natural para quem corre.',

  bairrosNobres: ['Casa Caiada', 'Bairro Novo', 'Jardim Atlântico', 'Carmo'],
  bairrosPopulares: ['Peixinhos', 'Aguazinha', 'Jardim Brasil', 'Bultrins'],

  parques: [
    {
      nome: 'Orla de Olinda',
      descricao:
        'Calçadão à beira-mar (do Bairro Novo a Rio Doce) com pista de caminhada, corrida e ciclismo — o ponto mais frequentado pelos corredores da cidade.',
    },
    {
      nome: 'Parque Memorial Arcoverde',
      descricao:
        'Ampla área verde próxima ao Centro de Convenções, com aparelhos de ginástica e academia ao ar livre.',
    },
    {
      nome: 'Sítio Histórico (Alto da Sé)',
      descricao:
        'As ladeiras do centro histórico são usadas para treino de subida e intervalado, em um dos cenários mais bonitos do país.',
    },
  ],
  ciclovias:
    'Há um eixo cicloviário conectando Olinda ao Recife (trecho Marco Zero–Tacaruna, de cerca de 5 km na primeira etapa) e um novo segmento integrado ao sistema de bikes compartilhadas de Pernambuco.',

  clima:
    'O clima é tropical úmido, quente o ano todo.',
  climaTreino:
    'O treino ao ar livre rende mais cedo pela manhã ou no fim de tarde, com hidratação reforçada — a brisa da orla ajuda no conforto térmico.',

  mobilidade:
    'Olinda é integrada ao Recife por rodovias e pelo transporte metropolitano (terminais de ônibus do Grande Recife). A cidade não tem estação de metrô própria; o acesso ao Metrô do Recife é feito pela capital.',

  corridas: [
    {
      nome: 'CICORRE — Etapa Olinda',
      descricao:
        'Circuito de corrida com percurso plano pela orla (provas de 4 km e 8 km), com largada no Bairro Novo.',
    },
    {
      nome: 'Corrida dos Bonecos Gigantes',
      descricao:
        'Prova tradicional pelas ladeiras e ruas do sítio histórico — um verdadeiro desafio de subidas em cenário tombado.',
    },
  ],
  culturaEsportiva:
    'Olinda tem forte uso dos espaços públicos — orla e ladeiras — para corrida e caminhada, com eventos que combinam atividade física e patrimônio histórico e atraem corredores de toda a Região Metropolitana do Recife.',
  academias:
    'A oferta reúne redes e academias de bairro, complementadas pelo programa público "Academia do Bairro" e pela enorme estrutura ao ar livre da orla e do sítio histórico.',

  destaquesFitness: [
    'Orla com calçadão é o "QG" de corrida e caminhada da cidade.',
    'Ladeiras do sítio histórico como treino natural de subida e intervalado.',
    'Programa público "Academia do Bairro" amplia o treino funcional gratuito.',
    'Conexão cicloviária direta com o Recife favorece o ciclismo urbano.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Entre a orla e o casario histórico, Olinda oferece cenários únicos para treinar — do calçadão plano às ladeiras do Alto da Sé. Um personal trainer ajuda a transformar essa geografia em um plano consistente, respeitando o clima quente e o seu objetivo.',

  vizinhas: ['recife-pe', 'paulista-pe', 'jaboatao-dos-guararapes-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Olinda', url: 'https://cidades.ibge.gov.br/brasil/pe/olinda/panorama' },
    { nome: 'Prefeitura de Olinda', url: 'https://www.olinda.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',


  faqsExtra: [
    {
      pergunta: 'Treinar nas ladeiras de Olinda é para qualquer nível?',
      resposta:
        'Com dosagem, sim. A subida é um dos estímulos mais eficientes que existem — fortalece pernas e eleva o fôlego rápido —, mas ladeira de paralelepípedo cobra técnica e tornozelo preparado. O caminho seguro: construir base no calçadão plano da orla por algumas semanas e introduzir as ladeiras aos poucos, de preferência com acompanhamento. Dor em joelho ou tornozelo pede avaliação de médico ou fisioterapeuta.',
    },
    {
      pergunta: 'A Academia do Bairro substitui o personal trainer?',
      resposta:
        'São coisas complementares. O programa público oferece aulas coletivas gratuitas de funcional e ginástica em 16 polos da cidade — ótima porta de entrada. O personal entra quando você precisa de plano individual: objetivo específico, progressão de carga, limitação física ou horário que as turmas não cobrem. Muita gente combina os dois.',
    },
    {
      pergunta: 'Qual o melhor horário para correr na orla de Olinda?',
      resposta:
        'Início da manhã e fim da tarde — o padrão do litoral pernambucano. O calçadão do Bairro Novo a Rio Doce é plano, contínuo e com brisa constante, o que alivia o calor. No meio do dia, o sol a pino torna o treino desconfortável e arriscado sem hidratação reforçada.',
    },
  ],

  capaArte: {
    src: '/capas-cidade/olinda-pe.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Olinda (PE) em arte que reúne treino com halteres e corda naval, o Alto da Sé, o casario do centro histórico e a orla de Casa Caiada — Personal por Perto',
    legenda:
      'Treino personalizado em Olinda: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
