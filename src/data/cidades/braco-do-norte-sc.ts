import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'braco-do-norte-sc',
  nome: 'Braço do Norte',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'braço-nortense',
  tipo: 'cidade',

  populacao: 33773,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 75,

  resumoEconomico:
    'Encravada no Sul catarinense, entre a serra e o litoral, Braço do Norte é referência estadual em suinocultura, reunindo uma das maiores concentrações de produtores independentes de suínos do estado. A economia se apoia na agroindústria ligada à criação de suínos e aves, na agropecuária familiar e no comércio que atende a região. A colonização de origem alemã e italiana marca a cultura local, da arquitetura à gastronomia, e a cidade se firmou como ponto de passagem na rota turística que dá acesso à Serra Geral.',

  mercado:
    'Como cidade média do interior, Braço do Norte tem um mercado fitness em crescimento, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de moradores que querem acompanhamento individualizado, de quem busca treino para a rotina puxada do trabalho rural e agroindustrial e de praticantes que aproveitam o clima ameno e as áreas verdes da cidade para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Nossa Senhora de Fátima', 'São Basílio', 'Coloninha'],
  bairrosPopulares: ['Rio Bonito', 'Pinheiral', 'São Januário', 'Nossa Senhora das Graças'],

  parques: [
    {
      nome: 'Parque da Família',
      descricao:
        'Complexo esportivo e de lazer no bairro Nossa Senhora de Fátima, com área arborizada e gramada, pista de caminhada, academia ao ar livre, ginásio, quadras de areia, pista de skate e parque infantil — o principal espaço público para treino e atividade física na cidade.',
    },
    {
      nome: 'Praça Padre Roer',
      descricao:
        'Praça central no coração de Braço do Norte, ponto de encontro da cidade e referência para caminhadas leves e convivência ao ar livre no Centro.',
    },
    {
      nome: 'Orla do Rio Braço do Norte',
      descricao:
        'O rio que dá nome à cidade corta a área urbana e é cruzado pela Ponte Celso Kindermann, que liga o Centro ao bairro vizinho e tem mirantes para a paisagem do rio — entorno usado para caminhada e contemplação.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas do entorno rural, em meio a propriedades de colonização alemã e italiana.',

  clima:
    'O clima é subtropical úmido (Cfa), com as quatro estações bem marcadas. O verão é quente e chuvoso, enquanto o inverno é frio, especialmente nas proximidades da Serra Geral, com geadas e neblinas densas; em dias mais rigorosos a temperatura pode se aproximar de 0 °C junto às áreas mais baixas e ao rio.',
  climaTreino:
    'A amplitude entre verão e inverno pede ajuste de horário e de roupa: nos dias quentes, treinar cedo ou no fim da tarde com boa hidratação; no inverno frio e com geada, aquecimento mais longo e atenção a pisos escorregadios pela manhã favorecem a constância ao longo do ano.',

  mobilidade:
    'Braço do Norte se conecta à região pela SC-108, que liga o município a São Ludgero, Orleans e ao polo de Criciúma, e dá acesso à BR-101 pela região de Tubarão, a cerca de 35 km. O transporte urbano e intermunicipal é feito por ônibus, e a posição entre a serra e o litoral reforça o papel da cidade como ponto de passagem na rota turística da Serra Geral.',

  corridas: [
    {
      nome: 'Valley Run — Circuito Cortuba (etapa Braço do Norte)',
      descricao:
        'Etapa local de circuito regional de corrida de rua, com provas individuais e em duplas que movimentam corredores da cidade e do entorno.',
    },
    {
      nome: 'Corrida do Atletismo',
      descricao:
        'Prova de rua tradicionalmente ligada às celebrações esportivas do município, com percursos para diferentes níveis de corredores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso do Parque da Família e das praças centrais para caminhada e corrida, a tradição de provas de rua promovidas no calendário do município e a herança da colonização alemã e italiana, presente em festas e na vida comunitária local.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior catarinense.',

  destaquesFitness: [
    'Parque da Família, principal complexo esportivo e de lazer da cidade, com pista de caminhada e academia ao ar livre.',
    'Clima subtropical com inverno frio e geadas, que exige adaptar horários e aquecimento no treino.',
    'Cidade entre a serra e o litoral, com acesso pela SC-108 e entorno rural propício a corrida e pedal.',
    'Forte herança de colonização alemã e italiana e economia ligada à suinocultura e à agroindústria.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de clima ameno, entre a serra e o litoral catarinense, Braço do Norte oferece áreas verdes e um entorno rural convidativo para treinar ao ar livre, com a ressalva do inverno frio e das geadas. Um personal trainer ajuda a organizar a rotina respeitando as estações bem marcadas, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['tubarao-sc', 'criciuma-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Braço do Norte', url: 'https://cidades.ibge.gov.br/brasil/sc/braco-do-norte/panorama' },
    { nome: 'Prefeitura de Braço do Norte', url: 'https://bracodonorte.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
