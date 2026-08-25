import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'parnamirim-rn',
  nome: 'Parnamirim',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'parnamirinense',
  tipo: 'cidade',

  populacao: 252716,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',

  resumoEconomico:
    'Integrante da Região Metropolitana de Natal e conurbada à capital, Parnamirim abriga a Base Aérea de Natal (o histórico Parnamirim Field da 2ª Guerra). Tem o terceiro maior PIB do estado e vive crescimento acelerado, especialmente imobiliário — foi o município que mais cresceu em números absolutos no RN entre 2010 e 2022 —, com litoral nas praias de Pirangi e Cotovelo.',

  mercado:
    'A oferta de academias é variada, de unidades compactas a complexos premium, concentrada em Nova Parnamirim, com musculação, funcional, pilates, lutas e dança. O crescimento da classe média impulsiona o setor.',

  bairrosNobres: ['Nova Parnamirim', 'Parque do Pitimbu', 'Parque dos Eucaliptos', 'Cohabinal'],
  bairrosPopulares: ['Santos Reis', 'Passagem de Areia', 'Boa Esperança', 'Rosa dos Ventos'],

  parques: [
    {
      nome: 'Praia de Pirangi',
      descricao:
        'Orla para corrida e caminhada, com futebol e vôlei de praia; a região é famosa pelo maior cajueiro do mundo.',
    },
    {
      nome: 'Praia de Cotovelo',
      descricao:
        'Orla tranquila para caminhada e corrida, de fácil acesso.',
    },
    {
      nome: 'Parque Aluízio Alves',
      descricao:
        'Espaço de lazer público com fonte luminosa, pista de skate, playground e teatro de arena.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária municipal ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical úmido, com sol quase o ano todo e chuvas concentradas no meio do ano.',
  climaTreino:
    'O calor litorâneo pede treino ao ar livre nas primeiras horas da manhã ou no fim de tarde, com atenção redobrada à hidratação.',

  mobilidade:
    'Parnamirim é servida pela BR-101 e pela Rota do Sol (RN-063), eixos de ligação com Natal e o litoral, a cerca de 17 km ao sul da capital.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador de Parnamirim',
      descricao:
        'Realizada em 1º de maio, com 5 km pelas ruas do Cohabinal e largada na Prefeitura.',
    },
    {
      nome: 'ParnaRun',
      descricao:
        'Corrida de rua alusiva ao aniversário do município, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'Há forte cultura de praia (corrida, caminhada, vôlei e futebol nas orlas de Pirangi e Cotovelo) e um calendário municipal de corridas apoiado pela prefeitura e por programas estaduais.',
  academias:
    'A oferta concentra academias modernas em Nova Parnamirim, de redes a estúdios locais, complementada pelas orlas de Pirangi e Cotovelo.',

  destaquesFitness: [
    'Orlas de Pirangi e Cotovelo como academias a céu aberto.',
    'Concentração de academias modernas em Nova Parnamirim.',
    'Clima quente o ano todo, favorável ao treino outdoor matinal e vespertino.',
    'Crescimento populacional e imobiliário acelerado expandindo a demanda fitness.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Cidade que mais cresce no RN e conurbada a Natal, Parnamirim une praias e academias modernas em Nova Parnamirim. Um personal trainer ajuda a aproveitar as orlas de Pirangi e Cotovelo com método, ajustando horários e hidratação ao calor litorâneo.',

  vizinhas: ['natal-rn', 'macaiba-rn', 'nisia-floresta-rn'],

  faqsExtra: [
    {
      pergunta: 'Onde treinar ao ar livre em Parnamirim?',
      resposta:
        'O Parque Aluízio Alves é a pista oficial — anel de caminhada e corrida, academia ao ar livre e o palco das provas locais —, seguido das ruas planas de Nova Parnamirim e da orla de Pirangi, com o maior cajueiro do mundo de vizinho. O calendário tem tradição: a Corrida do Trabalhador passa das nove edições e a Corrida Histórica larga em frente à Base Aérea.',
    },
    {
      pergunta: 'Personal trainer atende em Nova Parnamirim e nos condomínios?',
      resposta:
        'Sim — Nova Parnamirim é um dos maiores adensamentos residenciais do estado, colado em Natal, e o atendimento em condomínio e a domicílio é o formato que mais cresce. Muitos moradores trabalham em Natal e treinam no próprio bairro pela economia de tempo na BR-101; o personal que atende os dois lados da divisa é figura comum.',
    },
    {
      pergunta: 'Quanto custa personal trainer em Parnamirim em relação a Natal?',
      resposta:
        'Levemente menos nos bairros tradicionais e valores parecidos em Nova Parnamirim, que na prática funciona como extensão da capital. Sessões avulsas acessíveis nas academias de bairro, pacotes mensais competitivos nos condomínios e treino em dupla como estratégia comum de custo. A praia de Pirangi puxa a demanda sazonal no verão.',
    },
  ],
  capaArte: {
    src: '/capas-cidade/parnamirim-rn.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Parnamirim (RN) em arte com o mapa do Rio Grande do Norte marcando a cidade, a orla ao fundo e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Parnamirim: foco, disciplina e resultados com acompanhamento profissional na Grande Natal.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Parnamirim', url: 'https://cidades.ibge.gov.br/brasil/rn/parnamirim/panorama' },
    { nome: 'Prefeitura de Parnamirim', url: 'https://www.parnamirim.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-25',
};
