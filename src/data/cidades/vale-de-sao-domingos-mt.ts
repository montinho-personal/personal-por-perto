import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vale-de-sao-domingos-mt',
  nome: 'Vale de São Domingos',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'vale-dominguense',
  tipo: 'cidade',

  populacao: 2904,
  populacaoAno: 2022,
  idhm: 0.656,
  idhmClasse: 'médio',
  pibPerCapita: 28002,
  pibPerCapitaAno: 2023,
  altitudeM: 315,

  resumoEconomico:
    'Vale de São Domingos é um dos menores municípios de Mato Grosso, no extremo oeste do estado, próximo à fronteira com a Bolívia. Emancipado de Pontes e Lacerda em 1999, faz parte da Região Turística Vale do Guaporé — território de transição entre os biomas Cerrado, Amazônia e Pantanal, cortado pelos rios Guaporé e São Domingos. A economia é pequena e depende sobretudo da agropecuária, com a pecuária leiteira como atividade de maior peso: a agropecuária responde por cerca de 44,5% do PIB municipal, seguida da administração pública (37,5%), dos serviços (16%) e de uma indústria quase inexistente (2%), num PIB total de aproximadamente R$ 81 milhões.',

  mercado:
    'Por ser um município muito pequeno, Vale de São Domingos não sustenta uma estrutura de academias de porte; a atividade física organizada se concentra em iniciativas da prefeitura e em profissionais que atendem em domicílio ou se deslocam a partir de Pontes e Lacerda, cidade-polo da região a cerca de 30 km.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Zona Rural'],

  parques: [
    {
      nome: 'Praça central',
      descricao:
        'Espaço de convivência da pequena sede municipal, ponto natural de caminhada e encontro no início e no fim do dia, dado o porte reduzido da área urbana.',
    },
    {
      nome: 'Rios Guaporé e São Domingos',
      descricao:
        'Os rios que dão nome à região oferecem pesca esportiva, remo e passeios de barco em meio à paisagem de transição entre Cerrado, Amazônia e Pantanal, uma alternativa de atividade física e lazer ao ar livre para moradores e visitantes.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária formal; os deslocamentos de bicicleta acontecem pelas poucas ruas da sede e pelas estradas rurais que ligam o município a Pontes e Lacerda e a Jauru.',

  clima:
    'O clima é tropical, quente e úmido, com queda perceptível de temperatura e de chuvas durante o inverno (junho a agosto); no restante do ano predominam calor e umidade elevados, típicos da transição entre Cerrado, Amazônia e Pantanal no oeste de Mato Grosso.',
  climaTreino:
    'Nos meses mais quentes e úmidos, o ideal é treinar cedo pela manhã ou no fim da tarde, com hidratação constante; o inverno mais seco e ameno costuma favorecer a atividade física ao ar livre durante boa parte do dia.',

  mobilidade:
    'O acesso é feito por rodovias estaduais que ligam a sede a Pontes e Lacerda (cerca de 30 km) e a Jauru (cerca de 22 km), municípios da Região Geográfica Imediata de Pontes e Lacerda-Comodoro; dali, o trajeto segue até Cuiabá, a mais de 440 km de distância. O deslocamento interno é feito quase exclusivamente por veículo próprio, e boa parte dos serviços de maior porte é buscada em Pontes e Lacerda.',

  corridas: [],
  culturaEsportiva:
    'Por ser um município pequeno e essencialmente rural, a cultura esportiva organizada é limitada, apoiada em iniciativas pontuais da prefeitura e no uso informal da praça central e dos rios da região para caminhada, pesca e lazer ativo.',
  academias:
    'A estrutura de academias é praticamente inexistente dentro do município; quem busca musculação ou treino orientado com maior variedade de equipamentos normalmente recorre a Pontes e Lacerda, e o acompanhamento de personal trainer costuma acontecer em domicílio ou em espaços improvisados na sede.',

  destaquesFitness: [
    'Um dos menores municípios de Mato Grosso, na Região Turística Vale do Guaporé, área de transição entre Cerrado, Amazônia e Pantanal.',
    'Economia pequena apoiada na pecuária leiteira e na administração pública, com PIB de cerca de R$ 81 milhões.',
    'Rios Guaporé e São Domingos oferecem pesca esportiva e lazer ao ar livre em meio a paisagem preservada.',
    'Estrutura de academias praticamente inexistente, o que torna o personal trainer domiciliar a principal alternativa de treino orientado.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequeno município rural do extremo oeste de Mato Grosso, Vale de São Domingos vive da pecuária leiteira e da proximidade com a natureza preservada do Vale do Guaporé. Diante da quase ausência de academias, um personal trainer que atenda em domicílio é, na prática, o caminho mais viável para quem busca treino orientado com regularidade no município.',

  vizinhas: ['pontes-e-lacerda-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Vale de São Domingos', url: 'https://cidades.ibge.gov.br/brasil/mt/vale-de-sao-domingos/panorama' },
    { nome: 'Prefeitura de Vale de São Domingos', url: 'https://www.valedesaodomingos.mt.gov.br/' },
    { nome: 'Descubra Mato Grosso — Região Turística Vale do Guaporé', url: 'https://descubramatogrosso.com.br/regioes/vale-do-guapore/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/5108352' },
  ],
  atualizadoEm: '2026-07-05',
};
