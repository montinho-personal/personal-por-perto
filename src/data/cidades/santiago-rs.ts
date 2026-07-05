import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santiago-rs',
  nome: 'Santiago',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'santiaguense',
  tipo: 'cidade',

  populacao: 48938,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',
  pibPerCapita: 38041.83,
  pibPerCapitaAno: 2023,
  altitudeM: 409,

  resumoEconomico:
    'Conhecida como "Terra dos Poetas" por ter sido berço de nomes como Aureliano de Figueiredo Pinto, Oracy Dorneles e Caio Fernando Abreu, Santiago fica na região central do Rio Grande do Sul, em terras que já foram posto da antiga Estância de São Miguel, um dos grandes centros de criação de gado das reduções jesuíticas. Hoje é a cidade mais populosa de sua microrregião, com um PIB de cerca de R$ 1,9 bilhão: os serviços respondem por 55,9% do valor adicionado, a agropecuária por 23,5%, a administração pública por 14,6% e a indústria por apenas 6%. O campo — soja, arroz, trigo e pecuária de corte e leite — segue como o motor por trás do comércio e dos serviços que sustentam a economia urbana.',

  mercado:
    'Como cidade média de referência regional em serviços, Santiago tem um mercado fitness mais estruturado que o de municípios vizinhos menores, com academias de musculação espalhadas pelo Centro e por bairros como Vila Itú. A procura por personal trainer vem tanto de quem trabalha no comércio e nos serviços da cidade quanto de produtores rurais e suas famílias, que buscam constância de treino apesar da rotina do campo e das variações do clima ao longo do ano.',

  bairrosNobres: ['Centro', 'Vila Itú', 'São José'],
  bairrosPopulares: ['Vila Nova', 'Vila Rica', 'Ney Pereira', 'São Jorge'],

  parques: [
    {
      nome: 'Rua dos Poetas',
      descricao:
        'Cartão-postal da cidade, reúne bustos, poemas, bancos e postes ao longo de quatro quarteirões dedicados a mais de 30 escritores nascidos ou ligados a Santiago — um percurso plano e arborizado, muito usado para caminhada no dia a dia.',
    },
    {
      nome: 'Praça Moisés Viana',
      descricao:
        'Praça central arborizada, com monumento a Nossa Senhora da Conceição, padroeira da cidade; ponto de encontro tradicional e apoio para caminhadas e alongamento ao ar livre no coração de Santiago.',
    },
  ],
  ciclovias:
    'Santiago não tem uma malha cicloviária contínua; o deslocamento de bicicleta acontece nas ruas do Centro e da Rua dos Poetas e nas estradas vicinais que ligam a cidade à zona rural produtora de soja e arroz.',

  clima:
    'O clima é subtropical, com verões quentes (recorde de 40,9 °C em janeiro de 2022) e invernos frios, com geadas e mínimas que já chegaram a -3 °C; as chuvas se distribuem ao longo do ano, sem estação seca definida.',
  climaTreino:
    'No verão, o calor pede treino ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada. No inverno, o frio e as geadas frequentes exigem aquecimento mais longo e, em muitos dias, favorecem a migração do treino para ambientes fechados.',

  mobilidade:
    'A BR-287 é o principal acesso rodoviário, ligando Santiago a Santa Maria (cerca de 95 km a leste) e à Fronteira Oeste a partir de São Vicente do Sul e Jaguari. O terminal rodoviário, na Rua Flôres da Cunha, a menos de 1 km do Centro, concentra as linhas intermunicipais; o transporte urbano é feito por ônibus.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local convive com a identidade literária da cidade: a Rua dos Poetas e a Praça Moisés Viana funcionam como pontos de caminhada no dia a dia, enquanto o futebol amador e as atividades dos clubes sociais movimentam boa parte do lazer esportivo de fim de semana.',
  academias:
    'A oferta de academias e estúdios de musculação e treino funcional é a mais robusta entre as cidades da microrregião de Santiago, concentrada no Centro e em bairros como Vila Itú, com espaço também para o trabalho de personal trainers em atendimento individual e em domicílio.',

  destaquesFitness: [
    '"Terra dos Poetas": Rua dos Poetas com quatro quarteirões dedicados a escritores, boa para caminhada no Centro.',
    'Origem na antiga Estância de São Miguel, um dos grandes centros de criação de gado das reduções jesuíticas.',
    'Economia apoiada em soja, arroz e pecuária, com maior peso de serviços entre as cidades da microrregião.',
    'Verões com recordes acima de 40 °C e invernos com geadas exigem ajustar o horário e a intensidade do treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade média e polo de serviços do centro gaúcho, Santiago une a tradição literária da Rua dos Poetas a uma economia apoiada na soja, no arroz e na pecuária. Um personal trainer ajuda a manter a constância do treino diante do calor forte do verão e do frio das geadas de inverno, aproveitando os espaços do Centro e adaptando a rotina às estações do ano.',

  vizinhas: ['santa-maria-rs', 'cruz-alta-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Santiago', url: 'https://cidades.ibge.gov.br/brasil/rs/santiago/panorama' },
    { nome: 'Prefeitura Municipal de Santiago', url: 'https://www.santiago.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Rádio Santiago FM — Estimativa populacional', url: 'https://radiosantiago.com.br/geral/cidade/estimativa-populacional-de-santiago-passa-de-50-mil-habitantes/' },
  ],
  atualizadoEm: '2026-07-05',
};
