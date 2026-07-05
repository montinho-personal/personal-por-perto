import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'camacan-ba',
  nome: 'Camacã',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'camacanense',
  tipo: 'cidade',

  populacao: 22579,
  populacaoAno: 2022,
  idhm: 0.581,
  idhmClasse: 'baixo',
  altitudeM: 180,

  resumoEconomico:
    'No sul da Bahia, na microrregião de Ilhéus-Itabuna, Camacã é uma das cidades que mais sentiu a ascensão e a queda do cacau baiano. Na década de 1970, o município chegou a ser um dos maiores produtores mundiais da lavoura, com cerca de 1,3 milhão de arrobas colhidas em um só ano — mais até que Ilhéus —, e teve em Luciano José de Santana o que se considerava o maior produtor individual de cacau do mundo. A praga da vassoura-de-bruxa devastou os cacauais em 1989 e mergulhou a economia local em crise, da qual a cidade ainda se recupera: hoje a lavoura resiste com o plantio de variedades enxertadas mais resistentes, e a prefeitura mantém programas de assistência técnica e capacitação rural para fortalecer a cacauicultura, que segue como a principal atividade econômica do município.',

  mercado:
    'O mercado de personal trainers em Camacã é pequeno, típico de uma cidade média do interior cacaueiro ainda em recuperação econômica. A procura por acompanhamento individualizado tende a vir de produtores rurais, comerciantes e servidores públicos do Centro, concentrada em poucas academias e estúdios locais.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Zona Rural (entorno das fazendas de cacau)'],

  parques: [
    {
      nome: 'Praça da Feira',
      descricao:
        'Praça central do Centro de Camacã, na Avenida dos Pioneiros, principal via onde se concentram o comércio e os órgãos públicos municipais; é ponto de encontro e de caminhada leve no dia a dia da cidade.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o deslocamento de bicicleta acontece nas ruas do Centro e nas estradas vicinais que levam às fazendas de cacau da zona rural.',

  clima:
    'O clima é tropical úmido, sem estação seca definida, com temperaturas médias mensais acima de 20 °C o ano todo — máximas superiores a 24 °C e mínimas em torno de 21 °C. Os meses mais quentes vão de novembro a março, os mais amenos concentram-se em junho e agosto, e a pluviosidade anual passa de 1.300 mm, com umidade relativa em torno de 80% e menor volume de chuva em agosto e setembro.',
  climaTreino:
    'O calor e a umidade elevados o ano inteiro pedem treinos nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; como praticamente não há mês seco, vale sempre ter uma alternativa coberta para os dias de chuva mais forte, comuns mesmo fora do que seria a "estação chuvosa" em outras regiões do Nordeste.',

  mobilidade:
    'O acesso rodoviário liga Camacã a Itabuna, principal polo urbano da região, a cerca de 85 km de distância — trajeto de pouco mais de 1 hora. O deslocamento dentro da cidade é feito majoritariamente a pé, de moto ou por veículos particulares, comum em municípios do interior cacaueiro.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva de Camacã gira em torno da Secretaria Municipal de Esportes e do uso cotidiano das ruas e da Praça da Feira, no Centro, para caminhada; não há calendário de provas de rua consolidado, e a rotina de atividade física ainda concorre com o trabalho rural ligado à lavoura de cacau, que ocupa boa parte da população.',
  academias:
    'A oferta de academias e espaços de treino é modesta, concentrada no Centro, com estabelecimentos de musculação de pequeno porte compatíveis com uma cidade média do interior baiano em recuperação econômica após a crise do cacau.',

  destaquesFitness: [
    'Economia historicamente ligada ao cacau: nos anos 1970, Camacã chegou a ser um dos maiores produtores mundiais da lavoura.',
    'Recuperação da cacauicultura após a praga da vassoura-de-bruxa (1989), com variedades enxertadas resistentes e apoio técnico da prefeitura.',
    'Clima tropical úmido sem estação seca, quente e úmido o ano inteiro, com chuvas distribuídas mesmo nos meses de "inverno".',
    'Acesso rodoviário a Itabuna, a cerca de 85 km, principal referência urbana e de serviços da região cacaueira.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 95,
    mensalMin: 200,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 280,
  },

  conclusao:
    'Marcada pela história do cacau — da fartura das décadas de 1970 e 1980 à crise da vassoura-de-bruxa e à lenta recuperação atual —, Camacã tem no trabalho rural e no Centro da cidade o cenário possível para a atividade física. Um personal trainer ajuda a organizar uma rotina de treino constante, respeitando o calor úmido típico do sul baiano e as poucas estruturas disponíveis na cidade.',

  vizinhas: ['itabuna-ba', 'itapetinga-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Camacã', url: 'https://cidades.ibge.gov.br/brasil/ba/camacan/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Camacã — História', url: 'https://camacan.ba.gov.br/historia' },
  ],
  atualizadoEm: '2026-07-05',
};
