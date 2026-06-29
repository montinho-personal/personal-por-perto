import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tubarao-sc',
  nome: 'Tubarão',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'tubaronense',
  tipo: 'cidade',

  populacao: 110088,
  populacaoAno: 2022,
  idhm: 0.796,
  idhmClasse: 'alto',
  altitudeM: 9,

  resumoEconomico:
    'Cortada pelo Rio Tubarão, no sul catarinense, a cidade nasceu ligada à ferrovia e ao carvão — a Estrada de Ferro Dona Teresa Cristina, de 1884, foi decisiva para seu crescimento. Hoje é polo regional de comércio, serviços, saúde e educação, com a indústria cerâmica e o turismo entre os destaques.',

  mercado:
    'Como polo regional do sul de SC, Tubarão concentra atendimento e serviços de uma ampla microrregião. Isso sustenta uma rede de academias, estúdios e personal trainers, com forte procura também pelo atendimento domiciliar entre quem busca conveniência e acompanhamento individual.',

  bairrosNobres: ['Centro', 'Dehon', 'Jardim América', 'São João'],
  bairrosPopulares: ['Oficinas', 'Humaitá', 'Vila Moema', 'São Cristóvão'],

  parques: [
    {
      nome: 'Orla do Rio Tubarão (Beira-Rio)',
      descricao:
        'As avenidas beira-rio, como a Marcolino Martins Cabral, têm ciclovia e calçadão à margem do rio — o principal corredor de caminhada, corrida e pedal da cidade.',
    },
    {
      nome: 'Museu Ferroviário de Tubarão',
      descricao:
        'Um dos maiores acervos ferroviários da América Latina, com locomotivas a vapor históricas; o entorno e a memória da ferrovia marcam a paisagem urbana.',
    },
  ],
  ciclovias:
    'Há ciclovia ao longo das vias beira-rio (Avenida Marcolino Martins Cabral e adjacências), usada para lazer e deslocamento; a extensão total da malha não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios; a baixa altitude (cerca de 9 m) e a proximidade do litoral deixam o ar úmido o ano todo.',
  climaTreino:
    'O inverno é confortável para treino ao ar livre; no verão, vale priorizar a manhã ou o fim de tarde e reforçar a hidratação por causa do calor e da umidade.',

  mobilidade:
    'A BR-101 passa a leste do município e é o eixo de ligação com o restante do litoral catarinense; o acesso interno se organiza em torno do Rio Tubarão e das avenidas beira-rio.',

  corridas: [
    {
      nome: 'Calendário de corridas de rua',
      descricao:
        'A cidade recebe corridas de rua e provas regionais ao longo do ano, com a orla do Rio Tubarão como cenário frequente de treinos e largadas.',
    },
  ],
  culturaEsportiva:
    'A vida ao ar livre gira muito em torno do Rio Tubarão e das vias beira-rio, usadas para caminhada, corrida e pedal. A herança ferroviária — celebrada no Museu Ferroviário e no passeio "Trem da História", em locomotivas a vapor (maria-fumaça) — faz parte da identidade local.',
  academias:
    'A oferta reúne academias, estúdios e personal trainers, sustentada pela condição de polo regional e pela presença universitária (a UNISUL tem campus na cidade). O atendimento domiciliar complementa bem essa rede.',

  destaquesFitness: [
    'Cidade de IDHM alto e polo regional do sul de SC.',
    'Orla do Rio Tubarão com ciclovia e calçadão para treino ao ar livre.',
    'Presença universitária (UNISUL) e público jovem na cidade.',
    'Termas e praias próximas (Termas da Guarda; Guarda do Embaú, na região) ampliam as opções de atividade ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Polo regional de IDHM alto no sul catarinense, Tubarão une vida à beira do Rio Tubarão, herança ferroviária e boa infraestrutura de serviços. Um personal trainer ajuda a aproveitar a orla e a ciclovia beira-rio e a manter a rotina, seja na academia ou no atendimento domiciliar.',

  vizinhas: ['criciuma-sc', 'florianopolis-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Tubarão', url: 'https://cidades.ibge.gov.br/brasil/sc/tubarao/panorama' },
    { nome: 'Prefeitura de Tubarão', url: 'https://tubarao.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
