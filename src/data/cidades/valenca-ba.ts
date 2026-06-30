import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'valenca-ba',
  nome: 'Valença',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'valenciano',
  tipo: 'cidade',

  populacao: 85655,
  populacaoAno: 2022,
  idhm: 0.623,
  idhmClasse: 'médio',
  altitudeM: 4,

  resumoEconomico:
    'Valença é o principal polo urbano do Baixo Sul baiano, na Costa do Dendê, às margens do rio Una. A economia gira em torno do turismo — a cidade é a porta de entrada para a Ilha de Tinharé (Morro de São Paulo) e para Boipeba —, da pesca e da mariscagem, do comércio e dos serviços que atendem toda a microrregião, além de atividades ligadas à agricultura (dendê, cacau, mandioca) e à construção naval artesanal de saveiros, tradição histórica da cidade.',

  mercado:
    'A oferta de academias e estúdios se concentra no Centro e nos bairros de classe média, com presença crescente de treino funcional e personal trainers que atendem também moradores de praia e veranistas. Como cidade-base do turismo da região, há demanda sazonal aquecida no verão e em feriados, quando cresce a procura por treino na orla do Guaibim e por acompanhamento de quem chega de fora.',

  bairrosNobres: ['Centro', 'Maricoabo', 'Guaibim', 'Tento'],
  bairrosPopulares: ['Bate-Quente', 'Bolívia', 'Jambeiro', 'Gereba'],

  parques: [
    {
      nome: 'Orla e Cais de Valença (rio Una)',
      descricao:
        'A orla fluvial, junto ao porto e ao mercado de peixe, é o cartão-postal da cidade e ponto natural de caminhada e corrida no fim de tarde, com vista para os saveiros e para o movimento das embarcações que partem para Morro de São Paulo.',
    },
    {
      nome: 'Praia do Guaibim',
      descricao:
        'A cerca de 17 km do centro, é a principal praia do município, com longa faixa de areia, coqueirais e ondas que recebem etapas de surfe. Mantém o ar de vila de pescadores e oferece quilômetros de areia firme para caminhada, corrida e treino ao ar livre.',
    },
    {
      nome: 'Praias de Guaibinzinho e Taquari',
      descricao:
        'Trechos mais tranquilos da orla do município, próximos ao Guaibim, com águas calmas e ambiente preservado — boas para atividades de baixo impacto e treinos na areia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e a bicicleta é muito usada como transporte no dia a dia da cidade plana; pedalar pela orla e pelos acessos ao Guaibim é prática comum entre moradores.',

  clima:
    'O clima é tropical litorâneo do sul baiano, quente e úmido o ano todo, com chuvas bem distribuídas e maior volume no outono e no inverno, sob forte influência do mar.',
  climaTreino:
    'Com calor e umidade altos, o treino ao ar livre rende mais no começo da manhã e no fim da tarde, com hidratação reforçada — a brisa do mar e a sombra dos coqueirais na orla ajudam nos horários mais quentes.',

  mobilidade:
    'O acesso rodoviário se dá pela BA-001 (estrada do litoral, ligando a região via Nazaré e à Ilha de Itaparica) e pela conexão com a BR-101, principal eixo no sentido Salvador (cerca de 270 km por terra). A cidade é a base de embarque por catamarãs e lanchas para Morro de São Paulo e Boipeba, e o deslocamento urbano é feito por carro, moto, mototáxi e bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua na orla',
      descricao:
        'A orla fluvial e o trajeto até o Guaibim concentram a prática de corrida de rua da cidade, com provas e eventos esportivos pontuais ligados ao calendário municipal.',
    },
    {
      nome: 'Travessias e provas aquáticas no verão',
      descricao:
        'No verão e em feriados, a vocação náutica e praiana da região favorece eventos de natação em águas abertas e atividades esportivas na praia.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva valenciana mistura o futebol de campo e de areia, a vocação náutica ligada aos saveiros e à pesca, e o surfe nas ondas do Guaibim. A vida ao ar livre na orla e nas praias é parte do cotidiano, o que aproxima os moradores da atividade física.',
  academias:
    'A oferta de academias e estúdios é compatível com o porte de cidade média do interior litorâneo, concentrada no Centro e nos bairros de classe média, e complementada pelos espaços abertos da orla e das praias para quem prefere treinar ao ar livre.',

  destaquesFitness: [
    'Porta de entrada para Morro de São Paulo e Boipeba, com demanda turística sazonal aquecida.',
    'Orla do rio Una e praia do Guaibim como cenários naturais para caminhada, corrida e treino na areia.',
    'Clima quente e úmido do litoral sul baiano, que exige planejamento de horário e hidratação.',
    'Cidade plana e praiana, favorável à corrida, ao ciclismo urbano e às atividades aquáticas.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo do Baixo Sul baiano e porta de entrada para Morro de São Paulo, Valença reúne orla, praias e clima litorâneo que convidam ao treino ao ar livre o ano inteiro. Um personal trainer ajuda a aproveitar esse cenário com método, respeitando o calor e a umidade da região e o objetivo de cada pessoa.',

  vizinhas: ['feira-de-santana-ba', 'itabuna-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Valença', url: 'https://cidades.ibge.gov.br/brasil/ba/valenca/panorama' },
    { nome: 'Prefeitura de Valença', url: 'https://www.valenca.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
