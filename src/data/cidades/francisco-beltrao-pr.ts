import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'francisco-beltrao-pr',
  nome: 'Francisco Beltrão',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'beltronense',
  tipo: 'cidade',

  populacao: 96666,
  populacaoAno: 2022,
  idhm: 0.774,
  idhmClasse: 'alto',
  altitudeM: 550,

  resumoEconomico:
    'Principal polo do Sudoeste do Paraná, Francisco Beltrão tem economia diversificada, ancorada na agroindústria, no cooperativismo de crédito e em forte rede de comércio e serviços que atende toda a região. A presença da UTFPR e da Unioeste reforça o perfil universitário da cidade, que funciona como centro de saúde, educação e negócios para os municípios vizinhos.',

  mercado:
    'Cidade média e em crescimento, com público universitário e renda em alta no interior, Francisco Beltrão tem mercado de academias e estúdios de musculação em expansão e demanda consistente por personal training nas áreas centrais e nos bairros de melhor renda. A cena de corrida de rua, ativa, ajuda a sustentar a procura por assessoria esportiva.',

  bairrosNobres: ['Centro', 'Industrial', 'Pinheirinho', 'Alvorada'],
  bairrosPopulares: ['Cango', 'Padre Ulrico', 'São Cristóvão', 'Júpiter'],

  parques: [
    {
      nome: 'Parque do Lago (CTG / Lago Municipal)',
      descricao:
        'Área de lazer às margens do lago, com pista para caminhada e corrida, áreas verdes e espaço para atividades ao ar livre — um dos principais points de treino da cidade.',
    },
    {
      nome: 'Parque Estadual de Francisco Beltrão (Rio Marrecas)',
      descricao:
        'Unidade de conservação ligada ao Rio Marrecas, com mata nativa e trilhas, voltada à preservação e ao contato com a natureza no entorno urbano.',
    },
    {
      nome: 'Calçadão / Praça Eduardo Virmond Suplicy',
      descricao:
        'Coração do Centro, é ponto de encontro e largada de eventos esportivos, com espaço amplo para caminhadas e atividades urbanas.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixas em vias do Centro e em avenidas principais; a extensão exata da malha municipal não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é subtropical úmido, típico do Sudoeste paranaense, com verões quentes e invernos frios, em que geadas são comuns e as temperaturas podem cair bastante à noite.',
  climaTreino:
    'No inverno, o frio exige aquecimento reforçado e atenção a horários, com treinos ao ar livre mais confortáveis no meio do dia. No verão, vale priorizar o começo da manhã ou o fim de tarde para correr e treinar fora.',

  mobilidade:
    'Centro de referência do Sudoeste do Paraná, Francisco Beltrão é servida pela BR-483 e por rodovias estaduais que conectam a cidade a Pato Branco e a Cascavel, além do aeroporto regional que amplia o acesso ao município.',

  corridas: [
    {
      nome: 'Evolua em Movimento — Etapa Francisco Beltrão',
      descricao:
        'Corrida de rua promovida pela cooperativa Evolua, com percursos que costumam variar entre 5 km e 10 km, reunindo grande público na cidade.',
    },
    {
      nome: 'Corrida Laranja Cresol',
      descricao:
        'Prova de rua de 5 km organizada pela Cresol, com largada no Calçadão, unindo esporte e ação comunitária.',
    },
    {
      nome: 'Corrida Rotam do 21º BPM',
      descricao:
        'Corrida de rua promovida pela Polícia Militar, parte do calendário esportivo local que movimenta os corredores da região.',
    },
  ],
  culturaEsportiva:
    'Francisco Beltrão tem cena esportiva ativa, com um calendário regular de corridas de rua organizadas por cooperativas, empresas e instituições locais, além da influência do público universitário, que sustenta a procura por academias e treino orientado.',
  academias:
    'A oferta de academias e estúdios de musculação cresce junto com a cidade, atendendo tanto o público universitário quanto os moradores das áreas centrais e de melhor renda, e é complementada pelos parques e pelas pistas públicas.',

  destaquesFitness: [
    'Parque do Lago: pista de caminhada e corrida e o principal point de treino ao ar livre.',
    'Cena de corrida de rua ativa, com provas recorrentes de cooperativas e instituições.',
    'Cidade universitária (UTFPR e Unioeste), que reforça a demanda por academias e personal.',
    'Calçadão no Centro como palco de eventos esportivos e largadas de corridas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo do Sudoeste paranaense, com perfil universitário e renda em ascensão, Francisco Beltrão tem no Parque do Lago e na sua cena de corrida de rua bons aliados para quem treina. Um personal trainer ajuda a aproveitar as pistas e academias da cidade com método, respeitando o frio intenso do inverno.',

  vizinhas: ['pato-branco-pr', 'cascavel-pr', 'foz-do-iguacu-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Francisco Beltrão', url: 'https://cidades.ibge.gov.br/brasil/pr/francisco-beltrao/panorama' },
    { nome: 'Prefeitura de Francisco Beltrão', url: 'https://franciscobeltrao.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/4108403' },
  ],
  atualizadoEm: '2026-06-29',
};
