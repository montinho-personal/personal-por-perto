import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maravilha-sc',
  nome: 'Maravilha',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'maravilhense',
  tipo: 'cidade',

  populacao: 28251,
  populacaoAno: 2022,
  idhm: 0.781,
  idhmClasse: 'alto',
  altitudeM: 625,

  resumoEconomico:
    'No Extremo-Oeste catarinense, Maravilha é um polo regional formado pela colonização de descendentes de alemães e italianos a partir dos anos 1950. A economia gira em torno da agroindústria de aves e suínos — com forte presença do complexo cooperativo da Aurora (Coopercentral) — somada à produção de grãos como milho e soja, ao comércio e a uma indústria diversificada. Sede da Associação dos Municípios de Entre Rios (Amerios) e de Agência de Desenvolvimento Regional, a cidade concentra serviços de saúde, educação e comércio que atendem toda a microrregião.',

  mercado:
    'Como polo de serviços do Extremo-Oeste, Maravilha tem um mercado fitness mais aquecido do que o de municípios vizinhos de mesmo porte, impulsionado pela renda da agroindústria e pela população flutuante que vem da região em busca de saúde e educação. A procura por personal trainers cresce entre quem busca acompanhamento individualizado em academias locais e treino orientado para aproveitar as áreas verdes e praças da cidade.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Jardim', 'Universitário'],
  bairrosPopulares: ['Floresta', 'Progresso', 'São José', 'Novo Bairro'],

  parques: [
    {
      nome: 'Parque das Águas',
      descricao:
        'Área verde com jardins, lagos e pista de caminhada em torno do espelho d’água, além de fonte luminosa — um dos espaços mais usados para caminhada, corrida leve e treino ao ar livre na cidade.',
    },
    {
      nome: 'Parque Natural Teixeira Soares',
      descricao:
        'Reserva com mata nativa, trilhas e espaços de lazer em meio à natureza, indicada para caminhada e atividades ao ar livre com clima mais ameno sob a vegetação.',
    },
    {
      nome: 'Praça Cidade das Crianças',
      descricao:
        'Em frente à prefeitura, na Avenida Euclides da Cunha, reúne academia ao ar livre, quadras de futebol, vôlei de areia e basquete, sendo ponto de encontro para exercício e lazer no centro.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos de avenidas centrais; boa parte do pedal e da corrida acontece nas vias urbanas e no entorno das praças e parques da cidade.',

  clima:
    'O clima é subtropical (mesotérmico úmido), com as quatro estações bem definidas: verões quentes e invernos frios, típicos do Oeste catarinense, onde a temperatura pode cair bastante e há geadas ocasionais nos meses mais frios. As chuvas são bem distribuídas ao longo do ano.',
  climaTreino:
    'A amplitude entre verão quente e inverno rigoroso pede ajuste de roupa e horário: nos dias quentes vale treinar cedo ou no fim da tarde, com hidratação reforçada; no inverno, o aquecimento prévio ganha importância e os ambientes cobertos viram alternativa nos dias frios e úmidos.',

  mobilidade:
    'Maravilha é cortada pela BR-282, principal eixo que liga o Oeste ao restante de Santa Catarina, com entroncamento próximo à BR-158, o que reforça seu papel de polo regional. O transporte urbano é feito por ônibus e a cidade serve de referência de acesso e serviços para os municípios vizinhos do Extremo-Oeste.',

  corridas: [
    {
      nome: 'Circuito de Corrida de Rua AABB Maravilha',
      descricao:
        'Prova de corrida de rua realizada na cidade, que movimenta corredores locais e da região pelas ruas e avenidas de Maravilha.',
    },
    {
      nome: 'Corrida do Autismo',
      descricao:
        'Evento de corrida e caminhada com caráter solidário, organizado por entidade local, que percorre vias urbanas reunindo a comunidade em torno da causa.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças e parques para caminhada e corrida, provas de rua que reúnem a comunidade e a tradição de clubes e eventos ligados à colonização e à vida no interior, com forte apelo às áreas verdes da cidade.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, em porte compatível com um polo de serviços do interior catarinense.',

  destaquesFitness: [
    'Polo regional do Extremo-Oeste catarinense, sede da Amerios, com serviços que atendem toda a microrregião.',
    'Parque das Águas e praças com academias ao ar livre como espaços de caminhada, corrida e treino.',
    'Clima subtropical com quatro estações bem definidas, que pede ajuste de horário e roupa entre verão e inverno.',
    'Economia movida pela agroindústria de aves e suínos e pela produção de grãos, herança da colonização alemã e italiana.',
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
    'Polo de serviços do Extremo-Oeste catarinense, Maravilha combina boa qualidade de vida, áreas verdes e um clima de estações bem marcadas que exige adaptar o treino ao longo do ano. Um personal trainer ajuda a organizar a rotina aproveitando as praças e parques da cidade, ajustando horários ao calor do verão e ao frio do inverno e mantendo a constância em todas as estações.',

  vizinhas: ['chapeco-sc', 'xanxere-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Maravilha', url: 'https://cidades.ibge.gov.br/brasil/sc/maravilha/panorama' },
    { nome: 'Prefeitura de Maravilha', url: 'https://maravilha.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
