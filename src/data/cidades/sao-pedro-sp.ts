import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-pedro-sp',
  nome: 'São Pedro',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-pedrense',
  tipo: 'cidade',

  populacao: 38256,
  populacaoAno: 2022,
  idhm: 0.755,
  idhmClasse: 'alto',
  pibPerCapita: 32496,
  pibPerCapitaAno: 2023,
  altitudeM: 580,

  resumoEconomico:
    'São Pedro fica no centro do estado de São Paulo, na Região Metropolitana de Piracicaba, e é uma das estâncias turísticas paulistas, título recebido em 1979. O nome da cidade se confunde com o do termalismo regional: foi em solo são-pedrense que, na década de 1920, perfurações em busca de petróleo revelaram lençóis de água sulfurosa que deram origem à vizinha Águas de São Pedro, pequeno município encravado dentro do território são-pedrense. Hoje a economia local combina o turismo de águas — com destaque para o Thermas de São Pedro, parque aquático de água quente com uma das maiores piscinas de ondas do estado — o turismo de aventura na Serra do Itaqueri (trilhas, cachoeiras e parapente) e a rede hoteleira voltada a um público de bem-estar e terceira idade, além de atividades agropecuárias características do interior paulista.',

  mercado:
    'Por ser uma cidade média de vocação turística, o mercado fitness de São Pedro é enxuto e concentrado em academias locais de musculação e treino funcional. A forte presença de turismo de águas e de um público de terceira idade cria demanda por personal trainers voltados a hidroginástica, mobilidade e treino de baixo impacto, enquanto a vocação para esportes de aventura na Serra do Itaqueri abre espaço para preparo físico de trilha e atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Botânico II', 'Vila Rica', 'Jardim Itália'],
  bairrosPopulares: ['Jardim São Pedro', 'Vila Nova', 'Jardim Mariluz', 'Jardim Holiday'],

  parques: [
    {
      nome: 'Parque Marcelo Golinelli',
      descricao:
        'Localizado na encosta da Serra do Itaqueri, reúne mirantes, quiosques e trilhas de caminhada com vista para a região — ponto usado por quem busca treino ao ar livre em meio à natureza.',
    },
    {
      nome: 'Cachoeira Escorregador',
      descricao:
        'Sequência de quedas-d\'água e piscinas naturais na Serra do Itaqueri, acessada por trilha curta e de baixa dificuldade; um dos símbolos do turismo de natureza da cidade.',
    },
    {
      nome: 'Parque Aureliano Esteves',
      descricao:
        'Mirante municipal de onde, em dias claros, é possível avistar cidades vizinhas como Piracicaba e Rio Claro; funciona como espaço de caminhada e contemplação na área urbana.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, própria de uma cidade média do interior; a caminhada e a corrida se concentram nas ruas do Centro, no entorno dos parques municipais e nas trilhas da Serra do Itaqueri.',

  clima:
    'O clima é tropical com inverno seco (Aw na classificação de Köppen), com temperatura média anual em torno de 22 °C e precipitação concentrada no verão. Os cerca de 580 metros de altitude da sede amenizam um pouco o calor típico do interior paulista, e o inverno é mais seco e ameno.',
  climaTreino:
    'O verão quente e chuvoso pede treino ao ar livre nos horários mais frescos, de manhã cedo ou no fim da tarde, com hidratação reforçada; o inverno seco costuma ser mais estável para caminhada, corrida e trilhas na Serra do Itaqueri.',

  mobilidade:
    'São Pedro se conecta à região por meio da Rodovia Cornélio Pires (SP-127), que liga o município a Piracicaba e Rio Claro, e da SP-304, que dá acesso à área do Thermas de São Pedro. A cidade fica a cerca de 30 km de Piracicaba e a aproximadamente 190 km da capital paulista. O deslocamento interno é feito majoritariamente por veículo próprio, com linhas de ônibus regionais ligando São Pedro a Águas de São Pedro e Piracicaba.',

  corridas: [
    {
      nome: 'Corrida Adventure São Pedro',
      descricao:
        'Prova de rua com apoio da Prefeitura de São Pedro, com percursos de corrida e caminhada e largada em pontos centrais da cidade, reunindo moradores em uma cidade de perfil turístico.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de São Pedro combina o legado do turismo de águas — hidroginástica e caminhada ligadas ao público de bem-estar e terceira idade — com a vocação para esportes de aventura da Serra do Itaqueri, como trilhas, cachoeirismo e parapente, e a proximidade da região dos lagos do rio Tietê, que favorece a pesca e os esportes náuticos.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas no Centro e em bairros próximos, em porte compatível com uma cidade média de perfil turístico e voltada ao bem-estar.',

  destaquesFitness: [
    'Estância turística desde 1979, com forte tradição de turismo de águas e bem-estar, incluindo o parque aquático Thermas de São Pedro.',
    'Serra do Itaqueri: trilhas, cachoeiras como a do Escorregador e esportes de aventura como o parapente.',
    'Público expressivo de terceira idade e turismo de bem-estar, que sustenta a demanda por hidroginástica e treino de baixo impacto.',
    'Proximidade da região dos lagos do rio Tietê, com potencial para pesca e esportes náuticos.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 270,
    mensalMax: 750,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Entre águas termais, trilhas na Serra do Itaqueri e um público que mistura turistas e moradores de terceira idade, São Pedro pede um treino adaptado ao seu perfil de bem-estar. Um personal trainer ajuda a equilibrar hidroginástica e mobilidade para quem busca baixo impacto com o preparo físico necessário para aproveitar as trilhas e cachoeiras da região.',

  vizinhas: ['piracicaba-sp', 'rio-claro-sp', 'brotas-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Pedro', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-pedro/panorama' },
    { nome: 'Prefeitura de São Pedro', url: 'https://www.saopedro.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
