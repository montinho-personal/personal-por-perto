import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'confins-mg',
  nome: 'Confins',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'confinense',
  tipo: 'cidade',

  populacao: 7350,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  pibPerCapita: 220002,
  pibPerCapitaAno: 2023,
  altitudeM: 767,

  resumoEconomico:
    'Emancipada de Lagoa Santa em 1997, Confins é a menor cidade da Região Metropolitana de Belo Horizonte em população, mas concentra uma das maiores rendas per capita do país: em 2023 o PIB per capita chegou a cerca de R$ 220 mil, puxado quase inteiramente pelo Aeroporto Internacional Tancredo Neves, que o município divide com a vizinha Lagoa Santa. O terminal, inaugurado em 1984, é hoje o quinto do Brasil em movimento de cargas e passageiros e passou a operar também como aeroporto industrial dentro do projeto Aerotrópole Mineira, atraindo empresas de logística e manufatura voltadas à exportação. Fora do polo aeroportuário, a economia local ainda guarda traços rurais e do passado de pouso de tropeiros e bandeirantes que deu origem ao nome da cidade.',

  mercado:
    'O mercado de personal trainers em Confins é pequeno e pouco pulverizado, refletindo o porte do município: a demanda vem de moradores de condomínios e loteamentos que cresceram no entorno do aeroporto, de profissionais ligados à aviação e à logística com rotina de horários variáveis, e de quem busca treinar perto de casa sem se deslocar até Lagoa Santa ou Belo Horizonte. O perfil de renda elevada da cidade favorece o atendimento presencial domiciliar e em condomínios fechados, enquanto o acompanhamento online é uma opção natural para quem viaja com frequência por causa do aeroporto.',

  bairrosNobres: ['Centro', 'Doutor Lund', 'Aeroporto', 'Tavares'],
  bairrosPopulares: ['Várzea Bonita', 'Lagoa dos Mares', 'São José', 'Cachoeira Grande'],

  parques: [
    {
      nome: 'Balneário Lagoa dos Mares',
      descricao:
        'Lagoa cárstica que dá nome ao bairro, dentro da APA Carste de Lagoa Santa, com pista de caminhada plana e arborizada projetada à margem d\'água — ponto de referência para caminhada e corrida ao ar livre no município.',
    },
    {
      nome: 'APA Carste de Lagoa Santa (porção de Confins)',
      descricao:
        'Confins integra por inteiro a Área de Proteção Ambiental Carste de Lagoa Santa, uma das regiões de maior concentração de grutas e lagoas cársticas do Brasil, com relevo de dolinas e cavidades que também abrange Lagoa Santa, Pedro Leopoldo e Matozinhos.',
    },
    {
      nome: 'Entorno rural e estradas vicinais',
      descricao:
        'Fora da área urbana e do polo aeroportuário, o município ainda mantém trechos rurais com estradas de terra e vicinais usadas para caminhada, corrida leve e pedal em meio a paisagem aberta.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal é limitada; o pedal e a caminhada acontecem principalmente nas vias do Centro, no entorno da Lagoa dos Mares e nas estradas vicinais que cortam a zona rural do município.',

  clima:
    'O clima é tropical de altitude, com verão chuvoso (outubro a março) e inverno seco e ameno, típico da Região Metropolitana de Belo Horizonte. A altitude de cerca de 767 metros suaviza as temperaturas máximas, e o inverno costuma trazer baixa umidade do ar.',
  climaTreino:
    'As manhãs e o fim de tarde são as janelas mais confortáveis para treinar ao ar livre, especialmente no verão chuvoso. No inverno seco, o tempo estável favorece a atividade externa, mas a baixa umidade pede reforço na hidratação.',

  mobilidade:
    'O acesso a partir de Belo Horizonte é feito pela Linha Verde e pela MG-010, eixo que liga a capital ao Aeroporto Internacional de Confins e segue até Lagoa Santa; a MG-424 também dá acesso ao município. O aeroporto é o principal gerador de fluxo viário da região, e o deslocamento interno depende majoritariamente de veículo próprio, dado o porte pequeno da malha urbana.',

  corridas: [
    {
      nome: 'Santander Track&Field BH Airport',
      descricao:
        'Corrida noturna que transforma a pista e o pátio do Aeroporto Internacional de Confins em percurso de 5 km e 10 km, com largada por volta das 2h da madrugada, horário sem pousos e decolagens — uma das provas mais inusitadas do calendário de corrida de rua de Minas Gerais.',
    },
  ],
  culturaEsportiva:
    'Pequena e ligada ao dia a dia do aeroporto, a cultura esportiva de Confins tem na Lagoa dos Mares e no entorno rural seus principais espaços de caminhada e corrida, e ganha um capítulo à parte com a corrida noturna que leva atletas a correr na pista de pouso do Tancredo Neves.',
  academias:
    'A oferta de academias e estúdios é modesta e concentrada no Centro, compatível com o pequeno porte populacional do município; parte da demanda por treino estruturado acaba se apoiando em profissionais e estruturas das cidades vizinhas, como Lagoa Santa.',

  destaquesFitness: [
    'Uma das maiores rendas per capita do Brasil, puxada pelo Aeroporto Internacional Tancredo Neves.',
    'Balneário Lagoa dos Mares, lagoa cárstica com pista de caminhada à beira d\'água.',
    'Corrida noturna Santander Track&Field BH Airport, disputada na pista do aeroporto.',
    'Município inteiro dentro da APA Carste de Lagoa Santa, região de grutas e relevo cárstico.',
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
    'Pequena, rica e organizada em torno do aeroporto, Confins combina rotinas de horário irregular com espaços simples de treino ao ar livre, como a Lagoa dos Mares e o entorno rural do carste. Um personal trainer ajuda a estruturar uma rotina consistente nesse contexto, seja em atendimento domiciliar, presencial ou online, para quem viaja com frequência.',

  vizinhas: ['lagoa-santa-mg', 'vespasiano-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Confins', url: 'https://cidades.ibge.gov.br/brasil/mg/confins/panorama' },
    { nome: 'Prefeitura de Confins', url: 'https://www.confins.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
