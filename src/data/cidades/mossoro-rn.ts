import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mossoro-rn',
  nome: 'Mossoró',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'mossoroense',
  tipo: 'cidade',

  populacao: 264577,
  populacaoAno: 2022,
  idhm: 0.72,
  idhmClasse: 'alto',

  resumoEconomico:
    'Segunda maior cidade do Rio Grande do Norte, Mossoró tem a economia sustentada por três pilares — sol, sal e petróleo: é a maior produtora de sal do país, uma das maiores produtoras de petróleo em terra (Bacia Potiguar) e referência em fruticultura irrigada, com o melão exportado. Sedia o Mossoró Cidade Junina, uma das maiores festas juninas do Brasil, e tem forte setor de serviços e universidades (UERN e UFERSA).',

  mercado:
    'O mercado fitness está em crescimento, apoiado pelo setor de serviços, pelas universidades e pelos profissionais da indústria do petróleo, com boa oferta de academias. O calor intenso do semiárido concentra o treino ao ar livre nos horários mais amenos.',

  bairrosNobres: ['Nova Betânia', 'Alto do Sumaré', 'Cidade Jardim', 'Bom Jesus'],
  bairrosPopulares: ['Santo Antônio', 'Aeroporto', 'Belo Horizonte', 'Lagoa do Mato'],

  parques: [
    {
      nome: 'Parque Ecológico Professor Maurício de Oliveira',
      descricao:
        'No centro, tem áreas verdes, trilhas, espaços para atividade física e academia ao ar livre; aberto de terça a domingo, das 5h às 18h, com entrada gratuita.',
    },
    {
      nome: 'Avenida João da Escóssia',
      descricao:
        'Corredor amplo usado para caminhada e corrida e palco das principais provas de rua da cidade.',
    },
    {
      nome: 'Orla do Rio Apodi-Mossoró',
      descricao:
        'Espaço de lazer e caminhada à beira d’água, que ajuda a distribuir a prática esportiva pela cidade.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum, mas a cidade ainda tem poucos quilômetros de ciclovia dedicada.',

  clima:
    'O clima é semiárido, muito quente, com média em torno de 27,4 °C (máximas que chegam a 36 °C) e chuvas concentradas de fevereiro a abril.',
  climaTreino:
    'O calor intenso exige treino ao ar livre preferencialmente no início da manhã ou à noite, com atenção redobrada à hidratação e à proteção solar.',

  mobilidade:
    'O acesso é pelas BR-110, BR-304 e BR-405; a BR-304 é a principal ligação, conectando Mossoró a Natal (cerca de 280 km) e a Fortaleza (cerca de 240 km). O trânsito interno é leve.',

  corridas: [
    {
      nome: 'Corrida Mossoró Cidade Junina',
      descricao:
        'Prova de 5 km e 10 km dentro da programação do maior São João do Rio Grande do Norte, com largada no corredor cultural do centro histórico.',
    },
    {
      nome: 'Corrida do Servidor',
      descricao:
        'Promovida pela prefeitura na Semana do Servidor, na Avenida João da Escóssia, com percursos de 3 km e 5 km.',
    },
    {
      nome: 'Corrida do Complexo Viário 15 de Março',
      descricao:
        'Prova de 5 km que reuniu cerca de 1.800 participantes, parte de uma cena de corrida em ascensão.',
    },
  ],
  culturaEsportiva:
    'Mossoró tem uma cena de corrida de rua crescente, com eventos promovidos pela prefeitura, e o trânsito leve e o custo de vida acessível favorecem a adesão à atividade física.',
  academias:
    'A oferta de academias acompanha o setor de serviços e o público universitário e da indústria do petróleo, complementada pelo Parque Ecológico Maurício de Oliveira e pela Avenida João da Escóssia.',

  destaquesFitness: [
    'Parque Ecológico Maurício de Oliveira como principal espaço público gratuito de treino.',
    'Avenida João da Escóssia como rota-referência para corrida e provas de rua.',
    'Demanda sustentada por estudantes e profissionais da indústria do petróleo.',
    'Calendário emergente de corridas de rua municipais.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Cidade do sol, do sal e do petróleo, Mossoró tem boa estrutura pública para treinar — desde que se respeite o calor do semiárido. Um personal trainer ajuda a montar uma rotina segura, com horários e hidratação ajustados, aproveitando o Parque Ecológico e a Avenida João da Escóssia.',

  vizinhas: ['areia-branca-rn', 'natal-rn'],

  faqsExtra: [
    {
      pergunta: 'Qual o melhor horário para treinar ao ar livre em Mossoró?',
      resposta:
        'Antes das 7h ou depois das 17h — Mossoró é uma das cidades mais quentes do país, e o meio do dia passa facilmente dos 35 °C na estação seca. O corredor da Avenida João da Escóssia e o Parque Maurício de Oliveira concentram o movimento nessas janelas, sempre com hidratação reforçada.',
    },
    {
      pergunta: 'Onde treinar ao ar livre em Mossoró?',
      resposta:
        'A Avenida João da Escóssia é a "pista" da cidade, com canteiro central usado por corredores e ciclistas; o Parque Ecológico Professor Maurício de Oliveira soma trilhas e área verde, e a orla do rio Apodi-Mossoró, no centro, recebe caminhada no fim de tarde. Em junho, o calendário esportivo se mistura à festa do Mossoró Cidade Junina.',
    },
    {
      pergunta: 'O personal trainer de Mossoró atende a região do oeste potiguar?',
      resposta:
        'Sim — como polo do oeste do estado, Mossoró atrai alunos de Areia Branca, Baraúna, Açu e Grossos. O atendimento presencial se concentra na cidade e nas praias próximas na temporada (Tibau e Areia Branca), e a consultoria online cobre o interior, com planilha semanal e ajustes a distância.',
    },
  ],
  capaArte: {
    src: '/capas-cidade/mossoro-rn.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Mossoró (RN) em arte que reúne o casario histórico do centro, as palmeiras da cidade e o treino de força com halteres e kettlebell — Personal por Perto',
    legenda: 'Treino inteligente para resultados reais em Mossoró: musculação com propósito e acompanhamento profissional no oeste potiguar.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Mossoró', url: 'https://cidades.ibge.gov.br/brasil/rn/mossoro/panorama' },
    { nome: 'Prefeitura de Mossoró', url: 'https://www.prefeiturademossoro.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-25',
};
