import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mineiros-go',
  nome: 'Mineiros',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'mineirense',
  tipo: 'cidade',

  populacao: 70081,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 760,

  resumoEconomico:
    'No sudoeste goiano, Mineiros é um polo agroindustrial consolidado, com a economia ancorada na produção de grãos (soja e milho), na pecuária e no processamento de proteína animal. A cidade abriga unidades de grandes indústrias de alimentos, como BRF e Marfrig, e dois distritos agroindustriais (DAIM I e II). Esse dinamismo do agronegócio sustenta a renda local e impulsiona o setor de serviços, incluindo o mercado fitness.',

  mercado:
    'O mercado de personal trainers acompanha o porte de cidade média e próspera do agronegócio, com academias concentradas no Centro e nas regiões mais valorizadas e procura crescente por treino ao ar livre. A presença de instituições de ensino superior, como a UNIFIMES e o câmpus da UEG, mantém uma população jovem e ativa que movimenta a demanda por acompanhamento físico.',

  bairrosNobres: ['Centro', 'Setor Aeroporto', 'Setor Oeste', 'Residencial das Brisas'],
  bairrosPopulares: ['Setor Sul', 'Setor Santos Dumont', 'Vila Mariana', 'Setor Pampulha'],

  parques: [
    {
      nome: 'Parque Nacional das Emas',
      descricao:
        'Patrimônio Mundial Natural reconhecido pela UNESCO, com a maior parte de sua área no município de Mineiros. Uma das mais importantes reservas de Cerrado preservado do país, é referência regional para ecoturismo, trilhas e contato com a natureza.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade distribui praças com equipamentos de ginástica e pista de caminhada pelos setores, ampliando o acesso público ao treino próximo de casa.',
    },
  ],
  ciclovias:
    'A cidade conta com vias e avenidas usadas por ciclistas no dia a dia; a extensão exata da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de Cerrado (Aw), típico do sudoeste goiano, com duas estações bem marcadas: verão chuvoso e quente, de outubro a abril, e estação seca de inverno, de maio a setembro, com baixa umidade do ar e amplitude térmica acentuada. A altitude elevada, na Serra dos Caiapós, ameniza um pouco as temperaturas em relação a outras cidades do interior.',
  climaTreino:
    'Na estação seca, a baixa umidade exige atenção redobrada à hidratação e, em treinos ao ar livre, dar preferência ao começo da manhã e ao fim da tarde. No verão, o calor e as chuvas de fim de dia pedem flexibilidade no horário.',

  mobilidade:
    'Mineiros é cortada pela BR-364, principal eixo rodoviário que liga o sudoeste goiano ao Triângulo Mineiro e ao Centro-Oeste, posicionando a cidade como entreposto logístico do agronegócio na divisa com Mato Grosso e Mato Grosso do Sul.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de rua promovidas por grupos de corrida, comércio e iniciativas esportivas, parte de uma cena ativa de caminhada e corrida nos setores residenciais.',
    },
    {
      nome: 'Eventos esportivos da Expomineiros',
      descricao:
        'No calendário da tradicional exposição agropecuária da cidade, atividades esportivas e de lazer reúnem a comunidade em torno do esporte.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mineirense combina o uso das praças e pistas de caminhada dos setores com a presença marcante do Cerrado preservado nos arredores, que atrai praticantes de trilha e atividades ao ar livre. A população jovem ligada às universidades reforça a adesão a academias e ao treino regular.',
  academias:
    'A oferta de academias se concentra no Centro e nos setores de maior valorização, complementada pelas academias ao ar livre das praças e pelas pistas de caminhada espalhadas pela cidade.',

  destaquesFitness: [
    'Proximidade do Parque Nacional das Emas, Patrimônio Mundial da UNESCO e referência em ecoturismo no Cerrado.',
    'Altitude elevada na Serra dos Caiapós, que ameniza o calor em relação a outras cidades do interior goiano.',
    'Praças com academia ao ar livre e pistas de caminhada distribuídas pelos setores.',
    'Mercado fitness sustentado pelo polo agroindustrial e pela população jovem das universidades.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Polo agroindustrial do sudoeste goiano e porta de entrada do Parque Nacional das Emas, Mineiros une prosperidade econômica, altitude favorável e forte ligação com o Cerrado. Um personal trainer ajuda a montar uma rotina que respeite a estação seca e a amplitude térmica da região e a aproveitar com método as praças, as pistas de caminhada e a natureza ao redor.',

  vizinhas: ['rio-verde-go', 'jatai-go'],

  fontes: [
    { nome: 'IBGE Cidades — Mineiros', url: 'https://cidades.ibge.gov.br/brasil/go/mineiros/panorama' },
    { nome: 'Prefeitura de Mineiros', url: 'https://www.mineiros.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
