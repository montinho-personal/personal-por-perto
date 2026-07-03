import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'concordia-sc',
  nome: 'Concórdia',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'concordiense',
  tipo: 'cidade',

  populacao: 81646,
  populacaoAno: 2022,
  idhm: 0.8,
  idhmClasse: 'muito alto',
  altitudeM: 569,

  resumoEconomico:
    'Polo agroindustrial do oeste catarinense, Concórdia é berço da Sadia, fundada por Attílio Fontana em 1944 e hoje parte da BRF, que mantém forte operação no município. A cidade abriga a Embrapa Suínos e Aves, referência nacional em pesquisa de proteína animal, às margens da BR-153. Colonizada por descendentes de italianos e alemães vindos do Rio Grande do Sul, tem economia baseada na cadeia de aves e suínos e IDHM muito alto.',

  mercado:
    'O mercado fitness acompanha o perfil de polo agroindustrial e centro regional de serviços do oeste: academias de bairro e estúdios no centro, além de demanda crescente por personal training presencial e atendimento domiciliar. O inverno frio reforça a procura por treino indoor.',

  bairrosNobres: ['Centro', 'Jardim', 'Nações', 'São Cristóvão'],
  bairrosPopulares: ['Petrópolis', 'Industriários', 'Natureza', 'Guilherme Reich'],

  parques: [
    {
      nome: 'Parque Municipal de Exposições Attílio Francisco Xavier Fontana',
      descricao:
        'Principal espaço de eventos da cidade, com trilha ecológica e áreas de lazer usadas por caminhantes e corredores; serve de largada para provas de rua e trail.',
    },
    {
      nome: 'Orla do Rio do Peixe',
      descricao:
        'O Rio do Peixe atravessa a região e suas margens oferecem trechos de caminhada e contato com a natureza no entorno urbano.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis e vias compartilhadas no entorno do centro; a extensão total da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, típico do oeste catarinense, com verões quentes (até cerca de 33 °C) e invernos frios, com mínimas próximas de 5 °C a 10 °C e ocorrência de geadas.',
  climaTreino:
    'No verão, vale priorizar manhã e fim de tarde, com boa hidratação; no inverno frio, o aquecimento prolongado e uma alternativa indoor ajudam a manter a regularidade dos treinos.',

  mobilidade:
    'A BR-153 é o eixo rodoviário que corta o município e conecta a região; nas proximidades dela fica a Embrapa Suínos e Aves. O deslocamento interno é predominantemente por carro e ônibus, com relevo ondulado típico do oeste.',

  corridas: [
    {
      nome: 'Concórdia Trail',
      descricao:
        'Prova de trail running realizada na cidade, explorando o relevo e as trilhas da região oeste catarinense.',
    },
    {
      nome: 'Circuito Unimed — etapa Concórdia',
      descricao:
        'Etapa concordiense de um circuito de corrida de rua, parte de um calendário esportivo regional ativo.',
    },
  ],
  culturaEsportiva:
    'A tradição de colonização italiana e alemã se reflete em festas e eventos comunitários, e a cidade mantém uma cena ativa de corrida de rua e trail, com provas que partem do Parque de Exposições. O esporte amador tem boa adesão, sustentado por clubes e associações locais.',
  academias:
    'A oferta combina academias de bairro e estúdios no centro, complementada por espaços públicos como o Parque de Exposições e as margens do Rio do Peixe para treino ao ar livre.',

  destaquesFitness: [
    'Cerca de 82 mil habitantes e IDHM muito alto — base sólida para serviços de bem-estar.',
    'Polo agroindustrial (berço da Sadia/BRF) e sede da Embrapa Suínos e Aves, com público qualificado.',
    'Parque de Exposições e orla do Rio do Peixe para caminhada, corrida e trail.',
    'Inverno frio do oeste catarinense aumenta a procura por academias indoor e atendimento domiciliar.',
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
    'Polo agroindustrial do oeste catarinense, com IDHM muito alto e identidade ligada à Sadia e à Embrapa Suínos e Aves, Concórdia reúne público qualificado e boa estrutura para treinar o ano todo. Um personal trainer ajuda a periodizar o treino conforme as estações — do verão quente ao inverno frio — e a aproveitar espaços como o Parque de Exposições e a orla do Rio do Peixe.',

  vizinhas: ['chapeco-sc', 'xanxere-sc', 'videira-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Concórdia', url: 'https://cidades.ibge.gov.br/brasil/sc/concordia/panorama' },
    { nome: 'Atlas Brasil — Concórdia', url: 'https://www.atlasbrasil.org.br/perfil/municipio/420430' },
    { nome: 'Embrapa Suínos e Aves', url: 'https://www.embrapa.br/suinos-e-aves' },
  ],
  atualizadoEm: '2026-07-03',
};
