import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sapiranga-rs',
  nome: 'Sapiranga',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'sapiranguense',
  tipo: 'cidade',

  populacao: 81734,
  populacaoAno: 2022,

  resumoEconomico:
    'No coração do Vale do Sinos e porta da Rota Romântica, Sapiranga é um polo tradicional da indústria calçadista gaúcha, com colonização alemã que se vê na arquitetura e nas festas — a Festa das Rosas é a marca da cidade. O cartão-postal é o Morro Ferrabraz, com 779 metros de altitude, referência nacional do voo livre e cenário histórico da Revolta dos Muckers. A economia combina calçado, comércio e serviços, com um dia a dia de cidade média bem estruturada.',

  mercado:
    'O mercado de personal trainer em Sapiranga acompanha o ritmo do Vale do Sinos: academias de musculação e funcional distribuídas pelo Centro e bairros industriais, público operário e de escritório com horários bem definidos e uma cena outdoor peculiar — o Ferrabraz atrai trilheiros e atletas de montanha o ano todo. A proximidade com Novo Hamburgo e São Leopoldo amplia a oferta, mas o atendimento local, perto de casa ou na academia do bairro, é o que sustenta a constância de quem trabalha em turnos.',

  bairrosNobres: ['Centro', 'Oeste', 'Amaral Ribeiro', 'São Luiz'],
  bairrosPopulares: ['Vila Irma', 'Amizade', 'Central Park', 'Nova Sapiranga'],

  parques: [
    {
      nome: 'Morro Ferrabraz',
      descricao:
        'O cartão-postal de Sapiranga, com 779 m de altitude: trilha de subida exigente, rampa de voo livre de referência nacional e vista para todo o Vale do Sinos — treino de montanha de verdade a minutos do Centro.',
    },
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'As praças centrais e os espaços públicos concentram caminhada, academia ao ar livre e o movimento de fim de tarde.',
    },
    {
      nome: 'Margens do Rio dos Sinos',
      descricao:
        'A porção baixa do município se aproxima do Rio dos Sinos, com percursos planos usados para caminhada e pedal na zona rural próxima.',
    },
  ],

  clima:
    'Clima subtropical úmido do Vale do Sinos: verões quentes e abafados, invernos frios com mínimas de um dígito e chuvas bem distribuídas o ano todo.',
  climaTreino:
    'No verão, o abafado do Vale empurra o treino ao ar livre para o início da manhã e o fim de tarde. No inverno, as manhãs frias pedem aquecimento caprichado — e a subida do Ferrabraz, que esquenta qualquer um, vira o treino favorito da estação.',

  mobilidade:
    'A RS-239 liga Sapiranga a Novo Hamburgo, Taquara e à região metropolitana, com a ERS-115 puxando para Gramado pela Rota Romântica. O deslocamento é essencialmente rodoviário; dentro da cidade, as distâncias são curtas e favorecem treinar perto de casa.',

  corridas: [
    {
      nome: 'Provas de rua e desafios de montanha da região',
      descricao:
        'O calendário do Vale do Sinos mantém provas de rua o ano todo, e o Ferrabraz concentra desafios de subida e trail que atraem atletas de toda a região.',
    },
  ],
  culturaEsportiva:
    'Sapiranga tem dupla identidade esportiva: a rotina urbana de academias e caminhada nas praças, herdada do ritmo industrial, e a cultura outdoor do Ferrabraz — voo livre, trilha e treino de subida. A Festa das Rosas movimenta a cidade e o calendário local, e a vizinhança com Novo Hamburgo mantém a cena esportiva do Vale sempre por perto.',
  academias:
    'A oferta reúne academias de musculação e funcional no Centro e nos bairros, com bom custo-benefício e horários que atendem os turnos da indústria calçadista.',
  academiasProximas: [
    { nome: 'Academias do Centro e bairros', detalhe: 'musculação e funcional com horários de turno industrial' },
    { nome: 'Trilha do Morro Ferrabraz', detalhe: 'subida clássica para treino de resistência e trail' },
    { nome: 'Academias ao ar livre das praças', detalhe: 'estrutura pública gratuita no Centro' },
  ],

  destaquesFitness: [
    'Morro Ferrabraz (779 m): trilha e rampa de voo livre de referência nacional.',
    'Cidade compacta: academia, praça e trilha a poucos minutos de casa.',
    'Horários de turno da indústria calçadista moldam a agenda de treino.',
    'Rota Romântica e Vale do Sinos ampliam o calendário de provas por perto.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Entre a academia do bairro e a subida do Ferrabraz, Sapiranga oferece o que importa: estrutura acessível e um desafio de montanha na porta de casa. Um personal trainer ajuda a transformar isso em rotina — encaixando o treino nos turnos da indústria e dosando a progressão para a trilha não cobrar caro dos joelhos.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Sapiranga?',
      resposta:
        'Nas academias de musculação do Centro e dos bairros — acostumadas aos horários de turno da indústria calçadista —, nas praças com academia ao ar livre, em casa e no Morro Ferrabraz, que funciona como estação de treino de subida para corredores e trilheiros. A cidade é compacta: dá para encaixar o treino perto de casa ou do trabalho sem atravessar o município.',
    },
    {
      pergunta: 'Dá para treinar subida no Morro Ferrabraz com orientação?',
      resposta:
        'Dá — e é o diferencial esportivo de Sapiranga. A trilha do Ferrabraz sobe até os 779 m em percurso exigente, perfeito para treino de resistência, trail running e fortalecimento de pernas. A progressão importa: quem começa faz a subida em ritmo de caminhada com pausas, evolui para trechos corridos e só então encara o desafio completo. O personal dosa volume e técnica de descida — onde joelhos pagam a conta de quem exagera — e o prêmio é a vista do Vale do Sinos inteiro.',
    },
    {
      pergunta: 'Há acompanhamento em Sapiranga para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Sapiranga, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as praças), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['novo-hamburgo-rs', 'sao-leopoldo-rs', 'taquara-rs', 'parobe-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Sapiranga', url: 'https://cidades.ibge.gov.br/brasil/rs/sapiranga/panorama' },
    { nome: 'Prefeitura de Sapiranga', url: 'https://www.sapiranga.rs.gov.br/' },
    { nome: 'Turismo RS — Morro Ferrabraz', url: 'https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4109' },
  ],
  atualizadoEm: '2026-07-28',
};
