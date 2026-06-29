import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cachoeiro-de-itapemirim-es',
  nome: 'Cachoeiro de Itapemirim',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'cachoeirense',
  tipo: 'cidade',

  populacao: 185786,
  populacaoAno: 2022,
  idhm: 0.746,
  idhmClasse: 'alto',

  resumoEconomico:
    'Principal polo regional do sul do Espírito Santo, às margens do Rio Itapemirim, Cachoeiro de Itapemirim é a "Capital Nacional do Mármore e Granito" — centro internacional de extração e beneficiamento de rochas ornamentais, responsável por boa parte do mercado brasileiro. É também polo de comércio, serviços e saúde para a região sul capixaba.',

  mercado:
    'Cidade-polo, tem boa oferta de academias e estúdios, sugerindo um mercado consolidado de musculação e serviços fitness, com base de clientes vinda também das cidades vizinhas.',

  bairrosNobres: ['Gilberto Machado', 'Independência', 'Guandu', 'Ibitiquara'],
  bairrosPopulares: ['Aquidaban', 'Coramara', 'Jardim Itapemirim', 'Jardim América'],

  parques: [
    {
      nome: 'Avenida Beira-Rio (orla do Rio Itapemirim)',
      descricao:
        'Cartão-postal e principal eixo de lazer e caminhada às margens do rio, ponto de partida de corridas.',
    },
    {
      nome: 'Praça de Fátima',
      descricao:
        'Na Beira-Rio, tem academia ao ar livre, pista de skate, playground e áreas de descanso.',
    },
    {
      nome: 'Parque Natural Municipal do Itabira',
      descricao:
        'Monumento natural a cerca de 700 m de altitude, com trekking, mountain bike e montanhismo.',
    },
  ],
  ciclovias:
    'A Avenida Beira-Rio funciona como eixo de caminhada e corrida; a existência e a extensão de ciclovia estruturada ainda não são divulgadas em fonte oficial.',

  clima:
    'O clima é tropical e quente, com média anual em torno de 24 °C, verões chuvosos e invernos secos — historicamente uma das cidades mais quentes do Espírito Santo.',
  climaTreino:
    'O calor elevado recomenda treinos ao ar livre no início da manhã ou no fim de tarde, com atenção redobrada à hidratação.',

  mobilidade:
    'Cachoeiro é atendida pela BR-101 (eixo litorâneo norte-sul) e pela BR-482, que liga a cidade a Vitória e ao interior.',

  corridas: [
    {
      nome: 'Corrida de São Pedro',
      descricao:
        'Tradicional prova da Festa de São Pedro, com 5 km, 10 km e kids, e largada na Praça de Fátima.',
    },
    {
      nome: 'Corrida de Santa Rita',
      descricao:
        'Prova de 6 km no trecho Aracuí–Conduru, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte tradição futebolística (com o Estrela do Norte FC) e calendário ativo de corridas de rua organizado pela prefeitura e pela liga desportiva local.',
  academias:
    'A oferta reúne redes e academias locais consolidadas, complementada pela orla da Beira-Rio e pelo Parque do Itabira para o treino ao ar livre.',

  destaquesFitness: [
    'Orla da Avenida Beira-Rio (Rio Itapemirim) — principal palco de caminhada, corrida e eventos.',
    'Praça de Fátima com academia ao ar livre, hub de provas de rua.',
    'Parque do Itabira para trekking, mountain bike e treino em trilha.',
    'Mercado de academias consolidado, exigindo planejamento de horário pelo calor.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital do Mármore e Granito e polo do sul capixaba, Cachoeiro de Itapemirim tem orla movimentada e o Parque do Itabira. Um personal trainer ajuda a aproveitar a Beira-Rio com método, ajustando horários e hidratação ao calor da região.',

  vizinhas: ['vitoria-es', 'vila-velha-es', 'cariacica-es'],

  fontes: [
    { nome: 'IBGE Cidades — Cachoeiro de Itapemirim', url: 'https://cidades.ibge.gov.br/brasil/es/cachoeiro-de-itapemirim/panorama' },
    { nome: 'Prefeitura de Cachoeiro de Itapemirim', url: 'https://www.cachoeiro.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
