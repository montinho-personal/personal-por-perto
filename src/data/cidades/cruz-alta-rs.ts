import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cruz-alta-rs',
  nome: 'Cruz Alta',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'cruz-altense',
  tipo: 'cidade',

  populacao: 58913,
  populacaoAno: 2022,
  idhm: 0.750,
  idhmClasse: 'alto',
  altitudeM: 452,

  resumoEconomico:
    'Terra natal do escritor Erico Verissimo, Cruz Alta fica no planalto médio gaúcho, sobre a Coxilha Grande, e tem na agropecuária a base da economia. A soja é o grande motor do agronegócio regional, acompanhada por trigo, milho e pecuária, com forte presença de cooperativas, armazenagem e máquinas agrícolas. Situada em entroncamento rodoferroviário, a cidade conta com porto seco e concentra comércio e serviços que atendem toda a região centro-norte do estado.',

  mercado:
    'Como cidade média do interior gaúcho, Cruz Alta tem um mercado fitness consolidado em torno de academias locais de musculação e treino funcional, com procura crescente por personal trainers entre quem busca acompanhamento individualizado. A vocação para corridas de rua e o clima frio no inverno ajudam a sustentar a demanda por orientação profissional ao longo do ano.',

  bairrosNobres: ['Centro', 'São José', 'Lizabel', 'São Miguel'],
  bairrosPopulares: ['Aldeia', 'Patronato', 'Lava-Pés', 'Promorar'],

  parques: [
    {
      nome: 'Praça da Bandeira',
      descricao:
        'Praça central que recebe o tradicional Brique da Praça aos domingos; o entorno arborizado e os calçadões são ponto de caminhada e encontro no coração da cidade.',
    },
    {
      nome: 'Praça Itararé',
      descricao:
        'Largo histórico ligado à antiga viação férrea, no trecho que rendeu a Cruz Alta a fama de pequena Paris da Coxilha Grande; espaço tradicional de convívio e atividade ao ar livre no centro.',
    },
    {
      nome: 'Parque de Exposições',
      descricao:
        'Área ampla usada para feiras e eventos do agronegócio, cujas vias e espaços abertos servem de percurso para caminhada e corrida fora dos dias de evento.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas do entorno rural do planalto.',

  clima:
    'O clima é subtropical úmido (Cfa), com as quatro estações bem marcadas: verões quentes e úmidos e invernos frios, com geadas frequentes e temperaturas que podem se aproximar de zero por influência da altitude do planalto médio. As chuvas se distribuem ao longo do ano, sem estação seca definida.',
  climaTreino:
    'O frio do inverno pede aquecimento mais longo e roupa adequada para o treino ao ar livre, enquanto o calor úmido do verão favorece os horários de início e fim do dia, com atenção à hidratação. A boa distribuição de chuvas ao longo do ano torna útil ter um plano alternativo em ambiente coberto.',

  mobilidade:
    'Cruz Alta é um entroncamento rodoferroviário do centro-norte gaúcho: a BR-158 cruza a cidade no sentido norte-sul, a BR-377 faz a ligação a leste e a RS-342 dá acesso a oeste. A cidade conta ainda com porto seco e ramal ferroviário voltados ao escoamento da produção agrícola, e o transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Rústica do Trabalhador Antônio Rubatini Murussi',
      descricao:
        'Uma das corridas de rua mais tradicionais do interior do estado, disputada no 1º de maio e acompanhada pela Corrida de Rua Adaptada, reunindo centenas de atletas pelas ruas da cidade.',
    },
    {
      nome: 'Circuito Sesc de Corridas',
      descricao:
        'Etapa do circuito estadual de corridas de rua promovido pelo Sesc/RS, que tem em Cruz Alta uma das praças de prova da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a tradição das corridas de rua, com provas consolidadas no calendário, o uso das praças e do centro histórico para caminhada e o gosto regional por atividade ao ar livre, sempre moldado pelas estações bem definidas do planalto gaúcho.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Terra natal de Erico Verissimo, no planalto médio gaúcho sobre a Coxilha Grande.',
    'Tradição em corridas de rua, com provas consolidadas como a Rústica do Trabalhador.',
    'Clima subtropical de quatro estações, com invernos frios e geadas que pedem treino adaptado.',
    'Polo do agronegócio da soja e entroncamento rodoferroviário com porto seco.',
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
    'No coração do planalto gaúcho, Cruz Alta une a tradição das corridas de rua, as praças do centro histórico e um clima de quatro estações que exige adaptar o treino ao frio do inverno e ao calor úmido do verão. Um personal trainer ajuda a organizar a rotina respeitando as estações, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['ijui-rs', 'carazinho-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Cruz Alta', url: 'https://cidades.ibge.gov.br/brasil/rs/cruz-alta/panorama' },
    { nome: 'Prefeitura de Cruz Alta', url: 'https://cruzalta.atende.net/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
