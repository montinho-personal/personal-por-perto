import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ji-parana-ro',
  nome: 'Ji-Paraná',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'jiparanaense',
  tipo: 'cidade',

  populacao: 124333,
  populacaoAno: 2022,
  idhm: 0.714,
  idhmClasse: 'alto',

  resumoEconomico:
    'Segunda maior cidade de Rondônia e centro geográfico do estado ("Coração de Rondônia"), às margens do Rio Machado, Ji-Paraná é forte polo de comércio e de agropecuária (soja, milho e gado). Sedia a Rondônia Rural Show Internacional, a maior feira do agronegócio do estado.',

  mercado:
    'A economia aquecida pelo agro e pelo comércio sustenta um mercado de academias e estúdios em expansão; a forte cena de corridas de rua puxa a demanda por assessorias esportivas.',

  bairrosNobres: ['Urupá', 'Nova Brasília', 'Casa Preta', 'Dois de Abril'],
  bairrosPopulares: ['BNH', 'Jardim dos Migrantes', 'São Pedro', 'Nova Brasília'],

  parques: [
    {
      nome: 'Parque Ecológico Municipal',
      descricao:
        'Tem trilha e pista de caminhada de cerca de 2.050 m, anfiteatro e estacionamento — ideal para exercício.',
    },
    {
      nome: 'Parque Paineiras',
      descricao:
        'Área criada com a revitalização do Córrego Pintado, para lazer e atividade ao ar livre.',
    },
    {
      nome: 'Orla do Rio Machado (Marco Zero)',
      descricao:
        'Área central junto ao rio, referência de eventos e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'Programas estaduais criaram praças e parques com ciclovias e pistas de caminhada; a malha cicloviária consolidada ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é equatorial/tropical úmido amazônico, quente e úmido o ano todo, com estação chuvosa intensa.',
  climaTreino:
    'O calor e a alta umidade reduzem a evaporação do suor, pedindo treino cedo, em locais ventilados e sombreados, com hidratação reforçada.',

  mobilidade:
    'Ji-Paraná é cortada pela BR-364, principal eixo de Rondônia (Porto Velho–Cuiabá), reforçando seu papel de centro logístico do estado.',

  corridas: [
    {
      nome: 'JIPA City Marathon',
      descricao:
        'A maior corrida de Rondônia, com provas de 5 km, 10 km, 21 km e 42 km — a única maratona completa da região.',
    },
    {
      nome: 'Corrida Internacional Marco Zero',
      descricao:
        'Prova de 10 km pelas principais avenidas, com elite nacional e internacional.',
    },
  ],
  culturaEsportiva:
    'A cena de corrida de rua está em forte crescimento (com a única maratona completa de 42 km da região) e a cultura local é ligada ao agro e a eventos de grande porte como a Rural Show.',
  academias:
    'A oferta de academias e estúdios está em expansão, com economia aquecida pelo agro, complementada pelo Parque Ecológico e pela orla do Rio Machado.',

  destaquesFitness: [
    'Única maratona completa (42 km) da região — JIPA City.',
    'Parque Ecológico com pista de cerca de 2 km para corrida e caminhada.',
    'Orla do Rio Machado como cartão-postal para treino outdoor.',
    'Economia do agro aquecida, que sustenta o crescimento do setor fitness.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Coração de Rondônia, Ji-Paraná une a economia do agro a uma cena de corrida em ascensão, com a única maratona completa da região. Um personal trainer ajuda a aproveitar o Parque Ecológico e a orla do Rio Machado com método, ajustando o treino ao calor amazônico.',

  vizinhas: ['porto-velho-ro'],

  fontes: [
    { nome: 'IBGE Cidades — Ji-Paraná', url: 'https://cidades.ibge.gov.br/brasil/ro/ji-parana/panorama' },
    { nome: 'Prefeitura de Ji-Paraná', url: 'https://www.ji-parana.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
