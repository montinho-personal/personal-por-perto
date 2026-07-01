import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ribeirao-pires-sp',
  nome: 'Ribeirão Pires',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ribeirão-pirense',
  tipo: 'cidade',

  populacao: 115559,
  populacaoAno: 2022,
  idhm: 0.784,
  idhmClasse: 'alto',
  altitudeM: 763,

  resumoEconomico:
    'Estância turística do Grande ABC e da Região Metropolitana de São Paulo, Ribeirão Pires fica a cerca de 40 km da capital, em área de proteção aos mananciais e cercada por Mata Atlântica. Boa parte do território integra a bacia da Represa Billings, o que condiciona o uso do solo e valoriza a vocação turística e ambiental. A economia combina indústria e serviços ligados ao eixo do ABC, o comércio local e um turismo cada vez mais forte — puxado pela natureza, pelo turismo religioso e rural e por eventos como o tradicional Festival do Chocolate, que movimenta a cidade no meio do ano.',

  mercado:
    'Por ser uma cidade de porte médio inserida na Região Metropolitana de São Paulo, o mercado fitness de Ribeirão Pires é atendido tanto por academias e estúdios locais quanto pela proximidade com Santo André e Mauá. A procura por personal trainers cresce entre moradores que buscam treino orientado e entre quem quer aproveitar o relevo de serra e as áreas verdes para atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Centro Alto', 'Jardim Luso', 'Ouro Fino Paulista'],
  bairrosPopulares: ['Santa Luzia', 'Colônia', 'Guapituba', 'Quarta Divisão'],

  parques: [
    {
      nome: 'Parque Municipal Prof. Luiz Carlos Grecco (Parque Oriental)',
      descricao:
        'Área verde com paisagismo de inspiração oriental, lago e trilhas, muito usada para caminhada, alongamento e treino leve ao ar livre em meio à Mata Atlântica.',
    },
    {
      nome: 'Represa Billings',
      descricao:
        'Principal cartão-postal natural da cidade e maior reservatório da Região Metropolitana de São Paulo; seu entorno concentra parques, mirantes e espaços de lazer usados para caminhada, pedal e atividade ao ar livre.',
    },
    {
      nome: 'Parque Natural Santa Helena e trilhas da Mata Atlântica',
      descricao:
        'Conjunto de áreas naturais e trilhas como a Trilha do Tapiá e a Pedra do Elefante, que exploram o relevo de serra e a floresta preservada, atraindo quem gosta de trekking e treino em ambiente natural.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos da área central e do entorno da represa; grande parte do pedal e da corrida acontece nas vias urbanas e nas estradas de acesso às áreas de mananciais, onde o relevo acidentado exige preparo.',

  clima:
    'O clima é subtropical úmido, influenciado pela altitude (a cidade fica em torno de 760 m) e pela cobertura de Mata Atlântica, o que deixa Ribeirão Pires mais fresca e úmida que a média da Região Metropolitana. Os verões são chuvosos e amenos, e os invernos são secos e frios, com neblina frequente nas manhãs das áreas de serra.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano, especialmente pela manhã e no fim da tarde. No verão, a chuva concentrada e a umidade pedem atenção ao calendário e a pisos escorregadios em trilhas; no inverno, o frio e a neblina recomendam aquecimento mais longo e roupas adequadas.',

  mobilidade:
    'Ribeirão Pires é servida pela Linha 10-Turquesa da CPTM, que liga a cidade a Mauá, Santo André, São Caetano e ao centro de São Paulo por trem metropolitano — a estação local está em obras de modernização. Por rodovia, o principal acesso é a SP-122 (Rodovia Índio Tibiriçá), que conecta a cidade a Suzano e ao Alto Tietê, além das ligações internas do Grande ABC. O transporte urbano é feito por ônibus municipais e intermunicipais.',

  corridas: [
    {
      nome: 'Choco Run (Festival do Chocolate)',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km associada ao tradicional Festival do Chocolate, o maior evento turístico da cidade, reunindo atletas e famílias pelas ruas centrais.',
    },
    {
      nome: 'Provas e circuitos do Grande ABC',
      descricao:
        'Ribeirão Pires participa do calendário de corridas de rua da região do ABC, com etapas e provas municipais que aproveitam o relevo de serra e as áreas verdes da estância turística.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das áreas verdes e do entorno da Represa Billings para caminhada e corrida, as trilhas de Mata Atlântica para trekking e o pedal nas subidas de serra. Eventos como o Festival do Chocolate e a Choco Run reforçam a ligação entre esporte, turismo e vida ao ar livre.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional e estúdios menores, distribuídos pelo Centro, Centro Alto e Ouro Fino Paulista, complementada pela proximidade com a estrutura fitness de Santo André e Mauá.',

  destaquesFitness: [
    'Estância turística em área de mananciais, cercada por Mata Atlântica e pela Represa Billings.',
    'Clima subtropical mais fresco e úmido, favorável ao treino ao ar livre na maior parte do ano.',
    'Relevo de serra e trilhas (Pedra do Elefante, Tapiá) para trekking e treino em ambiente natural.',
    'Integração ao Grande ABC e a São Paulo pela Linha 10-Turquesa da CPTM e pela SP-122.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade de serra, fresca e cercada por natureza protegida, Ribeirão Pires oferece um cenário privilegiado para treinar ao ar livre, seja no entorno da Represa Billings, nas trilhas de Mata Atlântica ou nos parques urbanos. Um personal trainer ajuda a aproveitar esse ambiente com segurança, ajustando os horários ao clima úmido e ao relevo acidentado e mantendo a constância ao longo do ano.',

  vizinhas: ['santo-andre-sp', 'maua-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Ribeirão Pires', url: 'https://cidades.ibge.gov.br/brasil/sp/ribeirao-pires/panorama' },
    { nome: 'Prefeitura da Estância Turística de Ribeirão Pires', url: 'https://ribeiraopires.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
