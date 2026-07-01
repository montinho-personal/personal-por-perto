import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'holambra-sp',
  nome: 'Holambra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'holambrense',
  tipo: 'cidade',

  populacao: 15094,
  populacaoAno: 2022,
  idhm: 0.793,
  idhmClasse: 'alto',
  altitudeM: 608,

  resumoEconomico:
    'Conhecida como a Capital Nacional das Flores, Holambra fica na Região Metropolitana de Campinas e nasceu da colonização holandesa iniciada em 1948, quando imigrantes vindos da Europa do pós-guerra se instalaram na região. A economia gira em torno da floricultura e da produção de plantas ornamentais, que respondem por boa parte do que é comercializado no país e têm na Cooperativa Veiling Holambra seu principal centro de negócios. O turismo é o segundo motor da cidade, puxado pela arquitetura de inspiração neerlandesa, pelos campos de flores e pela Expoflora, maior exposição de flores e plantas ornamentais da América Latina.',

  mercado:
    'Por ser um município pequeno e com renda acima da média regional, o mercado fitness de Holambra é enxuto porém qualificado, formado por academias locais, estúdios e profissionais que atendem tanto moradores quanto quem trabalha na floricultura e no turismo. A boa qualidade de vida e o clima ameno favorecem a procura por personal trainers voltados a treino ao ar livre, condicionamento e rotina de saúde, num público que valoriza acompanhamento próximo e personalizado.',

  bairrosNobres: ['Centro', 'Jardim Holanda', 'Parque dos Ipês', 'Nova Holanda'],
  bairrosPopulares: ['Imigrantes', 'Fundão', 'Palmeiras', 'Camanducaia'],

  parques: [
    {
      nome: 'Moinho Povos Unidos',
      descricao:
        'Réplica de moinho holandês inaugurada em 2008 na entrada da cidade, uma das mais altas da América Latina, cercada por um parque com áreas verdes e alamedas — ponto de referência usado como largada de provas e como espaço de caminhada e passeio ao ar livre.',
    },
    {
      nome: 'Campos e estufas de flores',
      descricao:
        'Os campos de cultivo e as estufas espalhados pela zona rural são o cartão-postal da cidade; as estradas vicinais e alamedas entre plantações servem de percurso para caminhada, corrida e pedal em meio à paisagem florida.',
    },
    {
      nome: 'Parque da Expoflora',
      descricao:
        'Área que sedia a Expoflora em setembro e outros eventos ao longo do ano; fora do período de exposição, o entorno arborizado e as vias largas atraem quem busca atividade física ao ar livre.',
    },
  ],
  ciclovias:
    'A malha cicloviária urbana é modesta, típica de uma cidade pequena, mas as estradas vicinais e as alamedas entre os campos de flores oferecem trechos tranquilos e cênicos bastante usados por ciclistas e corredores da região.',

  clima:
    'O clima é tropical de altitude, ameno e agradável durante boa parte do ano, com médias anuais em torno de 21 °C. O verão (de dezembro a março) é a estação mais quente e chuvosa, enquanto o inverno traz noites mais frias e dias ensolarados, com termômetros que podem cair para perto de 14 °C nas madrugadas.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre na maior parte do ano, com destaque para as manhãs e o fim de tarde; no verão convém antecipar o horário por causa do calor e das chuvas do fim da tarde, e no inverno vale reforçar o aquecimento nas madrugadas mais frias.',

  mobilidade:
    'Holambra se conecta à Região Metropolitana de Campinas principalmente pela Rodovia Prefeito Aziz Lian (SP-107), que liga a cidade ao entroncamento com a SP-340 e dá acesso a Jaguariúna, Santo Antônio de Posse e Mogi Mirim. Campinas fica a cerca de 40 km e São Paulo a aproximadamente 130 km pelas rodovias Bandeirantes e Anhanguera. O transporte é feito por ônibus municipais e linhas intermunicipais, com fluxo turístico intenso nos fins de semana.',

  corridas: [
    {
      nome: 'Corrida das Flores',
      descricao:
        'Prova de rua com percurso de 7 km e caminhada, que passa por alamedas e pontos turísticos da cidade das flores, com largada na região do Moinho Povos Unidos.',
    },
    {
      nome: 'Corrida Turística de Holambra',
      descricao:
        'Corrida de rua que leva atletas e caminhantes por alguns dos pontos turísticos mais conhecidos da cidade, com largada no Moinho Povos Unidos e percurso ambientado nos campos e no cenário florido.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia no clima ameno e na paisagem florida: caminhadas e corridas pelas alamedas e estradas entre os campos, pedal pelas vicinais e provas de rua que exploram os pontos turísticos. A herança holandesa e a vocação para o turismo dão às atividades ao ar livre um cenário particular.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional e por estúdios menores, distribuídos pela área urbana, com porte compatível com o de um município pequeno do interior paulista.',

  destaquesFitness: [
    'Capital Nacional das Flores, com campos de cultivo e alamedas que servem de cenário para caminhada, corrida e pedal.',
    'Clima tropical de altitude, ameno o ano todo, favorável ao treino ao ar livre.',
    'Moinho Povos Unidos e provas como a Corrida das Flores como referência para atividades ao ar livre.',
    'Colonização holandesa e forte vocação turística, com a Expoflora atraindo público em setembro.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 800,
    onlineMin: 130,
    onlineMax: 390,
  },

  conclusao:
    'Pequena, próspera e cercada por campos de flores, Holambra reúne clima ameno de altitude e paisagem convidativa para o treino ao ar livre. Um personal trainer ajuda a aproveitar as alamedas, estradas vicinais e parques da cidade, montando uma rotina consistente que combine saúde, condicionamento e qualidade de vida ao longo do ano.',

  vizinhas: ['jaguariuna-sp', 'mogi-mirim-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Holambra', url: 'https://cidades.ibge.gov.br/brasil/sp/holambra/panorama' },
    { nome: 'Prefeitura de Holambra', url: 'https://www.holambra.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
