import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alegrete-rs',
  nome: 'Alegrete',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'alegretense',
  tipo: 'cidade',

  populacao: 72409,
  populacaoAno: 2022,

  resumoEconomico:
    'Conhecido como "Baita Chão", Alegrete é o maior município do Rio Grande do Sul em área — quase 7,8 mil km² de campanha — e um dos símbolos da Fronteira Oeste. A economia gira em torno da pecuária de corte, da lavoura de arroz irrigado e dos serviços que atendem a região, com o Rio Ibirapuitã cortando a cidade. A cultura gaúcha é vivida no dia a dia, dos CTGs às cavalgadas, e molda também o jeito local de cuidar do corpo: gente acostumada a lida, a distâncias grandes e a clima de extremos.',

  mercado:
    'O mercado de personal trainer em Alegrete é o típico de cidade média da Fronteira Oeste: academias de musculação concentradas no Centro e nos bairros maiores, forte cultura de caminhada nos parques e uma demanda crescente por treino orientado entre quem trabalha no campo e no comércio. O clima de extremos — verões entre os mais quentes do estado e invernos de geada — valoriza o profissional que monta plano com alternativa indoor e ajusta o treino à estação, mantendo a constância o ano inteiro.',

  bairrosNobres: ['Centro', 'Cidade Alta', 'Ibirapuitã', 'Vila Nova'],
  bairrosPopulares: ['Zona Leste', 'Promorar', 'Capão do Angico', 'Santo Antônio'],

  parques: [
    {
      nome: 'Parque Rui Ramos (Parque dos Patinhos)',
      descricao:
        'Área verde tradicional da cidade, muito frequentada nos fins de semana, com espaço para caminhada e lazer em família.',
    },
    {
      nome: 'Parque Nehyta Ramos',
      descricao:
        'O principal endereço esportivo público de Alegrete, com estrutura para corrida, futebol de areia e vôlei — ponto de encontro de quem treina ao ar livre.',
    },
    {
      nome: 'Orla do Rio Ibirapuitã',
      descricao:
        'O rio que corta a cidade rende percursos planos de caminhada e corrida, com a Ponte Borges de Medeiros como cartão-postal.',
    },
  ],

  clima:
    'Clima subtropical de extremos, típico da Fronteira Oeste: verões muito quentes, entre os mais rigorosos do estado, com máximas que passam dos 35 °C, e invernos frios com geadas frequentes e mínimas perto de zero.',
  climaTreino:
    'No verão, o treino ao ar livre rende no início da manhã e no fim da tarde — o meio do dia na campanha é para ser respeitado. No inverno, as manhãs de geada pedem aquecimento mais longo ou treino em ambiente coberto, com o meio da tarde virando a melhor janela.',

  mobilidade:
    'A cidade é atendida pelas BR-290 e BR-377, que a ligam a Uruguaiana, Rosário do Sul e ao centro do estado. O deslocamento urbano é rápido e o carro domina; as distâncias grandes valem mais para quem vem da zona rural, o que fortalece o acompanhamento online.',

  corridas: [
    {
      nome: 'Rústicas e provas do calendário da Fronteira',
      descricao:
        'Alegrete mantém tradição de corridas rústicas e provas locais ao longo do ano, com percursos que aproveitam os parques e a orla do Ibirapuitã.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva alegretense mistura a lida campeira — cavalgadas, laço, jineteadas — com a rotina urbana de caminhada nos parques e musculação nas academias do Centro. O Parque Nehyta Ramos concentra o esporte comunitário, e a identidade gaúcha dá ao treino um tom de disciplina e constância.',
  academias:
    'A oferta se concentra em academias de musculação e funcional no Centro e nos bairros maiores, com preços acessíveis e ambiente de cidade onde todo mundo se conhece — o que facilita a adesão de quem começa.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional com bom custo-benefício' },
    { nome: 'Estrutura do Parque Nehyta Ramos', detalhe: 'espaço público para corrida e esportes de areia' },
    { nome: 'Orla do Ibirapuitã', detalhe: 'percurso plano e gratuito para caminhada e corrida' },
  ],

  destaquesFitness: [
    'Maior município do RS em área: forte demanda por acompanhamento online na zona rural.',
    'Parque Nehyta Ramos com estrutura pública para corrida e esportes.',
    'Verões entre os mais quentes do estado — treino de janelas: amanhecer e entardecer.',
    'Cultura gaúcha de disciplina que conversa direto com a rotina de treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Alegrete tem o essencial para treinar bem: parques com estrutura, academias acessíveis e uma cultura local que entende de constância. O desafio é o clima de extremos da Fronteira — e é exatamente aí que o treino orientado se paga, com plano ajustado à estação e alternativa indoor sempre combinada.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Alegrete?',
      resposta:
        'Nas academias de musculação do Centro, no Parque Nehyta Ramos — a principal estrutura esportiva pública da cidade —, na orla do Rio Ibirapuitã para treinos de corrida e caminhada, e em casa. Pela extensão do município, maior do estado em área, quem mora na zona rural ou passa a semana na lida costuma optar pelo acompanhamento online, com treino adaptado à estrutura disponível.',
    },
    {
      pergunta: 'Como treinar nos extremos de clima da Fronteira Oeste?',
      resposta:
        'Alegrete vive os dois extremos do Rio Grande: verões que passam dos 35 °C e invernos de geada. A regra do verão é janela dupla — amanhecer e entardecer — com hidratação reforçada; a do inverno é inverter, aproveitando o meio da tarde e alongando o aquecimento nas manhãs frias. Quem treina orientado não perde a constância na virada das estações, porque o plano já nasce com alternativa em ambiente coberto.',
    },
    {
      pergunta: 'Há acompanhamento em Alegrete para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Alegrete, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou os parques), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['uruguaiana-rs', 'sao-gabriel-rs', 'bage-rs', 'santa-maria-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Alegrete', url: 'https://cidades.ibge.gov.br/brasil/rs/alegrete/panorama' },
    { nome: 'Prefeitura de Alegrete', url: 'https://www.alegrete.rs.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
