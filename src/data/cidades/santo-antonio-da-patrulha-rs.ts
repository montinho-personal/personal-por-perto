import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-antonio-da-patrulha-rs',
  nome: 'Santo Antônio da Patrulha',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'patrulhense',
  tipo: 'cidade',

  populacao: 42942,
  populacaoAno: 2022,
  idhm: 0.717,
  idhmClasse: 'alto',
  altitudeM: 64,

  resumoEconomico:
    'Uma das cidades mais antigas do Rio Grande do Sul, Santo Antônio da Patrulha fica na encosta entre o Litoral Norte e a Serra, a meio caminho entre Porto Alegre e o litoral. Foi declarada Capital da Cachaça, do Sonho e da Rapadura, e essa tradição de doces e do alambique se soma a uma economia diversificada: serviços e comércio respondem pela maior fatia do PIB, seguidos pela indústria (com destaque para calçados de couro e produtos alimentícios), pela administração pública e pela agropecuária. O turismo histórico-cultural, ancorado no casario colonial e nas fábricas de doces, complementa a renda local.',

  mercado:
    'Por ser uma cidade média do interior gaúcho, o mercado fitness de Santo Antônio da Patrulha é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca acompanhamento individualizado, treino para terreno de relevo ondulado e orientação para aproveitar as praças e parques da cidade como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Vila Palmeira', 'Bom Princípio', 'Cidade Alta'],
  bairrosPopulares: ['Catanduva', 'Campo do Meio', 'Vila Sírio', 'Avaí'],

  parques: [
    {
      nome: 'Parque da Guarda',
      descricao:
        'Espaço de lazer, esporte e preservação ambiental com trilhas ecológicas, áreas para piquenique e estrutura para atividades ao ar livre; abriga ainda o Museu da Cachaça, um dos símbolos culturais da cidade.',
    },
    {
      nome: 'Parque Ilha dos Açores',
      descricao:
        'Área verde de recreação na porção leste da cidade, com pistas para caminhada, lago, bancos e playground — um dos pontos mais usados por quem treina ao ar livre.',
    },
    {
      nome: 'Praça Arquipélago dos Açores (Praça da Matriz)',
      descricao:
        'Praça arborizada em frente à igreja matriz, no coração do centro histórico, usada para caminhadas e atividades leves no entorno do casario colonial.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e em estradas vicinais do interior, em meio ao relevo ondulado da encosta.',

  clima:
    'O clima é subtropical, com as quatro estações bem marcadas: verões quentes e invernos frios, com geadas frequentes nas áreas mais altas e rurais. As chuvas são bem distribuídas ao longo do ano e a umidade é elevada, típica da transição entre o litoral e a serra gaúcha.',
  climaTreino:
    'O inverno frio favorece treinos ao ar livre em qualquer horário, exigindo aquecimento cuidadoso e roupas adequadas; no verão, o calor e a umidade pedem hidratação reforçada e preferência pelo começo da manhã ou fim da tarde. O relevo ondulado é um aliado natural para treinos de subida e condicionamento.',

  mobilidade:
    'Santo Antônio da Patrulha é cortada pela BR-290, a Free Way, principal eixo que liga Porto Alegre ao Litoral Norte, com praça de pedágio no município — o que garante acesso rápido à capital e às praias. A RS-030 conecta a cidade a Osório e ao litoral, e o transporte urbano e intermunicipal é feito por ônibus, com linhas diretas para Porto Alegre e Gravataí.',

  corridas: [
    {
      nome: 'Corridas e caminhadas do calendário municipal',
      descricao:
        'A cidade recebe provas de corrida de rua e caminhadas promovidas em datas comemorativas e por grupos esportivos locais, aproveitando o centro histórico e as vias urbanas como percurso.',
    },
    {
      nome: 'Eventos esportivos regionais do Litoral Norte',
      descricao:
        'Pela posição estratégica junto à Free Way, patrulhenses participam de provas de corrida e ciclismo realizadas em municípios próximos do Litoral Norte e da região metropolitana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e parques para caminhada e corrida, o futebol amador e as atividades ao ar livre favorecidas pelo clima ameno e pelo relevo da encosta. A tradição da cachaça e da rapadura também marca a vida social, equilibrando o cardápio típico com a busca por hábitos mais ativos.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior gaúcho.',

  destaquesFitness: [
    'Capital da Cachaça, do Sonho e da Rapadura, com forte tradição de doces e alambiques.',
    'Parque da Guarda e Parque Ilha dos Açores como espaços de caminhada, trilha e treino ao ar livre.',
    'Clima subtropical de quatro estações e relevo ondulado, favoráveis a treinos de condicionamento.',
    'Posição estratégica na BR-290 (Free Way), entre Porto Alegre e o Litoral Norte.',
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
    'Cidade histórica da encosta gaúcha, entre Porto Alegre e o litoral, Santo Antônio da Patrulha reúne clima ameno, parques arborizados e relevo ondulado que pedem um treino bem planejado. Um personal trainer ajuda a aproveitar esse cenário, ajustando os horários às estações do ano e mantendo a constância para equilibrar a rotina com a tradição gastronômica local.',

  vizinhas: ['osorio-rs', 'gravatai-rs'],

  fontes: [
    {
      nome: 'IBGE Cidades — Santo Antônio da Patrulha',
      url: 'https://cidades.ibge.gov.br/brasil/rs/santo-antonio-da-patrulha/panorama',
    },
    { nome: 'Prefeitura de Santo Antônio da Patrulha', url: 'https://www.santoantoniodapatrulha.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
