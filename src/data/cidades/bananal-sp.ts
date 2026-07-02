import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bananal-sp',
  nome: 'Bananal',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'bananalense',
  tipo: 'cidade',

  populacao: 10109,
  populacaoAno: 2022,
  idhm: 0.733,
  idhmClasse: 'alto',
  altitudeM: 454,

  resumoEconomico:
    'No extremo leste do Vale do Paraíba paulista, na divisa com o Rio de Janeiro e aos pés da Serra da Bocaina, Bananal foi um dos municípios mais ricos do Brasil no auge do ciclo do café, no século XIX, quando chegou a ser um dos principais centros econômicos do Império. Esse passado deixou um dos conjuntos de casarões e fazendas históricas mais bem preservados do Vale Histórico paulista, muitas hoje reaproveitadas como pousadas e hotéis-fazenda. A economia atual gira em torno do turismo histórico e de natureza — impulsionado pelo Centro Histórico, pela Estação Ecológica de Bananal e pela proximidade do Parque Nacional da Serra da Bocaina —, da administração pública e de uma agropecuária de menor escala.',

  mercado:
    'O mercado fitness de Bananal é muito pequeno, compatível com um município de cerca de 10 mil habitantes voltado à administração pública, ao turismo e à zona rural: não há redes de academia, e a oferta se resume a poucos espaços locais de musculação e treino funcional. Parte da demanda por preparo físico está ligada ao próprio perfil turístico da cidade, com visitantes que buscam trekking, cavalgadas em fazendas históricas e passeios a cachoeiras, o que abre espaço para personal trainers capazes de atender tanto moradores quanto quem passa pela cidade em busca de atividade ao ar livre.',

  bairrosNobres: ['Centro Histórico'],
  bairrosPopulares: ['Rancho Grande', 'Zona Rural'],

  parques: [
    {
      nome: 'Estação Ecológica de Bananal',
      descricao:
        'Unidade de conservação que protege remanescentes de Mata Atlântica na Serra da Bocaina e reúne a Cachoeira das Sete Quedas, conjunto de sete quedas d\'água formadas pelo mesmo curso de água; as visitas, feitas mediante agendamento, incluem trilhas de diferentes níveis de dificuldade.',
    },
    {
      nome: 'Parque Nacional da Serra da Bocaina',
      descricao:
        'Unidade de conservação federal criada em 1971 na divisa entre São Paulo e Rio de Janeiro, com parte de seu território no entorno de Bananal; é referência nacional em trekking, com destaque para a histórica Trilha do Ouro, antigo caminho colonial usado no transporte de ouro entre Minas Gerais e o litoral.',
    },
    {
      nome: 'Centro Histórico de Bananal',
      descricao:
        'Núcleo urbano tombado, com casarões do ciclo do café, a estação ferroviária centenária e a Igreja Matriz do Senhor Bom Jesus do Livramento, de 1811, na praça central; as ruas de calçamento antigo e o entorno da estação servem de percurso para caminhadas curtas.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária formal no município; o deslocamento entre a sede, as fazendas históricas e os pontos de visitação da Serra da Bocaina se dá majoritariamente por estradas rurais, também usadas para caminhada, corrida e passeios a cavalo.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos mais secos e amenos; a sede do município fica a 454 m de altitude, o que suaviza o calor em relação a trechos mais baixos do Vale do Paraíba, enquanto os pontos mais elevados da Serra da Bocaina, no entorno, têm temperaturas ainda mais baixas.',
  climaTreino:
    'A altitude moderada da sede favorece o treino ao ar livre na maior parte do ano, mas as chuvas de verão pedem atenção a trilhas e estradas rurais, que podem ficar escorregadias; em dias frios de inverno, o aquecimento antes de atividades ao ar livre é ainda mais importante.',

  mobilidade:
    'O principal acesso rodoviário é pela Rodovia dos Tropeiros (SP-068), que liga a Rodovia Presidente Dutra (BR-116), em Guaratinguetá, a Bananal, passando por Silveiras, Areias, Arapeí e São José do Barreiro; do lado fluminense, a cidade se conecta a Barra Mansa pela RJ-157. O transporte coletivo é limitado, com poucas linhas regionais de ônibus por dia ligando o município a cidades vizinhas do Vale Histórico e do sul fluminense.',

  corridas: [
    {
      nome: 'Corrida do Malte – Bananal',
      descricao:
        'Corrida de rua de 5 km disputada no Centro Histórico de Bananal, com temática de cultura cervejeira e integração comunitária, aberta a corredores de diferentes níveis.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local está ligada ao turismo de natureza e de aventura da Serra da Bocaina: trekking em trilhas como a do Ouro, cavalgadas em fazendas históricas do ciclo do café e caminhadas até cachoeiras, como as Sete Quedas, dentro da Estação Ecológica de Bananal. A cidade também tem, mais recentemente, uma corrida de rua própria, a Corrida do Malte, realizada pelo Centro Histórico.',
  academias:
    'A oferta de academias é bastante restrita, sem redes presentes no município; a estrutura se limita a pequenos espaços locais de musculação e treino funcional, perfil compatível com uma cidade pequena de vocação rural e turística.',

  destaquesFitness: [
    'Passado de maior riqueza do Império no auge do café, hoje preservado em casarões e fazendas históricas que sustentam o turismo local.',
    'Estação Ecológica de Bananal, com a Cachoeira das Sete Quedas e trilhas na Mata Atlântica da Serra da Bocaina.',
    'Proximidade do Parque Nacional da Serra da Bocaina, incluindo trechos da histórica Trilha do Ouro.',
    'Cavalgadas em fazendas centenárias e a Corrida do Malte, prova de rua realizada no Centro Histórico tombado.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 500,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequena e marcada pelo legado do ciclo do café, Bananal combina um centro histórico tombado com a natureza da Serra da Bocaina ao redor. Como o mercado formal de academias é escasso, um personal trainer que una treino de força a preparo físico para trilhas, cavalgadas e caminhadas ao ar livre tende a ser o caminho mais prático para moradores e visitantes manterem a rotina de atividade física no município.',

  vizinhas: ['barra-mansa-rj', 'angra-dos-reis-rj', 'sao-jose-do-barreiro-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Bananal', url: 'https://cidades.ibge.gov.br/brasil/sp/bananal/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Bananal', url: 'https://www.bananal.sp.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
