import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araxa-mg',
  nome: 'Araxá',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'araxaense',
  tipo: 'cidade',

  populacao: 111691,
  populacaoAno: 2022,
  idhm: 0.772,
  idhmClasse: 'alto',
  altitudeM: 973,

  resumoEconomico:
    'Principal cidade do Alto Paranaíba, Araxá combina mineração de peso e turismo de águas termais. Abriga a CBMM, referência mundial na produção de nióbio, além de fertilizantes (mineração de fosfato), o que sustenta uma renda média acima da observada em boa parte do interior mineiro. O Complexo do Barreiro, com o Grande Hotel e as fontes termais, faz do turismo de saúde e bem-estar um segundo motor da economia local.',

  mercado:
    'A renda puxada pela mineração e o perfil de turismo de bem-estar sustentam uma demanda fitness consistente para uma cidade desse porte, com academias, estúdios e atendimento personalizado. O clima de altitude e o inverno seco favorecem o treino ao ar livre boa parte do ano.',

  bairrosNobres: ['Centro', 'São Geraldo', 'Jardim Alvorada', 'Santa Terezinha'],
  bairrosPopulares: ['Urciano Lemos', 'Pão de Açúcar', 'Vila Estância', 'Vila Silvéria'],

  parques: [
    {
      nome: 'Parque do Barreiro (Complexo do Barreiro)',
      descricao:
        'Cartão-postal de Araxá, reúne o Grande Hotel, as fontes de águas termais e sulfurosas e jardins assinados por Roberto Burle Marx, com amplas áreas verdes para caminhada e contemplação. Inclui a Fonte Andrade Júnior, ponto histórico do complexo.',
    },
    {
      nome: 'Parque do Cristo',
      descricao:
        'Área verde urbana junto ao monumento do Cristo, usada para caminhada e atividade ao ar livre com vista da cidade.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'O entorno do Centro concentra praças arborizadas e trechos de calçada usados no dia a dia para caminhada e treino leve.',
    },
  ],
  ciclovias:
    'A cidade possui trechos de ciclovia e ciclofaixa em vias urbanas; a extensão oficial total não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso e inverno seco e ameno, favorecido pela altitude em torno de 973 m na área central.',
  climaTreino:
    'A altitude e o inverno seco favorecem o treino ao ar livre, sobretudo no início da manhã; no verão, vale evitar o fim de tarde por causa das chuvas e reforçar a hidratação.',

  mobilidade:
    'Araxá é cortada pela BR-262, que liga Belo Horizonte ao Triângulo Mineiro, em posição estratégica no Alto Paranaíba, próxima de Uberaba e Uberlândia. A cidade conta ainda com aeroporto regional.',

  corridas: [
    {
      nome: 'Challenge do Barreiro',
      descricao:
        'Prova de rua com largada no Barreiro, em meio ao complexo termal e às áreas verdes, com percursos para diferentes níveis.',
    },
    {
      nome: 'Corrida e Caminhada SEST SENAT Araxá',
      descricao:
        'Evento de rua tradicional na cidade, com percursos de caminhada e corrida abertos à comunidade.',
    },
  ],
  culturaEsportiva:
    'Araxá tem adesão crescente à corrida de rua e bom uso das áreas verdes do Barreiro e do Centro, somando-se à cultura de bem-estar associada às águas termais.',
  academias:
    'A oferta reúne academias de bairro, estúdios e atendimento personalizado, complementada pelas amplas áreas verdes do Barreiro para treino ao ar livre.',

  destaquesFitness: [
    'Parque do Barreiro como principal espaço público para caminhada e treino ao ar livre.',
    'Cena de corrida de rua em crescimento, com provas como o Challenge do Barreiro.',
    'Renda acima da média do interior, puxada pela mineração, que sustenta a demanda fitness.',
    'Clima de altitude e inverno seco favoráveis ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 390,
  },

  conclusao:
    'Polo da mineração e do turismo de águas termais no Alto Paranaíba, Araxá tem clima de altitude favorável e boas áreas verdes, como o Barreiro. Um personal trainer ajuda a aproveitar esses espaços e a estruturar a rotina de treino com método, da caminhada à preparação para provas de rua.',

  vizinhas: ['uberaba-mg', 'uberlandia-mg', 'patos-de-minas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Araxá', url: 'https://cidades.ibge.gov.br/brasil/mg/araxa/panorama' },
    { nome: 'Prefeitura de Araxá', url: 'https://www.araxa.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
