import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'batatais-sp',
  nome: 'Batatais',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'batataense',
  tipo: 'cidade',

  populacao: 58402,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 862,

  resumoEconomico:
    'Reconhecida oficialmente como Estância Turística, Batatais fica no nordeste paulista, entre Ribeirão Preto e Franca, e tem economia apoiada na agroindústria sucroalcooleira — sedia a Usina Batatais, produtora de açúcar e etanol desde 1985 — e na agropecuária diversificada, com lavouras de cana-de-açúcar, café, milho, soja, arroz, feijão e sorgo. A indústria conta ainda com fabricantes como a Serap Plurinox, do setor de equipamentos para laticínios, e o comércio e os serviços são reforçados pelo ensino superior do Claretiano Centro Universitário. O agronegócio responde por parcela relevante dos empregos formais da cidade.',

  mercado:
    'O mercado fitness de Batatais é típico de uma cidade média do interior paulista, com academias de bairro e estúdios concentrados na região central, além de profissionais que atendem em domicílio. A presença de estudantes do Claretiano Centro Universitário e de trabalhadores do agronegócio e da indústria sustenta a procura por acompanhamento personalizado, com espaços públicos como o Lago Artificial e o Bosque Municipal ampliando as opções de treino ao ar livre.',

  bairrosNobres: ['Centro', 'Castelo', 'Jardim Bandeirantes', 'Jardim dos Ipês'],
  bairrosPopulares: ['Santa Cruz', 'Cachoeira', 'Riachuelo', 'Santo Antônio'],

  parques: [
    {
      nome: 'Bosque Municipal Dr. Alberto Gaspar Gomes',
      descricao:
        'Grande área verde com eucaliptos e árvores nativas, playground infantil, quadra de bocha e pista de caminhada, um dos principais espaços públicos de treino ao ar livre da cidade.',
    },
    {
      nome: 'Lago Artificial Ophélia Borges Silva Alves',
      descricao:
        'Lago construído na década de 1980 na área central, cercado por vegetação nativa, com academia ao ar livre, parque infantil e pista usada para caminhada e corrida.',
    },
    {
      nome: 'Parque Náutico Engenheiro Carlos Zamboni',
      descricao:
        'Espaço com paisagens naturais, cachoeiras e piscinas semi-naturais, ponto de lazer e contato com a natureza na região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, típica de cidade média do interior; o Lago Artificial e o Bosque Municipal concentram as principais pistas de caminhada e corrida usadas no dia a dia.',

  clima:
    'Com altitude de 862 metros, Batatais tem clima tropical de altitude, com verões quentes e chuvosos e invernos mais secos e amenos que os das cidades mais baixas da região canavieira vizinha.',
  climaTreino:
    'A altitude ajuda a suavizar o calor típico do interior paulista, mas o verão ainda pede treino ao ar livre nos horários mais frescos, cedo pela manhã ou no fim da tarde; o inverno seco costuma ser o período mais confortável para atividades externas, com atenção à hidratação.',

  mobilidade:
    'O principal acesso é pela Rodovia Cândido Portinari (SP-334), que liga Batatais a Ribeirão Preto (cerca de 42 km) e Franca (cerca de 48 km); a Rodovia Anhanguera (SP-330) amplia a conexão com o restante do interior paulista e com a capital, a cerca de 353 km. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Movimenta Batatais',
      descricao:
        'Principal evento de corrida e caminhada da cidade, com provas de 5 km e 10 km e largada na Avenida Presidente Washington Luís; já teve edições com mais de mil participantes e integra também atividades de ciclismo.',
    },
  ],
  culturaEsportiva:
    'O Claretiano Centro Universitário, que mantém pista de atletismo, já sediou etapa sub-regional do Pró-Atletismo do estado de São Paulo, reforçando a tradição esportiva ligada ao ensino superior local. A corrida de rua ganha corpo com o Movimenta Batatais, enquanto o Lago Artificial e o Bosque Municipal são os principais pontos de encontro para caminhada e treino ao ar livre.',
  academias:
    'A oferta reúne academias de bairro como Mourão, Arena Fitness, Olympus e Acad Corpus, com musculação, treino funcional e, em alguns casos, modalidades como pilates e lutas, complementadas por personal trainers em atendimento particular.',

  destaquesFitness: [
    'Estância Turística com altitude de 862 metros, o que ameniza o calor em relação às cidades mais baixas da região canavieira.',
    'Lago Artificial Ophélia Borges Silva Alves e Bosque Municipal Dr. Alberto Gaspar Gomes, com pistas de caminhada, corrida e academia ao ar livre.',
    'Sede da Usina Batatais e polo agroindustrial da cana-de-açúcar, com forte presença do agronegócio na economia e no emprego local.',
    'Cidade universitária, com o Claretiano Centro Universitário e sua pista de atletismo, que já recebeu etapa do Pró-Atletismo estadual.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Estância Turística de altitude e polo agroindustrial da cana-de-açúcar, Batatais combina clima mais ameno, espaços públicos como o Lago Artificial e o Bosque Municipal, e uma vida universitária que movimenta a cultura esportiva local. Um personal trainer ajuda a organizar o treino aproveitando esses espaços ao ar livre e respeitando os horários mais quentes do verão.',

  vizinhas: ['ribeirao-preto-sp', 'franca-sp', 'sertaozinho-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Batatais', url: 'https://cidades.ibge.gov.br/brasil/sp/batatais/panorama' },
    { nome: 'Prefeitura de Batatais', url: 'https://www.batatais.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3505906' },
  ],
  atualizadoEm: '2026-07-03',
};
