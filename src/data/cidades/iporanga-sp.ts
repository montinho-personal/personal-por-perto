import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'iporanga-sp',
  nome: 'Iporanga',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'iporanguense',
  tipo: 'cidade',

  populacao: 4046,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 4.046 habitantes (Censo 2022) espalhados por 1.152 km² — densidade de apenas 3,5 hab/km² —, Iporanga é a capital das cavernas do Brasil: são mais de 300 cavidades catalogadas no município, no coração do Vale do Ribeira. A economia gira em torno do ecoturismo e da espeleologia, com pousadas, monitores ambientais e agricultura familiar de pequena escala.',

  mercado:
    'O mercado de personal trainer é mínimo em número e específico em conteúdo: a demanda que existe vem de monitores ambientais, condutores de trilha e trabalhadores do turismo, que precisam de pernas, coluna e fôlego para caminhar horas dentro e fora das cavernas. Os moradores treinam em casa, ao ar livre ou com acompanhamento online.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Bairro da Serra', 'Ouro Grosso'],
  bairrosPopulares: ['Serra', 'Betari', 'André Lopes', 'Ivaporunduva'],

  parques: [
    {
      nome: 'PETAR — Parque Estadual Turístico do Alto Ribeira',
      descricao:
        'Principal unidade de conservação do município, dividida em quatro núcleos visitáveis — Santana, Ouro Grosso, Caboclos e Casa de Pedra —, com sítios espeleológicos, arqueológicos e trilhas de dificuldade variada.',
    },
    {
      nome: 'Caverna do Diabo e o conjunto de cavernas',
      descricao:
        'Iporanga tem mais de 300 cavidades catalogadas; as visitas combinam caminhada, escadas e passagens baixas, exigindo equilíbrio, força de perna e atenção à coluna.',
    },
    {
      nome: 'Trilhas e cachoeiras do Betari',
      descricao:
        'O rio Betari corta o município e organiza um circuito de trilhas e quedas d’água usado por moradores e visitantes para caminhada e banho.',
    },
    {
      nome: 'Comunidades quilombolas do Vale do Ribeira',
      descricao:
        'André Lopes, Ivaporunduva e Nhunguara integram o território quilombola do vale, com caminhos rurais usados no dia a dia e no turismo de base comunitária.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana. As estradas de terra do vale e os acessos aos núcleos do PETAR são usados por cicloturistas e por quem pedala entre bairros rurais.',

  clima:
    'Subtropical úmido, com chuvas bem distribuídas e alta umidade o ano todo — a mata atlântica fechada do vale mantém as temperaturas amenas mesmo no verão.',
  climaTreino:
    'A umidade constante é o fator que mais pesa: mesmo em dias amenos, o suor evapora menos e o esforço sobe. Dentro das cavernas a temperatura é estável, mas o piso irregular e as passagens estreitas exigem preparo de tornozelo, quadril e coluna.',

  mobilidade:
    'O acesso principal é pela SP-165, que liga Apiaí a Eldorado atravessando o vale; a maior parte dos deslocamentos internos se faz por estrada de terra. Os núcleos do PETAR ficam a dezenas de quilômetros do centro.',

  corridas: [
    {
      nome: 'Provas de trail run do Vale do Ribeira',
      descricao:
        'O calendário regional aproveita a topografia acidentada e as trilhas de mata atlântica, com percursos técnicos e muita variação de terreno.',
    },
  ],
  culturaEsportiva:
    'A caminhada de longa duração é parte do trabalho, não só do lazer: monitores e condutores percorrem trilhas e cavernas várias vezes por semana. Somam-se o cicloturismo em estrada de terra, o futebol de bairro rural e o rafting no rio Ribeira de Iguape.',
  academias:
    'A oferta formal é muito pequena e concentrada no centro. Na prática, o treino de força acontece em casa, em espaços improvisados das pousadas ou com programa acompanhado a distância.',

  destaquesFitness: [
    'Mais de 300 cavernas catalogadas — a maior concentração do país.',
    'PETAR com quatro núcleos visitáveis e trilhas de dificuldade variada.',
    'Densidade de 3,5 hab/km²: treino ao ar livre sem disputa de espaço.',
    'Rotina de trabalho que já exige caminhada longa e terreno irregular.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Iporanga treina para o que faz: caminhar horas em terreno irregular, subir e descer escadas de pedra, carregar equipamento dentro da mata. Um personal trainer daqui trabalha força de pernas, estabilidade de tornozelo e resistência de coluna — a base que sustenta quem vive do PETAR e das cavernas.',

  vizinhas: ['registro-sp', 'itapeva-sp', 'iguape-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Iporanga', url: 'https://www.ibge.gov.br/cidades-e-estados/sp/iporanga.html' },
    { nome: 'Fundação Florestal — PETAR', url: 'https://www.infraestruturameioambiente.sp.gov.br/fundacaoflorestal/pagina-inicial/parques-estaduais/parque-estadual-turistico-do-alto-ribeira/' },
    { nome: 'Prefeitura de Iporanga', url: 'https://www.iporanga.sp.gov.br/' },
  ],
  atualizadoEm: '2026-08-12',
};
