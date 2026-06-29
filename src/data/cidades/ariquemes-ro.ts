import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ariquemes-ro',
  nome: 'Ariquemes',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'ariquemense',
  tipo: 'cidade',

  populacao: 96833,
  populacaoAno: 2022,
  idhm: 0.702,
  idhmClasse: 'alto',
  altitudeM: 142,

  resumoEconomico:
    'Terceira cidade mais populosa de Rondônia e principal polo do Vale do Jamari, Ariquemes tem economia baseada em serviços, comércio e agropecuária. A pecuária leiteira e a piscicultura ganharam destaque na região, que se firmou como uma das maiores produtoras de tambaqui do estado. A cidade nasceu ligada ao garimpo de cassiterita nos anos 1950 e 1960 e hoje se consolidou como centro regional de uma área que deu origem a vários municípios rondonienses.',

  mercado:
    'A musculação é o eixo do mercado fitness local, com academias distribuídas pelos setores centrais e pelas avenidas de maior movimento, além de estúdios de menor porte. O calor e a umidade favorecem também o treino ao ar livre nas praças e parques nos horários mais amenos, o que abre espaço para o trabalho de personal trainers fora da academia.',

  bairrosNobres: ['Setor 01', 'Setor 02', 'Jardim Paulista', 'Parque das Gemas'],
  bairrosPopulares: ['Marechal Rondon', 'Setor 10', 'Jardim Jorge Teixeira', 'Bom Jesus'],

  parques: [
    {
      nome: 'Parque do Açaí',
      descricao:
        'Espaço de lazer no Setor 02 com pista de caminhada, ciclovia no perímetro, academia ao ar livre, quadras e campo, um dos principais pontos públicos para atividade física na cidade.',
    },
    {
      nome: 'Praça do Lago',
      descricao:
        'Praça urbana com área verde e espelho d’água, usada para caminhada, lazer e encontros, em ambiente arborizado no centro da cidade.',
    },
    {
      nome: 'Balneários do rio Jamari',
      descricao:
        'Trechos do rio Jamari, que cerca a cidade, com cachoeiras e corredeiras rasas sobre as pedras, procurados para banho e lazer ao ar livre nos fins de semana.',
    },
  ],
  ciclovias:
    'O Parque do Açaí conta com ciclovia em seu perímetro, complementando o lazer e a mobilidade ativa pelos setores próximos.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com temperaturas médias elevadas e uma estação chuvosa intensa entre outubro e abril, seguida de um período mais seco no meio do ano.',
  climaTreino:
    'O treino ao ar livre rende mais no começo da manhã ou no fim da tarde, quando o calor cede um pouco; a umidade alta exige hidratação reforçada durante praticamente todo o ano.',

  mobilidade:
    'O principal eixo de acesso é a BR-364, que liga Ariquemes a Porto Velho, ao norte, e a Ji-Paraná e Cuiabá, ao sul, cortando a cidade e organizando boa parte do deslocamento regional. O transporte interno é predominantemente por veículo próprio e ônibus.',

  corridas: [
    {
      nome: 'Corrida de aniversário de Ariquemes',
      descricao:
        'Prova de rua ligada às comemorações de aniversário do município, com percursos de caminhada e corrida pelas avenidas centrais.',
    },
    {
      nome: 'Provas do calendário regional do Vale do Jamari',
      descricao:
        'Corridas de rua e eventos esportivos organizados ao longo do ano na região, reunindo participantes de Ariquemes e municípios vizinhos.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte tradição em esportes de quadra e campo, com ginásios e quadras em vários setores, e vem ampliando a procura por corrida de rua e treino funcional ao ar livre, impulsionada por praças e parques requalificados.',
  academias:
    'A oferta combina academias de bairro nos setores centrais e ao longo das principais avenidas com estúdios menores de musculação e funcional, complementadas pela estrutura pública do Parque do Açaí e das praças.',

  destaquesFitness: [
    'Parque do Açaí como hub de caminhada, ciclismo e treino ao ar livre.',
    'Balneários do rio Jamari para lazer ativo nos fins de semana.',
    'Rede de academias de bairro nos setores centrais e nas avenidas.',
    'Cultura esportiva ligada a quadras, campos e corridas regionais.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 660,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Polo do Vale do Jamari em crescimento, Ariquemes reúne academias de bairro, praças requalificadas e a natureza do rio Jamari por perto. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e aproveite bem o Parque do Açaí e os espaços ao ar livre da cidade.',

  vizinhas: ['porto-velho-ro', 'ji-parana-ro'],

  fontes: [
    { nome: 'IBGE Cidades — Ariquemes', url: 'https://cidades.ibge.gov.br/brasil/ro/ariquemes/panorama' },
    { nome: 'Prefeitura de Ariquemes', url: 'https://ariquemes.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
