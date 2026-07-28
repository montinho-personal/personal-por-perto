import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-bom-rs',
  nome: 'Campo Bom',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'campo-bonense',
  tipo: 'cidade',

  populacao: 62886,
  populacaoAno: 2022,

  resumoEconomico:
    'Polo histórico da indústria calçadista do Vale do Sinos — pioneira na exportação de calçados do Brasil, em 1968, e berço da feira que originou a FENAC —, Campo Bom guarda um recorde que interessa a quem treina: a primeira ciclovia da América Latina, iniciada em 1977 para os trabalhadores das fábricas irem de bicicleta ao trabalho. Hoje a malha soma cerca de 21 km e é o cartão-postal da cidade, ao lado da herança germânica e do ritmo industrial que segue forte.',

  mercado:
    'O mercado de personal trainer em Campo Bom gira em torno de dois eixos: os horários de turno da indústria calçadista — que criam demanda por treino cedo da manhã e pós-expediente — e a cultura da bicicleta, única no país, que faz do treino ao ar livre um hábito de gerações. As academias do Centro e dos bairros completam a estrutura, e o Parcão (Parque Municipal da Integração Arno Kunz) é o ponto de encontro de quem treina.',

  bairrosNobres: ['Centro', 'Celeste', 'Operário', 'Vila Rica'],
  bairrosPopulares: ['Metzler', 'Santa Lúcia', 'Barrinha', 'Quatro Colônias'],

  parques: [
    {
      nome: 'Ciclovia pioneira (21 km)',
      descricao:
        'A primeira ciclovia da América Latina, iniciada em 1977: anel de 6 km no centro com ramificações para os bairros, somando cerca de 21 km — usada para pedal, corrida e caminhada diariamente.',
    },
    {
      nome: 'Parque Municipal da Integração Arno Kunz (Parcão)',
      descricao:
        'A referência de lazer e bem-estar da cidade, integrada à ciclovia, com área verde e estrutura para treino ao ar livre.',
    },
    {
      nome: 'Margens do Rio dos Sinos',
      descricao:
        'A porção ribeirinha do município rende percursos planos de pedal e caminhada junto ao rio.',
    },
  ],
  ciclovias:
    'Campo Bom é a capital histórica da ciclovia no Brasil: a malha pioneira de 1977 soma cerca de 21 km, circundando o centro e ramificando para os bairros — infraestrutura que transformou a bicicleta em cultura local de transporte e treino.',

  clima:
    'Clima subtropical úmido do Vale do Sinos: verões quentes e abafados, invernos frios com mínimas de um dígito e chuvas distribuídas o ano todo.',
  climaTreino:
    'O verão abafado do Vale empurra o treino ao ar livre para o amanhecer e o fim de tarde; no inverno, as manhãs frias pedem aquecimento caprichado — e a ciclovia segue movimentada o ano inteiro, de casaco ou regata.',

  mobilidade:
    'A RS-239 conecta Campo Bom a Novo Hamburgo e Sapiranga, com acesso rápido à região metropolitana. Dentro da cidade, a bicicleta é protagonista real do deslocamento — herança da ciclovia pioneira — e as distâncias curtas favorecem treinar perto de casa.',

  corridas: [
    {
      nome: 'Provas de rua e pedais do Vale do Sinos',
      descricao:
        'O calendário regional mantém provas de corrida e eventos de ciclismo ao longo do ano, com a ciclovia local servindo de pista de treino permanente.',
    },
  ],
  culturaEsportiva:
    'Poucas cidades brasileiras têm a relação de Campo Bom com a bicicleta: pedalar é cultura de gerações, do operário que ia de bike à fábrica ao ciclista esportivo de hoje. Essa herança, somada ao Parcão e às academias, cria um ambiente onde o treino ao ar livre é parte natural da rotina.',
  academias:
    'A oferta reúne academias de musculação e funcional no Centro e nos bairros, com horários que atendem os turnos da indústria calçadista.',
  academiasProximas: [
    { nome: 'Academias do Centro e bairros', detalhe: 'musculação e funcional com horários de turno industrial' },
    { nome: 'Ciclovia pioneira', detalhe: 'cerca de 21 km de malha para pedal, corrida e caminhada' },
    { nome: 'Parcão (Parque Arno Kunz)', detalhe: 'área verde de referência integrada à ciclovia' },
  ],

  destaquesFitness: [
    'Primeira ciclovia da América Latina (1977), hoje com cerca de 21 km.',
    'Parcão como referência de lazer e treino ao ar livre do Vale do Sinos.',
    'Cultura da bicicleta enraizada em gerações de campo-bonenses.',
    'Horários de turno da indústria calçadista moldam a agenda de treino.',
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
    'Campo Bom prova há quase cinquenta anos que infraestrutura muda hábito: a ciclovia pioneira transformou a bicicleta em cultura, e o Parcão mantém a cidade em movimento. Um personal trainer aproveita essa base rara — pedal, corrida e força combinados — e encaixa o treino nos turnos da indústria, onde a constância decide o resultado.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Campo Bom?',
      resposta:
        'Nas academias do Centro e dos bairros — acostumadas aos horários de turno da indústria calçadista —, no Parcão (Parque Arno Kunz), na ciclovia de 21 km que corta a cidade e em casa. A malha cicloviária integrada permite montar treinos que combinam deslocamento e exercício: não é raro o aluno ir pedalando para a própria sessão.',
    },
    {
      pergunta: 'Dá para usar a ciclovia pioneira como treino de verdade?',
      resposta:
        'Dá — e ela foi feita para isso antes de virar símbolo. O anel central de 6 km serve para intervalados e voltas cronometradas; as ramificações até os bairros somam percursos de 15 a 21 km para rodagens longas de pedal ou corrida. Por ser separada do tráfego, é segura para treinar cedo ou à noite, nos horários de turno. O personal monta a progressão — distância, ritmo, força complementar em academia — e a estrutura faz o resto.',
    },
    {
      pergunta: 'Há acompanhamento em Campo Bom para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Campo Bom, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa, o Parcão ou a ciclovia), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['novo-hamburgo-rs', 'sapiranga-rs', 'sao-leopoldo-rs', 'taquara-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Bom', url: 'https://cidades.ibge.gov.br/brasil/rs/campo-bom/panorama' },
    { nome: 'Prefeitura de Campo Bom', url: 'https://www.campobom.rs.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
