import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'crateus-ce',
  nome: 'Crateús',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'crateuense',
  tipo: 'cidade',

  populacao: 76390,
  populacaoAno: 2022,
  idhm: 0.644,
  idhmClasse: 'médio',
  altitudeM: 274,

  resumoEconomico:
    'Principal município do Sertão dos Inhamuns e do oeste cearense, Crateús é polo regional de comércio, serviços e saúde para dezenas de cidades do sertão central-oeste do Ceará. A economia se apoia no comércio, no setor de serviços, na pecuária e na agricultura do semiárido, e a cidade ganhou peso como centro de ensino superior com campus da UFC (Universidade Federal do Ceará), além de presença do IFCE e da UECE, o que atrai estudantes de toda a região.',

  mercado:
    'O mercado de personal trainers acompanha o papel de Crateús como polo regional: a base de estudantes universitários, servidores públicos e profissionais do comércio e da saúde sustenta a demanda, com academias concentradas no Centro e nos bairros mais estruturados. O calor do semiárido faz boa parte do treino ao ar livre migrar para o início da manhã e o fim da tarde.',

  bairrosNobres: ['Centro', 'Cidade 2000', 'Planalto', 'São Vicente'],
  bairrosPopulares: ['Fátima I', 'Fátima II', 'Venâncios', 'Santa Luzia'],

  parques: [
    {
      nome: 'Reserva Natural Serra das Almas (RPPN)',
      descricao:
        'RPPN de cerca de 6,3 mil hectares de Caatinga preservada entre Crateús e Buriti dos Montes (PI), reconhecida pela UNESCO como Posto Avançado da Reserva da Biosfera da Caatinga; tem trilhas, como a Trilha do Açude, a partir do Centro Ecológico Samuel Johnson.',
    },
    {
      nome: 'Açude Realejo',
      descricao:
        'Reservatório no riacho Carrapateiras, na região noroeste do município, usado para abastecimento e lazer e ponto de referência para caminhadas no entorno.',
    },
    {
      nome: 'Açude Carnaubal (Grota Grande)',
      descricao:
        'Um dos maiores açudes da área de Crateús, ponto de lazer e de atividades ao ar livre no semiárido.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no dia a dia, mas a malha de ciclovias dedicadas ainda é reduzida e concentrada em trechos próximos ao Centro.',

  clima:
    'O clima é semiárido quente, típico do Sertão dos Inhamuns e do oeste cearense, com temperaturas elevadas ao longo do ano, baixa umidade e chuvas concentradas no primeiro semestre; no fim da estação chuvosa a Caatinga ainda aparece verde.',
  climaTreino:
    'O calor intenso e a baixa umidade pedem treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada e proteção solar; nos horários de pico de sol, o ambiente climatizado das academias é a opção mais segura.',

  mobilidade:
    'O acesso rodoviário se dá pela BR-226, eixo que liga Crateús ao restante do oeste cearense e a Fortaleza (cerca de 350 km a leste). A cidade é cortada pela ferrovia Teresina–Fortaleza, parte do sistema da Transnordestina, marca histórica do município. O trânsito interno é leve, o que facilita os deslocamentos para treino.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário local',
      descricao:
        'Crateús recebe provas de rua e caminhadas organizadas por grupos de corrida, prefeitura e comércio, geralmente em datas comemorativas, com percursos curtos pelas avenidas do Centro.',
    },
    {
      nome: 'Provas em datas comemorativas',
      descricao:
        'Eventos esportivos pontuais marcam o calendário municipal, reunindo corredores da cidade e de municípios vizinhos do Sertão dos Inhamuns.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Crateús cresce ao redor do comércio, das escolas e dos campi universitários, com grupos de corrida e caminhada e uso frequente das avenidas e do entorno dos açudes. O trânsito leve e o custo de vida acessível favorecem a adesão à atividade física.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais estruturados, atendendo estudantes, servidores e profissionais do comércio e da saúde, e é complementada pelas avenidas da cidade e pelos açudes Realejo e Carnaubal como espaços de treino ao ar livre.',

  academiasProximas: [
    { nome: 'Academias locais', detalhe: 'musculação e funcional no Centro' },
    { nome: 'Açudes Realejo e Carnaubal', detalhe: 'percursos tradicionais de caminhada e corrida' },
  ],

  destaquesFitness: [
    'Reserva Natural Serra das Almas como cenário de trilhas e contato com a Caatinga preservada.',
    'Açudes Realejo e Carnaubal como pontos de caminhada e treino ao ar livre.',
    'Demanda sustentada por estudantes da UFC, do IFCE e da UECE e por servidores e comerciantes.',
    'Papel de polo regional do Sertão dos Inhamuns, que concentra serviços e estrutura para a região.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo do Sertão dos Inhamuns, Crateús reúne comércio, universidades e uma natureza de Caatinga marcante para quem quer treinar — desde que se respeite o calor do semiárido. Um personal trainer ajuda a montar uma rotina segura, ajustando horários e hidratação e aproveitando as avenidas, os açudes e as trilhas da região.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Crateús?',
      resposta:
        'Nas academias do Centro, nos percursos dos açudes Realejo e Carnaubal — os pontos tradicionais de caminhada e corrida — e em casa. Para quem busca algo além, a Serra das Almas, reserva natural na divisa com o Piauí, é destino de trilhas e caminhadas em meio à caatinga preservada, boa opção de treino de resistência nos meses menos quentes.',
    },
    {
      pergunta: 'Como o calor do sertão dos Inhamuns afeta o treino em Crateús?',
      resposta:
        'Crateús soma calor forte com ar seco boa parte do ano: o treino ao ar livre rende no amanhecer e no fim de tarde, com hidratação começando antes da sessão e roupas leves. No meio do dia, musculação em ambiente coberto é o caminho seguro. O personal local trabalha em torno dessas janelas e ajusta a intensidade nos picos de seca — constância no sertão é questão de estratégia, não de força de vontade.',
    },
    {
      pergunta: 'Há acompanhamento em Crateús para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Crateús, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou os açudes), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['sobral-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Crateús', url: 'https://cidades.ibge.gov.br/brasil/ce/crateus/panorama' },
    { nome: 'Prefeitura de Crateús', url: 'https://www.crateus.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
