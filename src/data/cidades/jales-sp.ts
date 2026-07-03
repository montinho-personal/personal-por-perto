import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jales-sp',
  nome: 'Jales',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'jalesense',
  tipo: 'cidade',

  populacao: 48776,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 478,

  resumoEconomico:
    'Jales é o principal polo do extremo noroeste paulista, funcionando como centro de referência regional em saúde, educação, comércio e serviços para dezenas de municípios vizinhos. A Santa Casa de Jales é o único hospital geral da cidade e atende uma região de mais de 120 mil habitantes, ao lado de UPA 24h, SAMU, AME e uma unidade do Hospital do Amor de Barretos dedicada a tratamento oncológico. Na economia, a cana-de-açúcar é a principal atividade, puxada pela usina do grupo Jalles (marca Itajá), que gera milhares de empregos diretos, complementada pela pecuária de corte e leite e por um comércio forte que atrai consumidores de cidades do entorno.',

  mercado:
    'O papel de Jales como polo regional de saúde, educação e comércio sustenta uma classe média de profissionais liberais, comerciantes e trabalhadores de serviços que valoriza qualidade de vida. Essa base econômica, somada ao público que se desloca de cidades vizinhas para consultas, exames e compras, mantém uma demanda constante por academias, estúdios e personal trainers, mais concentrada nos bairros centrais e de melhor renda.',

  bairrosNobres: ['Centro', 'Jardim Europa', 'Jardim do Bosque', 'Recanto do Lago'],
  bairrosPopulares: ['Jardim Santo Expedito', 'Jardim Aracuã', 'Vila Pinheiro', 'Jardim Alvorada'],

  parques: [
    {
      nome: 'Parque do Rio Grande',
      descricao:
        'Principal espaço de esporte ao ar livre da cidade, com quadras poliesportivas, pista de caminhada, ciclovia, academia ao ar livre e um lago onde é praticada a pesca esportiva.',
    },
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde revitalizada com plantio de árvores nativas e frutíferas, oferecendo espaços de convivência arborizados para caminhada e contato com a natureza no tecido urbano.',
    },
    {
      nome: 'Pista de Caminhada Carlos José Sacco "Sakinho"',
      descricao:
        'Pista com pouco mais de mil metros de extensão na Avenida Engenheiro Euphly Jalles, entre os bairros Jardim Aclimação e Jardim Estados Unidos, voltada à caminhada e à corrida de moradores da região.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovia no entorno do Parque do Rio Grande, um dos poucos trechos estruturados; o restante dos deslocamentos de bicicleta e o treino ao ar livre se apoiam nas avenidas e nas pistas de caminhada distribuídas pelos bairros.',

  clima:
    'O clima é tropical, típico do extremo noroeste paulista, com inverno seco e verão quente e chuvoso — março costuma ser o mês mais chuvoso do ano. As temperaturas elevadas predominam na maior parte do calendário, com máximas que frequentemente passam dos 30 °C.',
  climaTreino:
    'O calor forte da região favorece o treino ao ar livre no início da manhã ou no fim da tarde, com atenção redobrada à hidratação; nos horários mais quentes do dia, ambientes climatizados tendem a ser a opção mais confortável e segura.',

  mobilidade:
    'Jales é cortada pela Rodovia Euclides da Cunha (SP-320), principal eixo do noroeste paulista que liga a cidade a Fernandópolis, Votuporanga e, por meio da SP-310, à capital. O transporte urbano é feito por ônibus com tarifa zero, em quatro linhas que partem do Terminal Rodoviário e circulam pelos bairros de hora em hora, mas boa parte dos deslocamentos ainda depende de carro e moto, comuns em cidades de porte médio do interior.',

  corridas: [
    {
      nome: 'Corrida Pedestre "Cidade de Jales"',
      descricao:
        'Prova tradicional de 10 km organizada pela Prefeitura em comemoração ao aniversário do município, em abril, com largada e chegada na Rua 13, em frente à Praça Dr. Euphly Jalles, reunindo atletas de Jales e de cidades vizinhas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Jales gira em torno do Parque do Rio Grande e das pistas de caminhada da cidade, além da tradicional Corrida Pedestre "Cidade de Jales", que movimenta corredores locais e de toda a região a cada aniversário do município. O porte médio da cidade e o papel de polo regional de saúde reforçam a valorização de hábitos de vida ativos.',
  academias:
    'A oferta de academias é compatível com o porte de polo regional da cidade, com unidades de rede e estúdios independentes de musculação, funcional e crossfit concentrados na área central e em bairros de maior movimento, como o entorno da Marginal Izaura Bertho Venturini.',

  destaquesFitness: [
    'Polo regional de saúde do noroeste paulista, com Santa Casa, UPA, AME e unidade do Hospital do Amor.',
    'Parque do Rio Grande como espaço central de treino ao ar livre, com pista, ciclovia, academia ao ar livre e lago.',
    'Corrida Pedestre "Cidade de Jales", prova tradicional de 10 km ligada ao aniversário do município.',
    'Cana-de-açúcar (usina do grupo Jalles, marca Itajá) como principal atividade econômica, ao lado da pecuária e do comércio regional.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 340,
  },

  conclusao:
    'Como polo de saúde, comércio e serviços do extremo noroeste paulista, Jales reúne uma classe média ativa e espaços como o Parque do Rio Grande para apoiar uma rotina de treino ao ar livre. Um personal trainer ajuda a organizar os horários em torno do calor característico da região e a manter a constância, aproveitando a infraestrutura esportiva da cidade ao longo do ano.',

  vizinhas: ['fernandopolis-sp', 'santa-fe-do-sul-sp', 'votuporanga-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Jales', url: 'https://cidades.ibge.gov.br/brasil/sp/jales/panorama' },
    { nome: 'Prefeitura de Jales', url: 'https://jales.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
