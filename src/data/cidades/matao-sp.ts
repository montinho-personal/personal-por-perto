import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'matao-sp',
  nome: 'Matão',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'matonense',
  tipo: 'cidade',

  populacao: 79033,
  populacaoAno: 2022,
  idhm: 0.773,
  idhmClasse: 'alto',
  altitudeM: 555,

  resumoEconomico:
    'Na Região Central do estado de São Paulo, Matão combina uma forte vocação agrícola com um parque industrial robusto. A citricultura é o carro-chefe, com vastos laranjais e a presença da Citrosuco, uma das maiores processadoras de suco de laranja do mundo. Ao lado da agroindústria, a cidade abriga a Marchesan (Tatu Marchesan), tradicional fabricante de implementos e máquinas agrícolas, além de um conjunto expressivo de metalúrgicas, indústrias têxteis e alimentícias, o que confere ao município um perfil ao mesmo tempo agrícola e industrializado.',

  mercado:
    'Como cidade média e economicamente dinâmica do interior paulista, Matão tem um mercado fitness consolidado para o seu porte, sustentado pela renda ligada à indústria e ao agronegócio. A procura por personal trainers aparece tanto entre trabalhadores que buscam encaixar o treino na rotina quanto entre quem quer acompanhamento individual para emagrecimento, condicionamento e qualidade de vida.',

  bairrosNobres: ['Centro', 'Jardim Paraíso', 'Nova Matão', 'Jardim Buscardi'],
  bairrosPopulares: ['Vila Santa Cruz', 'Parque Petrópolis', 'Parque Primavera', 'Jardim São José'],

  parques: [
    {
      nome: 'Parque Ecológico de Matão (Lago das Garças)',
      descricao:
        'Área verde com lago na região da Nova Matão, usada para caminhada, lazer ao ar livre e pesca esportiva; um dos principais espaços da cidade para atividade física em contato com a natureza.',
    },
    {
      nome: 'Praça da Matriz',
      descricao:
        'Coração do Centro, em frente à Igreja Matriz Senhor Bom Jesus, é ponto de encontro e referência urbana, com calçadas e entorno usados para caminhadas leves no dia a dia.',
    },
    {
      nome: 'Praças e parques de bairro',
      descricao:
        'A cidade conta com diversas praças e parques residenciais arborizados — como nas regiões do Parque Petrópolis e do Parque Primavera —, que servem de apoio para caminhada e treino ao ar livre próximo de casa.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em alguns trechos urbanos; boa parte do pedal e da corrida acontece nas vias da cidade e em estradas vicinais da zona rural, em meio aos laranjais.',

  clima:
    'O clima é tropical com estação seca no inverno, marcado por verões quentes e úmidos e invernos amenos e secos. As temperaturas médias variam aproximadamente entre 17 °C de mínima e 28 °C de máxima ao longo do ano, com dias bastante quentes no verão e madrugadas frescas no período seco.',
  climaTreino:
    'No verão, o calor e a umidade pedem treino bem cedo ou no fim da tarde, com hidratação reforçada; o inverno seco e ameno tende a ser o período mais confortável para atividades ao ar livre, com atenção ao ar seco em dias de baixa umidade.',

  mobilidade:
    'Matão é cortada por rodovias duplicadas que a integram à região: a SP-326 (Rodovia Brigadeiro Faria Lima) e a SP-310 (Rodovia Washington Luís), que conectam a cidade a polos como Araraquara, São Carlos, São José do Rio Preto e Ribeirão Preto. O deslocamento interno se dá por ônibus urbano, carro e bicicleta, com distâncias curtas típicas de uma cidade média.',

  corridas: [
    {
      nome: 'Provas e corridas de rua locais',
      descricao:
        'A cidade recebe corridas de rua organizadas por iniciativas locais e pelo poder público em datas comemorativas, reunindo corredores amadores da região central paulista.',
    },
    {
      nome: 'Circuitos regionais de corrida',
      descricao:
        'Matonenses costumam participar de provas em cidades vizinhas como Araraquara e São Carlos, integrando o calendário de corridas de rua da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o uso das praças e do Parque Ecológico para caminhada e corrida, a prática em academias de bairro e a participação em corridas de rua da região central paulista, num cotidiano marcado pela rotina de uma cidade industrial e agrícola.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média e economicamente ativa do interior de São Paulo.',

  destaquesFitness: [
    'Capital nacional da laranja, cercada por laranjais e com forte presença da agroindústria citrícola.',
    'Parque Ecológico (Lago das Garças) como espaço de caminhada e lazer ao ar livre.',
    'Cidade industrializada e agrícola, com renda que sustenta um mercado fitness ativo para o seu porte.',
    'Boa conexão rodoviária pela SP-326 e SP-310, integrando Matão aos polos da região central paulista.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade média do interior paulista, ao mesmo tempo agrícola e industrializada, Matão oferece estrutura e renda que favorecem uma rotina de treino constante. Um personal trainer ajuda a encaixar a atividade física na agenda corrida do dia a dia, aproveitando as praças e o Parque Ecológico e ajustando os horários ao calor do verão e ao inverno seco da região.',

  vizinhas: ['araraquara-sp', 'sao-carlos-sp', 'catanduva-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Matão', url: 'https://cidades.ibge.gov.br/brasil/sp/matao/panorama' },
    { nome: 'Prefeitura de Matão', url: 'https://www.matao.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
