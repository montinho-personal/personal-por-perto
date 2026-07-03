import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palotina-pr',
  nome: 'Palotina',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'palotinense',
  tipo: 'cidade',

  populacao: 35011,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 333,

  resumoEconomico:
    'Colonizada a partir de 1940 por famílias vindas do Rio Grande do Sul e de Santa Catarina — descendentes de alemães, italianos, poloneses e ucranianos —, Palotina emancipou-se em 1960 e deve o nome à devoção a São Vicente Palloti, dos padres pallotinos que acompanharam a colonização. Hoje a cidade é sede da C.Vale Cooperativa Agroindustrial, a segunda maior cooperativa agropecuária do Brasil, com atuação em cinco estados e no Paraguai e o maior abatedouro de peixes do país, além de forte presença em aves, suínos, laticínios e grãos como soja, milho e trigo. A economia é reforçada pela I.Riedi, também sediada no município, e pelo campus da UFPR em Palotina, com cursos como Agronomia, Medicina Veterinária e Engenharia de Aquicultura.',

  mercado:
    'A renda gerada pela sede da C.Vale e pela cadeia agroindustrial sustenta um público com poder aquisitivo relevante para uma cidade de porte médio, somado ao perfil jovem e universitário trazido pelo campus da UFPR. O mercado fitness combina academias locais de musculação e funcional, boxes de crossfit e opções de personal trainer, com procura em alta entre trabalhadores da cooperativa, produtores rurais e estudantes.',

  bairrosNobres: ['Centro', 'Interlagos', 'Jardim Social', 'Jardim Itália'],
  bairrosPopulares: ['COHAPAR', 'Ouro Verde', 'Jequitibá', 'Osvaldo Cruz'],

  parques: [
    {
      nome: 'Lago Municipal de Palotina',
      descricao:
        'Área verde arborizada com pista de caminhada e corrida ao redor do lago, iluminação noturna e academia popular; recebe aulas gratuitas de educação física e yoga em dias da semana.',
    },
    {
      nome: 'Parque Municipal dos Pioneiros',
      descricao:
        'Uma das principais áreas verdes da cidade, com espaço para caminhada, ciclismo, piquenique, quadras de futebol e vôlei e playground.',
    },
    {
      nome: 'Parque Estadual de São Camilo',
      descricao:
        'Unidade de conservação de 400,8 hectares a cerca de 6 km do centro, às margens do rio São Camilo — um dos últimos remanescentes de floresta da região, com trilhas para quem busca contato com a natureza.',
    },
    {
      nome: 'Praça Amadeo Piovesan',
      descricao:
        'Principal ponto de encontro da cidade, com área verde, playground e equipamentos de academia ao ar livre; recebe eventos e é ponto de largada de corridas de rua locais.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada no entorno do Lago Municipal e de vias centrais; grande parte do pedal e da corrida acontece em praças, no parque dos Pioneiros e nas ruas arborizadas da cidade.',

  clima:
    'O clima é subtropical úmido (Cfa), com verões longos, quentes e úmidos, e invernos curtos que podem trazer geadas e mínimas próximas de zero grau; a temperatura média fica em torno de 22 °C, com máximas que passam de 40 °C no verão.',
  climaTreino:
    'O verão quente e úmido pede treino nas primeiras horas do dia ou no fim da tarde, com hidratação reforçada, enquanto os invernos amenos — com eventuais geadas — costumam favorecer o treino ao ar livre durante boa parte do ano.',

  mobilidade:
    'O acesso rodoviário a Palotina é feito pelas rodovias estaduais PR-182 e PR-364, além da BR-467; o contorno viário da cidade (PR-182), com 15,2 km, foi inaugurado em 2026 para desviar o tráfego pesado ligado ao agronegócio do centro urbano. O deslocamento interno é predominantemente por carro e moto, e a cidade fica a cerca de 60 km de Toledo e 99 km de Cascavel.',

  corridas: [
    {
      nome: 'Corrida "Corra com a Polícia Militar"',
      descricao:
        'Prova de rua com percursos de 5 km e 10 km, largada na Praça Amadeo Piovesan; a 2ª edição, em 2026, reuniu mais de 800 participantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é impulsionada pela Associação de Corredores de Rua de Palotina (CORPA), que leva atletas locais a provas na região, e por eventos próprios como a corrida com a Polícia Militar, além do uso do Lago Municipal e da Praça Amadeo Piovesan para caminhada, corrida e ginástica ao ar livre.',
  academias:
    'A oferta reúne academias locais de musculação e funcional, como a Duo Fitness, boxes de crossfit e estúdios de personal trainer, complementados pela academia popular do Lago Municipal e pelos equipamentos de ginástica da Praça Amadeo Piovesan.',

  destaquesFitness: [
    'Sede da C.Vale, a segunda maior cooperativa agropecuária do Brasil — economia forte e renda estável ligada ao agronegócio.',
    'Lago Municipal com pista de caminhada e corrida, iluminação noturna e aulas gratuitas de educação física e yoga.',
    'Campus da UFPR em Palotina, que traz público jovem e universitário para o mercado fitness.',
    'Parque Estadual de São Camilo, remanescente florestal a poucos minutos do centro, opção de treino em contato com a natureza.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Cidade de colonização recente e forte identidade agroindustrial, Palotina combina a renda gerada pela C.Vale com o público jovem do campus da UFPR e espaços como o Lago Municipal e o Parque Estadual de São Camilo para o treino ao ar livre. Um personal trainer encontra aqui um público disposto a investir em saúde, em uma cidade de porte médio com boas condições para treinar durante praticamente todo o ano.',

  vizinhas: ['toledo-pr', 'marechal-candido-rondon-pr', 'cascavel-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Palotina', url: 'https://cidades.ibge.gov.br/brasil/pr/palotina/panorama' },
    { nome: 'Prefeitura de Palotina', url: 'https://palotina.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
