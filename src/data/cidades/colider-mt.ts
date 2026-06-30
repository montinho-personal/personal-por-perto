import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'colider-mt',
  nome: 'Colíder',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'colidense',
  tipo: 'cidade',

  populacao: 31370,
  populacaoAno: 2022,
  idhm: 0.713,
  idhmClasse: 'alto',
  altitudeM: 280,

  resumoEconomico:
    'Colíder é uma das principais cidades do norte de Mato Grosso, surgida na colonização da região na década de 1970 — o nome vem de "Colonizadora Líder". A economia gira em torno do agronegócio e, sobretudo, da pecuária, com um rebanho bovino expressivo que sustenta uma cadeia de laticínios, frigoríficos, curtume e fábricas de ração. A cidade também é referência regional de comércio e serviços para os municípios vizinhos, e abriga, no rio Teles Pires, a Usina Hidrelétrica de Colíder, que reforça a vocação logística e produtiva do polo.',

  mercado:
    'Como cidade média que funciona como polo de uma microrregião agropecuária, Colíder tem um mercado fitness em formação, apoiado em academias locais de musculação e treino funcional. A procura por personal trainers aparece principalmente entre quem busca acompanhamento individualizado para conciliar o treino com a rotina ligada ao campo e ao comércio, e entre os que querem aproveitar as praças e o entorno arborizado para atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Setor Leste', 'Jardim Vitória', 'Setor Oeste'],
  bairrosPopulares: ['Nossa Senhora da Guia', 'Setor Norte', 'Jardim Brasília', 'Vila Operária'],

  parques: [
    {
      nome: 'Praça da Bíblia',
      descricao:
        'Um dos principais espaços públicos de convivência do Centro, com áreas arborizadas e calçadas usadas para caminhada, alongamento e encontros de quem treina ao ar livre no começo e no fim do dia.',
    },
    {
      nome: 'Praças e canteiros do Centro',
      descricao:
        'O traçado planejado da colonização deixou praças e largos espalhados pela área central, que funcionam como pontos de caminhada e atividade física leve, especialmente nos horários mais amenos.',
    },
    {
      nome: 'Entorno do rio Teles Pires',
      descricao:
        'O rio Teles Pires, onde fica a Usina Hidrelétrica de Colíder, marca a paisagem da região; as estradas e áreas rurais de acesso oferecem percursos para corrida e pedal em meio à natureza do norte mato-grossense.',
    },
  ],
  ciclovias:
    'A malha cicloviária é incipiente e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas largas do traçado planejado da cidade e nas vias de menor movimento dos setores residenciais.',

  clima:
    'O clima é equatorial quente e úmido, típico do norte de Mato Grosso, com calor ao longo de quase todo o ano. As chuvas se concentram no verão (com pico em janeiro e fevereiro) e há um período de seca acentuada entre junho e agosto, quando o ar fica mais seco e as temperaturas, mais estáveis.',
  climaTreino:
    'O calor e a umidade pedem treinos no início da manhã ou no fim da tarde, com hidratação reforçada; nos dias mais quentes e abafados, ambientes climatizados são a opção mais segura, enquanto o período de seca tende a favorecer as atividades ao ar livre.',

  mobilidade:
    'Colíder ocupa posição estratégica no norte do estado, ligada ao eixo da BR-163 e servida pela MT-320, que conecta a região a Alta Floresta e aos municípios vizinhos. O transporte interno é feito principalmente por carro e moto, em um traçado urbano planejado de ruas e avenidas largas, e a cidade funciona como entroncamento de cargas do agronegócio regional.',

  corridas: [
    {
      nome: 'Corrida Homens do Fogo de Colíder',
      descricao:
        'Prova de rua promovida em parceria com o Corpo de Bombeiros, com percurso de 5K nas categorias corrida e caminhada, já consolidada no calendário esportivo da cidade.',
    },
    {
      nome: 'Corrida e Caminhada de Aniversário de Colíder',
      descricao:
        'Evento ligado às comemorações de aniversário do município, organizado pela Secretaria de Esportes e Lazer, que reúne corredores e caminhantes da cidade e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e avenidas para caminhada e corrida com as provas promovidas pela prefeitura ao longo do ano. O investimento em espaços esportivos comunitários e o calendário de corridas de rua ajudam a fortalecer o hábito de treinar mesmo diante do calor característico da região.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos setores residenciais, com porte compatível com uma cidade média que atende também os municípios vizinhos.',

  destaquesFitness: [
    'Polo do norte de Mato Grosso, com economia movida pelo agronegócio e pela pecuária.',
    'Cidade de traçado planejado, com praças e avenidas largas que favorecem a caminhada e a corrida.',
    'Calendário de corridas de rua promovidas pela prefeitura, como a Corrida Homens do Fogo.',
    'Clima equatorial quente e úmido, que exige atenção ao horário e à hidratação no treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo regional do norte mato-grossense, Colíder combina o ritmo do agronegócio com um traçado urbano que convida à atividade ao ar livre nas praças e avenidas. Em uma cidade de clima quente e úmido, um personal trainer ajuda a montar uma rotina realista, escolhendo os melhores horários, cuidando da hidratação e mantendo a constância ao longo das estações de chuva e de seca.',

  vizinhas: ['sinop-mt', 'alta-floresta-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Colíder', url: 'https://cidades.ibge.gov.br/brasil/mt/colider/panorama' },
    { nome: 'Prefeitura de Colíder', url: 'https://www.colider.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
