import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'monte-mor-sp',
  nome: 'Monte Mor',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'montemorense',
  tipo: 'cidade',

  populacao: 64662,
  populacaoAno: 2022,
  idhm: 0.733,
  idhmClasse: 'alto',
  altitudeM: 560,

  resumoEconomico:
    'Município da Região Metropolitana de Campinas, Monte Mor tem economia fortemente industrial: a indústria responde pela maior parte do valor adicionado da cidade, com destaque para o setor de embalagens (a Tetra Pak é a maior empresa local) e para máquinas e equipamentos. A posição estratégica no interior paulista atraiu também operações de logística e transporte de carga, que crescem no entorno da rodovia SP-101. Serviços, comércio e uma agropecuária de menor peso completam a base econômica.',

  mercado:
    'Como cidade de porte médio inserida em uma região metropolitana pujante, Monte Mor tem um mercado fitness em expansão, apoiado no crescimento populacional e industrial. A oferta se concentra em academias de bairro e estúdios locais, e há espaço para o trabalho de personal trainers atendendo tanto quem prefere treino individualizado quanto trabalhadores da indústria e da logística que buscam encaixar exercício na rotina.',

  bairrosNobres: ['Centro', 'Jardim Paulista', 'Parque Residencial São Clemente', 'Jardim Paviotti'],
  bairrosPopulares: ['Nova Monte Mor', 'Jardim Alvorada', 'Vila Bertini', 'Jardim Progresso'],

  parques: [
    {
      nome: 'Praça Princesa Isabel (Parque Imperial)',
      descricao:
        'Espaço central de convivência muito usado como ponto de encontro e largada de eventos de rua na cidade, servindo de referência para caminhadas e treinos no perímetro urbano.',
    },
    {
      nome: 'Avenida Ayrton Senna da Silva',
      descricao:
        'Via larga que se tornou o principal palco das corridas de rua e dos treinos abertos de corredores de Monte Mor, com percurso urbano plano e bem sinalizado.',
    },
    {
      nome: 'Entorno do rio Capivari',
      descricao:
        'O rio Capivari corta a orla do município e é parte da identidade local; suas margens e áreas próximas oferecem trechos para caminhada e atividade ao ar livre no cotidiano da cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas e vias locais, com atenção redobrada no tráfego que se dirige à SP-101.',

  clima:
    'O clima é tropical de altitude (Cwa), com verões quentes, abafados e chuvosos (de novembro a março) e invernos mais curtos, secos e agradáveis. A cerca de 560 metros de altitude, a temperatura ao longo do ano costuma variar aproximadamente de 13 °C a 30 °C, com noites mais amenas no inverno.',
  climaTreino:
    'No verão úmido e quente, o ideal é treinar cedo ou no fim da tarde, com boa hidratação, evitando o pico de calor do início da tarde. O inverno seco favorece o treino ao ar livre, embora o ar mais seco e as manhãs frias peçam aquecimento adequado antes das atividades.',

  mobilidade:
    'A mobilidade de Monte Mor é fortemente dependente da rodovia SP-101 (Jornalista Francisco Aguirre Proença), praticamente a única via de ligação com Campinas, Hortolândia e o restante da Região Metropolitana de Campinas. Isso concentra o tráfego e gera congestionamentos recorrentes; o transporte metropolitano por ônibus intermunicipal também circula por essa rodovia, o que reforça o peso do eixo rodoviário na rotina da cidade.',

  corridas: [
    {
      nome: 'Monte Mor Run',
      descricao:
        'Corrida de rua realizada no município, com prova de 5 km e percurso urbano, que reúne corredores locais e da região.',
    },
    {
      nome: 'Night Run Monte Mor',
      descricao:
        'Prova noturna com largada na Avenida Ayrton Senna da Silva, oferecendo modalidades de corrida e caminhada e reunindo centenas de participantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local ganhou força com as corridas de rua e os treinos abertos de corredores promovidos na cidade, sobretudo no eixo da Avenida Ayrton Senna. Caminhada, corrida e atividades em praças completam o cotidiano de quem se exercita ao ar livre em Monte Mor.',
  academias:
    'A oferta é composta principalmente por academias de musculação e estúdios de treino funcional distribuídos pelos bairros centrais e residenciais, em porte compatível com uma cidade média em crescimento na Região Metropolitana de Campinas.',

  destaquesFitness: [
    'Corridas de rua consolidadas, como a Monte Mor Run e a Night Run, no eixo da Avenida Ayrton Senna.',
    'Clima tropical de altitude, com verão quente e úmido e inverno seco favorável ao treino ao ar livre.',
    'Cidade industrial e de logística na Região Metropolitana de Campinas, com público de trabalhadores buscando rotina de exercício.',
    'Rio Capivari e praças centrais como espaços de referência para caminhada e atividade física.',
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
    'Cidade industrial em crescimento na Região Metropolitana de Campinas, Monte Mor combina clima tropical de altitude, corridas de rua ativas e uma rotina marcada pelo eixo da SP-101. Um personal trainer ajuda a organizar o treino em torno dos horários mais frescos do dia, aproveitar as avenidas e praças da cidade e manter a constância ao longo das estações.',

  vizinhas: ['indaiatuba-sp', 'campinas-sp', 'sumare-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Monte Mor', url: 'https://cidades.ibge.gov.br/brasil/sp/monte-mor/panorama' },
    { nome: 'Prefeitura de Monte Mor', url: 'https://www.montemor.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
