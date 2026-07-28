import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-vicente-sp',
  nome: 'São Vicente',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-vicentino',
  tipo: 'cidade',

  populacao: 329911,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',

  resumoEconomico:
    'Integrante da Região Metropolitana da Baixada Santista, São Vicente é a "Cellula Mater" do Brasil — a primeira vila fundada no país, em 1532. A economia litorânea é voltada a turismo, comércio e serviços, com forte papel de cidade-dormitório do polo de Santos e Cubatão, e a orla é o principal ativo de lazer.',

  mercado:
    'A demanda é aquecida pelo treino ao ar livre na orla (praias e ciclovia), favorecendo personal trainers de praia, corrida e funcional, com rede de academias concentrada nos bairros centrais e da orla.',

  bairrosNobres: ['Japuí', 'Vila Valença', 'Itararé', 'Gonzaguinha'],
  bairrosPopulares: ['Vila Voturuá', 'Catiapoã', 'Parque Bitaru', 'Jardim Rio Branco'],

  parques: [
    {
      nome: 'Orla da Praia do Itararé',
      descricao:
        'Maior e mais movimentada praia da cidade (cerca de 2.400 m), com calçadão, quiosques e ciclovia; areia ampla usada para corrida e treino funcional.',
    },
    {
      nome: 'Orla da Praia do Gonzaguinha',
      descricao:
        'Calçadão com quiosques, ciclovia e campo de futebol na orla, de movimento intenso.',
    },
    {
      nome: 'Parque Ecológico Voturuá',
      descricao:
        'Cerca de 850 mil m² de remanescente de Mata Atlântica em área urbana, com trilhas e área verde para caminhada.',
    },
  ],
  ciclovias:
    'Há ciclovia ao longo da orla (Itararé e Gonzaguinha); a extensão total exata ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical úmido litorâneo, com média anual em torno de 24,7 °C, umidade alta e chuvas fortes no verão.',
  climaTreino:
    'Os treinos ao ar livre rendem mais no início da manhã e no fim de tarde; a umidade alta exige atenção à hidratação e à termorregulação.',

  mobilidade:
    'São Vicente liga-se ao planalto e à capital pelas rodovias Anchieta e Imigrantes, em conurbação com Santos.',

  corridas: [
    {
      nome: 'São Vicente Night Run',
      descricao:
        'Corrida noturna de praia, uma das mais tradicionais do litoral paulista.',
    },
    {
      nome: 'Travessia Martim Afonso de Sousa',
      descricao:
        'Travessia de natação em águas abertas, da Ilha Porchat ao Gonzaguinha, já em dezenas de edições.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte cultura de esportes de praia e mar — corrida na areia, natação em águas abertas e ciclismo na orla —, com calendário recorrente de provas litorâneas.',
  academias:
    'A oferta reúne academias nos bairros centrais e da orla, com as praias do Itararé e do Gonzaguinha funcionando como academia a céu aberto.',

  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades na Av. Presidente Wilson (Itararé) e na Rua Frei Gaspar' },
    { nome: 'Academias de bairro', detalhe: 'boa cobertura no Centro e na área continental' },
    { nome: 'Estrutura pública das orlas', detalhe: 'calçadões do Itararé e do Gonzaguinha, gratuitos' },
  ],

  destaquesFitness: [
    'Orla extensa e contínua, ideal para corrida e treino funcional na areia.',
    'Ciclovia da orla integrando Itararé e Gonzaguinha.',
    'Travessias de águas abertas tradicionais (nicho de natação e triathlon).',
    'Clima úmido, que pede periodização de horários e foco em hidratação.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Berço do Brasil e cidade litorânea da Baixada Santista, São Vicente tem orla extensa e cena de esportes de mar ativa. Um personal trainer ajuda a aproveitar as praias do Itararé e do Gonzaguinha com método, ajustando horários e hidratação ao clima úmido.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em São Vicente?',
      resposta:
        'A orla comanda: os calçadões do Itararé e do Gonzaguinha concentram corrida, funcional e treino na areia, com o pôr do sol mais famoso da Baixada como cenário. Completam o mapa as academias — Smart Fit no Itararé e na Frei Gaspar, além das de bairro —, o Parque Ecológico Voturuá para treinos em meio ao verde e o atendimento em casa e em condomínio na Ilha Porchat e no Centro.',
    },
    {
      pergunta: 'Dá para treinar na praia com personal em São Vicente?',
      resposta:
        'Dá — é a especialidade local. O formato combina funcional na areia com material portátil, corrida no calçadão e subidas na região da Ilha Porchat para variar intensidade. A São Vicente Night Run mantém a cena de corrida ativa, e muitos alunos preparam provas treinando na orla. A umidade alta pede horários inteligentes: início da manhã e fim de tarde rendem mais que o meio do dia, especialmente no verão.',
    },
    {
      pergunta: 'Há acompanhamento em São Vicente para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para São Vicente, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['santos-sp', 'praia-grande-sp', 'guaruja-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Vicente', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-vicente/panorama' },
    { nome: 'Prefeitura de São Vicente', url: 'https://www.saovicente.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
