import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'areias-sp',
  nome: 'Areias',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'areiense',
  tipo: 'cidade',

  populacao: 3577,
  populacaoAno: 2022,
  idhm: 0.697,
  idhmClasse: 'médio',
  altitudeM: 519,

  resumoEconomico:
    'No extremo leste do Vale do Paraíba paulista, na divisa com o Rio de Janeiro, Areias nasceu em 1748 como freguesia de pouso de tropeiros na antiga rota entre São Paulo e Rio de Janeiro — hoje a Estrada dos Tropeiros (SP-068), que liga Silveiras a Bananal passando pela cidade. Foi um dos primeiros municípios paulistas a cultivar café, chegando a produzir cerca de 100 mil arrobas em 1838, e a riqueza do ciclo cafeeiro deixou casarões coloniais, a Igreja Matriz de Sant\'Ana e prédios históricos que hoje sustentam o turismo local. A economia atual é pequena e concentrada no setor público, em serviços e no turismo rural e histórico ligado às fazendas de café e à Serra da Bocaina, com a pecuária leiteira como principal atividade agropecuária.',

  mercado:
    'O mercado fitness de Areias é muito reduzido, compatível com um município de pouco mais de 3,5 mil habitantes: não há redes de academia, e a estrutura formal de treino se limita a poucos espaços locais. Parte da procura por orientação física vem do fluxo de visitantes atraídos pelos casarões do centro histórico, pelas fazendas de hospedagem rural e pelo acesso à Serra da Bocaina, o que favorece personal trainers que trabalhem com caminhada, trekking leve e atividades ao ar livre para moradores e turistas.',

  bairrosNobres: ['Centro Histórico'],
  bairrosPopulares: ['Zona Rural'],

  parques: [
    {
      nome: 'Centro Histórico de Areias',
      descricao:
        'Núcleo urbano que preserva casarões coloniais do ciclo do café, a Casa da Câmara e Cadeia (hoje Casa da Cultura) e a Igreja Matriz de Sant\'Ana, erguida entre 1792 e 1874 — ruas de calçamento antigo que servem de percurso para caminhadas curtas pelo entorno da sede do município.',
    },
    {
      nome: 'Represa do Funil',
      descricao:
        'Reservatório formado pelo rio Paraíba do Sul na divisa de Areias com Resende e Itatiaia, no Rio de Janeiro, usado para pesca e passeios de barco — opção de atividade ao ar livre na área rural do município.',
    },
    {
      nome: 'Serra da Bocaina',
      descricao:
        'A cidade integra, ao lado de São José do Barreiro, Cunha, Silveiras, Arapeí e Bananal, a região da Serra da Bocaina, com altitudes entre 1.000 e 2.080 m; trilhas e o Parque Nacional da Serra da Bocaina ficam acessíveis pelos municípios vizinhos, sobretudo São José do Barreiro.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária no município; os deslocamentos entre a sede e a zona rural, incluindo o entorno das fazendas históricas, se dão por estradas municipais também usadas para caminhada e pedal.',

  clima:
    'A cerca de 519 m de altitude, Areias tem clima tropical de altitude típico do Vale do Paraíba, com verões quentes e chuvosos e invernos secos e mais amenos do que o litoral próximo, ainda que menos frios do que os municípios vizinhos situados em cotas mais altas da Serra da Bocaina, como Cunha.',
  climaTreino:
    'A altitude moderada favorece o treino ao ar livre na maior parte do ano, com atenção ao calor e à umidade do verão; no inverno seco, as manhãs mais frias pedem aquecimento antes de caminhadas e atividades na área rural.',

  mobilidade:
    'O principal acesso é a Estrada dos Tropeiros (SP-068), rodovia histórica que liga Silveiras a Bananal passando por Areias, Queluz, São José do Barreiro e Arapeí. De São Paulo, capital, a cerca de 250 km, o trajeto mais comum segue pela Rodovia Presidente Dutra (BR-116) até a SP-244, de onde se acessa a SP-068. O município faz divisa com Resende (RJ) a nordeste, São José do Barreiro a leste e sudeste, Cunha a sudoeste, Silveiras a oeste e Queluz a noroeste; o transporte público é limitado a linhas regionais de ônibus, e a maior parte dos deslocamentos depende de veículo próprio.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local está ligada ao turismo rural e histórico: caminhadas pelo centro colonial entre casarões e igrejas, cavalgadas e vivências em fazendas de hospedagem que remontam ao ciclo do café, pesca e passeios de barco na Represa do Funil, além do acesso, pelos municípios vizinhos, às trilhas da Serra da Bocaina. Não há tradição consolidada de provas de corrida de rua no município.',
  academias:
    'A oferta de academias é muito restrita, sem redes presentes na cidade; a estrutura se resume a poucos espaços locais, compatível com o porte pequeno e o perfil rural e turístico do município.',

  destaquesFitness: [
    'Centro histórico com casarões do ciclo do café, a Igreja Matriz de Sant\'Ana e ruas de calçamento antigo, cenário para caminhadas curtas pela sede do município.',
    'Represa do Funil, na divisa com Resende e Itatiaia (RJ), usada para pesca e passeios de barco na zona rural.',
    'Integra a região da Serra da Bocaina ao lado de São José do Barreiro, Cunha, Silveiras, Arapeí e Bananal, com acesso a trilhas de montanha pelos municípios vizinhos.',
    'Turismo rural em fazendas históricas de hospedagem, com cavalgadas e vivência no campo somando-se à pecuária leiteira, principal atividade agropecuária do município.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequena e histórica, Areias tem no centro colonial, na Represa do Funil e na proximidade com a Serra da Bocaina seu principal cenário para atividade física ao ar livre. Como o mercado formal de academias é praticamente inexistente, um personal trainer que atue com treino adaptável ao ambiente rural e histórico tende a ser a alternativa mais prática para moradores e visitantes manterem a constância no município.',

  vizinhas: ['sao-jose-do-barreiro-sp', 'cunha-sp', 'resende-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Areias', url: 'https://cidades.ibge.gov.br/brasil/sp/areias/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Areias', url: 'https://www.areias.sp.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
